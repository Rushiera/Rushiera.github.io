#!/usr/bin/env node
/* refresh.mjs — gitpage 站点数据的机械自更新（一条命令：项目星图 + 提交时间线）
 *
 * 为什么要有这一件：站点数据原先散在两个脚本里手跑（build-map + build-git-timelines），
 * 谁忘了跑一次，站点就停在旧档案上——「数据在、但已经不新鲜」。本脚本把两步收成一条链，
 * 并按「产物 mtime ≥ 启动时刻」判新鲜；失败一律出声（非零退出），不静默产半份数据。
 *
 * 用法（cwd 任意）：
 *   node witness/gitpage/tools/refresh.mjs             # 全量（本地预览，含私域线）
 *   node witness/gitpage/tools/refresh.mjs --dry       # 只报不写（两脚本都走 dry）
 *   node witness/gitpage/tools/refresh.mjs --public    # 公开档（白名单收窄，推送用）
 *   node witness/gitpage/tools/refresh.mjs --json      # 机器可读（maintain.mjs --site 消费）
 *
 * 输入（只读）：state/projects/*（面板索引）+ 面板 /api/projects*（仓库与提交）+ 本地 git 仓
 * 输出：data/projects.json · data/projects.js · data/arch.js · data/git/index.js（+ data/git/*-git.js）
 * 依赖：面板在跑（8767，可用 ACS_PANEL 覆盖）——build-git-timelines 读它的仓库解析结论。
 * 边界：只写站点 data/ 与 ccbp:Project/并发协议/history/arch/*-git.js；不 commit、不 push。
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(HERE, '..');
const ROOT = path.join(SITE, '..', '..');
const argv = process.argv.slice(2);
const has = (k) => argv.includes('--' + k);
const DRY = has('dry');
const PUBLIC = has('public');
const JSON_OUT = has('json');
const started = Date.now();

/** 跑一个 node 脚本；失败不抛，把退出码与输出一起带回。 */
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

/* 1) 项目星图：build-map.mjs（站点根 cwd；--dry 只算不写） */
const map = run(path.join(HERE, 'build-map.mjs'), [].concat(DRY ? ['--dry'] : [], PUBLIC ? ['--public'] : []), SITE);
/* 2) 提交时间线：witness/tools/build-git-timelines.mjs（协议根 cwd；--dry 只报不写） */
const tl = run(path.join(ROOT, 'witness', 'tools', 'build-git-timelines.mjs'), [].concat(DRY ? ['--dry'] : [], PUBLIC ? ['--public'] : []), ROOT);

/* 3) 产物新鲜度：mtime ≥ 启动时刻 − 3s（盘上时钟粒度与写入延迟留余量） */
const outputs = ['data/projects.json', 'data/projects.js', 'data/arch.js', 'data/git/index.js'].map((rel) => {
  const fp = path.join(SITE, rel);
  if (!fs.existsSync(fp)) return { rel, exists: false };
  const st = fs.statSync(fp);
  return { rel, exists: true, size: st.size, mtime: st.mtime.toISOString(), fresh: st.mtimeMs >= started - 3000 };
});
const missing = outputs.filter((o) => !o.exists);
const stale = DRY ? [] : outputs.filter((o) => o.exists && !o.fresh);
const ok = map.ok && tl.ok && !missing.length && !stale.length;

if (JSON_OUT) {
  console.log(JSON.stringify({
    ok, dry: DRY, public: PUBLIC,
    map: { ok: map.ok, code: map.code, line: one(map.out) },
    timeline: { ok: tl.ok, code: tl.code, line: one(tl.out) },
    outputs
  }, null, 2));
} else {
  const fresh = outputs.length - missing.length - stale.length;
  console.log(`gitpage · 星图 ${map.ok ? 'OK' : 'FAIL'} · 时间线 ${tl.ok ? 'OK' : 'FAIL'} · 产物 ${outputs.length - missing.length}/${outputs.length}${DRY ? '（dry · 不写盘）' : `（新鲜 ${fresh}/${outputs.length}）`}`);
  if (!map.ok) console.log('  ' + one(map.out));
  if (!tl.ok) console.log('  ' + one(tl.out));
  for (const o of missing) console.log('  缺产物 ' + o.rel);
  for (const o of stale) console.log('  未更新 ' + o.rel);
  if (!DRY) console.log('  ' + one(map.out));
  if (!DRY) console.log('  ' + one(tl.out));
}
process.exitCode = ok ? 0 : 1;
