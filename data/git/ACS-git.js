window.ARCH = {
  "meta": {
    "project": "ACS",
    "title": "ACS 提交时间线",
    "sub": "39 次提交 · 2026-11 → 2026-11",
    "ver": "dcb9a48",
    "updated": "2026-11-08",
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
            }
          ]
        }
      ]
    }
  ]
};
