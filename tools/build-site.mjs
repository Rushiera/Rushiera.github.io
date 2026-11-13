#!/usr/bin/env node
/* build-site.mjs — 站点构建器（一份源，两份构建）
 *
 * 为什么要有这一件：`refresh.mjs` 的全量与 `--public` 原先写同一个 `data/`——
 * 本地看全量就会把公开数据覆盖掉，「本地全量 + 线上面客」根本没法并存。
 * 现在把「读哪份数据 / 写哪个目录」收成一个参数，页面模板与抽取口径仍然只有一份。
 *
 * 两份产物的边界（拍板 A/C）：
 *   public —— 写 <站点根>/data（仓根，就是线上 Pages 的落点）。只含 public-pids.mjs 的白名单项目。
 *   full   —— 写 <站点根>/full/（gitignored）。页面与 assets 是副本，data/ 是全量（42 项目）。
 *             public 构建绝不读 full，也绝不输出白名单外的项目——本脚本每次构建都自证一遍。
 *
 * 用法（cwd 任意）：
 *   node witness/gitpage/tools/build-site.mjs                      # 默认 public
 *   node witness/gitpage/tools/build-site.mjs --profile=public     # 公开档（推送用）
 *   node witness/gitpage/tools/build-site.mjs --profile=full       # 完整档（本地预览）
 *   node witness/gitpage/tools/build-site.mjs --profile=both       # 两版都刷（收工 / 维护轮）
 *   node witness/gitpage/tools/build-site.mjs --dry                # 只报不写
 *   node witness/gitpage/tools/build-site.mjs --json               # 机器可读（面板 / 调度器消费）
 *
 * 输出：<dir>/projects.json · projects.js · arch.js · git/index.js（+ git/<pid>-git.js）
 * 依赖：面板在跑（8767，ACS_PANEL 可覆盖）——提交时间线读它的仓库解析结论。
 * 边界：只写站点目录；不 commit、不 push（推送归调度器 job，见 panel/SitePublisher.cs）。
 */
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PUBLIC_PIDS } from './public-pids.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(HERE, '..');
const ROOT = path.join(SITE, '..', '..');
const BUILD_MAP = path.join(HERE, 'build-map.mjs');
const GIT_TL = path.join(ROOT, 'witness', 'tools', 'build-git-timelines.mjs');

const argv = process.argv.slice(2);
const has = (k) => argv.includes('--' + k);
const opt = (k, d) => {
  const hit = argv.find((a) => a.startsWith('--' + k + '='));
  return hit ? hit.slice(k.length + 3) : d;
};
const DRY = has('dry');
const JSON_OUT = has('json');
const PROFILE = opt('profile', 'public');
const PAGES = ['index.html', 'projects.html', 'github.html', 'client.html'];
const ASSETS = 'assets';

if (!['public', 'full', 'both'].includes(PROFILE)) {
  console.error('[build-site] 未知 --profile=' + PROFILE + '（只认 public / full / both）');
  process.exit(2);
}

/** 跑一个 node 脚本；失败不抛，把退出码与输出一起带回（失败必须可见）。 */
function run(script, args, cwd) {
  try {
    const out = execFileSync(process.execPath, [script, ...args], {
      cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']
    });
    return { ok: true, code: 0, out };
  } catch (e) {
    return { ok: false, code: e.status ?? 1, out: `${e.stdout || ''}${e.stderr || ''}` };
  }
}
const one = (s) => String(s || '').trim().split(/\r?\n/).filter(Boolean).slice(-1)[0] || '';

/** 读一份产物的自证字段：项目数 / 档位标记 / 白名单外的泄漏项。 */
function inspect(dir) {
  const file = path.join(dir, 'projects.json');
  if (!fs.existsSync(file)) return { exists: false, count: 0, public: null, generatedAt: '', leak: [] };
  let j = {};
  try { j = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) {
    return { exists: true, count: 0, public: null, generatedAt: '', leak: [], error: 'projects.json 解析失败：' + e.message };
  }
  const pids = (Array.isArray(j.items) ? j.items : []).map((x) => x.pid);
  return {
    exists: true,
    count: pids.length,
    public: j.public === true,
    generatedAt: j.generatedAt || '',
    leak: pids.filter((pid) => !PUBLIC_PIDS.includes(pid))
  };
}

/** 拷一份目录（full 档的页面副本用）；源不存在就出声，不静默跳过。 */
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn('[build-site] WARN 源不存在，跳过复制：' + src);
    return false;
  }
  fs.cpSync(src, dest, { recursive: true, force: true });
  return true;
}

/** assets 版本串（构建期注入）：按 assets/ 全部文件的内容算——改一个字节就换串。
 *  页面源里不再手写日期串（旧做法：改 css/js 后要记得同改三个 html，漏一处就是半新半旧）。
 *  取内容哈希而非日期：同一份 assets 重跑得同一个串（幂等），内容变了才变（真实失效）。 */
function assetVersion() {
  const files = [];
  (function walk(dir, rel) {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const r = rel ? rel + '/' + e.name : e.name;
      if (e.isDirectory()) walk(path.join(dir, e.name), r);
      else files.push(r);
    }
  })(path.join(SITE, ASSETS), '');
  files.sort();
  const h = crypto.createHash('sha256');
  for (const r of files) {
    h.update(r); h.update('\0');
    h.update(fs.readFileSync(path.join(SITE, ASSETS, r))); h.update('\0');
  }
  return { token: h.digest('hex').slice(0, 8), files: files.length };
}

/** 把 ?v=<旧串> 换成构建期版本串。只认 assets/ 与 data/ 路径——
 *  index.html 的 projects.html?v=timeline 是业务参数，不是资源版本，绝不碰。 */
const VQ = /((?:assets|data)\/[^"'?#\s)]+)\?v=[0-9A-Za-z._-]+/g;
const VQ_LINE = /(var VER = '\?v=)[0-9A-Za-z._-]+(')/;
function injectVersions(token) {
  const touched = [];
  let hits = 0;
  for (const f of PAGES) {
    const fp = path.join(SITE, f);
    if (!fs.existsSync(fp)) { console.warn('[build-site] WARN 页面不存在，跳过版本注入：' + f); continue; }
    const before = fs.readFileSync(fp, 'utf8');
    hits += (before.match(VQ) || []).length + (VQ_LINE.test(before) ? 1 : 0);
    const after = before.replace(VQ, '$1?v=' + token).replace(VQ_LINE, '$1' + token + '$2');
    if (after === before) continue;
    touched.push(f);
    if (!DRY) fs.writeFileSync(fp, after);
  }
  return { touched, hits };
}

/** 构建一档；返回该档的回执（ok / 目录 / 两条子脚本 / 产物自证）。 */
function buildOne(profile) {
  const outDir = profile === 'public' ? path.join(SITE, 'data') : path.join(SITE, 'full', 'data');
  const common = [].concat(DRY ? ['--dry'] : [], ['--out=' + outDir]);

  if (profile === 'full' && !DRY) {
    const fullDir = path.join(SITE, 'full');
    fs.mkdirSync(fullDir, { recursive: true });
    for (const f of PAGES) {
      const src = path.join(SITE, f);
      if (!fs.existsSync(src)) { console.warn('[build-site] WARN 页面不存在：' + f); continue; }
      fs.copyFileSync(src, path.join(fullDir, f));
    }
    copyDir(path.join(SITE, ASSETS), path.join(fullDir, ASSETS));
  }

  const map = run(BUILD_MAP, [].concat(profile === 'public' ? ['--public'] : [], common), SITE);
  const tl = run(GIT_TL, [].concat(profile === 'public' ? ['--public'] : [], common), ROOT);
  const data = inspect(outDir);

  /* 自证：public 必须「全在白名单内 + public:true」；full 必须 public:false。
     这两条是拍板 C 的硬判据——构建器自己报，不靠人事后抽查。
     🔴 dry 不写盘：盘上的产物是上一次的结果，不是本次构建的输出——按「不可判」处理，
        不拿旧数据冒充新结论（dry 只看两个子脚本的退出码与摘要行）。 */
  const problems = [];
  if (!DRY) {
    if (profile === 'public') {
      if (data.exists && data.public !== true) problems.push('public 产物缺 public:true 标记');
      if (data.leak.length) problems.push('public 产物含白名单外项目 ' + data.leak.length + ' 个：' + data.leak.slice(0, 6).join(' / '));
    } else if (data.exists && data.public !== false) {
      problems.push('full 产物缺 public:false 标记（本地预览会误显示成公开档）');
    }
  }
  const ok = map.ok && tl.ok && (DRY || (data.exists && problems.length === 0));
  return {
    profile,
    ok,
    dir: path.relative(SITE, outDir).replace(/\\/g, '/'),
    map: { ok: map.ok, code: map.code, line: one(map.out) },
    timeline: { ok: tl.ok, code: tl.code, line: one(tl.out) },
    data: Object.assign({}, data, DRY ? { stale: true } : {}),
    problems
  };
}

const started = Date.now();
/* 版本串先行：full 档的页面副本在 buildOne 里拷，必须拷「已注入」的那一版。 */
const AV = assetVersion();
const INJ = injectVersions(AV.token);
const want = PROFILE === 'both' ? ['public', 'full'] : [PROFILE];
const profiles = want.map(buildOne);

/* 产物新鲜度：mtime ≥ 启动时刻 − 3s（dry 不判——本来就不写盘）。 */
const outputs = [];
for (const p of profiles) {
  for (const rel of ['projects.json', 'projects.js', 'arch.js', 'git/index.js']) {
    const fp = path.join(SITE, p.dir, rel);
    if (!fs.existsSync(fp)) { outputs.push({ profile: p.profile, rel, exists: false }); continue; }
    const st = fs.statSync(fp);
    outputs.push({
      profile: p.profile,
      rel,
      exists: true,
      size: st.size,
      mtime: st.mtime.toISOString(),
      fresh: DRY ? null : st.mtimeMs >= started - 3000
    });
  }
}
const missing = outputs.filter((o) => !o.exists);
const stale = DRY ? [] : outputs.filter((o) => o.exists && o.fresh === false);
/* dry 不写盘：产物缺失是预期（本来就没生成），只有两个子脚本的结论算数。 */
const ok = profiles.every((p) => p.ok) && (DRY || (missing.length === 0 && stale.length === 0));

if (JSON_OUT) {
  console.log(JSON.stringify({
    ok, dry: DRY, profile: PROFILE, profiles, outputs,
    version: { token: AV.token, assets: AV.files, pages: INJ.touched, replaced: INJ.hits },
    missing: missing.map((o) => o.profile + '/' + o.rel),
    stale: stale.map((o) => o.profile + '/' + o.rel)
  }, null, 2));
} else {
  console.log('[build-site] 版本串 ?v=' + AV.token + '（assets ' + AV.files + ' 件）· '
    + (INJ.touched.length ? '改写 ' + INJ.touched.length + ' 页：' + INJ.touched.join(', ') : '页面已是最新')
    + (DRY && INJ.touched.length ? '（DRY 未写盘）' : ''));
  if (INJ.touched.length && !DRY) {
    console.log('  ⚠ 页面版本串随 assets 变更更新——需与 assets 一并提交（发布 job 只提交 data/）');
  }
  for (const p of profiles) {
    console.log('[build-site] ' + (DRY ? 'DRY · ' : '') + p.profile.toUpperCase()
      + ' · ' + (p.ok ? 'OK' : 'FAIL') + ' · 项目 ' + p.data.count
      + (p.data.public === true ? ' · 公开档' : p.data.public === false ? ' · 全量档' : '')
      + ' · → ' + p.dir);
    if (!p.map.ok) console.log('  星图 FAIL：' + p.map.line);
    if (!p.timeline.ok) console.log('  时间线 FAIL：' + p.timeline.line);
    for (const x of p.problems) console.log('  ✗ ' + x);
  }
  for (const o of missing) console.log('  缺产物 ' + o.profile + '/' + o.rel);
  for (const o of stale) console.log('  未更新 ' + o.profile + '/' + o.rel);
}
process.exitCode = ok ? 0 : 1;
