/* public-pids.mjs — 公开档白名单（单一真相源）
 *
 * 站点发布（gitpage）与提交时间线（witness/tools/build-git-timelines.mjs）共用这一份：
 * 原先两处各写一份，增删项目要同改两处，漏一处就是「全量档多出私域项目」或「公开档少了数据集」。
 * 增删改只改这里；私域项目名不进公开站。
 */
export const PUBLIC_PIDS = [
  'CH4', 'Mau', 'Akasha', '并发协议', 'CH3', 'CatHome2.0', 'ACS', 'REA', 'ECC',
  'CGSE_CORE', 'MOSSCatalog', 'ComfyDock', 'SC2Replay', 'ApiSiteAnalyzer', 'KkFetch',
  'sc2api-listen', 'FileSync', 'Cosmoteer', 'ClashVerge', 'LosslessScaling', 'CloudDrive2',
];
