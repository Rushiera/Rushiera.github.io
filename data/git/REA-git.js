window.ARCH = {
  "meta": {
    "project": "REA",
    "title": "REA 提交时间线",
    "sub": "37 次提交 · 2026-10 → 2026-11",
    "ver": "f4013b7",
    "updated": "2026-11-14",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\tools\\REA",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\tools\\REA (branch main)"
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
              "v": "bf273c1",
              "date": "10-21",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: 工作区建档——上游镜像不入仓 + l10n 覆盖层 + 工作区手册",
              "items": [
                "Rushiera",
                "bf273c1872"
              ],
              "status": "done",
              "evidence": "git bf273c1"
            },
            {
              "v": "c2b119c",
              "date": "10-21",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(l10n): 顶层命令描述全部中文化 147/147 · 错误补救面撤出投放 · 工作区手册补恢复链",
              "items": [
                "Rushiera",
                "c2b119c722"
              ],
              "status": "done",
              "evidence": "git c2b119c"
            },
            {
              "v": "b769a60",
              "date": "10-21",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(l10n): scan-surface 收窄为参数说明 + 补救文案两面盘点",
              "items": [
                "Rushiera",
                "b769a608da"
              ],
              "status": "done",
              "evidence": "git b769a60"
            },
            {
              "v": "f3bd515",
              "date": "10-22",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: 档2引擎打通(Ghidra 12.1.4+JDK21) + CLI桥接层落地 v0.4",
              "items": [
                "Rushiera",
                "f3bd515248"
              ],
              "status": "done",
              "evidence": "git f3bd515"
            },
            {
              "v": "5631057",
              "date": "10-22",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: README 指向 CCBP 侧完整使用手册",
              "items": [
                "Rushiera",
                "56310575b9"
              ],
              "status": "done",
              "evidence": "git 5631057"
            },
            {
              "v": "09d02af",
              "date": "10-22",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: README 补 peek.mjs / snapshots 与两条新铁律",
              "items": [
                "Rushiera",
                "09d02af4c6"
              ],
              "status": "done",
              "evidence": "git 09d02af"
            },
            {
              "v": "4a4134a",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.5: 上游同步至 933af60eb（+165 提交，词表 160 条）、本地化管线补 oxfmt 后处理、桥接层负例自检",
              "items": [
                "Rushiera",
                "4a4134a826"
              ],
              "status": "done",
              "evidence": "git 4a4134a"
            },
            {
              "v": "895d4eb",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.6: 上游同步至 30fef57f7（+28 提交，词表 166 条）",
              "items": [
                "Rushiera",
                "895d4eb6ad"
              ],
              "status": "done",
              "evidence": "git 895d4eb"
            },
            {
              "v": "4aa78f6",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.7: ThrottleStop 9.7 全量取证报告（免引擎 8 条 + Ghidra 三连 · 驱动通道双向实证）",
              "items": [
                "Rushiera",
                "4aa78f6b0e"
              ],
              "status": "done",
              "evidence": "git 4aa78f6"
            },
            {
              "v": "5402946",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.8: 学マス启动器 全量取证报告（托管程序集 4 条免引擎命令）",
              "items": [
                "Rushiera",
                "5402946f25"
              ],
              "status": "done",
              "evidence": "git 5402946"
            },
            {
              "v": "78796e2",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.9: 上游同步至 8e6a95788（+1219 提交，词表 176 条）+ ext/ 动态运行时扩展包落地（12 件工具全可用）",
              "items": [
                "Rushiera",
                "78796e23fc"
              ],
              "status": "done",
              "evidence": "git 78796e2"
            },
            {
              "v": "59483da",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.10: 动态面用法复核 + 三处修复（任务目录尾点 / qiling 探针注释 / headless testassert）",
              "items": [
                "Rushiera",
                "59483da53f"
              ],
              "status": "done",
              "evidence": "git 59483da"
            },
            {
              "v": "749560b",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11: 上游同步至 113679c9a；README 基线前移 + gitignore 补 __pycache__/ext/rootfs",
              "items": [
                "Rushiera",
                "749560b06f"
              ],
              "status": "done",
              "evidence": "git 749560b"
            },
            {
              "v": "8230d88",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.12: Tenet 不引入 / ScyllaHide 插件改投 dp64 / Qiling rootfs 补齐 / Node 24.22.1",
              "items": [
                "Rushiera",
                "8230d8826b"
              ],
              "status": "done",
              "evidence": "git 8230d88"
            },
            {
              "v": "cd484e2",
              "date": "10-27",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.13: CGSS-DMM IL2CPP full evidence + REA probe design handoff",
              "items": [
                "Rushiera",
                "cd484e2dc7"
              ],
              "status": "done",
              "evidence": "git cd484e2"
            },
            {
              "v": "9cc9e42",
              "date": "10-27",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.13.1: evidence bundles out of repo (32MB, rebuildable); keep .keep",
              "items": [
                "Rushiera",
                "9cc9e42c2e"
              ],
              "status": "done",
              "evidence": "git 9cc9e42"
            },
            {
              "v": "48dda09",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(reports): purge 三件取证 + 两件实现拆解 + REA 使用说明（面向用户）",
              "items": [
                "Rushiera",
                "48dda09ad0"
              ],
              "status": "done",
              "evidence": "git 48dda09"
            },
            {
              "v": "ca4c778",
              "date": "10-28",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: 移入第三方逆向资产（kb 215 篇 / playbooks 60 篇 / cases 14 项 / scripts 13 件 · MIT · LICENSE 同置）",
              "items": [
                "Rushiera",
                "ca4c778113"
              ],
              "status": "done",
              "evidence": "git ca4c778"
            },
            {
              "v": "1720f20",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "ext: probe pack (13th tool) - protocol v1, 5 forms, generator, selfcheck, reports",
              "items": [
                "Rushiera",
                "1720f20d9b"
              ],
              "status": "done",
              "evidence": "git 1720f20"
            },
            {
              "v": "b439cb8",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.19: probe target clashverge (18560, observe-only)",
              "items": [
                "Rushiera",
                "b439cb89f5"
              ],
              "status": "done",
              "evidence": "git b439cb8"
            },
            {
              "v": "617d235",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "probe: v0.22 capability library - form f, profile chain rebuild, state normalize, report schema",
              "items": [
                "Rushiera",
                "617d23504d"
              ],
              "status": "done",
              "evidence": "git 617d235"
            },
            {
              "v": "c87bc6c",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "probe protocol v1: actor field, input listening, homography calibration, app visibility model",
              "items": [
                "Rushiera",
                "c87bc6cb6a"
              ],
              "status": "done",
              "evidence": "git c87bc6c"
            },
            {
              "v": "be2d0a5",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.23.2: probe target hime (form f) + /ui numeric UI + click self-proof; profile Unity->f; ports 18580",
              "items": [
                "Rushiera",
                "be2d0a5033"
              ],
              "status": "done",
              "evidence": "git be2d0a5"
            },
            {
              "v": "a294e2e",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "probe protocol §15.15：自绘 UI 的四问五层落地（具名区域/字格读数/页面断言）+ 端点表补 /regions /read /page",
              "items": [
                "Rushiera",
                "a294e2e8f3"
              ],
              "status": "done",
              "evidence": "git a294e2e"
            },
            {
              "v": "48c3e91",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.25 ext: Web/JS 主动面四件 + 待补件四件登记",
              "items": [
                "Rushiera",
                "48c3e91abd"
              ],
              "status": "done",
              "evidence": "git 48c3e91"
            },
            {
              "v": "a97e4c6",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26 ext: 第六档补三件（unicorn/il2cpp-dump/dex-dump）+ README恢复链重写",
              "items": [
                "Rushiera",
                "a97e4c6762"
              ],
              "status": "done",
              "evidence": "git a97e4c6"
            },
            {
              "v": "fec941d",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.27: 探针撤出收口 - ext/probe 冻结存档勘误 + 假入口更正 + 8 份历史报告入库",
              "items": [
                "Rushiera",
                "fec941d5ac"
              ],
              "status": "done",
              "evidence": "git fec941d"
            },
            {
              "v": "c351287",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.29: 上游同步 c3647ade1 并修词表漂移 6 条",
              "items": [
                "Rushiera",
                "c35128715e"
              ],
              "status": "done",
              "evidence": "git c351287"
            },
            {
              "v": "bf9a087",
              "date": "11-06",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.31 iPad 越狱三件静态分析（reports/ipad-jb）",
              "items": [
                "Rushiera",
                "bf9a087b4d"
              ],
              "status": "done",
              "evidence": "git bf9a087"
            },
            {
              "v": "7269df1",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.33 README 补 ext/reports 节 + sms-szfang 取证报告入库",
              "items": [
                "Rushiera",
                "7269df1962"
              ],
              "status": "done",
              "evidence": "git 7269df1"
            },
            {
              "v": "806c29a",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.38: TreeSize 逆向报告与形态建议",
              "items": [
                "Rushiera",
                "806c29a080"
              ],
              "status": "done",
              "evidence": "git 806c29a"
            },
            {
              "v": "18f811c",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.40: bridge/ev 取数脚本族入库 + 抓包样本移出仓库（D2 分流）",
              "items": [
                "Rushiera",
                "18f811cdc9"
              ],
              "status": "done",
              "evidence": "git 18f811c"
            },
            {
              "v": "3000cb0",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.40: bridge/ev/README 补「脚本与 envelope 形态绑定」判据（实测）",
              "items": [
                "Rushiera",
                "3000cb0f4a"
              ],
              "status": "done",
              "evidence": "git 3000cb0"
            },
            {
              "v": "88565c3",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.41: 本地化收口——投放 4 条顶层命令描述（scan-cli 163/163 · apply --check 180/180）",
              "items": [
                "Rushiera",
                "88565c331c"
              ],
              "status": "done",
              "evidence": "git 88565c3"
            },
            {
              "v": "d139d93",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.44: E4 收口 — unicorn 裸字节跑通 sms-szfang 壳 0x401650（6 断言 PASS）",
              "items": [
                "Rushiera",
                "d139d9374b"
              ],
              "status": "done",
              "evidence": "git d139d93"
            },
            {
              "v": "ceaab1f",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.45: TreeSize version.dll side-load 补判（报告 §十）",
              "items": [
                "Rushiera",
                "ceaab1f05a"
              ],
              "status": "done",
              "evidence": "git ceaab1f"
            },
            {
              "v": "f4013b7",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.46: E2 收口——il2cpp-dump 首个 ELF 目标完整 dump（BanG Dream CN libil2cpp.so）",
              "items": [
                "Rushiera",
                "f4013b710d"
              ],
              "status": "done",
              "evidence": "git f4013b7"
            }
          ]
        }
      ]
    }
  ]
};
