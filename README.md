# Rushiera.github.io — 个人履历站

> 归属：**并发协议项目内件**（`WorkSpace:tools/并发协议/witness/gitpage/`，2026-11-07 收编、同日归拢进 `witness/`）——由并发协议维护；档案面在 `ccbp:Project/并发协议/`。
> 纯静态，无构建依赖、无框架。四件：**主页（交付与案例入口）/ 案例 / 项目星图 / 起点时间线**，另加一页仿 GitHub 档案。

旧站（Particle 模板 + 2020 占位内容 + gulp/sass/jQuery 构建链）已退役；内容在 git 历史与回收站里。

---

## 一、结构

```
index.html               主页（面客）：定位 / 三项能做什么 / 统计 / 技术栈 / 工程现场 / 案例入口 / 最近的起点
client.html              案例页（面客）：三个场景的「问题 / 做法 / 交付 / 怎么核」+ 合作方式
projects.html            一页三内容、同页切换不换页：项目星图 / 起点时间线（顶栏视图 tab）· 提交时间线（左下入口条；?pid=<项目> 可深链）
assets/
  site.css  site.js      主页样式与渲染（读 data/projects.js）
  particles.min.js       粒子背景库（旧站原件，原样复用）
  particles-bg.js        首屏背景参数（复刻旧站画法：白五边形 / 连线 250 / 点击补粒）
  dev-banner.js          全量档红色告警条（public:false 时出现）
  arch/arch.css          archkit 渲染器样式（复制件，勿在此改）
  arch/arch-render.js    archkit 渲染器（复制件，勿在此改）
data/
  projects.json          项目清单（机器可读）
  projects.js            window.PROJECTS（页面消费；stats = 首屏三格：在册 / 本周在推进 / 版本推进）
  arch.js                window.ARCH（星图渲染器消费）
  git/<pid>-git.js       单项目提交时间线（window.ARCH；公开档只出白名单 pid）
  git/index.js           window.GIT_TIMELINES（「提交时间线」入口条消费：pid / 次数 / 起止月）
tools/build-map.mjs          生成器：本机项目档案索引 → 上面三个数据文件
（时间线生成器在上一级 `witness/tools/`：build-git-timeline.mjs 单仓一份 · build-git-timelines.mjs 批量）
.nojekyll                跳过 GitHub Pages 的 Jekyll 处理
```

## 二、数据从哪来

`tools/build-map.mjs` 读本机并发协议档案索引（只读）：

| 输入 | 用途 |
|:--|:--|
| `WorkSpace:tools/并发协议/state/projects/index.json` | 项目清单（pid / 类型 / 版本 / 主理角色 / 技术栈） |
| `.../state/projects/<pid>.json` | 项目卡（一句话目的 / 立项日 / 待办计数） |
| `.../state/archive.json` | 归档名单 |

分层是**人工建档**（`build-map.mjs` 的 `LAYERS`）——星图本质是判断，不是自动聚类。改层 = 改 `LAYERS` 后重跑。

## 二-B、后续维护归并发协议

这个站是**并发协议项目的展示面**，不是独立演进的东西——数据是派生件，档案才是真相：

| 谁 | 负责什么 |
|:--|:--|
| **并发协议**（`WorkSpace:tools/并发协议/`） | 档案索引：扫描项目 → `state/projects/*.json`（todo 计数 / purpose / created / anomalies）。项目增删、归档、待办变化都先在这里反映 |
| 本站 `tools/build-map.mjs` | 只做搬运：读上述档案 → `data/{arch,projects}.js`。不做判断、不手工补数据 |
| 人 | 改 `LAYERS`（分层）与 `PUBLIC_PIDS`（公开白名单）；发布前跑 `--public` |

**触发时机**（任一条发生就重跑生成器并发布）：

1. 并发协议面板跑过项目档案扫描（`POST /api/projects/scan`）且卡片有变化；
2. 有项目新增 / 归档 / 改名；
3. 重要项目的 `CHANGELOG` 或 `todo` 明显推进。

🔴 **不手改 `data/`**——那是生成物，下次生成即覆盖。要改展示就改 `tools/build-map.mjs`（分层 / 文案 / 白名单），要改数据回并发协议侧。

🔴 **首页与星图同源**——`index.html` 的规模与精选、`projects.html` 的层与时间线都读同一份生成结果，不会出现「首页 35 个、星图 30 个」。

## 三、生成

现行入口是 `tools/build-site.mjs --profile=public|full|both`（一份源两份构建；返回码与 `--json` 回执见脚本头注释）。下面两个子脚本仍可单跑——局部重跑或分片跑时用（全量跑会撞工具 120 s 上限）。

```powershell
node tools/build-map.mjs            # 全量：全部项目（含私域线）—— 现行默认发布档
node tools/build-map.mjs --public   # 公开档：只出白名单项目（临时收窄用）

node ../tools/build-git-timelines.mjs --dry          # 先看：哪些项目有 git 仓、各几次提交
node ../tools/build-git-timelines.mjs                # 全量：全部可解析仓库的项目各出一份
node ../tools/build-git-timelines.mjs --public       # 公开档：只出白名单，并清掉目录里白名单外的旧数据集
node ../tools/build-git-timelines.mjs --only=CH4,Mau # 局部重跑（清单里其它项目保留）
```

提交时间线这批数据要**面板在跑**才生成得出来（仓库目录由 `/api/projects/{pid}/commits` 解析，脚本不另写一套候选规则）；面板没起会直接报错退出，不产出半份。

🟠 **发布档位（2026-11-09 裁定）**——默认推**全量档**：私域项目的名称与描述可以放到公开站上，保密按**点名制**处理（Rushiera 后续单独对某项目提保密要求时，才把该项目移出 `PUBLIC_PIDS` 或加进隐藏名单）。`--public` 保留为临时收窄手段（白名单 21 项），不再作为发布前置。

门禁：全量档数据带 `public:false`，本地预览（`file://` / `localhost`）时两页底部顶一条红色告警条（`assets/dev-banner.js`）——**推之前看得见，不靠记性**；线上按上面的裁定不顶。

## 四、发布

```powershell
git add -A
git commit -m "..."
git push origin master
```

GitHub Pages 从 `master` 根目录发布（仓库 `Rushiera/Rushiera.github.io`）。本机直连 github 不通时走仓库级代理 `http://127.0.0.1:7897`（已写入 `.git/config`）。

🔴 **资源版本串由构建期注入**（2026-11-13 起）：`?v=` 不再手写——`tools/build-site.mjs` 每次构建按 `assets/` 全量内容算一个 8 位哈希，注入四页的资源引用（只认 `assets/` 与 `data/` 路径，`projects.html?v=timeline` 这类业务参数不碰）。同一份 assets 重跑得同一个串（幂等），内容一变串就变。原由：Pages 的 CDN 缓存 10 分钟，手写串漏改一次就是「HTML 新、CSS 旧」的半新半旧页。

- 改了 assets 就跑一次构建（`--profile=public` / `both`），页面串自动跟上；构建回执会打印「改写 N 页」或「页面已是最新」。
- ⚠ 页面版本串变化**要跟 assets 一并提交**：调度器的自动发布 job 只 `git add -- data`（`panel/SitePublisher.cs`），页面不在它的提交面内。

## 五、星图渲染器

复制自 `WorkSpace:tools/并发协议/witness/archkit`（并发协议工程的共用件）。数据契约 / 状态语义 / 布局规则见该目录的 `README.md` §三。

**同步策略**：archkit 更新后整份覆盖这两个文件——数据契约与布局以后者为准。**表现层例外**：站点独有的深色主题与过渡动画允许落在本仓副本，但必须就地注释、并回写 `ccbp:L3/并发协议/F-见证者与站点.md`。现有站点专属改动两处：`arch.css` 末尾 `body.dark` 覆盖块（深色 + 粒子层叠，模板源仍 light）· `arch-render.js` 的 `renderView(anim)` / `clearShell` / `remount` / `window.ARCHKIT`（同页换数据集 + 淡入淡出）。

## 六、本地看

直接双击 `index.html` / `projects.html`（`file://` 可用，数据走 `<script>` 不走 `fetch`）。

截图验收：

```powershell
& 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' --headless=new --disable-gpu `
  --virtual-time-budget=4000 --window-size=1600,1100 --screenshot=out.png `
  'file:///D:/Mau/WorkSpace/tools/并发协议/witness/gitpage/projects.html'
```
