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
const readJson = (p, fb) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) { return fb; } };
const exists = (p) => { try { return fs.existsSync(p); } catch (e) { return false; } };

/** 递归统计：文件数 / 字节 / 最近 mtime（不存在给 null，不编 0）。 */
function walkStat(dir) {
  if (!exists(dir)) return null;
  let files = 0, bytes = 0, lastMs = 0;
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
        files += 1; bytes += st.size; if (st.mtimeMs > lastMs) lastMs = st.mtimeMs;
      } catch (e2) { /* 单文件读不到就跳过——下面的 files 与 bytes 只在读到时计数 */ }
    }
  }
  return { files, bytes, lastAt: lastMs ? stamp(new Date(lastMs)) : '', lastMs };
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
    const s = walkStat(path.join(watchDir, e.name));
    if (s) watch.push({ group: e.name, files: s.files, bytes: s.bytes, lastAt: s.lastAt });
  }
  watch.sort((a, b) => b.files - a.files);
} else warns.push('原件归档目录不存在：' + watchDir);

/* 2.2 验证卡（verify）：最近 18 份 + 总数；卡类按首行判（与面板同口径：三态 question / work / report） */
const verifyDir = path.join(HIST, 'verify');
const vFiles = recentFiles(verifyDir, 18, (f) => f.endsWith('.md'));
const verify = vFiles.map((f) => {
  let head = '';
  try {
    const txt = fs.readFileSync(f.p, 'utf8');
    head = (txt.split(/\r?\n/)[0] || '').trim();
  } catch (e) { head = ''; }
  const kind = head.indexOf('遗留项有疑问') >= 0 ? 'question'
    : (head.indexOf('可直接开工') >= 0 ? 'work' : 'report');
  return { file: f.name, at: stamp(new Date(f.st.mtimeMs)), bytes: f.st.size, kind, head: clip(head, 60) };
});
const verifyTotal = exists(verifyDir) ? fs.readdirSync(verifyDir).filter((f) => f.endsWith('.md')).length : 0;

/* 2.3 档案快照 / 交接报告 / 委托卡 */
const snap = (() => {
  const dir = path.join(HIST, 'snapshots');
  const s = walkStat(dir);
  if (!s) return null;
  const entries = fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).length;
  const snaps = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const sub = fs.readdirSync(path.join(dir, e.name), { withFileTypes: true }).filter((x) => x.isDirectory()).length;
    snaps.push(sub);
  }
  return { projects: entries, sets: snaps.reduce((n, x) => n + x, 0), files: s.files, bytes: s.bytes, lastAt: s.lastAt };
})();

const handover = (() => {
  const dir = path.join(HIST, 'handover');
  const s = walkStat(dir);
  if (!s) return null;
  const entries = fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).length;
  return { projects: entries, files: s.files, bytes: s.bytes, lastAt: s.lastAt };
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

/* 2.5 投递台账：只取最近 15 条投递（文件 1.3 MB，prompt 正文一律不进站点） */
const dispatchFile = path.join(STATE, 'flow', 'dispatches.json');
const dAll = readJson(dispatchFile, { items: [] });
const dispatchItems = (dAll.items || []).slice(-15).reverse().map((x) => ({
  pid: x.pid, kind: x.kind, title: x.title || '', at: x.at || '',
  runState: (x.live && x.live.runState) || '', removed: !!x.removed,
  effort: x.effort || '', catId: x.catId ? String(x.catId).slice(-6) : ''
}));
const dispatchTotal = (dAll.items || []).length;

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

/* ---------- 三、投影与瘦身（页面只画展示需要的字段；原始面保真，不发散） ---------- */
const life = trends.life || {};
const lifeProjects = (life.projects || []).map((p) => {
  const q = Object.assign({}, p);
  delete q.ticks;                       // 106 条 × 58 项 = 占数据 60%+，页面不画逐次 tick
  return q;
});

const entrustOrders = (entrust.orders || []).map((o) => ({
  pid: o.pid, state: o.state, goal: clip(o.goal || '', 220),
  autonomy: o.autonomy, taskSource: o.taskSource || 'todo',
  budget: o.budget || null,
  rounds: (o.history || []).length,
  zeroRounds: o.zeroRounds || 0,
  createdAt: o.createdAt || '', updatedAt: o.updatedAt || '',
  blocked: o.blocked || [],
  gates: (o.gates || []).slice(0, 6),
  base: o.base ? { commit: String(o.base.commit || '').slice(0, 8), branch: o.base.branch || '', dirty: !!o.base.dirty } : null,
  history: (o.history || []).slice(-4).map((h) => ({
    round: h.round, verdict: h.verdict || '', tokens: h.tokens || 0,
    todoOpen: h.todoOpen, designOpen: h.designOpen, items: (h.items || []).slice(0, 3), at: h.at || ''
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

const checkOf = (id) => {
  const c = witCaps.find((x) => x.id === id);
  return c && c.check ? c.check : null;
};

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
    unread: (witCaps.find((c) => c.id === 'releases') || {}).unread
  },
  dispatchTotal,
  verifyTotal,
  tasks: taskStat ? { total: taskStat.total, bySource: taskStat.bySource } : null,
  watchFiles: watch.reduce((n, x) => n + x.files, 0),
  watchBytes: watch.reduce((n, x) => n + x.bytes, 0),
  arch: { total: archItems.length, skeleton: archSkeleton }
};

/* 索引卡明细（页面「档案完备度」表）：只搬派生值与指针，不抄档案正文。 */
const projectCards = (idx.items || []).map((it) => ({
  pid: it.pid, type: clip(it.type || '', 46), version: clip(it.version || '', 24),
  worker: it.worker || '', jobs: (it.jobs || []).slice(0, 3),
  verdict: it.verdict || '', missing: (it.missing || []).length,
  todo: it.todoCount || 0, changelog: it.changelogCount || 0,
  designOk: it.designOk || 0, designPart: it.designPart || 0, designNone: it.designNone || 0,
  anomalies: (it.anomalies || []).length,
  scope: it.scope || '', created: String(it.created || '').slice(0, 10)
}));

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
  checks: { map: checkOf('mapcheck'), l3: checkOf('l3check') },
  projects: projectCards,
  home: homeOut,
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
  modules: { generatedAt: mods.generatedAt || '', total: mods.total || 0, projects: mods.projects || [] },
  entrust: {
    phaseSummary: entrust.phaseSummary || {},
    summary: entrust.summary || {},
    autonomies: entrust.autonomies || [],
    derived: entrustDerived,
    orders: entrustOrders
  },
  board: {
    knobs, order: orderOut,
    site: site || null,
    tools: knobs.tools,
    tidy: tidyStat,
    aliases: aliasStat,
    killPending: { count: (killPending.items || []).length, generatedAt: killPending.generatedAt || '' },
    promptBaseline: promptBaselineOut,
    tasks: taskStat
  },
  artifacts: {
    watch, verify, verifyTotal,
    snapshots: snap, handover, entrustCards, arch: { items: archItems },
    dispatch: { total: dispatchTotal, items: dispatchItems },
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
    + (warns.length ? ' · WARN ' + warns.length : ''));
} else {
  fs.mkdirSync(OUT, { recursive: true });
  const js = 'window.WITNESS = ' + JSON.stringify(data, null, 1) + ';\n';
  fs.writeFileSync(path.join(OUT, 'witness.js'), js, 'utf8');
  fs.writeFileSync(path.join(OUT, 'witness.json'), JSON.stringify(data, null, 2), 'utf8');
  console.log('[build-witness] OK · ' + (js.length / 1024).toFixed(1) + ' KB'
    + ' · 能力 ' + witCaps.length + ' · 委托 ' + entrustOrders.length + ' · 项目 ' + overview.projects
    + ' · 起点 ' + homeFeed.length
    + ' · → ' + path.relative(SITE, OUT).replace(/\\/g, '/'));
  if (warns.length) warns.forEach((w) => console.log('  WARN ' + w));
  if (errors.length) errors.forEach((w) => console.log('  ERR ' + w));
}
