window.ARCH = {
 "meta": {
  "project": "rushiera-public",
  "title": "Rushiera",
  "sub": "18 个项目 · 5 层 · 按工程域划分",
  "ver": "v1",
  "updated": "2026-11-14",
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
       "note": "v1.93 · 待办 2",
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
        "Git"
       ],
       "note": "0.36.3 · 待办 13",
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
       "note": "v0.301 · 待办 30",
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
       "note": "v0.90.1 · 待办 8",
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
       "note": "v0.32 · 待办 0",
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
       "note": "v0.48 · 上游基线 `c3647ade1` · 待办 9",
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
       "note": "v1.72（v1.69：`+.gofile.io` 走国内 DoH——`fallback-filter` 把 geo-DNS 应答判污染后解析到死 IP。v1.70：`short` 升级门禁补两道护栏 + `dbg-host` 两个观测位点。v1.71：`raw` 口径纠错（工作副本非只读）+ `target/` 30.72 GB 可重建产物清入回收站。v1.72：`gofile-出网` 健康检查 `interval` 300 → 120（#59 核销，死窗口 ≤5 min → ≤2 min）） · 待办 35",
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
       "note": "v0.7 · 待办 5",
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
        "0.36.3",
        "待办 13"
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
        "v0.7",
        "待办 5"
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
        "v0.48 · 上游基线 `c3647ade1`",
        "待办 9"
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
        "v1.72（v1.69：`+.gofile.io` 走国内 DoH——`fallback-filter` 把 geo-DNS 应答判污染后解析到死 IP。v1.70：`short` 升级门禁补两道护栏 + `dbg-host` 两个观测位点。v1.71：`raw` 口径纠错（工作副本非只读）+ `target/` 30.72 GB 可重建产物清入回收站。v1.72：`gofile-出网` 健康检查 `interval` 300 → 120（#59 核销，死窗口 ≤5 min → ≤2 min））",
        "待办 35"
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
        "v0.90.1",
        "待办 8"
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
        "v0.32",
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
        "v1.93",
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
        "v0.301",
        "待办 30"
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
