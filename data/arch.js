window.ARCH = {
 "meta": {
  "project": "rushiera-map",
  "title": "Rushiera",
  "sub": "35 个项目 · 5 层 · 按工程域划分",
  "ver": "v1",
  "updated": "2026-11-07",
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
 "public": false,
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
      },
      {
       "label": "私域线"
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
        "Akasha"
       ],
       "note": "v1.92 · 待办 2",
       "evidence": "Project/Akasha/project.md"
      },
      {
       "id": "p-CH3",
       "label": "CH3",
       "sub": "多智能体操作系统",
       "kind": "core",
       "status": "done",
       "col": 1,
       "row": 0,
       "tags": [
        "Coder",
        "CSharp",
        "Godot",
        "GodotTscn"
       ],
       "note": "v2.4 · 待办 16",
       "evidence": "Project/CH3/project.md"
      },
      {
       "id": "p-CH4",
       "label": "CH4",
       "sub": "Mau 自举循环宿主（多智能体 OS 能力后置）",
       "kind": "core",
       "status": "done",
       "col": 2,
       "row": 0,
       "tags": [
        "Coder",
        "CSharp",
        "Mau",
        "Html",
        "WinForms"
       ],
       "note": "1.8.222 · 待办 1",
       "evidence": "Project/CH4/project.md"
      },
      {
       "id": "p-CatHome2.0",
       "label": "CatHome2.0",
       "sub": "多智能体操作系统·维护中（当前运行 v2.2.4）",
       "kind": "core",
       "status": "done",
       "col": 3,
       "row": 0,
       "tags": [
        "Coder",
        "CSharp",
        "Git"
       ],
       "note": "v4.13 | 创建：2026-06-17 | 更新：2026-11-04 · 待办 9",
       "evidence": "Project/CatHome2.0/project.md"
      },
      {
       "id": "p-FileSync",
       "label": "FileSync",
       "sub": "跨设备文件同步（手机 → PC 单向自动投递）",
       "kind": "core",
       "status": "done",
       "col": 4,
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
       "sub": "Mau 地基区块——CH4 自举工具箱（私人方言）",
       "kind": "core",
       "status": "done",
       "col": 0,
       "row": 0,
       "tags": [
        "Coder",
        "CSharp",
        "Git"
       ],
       "note": "1.8.222 · 待办 6",
       "evidence": "Project/Mau/project.md"
      },
      {
       "id": "p-并发协议",
       "label": "并发协议",
       "sub": "跨项目并发调度 + 项目档案索引平台（工具层）",
       "kind": "core",
       "status": "done",
       "col": 1,
       "row": 0,
       "tags": [
        "Majordomo",
        "CSharp",
        "CatHome"
       ],
       "note": "v0.117 · 待办 18",
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
        "Node",
        "CSharp"
       ],
       "note": "v0.22.7 · 待办 21",
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
        "Coder"
       ],
       "note": "v0.26 · 待办 11",
       "evidence": "Project/CGSE_CORE/project.md"
      },
      {
       "id": "p-ECC",
       "label": "ECC",
       "sub": "外部开源工具仓 + 二次开发工作区（Agent Harness 操作系统）——技能",
       "kind": "sup",
       "status": "done",
       "col": 2,
       "row": 1,
       "tags": [
        "Majordomo"
       ],
       "note": "v0.10 · 待办 6",
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
       "note": "v0.32 · 上游基线 `c3647ade1` · 待办 14",
       "evidence": "Project/REA/project.md"
      },
      {
       "id": "p-CGSS-DMM",
       "label": "CGSS-DMM",
       "sub": "第三方 CGSS（DMM / PC 版）离线服务端发行包 —— 接管 + 二次开发",
       "kind": "tgt",
       "status": "done",
       "col": 0,
       "row": 2,
       "tags": [
        "Coder"
       ],
       "note": "v0.19.0 · 待办 5",
       "evidence": "Project/CGSS-DMM/project.md"
      },
      {
       "id": "p-CatGame",
       "label": "CatGame",
       "sub": "框架基建 + 游戏业务",
       "kind": "tgt",
       "status": "done",
       "col": 1,
       "row": 2,
       "tags": [
        "Coder",
        "CSharp",
        "Unity",
        "Git"
       ],
       "note": "v0.69 · 待办 28",
       "evidence": "Project/CatGame/project.md"
      },
      {
       "id": "p-ClashVerge",
       "label": "ClashVerge",
       "sub": "本机 Clash Verge Rev 的接管与二次开发——把安装产物与用户数据全部收进…",
       "kind": "tgt",
       "status": "done",
       "col": 2,
       "row": 2,
       "tags": [
        "Coder"
       ],
       "note": "v1.33 · 待办 27",
       "evidence": "Project/ClashVerge/project.md"
      },
      {
       "id": "p-CloudDrive2",
       "label": "CloudDrive2",
       "sub": "第三方安卓 APK —— 二次开发（备份可靠性：后台自动备份 + 同步 bug）",
       "kind": "tgt",
       "status": "done",
       "col": 3,
       "row": 2,
       "tags": [
        "Coder"
       ],
       "note": "v0.7 · 待办 5",
       "evidence": "Project/CloudDrive2/project.md"
      },
      {
       "id": "p-Cosmoteer",
       "label": "Cosmoteer",
       "sub": "参考实现研究 + 自研 Godot 工程（OurCosmteer）",
       "kind": "tgt",
       "status": "done",
       "col": 4,
       "row": 2,
       "tags": [
        "Coder",
        "Godot",
        "CSharp",
        "Node",
        "Git"
       ],
       "note": "v0.68 · 待办 17",
       "evidence": "Project/Cosmoteer/project.md"
      },
      {
       "id": "p-Gakumas",
       "label": "Gakumas",
       "sub": "学園アイドルマスター（DMM / PC 版）本地解锁包 GakumasUnlock 的…",
       "kind": "tgt",
       "status": "done",
       "col": 0,
       "row": 2,
       "tags": [
        "Coder"
       ],
       "note": "待办 9",
       "evidence": "Project/Gakumas/project.md"
      },
      {
       "id": "p-Hime",
       "label": "Hime",
       "sub": "Unity 商业游戏二次开发（Mono 后端 · 无壳无混淆无强名）",
       "kind": "tgt",
       "status": "done",
       "col": 1,
       "row": 2,
       "tags": [
        "Coder",
        "CSharp",
        "Node"
       ],
       "note": "v0.15 · 待办 14",
       "evidence": "Project/Hime/project.md"
      },
      {
       "id": "p-LosslessScaling",
       "label": "LosslessScaling",
       "sub": "商业软件二次开发（.NET 9 WPF 托管宿主 + 原生渲染核心）",
       "kind": "tgt",
       "status": "done",
       "col": 2,
       "row": 2,
       "tags": [
        "Coder",
        "CSharp",
        "Mau"
       ],
       "note": "v1.3 · 待办 12",
       "evidence": "Project/LosslessScaling/project.md"
      },
      {
       "id": "p-StarlitSeason",
       "label": "StarlitSeason",
       "sub": "アイドルマスター スターリットシーズン（UE4 / PC）的二开试验场 + 跨游戏壳（…",
       "kind": "tgt",
       "status": "done",
       "col": 3,
       "row": 2,
       "tags": [
        "Coder"
       ],
       "note": "待办 26",
       "evidence": "Project/StarlitSeason/project.md"
      },
      {
       "id": "p-TradingView",
       "label": "TradingView",
       "sub": "第三方发行包二次开发（TradingView Desktop · MSIX）",
       "kind": "tgt",
       "status": "done",
       "col": 4,
       "row": 2,
       "tags": [
        "Coder",
        "Node",
        "CSharp"
       ],
       "note": "1.7 · 待办 7",
       "evidence": "Project/TradingView/project.md"
      },
      {
       "id": "p-TsuruPeta",
       "label": "TsuruPeta",
       "sub": "Unity 同人游戏汉化（日 → 中）",
       "kind": "tgt",
       "status": "done",
       "col": 0,
       "row": 2,
       "tags": [
        "Coder",
        "CSharp",
        "Mau"
       ],
       "note": "待办 12",
       "evidence": "Project/TsuruPeta/project.md"
      },
      {
       "id": "p-sc2api-listen",
       "label": "sc2api-listen",
       "sub": "星际争霸 II 进程内接口（Win64 DLL 注入 + C++ / Python 冒…",
       "kind": "tgt",
       "status": "done",
       "col": 1,
       "row": 2,
       "tags": [
        "Coder",
        "Git"
       ],
       "note": "v0.24 · 待办 34",
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
        "CSharp",
        "Html"
       ],
       "note": "分析器 v0.26.4 · 壳 0.43.0 · 待办 5",
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
       "note": "v0.48 · 待办 59",
       "evidence": "Project/ComfyDock/project.md"
      },
      {
       "id": "p-KKManager",
       "label": "KKManager",
       "sub": "Koikatsu 卡片 ↔ zipmod 关联管理器（C# / .NET 8）",
       "kind": "cli",
       "status": "done",
       "col": 2,
       "row": 3,
       "tags": [
        "Coder",
        "CSharp",
        "Release",
        "Html"
       ],
       "note": "v0.21.6 · 待办 47",
       "evidence": "Project/KKManager/project.md"
      },
      {
       "id": "p-KkFetch",
       "label": "KkFetch",
       "sub": "外部站点资源链接采集器（C# / .NET 8 工具链）",
       "kind": "cli",
       "status": "done",
       "col": 3,
       "row": 3,
       "tags": [
        "Coder",
        "CSharp"
       ],
       "note": "v0.31 · 待办 8",
       "evidence": "Project/KkFetch/project.md"
      },
      {
       "id": "p-MOSSCatalog",
       "label": "MOSSCatalog",
       "sub": "图库索引与检索服务（C# / .NET 10 + TypeScript 前端）",
       "kind": "cli",
       "status": "done",
       "col": 4,
       "row": 3,
       "tags": [
        "Coder",
        "CSharp",
        "Html"
       ],
       "note": "v0.4 · 待办 1",
       "evidence": "Project/MOSSCatalog/project.md"
      },
      {
       "id": "p-SC2Replay",
       "label": "SC2Replay",
       "sub": "星际争霸 II 回放分析工具（C# / .NET 8 · 单文件 exe + 自包含 …",
       "kind": "cli",
       "status": "done",
       "col": 0,
       "row": 3,
       "tags": [
        "Coder",
        "CSharp",
        "WinForms",
        "Html"
       ],
       "note": "v0.8 · 待办 28",
       "evidence": "Project/SC2Replay/project.md"
      },
      {
       "id": "p-ThrottleStop",
       "label": "ThrottleStop",
       "sub": "本机（Hasee QNLXS / i7-12650H）稳定性遥测与取证台——外挂采集 …",
       "kind": "cli",
       "status": "done",
       "col": 1,
       "row": 3,
       "tags": [
        "Majordomo"
       ],
       "note": "v0.7 · 待办 6",
       "evidence": "Project/ThrottleStop/project.md"
      },
      {
       "id": "p-Vault",
       "label": "Vault",
       "sub": "工具类项目（本机自用，不对外分发）",
       "kind": "cli",
       "status": "done",
       "col": 2,
       "row": 3,
       "tags": [
        "Coder"
       ],
       "note": "v0.2 · 待办 12",
       "evidence": "Project/Vault/project.md"
      },
      {
       "id": "p-挂载盘清理器",
       "label": "挂载盘清理器",
       "sub": "运维脚本工具集",
       "kind": "cli",
       "status": "done",
       "col": 3,
       "row": 3,
       "tags": [
        "Coder"
       ],
       "note": "v0.8 · 待办 14",
       "evidence": "Project/挂载盘清理器/project.md"
      },
      {
       "id": "p-BOSS直聘",
       "label": "BOSS直聘",
       "sub": "求职平台工作线（套壳浏览器采集 + 岗位库分析 + 真人简历参考 + 站点内容与交互 …",
       "kind": "fb",
       "status": "done",
       "col": 0,
       "row": 4,
       "tags": [
        "Majordomo"
       ],
       "note": "v0.20.2 · 待办 10",
       "evidence": "Project/BOSS直聘/project.md"
      },
      {
       "id": "p-QQBotB",
       "label": "QQBotB",
       "sub": "QQ 消息桥接（模式 B）——专用 QQ 号 + OneBot 11 协议端",
       "kind": "fb",
       "status": "done",
       "col": 1,
       "row": 4,
       "tags": [
        "Coder",
        "CSharp",
        "Git"
       ],
       "note": "v1.20 · 待办 52",
       "evidence": "Project/QQBotB/project.md"
      },
      {
       "id": "p-协商知识库",
       "label": "协商知识库",
       "sub": "录音 → 带说话人标注的可检索文本 + 客户协商知识库（网页面板 + 本地后端 · 一…",
       "kind": "fb",
       "status": "done",
       "col": 2,
       "row": 4,
       "tags": [
        "Majordomo"
       ],
       "note": "v1.44 · 待办 86",
       "evidence": "Project/协商知识库/project.md"
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
       "v": "07-21",
       "date": "",
       "group": "2026-07",
       "lane": "host",
       "title": "CH3 · 多智能体操作系统",
       "items": [
        "v2.4",
        "待办 16"
       ],
       "status": "partial",
       "evidence": "Project/CH3/project.md"
      },
      {
       "v": "08-03",
       "date": "",
       "group": "2026-08",
       "lane": "host",
       "title": "Mau · Mau 地基区块——CH4 自举工具箱（私人方言）",
       "items": [
        "1.8.222",
        "待办 6"
       ],
       "status": "partial",
       "evidence": "Project/Mau/project.md"
      },
      {
       "v": "08-14",
       "date": "",
       "group": "2026-08",
       "lane": "host",
       "title": "CH4 · Mau 自举循环宿主（多智能体 OS 能力后置）",
       "items": [
        "1.8.222",
        "待办 1"
       ],
       "status": "partial",
       "evidence": "Project/CH4/project.md"
      },
      {
       "v": "09-25",
       "date": "",
       "group": "2026-09",
       "lane": "tool",
       "title": "ComfyDock · ComfyUI 本地",
       "items": [
        "v0.48",
        "待办 59"
       ],
       "status": "partial",
       "evidence": "Project/ComfyDock/project.md"
      },
      {
       "v": "09-25",
       "date": "",
       "group": "2026-09",
       "lane": "tool",
       "title": "KkFetch · 外部站点资源链接采集器（C# / .NET 8 工具链）",
       "items": [
        "v0.31",
        "待办 8"
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
       "title": "KKManager · Koikatsu 卡片 ↔ zipmod 关联管理器（C# / .NET 8）",
       "items": [
        "v0.21.6",
        "待办 47"
       ],
       "status": "partial",
       "evidence": "Project/KKManager/project.md"
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
       "v": "09-26",
       "date": "",
       "group": "2026-09",
       "lane": "private",
       "title": "QQBotB · QQ 消息桥接（模式 B）——专用 QQ 号 + OneBot 11 协议端",
       "items": [
        "v1.20",
        "待办 52"
       ],
       "status": "partial",
       "evidence": "Project/QQBotB/project.md"
      },
      {
       "v": "09-27",
       "date": "",
       "group": "2026-09",
       "lane": "game",
       "title": "TsuruPeta · Unity 同人游戏汉化（日 → 中）",
       "items": [
        "版本未记",
        "待办 12"
       ],
       "status": "partial",
       "evidence": "Project/TsuruPeta/project.md"
      },
      {
       "v": "10-01",
       "date": "",
       "group": "2026-10",
       "lane": "tool",
       "title": "ApiSiteAnalyzer · API 站用量分析器 + 本机 work 壳（C# / .NET 8 · 三层程序集 …",
       "items": [
        "分析器 v0.26.4 · 壳 0.43.0",
        "待办 5"
       ],
       "status": "partial",
       "evidence": "Project/ApiSiteAnalyzer/project.md"
      },
      {
       "v": "10-01",
       "date": "",
       "group": "2026-10",
       "lane": "private",
       "title": "协商知识库 · 录音 → 带说话人标注的可检索文本 + 客户协商知识库（网页面板 + 本地后端 · 一…",
       "items": [
        "v1.44",
        "待办 86"
       ],
       "status": "partial",
       "evidence": "Project/协商知识库/project.md"
      },
      {
       "v": "10-03",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "CGSS-DMM · 第三方 CGSS（DMM / PC 版）离线服务端发行包 —— 接管 + 二次开发",
       "items": [
        "v0.19.0",
        "待办 5"
       ],
       "status": "partial",
       "evidence": "Project/CGSS-DMM/project.md"
      },
      {
       "v": "10-05",
       "date": "",
       "group": "2026-10",
       "lane": "tool",
       "title": "挂载盘清理器 · 运维脚本工具集",
       "items": [
        "v0.8",
        "待办 14"
       ],
       "status": "partial",
       "evidence": "Project/挂载盘清理器/project.md"
      },
      {
       "v": "10-06",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "CloudDrive2 · 第三方安卓 APK —— 二次开发（备份可靠性：后台自动备份 + 同步 bug）",
       "items": [
        "v0.7",
        "待办 5"
       ],
       "status": "partial",
       "evidence": "Project/CloudDrive2/project.md"
      },
      {
       "v": "10-16",
       "date": "",
       "group": "2026-10",
       "lane": "private",
       "title": "BOSS直聘 · 求职平台工作线（套壳浏览器采集 + 岗位库分析 + 真人简历参考 + 站点内容与交互 …",
       "items": [
        "v0.20.2",
        "待办 10"
       ],
       "status": "partial",
       "evidence": "Project/BOSS直聘/project.md"
      },
      {
       "v": "10-21",
       "date": "",
       "group": "2026-10",
       "lane": "agent",
       "title": "REA · 逆向工程 MCP server + CLI（TypeScript / Node 24）",
       "items": [
        "v0.32 · 上游基线 `c3647ade1`",
        "待办 14"
       ],
       "status": "partial",
       "evidence": "Project/REA/project.md"
      },
      {
       "v": "10-21",
       "date": "",
       "group": "2026-10",
       "lane": "tool",
       "title": "ThrottleStop · 本机（Hasee QNLXS / i7-12650H）稳定性遥测与取证台——外挂采集 …",
       "items": [
        "v0.7",
        "待办 6"
       ],
       "status": "partial",
       "evidence": "Project/ThrottleStop/project.md"
      },
      {
       "v": "10-22",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "Cosmoteer · 参考实现研究 + 自研 Godot 工程（OurCosmteer）",
       "items": [
        "v0.68",
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
        "v0.4",
        "待办 1"
       ],
       "status": "partial",
       "evidence": "Project/MOSSCatalog/project.md"
      },
      {
       "v": "10-25",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "Gakumas · 学園アイドルマスター（DMM / PC 版）本地解锁包 GakumasUnlock 的…",
       "items": [
        "版本未记",
        "待办 9"
       ],
       "status": "partial",
       "evidence": "Project/Gakumas/project.md"
      },
      {
       "v": "10-28",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "StarlitSeason · アイドルマスター スターリットシーズン（UE4 / PC）的二开试验场 + 跨游戏壳（…",
       "items": [
        "版本未记",
        "待办 26"
       ],
       "status": "partial",
       "evidence": "Project/StarlitSeason/project.md"
      },
      {
       "v": "10-30",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "ClashVerge · 本机 Clash Verge Rev 的接管与二次开发——把安装产物与用户数据全部收进…",
       "items": [
        "v1.33",
        "待办 27"
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
        "v1.3",
        "待办 12"
       ],
       "status": "partial",
       "evidence": "Project/LosslessScaling/project.md"
      },
      {
       "v": "10-31",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "Hime · Unity 商业游戏二次开发（Mono 后端 · 无壳无混淆无强名）",
       "items": [
        "v0.15",
        "待办 14"
       ],
       "status": "partial",
       "evidence": "Project/Hime/project.md"
      },
      {
       "v": "10-31",
       "date": "",
       "group": "2026-10",
       "lane": "game",
       "title": "sc2api-listen · 星际争霸 II 进程内接口（Win64 DLL 注入 + C++ / Python 冒…",
       "items": [
        "v0.24",
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
        "v0.22.7",
        "待办 21"
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
        "v0.26",
        "待办 11"
       ],
       "status": "partial",
       "evidence": "Project/CGSE_CORE/project.md"
      },
      {
       "v": "11-01",
       "date": "",
       "group": "2026-11",
       "lane": "agent",
       "title": "ECC · 外部开源工具仓 + 二次开发工作区（Agent Harness 操作系统）——技能",
       "items": [
        "v0.10",
        "待办 6"
       ],
       "status": "partial",
       "evidence": "Project/ECC/project.md"
      },
      {
       "v": "11-04",
       "date": "",
       "group": "2026-11",
       "lane": "game",
       "title": "TradingView · 第三方发行包二次开发（TradingView Desktop · MSIX）",
       "items": [
        "1.7",
        "待办 7"
       ],
       "status": "partial",
       "evidence": "Project/TradingView/project.md"
      },
      {
       "v": "—",
       "date": "",
       "group": "未记起点",
       "lane": "host",
       "title": "Akasha · 知识数据库 + CCBP 维护工作台",
       "items": [
        "v1.92",
        "待办 2"
       ],
       "status": "partial",
       "evidence": "Project/Akasha/project.md"
      },
      {
       "v": "—",
       "date": "",
       "group": "未记起点",
       "lane": "game",
       "title": "CatGame · 框架基建 + 游戏业务",
       "items": [
        "v0.69",
        "待办 28"
       ],
       "status": "partial",
       "evidence": "Project/CatGame/project.md"
      },
      {
       "v": "—",
       "date": "",
       "group": "未记起点",
       "lane": "host",
       "title": "CatHome2.0 · 多智能体操作系统·维护中（当前运行 v2.2.4）",
       "items": [
        "v4.13 | 创建：2026-06-17 | 更新：2026-11-04",
        "待办 9"
       ],
       "status": "partial",
       "evidence": "Project/CatHome2.0/project.md"
      },
      {
       "v": "—",
       "date": "",
       "group": "未记起点",
       "lane": "tool",
       "title": "Vault · 工具类项目（本机自用，不对外分发）",
       "items": [
        "v0.2",
        "待办 12"
       ],
       "status": "partial",
       "evidence": "Project/Vault/project.md"
      },
      {
       "v": "—",
       "date": "",
       "group": "未记起点",
       "lane": "host",
       "title": "并发协议 · 跨项目并发调度 + 项目档案索引平台（工具层）",
       "items": [
        "v0.117",
        "待办 18"
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
