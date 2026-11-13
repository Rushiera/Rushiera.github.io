/* build-map.mjs — 从并发协议档案索引生成 gitpage 的数据文件
 *
 * 输入（只读）：
 *   WorkSpace:tools/并发协议/state/projects/index.json     项目清单（35）
 *   WorkSpace:tools/并发协议/state/projects/<pid>.json       项目卡片（purpose / created / todo）
 *   WorkSpace:tools/并发协议/state/archive.json            归档名单
 * 输出（本目录 data/）：
 *   projects.json   轻量清单，供 index.html 渲染精选与统计
 *   arch.js         window.ARCH 数据集，供 projects.html 的 archkit 渲染器消费
 *
 * 用法：
 *   node tools/build-map.mjs            # 全量（本地预览）
 *   node tools/build-map.mjs --public   # 公开档：只出白名单项目，去绝对路径
 *
 * 分层是人工建档（星图本质是判断，不是自动聚类）：改 LAYERS 即改图的骨架。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PUBLIC_PIDS } from './public-pids.mjs';

/* 目录全部从脚本位置推导（R4 归拢后不再写死绝对路径）：
   本脚本在 <协议根>/witness/gitpage/tools/ → 站点根 = 上两级，协议根 = 再上两级。 */
const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(HERE, '..');
const ROOT = path.join(SITE, '..', '..');
const STATE = path.join(ROOT, 'state', 'projects');
/* 参数：--public（白名单档）· --dry（只算不写）· --out=<dir>（落点，默认 <站点根>/data）。
   一份源两份构建的落点差异只在这一个参数——页面模板 / 抽取口径 / 白名单三处完全相同（见 tools/build-site.mjs）。 */
const PUBLIC = process.argv.includes('--public');
const DRY = process.argv.includes('--dry');   // 只算不写：refresh.mjs / build-site.mjs 的 dry 同口径
const argOf = (k, d) => {
  const hit = process.argv.find((a) => a.startsWith('--' + k + '='));
  return hit ? hit.slice(k.length + 3) : d;
};
const OUT = path.resolve(argOf('out', path.join(SITE, 'data')));

/* 五层：id 用于泳道与颜色，label 是图上带名，kind 只影响色点 */
const LAYERS = [
  { id: 'host', label: '运行地基 · 宿主与知识网络', kind: 'core', pids: ['CH4', 'Mau', 'CatHome2.0', 'CH3', 'Akasha', '并发协议', 'FileSync'] },
  { id: 'agent', label: 'Agent 与逆向', kind: 'sup', pids: ['ACS', 'REA', 'ECC', 'CGSE_CORE'] },
  { id: 'game', label: '游戏与运行时改造', kind: 'tgt', pids: ['CGSS-DMM', 'Gakumas', 'Hime', 'StarlitSeason', 'Cosmoteer', 'CatGame', 'TsuruPeta', 'LosslessScaling', 'ClashVerge', 'CloudDrive2', 'TradingView', 'sc2api-listen'] },
  { id: 'tool', label: '工具与数据', kind: 'cli', pids: ['ApiSiteAnalyzer', 'KKManager', 'KkFetch', 'MOSSCatalog', 'ComfyDock', 'SC2Replay', 'Vault', '挂载盘清理器', 'ThrottleStop'] },
  { id: 'private', label: '私域线', kind: 'fb', pids: ['BOSS直聘', 'QQBotB', '协商知识库'] }
];

/* 公开档白名单 → tools/public-pids.mjs（站点与提交时间线共用的单一真相源）。 */

const readJson = (p, fb) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) { return fb; } };
const normDate = (s) => { const m = String(s || '').match(/(\d{4})-(\d{2})-(\d{2})/); return m ? `${m[1]}-${m[2]}-${m[3]}` : ''; };
const clip = (s, n) => { const t = String(s || '').replace(/\s+/g, ' ').trim(); return t.length > n ? t.slice(0, n - 1) + '…' : t; };
/* worker 字段在档案里可能带整句括注（「Coder（无 Job——…）」）——卡片标签只取角色词 */
const roleOf = (s) => { const m = String(s || '').match(/^\s*([A-Za-z]{3,12})/); return m ? m[1] : ''; };

const INDEX_FILE = STATE + '/index.json';
const idx = readJson(INDEX_FILE, { items: [] });
/* 索引是唯一输入：缺失 / 为空时退出并出声——空数据集会被两页当成「没有项目」静默渲染 */
if (!Array.isArray(idx.items) || !idx.items.length) {
  console.error('[build-map] 索引为空或不存在：' + INDEX_FILE + '——先 POST /api/projects/scan；本脚本不产空数据。');
  process.exit(1);
}
/* 归档名单：现行落点 state/knobs/archive.json（面板写面）；旧落点 state/archive.json 兼容读。
   两处都缺 → 出声（归档标签静默消失会让人把「没有归档」当成事实）。 */
const archivePath = [path.join(ROOT, 'state', 'knobs', 'archive.json'), path.join(ROOT, 'state', 'archive.json')]
  .find((p) => fs.existsSync(p));
const archived = archivePath ? readJson(archivePath, {}) : {};
if (!archivePath) console.warn('[build-map] WARN 归档名单不在位（state/knobs/archive.json）——归档标签按空集处理');
else console.log('[build-map] 归档名单 ' + path.relative(ROOT, archivePath) + ' · ' + Object.keys(archived || {}).length + ' 项');
const archivedSet = new Set(Object.keys(archived || {}));

const layerOf = {};
for (const L of LAYERS) for (const pid of L.pids) layerOf[pid] = L.id;

const items = [];
let cardsMissing = 0;
for (const it of idx.items) {
  const pid = it.pid;
  if (PUBLIC && !PUBLIC_PIDS.includes(pid)) continue;
  const cardPath = STATE + '/' + pid + '.json';
  const card = readJson(cardPath, {});
  if (!fs.existsSync(cardPath)) cardsMissing += 1;
  const five = card.five || {};
  const todo = five.todo || {};
  const purpose = five.purpose ? five.purpose.summary : '';
  const created = normDate(card.created || it.created);
  items.push({
    pid,
    layer: layerOf[pid] || 'tool',
    type: clip(it.type || '', 44),
    version: String(it.version || '').trim(),
    worker: roleOf(it.worker),
    jobs: (Array.isArray(it.jobs) ? it.jobs : []).map((j) => clip(j, 12)).filter(Boolean),
    created,
    todo: typeof todo.count === 'number' ? todo.count : null,
    /* 版本推进条数（CHANGELOG 记录条数，档案现状口径）——供首屏产出格合计 */
    changelog: typeof it.changelogCount === 'number' ? it.changelogCount : 0,
    purpose: clip(purpose || (card.raw && card.raw['最近推进']) || '', 96),
    archived: archivedSet.has(pid)
  });
}

if (cardsMissing) console.warn('[build-map] WARN 索引有卡却缺卡片 ' + cardsMissing + ' 份（purpose / created 会回落空）——先 POST /api/projects/scan');
if (!DRY) fs.mkdirSync(OUT, { recursive: true });
/* 首屏三格（2026-11-09 定）：规模 / 动量 / 产出。
   动量取 order.json 的 focus + 待办两区——活跃度由排序器按七维算好，这里只做计数，不重算（判据单一实现）。
   产出 = CHANGELOG 记录条数合计（index.json 的 changelogCount，档案现状口径）。
   🔴 两项都按「在档 items」过滤：公开档白名单外的项目不计入，数字随档变，这是有意行为不是漂移。 */
const order = readJson(path.join(ROOT, 'state', 'flow', 'order.json'), null);
const onDisk = new Set(items.map((x) => x.pid));
const inZone = (k) => (Array.isArray(order?.[k]) ? order[k].filter((o) => o && onDisk.has(o.pid)).length : null);
const stats = {
  focus: order ? inZone('focus') : null,
  todoZone: order ? inZone('todo') : null,
  active: order ? (inZone('focus') ?? 0) + (inZone('todo') ?? 0) : null,
  versions: items.reduce((n, x) => n + (x.changelog || 0), 0)
};
/* 生成时刻取本机时区——原先用 toISOString（UTC），页脚比本地早 8 小时 */
const pad2 = (n) => String(n).padStart(2, '0');
const now = new Date();
const stamp = now.getFullYear() + '-' + pad2(now.getMonth() + 1) + '-' + pad2(now.getDate())
  + ' ' + pad2(now.getHours()) + ':' + pad2(now.getMinutes());
const light = { generatedAt: stamp, public: PUBLIC, count: items.length, stats, items };
if (!DRY) {
  fs.writeFileSync(path.join(OUT, 'projects.json'), JSON.stringify(light, null, 2), 'utf8');
  fs.writeFileSync(path.join(OUT, 'projects.js'), 'window.PROJECTS = ' + JSON.stringify(light, null, 1) + ';\n', 'utf8');
}

/* ---------- 视图一：项目星图（分层带） ---------- */
const COL = 5;
const nodes = [];
const bands = [];
/* 空层不出图（公开档下某个域可能为空，空带只会留一条无内容的横线） */
const LIVE = LAYERS.filter((L) => items.some((x) => x.layer === L.id));
LIVE.forEach((L, li) => {
  bands.push({ label: L.label });
  const mine = items.filter((x) => x.layer === L.id);
  mine.forEach((x, i) => {
    nodes.push({
      id: 'p-' + x.pid,
      label: x.pid,
      sub: x.type,
      kind: L.kind,
      /* 项目星图不承载「实现状态」（那是架构图语义）——统一 done，卡面不显示状态行（site.css 覆盖）；
         版本 / 待办 / 归档写在 note 里，详情侧栏仍可读。 */
      status: 'done',
      col: i % COL,
      row: li,
      tags: [x.worker].concat(x.jobs).filter(Boolean),
      note: [x.version || '', x.todo != null ? '待办 ' + x.todo : '', x.archived ? '已归档' : ''].filter(Boolean).join(' · '),
      evidence: 'Project/' + x.pid + '/project.md'
    });
  });
});

/* ---------- 视图二：起点时间线（按立项月分组） ---------- */
const LANES = LAYERS.map((L) => ({ id: L.id, name: L.label.split(' · ')[0], color: ({ core: '#0969da', sup: '#8250df', tgt: '#57606a', cli: '#953800', fb: '#bf3989' })[L.kind] }));
const sorted = items.slice().sort((a, b) => (a.created || '9999').localeCompare(b.created || '9999'));
const entries = sorted.map((x) => ({
  v: x.created ? x.created.slice(5) : '—',
  date: '',
  group: x.created ? x.created.slice(0, 7) : '未记起点',
  lane: x.layer,
  title: x.pid + ' · ' + x.type,
  items: [x.version || '版本未记', x.todo != null ? '待办 ' + x.todo : ''],
  status: x.archived ? 'plan' : (x.todo ? 'partial' : 'done'),
  evidence: 'Project/' + x.pid + '/project.md'
}));

const ARCH = {
  meta: {
    project: PUBLIC ? 'rushiera-public' : 'rushiera-map',
    title: 'Rushiera',
    sub: items.length + ' 个项目 · ' + LAYERS.length + ' 层 · 按工程域划分',
    ver: 'v1',
    updated: stamp.slice(0, 10),
    roleLabels: true,
    /* 只按宽度适配：层数多时纵向滚动，不把字号压到 8px（archkit README §三 meta.fit） */
    fit: 'width'
  },
  grid: { cols: COL, cw: 262, gap: 26, pad: 26, cwMax: 340 },
  /* 全量档标记：页面据此顶红色告警条（assets/dev-banner.js） */
  public: PUBLIC,
  /* 图例是架构图语义（实线=已实现 / 虚线斜纹=未实现）——本项目星图与起点时间线都不使用这些视觉元素，关掉免得误导 */
  legend: false,
  contract: { views: ['map', 'timeline'] },
  views: [
    {
      id: 'map', name: '项目星图', desc: '按工程层划分，颜色是主理角色',
      pages: [{ id: 'layers', name: '层 × 项目', type: 'diagram', bands, nodes, edges: [] }]
    },
    {
      id: 'timeline', name: '起点时间线', desc: '每个项目什么时候开的，不是什么时候完的',
      pages: [{ id: 'start', name: '立项时间线', type: 'timeline', lanes: LANES, entries }]
    }
  ]
};

if (!DRY) fs.writeFileSync(path.join(OUT, 'arch.js'), 'window.ARCH = ' + JSON.stringify(ARCH, null, 1) + ';\n', 'utf8');

console.log('[build-map] ' + (DRY ? 'DRY · ' : '') + (PUBLIC ? 'PUBLIC' : 'FULL') + ' · 项目 ' + items.length + ' · 在推进 ' + (stats.active == null ? '—' : stats.active) + ' · 版本推进 ' + stats.versions + ' · 节点 ' + nodes.length + ' · 时间轴 ' + entries.length + ' · → ' + path.relative(process.cwd(), OUT));
