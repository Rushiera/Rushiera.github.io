/* dev-banner.js — 全量档告警条
 *
 * 全量档（full/，含私域项目名）带 public:false；公开档（仓根 data/）带 public:true。
 * 这条红条是「误推之前看得见」的落点——不是提醒文案，是页面上的实体。
 * 2026-11-13 起构建入口统一为 tools/build-site.mjs（--profile=public|full|both）。
 */
(function () {
  var d = window.PROJECTS || window.ARCH;
  if (!d || d.public !== false) return;
  /* 只在本地预览（file:// / localhost / 127.0.0.1）显示：
     护栏服务于「推之前看得见」这一刻，不是线上装饰。
     2026-11-09 裁定：全量档（含未点名保密的私域项目）允许发布，线上不再顶红条。 */
  var h = location.hostname || '', p = location.protocol;
  var local = p === 'file:' || h === '' || h === 'localhost' || h === '127.0.0.1';
  if (!local) return;
  var b = document.createElement('div');
  b.textContent = '本地全量档（含私域项目）· 勿提交 / 勿推送 —— 发布前跑：node witness/gitpage/tools/build-site.mjs --profile=public';
  b.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:999;background:#cf222e;color:#fff;' +
    'font:12px/1.6 -apple-system,"Segoe UI",sans-serif;padding:7px 14px;text-align:center;letter-spacing:.01em';
  document.body.appendChild(b);
  /* 红条固定贴底，给正文留出高度，避免压住最后一屏内容 */
  document.body.style.paddingBottom = '42px';
})();
