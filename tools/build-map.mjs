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

const STATE = 'D:/Mau/WorkSpace/tools/并发协议/state/projects';
const HERE = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const OUT = path.join(HERE, '..', 'data');
/* 默认出全量（本地预览要看到完整星图）；--public 出公开档（白名单、可安全推送）
   全量档在数据里带 public:false，两页都会顶一条红色告警条（assets/dev-banner.js）——误推前看得见。 */
const PUBLIC = process.argv.includes('--public');

/* 五层：id 用于泳道与颜色，label 是图上带名，kind 只影响色点 */
const LAYERS = [
  { id: 'host', label: '运行地基 · 宿主与知识网络', kind: 'core', pids: ['CH4', 'Mau', 'CatHome2.0', 'CH3', 'Akasha', '并发协议', 'FileSync'] },
  { id: 'agent', label: 'Agent 与逆向', kind: 'sup', pids: ['ACS', 'REA', 'ECC', 'CGSE_CORE'] },
  { id: 'game', label: '游戏与运行时改造', kind: 'tgt', pids: ['CGSS-DMM', 'Gakumas', 'Hime', 'StarlitSeason', 'Cosmoteer', 'CatGame', 'TsuruPeta', 'LosslessScaling', 'ClashVerge', 'CloudDrive2', 'TradingView', 'sc2api-listen'] },
  { id: 'tool', label: '工具与数据', kind: 'cli', pids: ['ApiSiteAnalyzer', 'KKManager', 'KkFetch', 'MOSSCatalog', 'ComfyDock', 'SC2Replay', 'Vault', '挂载盘清理器', 'ThrottleStop'] },
  { id: 'private', label: '私域线', kind: 'fb', pids: ['BOSS直聘', 'QQBotB', '协商知识库'] }
];

/* 公开档白名单：技术性 / 可公开的项目。增删改这一行即可。 */
const PUBLIC_PIDS = ['CH4', 'Mau', 'Akasha', '并发协议', 'CH3', 'CatHome2.0', 'ACS', 'REA', 'ECC',
  'CGSE_CORE', 'MOSSCatalog', 'ComfyDock', 'SC2Replay', 'ApiSiteAnalyzer', 'KkFetch',
  'sc2api-listen', 'FileSync', 'Cosmoteer', 'ClashVerge', 'LosslessScaling', 'CloudDrive2'];

const readJson = (p, fb) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) { return fb; } };
const normDate = (s) => { const m = String(s || '').match(/(\d{4})-(\d{2})-(\d{2})/); return m ? `${m[1]}-${m[2]}-${m[3]}` : ''; };
const clip = (s, n) => { const t = String(s || '').replace(/\s+/g, ' ').trim(); return t.length > n ? t.slice(0, n - 1) + '…' : t; };
/* worker 字段在档案里可能带整句括注（「Coder（无 Job——…）」）——卡片标签只取角色词 */
const roleOf = (s) => { const m = String(s || '').match(/^\s*([A-Za-z]{3,12})/); return m ? m[1] : ''; };

const idx = readJson(STATE + '/index.json', { items: [] });
const archived = readJson(STATE + '/archive.json', {});
const archivedSet = new Set(Object.keys(archived || {}));

const layerOf = {};
for (const L of LAYERS) for (const pid of L.pids) layerOf[pid] = L.id;

const items = [];
for (const it of idx.items) {
  const pid = it.pid;
  if (PUBLIC && !PUBLIC_PIDS.includes(pid)) continue;
  const card = readJson(STATE + '/' + pid + '.json', {});
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
    purpose: clip(purpose || (card.raw && card.raw['最近推进']) || '', 96),
    archived: archivedSet.has(pid)
  });
}

fs.mkdirSync(OUT, { recursive: true });
const light = { generatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '), public: PUBLIC, count: items.length, items };
fs.writeFileSync(path.join(OUT, 'projects.json'), JSON.stringify(light, null, 2), 'utf8');
fs.writeFileSync(path.join(OUT, 'projects.js'), 'window.PROJECTS = ' + JSON.stringify(light, null, 1) + ';\n', 'utf8');

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
    updated: new Date().toISOString().slice(0, 10),
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

fs.writeFileSync(path.join(OUT, 'arch.js'), 'window.ARCH = ' + JSON.stringify(ARCH, null, 1) + ';\n', 'utf8');

console.log('[build-map] ' + (PUBLIC ? 'PUBLIC' : 'FULL') + ' · 项目 ' + items.length + ' · 节点 ' + nodes.length + ' · 时间轴 ' + entries.length + ' · → ' + path.relative(process.cwd(), OUT));
