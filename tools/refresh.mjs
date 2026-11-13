#!/usr/bin/env node
/* refresh.mjs — 站点数据机械自更新的兼容壳（转发 build-site.mjs）
 *
 * 历史与改名：本脚本原先自己串「build-map + build-git-timelines」，全量与 --public 写**同一个 data/**——
 * 本地看全量就会把公开数据覆盖掉（站点发布 v2 要解的结构问题）。2026-11-13 起构建口径统一收进
 * `build-site.mjs`（--profile=public|full|both），本脚本只保留兼容入口与回执形状，
 * 旧调用点（maintain.mjs --site / 文档里的人手命令 / 收工分片跑法）不必改。
 *
 * 用法（cwd 任意）：
 *   node witness/gitpage/tools/refresh.mjs                 # = build-site --profile=public（线上数据）
 *   node witness/gitpage/tools/refresh.mjs --profile=full  # 完整站（本地预览，写 full/）
 *   node witness/gitpage/tools/refresh.mjs --profile=both  # 两版都刷（维护轮 / 收工）
 *   node witness/gitpage/tools/refresh.mjs --dry           # 只报不写
 *   node witness/gitpage/tools/refresh.mjs --json          # 机器可读（maintain.mjs --site 消费）
 *
 * 回执兼容：{ ok, dry, public, map, timeline, outputs, profiles }——旧字段照留，新明细进 profiles。
 * 边界：只写站点目录；不 commit、不 push（推送归调度器 job）。
 */
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(HERE, '..');
const BUILD = path.join(HERE, 'build-site.mjs');
const argv = process.argv.slice(2);
const has = (k) => argv.includes('--' + k);
const opt = (k, d) => {
  const hit = argv.find((a) => a.startsWith('--' + k + '='));
  return hit ? hit.slice(k.length + 3) : d;
};
const DRY = has('dry');
const JSON_OUT = has('json');
const PROFILE = opt('profile', 'public');

let res;
try {
  const out = execFileSync(process.execPath, [BUILD, '--profile=' + PROFILE, '--json'].concat(DRY ? ['--dry'] : []), {
    cwd: SITE, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']
  });
  res = JSON.parse(out);
} catch (e) {
  /* 构建失败也带 JSON 回执（build-site 的 --json 在失败时同样打印完整回执）——解析失败才按纯文本报。 */
  const raw = `${e.stdout || ''}${e.stderr || ''}`;
  try { res = JSON.parse(raw); } catch {
    console.error('[refresh] 构建失败（exit ' + (e.status ?? 1) + '）：' + raw.trim().split(/\r?\n/).slice(-1)[0]);
    process.exit(e.status ?? 1);
  }
}

const first = (res.profiles || [])[0] || {};
const legacy = {
  ok: res.ok === true,
  dry: res.dry === true,
  public: PROFILE === 'public',
  profile: PROFILE,
  map: first.map || null,
  timeline: first.timeline || null,
  outputs: (res.outputs || []).filter((o) => o.profile === (first.profile || PROFILE)),
  profiles: res.profiles || [],
  missing: res.missing || [],
  stale: res.stale || []
};

if (JSON_OUT) {
  console.log(JSON.stringify(legacy, null, 2));
} else {
  const m = legacy.map || {};
  const t = legacy.timeline || {};
  const outs = legacy.outputs || [];
  const fresh = outs.filter((o) => o.exists && o.fresh !== false).length;
  console.log('gitpage · ' + PROFILE + ' · 星图 ' + (m.ok ? 'OK' : 'FAIL') + ' · 时间线 ' + (t.ok ? 'OK' : 'FAIL')
    + ' · 产物 ' + outs.filter((o) => o.exists).length + '/' + outs.length
    + (DRY ? '（dry · 不写盘）' : '（新鲜 ' + fresh + '/' + outs.length + '）'));
  for (const p of legacy.profiles) {
    if (!p.map.ok) console.log('  ' + (p.map.line || ''));
    if (!p.timeline.ok) console.log('  ' + (p.timeline.line || ''));
    for (const x of p.problems || []) console.log('  ✗ ' + x);
  }
  for (const o of legacy.outputs) if (o.exists && o.fresh === false) console.log('  未更新 ' + o.rel);
  for (const m2 of legacy.missing) console.log('  缺产物 ' + m2);
}
process.exitCode = legacy.ok ? 0 : 1;
