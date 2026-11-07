/* archkit — 渲染器 v2（零依赖）
 *
 * 两种页面：
 *   diagram  —— 分层带架构图（HTML 节点 + 正交 SVG 连线 + 箭头 + rAF 流动点）
 *   timeline —— 时间轴演进（按 changelog 逐版一行，泳道色标，未来区虚线）
 *
 * 数据契约（window.ARCH）：
 * {
 *   meta:{project,title,sub,ver,updated,sources:[{label,path}],archived:[pid]},
 *   grid:{cols,cw,gap,pad},
 *   views:[{ id,name,desc, pages:[ page ] }]
 * }
 * diagram page:  { id,name,note,type:'diagram', bands:[{label}], nodes:[...], edges:[...] }
 *   node: {id,label,sub,kind,status,col,row,span,note,evidence,tags}
 *   归档名单：面板注入 window.ARCH_ARCHIVED（真相源 state/archive.json），节点按 evidence 里的目录名对 pid
 *   edge: {from,to,label,kind:'plan',anim}
 * timeline page: { id,name,note,type:'timeline', lanes:[{id,name,color}], entries:[...] }
 *   entry: {v,date,title,lane,status,items[],group,now?}   future 条目同构（status:'plan'）
 * status: done | partial | plan | missing
 * kind:   cli | core | sup | port | tgt | fb | phase
 */
(function () {
  var S = { done: '已实现', partial: '部分实现', plan: '未实现 · 计划', missing: '缺口' };
  var KINDNAME = { cli: '外部', core: '核心域', sup: '支撑子域', port: '端口', tgt: '目标', fb: '反馈', phase: '阶段' };
  var SVGNS = 'http://www.w3.org/2000/svg';

  var A = window.ARCH, G, curView = 0, curPage = 0, sel = null, pendingSel = null;
  /* 紧凑头（meta.compactHead）：不建顶栏（品牌 / 视图 tab）、不摆视图标题与描述、不摆页注——
     只剩图例 + 画布，标题交给宿主弹层（项目星图这类单视图数据用）。 */
  var compact = !!(A && A.meta && A.meta.compactHead);
  var stateKey = '', pendingState = null, saveTimer = null;
  var V = [];
  var viewHead, pagesBar, stage, legend, side;

  function el(tag, cls, html) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (html != null) d.innerHTML = html;
    return d;
  }
  function svgEl(tag) { return document.createElementNS(SVGNS, tag); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }

  /* ---------- 归档口径（人工收口 · 参考部分） ----------
     归档名单的唯一真相源是面板 state/archive.json，出图前由 /api/archkit/model 注入 meta.archived；
     节点用 evidence 里的项目目录名（…/<pid>/project.md）对 pid，模板不另存名单。
     file:// 直开没有服务端 → archived 缺失 = 不标归档（回落为纯档案视图，不伪造状态）。 */
  function pidOf(n) {
    var m = String((n && n.evidence) || '').match(/([^\/\\:]+)\/project\.md$/i);
    return m ? m[1] : '';
  }
  var archivedSet = (function () {
    var set = {};
    /* 面板注入 window.ARCH_ARCHIVED（真相源 state/archive.json，经 /api/projects/archive 转发）；
       数据集自带 meta.archived 作后备。file:// 直开两者皆无 → 空集 = 不标归档（不伪造状态）。 */
    var list = window.ARCH_ARCHIVED || (A.meta && A.meta.archived) || [];
    list.forEach(function (p) { set[String(p).toLowerCase()] = 1; });
    return set;
  })();
  function isArchived(n) {
    var p = pidOf(n);
    return !!(p && archivedSet[p.toLowerCase()]);
  }
  var ARCH_NOTE = '已归档(参考部分)';

  /* 「隐藏解释」名单同理由面板注入（window.ARCH_HIDDEN，真相源 state/archive-hidden.json）——
     命中时卡面只留标题与角色行（含「归档」），不摆解释文字（简述 / 断言 / 状态行）。 */
  var hiddenSet = (function () {
    var set = {};
    (window.ARCH_HIDDEN || []).forEach(function (p) { set[String(p).toLowerCase()] = 1; });
    return set;
  })();
  function isHiddenDesc(n) {
    var p = pidOf(n);
    return !!(p && hiddenSet[p.toLowerCase()]);
  }

  /* ---------- 顶栏 ---------- */
  function buildTop() {
    if (compact) return;   /* 紧凑头：顶栏不建，标题归宿主 */
    var top = el('div', 'top');
    var inn = el('div', 'top-in');
    var b = el('div', 'brand');
    b.appendChild(el('b', null, esc(A.meta.title)));
    if (A.meta.sub) b.appendChild(el('span', 'sub', esc(A.meta.sub)));
    if (A.meta.ver) b.appendChild(el('span', 'ver', esc(A.meta.ver)));
    inn.appendChild(b);

    var tabs = el('div', 'tabs');
    V.forEach(function (v, i) {
      var t = el('button', 'tab', esc(v.name));
      t.onclick = function () { curView = i; curPage = 0; renderView(); };
      tabs.appendChild(t);
    });
    inn.appendChild(tabs);
    inn.appendChild(el('div', 'spacer'));
    inn.appendChild(el('div', 'topmeta', esc((A.meta.project || '') + ' · ' + (A.meta.updated || ''))));
    top.appendChild(inn);
    document.body.appendChild(top);
  }

  function buildShell() {
    viewHead = el('div', 'vhead');
    pagesBar = el('div', 'pages');
    legend = el('div', 'legend');
    stage = el('div', 'stage');
    document.body.appendChild(viewHead);
    if (compact) viewHead.style.display = 'none';
    document.body.appendChild(pagesBar);
    document.body.appendChild(legend);
    document.body.appendChild(stage);
  }

  /* 视图可见页 = 自身未隐藏的页 + borrow 借入页（借用源视图可 hidden） */
  function viewPages(v) {
    var list = (v.pages || []).filter(function (p) { return !p.hidden; });
    (v.borrow || []).forEach(function (b) {
      var bv = null;
      A.views.forEach(function (x) { if (x.id === b.view) bv = x; });
      if (!bv) return;
      (bv.pages || []).forEach(function (p) { if (p.id === b.page) list.push(p); });
    });
    return list;
  }

  /* 多页纵向合成为一页：保留页边界（groups）——各组独立布局（band / tree），渲染时纵向拼接；
     视图声明 root 时改为单树模式（各组节点挂同一根，见 renderDiagram2 的 single 分支） */
  function mergePages(pages, v) {
    return { id: 'merged', name: '', note: '', grid: {}, groups: pages, root: v && v.root };
  }

  function renderView() {
    var v = V[curView];
    each(document.querySelectorAll('.top .tab'), function (t, i) {
      t.className = 'tab' + (i === curView ? ' on' : '');
    });
    viewHead.innerHTML = '';
    if (!compact) {
      viewHead.appendChild(el('h2', null, esc(v.name)));
      if (v.desc) viewHead.appendChild(el('p', null, esc(v.desc)));
    }

    var pages = viewPages(v);
    pagesBar.innerHTML = '';
    if (pages.length > 1 && !v.merge) {
      pages.forEach(function (p, i) {
        var t = el('button', 'pg' + (i === curPage ? ' on' : ''), esc(p.name));
        t.onclick = function () { curPage = i; renderView(); };
        pagesBar.appendChild(t);
      });
      pagesBar.style.display = '';
    } else {
      pagesBar.style.display = 'none';
    }
    renderLegend(v, pages);
    var page = v.merge ? mergePages(pages, v) : pages[curPage];
    if (page.type === 'timeline') renderTimeline(page);
    else renderDiagram2(page, v);
    queueSave();
  }

  function renderLegend(v, pages) {
    legend.innerHTML = '';
    if (A.legend === false) { legend.style.display = 'none'; return; }
    var page = pages[curPage] || pages[0];
    legend.style.display = '';
    var items;
    if (page.type === 'timeline') {
      items = [['dot', '实心 = 已发布'], ['dot', '虚线 = 计划'],
               ['bar', '左侧色条 = 主题泳道']];
    } else {
      items = [['sq', '实线 = 已实现'], ['sq dash', '虚线斜纹 = 未实现'],
               ['sw', '连线 = 数据流（树 = 父子）'], ['sw dash', '虚线 = 计划中的连接']];
      if (Object.keys(archivedSet).length) items.push(['sq arch', '淡灰斜纹 = 已归档（参考部分）']);
    }
    items.forEach(function (it) {
      var s = el('span');
      s.appendChild(el('i', it[0]));
      s.appendChild(document.createTextNode(it[1]));
      legend.appendChild(s);
    });
    if (pages.length > 1 && !v.merge) {
      var n = el('span', null, pages.length + ' 页 · 上方切换');
      n.style.marginLeft = 'auto'; n.style.color = '#aeb6bf';
      legend.appendChild(n);
    }
  }

  /* ================= diagram ================= */
  /* 无限画布：滚轮缩放（以指针为锚）· 左键拖动平移 · 双击适应窗口 */
  var vpEl = null, canvasEl = null, vb = { k: 1, tx: 0, ty: 0 }, drag = null, suppressClick = false, userMoved = false;

  function bindViewport(vp) {
    vp.addEventListener('wheel', function (e) {
      e.preventDefault();
      userMoved = true;
      var r = vp.getBoundingClientRect();
      var mx = e.clientX - r.left, my = e.clientY - r.top;
      var k2 = Math.min(2.5, Math.max(0.02, vb.k * (e.deltaY < 0 ? 1.12 : 1 / 1.12)));
      vb.tx = mx - (mx - vb.tx) * (k2 / vb.k);
      vb.ty = my - (my - vb.ty) * (k2 / vb.k);
      vb.k = k2; applyView();
    }, { passive: false });
    vp.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      drag = { x: e.clientX, y: e.clientY, tx: vb.tx, ty: vb.ty, moved: false };
      vp.classList.add('on');
    });
    vp.addEventListener('dblclick', function () { userMoved = false; fitView(); });
  }

  function applyView() {
    if (canvasEl) canvasEl.style.transform = 'translate(' + vb.tx + 'px,' + vb.ty + 'px) scale(' + vb.k + ')';
    queueSave();
  }

  /* 画布状态持久化：按项目 key 记住缩放 / 平移 / 当前视图（localStorage；关页前再兜一次） */
  function queueSave() {
    if (!stateKey) return;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(saveState, 180);
  }
  function saveState() {
    if (!stateKey) return;
    try {
      localStorage.setItem(stateKey, JSON.stringify({
        k: vb.k, tx: vb.tx, ty: vb.ty,
        cw: canvasEl ? canvasEl.offsetWidth : 0,
        ch: canvasEl ? canvasEl.offsetHeight : 0,
        view: (V[curView] && V[curView].id) || '', page: curPage, ts: Date.now()
      }));
    } catch (e) { /* localStorage 不可用（隐私模式 / file 限制）时静默降级为不记忆 */ }
  }
  function loadState() {
    if (!stateKey) return null;
    try {
      var s = JSON.parse(localStorage.getItem(stateKey) || 'null');
      return (s && typeof s.k === 'number') ? s : null;
    } catch (e) { return null; }
  }
  /* 恢复记忆状态：夹到「画布至少露一角」，防窗口缩小后整张图被推出视口；
     画布尺寸变了（改了卡片宽度 / 节点增减）→ 旧平移不再成立，返回 false 交回 fitView */
  function applyState(s) {
    if (!vpEl || !canvasEl) return false;
    var CW = canvasEl.offsetWidth, CH = canvasEl.offsetHeight;
    if (s.cw && (Math.abs(CW - s.cw) > CW * 0.1 || Math.abs(CH - (s.ch || CH)) > CH * 0.1)) return false;
    var vw = vpEl.clientWidth, vh = vpEl.clientHeight;
    var w = CW * s.k, h = CH * s.k;
    vb.k = Math.min(2.5, Math.max(0.02, s.k));
    vb.tx = Math.min(vw - 80, Math.max(80 - w, s.tx || 0));
    vb.ty = Math.min(vh - 80, Math.max(80 - h, s.ty || 0));
    applyView();
    return true;
  }

  function fitView() {
    if (!vpEl || !canvasEl) return;
    var vw = vpEl.clientWidth, vh = vpEl.clientHeight;
    var W = parseFloat(canvasEl.style.width) || canvasEl.offsetWidth || vw;
    var H = parseFloat(canvasEl.style.height) || canvasEl.offsetHeight || vh;
    /* 适应视图：宽高都装进视口；不设最小缩放——画布多大就多大，字小了靠滚轮放大。
       meta.fit='width'：只按宽度适配（纵向长图不压成一条），顶部对齐、向下滚动。
       缺省行为不变——ACS 等既有数据集不声明即走宽高双适配。 */
    var k = Math.min(1, (vw - 32) / W, (vh - 32) / H);
    var widthFit = !!(A && A.meta && A.meta.fit === 'width');
    if (widthFit) k = (vw - 32) / W;
    vb.k = Math.max(0.02, k);
    vb.tx = (vw - W * vb.k) / 2;
    /* 纵向：图比视口矮 → 居中（上下均匀留白）；比视口高 → 顶部对齐（向下拖看，不裁头） */
    vb.ty = widthFit ? Math.max(16, (vh - H * vb.k) / 2) : (vh - H * vb.k) / 2;
    applyView();
  }

  /* ================= diagram v2：按页分组布局 =================
     page.layout = 'tree' → 横向思维导图式（parent 链，x = 深度，y = 子树中点）
     缺省 → 分层带（band）。merge 视图按页分组：各组独立布局、纵向拼接，组间画「◆ 页名」。 */

  function layoutBandGroup(list, bands, cw, gap, pad) {
    /* 归档沉底：同一层内已归档的卡排到本层最后（同列落到该列底部），层级与列位本身不变。
       排序落在 list 上（调用方同一数组），后续定位与连线读的就是这个顺序。 */
    list.sort(function (a, b) {
      var ra = a.n.row || 0, rb = b.n.row || 0;
      if (ra !== rb) return ra - rb;
      var aa = isArchived(a.n) ? 1 : 0, ab = isArchived(b.n) ? 1 : 0;
      return aa - ab;
    });
    var colMax = {}, colCnt = {}, rows = {}, maxRow = 0, maxCol = 0;
    list.forEach(function (p) {
      var r = p.n.row || 0, c = p.n.col || 0, k = r + ':' + c;
      colMax[k] = Math.max(colMax[k] || 0, p.h);
      colCnt[k] = (colCnt[k] || 0) + 1;
      maxCol = Math.max(maxCol, c + (p.n.span || 1));
      maxRow = Math.max(maxRow, r);
    });
    /* 同列等高：按该列最高卡定高并重测（堆叠偏移用旧高会压盖下一张） */
    list.forEach(function (p) {
      var k = (p.n.row || 0) + ':' + (p.n.col || 0);
      if (colMax[k] > p.h) { p.d.style.minHeight = colMax[k] + 'px'; p.h = p.d.offsetHeight; }
    });
    Object.keys(colCnt).forEach(function (k) {
      var r = k.split(':')[0];
      var hh = colCnt[k] * (colMax[k] + 12) - 12;
      rows[r] = Math.max(rows[r] || 0, hh);
    });
    var nBands = Math.max((bands || []).length, maxRow + 1, 1);
    var bandTop = [], acc = 0;
    for (var i = 0; i < nBands; i++) {
      var bh = rows[i] ? rows[i] + 52 : ((bands[i] && bands[i].h) || 110);
      bandTop.push(acc); acc += bh;
    }
    var cursor = {};
    list.forEach(function (p) {
      var r = p.n.row || 0, c = p.n.col || 0, key = r + ':' + c, used = cursor[key] || 0;
      p.x = pad + c * (cw + gap);
      p.y = bandTop[r] + 34 + used;
      cursor[key] = used + p.h + 12;
    });
    var bottom = 0;
    list.forEach(function (p) { bottom = Math.max(bottom, p.y + p.h); });
    return { height: Math.max(acc, bottom + 30), bandTop: bandTop, nBands: nBands, cols: Math.max(maxCol, 1) };
  }

  /* 径向环绕（唯一树形）：根居中，子节点各占扇区，半径按层反推 */
  function layoutTreeGroup(list, cw, gap, pad) {
    var byId = {}, kids = {}, roots = [];
    list.forEach(function (p) { byId[p.n.id] = p; });
    list.forEach(function (p) {
      var pid = p.n.parent;
      if (pid && byId[pid] && pid !== p.n.id) (kids[pid] = kids[pid] || []).push(p);
      else roots.push(p);
    });
    /* 全向环绕（径向树）：根在中心，子节点各占一个扇区；半径由「该层最小扇区」反推——
       环上相邻两卡的中心距刚够放下卡片宽 / 高即可，不按固定步长堆空白。 */
    var TAU = Math.PI * 2, MIN_SPAN = 0.14;
    function leaves(p) {
      var ch = kids[p.n.id] || [];
      if (!ch.length) return 1;
      var s = 0;
      ch.forEach(function (c) { s += leaves(c); });
      return s;
    }
    function assign(p, a0, a1, depth) {
      p.a = (a0 + a1) / 2;
      p.depth = depth;
      p.span = a1 - a0;
      var ch = kids[p.n.id] || [];
      if (!ch.length) return;
      var avail = a1 - a0;
      var minA = Math.min(avail / ch.length, MIN_SPAN);
      var extra = Math.max(0, avail - minA * ch.length);
      var wsum = 0;
      ch.forEach(function (c) { wsum += leaves(c); });
      var cur = a0;
      ch.forEach(function (c) {
        var span = minA + (wsum ? extra * (leaves(c) / wsum) : 0);
        assign(c, cur, cur + span, depth + 1);
        cur += span;
      });
    }
    roots.forEach(function (r, i) {
      var each = TAU / roots.length;
      assign(r, i * each - Math.PI / 2, (i + 1) * each - Math.PI / 2, 0);
    });
    /* 每层最小扇区 / 最高卡片 / 最大宽度 → 该层半径增量 */
    var layerMin = [], layerMaxH = [], layerCount = [], layerMaxW = [];
    list.forEach(function (p) {
      var d = p.depth, w = p.w || cw;
      layerCount[d] = (layerCount[d] || 0) + 1;
      if (layerMin[d] == null || p.span < layerMin[d]) layerMin[d] = p.span;
      if (layerMaxH[d] == null || p.h > layerMaxH[d]) layerMaxH[d] = p.h;
      if (layerMaxW[d] == null || w > layerMaxW[d]) layerMaxW[d] = w;
    });
    /* 每层半径增量 = max(本层绕一圈所需半径, 相邻两层卡片的纵向间距, 本层最宽卡)
       —— 只按「最小扇区」推会让中间稀疏层也跟着撑大，四层累加后画布膨胀数倍 */
    var rxStep = [], ryStep = [];
    for (var d = 1; d < layerMin.length; d++) {
      var n = layerCount[d] || 1;
      var lw = layerMaxW[d] || cw;
      var ring = (n * (lw + gap)) / (2 * Math.PI);
      var vgap = ((layerMaxH[d] + (layerMaxH[d - 1] || layerMaxH[d])) / 2 + gap) * 1.7;
      var step = Math.max(ring, vgap, lw * 0.9);
      rxStep[d] = step;
      ryStep[d] = step;
    }
    /* 半径按实测重叠反推：先按扇区算，若卡片矩形仍相撞则整层等比放大（确定性，最多 8 轮） */
    function place(scale) {
      var rxAcc = [0], ryAcc = [0];
      for (var q = 1; q < rxStep.length; q++) {
        rxAcc[q] = rxAcc[q - 1] + (rxStep[q] || 0) * scale;
        ryAcc[q] = ryAcc[q - 1] + (ryStep[q] || 0) * scale;
      }
      list.forEach(function (p) {
        p.rx = rxAcc[p.depth] || 0;
        p.ry = ryAcc[p.depth] || 0;
        p._cx = Math.cos(p.a) * p.rx;
        p._cy = Math.sin(p.a) * p.ry;
      });
    }
    function hits() {
      var n = 0;
      for (var i = 0; i < list.length; i++) {
        for (var j = i + 1; j < list.length; j++) {
          var A = list[i], B = list[j], pad = 6;
          var aw = A.w || cw, bw = B.w || cw;
          var ax = A._cx - aw / 2 - pad / 2, ay = A._cy - A.h / 2 - pad / 2;
          var bx = B._cx - bw / 2 - pad / 2, by = B._cy - B.h / 2 - pad / 2;
          if (ax < bx + bw + pad && bx < ax + aw + pad &&
              ay < by + B.h + pad && by < ay + A.h + pad) n += 1;
        }
      }
      return n;
    }
    var scale = 1;
    for (var k = 0; k < 8; k++) {
      place(scale);
      if (!hits()) break;
      scale *= 1.18;
    }
    /* 画布以根为对称中心，根恒在正中 */
    var maxAbsX = 0, maxAbsY = 0;
    list.forEach(function (p) {
      var pw = p.w || cw;
      if (Math.abs(p._cx) + pw / 2 > maxAbsX) maxAbsX = Math.abs(p._cx) + pw / 2;
      if (Math.abs(p._cy) + p.h / 2 > maxAbsY) maxAbsY = Math.abs(p._cy) + p.h / 2;
    });
    if (!maxAbsX) maxAbsX = cw;
    if (!maxAbsY) maxAbsY = 60;
    var cx0 = pad + maxAbsX, cy0 = pad + maxAbsY;
    list.forEach(function (p) {
      p.x = Math.round(cx0 + p._cx - (p.w || cw) / 2);
      p.y = Math.round(cy0 + p._cy - p.h / 2);
    });
    return { width: maxAbsX * 2 + pad * 2, height: maxAbsY * 2 + pad * 2 };
  }

  /* 径向树连线：父中心 → 子中心，二次贝塞尔轻微侧弯；两端被卡片遮住，视觉上从边缘接出 */
  function curveSeg(a, b) {
    var ax = a.x + a.w / 2, ay = a.y + a.h / 2;
    var bx = b.x + b.w / 2, by = b.y + b.h / 2;
    var dx = bx - ax, dy = by - ay;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var bend = Math.min(46, len * 0.14);
    var cx = (ax + bx) / 2 - dy / len * bend;
    var cy = (ay + by) / 2 + dx / len * bend;
    return { d: 'M' + ax + ',' + ay + ' Q' + cx + ',' + cy + ' ' + bx + ',' + by,
             lx: cx, ly: cy - 6 };
  }

  function renderDiagram2(page, v) {
    stage.innerHTML = '';
    var isVision = !!v && v.id === 'vision';
    G = page.grid || A.grid || {};
    var gap = G.gap || 26, pad = G.pad || 34, cwMin = G.cw || 250, cwMax = G.cwMax || 420;
    var groups = page.groups || [page];
    /* 单树模式：视图声明 root 且由多页合成 → 把各组节点挂到同一个根下，一次布局 */
    var single = !!(page.root && page.groups && page.groups.length);
    if (single) {
      var allNodes = [], allEdges = [];
      groups.forEach(function (g) {
        (g.nodes || []).forEach(function (n) { allNodes.push(n); });
        (g.edges || []).forEach(function (e) { allEdges.push(e); });
      });
      allNodes.forEach(function (n) { if (!n.parent) n.parent = page.root.id; });
      allNodes.unshift(page.root);
      groups = [{ id: '_all', name: '', layout: 'tree', grid: page.grid || {}, nodes: allNodes, edges: allEdges }];
    }
    var isMerged = !!page.groups && !single;
    var avail = Math.max(760, (stage.clientWidth || 1400) - 64);

    var canvas = el('div', 'canvas');
    vpEl = el('div', 'viewport');
    vpEl.appendChild(canvas);
    stage.appendChild(vpEl);
    vpEl.appendChild(el('div', 'zoom-hint', '滚轮缩放 · 左键拖动 · 双击适应'));
    bindViewport(vpEl);
    canvasEl = canvas;
    vb = { k: 1, tx: 0, ty: 0 };

    var svg = svgEl('svg');
    svg.setAttribute('class', 'edges');
    var defs = svgEl('defs');
    defs.innerHTML = '<marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" ' +
      'markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#c9d1d9"/></marker>';
    svg.appendChild(defs);
    canvas.appendChild(svg);
    var nodesLayer = el('div', 'nodes');
    canvas.appendChild(nodesLayer);

    var pos = {}, flows = [], totalW = 0, cursorY = 0;
    var ctxs = [];

    /* 第一遍：建卡、测高、组内布局——只收集宽度，不定位（画布总宽要等所有组算完） */
    groups.forEach(function (g) {
      var gg = g.grid || A.grid || {};
      var gcols = Math.max(gg.cols || G.cols || 1, 1);
      var gcw = Math.max(gg.cw || cwMin, Math.min(cwMax, Math.floor((avail - pad * 2 - (gcols - 1) * gap) / gcols)));
      var isTree = g.layout === 'tree';
      var headH = (isMerged && g.name) ? 32 : 0;
      var list = [];

      /* 卡片尺寸按层级分档：越靠近根的模块越大，叶子最小——子节点围绕父节点摊开 */
      var WSCALE = [1.30, 1.12, 0.98, 0.86];
      var byIdDepth = {};
      (g.nodes || []).forEach(function (n) { byIdDepth[n.id] = n; });
      function depthOf(n) {
        var dep = 0, cur = n;
        while (cur && cur.parent && byIdDepth[cur.parent] && dep < 64) {
          cur = byIdDepth[cur.parent];
          dep += 1;
        }
        return dep;
      }

      (g.nodes || []).forEach(function (n) {
        var span = n.span || 1;
        /* 主标签：meta.roleLabels 开启时取 tags[0] 作角色名（同角色同色），否则沿用 kind 类型名 */
        var roleLabel = (A.meta && A.meta.roleLabels && n.tags && n.tags.length) ? n.tags[0] : '';
        var arch = isArchived(n);
        var d = el('div', 'node');
        d.setAttribute('data-kind', n.kind || 'sup');
        if (roleLabel) d.setAttribute('data-role', roleLabel);
        d.setAttribute('data-status', n.status || 'done');
        if (arch) d.setAttribute('data-archived', '1');
        if (n.role === 'group') d.setAttribute('data-group', '1');
        if (isTree) {
          var dep = depthOf(n);
          var w = Math.round(gcw * WSCALE[Math.min(dep, 3)]);
          d.style.width = Math.max(240, Math.min(620, w)) + 'px';
          d.setAttribute('data-depth', Math.min(dep, 3));
          if (!n.parent) d.setAttribute('data-root', '1');
        } else {
          d.style.width = (span * gcw + (span - 1) * gap) + 'px';
          if (span > 1) d.setAttribute('data-wide', '1');
        }
        if (n.then) d.setAttribute('data-then', n.then);
        var kd = el('div', 'kd');
        kd.appendChild(el('span', 'dot'));
        kd.appendChild(el('span', 'tag', esc(roleLabel || KINDNAME[n.kind] || '模块')));
        /* 次标签：同一行跟在主标签后面，颜色跟随主标签（CSS 里 .tag + .tag 弱化），不单独配色 */
        if (roleLabel && n.tags && n.tags.length > 1) {
          n.tags.slice(1).forEach(function (t) { kd.appendChild(el('span', 'tag', esc(t))); });
        }
        /* 归档标签排在角色之后（读作「应用 观测者 归档」）——不进 tags、不占角色色，单独灰字 */
        if (arch) kd.appendChild(el('span', 'tag arch', '归档'));
        d.appendChild(kd);
        d.appendChild(el('div', 'lb', esc(n.label)));
        /* 隐藏解释（归档卡开关，机械面 state/archive-hidden.json）：只收描述（简述 / 断言），
           状态行照常展示——「已实现 / 部分实现」不是解释，是事实。 */
        var hideDesc = arch && isHiddenDesc(n);
        if (!hideDesc) {
          if (n.sub) d.appendChild(el('div', 'sb', esc(n.sub)));
          if (n.assert) d.appendChild(el('div', 'as', esc(n.assert)));
        }
        /* 右上角标注：归档优先占位——状态仍由卡底状态行如实标注，不因归档抹掉 */
        if (arch) {
          d.appendChild(el('div', 'ribbon arch', ARCH_NOTE));
        } else if (!hideDesc && !isVision && n.status && n.status !== 'done') {
          d.appendChild(el('div', 'ribbon', n.status === 'missing' ? 'GAP' : (n.status === 'plan' ? '未实现' : '部分')));
        }
        if (!isVision) d.appendChild(el('div', 'st', S[n.status || 'done']));
        nodesLayer.appendChild(d);
        var p = { n: n, d: d };
        pos[n.id] = p;
        list.push(p);
      });

      list.forEach(function (p) { p.h = p.d.offsetHeight; p.w = p.d.offsetWidth; });

      var box = isTree
        ? layoutTreeGroup(list, gcw, gap, pad)
        : layoutBandGroup(list, g.bands || [], gcw, gap, pad);
      var gW = isTree
        ? box.width
        : Math.max(box.cols, gcols) * gcw + (Math.max(box.cols, gcols) - 1) * gap + pad * 2;
      totalW = Math.max(totalW, gW);
      ctxs.push({ g: g, list: list, box: box, gW: gW, isTree: isTree, headH: headH });
    });

    /* 第二遍：按最终画布宽居中每组，定位节点、画层带与连线 */
    ctxs.forEach(function (c) {
      var shiftX = Math.round((totalW - c.gW) / 2);
      if (c.headH) {
        var lab = el('div', 'band-lab', esc('◆ ' + c.g.name));
        lab.style.top = (cursorY + 4) + 'px';
        lab.style.left = shiftX + 'px';
        canvas.insertBefore(lab, nodesLayer);
      }

      c.list.forEach(function (p) {
        p.d.style.left = (shiftX + p.x) + 'px';
        p.d.style.top = (cursorY + c.headH + p.y) + 'px';
        p.x = p.d.offsetLeft;
        p.y = p.d.offsetTop;
        p.w = p.d.offsetWidth;
        p.h = p.d.offsetHeight;
        p.cx = p.x + p.w / 2;
        p.cy = p.y + p.h / 2;
        p.d.onclick = function () { if (suppressClick) return; selectNode(p); };
      });

      if (!c.isTree) {
        (c.box.bandTop || []).forEach(function (top, i) {
          var at = cursorY + c.headH + top;
          if (i > 0) {
            var line = el('div', 'band');
            line.style.top = at + 'px';
            line.style.left = shiftX + 'px';
            line.style.right = 'auto';
            line.style.width = c.gW + 'px';
            canvas.insertBefore(line, nodesLayer);
          }
          if (c.g.bands && c.g.bands[i] && c.g.bands[i].label) {
            var bl = el('div', 'band-lab', esc(c.g.bands[i].label));
            bl.style.top = (at + 8) + 'px';
            bl.style.left = shiftX + 'px';
            canvas.insertBefore(bl, nodesLayer);
          }
        });
      }

      if (c.isTree) {
        c.list.forEach(function (p) {
          var pp = p.n.parent ? pos[p.n.parent] : null;
          if (!pp) return;
          var s = curveSeg(pp, p);
          var lp = svgEl('path');
          lp.setAttribute('d', s.d);
          lp.setAttribute('data-from', pp.n.id);
          lp.setAttribute('data-to', p.n.id);
          lp.setAttribute('marker-end', 'url(#arw)');
          svg.appendChild(lp);
        });
      }
      (c.g.edges || []).forEach(function (e) {
        var a = pos[e.from], b = pos[e.to];
        if (!a || !b) return;
        if (c.isTree && b.n.parent === e.from) return;   /* 父子线已画，不重复 */
        var seg = c.isTree ? curveSeg(a, b) : orth(a, b);
        var path = svgEl('path');
        path.setAttribute('d', seg.d);
        path.setAttribute('data-from', e.from);
        path.setAttribute('data-to', e.to);
        path.setAttribute('marker-end', 'url(#arw)');
        if (e.kind === 'plan' || a.n.status === 'plan' || b.n.status === 'plan') {
          path.setAttribute('class', 'plan');
          path.removeAttribute('marker-end');
        }
        svg.appendChild(path);
        if (e.label) {
          var t = svgEl('text');
          t.setAttribute('x', seg.lx); t.setAttribute('y', seg.ly);
          t.setAttribute('text-anchor', 'middle');
          t.setAttribute('paint-order', 'stroke');
          t.setAttribute('stroke', '#fff');
          t.setAttribute('stroke-width', '4');
          t.textContent = e.label;
          svg.appendChild(t);
        }
        if (e.anim) flows.push({ path: path, len: 0, t: Math.random() });
      });

      cursorY += c.headH + c.box.height + 22;
    });

    var H = Math.max(cursorY, 220);
    canvas.style.width = totalW + 'px';
    canvas.style.height = H + 'px';
    svg.setAttribute('width', totalW);
    svg.setAttribute('height', H);

    if (!compact && page.note) {
      var nt = el('p', null, esc(page.note));
      nt.style.cssText = 'color:#59636e;font-size:12.5px;margin:14px 2px 0;max-width:96ch';
      stage.appendChild(nt);
    }
    startFlows(svg, flows);
    /* 视口尺寸变化（宿主面板把 iframe 撑高 / 窗口 resize）→ 重适配。
       仅在用户没手动缩放平移过时生效——拖过之后尺寸变化不再抢镜头（双击可手动回来）。 */
    if (typeof ResizeObserver !== 'undefined') {
      var pendingFit = false;
      var ro = new ResizeObserver(function () {
        if (userMoved || pendingFit) return;
        pendingFit = true;
        requestAnimationFrame(function () {
          pendingFit = false;
          if (!userMoved) fitView();
        });
      });
      ro.observe(vpEl);
    }
    if (pendingState) {
      var okState = pendingState.view === ((V[curView] || {}).id) ? applyState(pendingState) : false;
      if (!okState) fitView();
      pendingState = null;
    } else fitView();
    if (pendingSel && pos[pendingSel]) selectNode(pos[pendingSel]);
  }

  /* 正交走线：跨带 → 竖折；同带相邻 → 横折；同带跨列 → 上方绕行 */
  function orth(a, b) {
    var vOverlap = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
    if (vOverlap <= 0) {
      /* 起点取自 a 底边「正对 b」的位置，避免长横线穿带 */
      var x1 = Math.max(a.x + 16, Math.min(b.cx, a.x + a.w - 16));
      var x2 = b.cx;
      var y1 = a.cy < b.cy ? a.y + a.h : a.y;
      var y2 = a.cy < b.cy ? b.y : b.y + b.h;
      var my = (y1 + y2) / 2;
      return { d: 'M' + x1 + ',' + y1 + ' L' + x1 + ',' + my + ' L' + x2 + ',' + my + ' L' + x2 + ',' + y2,
               lx: (x1 + x2) / 2, ly: my - 5 };
    }
    var ca = a.n.col || 0, cb = b.n.col || 0;
    if (Math.abs(ca - cb) > 1) {
      /* 同带跨列：从节点下方绕行（带底留白够，不压上一带） */
      var tx = a.cx, ty = Math.max(a.y + a.h, b.y + b.h) + 28;
      return { d: 'M' + tx + ',' + (a.y + a.h) + ' L' + tx + ',' + ty + ' L' + b.cx + ',' + ty + ' L' + b.cx + ',' + (b.y + b.h),
               lx: (a.cx + b.cx) / 2, ly: ty + 12 };
    }
    var ax = a.cx < b.cx ? a.x + a.w : a.x;
    var bx = a.cx < b.cx ? b.x : b.x + b.w;
    var mx = (ax + bx) / 2;
    return { d: 'M' + ax + ',' + a.cy + ' L' + mx + ',' + a.cy + ' L' + mx + ',' + b.cy + ' L' + bx + ',' + b.cy,
             lx: mx, ly: Math.max(a.y + a.h, b.y + b.h) + 13 };
  }

  var raf = null, flowSet = [];
  function startFlows(svg, flows) {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    flowSet = [];
    flows.forEach(function (f) {
      var len = 0;
      try { len = f.path.getTotalLength(); } catch (e) { len = 0; }
      if (!len) return;
      f.len = len;
      var c = svgEl('circle');
      c.setAttribute('r', 2.6);
      c.setAttribute('class', 'flow');
      svg.appendChild(c);
      f.circle = c;
      flowSet.push(f);
    });
    if (!flowSet.length) return;
    var last = performance.now();
    function tick(t) {
      var dt = Math.min(64, t - last); last = t;
      flowSet.forEach(function (f) {
        f.t += dt / (3000 + f.len * 2.4);
        if (f.t > 1) f.t -= 1;
        var pt = f.path.getPointAtLength(f.t * f.len);
        f.circle.setAttribute('cx', pt.x);
        f.circle.setAttribute('cy', pt.y);
        f.circle.setAttribute('opacity', (0.18 + 0.62 * Math.sin(f.t * Math.PI)).toFixed(3));
      });
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
  }

  /* ================= timeline ================= */
  /* 时间轴组头版本区间：rollup 行取 items 里的版本列表首尾——否则拼出「v0.9 — v0.11–v0.14」 */
  function tlVers(e) {
    if (e && e.rollup && e.items && e.items.length) {
      var m = String(e.items[0]).match(/v[0-9][0-9.]*/g);
      if (m && m.length) return m;
    }
    return [e ? e.v : ''];
  }
  function tlVStart(e) { var m = tlVers(e); return m[0]; }
  function tlVEnd(e) { var m = tlVers(e); return m[m.length - 1]; }

  function renderTimeline(page) {
    stage.innerHTML = '';
    if (raf) { cancelAnimationFrame(raf); raf = null; }

    var lanes = {};
    (page.lanes || []).forEach(function (l) { lanes[l.id] = l; });

    var tl = el('div', 'tl');
    var rail = el('div', 'tl-rail');
    tl.appendChild(rail);

    var entries = page.entries || [];
    var group = null, gEl = null;

    entries.forEach(function (e, idx) {
      if (e.group !== group) {
        group = e.group;
        gEl = el('div', 'tl-group');
        var gh = el('div', 'tl-ghead');
        gh.appendChild(el('b', null, esc(group || '')));
        var same = entries.filter(function (x) { return x.group === group; });
        if (same.length > 1) gh.appendChild(el('span', null, tlVStart(same[0]) + ' — ' + tlVEnd(same[same.length - 1])));
        else gh.appendChild(el('span', null, same[0].v));
        gEl.appendChild(gh);
        tl.appendChild(gEl);
      }

      var lane = lanes[e.lane] || { color: '#8c959f', name: e.lane || '' };
      var row = el('div', 'tl-row' + (e.future ? ' future' : '') + (e.rollup ? ' rollup' : ''));
      row.style.setProperty('--lane', lane.color);

      var v = el('div', 'tl-v');
      v.innerHTML = esc(e.v) + (e.date ? '<i>' + esc(e.date) + '</i>' : '');
      row.appendChild(v);

      var dot = el('div', 'tl-dot');
      dot.appendChild(el('i'));
      row.appendChild(dot);

      var body = el('div', 'tl-body');
      var t = el('div', 'tl-t', esc(e.title));
      body.appendChild(t);
      if (e.now) t.appendChild(el('span', 'tl-now', '当前'));
      if (e.rollup) t.appendChild(el('span', 'tl-fold', '合并 ' + esc(String(e.count || '')) + ' 版'));
      if (e.items && e.items.length) body.appendChild(el('div', 'tl-sub', esc(e.items.slice(0, 2).join(' · '))));
      if (e.sub) body.appendChild(el('div', 'tl-m', esc(e.sub)));
      row.appendChild(body);
      if (lane.name) row.appendChild(el('div', 'tl-lane', esc(lane.name)));

      row.onclick = function () { selectTimeline(e, lane); };
      gEl.appendChild(row);

      if (e.block) {
        var blk = el('div', 'tl-block');
        if (e.block.title) blk.appendChild(el('div', 'tl-bh', esc(e.block.title)));
        (e.block.items || []).forEach(function (it) {
          var bi = el('div', 'tl-bi');
          bi.innerHTML = '<b>' + esc(it.v || '') + '</b> ' + esc(it.text || '');
          blk.appendChild(bi);
        });
        gEl.appendChild(blk);
      }
    });

    stage.appendChild(tl);
    if (!compact && page.note) {
      var nt = el('p', null, esc(page.note));
      nt.style.cssText = 'color:#59636e;font-size:12.5px;margin:18px 2px 0;max-width:96ch';
      stage.appendChild(nt);
    }
  }

  function selectTimeline(e, lane) {
    var html = '';
    html += '<div class="kv"><div class="k">版本</div><div class="v"><b>' + esc(e.v) + '</b>　' +
      esc(e.date || '') + '</div></div>';
    html += '<div class="kv"><div class="k">主题</div><div class="v">' + esc(e.title) + '</div></div>';
    if (lane && lane.name) html += '<div class="kv"><div class="k">泳道</div><div class="v">' + esc(lane.name) + '</div></div>';
    html += '<div class="kv"><div class="k">状态</div><div class="v">' + esc(S[e.status || 'done']) + '</div></div>';
    if (e.rollup) html += '<div class="kv"><div class="k">合并版本</div><div class="v">' + esc(String(e.count || '')) + ' 版（items 逐条可对账）</div></div>';
    if (e.items && e.items.length) {
      html += '<div class="kv"><div class="k">关键产出</div><div class="v"><ul>' +
        e.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div></div>';
    }
    if (e.note) html += '<div class="kv"><div class="k">备注</div><div class="v">' + esc(e.note) + '</div></div>';
    if (e.evidence) html += '<div class="kv"><div class="k">来源</div><div class="v ev">' + esc(e.evidence) + '</div></div>';
    side.querySelector('#sbd').innerHTML = html;
    side.classList.add('on');
  }

  /* ================= 侧栏 ================= */
  function buildSide() {
    side = el('div', 'side');
    side.innerHTML = '<h3><span>详情</span><button id="sx">关闭</button></h3><div class="bd" id="sbd"></div>';
    document.body.appendChild(side);
    side.querySelector('#sx').onclick = closeSide;
  }
  function selectNode(p) {
    if (sel && sel.d) sel.d.classList.remove('sel');
    sel = p; p.d.classList.add('sel');
    var n = p.n, html = '';
    html += '<div class="kv"><div class="k">节点</div><div class="v"><b>' + esc(n.label) + '</b></div></div>';
    if (n.sub) html += '<div class="kv"><div class="k">简述</div><div class="v">' + esc(n.sub) + '</div></div>';
    if (n.assert) html += '<div class="kv"><div class="k">凭什么信（断言 · 验法）</div><div class="v">' + esc(n.assert) + '</div></div>';
    if (n.then) html += '<div class="kv"><div class="k">结构增量</div><div class="v">' + esc(n.then) + '</div></div>';
    var typeName = (A.meta && A.meta.roleLabels && n.tags && n.tags.length)
      ? n.tags.join(' · ') : (KINDNAME[n.kind] || '模块');
    var arch = isArchived(n);
    html += '<div class="kv"><div class="k">角色 / 状态</div><div class="v">' +
      esc(typeName) + ' · ' + esc(S[n.status || 'done']) +
      (arch ? ' · ' + esc(ARCH_NOTE) : '') + '</div></div>';
    if (n.note) html += '<div class="kv"><div class="k">说明</div><div class="v">' + esc(n.note) + '</div></div>';
    html += '<div class="kv"><div class="k">证据</div><div class="v ev">' +
      (n.evidence ? esc(n.evidence) : '无证据（未取证，不补空）') + '</div></div>';
    var tags = (n.tags || []).slice();
    if (arch) tags.push('归档');
    if (tags.length) {
      html += '<div class="kv"><div class="k">标签</div><div class="v">' +
        tags.map(function (t) { return '<code>' + esc(t) + '</code>'; }).join(' ') + '</div></div>';
    }
    side.querySelector('#sbd').innerHTML = html;
    side.classList.add('on');
    each(document.querySelectorAll('svg.edges path'), function (pa) {
      pa.classList.toggle('hot', pa.getAttribute('data-from') === n.id || pa.getAttribute('data-to') === n.id);
    });
  }
  function closeSide() {
    side.classList.remove('on');
    if (sel && sel.d) sel.d.classList.remove('sel');
    sel = null;
    each(document.querySelectorAll('svg.edges path'), function (pa) { pa.classList.remove('hot'); });
  }

  function buildFoot() {
    var f = el('div', 'foot');
    var src = (A.meta.sources || []).map(function (s) {
      return '<code>' + esc(s.path) + '</code> ' + esc(s.label || '');
    }).join(' · ');
    f.innerHTML = '<div><b>数据来源</b>' + (src || '—') + '</div>' +
      '<div><b>诚实口径</b>虚线斜纹 = 未实现；每个节点/版本带证据，点开可核对；无证据的标「无证据」，不补空。</div>';
    document.body.appendChild(f);
  }

  function boot() {
    if (!A || !A.views || !A.views.length) {
      document.body.appendChild(el('div', 'empty', '未加载数据：window.ARCH 为空。'));
      return;
    }
    if (compact) document.body.classList.add('compact');   /* 画框接管整屏（CSS：body.compact .viewport） */
    V = A.views.filter(function (v) { return !v.hidden; });
    buildTop(); buildShell(); buildSide(); buildFoot();
    window.addEventListener('mousemove', function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) { drag.moved = true; userMoved = true; }
      vb.tx = drag.tx + dx; vb.ty = drag.ty + dy; applyView();
    });
    window.addEventListener('mouseup', function () {
      if (drag && drag.moved) { suppressClick = true; setTimeout(function () { suppressClick = false; }, 0); }
      drag = null;
      if (vpEl) vpEl.classList.remove('on');
    });
    var pid = (A.meta && A.meta.project) || 'default';
    stateKey = 'archkit:state:' + pid;
    var saved = loadState();
    try {
      var q = new URLSearchParams(location.search);
      var hasV = false;
      V.forEach(function (v, i) { if (v.id === q.get('v')) { curView = i; hasV = true; } });
      var pi = parseInt(q.get('p'), 10);
      var ps = viewPages(V[curView]);
      if (!isNaN(pi) && ps[pi]) curPage = pi;
      pendingSel = q.get('sel');
      /* 深链未显式指定时，回落到记忆的视图 / 页与画布位置（「关掉时什么样，下次打开就什么样」） */
      if (saved) {
        if (!hasV && saved.view) V.forEach(function (v, i) { if (v.id === saved.view) curView = i; });
        if (isNaN(pi) && saved.page != null) {
          var ps2 = viewPages(V[curView]);
          if (saved.page >= 0 && saved.page < ps2.length) curPage = saved.page;
        }
        pendingState = saved;
      }
    } catch (e) { /* 无 URLSearchParams 时按默认视图 */ }
    window.addEventListener('beforeunload', saveState);
    renderView();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
