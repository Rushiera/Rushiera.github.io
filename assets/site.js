/* site.js — 主页渲染：统计 / 技术栈 / 精选 / 时间流
   数据来自 data/projects.js（window.PROJECTS，构建期由 tools/build-map.mjs 生成），
   不在页面里手写项目清单——档案变了重跑生成器即可。 */
(function () {
  var P = window.PROJECTS;
  if (!P || !P.items) return;
  var items = P.items;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };

  /* ---------- 统计 ---------- */
  var jobs = {};
  items.forEach(function (x) {
    (x.jobs || []).forEach(function (j) { jobs[j] = (jobs[j] || 0) + 1; });
  });
  /* 首屏三格（2026-11-09 定）：规模 / 动量 / 产出。
     数据来自 build-map 的 stats；缺数据给「—」——不用别的量顶（失败可见）。 */
  var S = P.stats || {};
  var stats = [
    { n: items.length, k: '个项目在册' },
    { n: S.active != null ? S.active : '—', k: '个本周在推进' },
    { n: S.versions != null ? S.versions : '—', k: '次版本推进' }
  ];
  $('statline').innerHTML = stats.map(function (s) {
    return '<div><b>' + s.n + '</b>' + esc(s.k) + '</div>';
  }).join('');
  /* lede 里的项目数取自数据（原先手写「35 个」，与在册数已漂） */
  var pc = $('pcount');
  if (pc) pc.textContent = items.length;

  /* ---------- 技术栈（按出现频次排序，取前 14） ---------- */
  var order = Object.keys(jobs).sort(function (a, b) { return jobs[b] - jobs[a]; }).slice(0, 14);
  $('stack').innerHTML = order.map(function (j) {
    return '<span class="chip"><b>' + esc(j) + '</b><i>' + jobs[j] + '</i></span>';
  }).join('');

  /* ---------- 精选：人工点名的六个，缺了自动跳过 ---------- */
  var FEATURED = ['CH4', 'Mau', '并发协议', 'ACS', 'REA', 'MOSSCatalog'];
  var byPid = {};
  items.forEach(function (x) { byPid[x.pid] = x; });
  $('featured').innerHTML = FEATURED.filter(function (p) { return byPid[p]; }).map(function (p) {
    var x = byPid[p];
    var tags = (x.jobs || []).slice(0, 3).map(function (j) { return '<span class="tag">' + esc(j) + '</span>'; }).join('');
    return '<div class="card">' +
      '<div class="hd"><span class="nm">' + esc(x.pid) + '</span><span class="ver">' + esc(x.version || '') + '</span></div>' +
      '<div class="tp">' + esc(x.purpose || x.type) + '</div>' +
      '<div class="ft">' + tags + '<span>' + (x.todo ? '待办 ' + x.todo : '待办 0') + '</span></div>' +
      '</div>';
  }).join('');

  /* ---------- 时间流：按立项日倒序取 8 条 ---------- */
  var feed = items.slice().sort(function (a, b) {
    return (b.created || '').localeCompare(a.created || '');
  }).slice(0, 8);
  $('feed').innerHTML = feed.map(function (x, i) {
    return '<li' + (i === 0 ? ' class="now"' : '') + '>' +
      '<span class="d">' + esc(x.created || '—') + '</span>' +
      '<span class="t">' + esc(x.pid) + '</span>' +
      '<div class="s">' + esc(x.type || '') + '</div></li>';
  }).join('');
})();
