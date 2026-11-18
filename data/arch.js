window.ARCH = {
 "meta": {
  "project": "rushiera-public",
  "title": "Rushiera",
  "sub": "18 个项目 · 5 层 · 按工程域划分",
  "ver": "v1",
  "updated": "2026-11-18",
  "roleLabels": true,
  "fit": "width"
 },
 "grid": {
  "cols": 5,
  "cw": 262,
  "gap": 26,
  "pad": 26,
  "cwMax": 340
 },
 "public": true,
 "legend": false,
 "contract": {
  "views": [
   "map",
   "timeline"
  ]
 },
 "views": [
  {
   "id": "map",
   "name": "项目星图",
   "desc": "按工程层划分，颜色是主理角色",
   "pages": [
    {
     "id": "layers",
     "name": "层 × 项目",
     "type": "diagram",
     "bands": [
      {
       "label": "运行地基 · 宿主与知识网络"
      },
      {
       "label": "Agent 与逆向"
      },
      {
       "label": "游戏与运行时改造"
      },
      {
       "label": "工具与数据"
      }
     ],
     "nodes": [
      {
       "id": "p-Akasha",
       "label": "Akasha",
       "sub": "知识数据库 + CCBP 维护工作台",
       "kind": "core",
       "status": "done",
       "col": 0,
       "row": 0,
       "tags": [
        "Majordomo",
        "Akasha"
       ],
       "note": "v1.94 · 待办 2",
       "evidence": "Project/Akasha/project.md"
      },
      {
       "id": "p-FileSync",
       "label": "FileSync",
       "sub": "跨设备文件同步（手机 → PC 单向自动投递）",
       "kind": "core",
       "status": "done",
       "col": 1,
       "row": 0,
       "tags": [
        "Majordomo"
       ],
       "note": "v0.3 · 待办 9",
       "evidence": "Project/FileSync/project.md"
      },
      {
       "id": "p-Mau",
       "label": "Mau",
       "sub": "唯一正用仓库——Go CAT5 主仓（Mau-Go + CatHome5 共仓；202…",
       "kind": "core",
       "status": "done",
       "col": 2,
       "row": 0,
       "tags": [
        "Coder",
        "Mau",
        "Go",
        "Git"
       ],
       "note": "0.36.9（`version.txt` 单点；运行区 0.36.9 已部署（2026-11-16 20:53:44 · incr · pid 换代）——排空闸门（重启登记后冻结其它会话的轮、等 OA 在途自然跑完、上限 300s、撤销自动解冻），见 `CHANGELOG.md` 首行） · 待办 27",
       "evidence": "Project/Mau/project.md"
      },
      {
       "id": "p-并发协议",
       "label": "并发协议",
       "sub": "跨项目并发调度 + 项目档案索引平台（工具层）",
       "kind": "core",
       "status": "done",
       "col": 3,
       "row": 0,
       "tags": [
        "Majordomo",
        "CSharp",
        "CatHome"
       ],
       "note": "v0.352 · 待办 43",
       "evidence": "Project/并发协议/project.md"
      },
      {
       "id": "p-ACS",
       "label": "ACS",
       "sub": "应用控制面标准 + 实现包 + 实测语料（Node / C# 双栈）",
       "kind": "sup",
       "status": "done",
       "col": 0,
       "row": 1,
       "tags": [
        "Coder",
        "ACS",
        "Node",
        "CSharp"
       ],
       "note": "v0.90.2 · 待办 9",
       "evidence": "Project/ACS/project.md"
      },
      {
       "id": "p-CGSE_CORE",
       "label": "CGSE_CORE",
       "sub": "外部开源项目协作开发（Java 17 + Gradle 8.8 · MPL-2.0）",
       "kind": "sup",
       "status": "done",
       "col": 1,
       "row": 1,
       "tags": [
        "Coder",
        "CGSE_CORE`—…",
        "powershell",
        "py-run"
       ],
       "note": "v0.43 · 待办 5",
       "evidence": "Project/CGSE_CORE/project.md"
      },
      {
       "id": "p-ECC",
       "label": "ECC",
       "sub": "可移植的 Agent 工作流层（reusable workflow layer）+ 二…",
       "kind": "sup",
       "status": "done",
       "col": 2,
       "row": 1,
       "tags": [
        "Majordomo",
        "ECC；工具面 = `…",
        "file-*",
        "powershell`…"
       ],
       "note": "v0.35 · 待办 0",
       "evidence": "Project/ECC/project.md"
      },
      {
       "id": "p-REA",
       "label": "REA",
       "sub": "逆向工程 MCP server + CLI（TypeScript / Node 24）",
       "kind": "sup",
       "status": "done",
       "col": 3,
       "row": 1,
       "tags": [
        "Coder",
        "Node",
        "Git"
       ],
       "note": "v0.73 · 上游基线 `c8d5413d0` · 待办 13",
       "evidence": "Project/REA/project.md"
      },
      {
       "id": "p-ClashVerge",
       "label": "ClashVerge",
       "sub": "本机 Clash Verge Rev 的接管与二次开发——把安装产物与用户数据全部收进…",
       "kind": "tgt",
       "status": "done",
       "col": 0,
       "row": 2,
       "tags": [
        "Coder"
       ],
       "note": "v1.88（v1.88：#64 上游化评估完成（结论 = 参与待发起）+ Phase 3 首项「连接详情面板」落地——`netlog/panel.mjs` 只读 `conn`，127.0.0.1:8768 表格显示协议画像三列 `alpn` / `path` / `tls_fp` + 点击看全字段；`/api/connections` 与 `--cli` 共用 `queryRows()`（面板值 == 命令行值）；验收 = TLS `alpn=h2 · ja3:d67b0948…309f` + 明文 `path=/panel-acceptance`，截图 OCR 与 CLI 逐字节一致；上游检索：两库 ALPN / path / JA3 提案 title 全 0、上游代码无对应字段与规则 → 「参与」需主理拍板与 GitHub 凭据；顺带 `probe-self --hold N`（明文快速响应用 curl --limit-rate 拖住，已写进头注释）。v1.87：协议层 Phase 2 第四类收口——PATH-REGEX 已换核 `v1.19.34-phase7`（服务侧 + `app` 侧同版）· 规则落盘 41 == 41 · 三态实测全过（明文同 path 命中 PathRegex 走三毛机场 / 明文换 path 落 DIRECT / 同域同 path 的 HTTPS 不命中 = 作用域自证）· `diff-providers` SET_DIFF_OK · `assert-routes` 37 PASS / FAIL 0 / 未覆盖 0。v1.86：协议层 Phase 2 第四类 PATH-REGEX 接入（代码层收口 · 换核待 UAC）——内核 `v1.19.34-phase7` 产物就绪（84,207,104 B · 02:33:31），`rules/common/pathregex.go` 新建（单条 RE2 正则 · 512 字符上限按 rune 计 · 空串 / 超长 / 编译失败构造期报错 · 大小写敏感 · payload 不拆逗号）+ `constant/rule.go` / `rules/common/base.go` / `rules/parser.go` / `constant/version.go` 四改；测试 2 件 7 函数全绿（长度三态 511/512/513 + 中文按 rune + `a{1,` 是字面量不算错）；配置级消费点三条（AND 包裹成功 / 裸行 `{1,3}` 成功 / 565 字符 exit 1 且消息准确）；有界性数值证明：`conn.path` max=12 · p99=12 · >512 行 0（5 / 907,526 行有值，全为验证域）；补丁集 19 → 22 文件 全 `already`；🔴 服务侧换核未完成（`elevate-swap-kernel.ps1` 四次停在 `elevating (one UAC prompt)...`，`probe-kernel` 仍 phase6），规则有意不落盘（phase6 验证态不认 PATH-REGEX，落了会被 `[Validate]` 拒载并回落最小配置）；盘面 / 运行面仍 40 条，用户网络零变化。v1.85：协议层 Phase 2 第三类——FINGERPRINT 规则接入：内核 v1.19.34-phase6（`rules/common/fingerprint.go` 新建 + `constant/rule.go` / `rules/common/base.go` / `rules/parser.go` / 版本串；口径收窄——payload 每个值必须匹配 `ja3:[0-9a-f]{32}`（先小写归一），ja4 / 裸 hex / 缺前缀一律构造期报错）；首例 `AND,((FINGERPRINT,ja3:d67b0948…),(DOMAIN-SUFFIX,tls.peet.ws)) → 三毛机场`（接管面 39 → 40）两态实测：Node 客户端（`probe-self --host tls.peet.ws`）→ 规则 `AND` · 链 `日本-3 > 三毛机场`；curl（另一套 TLS 栈 `ja3:fae0e5d9…`）→ `Match` · `DIRECT`，`conn.tls_fp` 两值并存 → 证明「嗅探对两条都进入、指纹不同才分腿」；`assert-routes` 38 PASS / 未覆盖 0、`diff-providers` SET_DIFF_OK、补丁集 16 → 19 文件；换核顺序定死 先服务侧、后 app 侧（两侧同版才不被 `[Validate]` 拒载）。v1.84：协议层 Phase 2 第二类——SNIFF-SOURCE 规则接入：内核 v1.19.34-phase5（`rules/common/sniffsource.go` 新建 + `rule.go` / `base.go` / `parser.go` / `version.go`；枚举封闭——payload 只接受 tls/http/quic，写错构造期报错）；首例 `AND,((SNIFF-SOURCE,tls),(DOMAIN-SUFFIX,example.org)) → 三毛机场`（接管面 38 → 39）两态实测：TLS（`probe-alpn --alpn http/1.1`）→ `三毛机场[日本-3]`，明文 HTTP → `Match,DIRECT`；`assert-routes` 38 PASS / 未覆盖 0、`diff-providers` SET_DIFF_OK、补丁集 11 → 16 文件（测试文件也进补丁集）+ `force-domain` 加 `+.example.org`；顺带修 `assert-routes` 逻辑行派生的假绿（所有 AND 行共用 `Alpn` 锚点）。v1.83：协议层 Phase 2 首例——ALPN 规则接入：内核 v1.19.34-phase4（`rules/common/alpn.go` 新建 + `rule.go` / `parser.go` / `base.go` / `version.go`，单测 6 函数 + 8 子例全绿）；首例 `AND,((ALPN,h2),(DOMAIN-SUFFIX,example.com)) → 三毛机场`（接管面 37 → 38）两态实测：`--alpn h2` 命中 → `三毛机场[日本-3]`，`--alpn http/1.1` 落 `MATCH,DIRECT`；`assert-routes` 38 PASS / 未覆盖 0、`diff-providers` SET_DIFF_OK、补丁集 7 → 11 文件 + 改名 `kernel-patches` + `mode=create`。🔴 新判据：验证态内核必须与运行态同版——`app\\verge-mihomo.exe` 停在 phase0 而服务副本是 phase4 时，`[Validate]` 报 `unsupported rule type: ALPN` → 回落最小配置（`proxies_count` 58 → 7）。v1.82：协议层 Phase 1 收口——QUIC-ALPN（h3）落库 + 触发条件实测（SOCKS5 UDP 关联 · 域名封装）+ ECH 样本补齐；内核 v1.19.34-phase3（84,179,968 B · 补丁集 7 文件）；`probe-schema` 出现 `alpn=h3 src=quic` 与 `ech=1`；顺带修一处既有测试断言（`errNotTLS` → `ErrNoSNI`）与一个运行态缺口（`GET /configs` 的 sniffing 不等于嗅探运行态 · `PATCH /configs {\"sniffing\":true}` 恢复）。v1.81：TLS 画像回归解除——phase2 诊断内核（`TCPSniff` 两处早退 + `NewDispatcher` 一行，均 `[Sniffer]` 前缀）上线：`sniffers=3` 证明 TLS/HTTP/QUIC 三段全部解析成功 · `forceDomain=1` 是 4 条 `force-domain` 合并成单个 domain-set matcher（`parseDomain` 实现，不是配置丢失）· 大量 `shouldOverride=false` 是「非 force-domain 域名不嗅探」的设计行为；实测 `www.cloudflare.com` / `tls-ech.dev` 画像全字段（`alpn=h2 · src=tls · fp=ja3:d67b0948… · ver=1.3`）与 HTTP `path=/foo` 正常，`probe-schema` alpn 11→19 · tls_fp 9→17 · tls_version 9→17 · sni 9→17 → v1.80 的「TLS 画像回归」判据作废（观测对象不在 force-domain 内 + `/connections` 快照读取与连接存活期错位）；#63 核销、补丁集同步到诊断版（`44F8D427…`）· v1.80：补丁重放三件建成 + mihomo 升级 v1.19.34（TLS 画像回归待修）——重放三件连跑两次全 `already`（幂等实证）；上游 v1.19.32→v1.19.34 未碰 6 个改动文件（冲突面 0）；重放 6 文件全 `applied`；产物 84,172,800 B；`GET /version` = `v1.19.34-phase1`；🔴 TLS 画像回归（`sniffHost` 空、HTTP path 正常），fix1 已排除「数据不完整」→ 交接 §三-1。v1.79：协议层 Phase 1 取数面全通——内核 `v1.19.32-phase1`（JA3 / TLS 版本 / SNI / ECH / ALPN 落库，`conn` 28 列）；ALPN 两条样本（`h2` / `http/1.1`）、`ech=1`、JA3 与 `tls.peet.ws` 第三方逐字节一致、`sni` 两态；curl 8.10.1 无 HTTP2 → 新增 `netlog/probe-alpn.mjs` 真实客户端；ECH 用 Go `crypto/tls` 真实客户端（`netlog/probe-ech/main.go`）。v1.78：SCSP 游戏 API 域名族显式直连（`bypass-scsp-localhost-api` · 接管面 36 → 37）。v1.77：协议层 Phase 0——`sniffer` 从「域名提取器」扩成「协议画像」（ALPN / 明文 method+path / ECH / 预留指纹），代码 6 文件已编译，产物自报 `v1.19.32-phase0`；部署被服务模式挡住 → 管理员停服务替换 `cores\\*` 四份副本生效（判据 1/2/3 全过）。v1.76：FANZA 族并入 `dmm-出网`（旁路表 2 → 4 条后缀，`assert-routes` 37 PASS / FAIL 0）。v1.75：`dmm-出网` 组 + `DOMAIN-SUFFIX,dmm.com` 接管。v1.74：工程迁入 `tools/work/ClashVerge`。v1.73：`unity-出网`。v1.72：`gofile-出网` `interval` 120。v1.71：`raw` 口径纠错 + 30.72 GB 可重建产物清理。v1.70：`short` 门禁两护栏。v1.69：`+.gofile.io` 国内 DoH） · 待办 36",
       "evidence": "Project/ClashVerge/project.md"
      },
      {
       "id": "p-CloudDrive2",
       "label": "CloudDrive2",
       "sub": "第三方安卓 APK —— 二次开发（备份可靠性：后台自动备份 + 同步 bug）",
       "kind": "tgt",
       "status": "done",
       "col": 1,
       "row": 2,
       "tags": [
        "Coder"
       ],
       "note": "v0.8 · 待办 9",
       "evidence": "Project/CloudDrive2/project.md"
      },
      {
       "id": "p-Cosmoteer",
       "label": "Cosmoteer",
       "sub": "参考实现研究 + 自研 Godot 工程（OurCosmteer）",
       "kind": "tgt",
       "status": "done",
       "col": 2,
       "row": 2,
       "tags": [
        "Coder",
        "Godot",
        "CSharp",
        "Node",
        "Git"
       ],
       "note": "v0.69 · 待办 17",
       "evidence": "Project/Cosmoteer/project.md"
      },
      {
       "id": "p-LosslessScaling",
       "label": "LosslessScaling",
       "sub": "商业软件二次开发（.NET 9 WPF 托管宿主 + 原生渲染核心）",
       "kind": "tgt",
       "status": "done",
       "col": 3,
       "row": 2,
       "tags": [
        "Coder",
        "CSharp",
        "LosslessSca…",
        "Mau"
       ],
       "note": "v1.4 · 待办 14",
       "evidence": "Project/LosslessScaling/project.md"
      },
      {
       "id": "p-sc2api-listen",
       "label": "sc2api-listen",
       "sub": "星际争霸 II 进程内接口（Win64 DLL 注入 + C++ / Python 冒…",
       "kind": "tgt",
       "status": "done",
       "col": 4,
       "row": 2,
       "tags": [
        "Coder",
        "sc2api-list…",
        "Git"
       ],
       "note": "v0.25 · 待办 34",
       "evidence": "Project/sc2api-listen/project.md"
      },
      {
       "id": "p-ApiSiteAnalyzer",
       "label": "ApiSiteAnalyzer",
       "sub": "API 站用量分析器 + 本机 work 壳（C# / .NET 8 · 三层程序集 …",
       "kind": "cli",
       "status": "done",
       "col": 0,
       "row": 3,
       "tags": [
        "Coder",
        "ApiSiteAnal…",
        "CSharp",
        "Html"
       ],
       "note": "分析器 v0.26.4 · 壳源码 0.46.0 · 待办 5",
       "evidence": "Project/ApiSiteAnalyzer/project.md"
      },
      {
       "id": "p-ComfyDock",
       "label": "ComfyDock",
       "sub": "ComfyUI 本地",
       "kind": "cli",
       "status": "done",
       "col": 1,
       "row": 3,
       "tags": [
        "Coder",
        "CSharp"
       ],
       "note": "v0.49 · 待办 61",
       "evidence": "Project/ComfyDock/project.md"
      },
      {
       "id": "p-KkFetch",
       "label": "KkFetch",
       "sub": "外部站点资源链接采集器（C# / .NET 8 工具链 · 三层程序集 + 进程内热重…",
       "kind": "cli",
       "status": "done",
       "col": 2,
       "row": 3,
       "tags": [
        "Coder",
        "CSharp",
        "KkFetch"
       ],
       "note": "v0.40.0 · 待办 4",
       "evidence": "Project/KkFetch/project.md"
      },
      {
       "id": "p-MOSSCatalog",
       "label": "MOSSCatalog",
       "sub": "图库索引与检索服务（C# / .NET 10 + TypeScript 前端）",
       "kind": "cli",
       "status": "done",
       "col": 3,
       "row": 3,
       "tags": [
        "Coder",
        "CSharp",
        "Html"
       ],
       "note": "v0.5 · 待办 4",
       "evidence": "Project/MOSSCatalog/project.md"
      },
      {
       "id": "p-SC2Replay",
       "label": "SC2Replay",
       "sub": "星际争霸 II 回放分析工具（C# / .NET 8 · 单文件 exe + 自包含 …",
       "kind": "cli",
       "status": "done",
       "col": 4,
       "row": 3,
       "tags": [
        "Coder",
        "CSharp",
        "WinForms",
        "Html"
       ],
       "note": "v0.8 · 待办 28",
       "evidence": "Project/SC2Replay/project.md"
      }
     ],
     "edges": []
    }
   ]
  },
  {
   "id": "timeline",
   "name": "起点时间线",
   "desc": "每个项目什么时候开的，不是什么时候完的",
   "pages": [
    {
     "id": "start",
     "name": "立项时间线",
     "type": "timeline",
     "lanes": [
      {
       "id": "host",
       "name": "运行地基",
       "color": "#0969da"
      },
      {
       "id": "agent",
       "name": "Agent 与逆向",
       "color": "#8250df"
      },
      {
       "id": "game",
       "name": "游戏与运行时改造",
       "color": "#57606a"
      },
      {
       "id": "tool",
       "name": "工具与数据",
       "color": "#953800"
      },
      {
       "id": "private",
       "name": "私域线",
       "color": "#bf3989"
      }
     ],
     "entries": [
      {
       "v": "08-03",
       "date": "",
       "group": "2026-08",
       "lane": "host",
       "title": "Mau · 唯一正用仓库——Go CAT5 主仓（Mau-Go + CatHome5 共仓；202…",
       "items": [
        "0.36.9（`version.txt` 单点；运行区 0.36.9 已部署（2026-11-16 20:53:44 · incr · pid 换代）——排空闸门（重启登记后冻结其它会话的轮、等 OA 在途自然跑完、上限 300s、撤销自动解冻），见 `CHANGELOG.md` 首行）",
        "待办 27"
       ],
       "status": "partial",
       "evidence": "Project/Mau/project.md"
      },
      {
       "v": "09-25",
       "date": "",
       "group": "2026-09",
       "lane": "tool",
       "title": "ComfyDock · ComfyUI 本地",
       "items": [
        "v0.49",
        "待办 61"
       ],
       "status": "partial",
       "evidence": "Project/ComfyDock/project.md"
      },
      {
       "v": "09-25",
       "date": "",
       "group": "2026-09",
       "lane": "tool",
       "title": "KkFetch · 外部站点资源链接采集器（C# / .NET 8 工具链 · 三层程序集 + 进程内热重…",
       "items": [
        "v0.40.0",
        "待办 4"
       ],
       "status": "partial",
       "evidence": "Project/KkFetch/project.md"
      },
      {
       "v": "09-26",
       "date": "",
       "group": "2026-09",
       "lane": "host",
       "title": "FileSync · 跨设备文件同步（手机 → PC 单向自动投递）",
       "items": [
        "v0.3",
        "待办 9"
       ],
       "status": "partial",
       "evidence": "Project/FileSync/project.md"
      },
      {
       "v": "09-26",
       "date": "",
       "group": "2026-09",
       "lane": "tool",
       "title": "SC2Replay · 星际争霸 II 回放分析工具（C# / .NET 8 · 单文件 exe + 自包含 …",
       "items": [
        "v0.8",
        "待办 28"
       ],
       "status": "partial",
       "evidence": "Project/SC2Replay/project.md"
      },
      {
       "v": "10-01",
       "date": "",
       "group": "2026-10",
       "lane": "tool",
       "title": "ApiSiteAnalyzer · API 站用量分析器 + 本机 work 壳（C# / .NET 8 · 三层程序集 …",
       "items": [
        "分析器 v0.26.4 · 壳源码 0.46.0",
        "待办 5"
       ],
       "status": "partial",
       "evidence": "Project/ApiSiteAnalyzer/project.md"
      },
      {
       "v": "10-06",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "CloudDrive2 · 第三方安卓 APK —— 二次开发（备份可靠性：后台自动备份 + 同步 bug）",
       "items": [
        "v0.8",
        "待办 9"
       ],
       "status": "partial",
       "evidence": "Project/CloudDrive2/project.md"
      },
      {
       "v": "10-21",
       "date": "",
       "group": "2026-10",
       "lane": "agent",
       "title": "REA · 逆向工程 MCP server + CLI（TypeScript / Node 24）",
       "items": [
        "v0.73 · 上游基线 `c8d5413d0`",
        "待办 13"
       ],
       "status": "partial",
       "evidence": "Project/REA/project.md"
      },
      {
       "v": "10-22",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "Cosmoteer · 参考实现研究 + 自研 Godot 工程（OurCosmteer）",
       "items": [
        "v0.69",
        "待办 17"
       ],
       "status": "partial",
       "evidence": "Project/Cosmoteer/project.md"
      },
      {
       "v": "10-22",
       "date": "",
       "group": "2026-10",
       "lane": "tool",
       "title": "MOSSCatalog · 图库索引与检索服务（C# / .NET 10 + TypeScript 前端）",
       "items": [
        "v0.5",
        "待办 4"
       ],
       "status": "partial",
       "evidence": "Project/MOSSCatalog/project.md"
      },
      {
       "v": "10-30",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "ClashVerge · 本机 Clash Verge Rev 的接管与二次开发——把安装产物与用户数据全部收进…",
       "items": [
        "v1.88（v1.88：#64 上游化评估完成（结论 = 参与待发起）+ Phase 3 首项「连接详情面板」落地——`netlog/panel.mjs` 只读 `conn`，127.0.0.1:8768 表格显示协议画像三列 `alpn` / `path` / `tls_fp` + 点击看全字段；`/api/connections` 与 `--cli` 共用 `queryRows()`（面板值 == 命令行值）；验收 = TLS `alpn=h2 · ja3:d67b0948…309f` + 明文 `path=/panel-acceptance`，截图 OCR 与 CLI 逐字节一致；上游检索：两库 ALPN / path / JA3 提案 title 全 0、上游代码无对应字段与规则 → 「参与」需主理拍板与 GitHub 凭据；顺带 `probe-self --hold N`（明文快速响应用 curl --limit-rate 拖住，已写进头注释）。v1.87：协议层 Phase 2 第四类收口——PATH-REGEX 已换核 `v1.19.34-phase7`（服务侧 + `app` 侧同版）· 规则落盘 41 == 41 · 三态实测全过（明文同 path 命中 PathRegex 走三毛机场 / 明文换 path 落 DIRECT / 同域同 path 的 HTTPS 不命中 = 作用域自证）· `diff-providers` SET_DIFF_OK · `assert-routes` 37 PASS / FAIL 0 / 未覆盖 0。v1.86：协议层 Phase 2 第四类 PATH-REGEX 接入（代码层收口 · 换核待 UAC）——内核 `v1.19.34-phase7` 产物就绪（84,207,104 B · 02:33:31），`rules/common/pathregex.go` 新建（单条 RE2 正则 · 512 字符上限按 rune 计 · 空串 / 超长 / 编译失败构造期报错 · 大小写敏感 · payload 不拆逗号）+ `constant/rule.go` / `rules/common/base.go` / `rules/parser.go` / `constant/version.go` 四改；测试 2 件 7 函数全绿（长度三态 511/512/513 + 中文按 rune + `a{1,` 是字面量不算错）；配置级消费点三条（AND 包裹成功 / 裸行 `{1,3}` 成功 / 565 字符 exit 1 且消息准确）；有界性数值证明：`conn.path` max=12 · p99=12 · >512 行 0（5 / 907,526 行有值，全为验证域）；补丁集 19 → 22 文件 全 `already`；🔴 服务侧换核未完成（`elevate-swap-kernel.ps1` 四次停在 `elevating (one UAC prompt)...`，`probe-kernel` 仍 phase6），规则有意不落盘（phase6 验证态不认 PATH-REGEX，落了会被 `[Validate]` 拒载并回落最小配置）；盘面 / 运行面仍 40 条，用户网络零变化。v1.85：协议层 Phase 2 第三类——FINGERPRINT 规则接入：内核 v1.19.34-phase6（`rules/common/fingerprint.go` 新建 + `constant/rule.go` / `rules/common/base.go` / `rules/parser.go` / 版本串；口径收窄——payload 每个值必须匹配 `ja3:[0-9a-f]{32}`（先小写归一），ja4 / 裸 hex / 缺前缀一律构造期报错）；首例 `AND,((FINGERPRINT,ja3:d67b0948…),(DOMAIN-SUFFIX,tls.peet.ws)) → 三毛机场`（接管面 39 → 40）两态实测：Node 客户端（`probe-self --host tls.peet.ws`）→ 规则 `AND` · 链 `日本-3 > 三毛机场`；curl（另一套 TLS 栈 `ja3:fae0e5d9…`）→ `Match` · `DIRECT`，`conn.tls_fp` 两值并存 → 证明「嗅探对两条都进入、指纹不同才分腿」；`assert-routes` 38 PASS / 未覆盖 0、`diff-providers` SET_DIFF_OK、补丁集 16 → 19 文件；换核顺序定死 先服务侧、后 app 侧（两侧同版才不被 `[Validate]` 拒载）。v1.84：协议层 Phase 2 第二类——SNIFF-SOURCE 规则接入：内核 v1.19.34-phase5（`rules/common/sniffsource.go` 新建 + `rule.go` / `base.go` / `parser.go` / `version.go`；枚举封闭——payload 只接受 tls/http/quic，写错构造期报错）；首例 `AND,((SNIFF-SOURCE,tls),(DOMAIN-SUFFIX,example.org)) → 三毛机场`（接管面 38 → 39）两态实测：TLS（`probe-alpn --alpn http/1.1`）→ `三毛机场[日本-3]`，明文 HTTP → `Match,DIRECT`；`assert-routes` 38 PASS / 未覆盖 0、`diff-providers` SET_DIFF_OK、补丁集 11 → 16 文件（测试文件也进补丁集）+ `force-domain` 加 `+.example.org`；顺带修 `assert-routes` 逻辑行派生的假绿（所有 AND 行共用 `Alpn` 锚点）。v1.83：协议层 Phase 2 首例——ALPN 规则接入：内核 v1.19.34-phase4（`rules/common/alpn.go` 新建 + `rule.go` / `parser.go` / `base.go` / `version.go`，单测 6 函数 + 8 子例全绿）；首例 `AND,((ALPN,h2),(DOMAIN-SUFFIX,example.com)) → 三毛机场`（接管面 37 → 38）两态实测：`--alpn h2` 命中 → `三毛机场[日本-3]`，`--alpn http/1.1` 落 `MATCH,DIRECT`；`assert-routes` 38 PASS / 未覆盖 0、`diff-providers` SET_DIFF_OK、补丁集 7 → 11 文件 + 改名 `kernel-patches` + `mode=create`。🔴 新判据：验证态内核必须与运行态同版——`app\\verge-mihomo.exe` 停在 phase0 而服务副本是 phase4 时，`[Validate]` 报 `unsupported rule type: ALPN` → 回落最小配置（`proxies_count` 58 → 7）。v1.82：协议层 Phase 1 收口——QUIC-ALPN（h3）落库 + 触发条件实测（SOCKS5 UDP 关联 · 域名封装）+ ECH 样本补齐；内核 v1.19.34-phase3（84,179,968 B · 补丁集 7 文件）；`probe-schema` 出现 `alpn=h3 src=quic` 与 `ech=1`；顺带修一处既有测试断言（`errNotTLS` → `ErrNoSNI`）与一个运行态缺口（`GET /configs` 的 sniffing 不等于嗅探运行态 · `PATCH /configs {\"sniffing\":true}` 恢复）。v1.81：TLS 画像回归解除——phase2 诊断内核（`TCPSniff` 两处早退 + `NewDispatcher` 一行，均 `[Sniffer]` 前缀）上线：`sniffers=3` 证明 TLS/HTTP/QUIC 三段全部解析成功 · `forceDomain=1` 是 4 条 `force-domain` 合并成单个 domain-set matcher（`parseDomain` 实现，不是配置丢失）· 大量 `shouldOverride=false` 是「非 force-domain 域名不嗅探」的设计行为；实测 `www.cloudflare.com` / `tls-ech.dev` 画像全字段（`alpn=h2 · src=tls · fp=ja3:d67b0948… · ver=1.3`）与 HTTP `path=/foo` 正常，`probe-schema` alpn 11→19 · tls_fp 9→17 · tls_version 9→17 · sni 9→17 → v1.80 的「TLS 画像回归」判据作废（观测对象不在 force-domain 内 + `/connections` 快照读取与连接存活期错位）；#63 核销、补丁集同步到诊断版（`44F8D427…`）· v1.80：补丁重放三件建成 + mihomo 升级 v1.19.34（TLS 画像回归待修）——重放三件连跑两次全 `already`（幂等实证）；上游 v1.19.32→v1.19.34 未碰 6 个改动文件（冲突面 0）；重放 6 文件全 `applied`；产物 84,172,800 B；`GET /version` = `v1.19.34-phase1`；🔴 TLS 画像回归（`sniffHost` 空、HTTP path 正常），fix1 已排除「数据不完整」→ 交接 §三-1。v1.79：协议层 Phase 1 取数面全通——内核 `v1.19.32-phase1`（JA3 / TLS 版本 / SNI / ECH / ALPN 落库，`conn` 28 列）；ALPN 两条样本（`h2` / `http/1.1`）、`ech=1`、JA3 与 `tls.peet.ws` 第三方逐字节一致、`sni` 两态；curl 8.10.1 无 HTTP2 → 新增 `netlog/probe-alpn.mjs` 真实客户端；ECH 用 Go `crypto/tls` 真实客户端（`netlog/probe-ech/main.go`）。v1.78：SCSP 游戏 API 域名族显式直连（`bypass-scsp-localhost-api` · 接管面 36 → 37）。v1.77：协议层 Phase 0——`sniffer` 从「域名提取器」扩成「协议画像」（ALPN / 明文 method+path / ECH / 预留指纹），代码 6 文件已编译，产物自报 `v1.19.32-phase0`；部署被服务模式挡住 → 管理员停服务替换 `cores\\*` 四份副本生效（判据 1/2/3 全过）。v1.76：FANZA 族并入 `dmm-出网`（旁路表 2 → 4 条后缀，`assert-routes` 37 PASS / FAIL 0）。v1.75：`dmm-出网` 组 + `DOMAIN-SUFFIX,dmm.com` 接管。v1.74：工程迁入 `tools/work/ClashVerge`。v1.73：`unity-出网`。v1.72：`gofile-出网` `interval` 120。v1.71：`raw` 口径纠错 + 30.72 GB 可重建产物清理。v1.70：`short` 门禁两护栏。v1.69：`+.gofile.io` 国内 DoH）",
        "待办 36"
       ],
       "status": "partial",
       "evidence": "Project/ClashVerge/project.md"
      },
      {
       "v": "10-30",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "LosslessScaling · 商业软件二次开发（.NET 9 WPF 托管宿主 + 原生渲染核心）",
       "items": [
        "v1.4",
        "待办 14"
       ],
       "status": "partial",
       "evidence": "Project/LosslessScaling/project.md"
      },
      {
       "v": "10-31",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "sc2api-listen · 星际争霸 II 进程内接口（Win64 DLL 注入 + C++ / Python 冒…",
       "items": [
        "v0.25",
        "待办 34"
       ],
       "status": "partial",
       "evidence": "Project/sc2api-listen/project.md"
      },
      {
       "v": "11-01",
       "date": "",
       "group": "2026-11",
       "lane": "agent",
       "title": "ACS · 应用控制面标准 + 实现包 + 实测语料（Node / C# 双栈）",
       "items": [
        "v0.90.2",
        "待办 9"
       ],
       "status": "partial",
       "evidence": "Project/ACS/project.md"
      },
      {
       "v": "11-01",
       "date": "",
       "group": "2026-11",
       "lane": "agent",
       "title": "CGSE_CORE · 外部开源项目协作开发（Java 17 + Gradle 8.8 · MPL-2.0）",
       "items": [
        "v0.43",
        "待办 5"
       ],
       "status": "partial",
       "evidence": "Project/CGSE_CORE/project.md"
      },
      {
       "v": "11-01",
       "date": "",
       "group": "2026-11",
       "lane": "agent",
       "title": "ECC · 可移植的 Agent 工作流层（reusable workflow layer）+ 二…",
       "items": [
        "v0.35",
        "待办 0"
       ],
       "status": "done",
       "evidence": "Project/ECC/project.md"
      },
      {
       "v": "—",
       "date": "",
       "group": "未记起点",
       "lane": "host",
       "title": "Akasha · 知识数据库 + CCBP 维护工作台",
       "items": [
        "v1.94",
        "待办 2"
       ],
       "status": "partial",
       "evidence": "Project/Akasha/project.md"
      },
      {
       "v": "—",
       "date": "",
       "group": "未记起点",
       "lane": "host",
       "title": "并发协议 · 跨项目并发调度 + 项目档案索引平台（工具层）",
       "items": [
        "v0.352",
        "待办 43"
       ],
       "status": "partial",
       "evidence": "Project/并发协议/project.md"
      }
     ]
    }
   ]
  }
 ]
};
