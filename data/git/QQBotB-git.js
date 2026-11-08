window.ARCH = {
  "meta": {
    "project": "QQBotB",
    "title": "QQBotB 提交时间线",
    "sub": "259 次提交 · 2026-09 → 2026-11",
    "ver": "167f174",
    "updated": "2026-11-08",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\QQBotB",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\QQBotB (branch main)"
      }
    ]
  },
  "grid": {
    "cols": 4,
    "cw": 380,
    "gap": 26,
    "pad": 34
  },
  "views": [
    {
      "id": "git",
      "name": "提交时间线",
      "desc": "按提交日期铺开：一行一次提交，左侧色条是提交类型泳道，分段按年月。标题照抄 commit subject，不改写。",
      "pages": [
        {
          "id": "git-timeline",
          "name": "提交时间线",
          "type": "timeline",
          "note": "这是机械生成的视图——不写判断，只搬 git log。要读「做了什么」看标题；要看「改了哪些文件」点开行看 evidence 里的提交号。",
          "lanes": [
            {
              "id": "feat",
              "name": "功能",
              "color": "#0969da"
            },
            {
              "id": "fix",
              "name": "修复",
              "color": "#cf222e"
            },
            {
              "id": "refactor",
              "name": "重构",
              "color": "#8250df"
            },
            {
              "id": "docs",
              "name": "文档",
              "color": "#1a7f37"
            },
            {
              "id": "test",
              "name": "测试",
              "color": "#bf8700"
            },
            {
              "id": "chore",
              "name": "杂务",
              "color": "#6e7781"
            },
            {
              "id": "other",
              "name": "其他",
              "color": "#8b949e"
            }
          ],
          "entries": [
            {
              "v": "024e7a6",
              "date": "09-26",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.1: 立项——workspace 独立立项（含前提声明）；三方案调研 + NapCat 选型；边界 A/C 拍板",
              "items": [
                "Rushiera",
                "024e7a61e6"
              ],
              "status": "done",
              "evidence": "git 024e7a6"
            },
            {
              "v": "e102350",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.2: 拆解外部参考 qq-agent v0.4.0（NSIS 解包 + 源码模块地图）→ ref-qqagent.md",
              "items": [
                "Rushiera",
                "e102350d88"
              ],
              "status": "done",
              "evidence": "git e102350"
            },
            {
              "v": "331dbba",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.3: 功能清单化——qq-agent 拆成编号索引 + 实现落点行号 → ref-qqagent-features.md",
              "items": [
                "Rushiera",
                "331dbbacd8"
              ],
              "status": "done",
              "evidence": "git 331dbba"
            },
            {
              "v": "52a6c9e",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.4: M1 打通——NapCat 一键版落地，群收发双向实测通过",
              "items": [
                "Rushiera",
                "52a6c9e629"
              ],
              "status": "done",
              "evidence": "git 52a6c9e"
            },
            {
              "v": "6848cfa",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.5: 卫星候选 QQ Agent 接入配置落地——newapi-bak 端点 + NapCat 协议端 + rf 前文（脚本可复现）",
              "items": [
                "Rushiera",
                "6848cfa759"
              ],
              "status": "done",
              "evidence": "git 6848cfa"
            },
            {
              "v": "ddb884d",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.6: 卫星候选接入策略落地——11 群白名单 · 1 档仅艾特 · 启动即新会话 · 应用实测已起",
              "items": [
                "Rushiera",
                "ddb884d48f"
              ],
              "status": "done",
              "evidence": "git ddb884d"
            },
            {
              "v": "6e400f4",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.7: 协议端内置宿主（NapCat 随应用无窗口自启）· 白名单收窄至 1097492606 · 备选模型兜底",
              "items": [
                "Rushiera",
                "6e400f4d96"
              ],
              "status": "done",
              "evidence": "git 6e400f4"
            },
            {
              "v": "5f08c35",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.8: 会话生命周期 + 记忆面落地（收工轮 · 全量窗口 · 429 长轮询）——补丁脚本可复现",
              "items": [
                "Rushiera",
                "5f08c355be"
              ],
              "status": "done",
              "evidence": "git 5f08c35"
            },
            {
              "v": "5d8423c",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.9: 群内自主参与落地——取消本地门 · 聚批 4s · 发言配额 120s/5 条 · 热度自适应 · 收工轮自产话题词 · 卡死看门狗",
              "items": [
                "Rushiera",
                "5d8423c25b"
              ],
              "status": "done",
              "evidence": "git 5d8423c"
            },
            {
              "v": "843946f",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.10: 系统提示段关闭——每轮 4360 字符行为准则段去掉（patch-qqagent-nosys + persona 开关）",
              "items": [
                "Rushiera",
                "843946fea6"
              ],
              "status": "done",
              "evidence": "git 843946f"
            },
            {
              "v": "44626c2",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11: bot 指定限频——记忆页「bot」开关：对指定群友的回复 240 秒内最多 1 条（只拦出站）",
              "items": [
                "Rushiera",
                "44626c2908"
              ],
              "status": "done",
              "evidence": "git 44626c2"
            },
            {
              "v": "ea19b80",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.12: 记忆分类重设计——两轴三分（人/群/轮）+ 群记 _group.json（kind 五类）· 工具面 category=group · 存量迁移",
              "items": [
                "Rushiera",
                "ea19b80f2b"
              ],
              "status": "done",
              "evidence": "git ea19b80"
            },
            {
              "v": "a46a2cd",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.13: 会话按群折叠——会话页两级结构（群会话 → 运行记录）· 第二群 689942975 开通",
              "items": [
                "Rushiera",
                "a46a2cd4c4"
              ],
              "status": "done",
              "evidence": "git a46a2cd"
            },
            {
              "v": "f80d9ea",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.14: 第三群 940257985 开通——白名单经 POST /api/config 热写，运行中即时生效",
              "items": [
                "Rushiera",
                "f80d9ead66"
              ],
              "status": "done",
              "evidence": "git f80d9ea"
            },
            {
              "v": "7bef7d5",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15: 发言硬限制——每群 60 秒最多 1 条（出站兜底闸 · 补丁 + 自测 11/11）",
              "items": [
                "Rushiera",
                "7bef7d5126"
              ],
              "status": "done",
              "evidence": "git 7bef7d5"
            },
            {
              "v": "c4025b4",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.16: 多群首跑验收闭合——第二群 689942975 / 第三群 940257985 三处落档实测通过",
              "items": [
                "Rushiera",
                "c4025b42e6"
              ],
              "status": "done",
              "evidence": "git c4025b4"
            },
            {
              "v": "1cb21e7",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.17: 发言纪律——系统提示精简模式（lean 1069 字符）+ 节奏感知 + 热度阈值下调；1 分钟硬限撤销",
              "items": [
                "Rushiera",
                "1cb21e7452"
              ],
              "status": "done",
              "evidence": "git 1cb21e7"
            },
            {
              "v": "4042d9a",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.18: 猫工具链移植——timeback / image-inject / browser-* 全组 5 件落地（补丁 10 点 + 自测 27/27）",
              "items": [
                "Rushiera",
                "4042d9a25e"
              ],
              "status": "done",
              "evidence": "git 4042d9a"
            },
            {
              "v": "8981ba8",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.19: 浏览器链路修复——根因 = 数据目录落 D 盘 exFAT；改落 LOCALAPPDATA（NTFS）+ 看图放行 + 错误归因纠正",
              "items": [
                "Rushiera",
                "8981ba8fec"
              ],
              "status": "done",
              "evidence": "git 8981ba8"
            },
            {
              "v": "8a6294c",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20: 自研单体 P1 落地——协议端宿主 / OneBot 客户端 / 界面；黑窗口消除 + WebUI 免登录",
              "items": [
                "Rushiera",
                "8a6294cc2d"
              ],
              "status": "done",
              "evidence": "git 8a6294c"
            },
            {
              "v": "b7085ee",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21: 工作目录钉死——应用首段 chdir + 三处启动器显式 cwd（自测 21/21 · 真链路实锤）",
              "items": [
                "Rushiera",
                "b7085ee2b2"
              ],
              "status": "done",
              "evidence": "git b7085ee"
            },
            {
              "v": "449c6f7",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.22: 浏览节拍——到点看一次、有新增才进 LLM（默认 240s）· @/拍一拍立即触发 · 模型可升档 240→120→60 秒",
              "items": [
                "Rushiera",
                "449c6f70f5"
              ],
              "status": "done",
              "evidence": "git 449c6f7"
            },
            {
              "v": "114aae1",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.23: 记忆沉淀增强——收工轮按 kind 写群记 + 逐人更新印象 · 群记重整移到收工轮 · 人档放宽 · 自测 33/33",
              "items": [
                "Rushiera",
                "114aae14d6"
              ],
              "status": "done",
              "evidence": "git 114aae1"
            },
            {
              "v": "b983b1f",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.24: 猫工具链升级——timeback 域类型化 · browser-headful · image-analyze · web-fetch 下载器（工具 36→41）；前文增补 Chat Worker + Browser Job",
              "items": [
                "Rushiera",
                "b983b1f3c5"
              ],
              "status": "done",
              "evidence": "git b983b1f"
            },
            {
              "v": "b266fb6",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.25: 静默补拍——有未读且最后一条静默 60 秒没人接话也看一次 · 同一批只补一拍 · 不要求回复 · 自测 49/49",
              "items": [
                "Rushiera",
                "b266fb66c8"
              ],
              "status": "done",
              "evidence": "git b266fb6"
            },
            {
              "v": "f6053ce",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.26: 启动器改一键全流程重启——停旧实例 + 清锁 + 开会话 + 起新（实测通过）· engage 落点接管修正",
              "items": [
                "Rushiera",
                "f6053ce3bc"
              ],
              "status": "done",
              "evidence": "git f6053ce"
            },
            {
              "v": "bd3c390",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.27: 真群实测三修——timeback 放行自身两件 · 上下文基线改记单次 prompt · send_image 支持受控根内本地路径",
              "items": [
                "Rushiera",
                "bd3c390836"
              ],
              "status": "done",
              "evidence": "git bd3c390"
            },
            {
              "v": "073a7ff",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.28: Cloudflare 处置——无头 UA 对齐（去 HeadlessChrome）+ 遇验证页走 headful 请人过一次；clearance 复用成功",
              "items": [
                "Rushiera",
                "073a7ff75b"
              ],
              "status": "done",
              "evidence": "git 073a7ff"
            },
            {
              "v": "17c5a19",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.29: 有头关闭链路三修——优雅关闭（CDP Browser.close）· 收尾/域回收不关人工窗口 · 空闲回收 10→30 分钟",
              "items": [
                "Rushiera",
                "17c5a19e59"
              ],
              "status": "done",
              "evidence": "git 17c5a19"
            },
            {
              "v": "538d7a0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.30: 遇阻处置硬规则 6 条入前文 + 图片包裹兼容层放宽 + 主模型看不了图 → image-analyze",
              "items": [
                "Rushiera",
                "538d7a01ca"
              ],
              "status": "done",
              "evidence": "git 538d7a0"
            },
            {
              "v": "13b9342",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.31: 项目更名 QQBot mod B（文档 / 代码注释 / 显示类全量）+ Git 托管（GitHub Rushiera/QQ-Bot-Mod-B）",
              "items": [
                "Rushiera",
                "13b9342b12"
              ],
              "status": "done",
              "evidence": "git 13b9342"
            },
            {
              "v": "c5e5236",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.32: 入口切换到自研单体（协议端无窗口接管 + 业务面伴生拉起）",
              "items": [
                "Rushiera",
                "c5e5236051"
              ],
              "status": "done",
              "evidence": "git c5e5236"
            },
            {
              "v": "291f95b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.32: 补 Git 档案 git-profile（收工第 8 步）",
              "items": [
                "Rushiera",
                "291f95b2f1"
              ],
              "status": "done",
              "evidence": "git 291f95b"
            },
            {
              "v": "2baf700",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.35 领航员模式落地——持久观测/开场全量/前文整理重启 + 业务面工具组 6 件 + 教材 + VIP 通道",
              "items": [
                "Rushiera",
                "2baf7004dd"
              ],
              "status": "done",
              "evidence": "git 2baf700"
            },
            {
              "v": "ef0016c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.35 收工——design §六b 前文整理重启 + design-status/project/todo 同步（R喵喵 实测入档）",
              "items": [
                "Rushiera",
                "ef0016c107"
              ],
              "status": "done",
              "evidence": "git ef0016c"
            },
            {
              "v": "2a9ba3e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.36 领航员三改：前文整理延续性 + 投递后60秒猫会话分析 + 教材纠偏",
              "items": [
                "Rushiera",
                "2a9ba3e724"
              ],
              "status": "done",
              "evidence": "git 2a9ba3e"
            },
            {
              "v": "e441df8",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.36 补：git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "e441df82ae"
              ],
              "status": "done",
              "evidence": "git e441df8"
            },
            {
              "v": "ee00cad",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.37: 前文整理提示词加收工报告步 + 9只猫 enabledRoots 对齐 + nav_reset 真链路验证",
              "items": [
                "Rushiera",
                "ee00cadc5b"
              ],
              "status": "done",
              "evidence": "git ee00cad"
            },
            {
              "v": "74fa390",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.38: 猫会话分析升为独立功能(三入口) + 播报分流(未回复纯文字+@ / 已回复只截回复)",
              "items": [
                "Rushiera",
                "74fa390557"
              ],
              "status": "done",
              "evidence": "git 74fa390"
            },
            {
              "v": "e2443a5",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.38: git-profile 同步状态（74fa390）",
              "items": [
                "Rushiera",
                "e2443a5866"
              ],
              "status": "done",
              "evidence": "git e2443a5"
            },
            {
              "v": "a2f2e33",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.39: 出站决策层——所有发群先过领航员决策(有回复截图/在跑播报/其余静默)",
              "items": [
                "Rushiera",
                "a2f2e3351d"
              ],
              "status": "done",
              "evidence": "git a2f2e33"
            },
            {
              "v": "f249a4b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.39: git-profile 同步状态（a2f2e33）",
              "items": [
                "Rushiera",
                "f249a4bb28"
              ],
              "status": "done",
              "evidence": "git f249a4b"
            },
            {
              "v": "ad4c0de",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.40: 空闲计时修正 + 开工报告分流 + 退出领航员 + 领航记录归档",
              "items": [
                "Rushiera",
                "ad4c0deb7d"
              ],
              "status": "done",
              "evidence": "git ad4c0de"
            },
            {
              "v": "ad1f79b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.40: git-profile 同步状态（ad4c0de）",
              "items": [
                "Rushiera",
                "ad1f79b904"
              ],
              "status": "done",
              "evidence": "git ad1f79b"
            },
            {
              "v": "3ab9c71",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.40: 收工——project 版本面同步 + 判例入库",
              "items": [
                "Rushiera",
                "3ab9c7139c"
              ],
              "status": "done",
              "evidence": "git 3ab9c71"
            },
            {
              "v": "3449b70",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.40: git-profile 同步状态（3ab9c71）",
              "items": [
                "Rushiera",
                "3449b704bc"
              ],
              "status": "done",
              "evidence": "git 3449b70"
            },
            {
              "v": "3f6275a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.41: 领航员开启幂等 + nav_new 新会话轻通道（一并带入另一写入方 v0.42 在途改动）",
              "items": [
                "Rushiera",
                "3f6275a5c0"
              ],
              "status": "done",
              "evidence": "git 3f6275a"
            },
            {
              "v": "aecac90",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.41: git-profile 同步状态（3f6275a）",
              "items": [
                "Rushiera",
                "aecac902e3"
              ],
              "status": "done",
              "evidence": "git aecac90"
            },
            {
              "v": "2828d99",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.44: 领航员投递去来源头（不再加 [来自QQ][群@|Rushiera(群主)·本人] 前缀 / 触发标记不属指令内容）+ v0.43 回复卡对齐 CH4 会话页（样式表 / MD 渲染器 / 字体三件同源入库）",
              "items": [
                "Rushiera",
                "2828d99ecf"
              ],
              "status": "done",
              "evidence": "git 2828d99"
            },
            {
              "v": "b6e76a1",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.44: 兑现明细补记（design-qqbotb_log §三十五 / design-status / CHANGELOG 版本号修正）",
              "items": [
                "Rushiera",
                "b6e76a155c"
              ],
              "status": "done",
              "evidence": "git b6e76a1"
            },
            {
              "v": "933d1b6",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.44: Git 档案同步状态更新",
              "items": [
                "Rushiera",
                "933d1b6515"
              ],
              "status": "done",
              "evidence": "git 933d1b6"
            },
            {
              "v": "5660cdb",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.44: project.md 版本行 v0.44",
              "items": [
                "Rushiera",
                "5660cdb8dd"
              ],
              "status": "done",
              "evidence": "git 5660cdb"
            },
            {
              "v": "91b2f09",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.44: CHANGELOG 版本行修正（v0.42/0.43 重复条目合并为 v0.43 回复卡对齐）+ 兑现明细 §三十五 补记",
              "items": [
                "Rushiera",
                "91b2f09b07"
              ],
              "status": "done",
              "evidence": "git 91b2f09"
            },
            {
              "v": "decf48c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.45: CHANGELOG v0.43 行版本号勘误（原误写 v0.33）",
              "items": [
                "Rushiera",
                "decf48c1de"
              ],
              "status": "done",
              "evidence": "git decf48c"
            },
            {
              "v": "1fdab8f",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.44: Git 档案同步状态更新（decf48c）",
              "items": [
                "Rushiera",
                "1fdab8f64e"
              ],
              "status": "done",
              "evidence": "git 1fdab8f"
            },
            {
              "v": "577e7df",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.45: design-status 领航员行补记（回执只读 + 会话分析直接读 think）",
              "items": [
                "Rushiera",
                "577e7df71c"
              ],
              "status": "done",
              "evidence": "git 577e7df"
            },
            {
              "v": "94dd39a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.45: git-profile 同步状态更新（HEAD 577e7df）",
              "items": [
                "Rushiera",
                "94dd39a4bb"
              ],
              "status": "done",
              "evidence": "git 94dd39a"
            },
            {
              "v": "dfcf8c2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.46: 卡片图中图渲染——CHANGELOG 行 + project 版本行 v0.46",
              "items": [
                "Rushiera",
                "dfcf8c20df"
              ],
              "status": "done",
              "evidence": "git dfcf8c2"
            },
            {
              "v": "c8a5331",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.46: Git 档案同步状态更新",
              "items": [
                "Rushiera",
                "c8a5331993"
              ],
              "status": "done",
              "evidence": "git c8a5331"
            },
            {
              "v": "bb3df9c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.47-v0.49: 投递闸门 + 干跑自测 · 教材三修 + 领航员收工报告模板 · 教材补两条（开关看实况 / 发图先确认）+ 口径不渗人格",
              "items": [
                "Rushiera",
                "bb3df9ceb5"
              ],
              "status": "done",
              "evidence": "git bb3df9c"
            },
            {
              "v": "5977b90",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.49: git-profile 同步状态更新（HEAD bb3df9c）",
              "items": [
                "Rushiera",
                "5977b90d9e"
              ],
              "status": "done",
              "evidence": "git 5977b90"
            },
            {
              "v": "7f46076",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.50: 开关回执口径（哪里开哪里回 / 哪里退哪里回）+ 白名单加三群",
              "items": [
                "Rushiera",
                "7f4607626f"
              ],
              "status": "done",
              "evidence": "git 7f46076"
            },
            {
              "v": "dd4b584",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.50: git-profile 同步状态更新（HEAD 7f46076）",
              "items": [
                "Rushiera",
                "dd4b584eb2"
              ],
              "status": "done",
              "evidence": "git dd4b584"
            },
            {
              "v": "e8ff785",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.51: 领航员探针纠偏（ComfyDock 改探 /api/summary）",
              "items": [
                "Rushiera",
                "e8ff785c19"
              ],
              "status": "done",
              "evidence": "git e8ff785"
            },
            {
              "v": "1e10bbc",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.51: 同步 Git 档案（e8ff785）",
              "items": [
                "Rushiera",
                "1e10bbc9d1"
              ],
              "status": "done",
              "evidence": "git 1e10bbc"
            },
            {
              "v": "23e19a4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.51: 版本行 + 兑现摘要同步",
              "items": [
                "Rushiera",
                "23e19a43b8"
              ],
              "status": "done",
              "evidence": "git 23e19a4"
            },
            {
              "v": "c44d4a4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.51: Git 档案同步状态",
              "items": [
                "Rushiera",
                "c44d4a4384"
              ],
              "status": "done",
              "evidence": "git c44d4a4"
            },
            {
              "v": "cedd15a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.52: 前文整理等待改事件驱动（不设上限）+ 判例与续跑落档",
              "items": [
                "Rushiera",
                "cedd15a3c9"
              ],
              "status": "done",
              "evidence": "git cedd15a"
            },
            {
              "v": "eadefd9",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.52: 同步 Git 档案（cedd15a）",
              "items": [
                "Rushiera",
                "eadefd905e"
              ],
              "status": "done",
              "evidence": "git eadefd9"
            },
            {
              "v": "be19b89",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.52: todo 补 N8（生效需重启应用）",
              "items": [
                "Rushiera",
                "be19b89f12"
              ],
              "status": "done",
              "evidence": "git be19b89"
            },
            {
              "v": "57fd5bf",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.52: 同步 Git 档案（be19b89）",
              "items": [
                "Rushiera",
                "57fd5bfa29"
              ],
              "status": "done",
              "evidence": "git 57fd5bf"
            },
            {
              "v": "e7f0cf3",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.53: 领航员收工报告改模板骨架（脱敏）",
              "items": [
                "Rushiera",
                "e7f0cf301c"
              ],
              "status": "done",
              "evidence": "git e7f0cf3"
            },
            {
              "v": "a677ebe",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.53: git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "a677ebe677"
              ],
              "status": "done",
              "evidence": "git a677ebe"
            },
            {
              "v": "bfd5ac7",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.55: 图像编辑接入 + 领航员收工报告改一句话",
              "items": [
                "Rushiera",
                "bfd5ac7e70"
              ],
              "status": "done",
              "evidence": "git bfd5ac7"
            },
            {
              "v": "e3592e8",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.55: git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "e3592e80d6"
              ],
              "status": "done",
              "evidence": "git e3592e8"
            },
            {
              "v": "7363eb6",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.56: 搜索通道精简 + 百度网页解析（免 Key）",
              "items": [
                "Rushiera",
                "7363eb68fa"
              ],
              "status": "done",
              "evidence": "git 7363eb6"
            },
            {
              "v": "9a2f79e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.56: Git 档案同步状态更新",
              "items": [
                "Rushiera",
                "9a2f79efdd"
              ],
              "status": "done",
              "evidence": "git 9a2f79e"
            },
            {
              "v": "ed79318",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.57: 协议端登录面进自研单体 + 入口归位",
              "items": [
                "Rushiera",
                "ed79318d6a"
              ],
              "status": "done",
              "evidence": "git ed79318"
            },
            {
              "v": "218483d",
              "date": "10-12",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（v0.57 推送后）",
              "items": [
                "Rushiera",
                "218483d754"
              ],
              "status": "done",
              "evidence": "git 218483d"
            },
            {
              "v": "699d16a",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.58: 白名单加群 112562956（偶像大师摸鱼会二代）",
              "items": [
                "Rushiera",
                "699d16a61c"
              ],
              "status": "done",
              "evidence": "git 699d16a"
            },
            {
              "v": "c8c9905",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.59: 领航员空闲暂关阈值 30 分钟 → 3 小时",
              "items": [
                "Rushiera",
                "c8c9905b3d"
              ],
              "status": "done",
              "evidence": "git c8c9905"
            },
            {
              "v": "b9211aa",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（v0.59 推送后）",
              "items": [
                "Rushiera",
                "b9211aaab9"
              ],
              "status": "done",
              "evidence": "git b9211aa"
            },
            {
              "v": "107f315",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.60: 轻通道 + 会话分析读全（现场拉取 / payload 形态修正 / 订阅断线自愈）",
              "items": [
                "Rushiera",
                "107f315fdd"
              ],
              "status": "done",
              "evidence": "git 107f315"
            },
            {
              "v": "6d72aa5",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（v0.60 推送后）",
              "items": [
                "Rushiera",
                "6d72aa5d65"
              ],
              "status": "done",
              "evidence": "git 6d72aa5"
            },
            {
              "v": "b4dc437",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "verify-navigator: 头部说明对齐（读全 + 轻通道闸门用例）",
              "items": [
                "Rushiera",
                "b4dc4377b1"
              ],
              "status": "done",
              "evidence": "git b4dc437"
            },
            {
              "v": "91a0d2e",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: project.md 文档索引补 §十九（轻通道）指针",
              "items": [
                "Rushiera",
                "91a0d2e657"
              ],
              "status": "done",
              "evidence": "git 91a0d2e"
            },
            {
              "v": "4e65ed9",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.61: 投递错位侦查（同名歧义 / 称呼前缀 / nav_reset 吞指令）+ 交接给猫 R喵",
              "items": [
                "Rushiera",
                "4e65ed9972"
              ],
              "status": "done",
              "evidence": "git 4e65ed9"
            },
            {
              "v": "d038335",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（v0.61 推送后）",
              "items": [
                "Rushiera",
                "d0383353bf"
              ],
              "status": "done",
              "evidence": "git d038335"
            },
            {
              "v": "643e129",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.62: 投递错位两处改动（教材消歧三条 + nav_reset 增 text）",
              "items": [
                "Rushiera",
                "643e129373"
              ],
              "status": "done",
              "evidence": "git 643e129"
            },
            {
              "v": "1a5be3b",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（v0.62 推送后）",
              "items": [
                "Rushiera",
                "1a5be3b051"
              ],
              "status": "done",
              "evidence": "git 1a5be3b"
            },
            {
              "v": "fe69916",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.62 收工: 判例入库 + todo roleText 现状对齐 95123",
              "items": [
                "Rushiera",
                "fe69916bb0"
              ],
              "status": "done",
              "evidence": "git fe69916"
            },
            {
              "v": "89ff7e6",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（v0.62 收工推送后）",
              "items": [
                "Rushiera",
                "89ff7e6ef1"
              ],
              "status": "done",
              "evidence": "git 89ff7e6"
            },
            {
              "v": "7938f80",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: §五十二 群 361820329 静默不回 诊断（未修）+ 未闭合项登记",
              "items": [
                "Rushiera",
                "7938f80bc9"
              ],
              "status": "done",
              "evidence": "git 7938f80"
            },
            {
              "v": "ae6d08a",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（§五十二 诊断推送后）",
              "items": [
                "Rushiera",
                "ae6d08abfe"
              ],
              "status": "done",
              "evidence": "git ae6d08a"
            },
            {
              "v": "98d61e6",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: CHANGELOG + design-status 记 §五十二 诊断（未修）",
              "items": [
                "Rushiera",
                "98d61e6fc9"
              ],
              "status": "done",
              "evidence": "git 98d61e6"
            },
            {
              "v": "e529f27",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: todo 增 B17-B19（群 361820329 静默不回 修法三步·待点名）",
              "items": [
                "Rushiera",
                "e529f2773f"
              ],
              "status": "done",
              "evidence": "git e529f27"
            },
            {
              "v": "6fe4580",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "tools: probe-text-summary 探针（复验长中文纯文本 content 恒空结论）",
              "items": [
                "Rushiera",
                "6fe4580492"
              ],
              "status": "done",
              "evidence": "git 6fe4580"
            },
            {
              "v": "617dfea",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.63: 会话分析 think 改摘要（快档 LLM 总结，回落原文截断）",
              "items": [
                "Rushiera",
                "617dfea572"
              ],
              "status": "done",
              "evidence": "git 617dfea"
            },
            {
              "v": "6e8d37d",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（v0.63）",
              "items": [
                "Rushiera",
                "6e8d37d736"
              ],
              "status": "done",
              "evidence": "git 6e8d37d"
            },
            {
              "v": "42334f6",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.65: 群 361820329 静默不回修复（端点降级守卫 + 轮转阈值 160k + 清会话核销）",
              "items": [
                "Rushiera",
                "42334f645a"
              ],
              "status": "done",
              "evidence": "git 42334f6"
            },
            {
              "v": "6ac111a",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.64: 前文整理抢救模式（空闲猫代读产出交接摘要 + 会话关键信息索引）",
              "items": [
                "Rushiera",
                "6ac111a58d"
              ],
              "status": "done",
              "evidence": "git 6ac111a"
            },
            {
              "v": "dba4a94",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: project.md 版本对齐 v0.65（端点降级守卫修复）",
              "items": [
                "Rushiera",
                "dba4a94ed4"
              ],
              "status": "done",
              "evidence": "git dba4a94"
            },
            {
              "v": "de7d403",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（v0.65）",
              "items": [
                "Rushiera",
                "de7d403412"
              ],
              "status": "done",
              "evidence": "git de7d403"
            },
            {
              "v": "e4fdb43",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.66: 领航员截全（原生整页截图，去 4000px 硬墙）+ nav_shot 会话截图（CDP 实测卡死否决）",
              "items": [
                "Rushiera",
                "e4fdb4362d"
              ],
              "status": "done",
              "evidence": "git e4fdb43"
            },
            {
              "v": "220d902",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: git-profile 同步状态更新（v0.66）",
              "items": [
                "Rushiera",
                "220d902cfb"
              ],
              "status": "done",
              "evidence": "git 220d902"
            },
            {
              "v": "c633e0c",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.67 抢救模式完整前文改造——代读数据源 keyinfo 四类改为 fullctx 全条目（600k 上限 + 头30%/尾70% 不变），关键信息索引位置改指正文（条号+起始字符）",
              "items": [
                "Rushiera",
                "c633e0cb80"
              ],
              "status": "done",
              "evidence": "git c633e0c"
            },
            {
              "v": "45b4cac",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: v0.67 同步面——project.md 版本号 + git-profile 同步状态",
              "items": [
                "Rushiera",
                "45b4cac57d"
              ],
              "status": "done",
              "evidence": "git 45b4cac"
            },
            {
              "v": "2f847a5",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.70: 前文整理报告分次收集 + 注入面收尾（含 v0.68-v0.69）",
              "items": [
                "Rushiera",
                "2f847a5977"
              ],
              "status": "done",
              "evidence": "git 2f847a5"
            },
            {
              "v": "892b445",
              "date": "10-15",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: v0.70 同步面 - git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "892b445c25"
              ],
              "status": "done",
              "evidence": "git 892b445"
            },
            {
              "v": "2a40dd1",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.71: 安静模式——按群开关 + 6 小时只整理轮（补丁 23 点 + 自测 24/24）",
              "items": [
                "Rushiera",
                "2a40dd1281"
              ],
              "status": "done",
              "evidence": "git 2a40dd1"
            },
            {
              "v": "3f0eac7",
              "date": "10-16",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: v0.71 同步面 - git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "3f0eac7ffa"
              ],
              "status": "done",
              "evidence": "git 3f0eac7"
            },
            {
              "v": "c7e2b2d",
              "date": "10-17",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.72: 会话截图截全适配长会话——条数取全量 + 超12000px按段截按序发多张（段数安全阀12）+ 自测57/57 + 真链路majordomo 63496px→6段",
              "items": [
                "Rushiera",
                "c7e2b2df4a"
              ],
              "status": "done",
              "evidence": "git c7e2b2d"
            },
            {
              "v": "c9bdee1",
              "date": "10-17",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: v0.72 同步面 - git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "c9bdee1ae2"
              ],
              "status": "done",
              "evidence": "git c9bdee1"
            },
            {
              "v": "4315b35",
              "date": "10-17",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: todo 数字核对 - B16 roleText 现状 96236",
              "items": [
                "Rushiera",
                "4315b35d4e"
              ],
              "status": "done",
              "evidence": "git 4315b35"
            },
            {
              "v": "199ca0f",
              "date": "10-17",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.73 记忆不节流：写入放开 + 归档 + 索引 + 检索 + 沉淀拍",
              "items": [
                "Rushiera",
                "199ca0fef9"
              ],
              "status": "done",
              "evidence": "git 199ca0f"
            },
            {
              "v": "3f93595",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.74: 回应参数（每群友 0~100 分映射回复硬限速 + 模型自判 + 本地自愈）",
              "items": [
                "Rushiera",
                "3f935956b4"
              ],
              "status": "done",
              "evidence": "git 3f93595"
            },
            {
              "v": "ebea67f",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.74: git-profile 同步状态回填（commit 3f93595）",
              "items": [
                "Rushiera",
                "ebea67fdb3"
              ],
              "status": "done",
              "evidence": "git ebea67f"
            },
            {
              "v": "d7f24e9",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.75: 前文结构侦察基线 + B22/B23 立 todo（已读信息 / 角色设定上工式）",
              "items": [
                "Rushiera",
                "d7f24e90fc"
              ],
              "status": "done",
              "evidence": "git d7f24e9"
            },
            {
              "v": "fd4de5a",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.75: git-profile 同步状态回填（commit d7f24e9）",
              "items": [
                "Rushiera",
                "fd4de5a2e7"
              ],
              "status": "done",
              "evidence": "git fd4de5a"
            },
            {
              "v": "3556aa7",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.76: 前文瘦身 B23 角色设定上工式",
              "items": [
                "Rushiera",
                "3556aa737f"
              ],
              "status": "done",
              "evidence": "git 3556aa7"
            },
            {
              "v": "336e469",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.76: 更新 Git 同步档案",
              "items": [
                "Rushiera",
                "336e46958b"
              ],
              "status": "done",
              "evidence": "git 336e469"
            },
            {
              "v": "94df584",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.78: B22 已读信息分段摘要（readFloorTs 窗口下界 + 前情提要 + history 检索 + 轮转双归档）",
              "items": [
                "Rushiera",
                "94df584b99"
              ],
              "status": "done",
              "evidence": "git 94df584"
            },
            {
              "v": "47384c4",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.78 收尾: 核销 B15/B16/B18/B20 与并入 v0.77 apisite 口径 + B22 改后对照",
              "items": [
                "Rushiera",
                "47384c4f98"
              ],
              "status": "done",
              "evidence": "git 47384c4"
            },
            {
              "v": "c9b6166",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.78: git-profile 同步状态回填",
              "items": [
                "Rushiera",
                "c9b6166545"
              ],
              "status": "done",
              "evidence": "git c9b6166"
            },
            {
              "v": "6c86319",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.78: CHANGELOG 按版本序归位 + design-status apisite 口径对齐",
              "items": [
                "Rushiera",
                "6c86319e06"
              ],
              "status": "done",
              "evidence": "git 6c86319"
            },
            {
              "v": "3b35fad",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.78: git-profile 同步状态回填（HEAD 6c86319）",
              "items": [
                "Rushiera",
                "3b35fada40"
              ],
              "status": "done",
              "evidence": "git 3b35fad"
            },
            {
              "v": "a85ec51",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.78: git-profile 远程状态表述收敛（避免自指 HEAD）",
              "items": [
                "Rushiera",
                "a85ec51f91"
              ],
              "status": "done",
              "evidence": "git a85ec51"
            },
            {
              "v": "e64fdd1",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.78: todo 立 N8（重启使 apisite 口径终版生效）",
              "items": [
                "Rushiera",
                "e64fdd1f6a"
              ],
              "status": "done",
              "evidence": "git e64fdd1"
            },
            {
              "v": "dceb52d",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.78: git-profile 同步状态回填（HEAD e64fdd1）",
              "items": [
                "Rushiera",
                "dceb52db32"
              ],
              "status": "done",
              "evidence": "git dceb52d"
            },
            {
              "v": "5e6c39a",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.79: 群内生成能力（MOSS 生图 / IrodoriTTS 语音 / WD Tagger 反推提示词）",
              "items": [
                "Rushiera",
                "5e6c39a86a"
              ],
              "status": "done",
              "evidence": "git 5e6c39a"
            },
            {
              "v": "1a69c71",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.79: git-profile 同步状态回填（HEAD 5e6c39a）",
              "items": [
                "Rushiera",
                "1a69c713ef"
              ],
              "status": "done",
              "evidence": "git 1a69c71"
            },
            {
              "v": "e83a618",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.80: 读空气两件（群聊语域 + 回应参数客观结算）",
              "items": [
                "Rushiera",
                "e83a618038"
              ],
              "status": "done",
              "evidence": "git e83a618"
            },
            {
              "v": "2f2ba23",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.81: tts caption + image cache-first + retry semantics",
              "items": [
                "Rushiera",
                "2f2ba23b1f"
              ],
              "status": "done",
              "evidence": "git 2f2ba23"
            },
            {
              "v": "ceb7a1d",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.81: git profile sync",
              "items": [
                "Rushiera",
                "ceb7a1ddd2"
              ],
              "status": "done",
              "evidence": "git ceb7a1d"
            },
            {
              "v": "80daf87",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.81: design status sync",
              "items": [
                "Rushiera",
                "80daf87748"
              ],
              "status": "done",
              "evidence": "git 80daf87"
            },
            {
              "v": "c4f2246",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.82: LLM 端点换域适配（time.api.freeshare.tech）",
              "items": [
                "Rushiera",
                "c4f2246be3"
              ],
              "status": "done",
              "evidence": "git c4f2246"
            },
            {
              "v": "7fb7363",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.82: 补记 design log 七十节 + git-profile 同步状态",
              "items": [
                "Rushiera",
                "7fb73634ec"
              ],
              "status": "done",
              "evidence": "git 7fb7363"
            },
            {
              "v": "da2c826",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.82: git-profile HEAD 补记",
              "items": [
                "Rushiera",
                "da2c826048"
              ],
              "status": "done",
              "evidence": "git da2c826"
            },
            {
              "v": "b3fcc84",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.83: 发言档位五档+客观采集",
              "items": [
                "Rushiera",
                "b3fcc8460e"
              ],
              "status": "done",
              "evidence": "git b3fcc84"
            },
            {
              "v": "cfd34e0",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.83: 更新git-profile同步状态",
              "items": [
                "Rushiera",
                "cfd34e02e9"
              ],
              "status": "done",
              "evidence": "git cfd34e0"
            },
            {
              "v": "69e0730",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.84 自研单体界面登录位闪烁与控制台被顶回概览修复",
              "items": [
                "Rushiera",
                "69e0730504"
              ],
              "status": "done",
              "evidence": "git 69e0730"
            },
            {
              "v": "3fa15ce",
              "date": "10-25",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: 收工同步 git-profile（v0.84 同步记录）",
              "items": [
                "Rushiera",
                "3fa15ce674"
              ],
              "status": "done",
              "evidence": "git 3fa15ce"
            },
            {
              "v": "2bdae9a",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.85 群名片余额后缀（按群 · 默认全关 · 映射接口预留）",
              "items": [
                "Rushiera",
                "2bdae9a722"
              ],
              "status": "done",
              "evidence": "git 2bdae9a"
            },
            {
              "v": "4ea8959",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.85 收工：git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "4ea8959159"
              ],
              "status": "done",
              "evidence": "git 4ea8959"
            },
            {
              "v": "7d17dd3",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.86 群语音伴随（每句群发言念一遍日语）+ 30 秒上限取证与字数窗口 + 档位分层",
              "items": [
                "Rushiera",
                "7d17dd3d27"
              ],
              "status": "done",
              "evidence": "git 7d17dd3"
            },
            {
              "v": "bd853b5",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.86 收工：git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "bd853b53a8"
              ],
              "status": "done",
              "evidence": "git bd853b5"
            },
            {
              "v": "422d7b1",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.86 收工：项目版本号对齐",
              "items": [
                "Rushiera",
                "422d7b1cee"
              ],
              "status": "done",
              "evidence": "git 422d7b1"
            },
            {
              "v": "23e8add",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.87 群名单两栏看板 + v0.88 日语人称口径",
              "items": [
                "Rushiera",
                "23e8add342"
              ],
              "status": "done",
              "evidence": "git 23e8add"
            },
            {
              "v": "2d1ae17",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88 收工：git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "2d1ae17433"
              ],
              "status": "done",
              "evidence": "git 2d1ae17"
            },
            {
              "v": "9154d75",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88 收工：todo 去重（人称口径 B43-B45）",
              "items": [
                "Rushiera",
                "9154d75517"
              ],
              "status": "done",
              "evidence": "git 9154d75"
            },
            {
              "v": "d7c3346",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88 收工：git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "d7c33460fb"
              ],
              "status": "done",
              "evidence": "git d7c3346"
            },
            {
              "v": "c63ad16",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88 收工：glossary 补日语人称口径术语",
              "items": [
                "Rushiera",
                "c63ad16f36"
              ],
              "status": "done",
              "evidence": "git c63ad16"
            },
            {
              "v": "cddf801",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88 收工：git-profile 同步状态更新（终态）",
              "items": [
                "Rushiera",
                "cddf801a9d"
              ],
              "status": "done",
              "evidence": "git cddf801"
            },
            {
              "v": "8e48ca7",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88 收工：git-profile 终态同步",
              "items": [
                "Rushiera",
                "8e48ca7e54"
              ],
              "status": "done",
              "evidence": "git 8e48ca7"
            },
            {
              "v": "8343753",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "入库 ref-cache-hit.md 缓存命中基线（原未跟踪）",
              "items": [
                "Rushiera",
                "83437535f8"
              ],
              "status": "done",
              "evidence": "git 8343753"
            },
            {
              "v": "1327f9f",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88 收工：git-profile 同步指向 8343753",
              "items": [
                "Rushiera",
                "1327f9fe7f"
              ],
              "status": "done",
              "evidence": "git 1327f9f"
            },
            {
              "v": "862ca15",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.89 用量数据重置（10-26 起点）+ 缓存命中基线 ref-cache-hit + cache-hit-report 数据通道",
              "items": [
                "Rushiera",
                "862ca1544a"
              ],
              "status": "done",
              "evidence": "git 862ca15"
            },
            {
              "v": "e2fa2fa",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.89 复跑校准：分段定位 bug 修复（正文误命中）+ 数字对齐 822/388",
              "items": [
                "Rushiera",
                "e2fa2fa147"
              ],
              "status": "done",
              "evidence": "git e2fa2fa"
            },
            {
              "v": "ae77b17",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.89 收工：git-profile 同步 e2fa2fa",
              "items": [
                "Rushiera",
                "ae77b1718c"
              ],
              "status": "done",
              "evidence": "git ae77b17"
            },
            {
              "v": "f0bafd1",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.89 收工：ref-cache-hit 数字二次校准（822 后补 828 次样本说明不改口径）",
              "items": [
                "Rushiera",
                "f0bafd1b4e"
              ],
              "status": "done",
              "evidence": "git f0bafd1"
            },
            {
              "v": "faf1ff2",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.89 收工：ref-cache-hit 补 4.5 分叉落点分布 + 报告工具加每日趋势与分叉段",
              "items": [
                "Rushiera",
                "faf1ff2d6b"
              ],
              "status": "done",
              "evidence": "git faf1ff2"
            },
            {
              "v": "f61908d",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.89 收工：ref-cache-hit 定稿（4.5 分叉落点 + 边界章 + 数字收口 918/432）",
              "items": [
                "Rushiera",
                "f61908d967"
              ],
              "status": "done",
              "evidence": "git f61908d"
            },
            {
              "v": "13b76c3",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.89 收工：git-profile 终态",
              "items": [
                "Rushiera",
                "13b76c341d"
              ],
              "status": "done",
              "evidence": "git 13b76c3"
            },
            {
              "v": "53968d5",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.90: 缓存观测采集面 + 顺序优化证伪 + 用量重置",
              "items": [
                "Rushiera",
                "53968d56da"
              ],
              "status": "done",
              "evidence": "git 53968d5"
            },
            {
              "v": "f70da78",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.90 收工：git-profile 同步状态",
              "items": [
                "Rushiera",
                "f70da7813a"
              ],
              "status": "done",
              "evidence": "git f70da78"
            },
            {
              "v": "c041e64",
              "date": "10-27",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.92: 掉登录现场取证 + 登录探针 + 退出链与余额收口",
              "items": [
                "Rushiera",
                "c041e64b1c"
              ],
              "status": "done",
              "evidence": "git c041e64"
            },
            {
              "v": "d834858",
              "date": "10-27",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.92: 更新 Git 同步档案",
              "items": [
                "Rushiera",
                "d83485859e"
              ],
              "status": "done",
              "evidence": "git d834858"
            },
            {
              "v": "59fbb6d",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.93: 领航员功能全景索引 ref-navigator-map.md + 设计文档口径回灌 4 处",
              "items": [
                "Rushiera",
                "59fbb6d865"
              ],
              "status": "done",
              "evidence": "git 59fbb6d"
            },
            {
              "v": "a86ea9a",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.93: 收工同步 Git 档案（59fbb6d）",
              "items": [
                "Rushiera",
                "a86ea9a183"
              ],
              "status": "done",
              "evidence": "git a86ea9a"
            },
            {
              "v": "d42e2fb",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.93: 计数口径核对修正（配置 16 键 / 会话态 10 字段）",
              "items": [
                "Rushiera",
                "d42e2fb774"
              ],
              "status": "done",
              "evidence": "git d42e2fb"
            },
            {
              "v": "b9cd80a",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.93: 收工归档 Git 同步状态",
              "items": [
                "Rushiera",
                "b9cd80a435"
              ],
              "status": "done",
              "evidence": "git b9cd80a"
            },
            {
              "v": "d7f4423",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.94: 会话重建改固定代读猫 nav_rescue + 领航员全景索引补端到端时序",
              "items": [
                "Rushiera",
                "d7f4423d3d"
              ],
              "status": "done",
              "evidence": "git d7f4423"
            },
            {
              "v": "ee9c72c",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.94: Git 同步状态更新",
              "items": [
                "Rushiera",
                "ee9c72ce81"
              ],
              "status": "done",
              "evidence": "git ee9c72c"
            },
            {
              "v": "2881ae8",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.96: B+C 迁移 R1/R2 全轮收线（Step 0 取证 + Step 1 吸收归位 + Step 2 装配 + Step 3 验收方案）",
              "items": [
                "Rushiera",
                "2881ae864b"
              ],
              "status": "done",
              "evidence": "git 2881ae8"
            },
            {
              "v": "e5b245c",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.97: R3 落地 R2 全部代码面遗留（M1-M5+B33，验收基线 9/24 → 23/24）",
              "items": [
                "Rushiera",
                "e5b245c937"
              ],
              "status": "done",
              "evidence": "git e5b245c"
            },
            {
              "v": "9bffffc",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.97: git-profile 同步记录回填（e5b245c）",
              "items": [
                "Rushiera",
                "9bffffc621"
              ],
              "status": "done",
              "evidence": "git 9bffffc"
            },
            {
              "v": "ace4d2e",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.97: design-status 补 B+C 迁移段（R1-R3）",
              "items": [
                "Rushiera",
                "ace4d2e164"
              ],
              "status": "done",
              "evidence": "git ace4d2e"
            },
            {
              "v": "da0bc00",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.97: R3 汇总位收线（八线全交）",
              "items": [
                "Rushiera",
                "da0bc009ef"
              ],
              "status": "done",
              "evidence": "git da0bc00"
            },
            {
              "v": "31bcc67",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.98: N6 迁移落地（判断器/接入/话术进单体 + 渐变切换面）",
              "items": [
                "Rushiera",
                "31bcc67096"
              ],
              "status": "done",
              "evidence": "git 31bcc67"
            },
            {
              "v": "e412eea",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.98: 档案面同步（版本号 / 报告索引 / git-profile）",
              "items": [
                "Rushiera",
                "e412eea95c"
              ],
              "status": "done",
              "evidence": "git e412eea"
            },
            {
              "v": "a57315f",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.99: R4 待办偏移检查（A类勘误10处 / B类状态12条）+ D6 六项拍板落卷",
              "items": [
                "Rushiera",
                "a57315f1a2"
              ],
              "status": "done",
              "evidence": "git a57315f"
            },
            {
              "v": "6211dc6",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.99: 更新 Git 档案同步状态",
              "items": [
                "Rushiera",
                "6211dc659b"
              ],
              "status": "done",
              "evidence": "git 6211dc6"
            },
            {
              "v": "7a8f21f",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.99: N6-1 核销出表 + N6 节头指向 D6-1 开工依据",
              "items": [
                "Rushiera",
                "7a8f21fe32"
              ],
              "status": "done",
              "evidence": "git 7a8f21f"
            },
            {
              "v": "ef62faf",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.99: git-profile 同步指针",
              "items": [
                "Rushiera",
                "ef62faf665"
              ],
              "status": "done",
              "evidence": "git ef62faf"
            },
            {
              "v": "7fae20e",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.00: R5 建卡 + 阀门动作（16 线任务卡 / 契约冻结 / 桩件 / 守门自测 / 队列规程）",
              "items": [
                "Rushiera",
                "7fae20e4d6"
              ],
              "status": "done",
              "evidence": "git 7fae20e"
            },
            {
              "v": "71d339b",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.00: git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "71d339b474"
              ],
              "status": "done",
              "evidence": "git 71d339b"
            },
            {
              "v": "5cfc8f3",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.02: R5 十六线全交 + R6 四线收线（十六线 16/16 · R6 4/5，剩 L1 合龙）",
              "items": [
                "Rushiera",
                "5cfc8f3f70"
              ],
              "status": "done",
              "evidence": "git 5cfc8f3"
            },
            {
              "v": "8f8ff82",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.03 修自测脚本真跑宿主 nav_reset：verify-navigator dryRun 必传",
              "items": [
                "Rushiera",
                "8f8ff82c4e"
              ],
              "status": "done",
              "evidence": "git 8f8ff82"
            },
            {
              "v": "8e7991d",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.04: 并发协议上工 - R7 卡落地 + 档案偏移订正（零代码改动）",
              "items": [
                "Rushiera",
                "8e7991de3a"
              ],
              "status": "done",
              "evidence": "git 8e7991d"
            },
            {
              "v": "ddad657",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.06: R7 核销（Q-001 首批 2 线 2/2 交）+ R8 建卡（3 线 · 首批 N=2）",
              "items": [
                "Rushiera",
                "ddad657866"
              ],
              "status": "done",
              "evidence": "git ddad657"
            },
            {
              "v": "381f86a",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "R8-L1 核销：代理层 PUT 双闸修复 PASS（Q-001 线 L1 · 14/14 断言复跑 · 契约 58/58）",
              "items": [
                "Rushiera",
                "381f86aa5c"
              ],
              "status": "done",
              "evidence": "git 381f86a"
            },
            {
              "v": "352cde3",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "R8-L1 判定卡补一条：复现脚本核销后保留在盘（判据 2 的可复跑路径）",
              "items": [
                "Rushiera",
                "352cde362a"
              ],
              "status": "done",
              "evidence": "git 352cde3"
            },
            {
              "v": "86810d0",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "R8-L1 判定卡补：_index.md 归主干独占未写（卡 §二）",
              "items": [
                "Rushiera",
                "86810d0c92"
              ],
              "status": "done",
              "evidence": "git 86810d0"
            },
            {
              "v": "022fd93",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "R8-L2 核销：记忆页切换视图 + 会话要点端点 PASS（Q-001 线 L2 · 六判据 5 绿 1 NOT RUN · 契约 58/58）",
              "items": [
                "Rushiera",
                "022fd93b2f"
              ],
              "status": "done",
              "evidence": "git 022fd93"
            },
            {
              "v": "848a53c",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.09: CHANGELOG 就地瘦身（120,710 B → 19,149 B）+ todo 重排 + 档案面 A1-A6",
              "items": [
                "Rushiera",
                "848a53cdff"
              ],
              "status": "done",
              "evidence": "git 848a53c"
            },
            {
              "v": "63d2b8d",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.09: git-profile 同步状态更新（848a53c）",
              "items": [
                "Rushiera",
                "63d2b8def0"
              ],
              "status": "done",
              "evidence": "git 63d2b8d"
            },
            {
              "v": "17c613c",
              "date": "11-01",
              "group": "2026-11",
              "lane": "chore",
              "title": "chore: 并发哨兵 tasks/.concurrency.json 移出版本控制（调度器运行态）",
              "items": [
                "Rushiera",
                "17c613c3ff"
              ],
              "status": "done",
              "evidence": "git 17c613c"
            },
            {
              "v": "6a40e9f",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.10: R9 建卡（合龙验收 + 记忆写面健壮性 · N=1）+ 队列行 Q-001 重启",
              "items": [
                "Rushiera",
                "6a40e9f890"
              ],
              "status": "done",
              "evidence": "git 6a40e9f"
            },
            {
              "v": "cd75367",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.10: git-profile 同步状态更新（6a40e9f）",
              "items": [
                "Rushiera",
                "cd7536732c"
              ],
              "status": "done",
              "evidence": "git cd75367"
            },
            {
              "v": "3d7077b",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "R9 主干直做：记忆写面 impressions 归一化 + 合龙后页面级验收（判据1-9全绿）",
              "items": [
                "Rushiera",
                "3d7077b880"
              ],
              "status": "done",
              "evidence": "git 3d7077b"
            },
            {
              "v": "206c0e7",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.11 收工：todo 存量核查（B11/R7-1/A1-A6 核销出表）+ 项目档案同步",
              "items": [
                "Rushiera",
                "206c0e7aba"
              ],
              "status": "done",
              "evidence": "git 206c0e7"
            },
            {
              "v": "46db413",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.11 git-profile 同步（206c0e7）",
              "items": [
                "Rushiera",
                "46db4139a4"
              ],
              "status": "done",
              "evidence": "git 46db413"
            },
            {
              "v": "9ee842e",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.12: clear API credentials and archive usage data to CatTemp",
              "items": [
                "Rushiera",
                "9ee842e381"
              ],
              "status": "done",
              "evidence": "git 9ee842e"
            },
            {
              "v": "be231f6",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.12: update git profile sync record",
              "items": [
                "Rushiera",
                "be231f6785"
              ],
              "status": "done",
              "evidence": "git be231f6"
            },
            {
              "v": "993ff10",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.13: 单体界面改版（会话页重写 / 业务设置 10节→6节 / 插件页删）",
              "items": [
                "Rushiera",
                "993ff108cd"
              ],
              "status": "done",
              "evidence": "git 993ff10"
            },
            {
              "v": "bb2244d",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.13: git-profile 同步记录更新",
              "items": [
                "Rushiera",
                "bb2244d2cb"
              ],
              "status": "done",
              "evidence": "git bb2244d"
            },
            {
              "v": "5ac910e",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.14: 记忆页签照原版重做（两栏 sx-* 骨架 / 行内三徽标 / 更新记忆 / 群成员表）",
              "items": [
                "Rushiera",
                "5ac910ede9"
              ],
              "status": "done",
              "evidence": "git 5ac910e"
            },
            {
              "v": "800e63d",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.14: git-profile 同步记录更新",
              "items": [
                "Rushiera",
                "800e63d780"
              ],
              "status": "done",
              "evidence": "git 800e63d"
            },
            {
              "v": "cea0fa0",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.14: todo 界面遗留核销（UI-1 已修）",
              "items": [
                "Rushiera",
                "cea0fa070c"
              ],
              "status": "done",
              "evidence": "git cea0fa0"
            },
            {
              "v": "53a84b7",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.14: git-profile 收工同步记录",
              "items": [
                "Rushiera",
                "53a84b7439"
              ],
              "status": "done",
              "evidence": "git 53a84b7"
            },
            {
              "v": "02f6ae6",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.14: todo UI-1 核销句归位（不占独立段）",
              "items": [
                "Rushiera",
                "02f6ae6af9"
              ],
              "status": "done",
              "evidence": "git 02f6ae6"
            },
            {
              "v": "20bed06",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.14: todo §A 补记本轮重启已发生",
              "items": [
                "Rushiera",
                "20bed06870"
              ],
              "status": "done",
              "evidence": "git 20bed06"
            },
            {
              "v": "907ea30",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.16: 守门自测判据对齐改版 + UI-2 按群开关卡置顶",
              "items": [
                "Rushiera",
                "907ea30cc9"
              ],
              "status": "done",
              "evidence": "git 907ea30"
            },
            {
              "v": "38eb61b",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.16: 收工同步 git-profile",
              "items": [
                "Rushiera",
                "38eb61bec7"
              ],
              "status": "done",
              "evidence": "git 38eb61b"
            },
            {
              "v": "8a25f24",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.16: 收工 todo 核销（UI-2 + 守门自测 + C 表三项消解）",
              "items": [
                "Rushiera",
                "8a25f24749"
              ],
              "status": "done",
              "evidence": "git 8a25f24"
            },
            {
              "v": "01a888e",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.16: git-profile 收工链对齐",
              "items": [
                "Rushiera",
                "01a888e8cd"
              ],
              "status": "done",
              "evidence": "git 01a888e"
            },
            {
              "v": "58ebee4",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.17 A7 陈旧读数订正 + B31 重判（拍甲案：先接线再启用）",
              "items": [
                "Rushiera",
                "58ebee438a"
              ],
              "status": "done",
              "evidence": "git 58ebee4"
            },
            {
              "v": "eee2b9c",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "todo 存量核销：v1.16 三张完成表压成一行 · 版本读数同步到 v1.17",
              "items": [
                "Rushiera",
                "eee2b9c234"
              ],
              "status": "done",
              "evidence": "git eee2b9c"
            },
            {
              "v": "0cbbdc4",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "git-profile 同步到 v1.17 提交面",
              "items": [
                "Rushiera",
                "0cbbdc461e"
              ],
              "status": "done",
              "evidence": "git 0cbbdc4"
            },
            {
              "v": "456c02d",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.18: B31 objective signal wiring (send-signals into browse-tick gate; costDay/missStreak supply; floor 0.65; selftest 80/80)",
              "items": [
                "Rushiera",
                "456c02da36"
              ],
              "status": "done",
              "evidence": "git 456c02d"
            },
            {
              "v": "198fd26",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "git-profile: sync to v1.18 commit face",
              "items": [
                "Rushiera",
                "198fd26b75"
              ],
              "status": "done",
              "evidence": "git 198fd26"
            },
            {
              "v": "4c7385a",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.19: 界面四处改版 + 表情包维护面",
              "items": [
                "Rushiera",
                "4c7385a521"
              ],
              "status": "done",
              "evidence": "git 4c7385a"
            },
            {
              "v": "02a9c86",
              "date": "11-02",
              "group": "2026-11",
              "lane": "chore",
              "title": "chore: git-profile 同步状态更新到 v1.19",
              "items": [
                "Rushiera",
                "02a9c863a6"
              ],
              "status": "done",
              "evidence": "git 02a9c86"
            },
            {
              "v": "6177bc6",
              "date": "11-02",
              "group": "2026-11",
              "lane": "feat",
              "title": "新增 ref-ch4-qq-removal.md——宿主 A299 QQBot 域移除与重适配接口",
              "items": [
                "Rushiera",
                "6177bc6f08"
              ],
              "status": "done",
              "evidence": "git 6177bc6"
            },
            {
              "v": "744abfd",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "收工：git-profile 同步状态更新（6177bc6）",
              "items": [
                "Rushiera",
                "744abfdefe"
              ],
              "status": "done",
              "evidence": "git 744abfd"
            },
            {
              "v": "d038b4a",
              "date": "11-04",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs: 模型端点与密钥回填（18100/low）——todo 前置变化与 §〇-F 第2项核销、CHANGELOG v1.19補",
              "items": [
                "Rushiera",
                "d038b4a9da"
              ],
              "status": "done",
              "evidence": "git d038b4a"
            },
            {
              "v": "036a81a",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.20: reference-purge 内容口径开关 + 白毛红瞳群记忆重整与前文整理",
              "items": [
                "Rushiera",
                "036a81a9d0"
              ],
              "status": "done",
              "evidence": "git 036a81a"
            },
            {
              "v": "420bcf0",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "git-profile: 同步状态更新至 036a81a",
              "items": [
                "Rushiera",
                "420bcf0eb4"
              ],
              "status": "done",
              "evidence": "git 420bcf0"
            },
            {
              "v": "03f2126",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.21 persona card split: per-chat card, shared mechanism, click-to-switch UI",
              "items": [
                "Rushiera",
                "03f21263db"
              ],
              "status": "done",
              "evidence": "git 03f2126"
            },
            {
              "v": "c390bfb",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.21 git-profile: sync status",
              "items": [
                "Rushiera",
                "c390bfbf44"
              ],
              "status": "done",
              "evidence": "git c390bfb"
            },
            {
              "v": "4f2f87f",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.21 git-profile: correct sync commit",
              "items": [
                "Rushiera",
                "4f2f87f575"
              ],
              "status": "done",
              "evidence": "git 4f2f87f"
            },
            {
              "v": "36bd00e",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.22 点名轮不注入发言档位提示；补提交 v1.21 人设卡代码面",
              "items": [
                "Rushiera",
                "36bd00e2b1"
              ],
              "status": "done",
              "evidence": "git 36bd00e"
            },
            {
              "v": "dcd8259",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.22 收工：git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "dcd82598f2"
              ],
              "status": "done",
              "evidence": "git dcd8259"
            },
            {
              "v": "f033852",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.22 收工：project.md 补 [继续会话指令]",
              "items": [
                "Rushiera",
                "f03385247c"
              ],
              "status": "done",
              "evidence": "git f033852"
            },
            {
              "v": "b835934",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.23 收工：人设卡与系统提示词可编辑面（log 一百）",
              "items": [
                "Rushiera",
                "b835934f9a"
              ],
              "status": "done",
              "evidence": "git b835934"
            },
            {
              "v": "48a745c",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.24: 修复人设卡被群记忆压制与日语人称按卡分派",
              "items": [
                "Rushiera",
                "48a745cd1f"
              ],
              "status": "done",
              "evidence": "git 48a745c"
            },
            {
              "v": "13e6a4b",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.24: git-profile 同步状态与代理规则",
              "items": [
                "Rushiera",
                "13e6a4bcf2"
              ],
              "status": "done",
              "evidence": "git 13e6a4b"
            },
            {
              "v": "44f1362",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.27: R喵卡搬全系统提示词（self 绕过公共设计）+ 人设与系统提示词换序 + 旧写法恢复",
              "items": [
                "Rushiera",
                "44f1362251"
              ],
              "status": "done",
              "evidence": "git 44f1362"
            },
            {
              "v": "364a785",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.27 收工：git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "364a78527a"
              ],
              "status": "done",
              "evidence": "git 364a785"
            },
            {
              "v": "ec7767e",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.28 本机来源标识自报：回环端点带 x-client-id，出网不透传",
              "items": [
                "Rushiera",
                "ec7767e175"
              ],
              "status": "done",
              "evidence": "git ec7767e"
            },
            {
              "v": "9a409ff",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.30 输出语言口径收口到恒追加段 + 日语台词专名读音（待重启生效）",
              "items": [
                "Rushiera",
                "9a409ff74b"
              ],
              "status": "done",
              "evidence": "git 9a409ff"
            },
            {
              "v": "a072b29",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.32 群表情包取图三链（表情名入正文 / 收藏表情本地分支 / get_image 5s+失败带名字）；一并带上 v1.31 语体长度按卡分流",
              "items": [
                "Rushiera",
                "a072b2997a"
              ],
              "status": "done",
              "evidence": "git a072b29"
            },
            {
              "v": "c446201",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.32 收工：git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "c446201413"
              ],
              "status": "done",
              "evidence": "git c446201"
            },
            {
              "v": "9b497fb",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.33 中文句内夹人称代词收口（输出语言第3条 + 芳乃卡混用禁区；在下自称按裁定保留）",
              "items": [
                "Rushiera",
                "9b497fb6df"
              ],
              "status": "done",
              "evidence": "git 9b497fb"
            },
            {
              "v": "455903b",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.33 收工：git-profile 同步状态更新",
              "items": [
                "Rushiera",
                "455903bd4f"
              ],
              "status": "done",
              "evidence": "git 455903b"
            },
            {
              "v": "aa40dda",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.34: 语体长度口径 A/B 消费点实锤 + 同句第二载体退役",
              "items": [
                "Rushiera",
                "aa40dda6fe"
              ],
              "status": "done",
              "evidence": "git aa40dda"
            },
            {
              "v": "abaa58d",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.34 收工：todo 记 B' 待重启与群内观感 + git-profile 同步状态",
              "items": [
                "Rushiera",
                "abaa58d7a4"
              ],
              "status": "done",
              "evidence": "git abaa58d"
            },
            {
              "v": "7c20602",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.34 收工：git-profile 补记两次同步 commit",
              "items": [
                "Rushiera",
                "7c2060218c"
              ],
              "status": "done",
              "evidence": "git 7c20602"
            },
            {
              "v": "fa1b015",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.36 yoshino card: chinese speaking shape + outbound interjection normalize + 2 corpus stat tools",
              "items": [
                "Rushiera",
                "fa1b015bef"
              ],
              "status": "done",
              "evidence": "git fa1b015"
            },
            {
              "v": "9f6e01d",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.37 tts adapter: japanese ending tails per persona card (chinese text unchanged)",
              "items": [
                "Rushiera",
                "9f6e01d703"
              ],
              "status": "done",
              "evidence": "git 9f6e01d"
            },
            {
              "v": "b2c5751",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.38: TTS interjection quota (3 per 10, no consecutive) + thinking 4-gear local-relay + docs",
              "items": [
                "Rushiera",
                "b2c5751823"
              ],
              "status": "done",
              "evidence": "git b2c5751"
            },
            {
              "v": "af42e22",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.38: fix thinking.js comment about relay default gear",
              "items": [
                "Rushiera",
                "af42e22686"
              ],
              "status": "done",
              "evidence": "git af42e22"
            },
            {
              "v": "a52d8a7",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.38: update git-profile sync state",
              "items": [
                "Rushiera",
                "a52d8a7b5d"
              ],
              "status": "done",
              "evidence": "git a52d8a7"
            },
            {
              "v": "9cc8ffb",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.39: todo entry for four-gear thinking restart verification",
              "items": [
                "Rushiera",
                "9cc8ffb8bd"
              ],
              "status": "done",
              "evidence": "git 9cc8ffb"
            },
            {
              "v": "fa74aa4",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.40: 语音先行（先发语音再发文字）",
              "items": [
                "Rushiera",
                "fa74aa4182"
              ],
              "status": "done",
              "evidence": "git fa74aa4"
            },
            {
              "v": "1630f7c",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.40: git-profile 同步状态与 add 口径订正",
              "items": [
                "Rushiera",
                "1630f7c3f6"
              ],
              "status": "done",
              "evidence": "git 1630f7c"
            },
            {
              "v": "a69f34f",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.41 日语先行 + 中文语气词压到5%；v1.42 自测语音漏发到真群修复",
              "items": [
                "Rushiera",
                "a69f34fe9e"
              ],
              "status": "done",
              "evidence": "git a69f34f"
            },
            {
              "v": "d18c598",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "收工：git-profile 同步状态 v1.42（a69f34f · 直连成功）",
              "items": [
                "Rushiera",
                "d18c5982bc"
              ],
              "status": "done",
              "evidence": "git d18c598"
            },
            {
              "v": "167f174",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.43: 档案面迁 CCBP（工程仓只留工程面）",
              "items": [
                "Rushiera",
                "167f174dd1"
              ],
              "status": "done",
              "evidence": "git 167f174"
            }
          ]
        }
      ]
    }
  ]
};
