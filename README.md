# Rushiera.github.io — 个人履历站

纯静态，无构建、无依赖、无框架。三件：**主页（履历）/ 项目星图 / 起点时间线**。

旧站（Particle 模板 + 2020 占位内容 + gulp/sass/jQuery 构建链）已退役；内容在 git 历史与回收站里。

---

## 一、结构

```
index.html               主页：定位 / 统计 / 能力面 / 精选工程 / 最近的起点
projects.html            项目星图：层 × 项目（视图 tab 可切「起点时间线」）
assets/
  site.css  site.js      主页样式与渲染（读 data/projects.js）
  particles.min.js       粒子背景库（旧站原件，原样复用）
  particles-bg.js        首屏背景参数（复刻旧站画法：白五边形 / 连线 250 / 点击补粒）
  dev-banner.js          全量档红色告警条（public:false 时出现）
  arch/arch.css          archkit 渲染器样式（复制件，勿在此改）
  arch/arch-render.js    archkit 渲染器（复制件，勿在此改）
data/
  projects.json          项目清单（机器可读）
  projects.js            window.PROJECTS（页面消费）
  arch.js                window.ARCH（星图渲染器消费）
tools/build-map.mjs      生成器：本机项目档案索引 → 上面三个数据文件
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

```powershell
node tools/build-map.mjs            # 全量：本地预览（35 项目，含私域线）
node tools/build-map.mjs --public   # 公开档：只出白名单项目
```

🔴 **发布前必须跑 `--public`**——全量档含私域项目名（求职平台 / 客户协商库 / 商业游戏名），公开到 GitHub Pages 等于外泄。白名单在 `build-map.mjs` 的 `PUBLIC_PIDS`。

门禁：全量档数据带 `public:false`，两个页面底部都会顶一条红色告警条（`assets/dev-banner.js`）——**页面上看得见，不靠记性**。

## 四、发布

```powershell
git add -A
git commit -m "..."
git push origin master
```

GitHub Pages 从 `master` 根目录发布（仓库 `Rushiera/Rushiera.github.io`）。本机直连 github 不通时走仓库级代理 `http://127.0.0.1:7897`（已写入 `.git/config`）。

🔴 **改了 css / js / 数据后必须 bump 版本串**：两页的资源引用都带 `?v=YYYYMMDDx`，Pages 的 CDN 缓存 10 分钟、不带参数的 URL 改完会读到旧文件（HTML 新、CSS 旧 = 页面半新半旧）。改完把两个 html 里的 `?v=` 串一起替换成新值再推。

## 五、星图渲染器

复制自 `WorkSpace:tools/并发协议/archkit`（并发协议工程的共用件）。数据契约 / 状态语义 / 布局规则见该目录的 `README.md` §三。

**同步策略**：archkit 更新后整份覆盖这两个文件，不在本仓改渲染器——差异只留在数据里。

## 六、本地看

直接双击 `index.html` / `projects.html`（`file://` 可用，数据走 `<script>` 不走 `fetch`）。

截图验收：

```powershell
& 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' --headless=new --disable-gpu `
  --virtual-time-budget=4000 --window-size=1600,1100 --screenshot=out.png `
  'file:///D:/Mau/WorkSpace/tools/gitpage/projects.html'
```
