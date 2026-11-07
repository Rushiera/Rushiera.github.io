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
  var layers = {}, jobs = {}, todo = 0;
  items.forEach(function (x) {
    layers[x.layer] = 1;
    todo += (x.todo || 0);
    (x.jobs || []).forEach(function (j) { jobs[j] = (jobs[j] || 0) + 1; });
  });
  var stats = [
    { n: items.length, k: '登记项目' },
    { n: Object.keys(layers).length, k: '工程层' },
    { n: Object.keys(jobs).length, k: '技术栈' },
    { n: todo, k: '在跟踪的待办' }
  ];
  $('stats').innerHTML = stats.map(function (s) {
    return '<div class="stat"><div class="n">' + s.n + '</div><div class="k">' + esc(s.k) + '</div></div>';
  }).join('');

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
