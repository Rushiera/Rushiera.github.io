#!/usr/bin/env node
/* build-witness.mjs — 见证者数据快照（全量档专用）
 *
 * 为什么要有这一件：面板上的「见证者」是十一个只读判据 + 四块趋势面，分散在
 * `/api/witness`（能力与产物）、`/api/trends`（债务 / 项目生命周期 / 提交时间线）、
 * `/api/trends/modules`（模块生命周期）、`/api/entrust`（委托流转）与一堆产物目录里。
 * 站点要能离线看（file:// 双击 / GitHub Pages 静态托管），就不能运行时打端点——
 * 构建期抓一次、落成 `window.WITNESS`，页面只负责画。
 *
 * 边界（拍板 A/C 的延伸）：
 *   - 只服务 full 档：public 档不跑本脚本、不产出 witness.js；页面缺数据时显示「本档不含见证者」。
 *   - 只读：不改任何档案 / 状态文件；产物目录只 stat，不写。
 *   - 面板必须在跑（与提交时间线同一前置）；任一端点取不到即退出 1——不产出半份数据冒充完整。
 *
 * 用法（cwd 任意）：
 *   node witness/gitpage/tools/build-witness.mjs                 # 写 full/data/witness.js
 *   node witness/gitpage/tools/build-witness.mjs --dry           # 只算不写（打印摘要）
 *   node witness/gitpage/tools/build-witness.mjs --out=<dir>     # 落点覆盖（build-site 传）
 *   node witness/gitpage/tools/build-witness.mjs --panel=<url>   # 面板地址覆盖（默认 127.0.0.1:8767）
 *   ACS_CCBP_ROOT=<其他知识网根> / ACS_PANEL=<url> 亦可用环境变量覆盖
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(HERE, '..');
const ROOT = path.join(SITE, '..', '..');                       // 协议根 tools/并发协议
const CCBP = process.env.ACS_CCBP_ROOT || 'D:/Mau/CatCatBigParty';
const HIST = path.join(CCBP, 'Project', '并发协议', 'history');
const STATE = path.join(ROOT, 'state');

const argv = process.argv.slice(2);
const has = (k) => argv.includes('--' + k);
const argOf = (k, d) => {
  const hit = argv.find((a) => a.startsWith('--' + k + '='));
  return hit ? hit.slice(k.length + 3) : d;
};
const DRY = has('dry');
const OUT = path.resolve(argOf('out', path.join(SITE, 'full', 'data')));
const PANEL = (process.env.ACS_PANEL || argOf('panel', 'http://127.0.0.1:8767')).replace(/\/+$/, '');

const errors = [];
const warns = [];

/* ---------- 小工具 ---------- */
const pad2 = (n) => String(n).padStart(2, '0');
const stamp = (d) => d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate())
  + ' ' + pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
const clip = (s, n) => { const t = String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); return t.length > n ? t.slice(0, n - 1) + '…' : t; };
/** 只按长度截断、保留换行——页面 <pre> 用；clip 会折叠空白，不适合正文预览。 */
const cut = (s, n) => { const t = String(s == null ? '' : s); return t.length > n ? t.slice(0, n - 1) + '…' : t; };
/** 取文件头：总行数 + 前 maxLines 行（再按 maxChars 兜底）。读不到给 0 / 空串，不编内容。 */
function headOf(p, maxLines, maxChars) {
  try {
    const txt = fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
    const ls = txt.split('\n');
    return { lines: ls.length, text: cut(ls.slice(0, maxLines).join('\n'), maxChars) };
  } catch (e) { return { lines: 0, text: '' }; }
}
const readJson = (p, fb) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) { return fb; } };
const exists = (p) => { try { return fs.existsSync(p); } catch (e) { return false; } };

/** 递归统计：文件数 / 字节 / 最近与最旧 mtime（不存在给 null，不编 0）。
 *  最旧 + 跨度是 watch 保留面「有没有淘汰策略」的决策数据：只有份数看不出压缩空间。 */
function walkStat(dir) {
  if (!exists(dir)) return null;
  let files = 0, bytes = 0, lastMs = 0, firstMs = 0;
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    let ents;
    try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { continue; }
    for (const e of ents) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { stack.push(p); continue; }
      try {
        const st = fs.statSync(p);
        files += 1; bytes += st.size;
        if (st.mtimeMs > lastMs) lastMs = st.mtimeMs;
        if (!firstMs || st.mtimeMs < firstMs) firstMs = st.mtimeMs;
      } catch (e2) { /* 单文件读不到就跳过——下面的 files 与 bytes 只在读到时计数 */ }
    }
  }
  const spanDays = lastMs && firstMs ? Math.round((lastMs - firstMs) / 8640000) / 10 : 0;
  return {
    files, bytes,
    lastAt: lastMs ? stamp(new Date(lastMs)) : '', lastMs,
    firstAt: firstMs ? stamp(new Date(firstMs)) : '', firstMs, spanDays
  };
}

/** 目录下按 mtime 倒序取前 N 个文件（一层，不递归）。 */
function recentFiles(dir, n, filter) {
  if (!exists(dir)) return [];
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isFile()) continue;
    if (filter && !filter(e.name)) continue;
    const p = path.join(dir, e.name);
    try { out.push({ name: e.name, p, st: fs.statSync(p) }); } catch (e2) { /* 读不到就不列 */ }
  }
  out.sort((a, b) => b.st.mtimeMs - a.st.mtimeMs);
  return out.slice(0, n);
}

/** 端点取数：失败记进 errors（失败必须可见），返回 null 由调用方决定是否致命。 */
async function getJson(p) {
  try {
    const r = await fetch(PANEL + p, { signal: AbortSignal.timeout(20000) });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } catch (e) {
    errors.push('端点 ' + p + ' 取数失败：' + e.message);
    return null;
  }
}

/** 端点 POST 取数（整理面按 pids 批量问）：失败同样进 errors，不产半份冒充完整。 */
async function postJson(p, body) {
  try {
    const r = await fetch(PANEL + p, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body || {}),
      signal: AbortSignal.timeout(20000)
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } catch (e) {
    errors.push('端点 POST ' + p + ' 取数失败：' + e.message);
    return null;
  }
}

const t0 = Date.now();

/* ---------- 一、面板端点（见证者的运行时真身） ---------- */
const health = await getJson('/api/health');
const sched = await getJson('/api/sched');
const wit = await getJson('/api/witness');
const trends = await getJson('/api/trends');
const mods = await getJson('/api/trends/modules');
const entrust = await getJson('/api/entrust');
const order = await getJson('/api/projects/order');
const site = await getJson('/api/site/status');
const tasks = await getJson('/api/projects/tasks');

/* 核心面缺一不可：见证者页的主体就是它们，缺了画不出「哪块停了」。 */
if (!health || !sched || !wit || !trends || !mods || !entrust) {
  console.error('[build-witness] ERR 核心端点未取全（' + errors.join(' · ') + '）——面板在跑吗？' + PANEL);
  process.exit(1);
}
if (!order) warns.push('项目排序（/api/projects/order）未取到——四区推荐序按空集渲染');
if (!site) warns.push('站点发布状态（/api/site/status）未取到——发布段按空集渲染');
if (!tasks) warns.push('任务面（/api/projects/tasks）未取到——任务统计按空集渲染');

/* ---------- 二、索引与产物面 ---------- */
const indexFile = path.join(STATE, 'projects', 'index.json');
const idx = readJson(indexFile, null);
if (!idx || !Array.isArray(idx.items)) {
  console.error('[build-witness] ERR 项目索引不可读：' + indexFile + '——先 POST /api/projects/scan');
  process.exit(1);
}

/* 2.1 原件归档（watch）：按组给文件数 / 字节 / 最近时刻 */
const watchDir = path.join(HIST, 'watch');
const watch = [];
if (exists(watchDir)) {
  for (const e of fs.readdirSync(watchDir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const dir = path.join(watchDir, e.name);
    const s = walkStat(dir);
    if (s) {
      /* 每组带最近 8 件文件名——「想查源文本」时从这里直接找得到具体版本文件 */
      const recent = recentFiles(dir, 8, (f) => /\.(md|jsonl|txt)$/i.test(f))
        .map((f) => ({ name: f.name, at: stamp(new Date(f.st.mtimeMs)), bytes: f.st.size }));
      watch.push({ group: e.name, files: s.files, bytes: s.bytes, lastAt: s.lastAt, firstAt: s.firstAt, spanDays: s.spanDays, recent });
    }
  }
  watch.sort((a, b) => b.files - a.files);
} else warns.push('原件归档目录不存在：' + watchDir);

/* 2.2 验证卡（verify）：最近 18 份带正文预览（前 100 行 / 6000 字符）+ 全量元信息（verifyAll）。
   为什么带预览：见证者页要能点开看卡片内容——站点是离线快照（file:// 双击也算），正文必须内嵌；
   又不整库搬（136 份 ≈ 961 KB）：只对最近 18 份内嵌正文，其余只给元信息 + 路径（弹层会出声说明）。
   卡类按首行判（与面板同口径：三态 question / work / report）。 */
const verifyDir = path.join(HIST, 'verify');
/** 卡片文件名 → 项目名：`<pid>-verify.md` / `<pid>-verify-YYYYMMDD-HHmmss.md`。 */
function verifyPid(name) {
  const m = /^(.+?)-verify(?:-\d{8}-\d{6})?\.md$/i.exec(name);
  return m ? m[1] : '';
}
function verifyKindOf(firstLine) {
  const t = String(firstLine || '');
  return t.indexOf('遗留项有疑问') >= 0 ? 'question' : (t.indexOf('可直接开工') >= 0 ? 'work' : 'report');
}
const vFiles = recentFiles(verifyDir, 18, (f) => f.endsWith('.md'));
const verify = vFiles.map((f) => {
  const hd = headOf(f.p, 100, 6000);
  const firstLine = (hd.text.split('\n')[0] || '').trim();
  return {
    file: f.name, at: stamp(new Date(f.st.mtimeMs)), bytes: f.st.size,
    kind: verifyKindOf(firstLine), head: clip(firstLine, 60),
    pid: verifyPid(f.name), path: f.p, lines: hd.lines, preview: hd.text
  };
});
/* 全量 136 份的元信息（不带正文）——弹层列得全，正文只给最近 18 份 */
const verifyAll = (() => {
  if (!exists(verifyDir)) return [];
  const rows = [];
  for (const e of fs.readdirSync(verifyDir, { withFileTypes: true })) {
    if (!e.isFile() || !e.name.endsWith('.md')) continue;
    const p = path.join(verifyDir, e.name);
    let st; try { st = fs.statSync(p); } catch (e2) { continue; }
    let firstLine = '';
    try { firstLine = (fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/)[0] || '').trim(); } catch (e3) { firstLine = ''; }
    rows.push({
      file: e.name, at: stamp(new Date(st.mtimeMs)), bytes: st.size,
      kind: verifyKindOf(firstLine), pid: verifyPid(e.name), path: p
    });
  }
  rows.sort((a, b) => String(b.at).localeCompare(String(a.at)));
  return rows;
})();
const verifyTotal = verifyAll.length;

/* 2.3 档案快照 / 交接报告 / 委托卡 */
const snap = (() => {
  const dir = path.join(HIST, 'snapshots');
  const s = walkStat(dir);
  if (!s) return null;
  const items = [];
  let sets = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const p = path.join(dir, e.name);
    const subNames = fs.readdirSync(p, { withFileTypes: true })
      .filter((x) => x.isDirectory).map((x) => x.name).sort();
    const sub = subNames.length;
    const ws = walkStat(p);
    sets += sub;
    items.push({
      pid: e.name, sets: sub, files: ws ? ws.files : 0, bytes: ws ? ws.bytes : 0, lastAt: ws ? ws.lastAt : '',
      latestDir: subNames.length ? subNames[subNames.length - 1] : ''
    });
  }
  items.sort((a, b) => String(b.lastAt).localeCompare(String(a.lastAt)));
  return { projects: items.length, sets, files: s.files, bytes: s.bytes, lastAt: s.lastAt, items };
})();

const handover = (() => {
  const dir = path.join(HIST, 'handover');
  const s = walkStat(dir);
  if (!s) return null;
  const items = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const p = path.join(dir, e.name);
    const ws = walkStat(p);
    const files = fs.readdirSync(p, { withFileTypes: true }).filter((x) => x.isFile() && /\.md$/i.test(x.name)).length;
    const recent = recentFiles(p, 1, (f) => f.endsWith('.md'));
    /* 最新一份带路径与正文预览（前 24 行 / 900 字符）——交接件表点开即读，不跳目录 */
    let latest = null;
    if (recent[0]) {
      const hd = headOf(recent[0].p, 24, 900);
      latest = {
        name: recent[0].name, at: stamp(new Date(recent[0].st.mtimeMs)), bytes: recent[0].st.size,
        path: recent[0].p, lines: hd.lines, preview: hd.text
      };
    }
    items.push({
      pid: e.name, files, bytes: ws ? ws.bytes : 0, lastAt: ws ? ws.lastAt : '',
      latest
    });
  }
  items.sort((a, b) => String(b.lastAt).localeCompare(String(a.lastAt)));
  return { projects: items.length, files: s.files, bytes: s.bytes, lastAt: s.lastAt, items };
})();

const entrustCards = (() => {
  const dir = path.join(HIST, 'entrust');
  const files = recentFiles(dir, 12, (f) => f.endsWith('.md'));
  const total = exists(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.md')).length : 0;
  return {
    total,
    items: files.map((f) => ({ file: f.name, at: stamp(new Date(f.st.mtimeMs)), bytes: f.st.size }))
  };
})();

/* 2.4 架构图数据集：单项目一份（projects.js 是全局星图，*-git.js 是提交时间线——都不是三视图数据集） */
const archDir = path.join(HIST, 'arch');
const archItems = [];
let archSkeleton = 0;
if (exists(archDir)) {
  for (const e of fs.readdirSync(archDir, { withFileTypes: true })) {
    if (!e.isFile() || !e.name.endsWith('.js')) continue;
    if (e.name === 'projects.js' || e.name.endsWith('-git.js')) continue;
    const p = path.join(archDir, e.name);
    let txt = '';
    try { txt = fs.readFileSync(p, 'utf8'); } catch (err) { continue; }
    const st = fs.statSync(p);
    const ver = (txt.match(/ver:\s*'([^']*)'/) || [])[1] || '';
    const updated = (txt.match(/updated:\s*'([^']*)'/) || [])[1] || '';
    const sub = (txt.match(/sub:\s*'([^']*)'/) || [])[1] || '';
    const skeleton = (txt.split(/\r?\n/)[0] || '').indexOf('架构图骨架') >= 0;
    if (skeleton) archSkeleton += 1;
    archItems.push({
      pid: e.name.replace(/\.js$/, ''),
      bytes: st.size,
      mtime: stamp(new Date(st.mtimeMs)).slice(0, 10),
      ver, updated, skeleton, sub: clip(sub, 70)
    });
  }
  archItems.sort((a, b) => (b.bytes - a.bytes));
} else warns.push('架构图数据集目录不存在：' + archDir);

/* 2.5 投递台账：最近 15 条 + 按项目聚合（全史 1.3 MB，prompt 正文一律不进站点）。
   聚合回答「哪些项目在被反复投递、最后投的是什么、猫态分布」——只看最近 15 条会漏掉低频项目。 */
const dispatchFile = path.join(STATE, 'flow', 'dispatches.json');
const dAll = readJson(dispatchFile, { items: [] });
const dItems = Array.isArray(dAll.items) ? dAll.items : [];
const dispatchItems = dItems.slice(-15).reverse().map((x) => ({
  pid: x.pid, kind: x.kind, title: x.title || '', at: x.at || '',
  runState: (x.live && x.live.runState) || '', removed: !!x.removed,
  effort: x.effort || '', catId: x.catId ? String(x.catId).slice(-6) : ''
}));
const dispatchTotal = dItems.length;
const dispatchAgg = (() => {
  const byPid = new Map();
  const states = {};
  for (const x of dItems) {
    const pid = x.pid || '（无项目）';
    const st = (x.live && x.live.runState) || 'gone';
    states[st] = (states[st] || 0) + 1;
    const cur = byPid.get(pid) || { pid, count: 0, lastAt: '', lastKind: '', lastTitle: '', states: {}, removed: 0 };
    cur.count += 1;
    cur.states[st] = (cur.states[st] || 0) + 1;
    if (x.removed) cur.removed += 1;
    if (!cur.lastAt || String(x.at || '') >= cur.lastAt) {
      cur.lastAt = x.at || '';
      cur.lastKind = x.kind || '';
      cur.lastTitle = clip(x.title || '', 60);
    }
    byPid.set(pid, cur);
  }
  const items = [...byPid.values()].sort((a, b) => (b.count - a.count) || String(b.lastAt).localeCompare(String(a.lastAt)));
  return { projects: items.length, states, items };
})();

/* 2.6 整理任务表（verify.json）：只统计状态分布，不搬正文
   🔴 表结构是 { _note, generatedAt, items: { <pid>: {...} } }——键在 items 下，不在顶层。 */
const vj = readJson(path.join(STATE, 'flow', 'verify.json'), {});
const tidyStat = { total: 0, states: {}, kinds: {} };
for (const k of Object.keys((vj && vj.items) || {})) {
  const v = vj.items[k];
  if (!v || typeof v !== 'object' || !v.state) continue;
  tidyStat.total += 1;
  tidyStat.states[v.state] = (tidyStat.states[v.state] || 0) + 1;
  const kk = v.kind || 'verify';
  tidyStat.kinds[kk] = (tidyStat.kinds[kk] || 0) + 1;
}

/* 2.7 流水文件：只报大小与最后写入（事件 / 用量 / 开关操作） */
const flowFile = (name) => {
  const p = path.join(STATE, 'flow', name);
  if (!exists(p)) return null;
  const st = fs.statSync(p);
  return { file: name, bytes: st.size, at: stamp(new Date(st.mtimeMs)) };
};
const flowStats = ['events.jsonl', 'usage.jsonl', 'ops.jsonl', 'tool-feedback.jsonl', 'history.jsonl']
  .map(flowFile).filter(Boolean);
const projHistory = (() => {
  const p = path.join(STATE, 'projects', 'history.jsonl');
  if (!exists(p)) return null;
  const st = fs.statSync(p);
  return { file: 'state/projects/history.jsonl', bytes: st.size, at: stamp(new Date(st.mtimeMs)) };
})();
if (projHistory) flowStats.push(projHistory);

/* 2.7b 流水尾部（事件 / 开关操作 / 用量 / 工具回馈 / 项目变更）——只读尾部若干行：
   页面回答「最近发生了什么、谁翻了开关」，不整读 3.8 MB 的 events。 */
function tailLines(file, n, maxBytes) {
  if (!exists(file)) return [];
  const st = fs.statSync(file);
  const len = Math.min(st.size, maxBytes || 65536);
  const fd = fs.openSync(file, 'r');
  const buf = Buffer.alloc(len);
  fs.readSync(fd, buf, 0, len, st.size - len);
  fs.closeSync(fd);
  let txt = buf.toString('utf8');
  if (len < st.size) txt = txt.slice(txt.indexOf('\n') + 1);  // 首行可能被截断：丢掉
  const lines = txt.trim().split(/\r?\n/).filter(Boolean);
  const arr = [];
  for (const l of lines) {
    try { arr.push(JSON.parse(l)); } catch (e) { /* 坏行跳过——页面只报能解析的条数 */ }
  }
  return arr.slice(-n);
}
const eventsTail = tailLines(path.join(STATE, 'flow', 'events.jsonl'), 14, 49152)
  .map((e) => ({
    t: e.t || '', row: e.row || '', act: e.act || '', reason: e.reason || '', pid: e.pid || '',
    moved: e.moved, scanned: e.scanned, failed: e.failed, commit: e.commit || '',
    projects: e.projects, kind: e.kind || '', by: e.by || '', cat: e.cat || '', note: clip(e.note || e.stage || '', 80)
  }));
const opsTail = tailLines(path.join(STATE, 'flow', 'ops.jsonl'), 14, 49152)
  .map((o) => ({ at: o.at || '', op: o.op || '', value: typeof o.value === 'string' ? clip(o.value, 60) : clip(JSON.stringify(o.value || ''), 60), by: o.by || '' }));
const usageTail = tailLines(path.join(STATE, 'flow', 'usage.jsonl'), 10, 32768)
  .map((u) => ({ t: u.t || '', kind: u.kind || '', pid: u.pid || '', src: u.src || '' }));
/* 用量全量聚合（46 KB 量级，整读比尾读更诚实）：按 kind / pid / src 计数——
   尾 10 条只能看「刚发生了什么」，看不出「这台面板平时被怎么用」。坏行如实计数。 */
const usageAgg = (() => {
  const p = path.join(STATE, 'flow', 'usage.jsonl');
  if (!exists(p)) return null;
  const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/).filter(Boolean);
  const byKind = {}, byPid = {}, bySrc = {};
  const bump = (m, k) => { const key = k || '（空）'; m[key] = (m[key] || 0) + 1; };
  let bad = 0;
  for (const l of lines) {
    let u;
    try { u = JSON.parse(l); } catch (e) { bad += 1; continue; }
    bump(byKind, u.kind);
    bump(byPid, u.pid);
    bump(bySrc, u.src);
  }
  const top = (m) => Object.keys(m).map((k) => ({ k, n: m[k] })).sort((a, b) => b.n - a.n);
  return { total: lines.length - bad, bad, byKind: top(byKind), byPid: top(byPid).slice(0, 12), bySrc: top(bySrc), pids: Object.keys(byPid).length };
})();
const historyTail = tailLines(path.join(STATE, 'projects', 'history.jsonl'), 12, 49152)
  .map((h) => ({ t: h.t || '', pid: h.pid || '', doc: h.doc || '', kind: h.kind || '', from: String(h.from == null ? '' : h.from).slice(0, 40), to: String(h.to == null ? '' : h.to).slice(0, 40) }));
const fbTail = (() => {
  const p = path.join(STATE, 'flow', 'tool-feedback.jsonl');
  if (!exists(p)) return [];
  const lines = fs.readFileSync(p, 'utf8').trim().split(/\r?\n/).filter(Boolean);
  return lines.slice(-10).map((l) => {
    try { const j = JSON.parse(l); return { at: j.at || '', pid: j.pid || '', round: j.round, text: clip(j.text || '', 220) }; } catch (e) { return null; }
  }).filter(Boolean);
})();

/* 2.8 运行面开关（谁能改运行行为）——只取页面要展示的字段，不整份搬 */
const knobsDir = path.join(STATE, 'knobs');
const kn = (f) => readJson(path.join(knobsDir, f), null);
const pauseProjects = kn('pause-projects.json') || {};
const toolsDecl = kn('tools.json') || {};
const knobs = {
  schedAuto: kn('sched-auto.json'),
  globalPause: kn('global-pause.json'),
  debug: kn('debug.json'),
  globalLimit: kn('global-limit.json'),
  pauseProjects: {
    count: Object.keys(pauseProjects.projects || {}).length,
    items: Object.keys(pauseProjects.projects || {}).map((pid) => ({
      pid, by: (pauseProjects.projects[pid] || {}).by || '', at: (pauseProjects.projects[pid] || {}).at || '',
      reason: clip((pauseProjects.projects[pid] || {}).reason || '', 60)
    }))
  },
  sitePublish: kn('site-publish.json'),
  tools: Array.isArray(toolsDecl.tools) ? toolsDecl.tools.map((t) => ({
    id: t.id, name: t.name, fix: clip(t.fix || '', 90)
  })) : [],
  archive: (() => {
    const a = kn('archive.json') || {};
    return { count: Object.keys(a.projects || {}).length, pids: Object.keys(a.projects || {}) };
  })()
};

/* 2.8b 别名 / 删猫链 / 前文基线 / 任务面统计——「系统在按什么规则跑」的读数。
   🔴 删猫链与前文基线在 state/flow/，不在 state/knobs/（kn 只读 knobs）。 */
const aliases = kn('aliases.json') || {};
let moduleAliasPids = 0, moduleWords = 0;
for (const pid of Object.keys(aliases.moduleAliases || {})) {
  moduleAliasPids += 1;
  const v = aliases.moduleAliases[pid];
  if (Array.isArray(v)) moduleWords += v.length;
  else if (v && typeof v === 'object') for (const k of Object.keys(v)) moduleWords += Array.isArray(v[k]) ? v[k].length : 1;
}
const aliasStat = {
  former: Object.keys(aliases.former || {}).length,
  probes: (aliases.probes || []).length,
  modulePids: moduleAliasPids,
  moduleWords
};
const killPending = readJson(path.join(STATE, 'flow', 'kill-pending.json'), {}) || {};
const promptBaseline = readJson(path.join(STATE, 'flow', 'prompt-baseline.json'), {}) || {};
const baselineSizes = Object.keys(promptBaseline.sizes || {}).map((k) => ({ k, v: promptBaseline.sizes[k] }));
const promptBaselineOut = {
  generatedAt: promptBaseline.generatedAt || '',
  ratio: promptBaseline.ratio,
  files: baselineSizes.length,
  bytes: baselineSizes.reduce((n, x) => n + x.v, 0),
  top: baselineSizes.slice().sort((a, b) => b.v - a.v).slice(0, 6).map((x) => ({ k: clip(x.k, 64), v: x.v }))
};
const taskArr = Array.isArray(tasks) ? tasks : (tasks && tasks.items) || null;
const taskStat = taskArr ? {
  total: taskArr.length,
  bySource: taskArr.reduce((m, t) => { const s = t.source || '?'; m[s] = (m[s] || 0) + 1; return m; }, {}),
  top: taskArr.slice(0, 14).map((t) => ({
    pid: t.pid, source: t.source, ref: t.ref || '', text: clip(t.text || '', 120), weight: t.weight
  }))
} : null;

/* 2.9 整理面（verify）——卡解析兼容层的运行实况。
   `/api/work/verify/list` 一次问全部在档项目：判据状态 + 卡类 + 解析自证（parseGap / reportSignals /
   parserProfile）+ 条目数 / 报告段数 + 卡文件（源文本入口）。这是「兼容层有没有把卡切成条目」的现算面：
     · parseGap > 0     = 卡里有条目形态却没切成条目（应切未切）；
     · reportSignals ≥2 = 报告段里疑似条目（只进 shared、页面上看不到）；
     · parserProfile    = 命中的起点形态编号（1 行首数字加粗 / 2 行首加粗编号 / 3 列表 Q·W / 4 H2 / 5 H3）。
   只在构建期取一次——页面是快照，不实时。 */
const allPids = (idx.items || []).map((x) => x.pid).filter(Boolean);
const vlist = await postJson('/api/work/verify/list', { pids: allPids.join(',') });
const verifyCards = [];
let verifyGap = 0, verifySignals = 0, verifyItems = 0, verifyShared = 0;
const verifyKinds = {}, verifyProfiles = {};
if (vlist && Array.isArray(vlist.items)) {
  for (const v of vlist.items) {
    const itemsN = Array.isArray(v.items) ? v.items.length : 0;
    const sharedN = Array.isArray(v.shared) ? v.shared.length : 0;
    const gap = v.parseGap || 0;
    const sig = v.reportSignals || 0;
    const kind = v.cardKind || 'none';
    const prof = Array.isArray(v.parserProfile) ? v.parserProfile : [];
    verifyItems += itemsN;
    verifyShared += sharedN;
    verifyGap += gap;
    verifySignals += sig;
    verifyKinds[kind] = (verifyKinds[kind] || 0) + 1;
    for (const pf of prof) verifyProfiles[pf] = (verifyProfiles[pf] || 0) + 1;
    verifyCards.push({
      pid: v.pid, code: v.code || '', label: clip(v.label || '', 40), state: v.state || '',
      cat: v.cat || '', tokens: v.tokens || 0, elapsed: v.elapsed || 0,
      /* 轮次运行字段（P0-②）：stage 只在 running / queued 时有值；startedAt → doneAt 是
         「这轮跑没跑完」的起止；written = 机械回写进 todo.md 的方向条数（0 = 没写，不是没跑）。 */
      stage: v.stage || '', startedAt: v.startedAt || '', doneAt: v.doneAt || '',
      written: v.written || 0, at: v.at || '', runState: v.runState || '',
      baselineAt: v.baselineAt || '',
      kind, items: itemsN, shared: sharedN, gap, signals: sig, profiles: prof,
      note: clip(v.note || '', 80),
      card: v.verifyPath ? path.relative(CCBP, v.verifyPath).replace(/\\/g, '/') : ''
    });
  }
  verifyCards.sort((a, b) => (b.gap - a.gap) || (b.signals - a.signals)
    || String(b.baselineAt).localeCompare(String(a.baselineAt)));
} else {
  warns.push('整理解析（POST /api/work/verify/list）未取到——整理与解析段按空集渲染');
}
const verifyOut = {
  total: verifyCards.length,
  withCard: verifyCards.filter((x) => x.card).length,
  items: verifyItems,
  shared: verifyShared,
  gap: verifyGap,
  signals: verifySignals,
  kinds: verifyKinds,
  profiles: verifyProfiles,
  states: tidyStat.states,
  taskKinds: tidyStat.kinds,
  taskTotal: tidyStat.total,
  cards: verifyCards
};

/* 2.10 模块明细（细微模块的现算面）——按项目问 /api/trends/modules?pid=，
   只留名称 / 状态 / 版本数 / 首末 / 设计文档（含行号）/ 最近版本 / staleDays。
   recent 摘要是长文本（单项目可到 60 KB），不进站点；每个项目最多列 20 个模块，其余给 more 计数。 */
const moduleDetails = [];
for (const m of (mods.projects || [])) {
  const d = await getJson('/api/trends/modules?pid=' + encodeURIComponent(m.pid));
  if (!d || !Array.isArray(d.modules)) continue;
  moduleDetails.push({
    pid: m.pid,
    generatedAt: d.generatedAt || '',
    modules: d.modules.slice(0, 20).map((x) => ({
      name: clip(x.name || '', 48), status: x.status, versions: x.versions || 0,
      first: String(x.first || '').slice(0, 10), last: String(x.last || '').slice(0, 10),
      doc: clip(x.doc || '', 44), line: x.line || 0,
      recentVersion: clip(x.recentVersion || '', 16),
      staleDays: x.staleDays == null ? null : x.staleDays
    })),
    more: Math.max(0, d.modules.length - 20)
  });
}
moduleDetails.sort((a, b) => (b.modules.length - a.modules.length) || a.pid.localeCompare(b.pid));

/* ---------- 2.11 对账全量（P0-③）：面板端点只带前 8 条，全量在脚本 stdout 的 ERR 段。
   构建期直接跑两个只读脚本（与面板同源同参），把 issueCount 与 issues 一起自证；
   脚本跑不起来才回落端点值，并显式标 truncated。 */
function runNodeScript(rel, args, timeoutMs) {
  const script = path.join(ROOT, rel);
  if (!exists(script)) return { ok: false, code: -1, out: '', err: '脚本不存在：' + script };
  try {
    const out = execFileSync(process.execPath, [script, ...args], {
      cwd: ROOT, encoding: 'utf8', timeout: timeoutMs, maxBuffer: 32 * 1024 * 1024
    });
    return { ok: true, code: 0, out, err: '' };
  } catch (e) {
    return { ok: false, code: e.status == null ? -1 : e.status, out: String(e.stdout || ''), err: String(e.stderr || e.message || '') };
  }
}

function endpointCheck(id) {
  const c = (wit.capabilities || []).find((x) => x.id === id);
  if (!c || !c.check) return null;
  const ck = c.check;
  return {
    ok: !!ck.ok, summary: ck.summary || '', issueCount: ck.issueCount || 0,
    issues: (ck.issues || []).map(String), source: 'endpoint',
    truncated: (ck.issueCount || 0) > (ck.issues || []).length
  };
}

const checksFull = (() => {
  const out = { map: null, l3: null };
  const mapRun = runNodeScript('witness/tools/check-map.mjs', [], 120000);
  if (mapRun.ok || mapRun.out) {
    const lines = mapRun.out.split('\n').map((l) => l.replace(/\r$/, ''));
    const issues = [];
    let inErr = false;
    for (const l of lines) {
      if (l.trim() === 'ERR：') { inErr = true; continue; }
      if (inErr && l.startsWith('  - ')) issues.push(l.slice(4).trim());
    }
    const resLine = lines.find((l) => l.startsWith('RESULT:')) || '';
    const summary = resLine.length > 7 ? resLine.slice(7).trim() : (mapRun.code === 0 ? 'PASS' : 'FAIL');
    out.map = {
      ok: mapRun.code === 0 && summary.startsWith('PASS'),
      summary, issueCount: issues.length, issues, source: 'script', truncated: false
    };
  } else {
    out.map = endpointCheck('mapcheck');
    if (!out.map) warns.push('星图对账脚本与端点都未取到——对账段按空集渲染');
    else warns.push('星图对账脚本未跑通，回落面板端点（issues 可能截断）：' + mapRun.err.split('\n')[0]);
  }

  const l3Run = runNodeScript('witness/tools/check-l3.mjs', ['--all'], 120000);
  if (l3Run.ok || l3Run.out) {
    const lines = l3Run.out.split('\n').map((l) => l.replace(/\r$/, ''));
    const issues = [];
    let pid = '';
    for (const l of lines) {
      const t = l.trim();
      if (t.startsWith('— ') && t.endsWith(' —')) { pid = t.slice(2, -2).trim(); continue; }
      if (!l.startsWith('  FAIL ')) continue;
      const rest = t.slice(5).split(/[ \t]+/).filter(Boolean).join(' ');
      issues.push(pid ? pid + ' · ' + rest : rest);
    }
    const resLine = lines.find((l) => l.startsWith('RESULT')) || '';
    const summary = resLine.length > 6 ? resLine.slice(6).trim() : (l3Run.code === 0 ? 'PASS' : 'FAIL');
    out.l3 = {
      ok: l3Run.code === 0 && summary.startsWith('PASS'),
      summary, issueCount: issues.length, issues, source: 'script', truncated: false
    };
  } else {
    out.l3 = endpointCheck('l3check');
    if (!out.l3) warns.push('L3 对账脚本与端点都未取到——对账段按空集渲染');
    else warns.push('L3 对账脚本未跑通，回落面板端点（issues 可能截断）：' + l3Run.err.split('\n')[0]);
  }
  return out;
})();

/* ---------- 2.12 站点发布历史（P1-⑤）：events.jsonl 里 row=站点发布 的行（成功 / 失败 / 停手）。
   事件行由 System.Text.Json 写盘，中文是 \uXXXX 转义——先按转义串粗筛再 JSON.parse，避免整文件 2 万行全解析。 */
const siteHistory = (() => {
  const p = path.join(STATE, 'flow', 'events.jsonl');
  if (!exists(p)) { warns.push('站点发布历史：events.jsonl 不存在'); return { total: 0, items: [] }; }
  let lines = [];
  try { lines = fs.readFileSync(p, 'utf8').split(/\r?\n/); } catch (e) {
    warns.push('站点发布历史读取失败：' + e.message);
    return { total: 0, items: [] };
  }
  const hit = [];
  for (const l of lines) {
    if (!l) continue;
    const lower = l.toLowerCase();
    if (!lower.includes('\\u7ad9\\u70b9\\u53d1\\u5e03') && !l.includes('站点发布')) continue;
    try {
      const e = JSON.parse(l);
      if (e.row !== '站点发布') continue;
      hit.push({
        t: e.t || '', act: e.act || '', reason: e.reason || '',
        ok: e.act === '站点发布', changed: e.changed == null ? null : !!e.changed,
        stampOnly: !!e.stampOnly, commit: e.commit || '', projects: e.projects,
        elapsedMs: e.elapsedMs, stage: e.stage || '', message: clip(e.message || '', 160),
        behind: e.behind
      });
    } catch (e2) { /* 坏行跳过——历史只报能解析的条数 */ }
  }
  return { total: hit.length, items: hit.slice(-10).reverse() };
})();

/* ---------- 2.13 交接报告收集情况（新需求）：跑一次 archive-handovers --json 干跑。
   回答「CatTemp 里还有几份该收没收、都归属谁」——归档区份数在 handover 表，这里给「待收」面。
   脚本本身只读（干跑不写）；失败出声，不把「没扫到」画成「没有」。 */
const handoverCollect = (() => {
  const run = runNodeScript('witness/tools/archive-handovers.mjs', ['--json'], 90000);
  if (!run.ok || !run.out) {
    warns.push('交接收集扫描失败（archive-handovers --json）：' + (run.err.split('\n')[0] || '无输出'));
    return null;
  }
  let j = null;
  try { j = JSON.parse(run.out); } catch (e) {
    warns.push('交接收集扫描输出不可解析：' + e.message);
    return null;
  }
  /* 待收逐条带源路径 / 目标路径 / 正文预览——弹层点开就能判断「这份该不该现在收」 */
  const pending = (j.items || []).filter((x) => x.action === 'copy' || x.action === 'move').map((x) => {
    const pid = x.pid || '_unsorted';
    const src = j.src ? path.join(j.src, x.file) : '';
    const target = j.dest ? path.join(j.dest, pid, x.file) : '';
    const hd = src ? headOf(src, 40, 2500) : { lines: 0, text: '' };
    return {
      file: x.file, pid, size: x.size,
      mtime: x.mtime ? stamp(new Date(x.mtime)) : '',
      basis: (x.basis || []).join('+'), pidBasis: x.pidBasis || '',
      reason: x.reason || '', src, target, lines: hd.lines, preview: hd.text
    };
  });
  const unsorted = pending.filter((x) => x.pid === '_unsorted').length;
  const skippedReasons = {};
  for (const x of j.items || []) {
    if (x.action !== 'skip') continue;
    const r = x.reason || 'skip';
    skippedReasons[r] = (skippedReasons[r] || 0) + 1;
  }
  return {
    ok: j.ok !== false, mode: j.mode || 'dry', src: j.src || '', dest: j.dest || '',
    scanned: j.scanned || 0, handover: j.handover || 0, excluded: j.excluded || 0,
    movable: j.movable || 0, skipped: j.skipped || 0, unsorted,
    minAgeHours: j.minAgeHours == null ? null : j.minAgeHours,
    keepLatest: j.keepLatest == null ? null : j.keepLatest,
    skippedReasons, pending
  };
})();

/* ---------- 2.14 lifecycle-audit 摘要（P2-⑫）：只读脚本 --json → 只留 summary 与自证字段。
   全量报告（逐项目 / 逐模块）不进站点——页面是「哪块停了」的读数，不是审计报告的副本。 */
const lifecycleAudit = (() => {
  const run = runNodeScript('witness/tools/lifecycle-audit.mjs', ['--json'], 120000);
  if (!run.ok || !run.out) {
    warns.push('lifecycle-audit 未跑通：' + (run.err.split('\n')[0] || '无输出'));
    return null;
  }
  let j = null;
  try { j = JSON.parse(run.out); } catch (e) {
    warns.push('lifecycle-audit 输出不可解析：' + e.message);
    return null;
  }
  return {
    generatedAt: j.generatedAt || '', contentHash: j.contentHash || '',
    history: {
      lines: (j.history && j.history.totalLines) || 0,
      parsed: (j.history && j.history.parsed) || 0,
      badJson: (j.history && j.history.badJson) || 0,
      missingKind: (j.history && j.history.missing && j.history.missing.kind) || 0,
      missingPid: (j.history && j.history.missing && j.history.missing.pid) || 0
    },
    projects: (j.summary && j.summary.projects) || {},
    modules: (j.summary && j.summary.modules) || {},
    warnings: (j.warnings || []).length
  };
})();

/* ---------- 2.15 架构图覆盖率（P2-⑪）：索引在档 vs history/arch 数据集。
   缺哪份、哪份只是骨架——让「42 项目 / 43 份」这类口径在页面上可核。 */
const archCoverage = (() => {
  const idxPids = (idx.items || []).map((x) => x.pid).filter(Boolean);
  const have = new Set(archItems.map((x) => x.pid));
  const missing = idxPids.filter((p) => !have.has(p));
  const extra = archItems.map((x) => x.pid).filter((p) => idxPids.indexOf(p) < 0);
  return {
    total: idxPids.length, datasets: archItems.length,
    covered: idxPids.length - missing.length, missing, extra,
    skeleton: archSkeleton, skeletons: archItems.filter((x) => x.skeleton).map((x) => x.pid)
  };
})();

/* ---------- 2.16 面板版星图静态包（两版星图并列展示的数据面）----------
   见证者大页同时展示两版项目星图：
     ① 站点版 = projects.html（深色站内副本，含起点 / 提交时间线切换）——既有 #atlas；
     ② 面板版 = archkit 白底模板 + history/arch/projects.js 数据集——即面板「打开项目星图」的同一份画法。
   面板里是运行时取 /api/archkit/*；静态页不能打端点，故构建期把模板三件与数据集拷进 full/archkit/，
   归档 / 隐藏名单按面板 openArch 的口径注入（ARCH_ARCHIVED / ARCH_HIDDEN）。
   失败只 WARN 不阻断：缺它只少一块参照图，主快照仍完整（页面按 ok=false 给缺件说明）。 */
const archkit = await (async () => {
  const src = path.join(ROOT, 'witness', 'archkit');
  const dst = path.join(OUT, 'archkit');
  const modelFile = path.join(HIST, 'arch', 'projects.js');
  const need = ['view.html', 'assets/arch.css', 'assets/arch-render.js'];
  const missing = need.filter((f) => !exists(path.join(src, f)));
  if (missing.length) {
    warns.push('面板版星图未打包：witness/archkit 缺 ' + missing.join(' / '));
    return { ok: false, dir: 'archkit', missing };
  }
  if (!exists(modelFile)) {
    warns.push('面板版星图未打包：数据集 history/arch/projects.js 不存在');
    return { ok: false, dir: 'archkit', missing: ['data/projects.js'] };
  }
  const modelTxt = fs.readFileSync(modelFile, 'utf8');
  const metaOf = (re) => { const m = modelTxt.match(re); return m ? m[1] : ''; };
  const model = {
    ver: metaOf(/ver:\s*'([^']*)'/), updated: metaOf(/updated:\s*'([^']*)'/), sub: metaOf(/sub:\s*'([^']*)'/)
  };
  let files = 0, bytes = 0;
  if (!DRY) {
    fs.mkdirSync(path.join(dst, 'assets'), { recursive: true });
    fs.mkdirSync(path.join(dst, 'data'), { recursive: true });
    for (const f of need) {
      const s = path.join(src, f);
      const d = path.join(dst, f);
      fs.copyFileSync(s, d);
      files += 1; bytes += fs.statSync(d).size;
    }
    const ar = await getJson('/api/projects/archive');
    const archived = (ar && ar.projects) || [];
    const hidden = (ar && ar.hidden) || [];
    if (!ar) warns.push('面板版星图的归档 / 隐藏名单未取到——按空集注入（不伪造状态）');
    const outTxt = modelTxt + '\n/* 构建期注入：与面板 openArch 同口径（/api/projects/archive） */\n'
      + 'window.ARCH_ARCHIVED = ' + JSON.stringify(archived) + ';\n'
      + 'window.ARCH_HIDDEN = ' + JSON.stringify(hidden) + ';\n';
    fs.writeFileSync(path.join(dst, 'data', 'projects.js'), outTxt, 'utf8');
    files += 1; bytes += fs.statSync(path.join(dst, 'data', 'projects.js')).size;
  }
  return { ok: true, dir: 'archkit', files, bytes, model };
})();

/* ---------- 三、投影与瘦身（页面只画展示需要的字段；原始面保真，不发散） ---------- */
const life = trends.life || {};
const lifeProjects = (life.projects || []).map((p) => {
  /* ticks 保留：见证者页「项目生命周期」进度条要画版本事件竖线（2026-11-14 实测 1,034 条 / 紧凑 JSON ≈ 23 KB） */
  return Object.assign({}, p);
});

/* 2.11b 回滚候选（与 Witness.cs 同口径）——state/entrust/<pid>/round-*.patch 最新一份 +
   最近一条 round-open 的 base → 可复制命令。只呈现，不执行（回滚执行权归人）。 */
function rollbackOf(pid) {
  const dir = path.join(STATE, 'entrust', pid);
  if (!exists(dir)) return null;
  let names = [];
  try { names = fs.readdirSync(dir).filter((f) => /^round-.*\.patch$/i.test(f)); } catch (e) { return null; }
  if (!names.length) return null;
  let newest = '', newestMs = 0;
  for (const f of names) {
    try {
      const st = fs.statSync(path.join(dir, f));
      if (st.mtimeMs > newestMs) { newestMs = st.mtimeMs; newest = f; }
    } catch (e2) { /* 单文件 stat 失败不影响其余 */ }
  }
  if (!newest) return null;
  let base = '';
  try {
    const lines = fs.readFileSync(path.join(dir, 'rounds.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean);
    for (const l of lines) {
      try { const e = JSON.parse(l); if (e.kind === 'round-open' && e.base) base = e.base; } catch (e3) { /* 坏行跳过 */ }
    }
  } catch (e4) { /* 没有 rounds.jsonl 就只给 patch 文件名 */ }
  const body = newest.replace(/^round-/, '').replace(/\.patch$/i, '');
  const dash = body.indexOf('-');
  const roundNo = dash > 0 ? body.slice(0, dash) : '?';
  const lineNo = dash > 0 ? body.slice(dash + 1) : 'L1';
  return {
    file: newest, at: stamp(new Date(newestMs)), patches: names.length,
    base: base.length >= 7 ? base.slice(0, 7) : '',
    command: 'POST /api/entrust/' + pid + '/rollback {"mode":"patch","round":' + roundNo
      + ',"line":"' + lineNo + '","confirm":"' + pid + '"}'
  };
}

const entrustOrders = (entrust.orders || []).map((o) => ({
  pid: o.pid, state: o.state, goal: clip(o.goal || '', 220),
  autonomy: o.autonomy, taskSource: o.taskSource || 'todo',
  budget: o.budget || null,
  rounds: (o.history || []).length,
  zeroRounds: o.zeroRounds || 0,
  createdAt: o.createdAt || '', updatedAt: o.updatedAt || '',
  blocked: o.blocked || [],
  gates: (o.gates || []),                    // 全量（P1-④）：门是授权边界，不截断
  rollback: rollbackOf(o.pid),               // 最新 patch 的候选命令（没有 patch 即 null）
  base: o.base ? { commit: String(o.base.commit || '').slice(0, 8), branch: o.base.branch || '', dirty: !!o.base.dirty } : null,
  historyTotal: (o.history || []).length,
  history: (o.history || []).slice(-20).map((h) => ({
    round: h.round, verdict: h.verdict || '', tokens: h.tokens || 0,
    todoOpen: h.todoOpen, designOpen: h.designOpen,
    closed: Array.isArray(h.closed) ? h.closed.length : 0,
    items: (h.items || []).slice(0, 3), at: h.at || ''
  }))
}));

const orderOut = order && order.order ? {
  generatedAt: order.order.generatedAt || '',
  totals: order.order.totals || {},
  zones: ['focus', 'todo', 'quiet', 'archive'].reduce((acc, z) => {
    acc[z] = (order.order[z] || []).map((x) => ({
      pid: x.pid, score: x.score, heat: x.heat, todo: x.todo, anomaly: x.anomaly,
      recent50: x.recent50, lastTouch: x.lastTouch || '', tierName: x.tierName || '', inQueue: !!x.inQueue
    }));
    return acc;
  }, {})
} : null;

/* 委托单的相位是派生值（`EntrustDerive.Compute` 现算）——只投影 phase / reason，
   不搬 evidence（那是判据明细，页面不需要，且会随轮次膨胀）。 */
const entrustDerived = {};
for (const pid of Object.keys(entrust.derived || {})) {
  const d = entrust.derived[pid] || {};
  entrustDerived[pid] = { phase: d.phase || '', reason: clip(d.reason || '', 160) };
}

const witCaps = (wit.capabilities || []).map((c) => ({
  id: c.id, name: c.name, owns: c.owns || '', status: c.status || '',
  lastActivityText: c.lastActivityText || '', ageText: c.ageText || '',
  howTo: c.howTo || '',
  artifacts: (c.artifacts || []).map((a) => ({
    spec: a.spec || '', exists: !!a.exists, files: a.files || 0,
    ageText: a.ageText || '', ageMs: a.lastActivityAt || 0, note: a.note || ''
  })),
  releases: c.releases ? c.releases.map((r) => ({ pid: r.pid, from: r.from, to: r.to, at: r.at, summary: clip(r.summary, 200), line: r.line, unread: !!r.unread })) : null,
  unread: c.unread == null ? null : c.unread,
  check: c.check ? { ok: !!c.check.ok, summary: c.check.summary || '', issues: (c.check.issues || []).slice(0, 10), issueCount: c.check.issueCount || 0 } : null,
  lines: c.lines || null
}));

/* ---------- 四、组装 ---------- */
const overview = {
  projects: idx.total || (idx.items || []).length,
  passed: idx.passed == null ? null : idx.passed,
  archived: knobs.archive.count,
  todo: (() => { const d = (trends.debt && trends.debt.days) || []; return d.length ? d[d.length - 1].todo : null; })(),
  anomaly: (() => { const d = (trends.debt && trends.debt.days) || []; return d.length ? d[d.length - 1].anomaly : null; })(),
  versions: (idx.items || []).reduce((n, x) => n + (x.changelogCount || 0), 0),
  modules: {
    total: mods.total || (mods.projects || []).length,
    modules: (mods.projects || []).reduce((n, x) => n + (x.moduleCount || 0), 0),
    versions: (mods.projects || []).reduce((n, x) => n + (x.versionCount || 0), 0),
    unclassified: (mods.projects || []).reduce((n, x) => n + (x.unclassified || 0), 0)
  },
  entrust: entrust.phaseSummary || {},
  releases: {
    recent: ((witCaps.find((c) => c.id === 'releases') || {}).releases || []).length,
    unread: (witCaps.find((c) => c.id === 'releases') || {}).unread,
    /* 每项目未读（P2-⑩）：releases 能力给的是「最近 40 条 ∪ 每项目最近一条 + 未读标记」，
       按 pid 折叠即可得逐项目未读；口径与页面 #releases 同源，不另算。 */
    byPid: (() => {
      const list = (witCaps.find((c) => c.id === 'releases') || {}).releases || [];
      const m = {};
      for (const r of list) {
        const o = m[r.pid] || (m[r.pid] = { pid: r.pid, rows: 0, unread: 0, latestAt: '' });
        o.rows += 1;
        if (r.unread) o.unread += 1;
        if (!o.latestAt || String(r.at || '') >= o.latestAt) o.latestAt = String(r.at || '');
      }
      return Object.keys(m).map((k) => m[k]).sort((a, b) => (b.unread - a.unread) || a.pid.localeCompare(b.pid));
    })()
  },
  dispatchTotal,
  verifyTotal,
  tasks: taskStat ? { total: taskStat.total, bySource: taskStat.bySource } : null,
  verify: { cards: verifyOut.withCard, items: verifyOut.items, shared: verifyOut.shared, gap: verifyOut.gap, signals: verifyOut.signals },
  watchFiles: watch.reduce((n, x) => n + x.files, 0),
  watchBytes: watch.reduce((n, x) => n + x.bytes, 0),
  handover: {
    archivedProjects: handover ? handover.projects : 0,
    archivedFiles: handover ? handover.files : 0,
    scanned: handoverCollect ? handoverCollect.scanned : null,
    pending: handoverCollect ? handoverCollect.movable : null
  },
  arch: { total: archItems.length, skeleton: archSkeleton }
};

/* 索引卡明细（页面「档案完备度」表）：只搬派生值与指针，不抄档案正文。
   missing / anomalies 原样是字符串数组（索引器给的就是明细）——这里带上前 8 条；
   其余只给计数（more），页面按「+N」显示。 */
const projectCards = (idx.items || []).map((it) => {
  const miss = Array.isArray(it.missing) ? it.missing : [];
  const anom = Array.isArray(it.anomalies) ? it.anomalies : [];
  return {
    pid: it.pid, type: clip(it.type || '', 46), version: clip(it.version || '', 24),
    worker: it.worker || '', jobs: (it.jobs || []).slice(0, 3),
    verdict: it.verdict || '',
    todo: it.todoCount || 0, changelog: it.changelogCount || 0,
    designOk: it.designOk || 0, designPart: it.designPart || 0, designNone: it.designNone || 0,
    missing: miss.length, missingItems: miss.slice(0, 8), missingMore: Math.max(0, miss.length - 8),
    anomalies: anom.length, anomalyItems: anom.slice(0, 8), anomalyMore: Math.max(0, anom.length - 8),
    scope: it.scope || '', created: String(it.created || '').slice(0, 10)
  };
});

/* ---------- 3.9 立项时间流（「最近的起点」）----------
   来源 = 本档自己的 projects.json（build-map 的产出，形状 {generatedAt,public,count,stats,items[]}）。
   🔴 只读本档落点（OUT/projects.json）——public 的 data/projects.json 是 21 项白名单，
      回落过去会把「21 / 42」画成事实。build-site 的顺序是 build-map 先写、本脚本后读，同一次构建内就是新数据；
      单独跑或 --dry 时读到的可能是上一次的（dry 只看摘要，不影响判据）。
   主页「最近的起点」= 按立项日倒序前 8 条；这里给 12 条（见证者页是内部视图，多看几条）。
   created 为空的项目不参与排序（在册但缺立项日——计数里单独给 dated，不假造日期）。 */
const projFile = path.join(OUT, 'projects.json');
const proj = readJson(projFile, null);
let homeFeed = [];
let homeDated = 0;
if (proj && Array.isArray(proj.items)) {
  const dated = proj.items.filter((x) => x && x.created);
  homeDated = dated.length;
  homeFeed = dated
    .slice()
    .sort((a, b) => String(b.created).localeCompare(String(a.created)))
    .slice(0, 12)
    .map((x) => ({
      pid: x.pid, created: String(x.created || '').slice(0, 10), type: clip(x.type || '', 60),
      worker: x.worker || '', version: clip(x.version || '', 24), archived: !!x.archived
    }));
} else {
  warns.push('立项时间流未取到：' + path.relative(SITE, projFile) + ' 不可读（先跑 build-map.mjs）——「最近的起点」按空集渲染');
}
const homeOut = {
  generatedAt: (proj && proj.generatedAt) || '',
  total: proj && Array.isArray(proj.items) ? proj.items.length : null,
  dated: homeDated,
  feed: homeFeed
};

const data = {
  ok: true,
  profile: 'full',
  generatedAt: stamp(new Date()),
  buildMs: Date.now() - t0,
  panel: PANEL,
  roots: { protocol: ROOT, ccbp: CCBP },
  health: {
    version: health.version || '', startedAt: health.startedAt || '',
    pid: health.pid || 0, web: health.web || null
  },
  sched: {
    state: sched.state || '', reason: sched.reason || '', autoRun: !!sched.autoRun,
    interval: sched.interval || 0, lastTickAt: sched.lastTickAt || '', ageSeconds: sched.ageSeconds,
    last: sched.last ? { at: sched.last.at, dry: !!sched.last.dry, actions: sched.last.actions || 0, lines: (sched.last.lines || []).slice(0, 10) } : null
  },
  alive: !!wit.alive,
  now: wit.now || '',
  poke: wit.poke || null,
  capabilities: witCaps,
  checks: checksFull,
  projects: projectCards,
  home: homeOut,
  archkit,
  overview,
  trends: {
    generatedAt: trends.generatedAt || '',
    debt: trends.debt || null,
    life: {
      ok: life.ok, total: life.total, aliveCount: life.aliveCount, aliveTotal: life.aliveTotal,
      goneCount: life.goneCount, aliveKnown: !!life.aliveKnown, revivals: life.revivals || 0,
      appearTotal: life.appearTotal, disappearTotal: life.disappearTotal,
      rawAppear: life.rawAppear, rawDisappear: life.rawDisappear,
      note: life.note || '', projects: lifeProjects
    },
    git: trends.git || null
  },
  modules: { generatedAt: mods.generatedAt || '', total: mods.total || 0, projects: mods.projects || [], details: moduleDetails },
  entrust: {
    phaseSummary: entrust.phaseSummary || {},
    summary: entrust.summary || {},
    autonomies: entrust.autonomies || [],
    derived: entrustDerived,
    orders: entrustOrders
  },
  verify: verifyOut,
  board: {
    knobs, order: orderOut,
    site: site || null,
    siteHistory,
    tools: knobs.tools,
    tidy: tidyStat,
    aliases: aliasStat,
    killPending: { count: (killPending.items || []).length, generatedAt: killPending.generatedAt || '' },
    promptBaseline: promptBaselineOut,
    tasks: taskStat
  },
  artifacts: {
    watch, verify, verifyAll, verifyTotal,
    snapshots: snap, handover, handoverCollect, entrustCards,
    arch: { items: archItems, coverage: archCoverage },
    dispatch: { total: dispatchTotal, items: dispatchItems, agg: dispatchAgg },
    usageAgg,
    lifecycle: lifecycleAudit,
    flow: flowStats,
    events: eventsTail,
    ops: opsTail,
    usage: usageTail,
    history: historyTail,
    feedback: fbTail
  },
  warnings: warns,
  error: errors.length ? errors : null
};

if (DRY) {
  console.log('[build-witness] DRY · ' + (JSON.stringify(data).length) + ' 字符'
    + ' · 能力 ' + witCaps.length + ' · 版本 ' + (witCaps.find((c) => c.id === 'releases') || {}).releases?.length
    + ' · 委托 ' + entrustOrders.length + ' · 项目 ' + overview.projects
    + ' · 起点 ' + homeFeed.length
    + ' · 整理卡 ' + verifyOut.withCard + '（gap ' + verifyOut.gap + ' · 信号 ' + verifyOut.signals + '）'
    + ' · 模块明细 ' + moduleDetails.length
    + ' · 发布史 ' + siteHistory.total + '（列 ' + siteHistory.items.length + '）'
    + ' · 交接待收 ' + (handoverCollect ? handoverCollect.movable : '—') + ' / 扫描 ' + (handoverCollect ? handoverCollect.scanned : '—')
    + ' · 面板星图 ' + (archkit.ok ? (archkit.files + ' 件 / ' + (archkit.bytes / 1024).toFixed(1) + ' KB') : '未打包')
    + ' · 对账 ' + (checksFull.map && checksFull.map.ok ? 'PASS' : 'FAIL') + ' / ' + (checksFull.l3 && checksFull.l3.ok ? 'PASS' : 'FAIL')
    + (warns.length ? ' · WARN ' + warns.length : ''));
} else {
  fs.mkdirSync(OUT, { recursive: true });
  const js = 'window.WITNESS = ' + JSON.stringify(data, null, 1) + ';\n';
  fs.writeFileSync(path.join(OUT, 'witness.js'), js, 'utf8');
  fs.writeFileSync(path.join(OUT, 'witness.json'), JSON.stringify(data, null, 2), 'utf8');
  console.log('[build-witness] OK · ' + (js.length / 1024).toFixed(1) + ' KB'
    + ' · 能力 ' + witCaps.length + ' · 委托 ' + entrustOrders.length + ' · 项目 ' + overview.projects
    + ' · 起点 ' + homeFeed.length
    + ' · 整理卡 ' + verifyOut.withCard + '（gap ' + verifyOut.gap + ' · 信号 ' + verifyOut.signals + '）'
    + ' · 模块明细 ' + moduleDetails.length
    + ' · 发布史 ' + siteHistory.total + '（列 ' + siteHistory.items.length + '）'
    + ' · 交接待收 ' + (handoverCollect ? handoverCollect.movable : '—') + ' / 扫描 ' + (handoverCollect ? handoverCollect.scanned : '—')
    + ' · 面板星图 ' + (archkit.ok ? (archkit.files + ' 件 / ' + (archkit.bytes / 1024).toFixed(1) + ' KB') : '未打包')
    + ' · 对账 ' + (checksFull.map && checksFull.map.ok ? 'PASS' : 'FAIL') + ' / ' + (checksFull.l3 && checksFull.l3.ok ? 'PASS' : 'FAIL')
    + ' · → ' + path.relative(SITE, OUT).replace(/\\/g, '/'));
  if (warns.length) warns.forEach((w) => console.log('  WARN ' + w));
  if (errors.length) errors.forEach((w) => console.log('  ERR ' + w));
}
