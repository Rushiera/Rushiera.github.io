window.ARCH = {
  "meta": {
    "project": "ACS",
    "title": "ACS 提交时间线",
    "sub": "144 次提交 · 2026-11 → 2026-11",
    "ver": "c6868f3",
    "updated": "2026-11-14",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\tools\\Agent-Control-Surface",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\tools\\Agent-Control-Surface (branch main)"
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
              "v": "bb82478",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "建档：ACS 定位 / 命名 / 市场结论 / 三面结构 / 协议 v2 / 缺口 / 搬运计划",
              "items": [
                "Rushiera",
                "bb8247875a"
              ],
              "status": "done",
              "evidence": "git bb82478"
            },
            {
              "v": "58f6a2c",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "analysis：市场分析四脚本归档（02-market 每个数字可复跑）",
              "items": [
                "Rushiera",
                "58f6a2cd7e"
              ],
              "status": "done",
              "evidence": "git 58f6a2c"
            },
            {
              "v": "ac37b17",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "handoff：记录 analysis 提交未推送（三次失败，网络/凭据面）",
              "items": [
                "Rushiera",
                "ac37b170d7"
              ],
              "status": "done",
              "evidence": "git ac37b17"
            },
            {
              "v": "742ad24",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "analysis：归档四份实跑产物（02-market 数字可原地核对）",
              "items": [
                "Rushiera",
                "742ad24f4e"
              ],
              "status": "done",
              "evidence": "git 742ad24"
            },
            {
              "v": "ba6b30f",
              "date": "11-01",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs：push 状态回正（四提交全推）+ 挂起项状态表勘误",
              "items": [
                "Rushiera",
                "ba6b30fe97"
              ],
              "status": "done",
              "evidence": "git ba6b30f"
            },
            {
              "v": "5250e7e",
              "date": "11-01",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs：git 状态如实记账（末条未推，三次即停）",
              "items": [
                "Rushiera",
                "5250e7ea16"
              ],
              "status": "done",
              "evidence": "git 5250e7e"
            },
            {
              "v": "342738c",
              "date": "11-01",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs：远端基线与本地 ahead 数写明",
              "items": [
                "Rushiera",
                "342738c2c0"
              ],
              "status": "done",
              "evidence": "git 342738c"
            },
            {
              "v": "247ad6e",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "handoff：第 2/3/4/5 步标记完成，git 全推",
              "items": [
                "Rushiera",
                "247ad6ee6a"
              ],
              "status": "done",
              "evidence": "git 247ad6e"
            },
            {
              "v": "59c163a",
              "date": "11-01",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs：git 状态终版记账（远端 342738c，本地 ahead 待推）",
              "items": [
                "Rushiera",
                "59c163ad36"
              ],
              "status": "done",
              "evidence": "git 59c163a"
            },
            {
              "v": "0fb475b",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "handoff：完成项补全（14 项）+ ahead 数订正",
              "items": [
                "Rushiera",
                "0fb475bf24"
              ],
              "status": "done",
              "evidence": "git 0fb475b"
            },
            {
              "v": "61f3dbf",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "handoff：ahead 数以实况为准 + 标注 ccbp 他人改动不动",
              "items": [
                "Rushiera",
                "61f3dbf8e8"
              ],
              "status": "done",
              "evidence": "git 61f3dbf"
            },
            {
              "v": "3845a01",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "migrate: ext/probe 整棵搬入 + 定位重写 + Contract/Break 双模式",
              "items": [
                "Rushiera",
                "3845a0167c"
              ],
              "status": "done",
              "evidence": "git 3845a01"
            },
            {
              "v": "c116d00",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "handoff: git 状态终版记账（两仓已推、工作区 clean）",
              "items": [
                "Rushiera",
                "c116d00066"
              ],
              "status": "done",
              "evidence": "git c116d00"
            },
            {
              "v": "801e66b",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.3: REA撤出后主实现收口（假入口与退役名）",
              "items": [
                "Rushiera",
                "801e66b453"
              ],
              "status": "done",
              "evidence": "git 801e66b"
            },
            {
              "v": "f1a2abc",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.4: Harness 坐标系立起来 + README 重整 + 市场类材料降为沿革",
              "items": [
                "Rushiera",
                "f1a2abc2c2"
              ],
              "status": "done",
              "evidence": "git f1a2abc"
            },
            {
              "v": "1f06871",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.5: 来历改为独立立项 + 定位语句转客观语态",
              "items": [
                "Rushiera",
                "1f068718dd"
              ],
              "status": "done",
              "evidence": "git 1f06871"
            },
            {
              "v": "a93efb7",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.5.1: handoff 对齐坐标系（落笔顺序 + 状态快照）",
              "items": [
                "Rushiera",
                "a93efb7d5e"
              ],
              "status": "done",
              "evidence": "git a93efb7"
            },
            {
              "v": "9e3bdf8",
              "date": "11-02",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs: 架构定稿——中心运行时 + DDD 双防腐层 + 反馈自收集",
              "items": [
                "Rushiera",
                "9e3bdf8fd9"
              ],
              "status": "done",
              "evidence": "git 9e3bdf8"
            },
            {
              "v": "4c74125",
              "date": "11-02",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs: 按 v0.6 架构口径重记全部文档",
              "items": [
                "Rushiera",
                "4c74125144"
              ],
              "status": "done",
              "evidence": "git 4c74125"
            },
            {
              "v": "2f4216f",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.8: 文档偏移修正——22 处声明与实况对齐",
              "items": [
                "Rushiera",
                "2f4216f8e8"
              ],
              "status": "done",
              "evidence": "git 2f4216f"
            },
            {
              "v": "6556651",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.9: 施工步②——core/trace + core/evidence（18/18 单测绿，零 I/O）+ 7 处文档偏移修正",
              "items": [
                "Rushiera",
                "6556651535"
              ],
              "status": "done",
              "evidence": "git 6556651"
            },
            {
              "v": "d03090c",
              "date": "11-02",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs: 07-handoff git 表补 6556651",
              "items": [
                "Rushiera",
                "d03090c3da"
              ],
              "status": "done",
              "evidence": "git d03090c"
            },
            {
              "v": "a4c2a13",
              "date": "11-02",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs: 07-handoff 5.10 记 Hime 基线复跑前提（不在场 → 12 PASS）",
              "items": [
                "Rushiera",
                "a4c2a1389f"
              ],
              "status": "done",
              "evidence": "git a4c2a13"
            },
            {
              "v": "00d7064",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.10: step3 ports/adapters/app + real Run trace readback",
              "items": [
                "Rushiera",
                "00d7064ff1"
              ],
              "status": "done",
              "evidence": "git 00d7064"
            },
            {
              "v": "fc0499c",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.10.1: handoff git ledger",
              "items": [
                "Rushiera",
                "fc0499c068"
              ],
              "status": "done",
              "evidence": "git fc0499c"
            },
            {
              "v": "231f99e",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.11: 运行形态定稿（常驻/握手一次/按需接入）+ 长线路线 + Session 上下文",
              "items": [
                "Rushiera",
                "231f99e0ca"
              ],
              "status": "done",
              "evidence": "git 231f99e"
            },
            {
              "v": "00378ef",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.13 legacy nine-probes retirement: absorb 12 capability families + 22 pitfalls, retire projects, all targets to Break",
              "items": [
                "Rushiera",
                "00378efbaa"
              ],
              "status": "done",
              "evidence": "git 00378ef"
            },
            {
              "v": "89f9224",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.15 架构 ⓪ 落地：常驻服务 + /session 握手 + 目标档案 + 写模式独占（57/57）",
              "items": [
                "Rushiera",
                "89f9224bdc"
              ],
              "status": "done",
              "evidence": "git 89f9224"
            },
            {
              "v": "003bc65",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "ACS 架构步4：/run 四子命令 + /trace 同形投影（九文件 68/68）",
              "items": [
                "Rushiera",
                "003bc65228"
              ],
              "status": "done",
              "evidence": "git 003bc65"
            },
            {
              "v": "611c882",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.18: 步⑤ core/feedback L1 自动派生 + 六类摩擦定稿 + reports/feedback 落盘",
              "items": [
                "Rushiera",
                "611c882047"
              ],
              "status": "done",
              "evidence": "git 611c882"
            },
            {
              "v": "cb4811d",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.18.1: 交接与路线同步（步⑤ 已核销 · 十一文件 81/81）",
              "items": [
                "Rushiera",
                "cb4811dcc4"
              ],
              "status": "done",
              "evidence": "git cb4811d"
            },
            {
              "v": "59b3d19",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.18.1: 步6前置核对与文档偏移勘误",
              "items": [
                "Rushiera",
                "59b3d1965d"
              ],
              "status": "done",
              "evidence": "git 59b3d19"
            },
            {
              "v": "03e7bfb",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.19: expects对账L2落笔——GapCandidate派生+落盘器+单测100/100",
              "items": [
                "Rushiera",
                "03e7bfb0ee"
              ],
              "status": "done",
              "evidence": "git 03e7bfb"
            },
            {
              "v": "15f457c",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.20: 新增guard自检断言与capability/feedback消费面",
              "items": [
                "Rushiera",
                "15f457c036"
              ],
              "status": "done",
              "evidence": "git 15f457c"
            },
            {
              "v": "0c5ebc1",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.21: ClashVerge Break adapter + target profile + real Run over gate A",
              "items": [
                "Rushiera",
                "0c5ebc1277"
              ],
              "status": "done",
              "evidence": "git 0c5ebc1"
            },
            {
              "v": "f5c4139",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.21.1: add clashverge real-run driver script",
              "items": [
                "Rushiera",
                "f5c4139e3f"
              ],
              "status": "done",
              "evidence": "git f5c4139"
            },
            {
              "v": "dd755e8",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.21.2: probe README sync layering status + real-run entry",
              "items": [
                "Rushiera",
                "dd755e8551"
              ],
              "status": "done",
              "evidence": "git dd755e8"
            },
            {
              "v": "3700930",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.22: StarlitSeason second target adapter (form b, Break) + core zero-diff acceptance",
              "items": [
                "Rushiera",
                "37009300de"
              ],
              "status": "done",
              "evidence": "git 3700930"
            },
            {
              "v": "dcb9a48",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.22.2 文档对齐实况：路线 2-8 全核销 / L3L4 判据件 / 现状十条",
              "items": [
                "Rushiera",
                "dcb9a4895b"
              ],
              "status": "done",
              "evidence": "git dcb9a48"
            },
            {
              "v": "fe28cf0",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.23.0: P0-P3 —— agent 面五条判据 + 形态二矩阵 + 长期驻留运维面 + 指令集与幂等",
              "items": [
                "Rushiera",
                "fe28cf017e"
              ],
              "status": "done",
              "evidence": "git fe28cf0"
            },
            {
              "v": "4eb9080",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.24.0: /exec 落地 + P4 阶段 B 复审",
              "items": [
                "Rushiera",
                "4eb9080b5f"
              ],
              "status": "done",
              "evidence": "git 4eb9080"
            },
            {
              "v": "425dee9",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.24.1: 发现面标准条款 §2.10（B3 正文）",
              "items": [
                "Rushiera",
                "425dee9740"
              ],
              "status": "done",
              "evidence": "git 425dee9"
            },
            {
              "v": "5f2b501",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.25.0: /exec 事件留档（A+B 混合 · docs/04 §2.11）——A 写 Run Event（exec 层 Span + kind=exec）· B 按日期聚合 ndjson；留档不阻断执行；单测 26 文件 207/207",
              "items": [
                "Rushiera",
                "5f2b5014f6"
              ],
              "status": "done",
              "evidence": "git 5f2b501"
            },
            {
              "v": "4ba64dc",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.0 — B3 发现面标准件：模板五键/五头/变体 + 补丁脚本 + S33",
              "items": [
                "Rushiera",
                "4ba64dc7b4"
              ],
              "status": "done",
              "evidence": "git 4ba64dc"
            },
            {
              "v": "531ef8a",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.27.0 B1 形态 f 骨架四件 + PITFALLS（择主窗 / PID 自愈 / 首帧预热 / 输入自证）",
              "items": [
                "Rushiera",
                "531ef8af71"
              ],
              "status": "done",
              "evidence": "git 531ef8a"
            },
            {
              "v": "2fbb68c",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.28.0 — B4 夹具与生成器（fixture-target + fixture-run「起→就绪→跑→收尾」+ form d StartupHook）+ 模板 actor（拍板 29）；单测 28 文件 227/227",
              "items": [
                "Rushiera",
                "2fbb68c938"
              ],
              "status": "done",
              "evidence": "git 2fbb68c"
            },
            {
              "v": "3d0e1ae",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.29.0: B2 自绘 UI 四件（templates/ui-read：区域表 / 字格 / 断言 / 深路径 + 32 例单测）；文档偏移勘误（PROBE_VERSION / README 目录块 / docs09 / guide.json）",
              "items": [
                "Rushiera",
                "3d0e1aef83"
              ],
              "status": "done",
              "evidence": "git 3d0e1ae"
            },
            {
              "v": "9d403c4",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.30.0 P5：L3 /baseline 三动作 + L4 attribution 接事件流",
              "items": [
                "Rushiera",
                "9d403c4c0f"
              ],
              "status": "done",
              "evidence": "git 9d403c4"
            },
            {
              "v": "16a3163",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.31.0: Livo 文件面适配器 + 真实 Run（31 文件 284 单测）",
              "items": [
                "Rushiera",
                "16a3163593"
              ],
              "status": "done",
              "evidence": "git 16a3163"
            },
            {
              "v": "4f9756c",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.32.0: 阶段 C 作证（L3 基线对照 + L4 归因）· Livo outputs + 同日续号",
              "items": [
                "Rushiera",
                "4f9756c4f1"
              ],
              "status": "done",
              "evidence": "git 4f9756c"
            },
            {
              "v": "94b935d",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.33.0 — 形态二第二目标 rs_jxl（文件面）+ 目标接入手册 docs/12",
              "items": [
                "Rushiera",
                "94b935d9c2"
              ],
              "status": "done",
              "evidence": "git 94b935d"
            },
            {
              "v": "347ed5b",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.34.0 协议面：执行线程契约 docs/04 §2.12（thread 声明 / 受理四态 / pending 票据幂等 / 入队上限）",
              "items": [
                "Rushiera",
                "347ed5bbda"
              ],
              "status": "done",
              "evidence": "git 347ed5b"
            },
            {
              "v": "592e7b1",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.35.0: 协议面族 8——消耗性动作与重试禁令（04 §2.13）",
              "items": [
                "Rushiera",
                "592e7b1113"
              ],
              "status": "done",
              "evidence": "git 592e7b1"
            },
            {
              "v": "bc339bc",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.36.0 — /cmd 面落地（§2.12 + §2.13 实现）",
              "items": [
                "Rushiera",
                "bc339bccfb"
              ],
              "status": "done",
              "evidence": "git bc339bc"
            },
            {
              "v": "6574466",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.36.0 — 票据三终态断言补全（§2.12 D6 expired）",
              "items": [
                "Rushiera",
                "65744668f7"
              ],
              "status": "done",
              "evidence": "git 6574466"
            },
            {
              "v": "e351e8a",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.37.0: 协议面 TapPort 旁听语义（04 §2.14 · 可选第五端口 + 第五码）",
              "items": [
                "Rushiera",
                "e351e8a223"
              ],
              "status": "done",
              "evidence": "git e351e8a"
            },
            {
              "v": "16df9e9",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.38.0: 协议面输入通道档位 / 地图几何 / launcher.reload（04 §2.15–§2.17）",
              "items": [
                "Rushiera",
                "16df9e9c64"
              ],
              "status": "done",
              "evidence": "git 16df9e9"
            },
            {
              "v": "f343ed2",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.38.0: 04 §2.15 澄清 /exec 与文件面命令面的 channel 口径",
              "items": [
                "Rushiera",
                "f343ed2331"
              ],
              "status": "done",
              "evidence": "git f343ed2"
            },
            {
              "v": "23f97ca",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.38.0: 阶段 B 复审 §五 标记协议面 7 条全部落笔",
              "items": [
                "Rushiera",
                "23f97caa8c"
              ],
              "status": "done",
              "evidence": "git 23f97ca"
            },
            {
              "v": "afce580",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.39.0: 通道余三族（04 §2.18 层模型 / §2.19 数据面 / §2.20 反射面）+ 自检 S38–S41 + 单测 339",
              "items": [
                "Rushiera",
                "afce580561"
              ],
              "status": "done",
              "evidence": "git afce580"
            },
            {
              "v": "b60d59f",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.40.0: 自检 S17–S26 补齐 + 状态四档 WARN（S17/S18 纯断言 · S19≡S13 / S21≡S15 / S22≡S16 / S26≡S5 同源别名 · S20/S24/S25 目标侧；WARN 不参与退出码）",
              "items": [
                "Rushiera",
                "b60d59fc1c"
              ],
              "status": "done",
              "evidence": "git b60d59f"
            },
            {
              "v": "7323d01",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.41.0 六通道差量 6/6：channels.mjs（色相/边缘/连通域/投影）+ 三个真缺陷修复（中值翻转 → splitThreshold 分位中点 · 无对比度回 thr:null · shift 归类认列投影）；ui-read 55 例 / 全量 362",
              "items": [
                "Rushiera",
                "7323d01cbd"
              ],
              "status": "done",
              "evidence": "git 7323d01"
            },
            {
              "v": "24daf86",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.42.0: 频率分离（templates/ui-read/temporal.mjs）+ 文档同步",
              "items": [
                "Rushiera",
                "24daf86a63"
              ],
              "status": "done",
              "evidence": "git 24daf86"
            },
            {
              "v": "d57d588",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.43.0 ui-read 极性自适应（亮底暗字）+ docs 勘误（selfcheck 现行 S1–S41）",
              "items": [
                "Rushiera",
                "d57d588f7d"
              ],
              "status": "done",
              "evidence": "git d57d588"
            },
            {
              "v": "b73ce86",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.43.0 补丁 ui-read README：硬约束条数 4→5",
              "items": [
                "Rushiera",
                "b73ce860ff"
              ],
              "status": "done",
              "evidence": "git b73ce86"
            },
            {
              "v": "aaa45fd",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.43.0(docs): 极性列举与基线计数勘误（上工复核 7 处）",
              "items": [
                "Rushiera",
                "aaa45fd463"
              ],
              "status": "done",
              "evidence": "git aaa45fd"
            },
            {
              "v": "7353f6a",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.43.0(docs): 上工复核勘误——条款指针与缺通道码数（阶段 B 复审 5 处 + 六码口径 3 处）",
              "items": [
                "Rushiera",
                "7353f6a097"
              ],
              "status": "done",
              "evidence": "git 7353f6a"
            },
            {
              "v": "83da50d",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.43.0 条款轮：docs/04 §2.21 两模式入口取得与边界 + 同步面（五文件）",
              "items": [
                "Rushiera",
                "83da50ded1"
              ],
              "status": "done",
              "evidence": "git 83da50d"
            },
            {
              "v": "82c07dd",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.43.0 条款轮：指针勘误（Contract 两档 → 00 §3.0）",
              "items": [
                "Rushiera",
                "82c07dd0b2"
              ],
              "status": "done",
              "evidence": "git 82c07dd"
            },
            {
              "v": "86bdd40",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.43.0 S1: AbyssPlayer 自述面验证——一次性脚本 + 真实 Run r-20261111-0016（outcome=ok / 3 条 capability_gap / gap_total=0）",
              "items": [
                "Rushiera",
                "86bdd40d73"
              ],
              "status": "done",
              "evidence": "git 86bdd40"
            },
            {
              "v": "47e132d",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.43.0 口径校正：Contract/Break 不互斥（按侵入范围分）——AbyssPlayer mode=contract 重跑 r-20261111-0017；docs/09 §4.2 新增业务面归属（核心零渗透判据）",
              "items": [
                "Rushiera",
                "47e132d0d2"
              ],
              "status": "done",
              "evidence": "git 47e132d"
            },
            {
              "v": "49582f3",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.43.0 docs/13 使用规范（agent 侧）成文 + docs/12 决策树按侵入范围改写（目标能直接给的走 Contract，不给的走 Break）",
              "items": [
                "Rushiera",
                "49582f3816"
              ],
              "status": "done",
              "evidence": "git 49582f3"
            },
            {
              "v": "4d7a98a",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.44.0 模式重标 + 自述面 S2 模板件",
              "items": [
                "Rushiera",
                "4d7a98aadc"
              ],
              "status": "done",
              "evidence": "git 4d7a98a"
            },
            {
              "v": "20cbb7c",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.44.0 补丁：docs/13 明确 Break 面打开方式（档位不可见）",
              "items": [
                "Rushiera",
                "20cbb7c0ef"
              ],
              "status": "done",
              "evidence": "git 20cbb7c"
            },
            {
              "v": "149f7cf",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.45.0 自述面通用接入器 + 四目标真实接入",
              "items": [
                "Rushiera",
                "149f7cfaca"
              ],
              "status": "done",
              "evidence": "git 149f7cf"
            },
            {
              "v": "4f24ddf",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.46.0 — 自述面与档案 / 适配器联动（livo / rs-jxl 优先读 probe.txt 五键，读不到回落文件事实，port_from 标来源）",
              "items": [
                "Rushiera",
                "4f24ddf2b6"
              ],
              "status": "done",
              "evidence": "git 4f24ddf"
            },
            {
              "v": "5352416",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.47.0 — 文件面适配器档案驱动共用件 + 接入器 --suggest（livo / rs-jxl 收成薄壳，新文件面目标 = 档案 + 组装点一行；重构前后回执结构逐字一致）",
              "items": [
                "Rushiera",
                "5352416179"
              ],
              "status": "done",
              "evidence": "git 5352416"
            },
            {
              "v": "98af056",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.48.0 形态二第三 / 第四目标接入：qqbotb / fileclean 档案 + 组装点两行 + 两条真实 Run + 文档同步",
              "items": [
                "Rushiera",
                "98af056413"
              ],
              "status": "done",
              "evidence": "git 98af056"
            },
            {
              "v": "71a81b7",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.48.0 清理中间 Run 产物（只留最终实锤 r-20261111-0038/0039/0040/0041）",
              "items": [
                "Rushiera",
                "71a81b76e6"
              ],
              "status": "done",
              "evidence": "git 71a81b7"
            },
            {
              "v": "25a057e",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.49.0 `command_syntax` 落地：命令面语法可显式声明（go/rust/cs/auto）+ .cs 分支；档案不写该键时回执逐字不变（fileclean 隐式 14 条 = 显式 cs 14 条，SAME=true）",
              "items": [
                "Rushiera",
                "25a057e474"
              ],
              "status": "done",
              "evidence": "git 25a057e"
            },
            {
              "v": "886ba63",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.50.0 S47 Contract 零窗口侵入自检断言：档案面（形态 a–e + entry 无改包/注入产物）+ 自述面同源（复用 C1 checkIdentity），退出无痕 MANUAL；判定件 guard/zero-touch.mjs + 单测 16 例（39 文件 457/457）",
              "items": [
                "Rushiera",
                "886ba638ed"
              ],
              "status": "done",
              "evidence": "git 886ba63"
            },
            {
              "v": "bf4ce8a",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.50.0 上工勘误：模式标注 2 处（docs/04 §2.21 A 举例与 C2 矛盾 → 不点名表述；docs/12 §九 案例库 Livo/rs_jxl/StarlitSeason Break → Contract）",
              "items": [
                "Rushiera",
                "bf4ce8a4da"
              ],
              "status": "done",
              "evidence": "git bf4ce8a"
            },
            {
              "v": "81a5e61",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.51.0——文件面共用件三缺口：日志 .log 白名单 / --suggest 识别 SQLite 与 .cs / 第七码 no_command_channel",
              "items": [
                "Rushiera",
                "81a5e612a5"
              ],
              "status": "done",
              "evidence": "git 81a5e61"
            },
            {
              "v": "cb6da9c",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.52.0: ComfyUI 接入（形态 e · Contract · 自带 HTTP API）——适配器四件 + 档案 + 组装点一行 + 真实 Run 0047/0048；单测 40 文件 478/478",
              "items": [
                "Rushiera",
                "cb6da9cb80"
              ],
              "status": "done",
              "evidence": "git cb6da9c"
            },
            {
              "v": "a3104a8",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.52.0 勘察轮勘误：D8 Contract 名单 5→6（补 comfyui）",
              "items": [
                "Rushiera",
                "a3104a8d37"
              ],
              "status": "done",
              "evidence": "git a3104a8"
            },
            {
              "v": "f8cad2d",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.53.0 qqbotb-app CDP 适配器（Electron 类首例）：五件 + 档案第 9 份 + 组装点一行 + 假 CDP 单测 17 例（41 文件 495/495）+ 跑测脚本；真实 Run 待 CDP 在场",
              "items": [
                "Rushiera",
                "f8cad2d4dd"
              ],
              "status": "done",
              "evidence": "git f8cad2d"
            },
            {
              "v": "9a23922",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.53.0 补丁：qqbotb-app 档案 launch 锁文件路径改指 _unpack\\data + 08:48 复测基线（CDP 仍不在场）",
              "items": [
                "Rushiera",
                "9a23922023"
              ],
              "status": "done",
              "evidence": "git 9a23922"
            },
            {
              "v": "61c06b0",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.54.0 ComfyUI 遗留收口：/exec 启用（档案 root）+ POST /prompt 正向链（observe.history + 产物名带 run_id + /exec 解码与哈希双段证据）+ ComfyDock 对接（entry.dock / --dock-start）；真 Run r-20261112-0003 ok / 0004 fail·exec；单测 41 文件 499/499",
              "items": [
                "Rushiera",
                "61c06b07e1"
              ],
              "status": "done",
              "evidence": "git 61c06b0"
            },
            {
              "v": "7ff5821",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.55.0 StarlitSeason 形态 c + TapPort 真实旁听源：目标侧新增 L1 旁听面（shell/src/Tap.cs，18521，埋点 L3.Cmd）+ ACS tap.mjs / 档案 form c；D1–D6 全实测；真 Run r-20261112-0009 ok / 0010 fail·exec；单测 41 文件 505/505",
              "items": [
                "Rushiera",
                "7ff5821490"
              ],
              "status": "done",
              "evidence": "git 7ff5821"
            },
            {
              "v": "2b069c8",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.56.0: QQBotB 启动链修复收口 —— 档案 launch/baseline 更新 + 真实 Run r-20261112-0011/0012",
              "items": [
                "Rushiera",
                "2b069c8085"
              ],
              "status": "done",
              "evidence": "git 2b069c8"
            },
            {
              "v": "19e1b92",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.57.0 — QQBotB 打通：动作面（view/click）+ 像素面（target-api）+ 命令面（mjs 族）",
              "items": [
                "Rushiera",
                "19e1b92420"
              ],
              "status": "done",
              "evidence": "git 19e1b92"
            },
            {
              "v": "192c162",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.58.0 — ThrottleStop 只读遥测接入 + 文件面日志白名单扩 .csv",
              "items": [
                "Rushiera",
                "192c16202b"
              ],
              "status": "done",
              "evidence": "git 192c162"
            },
            {
              "v": "5ce8d1a",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.59.0: QQBotB 本体消耗性命令开放（五条走目标 HTTP API 3280）",
              "items": [
                "Rushiera",
                "5ce8d1a4f3"
              ],
              "status": "done",
              "evidence": "git 5ce8d1a"
            },
            {
              "v": "ed88719",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.60.0 文件面日志尾读 + 阶段 D 常驻固化起步",
              "items": [
                "Rushiera",
                "ed88719b42"
              ],
              "status": "done",
              "evidence": "git ed88719"
            },
            {
              "v": "4e75133",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.61.0 自启收口：install-autostart 增 -UserStartup（用户级 shell:startup，无需提权）",
              "items": [
                "Rushiera",
                "4e75133d78"
              ],
              "status": "done",
              "evidence": "git 4e75133"
            },
            {
              "v": "a7910e9",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "P2 对账轮：台账 r-20261112-0043（续号 = 磁盘 0042 + 1，内存计数 0→1）",
              "items": [
                "Rushiera",
                "a7910e99aa"
              ],
              "status": "done",
              "evidence": "git a7910e9"
            },
            {
              "v": "dbfd010",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "P2 第二轮对账：台账 r-20261112-0044（四层心跳 Run，续号 0043 + 1）",
              "items": [
                "Rushiera",
                "dbfd010633"
              ],
              "status": "done",
              "evidence": "git dbfd010"
            },
            {
              "v": "4e2827b",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.61.0 台账：P2 第三轮对账 + 四层心跳 Run（r-20261112-0045 · 无版本推进）",
              "items": [
                "Rushiera",
                "4e2827b6ce"
              ],
              "status": "done",
              "evidence": "git 4e2827b"
            },
            {
              "v": "990c124",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "P2 第四轮对账：台账 r-20261112-0046（四层心跳 Run，续号 0045 + 1 · 无版本推进）",
              "items": [
                "Rushiera",
                "990c124be2"
              ],
              "status": "done",
              "evidence": "git 990c124"
            },
            {
              "v": "3f336a7",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "P2 第五轮对账：台账 r-20261112-0047（并行四 Span → I2 正例）+ 0048（串行四层心跳 · record_total=0 · 无版本推进）",
              "items": [
                "Rushiera",
                "3f336a77ca"
              ],
              "status": "done",
              "evidence": "git 3f336a7"
            },
            {
              "v": "c996b44",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.60.0: P2 第六轮对账心跳 Run r-20261112-0049（四 Span 串行 · record_total=0 / gap_total=0）",
              "items": [
                "Rushiera",
                "c996b44db4"
              ],
              "status": "done",
              "evidence": "git c996b44"
            },
            {
              "v": "90e0869",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.61.0 KkFetch 接入（文件面第六目标）+ P2 第七轮对账与四层心跳 Run",
              "items": [
                "Rushiera",
                "90e08693cc"
              ],
              "status": "done",
              "evidence": "git 90e0869"
            },
            {
              "v": "ed5b96c",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.62.0: P2 第八轮对账心跳台账 r-20261112-0055（四 Span 串行 · record_total=0 / gap_total=0 · 无版本推进）",
              "items": [
                "Rushiera",
                "ed5b96ca17"
              ],
              "status": "done",
              "evidence": "git ed5b96c"
            },
            {
              "v": "5245858",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.62.0: P2 第九轮对账心跳台账 r-20261112-0056（四 Span 串行 · record_total=0 / gap_total=0 · 无版本推进）",
              "items": [
                "Rushiera",
                "5245858a4a"
              ],
              "status": "done",
              "evidence": "git 5245858"
            },
            {
              "v": "4f8b598",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "Rushiera v0.62.0: P2 第十轮对账心跳台账 r-20261112-0057（四 Span 串行 · record_total=0 / gap_total=0 · 无版本推进）",
              "items": [
                "Rushiera",
                "4f8b598a88"
              ],
              "status": "done",
              "evidence": "git 4f8b598"
            },
            {
              "v": "d41464b",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "Rushiera v0.62.0: P2 第十一轮对账心跳台账 r-20261112-0058（四 Span 串行 · record_total=0 / gap_total=0 · 无版本推进）",
              "items": [
                "Rushiera",
                "d41464b868"
              ],
              "status": "done",
              "evidence": "git d41464b"
            },
            {
              "v": "3165b4f",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "Rushiera v0.63.0: KkFetch 自述面部署（S42–S46 全 PASS）+ cli_source 跟随 Core 重构 + ports 18640 登记",
              "items": [
                "Rushiera",
                "3165b4f788"
              ],
              "status": "done",
              "evidence": "git 3165b4f"
            },
            {
              "v": "0ccf3c9",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.0 自述面可达性修复（probe.txt 在 ≠ 服务在）+ KkFetch 自述面收口 + P2 第十二轮对账",
              "items": [
                "Rushiera",
                "0ccf3c988b"
              ],
              "status": "done",
              "evidence": "git 0ccf3c9"
            },
            {
              "v": "e145dc7",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.2 guide.json 归位 guard/（代码 2 处路径 + 文档引用面同步）+ P2 第十四轮心跳 r-20261112-0066",
              "items": [
                "Rushiera",
                "e145dc7365"
              ],
              "status": "done",
              "evidence": "git e145dc7"
            },
            {
              "v": "aa4b152",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.3 台账：P2 第十五轮心跳 r-20261112-0067（四层串行 · gap_total=0 / record_total=0）",
              "items": [
                "Rushiera",
                "aa4b1528ad"
              ],
              "status": "done",
              "evidence": "git aa4b152"
            },
            {
              "v": "a2c60cd",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.4 文档：ui-read 真机首验三条结论（StarlitSeason TOP MENU）",
              "items": [
                "Rushiera",
                "a2c60cdec4"
              ],
              "status": "done",
              "evidence": "git a2c60cd"
            },
            {
              "v": "cf4c180",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.5: StarlitSeason 输入面 Run + 接入层 UI 样本集（v0.64.5）",
              "items": [
                "Rushiera",
                "cf4c18046c"
              ],
              "status": "done",
              "evidence": "git cf4c180"
            },
            {
              "v": "22920c0",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.5: 输入面 Run 产物（r-20261112-0068 / 0069）",
              "items": [
                "Rushiera",
                "22920c03dc"
              ],
              "status": "done",
              "evidence": "git 22920c0"
            },
            {
              "v": "743c3d3",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.6: ui.digest 四档读数 + run_id 同号跳号修复 + L1 恢复后旁听证据（r-0070..0073）",
              "items": [
                "Rushiera",
                "743c3d3818"
              ],
              "status": "done",
              "evidence": "git 743c3d3"
            },
            {
              "v": "2e8e72d",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.7 observe.ui 四档 digest 接线 + L1 旁听 full 档 Run",
              "items": [
                "Rushiera",
                "2e8e72d50b"
              ],
              "status": "done",
              "evidence": "git 2e8e72d"
            },
            {
              "v": "120d9a5",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.9: StarlitSeason contract 可见性扩展（事件面 / 目标日志面 / 可见面清单 + 取帧自证）+ P2 19th + autostart node-resident",
              "items": [
                "Rushiera",
                "120d9a545a"
              ],
              "status": "done",
              "evidence": "git 120d9a5"
            },
            {
              "v": "9ad2e79",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.10 observe.geometry：几何映射（frame↔client↔screen 三向复算 + 派生窗口矩形）+ 帧头轻量取尺寸 + /shot.png 映射泛化（单测 567）",
              "items": [
                "Rushiera",
                "9ad2e79a4b"
              ],
              "status": "done",
              "evidence": "git 9ad2e79"
            },
            {
              "v": "0fc9542",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.64.11: 几何缩放样本 + win-window resize + 驱动 mismatch 模式 + 4 条 Run",
              "items": [
                "Rushiera",
                "0fc954240b"
              ],
              "status": "done",
              "evidence": "git 0fc9542"
            },
            {
              "v": "46d6a34",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.65.0: L3 内省面五类落地（observe.controls 升级 / scene / channel / probe 取证族 / tap.pair），五面真实 Run gap_total=0；单测 44 文件 583/583",
              "items": [
                "Rushiera",
                "46d6a349c4"
              ],
              "status": "done",
              "evidence": "git 46d6a34"
            },
            {
              "v": "d2e6eac",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.66.0: 几何可点击性判据（geom_facts + clickable/geom_shared）+ 控件级几何实测不可得（容器级矩形 0/11）；单测 44 文件 584/584",
              "items": [
                "Rushiera",
                "d2e6eacb77"
              ],
              "status": "done",
              "evidence": "git d2e6eac"
            },
            {
              "v": "c3dad5d",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.67.0 前置闸脚本：starlitseason-vis-check-run（wvis × 像素极性对照，菜单不在屏拒绝盲跑）",
              "items": [
                "Rushiera",
                "c3dad5def4"
              ],
              "status": "done",
              "evidence": "git c3dad5d"
            },
            {
              "v": "612e826",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.69.0 reports: 模型在环三条 Run 产物（0004/0005/0006）+ 基线 mi-inloop-qqbotb-app-20261113",
              "items": [
                "Rushiera",
                "612e826066"
              ],
              "status": "done",
              "evidence": "git 612e826"
            },
            {
              "v": "dfbce2b",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.70.0 记账契约自描述补齐：/ops evidence_shape + run_shape · /capability invariants + friction_notes · 测试 588/588",
              "items": [
                "Rushiera",
                "dfbce2b31c"
              ],
              "status": "done",
              "evidence": "git dfbce2b"
            },
            {
              "v": "3ccba2b",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.71.0 真实 Run r-20261113-0008 产物（帧头两行在线验 malformed=false · 4 Span / 6 事件 / gaps=0）",
              "items": [
                "Rushiera",
                "3ccba2b0e5"
              ],
              "status": "done",
              "evidence": "git 3ccba2b"
            },
            {
              "v": "c3e79fe",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.63.0 观测面板三版 + 系统托盘：panel-routes/data/kit + ext/panel 前端与 .NET 托盘 + 停止哨兵（ROUTES 冻结表不动）",
              "items": [
                "Rushiera",
                "c3e79fee44"
              ],
              "status": "done",
              "evidence": "git c3e79fe"
            },
            {
              "v": "a60cbd1",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.74.0 收工：面板命令链路验证产物（livo ir-info / clashverge core.version 回执）",
              "items": [
                "Rushiera",
                "a60cbd1c3c"
              ],
              "status": "done",
              "evidence": "git a60cbd1"
            },
            {
              "v": "c704441",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.75.0 多形态/多模式地基 + 发现域（forms/modes 声明集 · 适配器按活跃值解析 · 本机程序发现面 417 行）",
              "items": [
                "Rushiera",
                "c704441770"
              ],
              "status": "done",
              "evidence": "git c704441"
            },
            {
              "v": "cc62016",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.76.0 热重载机制：档案重载 + 拒绝门禁 + 静态件头（档 0/1/3；档 2 待拍板）",
              "items": [
                "Rushiera",
                "cc6201684a"
              ],
              "status": "done",
              "evidence": "git cc62016"
            },
            {
              "v": "ced0e62",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.77.0: 档 2 单文件模块热载（可热载清单 + holder 换绑 + hot_loaded/skipped 回执）",
              "items": [
                "Rushiera",
                "ced0e62cc4"
              ],
              "status": "done",
              "evidence": "git ced0e62"
            },
            {
              "v": "87d7f08",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.77.3: 业务面零渗透修复（panel-routes 注释去旧访客前缀）+ 心跳 Run 0009",
              "items": [
                "Rushiera",
                "87d7f08d72"
              ],
              "status": "done",
              "evidence": "git 87d7f08"
            },
            {
              "v": "29f34ad",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.77.3: 心跳 Run r-20261113-0009 三产物（四 Span 串行 · gap_total=0 · record_total=0）",
              "items": [
                "Rushiera",
                "29f34ad96e"
              ],
              "status": "done",
              "evidence": "git 29f34ad"
            },
            {
              "v": "02febcf",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.78.0 自述面探针面补齐（/events 增量 + /state 七块 + 命令面 + cache ts/fresh + S2 假绿修复）",
              "items": [
                "Rushiera",
                "02febcf1a2"
              ],
              "status": "done",
              "evidence": "git 02febcf"
            },
            {
              "v": "48b4c02",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.79.0: HTTP 只读共用件 http-surface + 三目标接入（comfydock / clouddrive / syncthing）· 单测 651 / 六条真机 Run",
              "items": [
                "Rushiera",
                "48b4c0286f"
              ],
              "status": "done",
              "evidence": "git 48b4c02"
            },
            {
              "v": "7622e48",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.79.1 验证轮：面板 mode 切换真机（livo contract⇄break）+ clouddrive gRPC-web 前缀探针 + clouddrive 档案坐标回写 + .mode-backup 忽略",
              "items": [
                "Rushiera",
                "7622e4884a"
              ],
              "status": "done",
              "evidence": "git 7622e48"
            },
            {
              "v": "a0721d2",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.80.0 认证面接入：need_login / need_api_key 两码入协议（§2.22）+ clouddrive gRPC-web 适配器 + syncthing 认证探针 + 远程类 ToDesk / SunloginClient 判形接入；四目标真实 Run 0023-0026；单测 669",
              "items": [
                "Rushiera",
                "a0721d2079"
              ],
              "status": "done",
              "evidence": "git a0721d2"
            },
            {
              "v": "f803f78",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.67.0 远程类第二批：cpolar / RustDesk 判形 + 只读接入（cpolar /api/v1/tunnels 401 → need_login · rustdesk 文件面三进程零 TCP 监听）+ http-surface 日志面补齐（尾窗读 + read_mode/truncated/lines_total_scope 四字段自证）；真实 Run 0027-0029；单测 676",
              "items": [
                "Rushiera",
                "f803f786c0"
              ],
              "status": "done",
              "evidence": "git f803f78"
            },
            {
              "v": "457e513",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.68.0 远程类第三批：eCloud / SakuraFrp 判形 + 只读接入（ecloud 文件面 + logs\\jiguang 明文日志面 · 8050/8090 LISTEN 但 HTTP 超时 → 无 API 面；sakurafrp 文件面 · gRPC 库在位但服务零 TCP 监听 = 有 API 无入口 · 日志面 no_log_channel）；真实 Run 0030-0031；单测 677",
              "items": [
                "Rushiera",
                "457e513009"
              ],
              "status": "done",
              "evidence": "git 457e513"
            },
            {
              "v": "c978359",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.69.0 远程类第四批：telegram / qqguild 判形接入 + file-surface 补 entry.log_file 单文件日志通道（单测 679）",
              "items": [
                "Rushiera",
                "c978359062"
              ],
              "status": "done",
              "evidence": "git c978359"
            },
            {
              "v": "ce90ffa",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.84.0 远程类第五批：radmin-vpn / leigod 判形 + 只读接入 + 通用文件面驱动脚本（单测 681 · PROBE_VERSION 0.70.0）",
              "items": [
                "Rushiera",
                "ce90ffa535"
              ],
              "status": "done",
              "evidence": "git ce90ffa"
            },
            {
              "v": "29585d9",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.85.0 面板判形总表：verdicts.json（17 条不接）+ GET /panel/api/verdicts + 目标视图四卡 17 行（单测 683）",
              "items": [
                "Rushiera",
                "29585d9327"
              ],
              "status": "done",
              "evidence": "git 29585d9"
            },
            {
              "v": "194ba6d",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.86.0 判形覆盖：发现面 428 条逐条落桶 + 面板五卡可点（不接 18 · 可接 5 · 排除面 11 类）",
              "items": [
                "Rushiera",
                "194ba6deb8"
              ],
              "status": "done",
              "evidence": "git 194ba6d"
            },
            {
              "v": "77c5e12",
              "date": "11-14",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.73.0 判形能力扩展第一批：证据结构化（23 条带 evidence/状态，无证据降 UNVERIFIED）+ 差异视图（快照 added/removed/bucket_changed，新增触发重勘）+ 检索导出（服务端过滤 + Markdown，人粘贴）+ 扫描结果进判形总表与候选登记并入",
              "items": [
                "Rushiera",
                "77c5e122e2"
              ],
              "status": "done",
              "evidence": "git 77c5e12"
            },
            {
              "v": "6e02273",
              "date": "11-14",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.88.0 判形总表可见性：本次扫描主表 + 新增置顶标红",
              "items": [
                "Rushiera",
                "6e02273f7e"
              ],
              "status": "done",
              "evidence": "git 6e02273"
            },
            {
              "v": "c6868f3",
              "date": "11-14",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.89.0 判形取证复核：33 条逐条实测（Watt Toolkit E→B 本体缺失 · shawl.exe 归 clouddrive · 22 条时效复核）+ last_probe 快照与未探明",
              "items": [
                "Rushiera",
                "c6868f3e28"
              ],
              "status": "done",
              "evidence": "git c6868f3"
            }
          ]
        }
      ]
    }
  ]
};
