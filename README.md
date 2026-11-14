# Rushiera.github.io — 个人履历站

> 归属：**并发协议项目内件**（`WorkSpace:tools/并发协议/witness/gitpage/`，2026-11-07 收编、同日归拢进 `witness/`）——由并发协议维护；档案面在 `ccbp:Project/并发协议/`。
> 纯静态，无构建依赖、无框架。四件：**主页（交付与案例入口）/ 案例 / 项目星图 / 起点时间线**，另加一页仿 GitHub 档案。

旧站（Particle 模板 + 2020 占位内容 + gulp/sass/jQuery 构建链）已退役；内容在 git 历史与回收站里。

---

## 一、结构

```
index.html               主页（面客）：定位 / 三项能做什么 / 统计 / 技术栈 / 工程现场 / 案例入口 / 最近的起点
client.html              案例页（面客）：三个场景的「问题 / 做法 / 交付 / 怎么核」+ 合作方式
witness.html             见证者仪表盘（**全量档独有**）：11 能力 / 版本更新 / 委托流转 / 债务曲线 / 项目与模块生命周期 / 提交时间线 / 产物面 / 档案完备度 / 流水审计 / 运行面 / 对账
projects.html            一页三内容、同页切换不换页：项目星图 / 起点时间线（顶栏视图 tab）· 提交时间线（左下入口条；?pid=<项目> 可深链）
assets/
  site.css  site.js      主页样式与渲染（读 data/projects.js）
  particles.min.js       粒子背景库（旧站原件，原样复用）
  particles-bg.js        首屏背景参数（复刻旧站画法：白五边形 / 连线 250 / 点击补粒）
  dev-banner.js          已下线（0.288：页面不再引用，全量档预览也不顶红条）
  arch/arch.css          archkit 渲染器样式（复制件，勿在此改）
  arch/arch-render.js    archkit 渲染器（复制件，勿在此改）
data/
  projects.json          项目清单（机器可读）
  projects.js            window.PROJECTS（页面消费；stats = 首屏三格：在册 / 本周在推进 / 版本推进）
  arch.js                window.ARCH（星图渲染器消费）
  git/<pid>-git.js       单项目提交时间线（window.ARCH；公开档只出白名单 pid）
  git/index.js           window.GIT_TIMELINES（「提交时间线」入口条消费：pid / 次数 / 起止月）
tools/build-map.mjs          生成器：本机项目档案索引 → 上面三个数据文件
tools/build-witness.mjs      生成器（全量档）：面板端点 + 产物目录 → full/data/witness.js
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

## 二-B、见证者页（全量档独有）

`witness.html` 是**见证者仪表盘**：把面板「见证者」的十一能力（六项产物陈旧度 + 版本更新 + 星图对账 + L3 对账 + 委托流转 + 模块生命周期）与四块趋势面（债务曲线 / 项目生命周期 / 模块生命周期 / CCBP 提交时间线）落成一页**构建期快照**。页面只画快照、不实时；要新数据重跑生成器。项目生命周期带**面板同款进度条**（首末横条 + 版本事件竖线）；星图区**两版并列**（站点版深色 `projects.html` + 面板版 archkit 白底）。

页面 18 段：概览 / **项目星图 · 两版对照** / **最近的起点** / 能力 11 / 版本更新 / 委托流转 / 债务曲线 / 项目生命周期 / 模块生命周期 / 提交时间线 / 产物面 / 整理与解析 / 档案完备度 / 源文本与交接 / 流水与审计 / 运行面 / 对账 / 数据说明。

两块内容直接复用站点现成的（不写第二套渲染、不搬第二份数据）：

| 段 | 做法 | 判据 |
|:--|:--|:--|
| 项目星图 · 站点版 | **iframe `projects.html?v=map&embed=1`**——archkit 渲染器是整页式（`boot()` 直挂 `document.body`、`clearShell()` 用全局选择器清整份文档），**没有容器参数**；所以内嵌走 iframe、不改渲染器契约。`embed=1` 只让 projects.html 加 `body.embed` 隐藏「← 主页 / 见证者 →」，三视图切换（含左下提交时间线入口条）照常 | iframe 内 `.node` = 项目数；顶栏两 tab 可切；站外导航不可见 |
| 项目星图 · 面板版 | **iframe `data/archkit/view.html?d=projects&embed=1`**——与面板「打开项目星图」同一画法：archkit 白底模板 + `history/arch/projects.js` 数据集。构建期由 `build-witness` 把 `witness/archkit/{view.html,assets/*}` 与数据集拷进 `full/data/archkit/`，并注入 `ARCH_ARCHIVED` / `ARCH_HIDDEN`（与面板 `openArch` 同口径）；`?embed=1` 隐藏模板的品牌栏与页脚 | 框内 `.node` = 项目数；`html.class` 含 `embed`；归档节点带斜纹 |
| 最近的起点 | `WITNESS.home.feed`——build-witness 从 `full/data/projects.json` 投影（按立项日倒序前 12 条），与主页「最近的起点」同口径；日期空的项目不参与排序，只在 `total` / `dated` 两数体现 | `#origins` 条数 = `W.home.feed.length`；`total` / `dated` 可回指 projects.json |

数据面（`tools/build-witness.mjs` 构建期抓一次 → `full/data/witness.js`）：

| 输入 | 用途 |
|:--|:--|
| `GET /api/witness` | 11 能力：状态 / 产物（spec · 件数 · 年龄）/ 对账结论 / 事实行 |
| `GET /api/trends` · `/api/trends/modules` | 债务曲线 / 项目生命周期 / 模块生命周期 / 提交时间线 |
| `GET /api/entrust` | 委托单（相位 / 预算 / base / 近轮）、相位分布、AC 与回滚事实行 |
| `GET /api/projects`（索引卡）· `/order` · `/tasks` · `/site/status` · `/sched` · `/health` | 档案完备度 / 四区推荐序 / 任务面（三源）/ 发布状态 / 调度器 / 面板版本 |
| `history/{watch,verify,snapshots,handover,entrust,arch}` · `state/flow/*` | 产物面 + 流水尾部（events / ops / usage / history / tool-feedback） |
| `full/data/projects.json`（build-map 产出，**只读本档落点**） | 「最近的起点」立项时间流（`home.feed`：pid / created / type / worker / version / archived） |
| `witness/archkit/{view.html,assets/*}` + `history/arch/projects.js` | 面板版星图静态包 → `full/data/archkit/`（构建期拷入；归档 / 隐藏名单从 `/api/projects/archive` 注入；失败只 WARN，页面给缺件说明） |

边界：

- **只服务全量档**：`build-site.mjs --profile=full` 才跑 `build-witness.mjs`、才拷 `witness.html`；public 档既不产页面也不产数据（结构上推不出去）。**源页面 `witness.html` 本身也在 `.gitignore` 里**——它读的是 `full/data/witness.js`，不该出现在线上仓（构建时拷进 `full/`，同样不进仓）。
- 面板必须在跑（与提交时间线同一前置）；核心端点缺一即退出 1，不产半份（`full/data/witness.js` 缺席时页面显示「本档不含见证者数据」）。
- 页面数据带**独立版本串**（`witness.js` 内容 sha256 前 8 位，构建时注入 `?v=`）——数据每次构建都换，时间戳不够。
- 入口：`projects.html` 的「见证者 →」只在 `/full/` 路径下探测到 `data/witness.js` 才显示（public 档不发这个请求）。
- **`?embed=1` 是内嵌模式**（`witness.html` 的 iframe 专用）：只让 projects.html 加 `body.embed` 类隐藏站外导航、并跳过 `/full/` 探测；渲染器与三视图一字不变。**无参数时行为一字不变**——public / full 同源同一份页面。archkit 的 `view.html` 同样认 `?embed=1`（隐藏品牌栏 / 页脚，只留视图 tab）。

## 二-C、后续维护归并发协议

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
node tools/build-witness.mjs        # 见证者快照（面板须在跑；只全量档用，写 full/data/witness.js）

node ../tools/build-git-timelines.mjs --dry          # 先看：哪些项目有 git 仓、各几次提交
node ../tools/build-git-timelines.mjs                # 全量：全部可解析仓库的项目各出一份
node ../tools/build-git-timelines.mjs --public       # 公开档：只出白名单，并清掉目录里白名单外的旧数据集
node ../tools/build-git-timelines.mjs --only=CH4,Mau # 局部重跑（清单里其它项目保留）
```

提交时间线这批数据要**面板在跑**才生成得出来（仓库目录由 `/api/projects/{pid}/commits` 解析，脚本不另写一套候选规则）；面板没起会直接报错退出，不产出半份。

🟠 **发布档位（2026-11-09 裁定）**——默认推**全量档**：私域项目的名称与描述可以放到公开站上，保密按**点名制**处理（Rushiera 后续单独对某项目提保密要求时，才把该项目移出 `PUBLIC_PIDS` 或加进隐藏名单）。`--public` 保留为临时收窄手段（白名单 21 项），不再作为发布前置。

门禁：全量档数据带 `public:false`（`build-site.mjs` 每次构建自证），`full/` 在 `.gitignore` 里、发布 job 只提交 `data/`——**结构上就推不出去**。2026-11-14（0.288）起底栏红条（`assets/dev-banner.js`）已从页面下线：全量档预览不再顶红条，护栏由上面两条结构约束承担。

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
