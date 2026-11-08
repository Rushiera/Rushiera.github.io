window.ARCH = {
  "meta": {
    "project": "CGSS-DMM",
    "title": "CGSS-DMM 提交时间线",
    "sub": "68 次提交 · 2026-10 → 2026-11",
    "ver": "dcede4f",
    "updated": "2026-11-08",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\CGSS-DMM",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\CGSS-DMM (branch main)"
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
              "v": "9ba0884",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.0: 上游原始发行包代码面",
              "items": [
                "Rushiera",
                "9ba0884cd1"
              ],
              "status": "done",
              "evidence": "git 9ba0884"
            },
            {
              "v": "9ca4566",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.1: 增资源全量下载脚本、启动链与账号解锁种子",
              "items": [
                "Rushiera",
                "9ca4566574"
              ],
              "status": "done",
              "evidence": "git 9ca4566"
            },
            {
              "v": "40335b3",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.2: 增窗口解锁注入链",
              "items": [
                "Rushiera",
                "40335b3f52"
              ],
              "status": "done",
              "evidence": "git 40335b3"
            },
            {
              "v": "4adba9b",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.3: 换用 38 版解锁 DLL",
              "items": [
                "Rushiera",
                "4adba9be72"
              ],
              "status": "done",
              "evidence": "git 4adba9b"
            },
            {
              "v": "453072c",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.4: 增卡片仓库、留言板、安卓模型工坊与冻结快照",
              "items": [
                "Rushiera",
                "453072c772"
              ],
              "status": "done",
              "evidence": "git 453072c"
            },
            {
              "v": "9eb8fcb",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.5: 重组目录结构、自建启动 stub、弃用 config.txt、数据面分出仓库",
              "items": [
                "Rushiera",
                "9eb8fcb03c"
              ],
              "status": "done",
              "evidence": "git 9eb8fcb"
            },
            {
              "v": "2ce9f19",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.6.0: 发布链 release.bat、VERSION、docs/release.md；清单换 repack 重写版",
              "items": [
                "Rushiera",
                "2ce9f198f7"
              ],
              "status": "done",
              "evidence": "git 2ce9f19"
            },
            {
              "v": "9d97530",
              "date": "10-25",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 布局文档同步发布判据（gateway/master.mdb 不可再取得）",
              "items": [
                "Rushiera",
                "9d975305fd"
              ],
              "status": "done",
              "evidence": "git 9d97530"
            },
            {
              "v": "2343ecb",
              "date": "10-25",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 发布文档补实测口径（包体计数 / update 带清单 / 12 个未达 blob）",
              "items": [
                "Rushiera",
                "2343ecb84e"
              ],
              "status": "done",
              "evidence": "git 2343ecb"
            },
            {
              "v": "4bc917c",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.7.0: 加入自测脚本 tools/verify/server-e2e.py，发布包与 INSTALL 同步",
              "items": [
                "Rushiera",
                "4bc917c316"
              ],
              "status": "done",
              "evidence": "git 4bc917c"
            },
            {
              "v": "3ec004b",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.7.0: VERSION 随包，发布文档计数与工具面同步",
              "items": [
                "Rushiera",
                "3ec004ba37"
              ],
              "status": "done",
              "evidence": "git 3ec004b"
            },
            {
              "v": "58482e3",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.7.0: 补 package-check 与 zip-format 两个验收脚本；发布文档同步实测口径",
              "items": [
                "Rushiera",
                "58482e3de7"
              ],
              "status": "done",
              "evidence": "git 58482e3"
            },
            {
              "v": "ddbe100",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.8.0: WinForms launcher with server console; old stub demoted to fallback",
              "items": [
                "Rushiera",
                "ddbe1007b9"
              ],
              "status": "done",
              "evidence": "git ddbe100"
            },
            {
              "v": "cdbdf66",
              "date": "10-27",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.9.0: L1/L2 probe (server + launcher), HAR export feeding REA, PE/master cross-checks, launcher label repaint fix",
              "items": [
                "Rushiera",
                "cdbdf662d7"
              ],
              "status": "done",
              "evidence": "git cdbdf66"
            },
            {
              "v": "1f95b62",
              "date": "10-27",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.9.0: docs/probe.md add api-surface request skeleton",
              "items": [
                "Rushiera",
                "1f95b62d05"
              ],
              "status": "done",
              "evidence": "git 1f95b62"
            },
            {
              "v": "a5585b4",
              "date": "10-27",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.10.0: fix repack manifest blocking /load/index; single-elevation chain; probe control surface; native il2cpp bridge",
              "items": [
                "Rushiera",
                "a5585b48c0"
              ],
              "status": "done",
              "evidence": "git a5585b4"
            },
            {
              "v": "330d953",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "bridge root-cause round: eleven single-variable probes pin down host-side thread starvation; add dev launcher and PE export lister",
              "items": [
                "Rushiera",
                "330d953508"
              ],
              "status": "done",
              "evidence": "git 330d953"
            },
            {
              "v": "0c09dc0",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "diag: consolidate the round's outsider scripts under tools/bridge/diag with a reading guide",
              "items": [
                "Rushiera",
                "0c09dc04de"
              ],
              "status": "done",
              "evidence": "git 0c09dc0"
            },
            {
              "v": "c971678",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "bridge: record the measured reason a worker thread cannot survive here, so the next round does not re-walk it",
              "items": [
                "Rushiera",
                "c971678c3d"
              ],
              "status": "done",
              "evidence": "git c971678"
            },
            {
              "v": "5d18056",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11.0: main-thread control channel (parasite) replaces the TCP bridge; A/B proves the thread killer keys on birth context",
              "items": [
                "Rushiera",
                "5d18056990"
              ],
              "status": "done",
              "evidence": "git 5d18056"
            },
            {
              "v": "b5c9b5a",
              "date": "10-28",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: parasite contract — slot count and static/instance invoke split",
              "items": [
                "Rushiera",
                "b5c9b5a9f5"
              ],
              "status": "done",
              "evidence": "git b5c9b5a"
            },
            {
              "v": "5cbc015",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11.1: 启动链输出全量落盘（chain.out/err/self.log + step 标记）",
              "items": [
                "Rushiera",
                "5cbc015cc5"
              ],
              "status": "done",
              "evidence": "git 5cbc015"
            },
            {
              "v": "c3d1d1c",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11.2: metadata 字段默认值 9 槽主机名改写 + 探针取证脚本入 tools/probe",
              "items": [
                "Rushiera",
                "c3d1d1cde9"
              ],
              "status": "done",
              "evidence": "git c3d1d1c"
            },
            {
              "v": "4960c64",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11.3: client cache root cause + startup cache self-check (cache-check.py, docs/bootset baseline)",
              "items": [
                "Rushiera",
                "4960c64701"
              ],
              "status": "done",
              "evidence": "git 4960c64"
            },
            {
              "v": "4b37671",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.12.0 parasite v2: view/typeinfo/objget/objcall/call/dump/tree/page + scan-view + reload-dll + button/params maps",
              "items": [
                "Rushiera",
                "4b37671e71"
              ],
              "status": "done",
              "evidence": "git 4b37671"
            },
            {
              "v": "a1861a3",
              "date": "10-28",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(probe): 加 OurCosmteer 移植分支指针",
              "items": [
                "Rushiera",
                "a1861a3b19"
              ],
              "status": "done",
              "evidence": "git a1861a3"
            },
            {
              "v": "5aeba1c",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.13.0: launcher command surface (/cmd), three-way chain split (--game-only), UAC-free self-replace",
              "items": [
                "Rushiera",
                "5aeba1c121"
              ],
              "status": "done",
              "evidence": "git 5aeba1c"
            },
            {
              "v": "bbbde3d",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.13.1: drop SO_REUSEADDR on probe listener (false-bind: new instance bound while old socket still served)",
              "items": [
                "Rushiera",
                "bbbde3dade"
              ],
              "status": "done",
              "evidence": "git bbbde3d"
            },
            {
              "v": "1b98d78",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "launcher v0.14.0: CGSS theme + stage-pass hero, PrintWindow shot, window.front cmd",
              "items": [
                "Rushiera",
                "1b98d78db0"
              ],
              "status": "done",
              "evidence": "git 1b98d78"
            },
            {
              "v": "9482580",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "probe: X-Probe-* response headers (protocol v1)",
              "items": [
                "Rushiera",
                "9482580a56"
              ],
              "status": "done",
              "evidence": "git 9482580"
            },
            {
              "v": "220355f",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "Integrate native F1 menu and opt-in main-thread diagnostics",
              "items": [
                "CGSS Contributors",
                "220355f6d2"
              ],
              "status": "done",
              "evidence": "git 220355f"
            },
            {
              "v": "009f677",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "Complete accelerated F1 MV export and sanitized development archive",
              "items": [
                "CGSS Contributors",
                "009f6775ea"
              ],
              "status": "done",
              "evidence": "git 009f677"
            },
            {
              "v": "a675cf6",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "Integrate in-game F1 controls, accelerated MV export and development archive",
              "items": [
                "CGSS Contributors",
                "a675cf6246"
              ],
              "status": "done",
              "evidence": "git a675cf6"
            },
            {
              "v": "4baec32",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "Centralize proxy settings with local overrides and preserve private configuration",
              "items": [
                "CGSS Contributors",
                "4baec32069"
              ],
              "status": "done",
              "evidence": "git 4baec32"
            },
            {
              "v": "dfb7d7e",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "Centralize proxy settings with local overrides and preserve private configuration",
              "items": [
                "CGSS Contributors",
                "dfb7d7e30e"
              ],
              "status": "done",
              "evidence": "git dfb7d7e"
            },
            {
              "v": "cc009a0",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: 雪見 分支合入 main (F1 in-game menu, accelerated MV export, centralized proxy settings)",
              "items": [
                "Rushiera",
                "cc009a0fe3"
              ],
              "status": "done",
              "evidence": "git cc009a0"
            },
            {
              "v": "356f0da",
              "date": "10-30",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: keep AGENTS.md local-only (ignore), proxy.local.json carries machine port",
              "items": [
                "Rushiera",
                "356f0daf9b"
              ],
              "status": "done",
              "evidence": "git 356f0da"
            },
            {
              "v": "d9245d2",
              "date": "10-30",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: untrack AGENTS.md (local agent workflow, ignored)",
              "items": [
                "Rushiera",
                "d9245d270f"
              ],
              "status": "done",
              "evidence": "git d9245d2"
            },
            {
              "v": "4613400",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.14.0: bump VERSION to the latest released launcher version (was 0.11.1)",
              "items": [
                "Rushiera",
                "461340010c"
              ],
              "status": "done",
              "evidence": "git 4613400"
            },
            {
              "v": "3908182",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "Add photo studio free camera and vertical movement controls",
              "items": [
                "CGSS Contributors",
                "3908182a9d"
              ],
              "status": "done",
              "evidence": "git 3908182"
            },
            {
              "v": "6cba22f",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "Add photo studio free camera and vertical movement controls",
              "items": [
                "CGSS Contributors",
                "6cba22f759"
              ],
              "status": "done",
              "evidence": "git 6cba22f"
            },
            {
              "v": "cc864c1",
              "date": "10-30",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: correct manifest version and command surface; ship probe.json disabled",
              "items": [
                "Rushiera",
                "cc864c1eaf"
              ],
              "status": "done",
              "evidence": "git cc864c1"
            },
            {
              "v": "cd5f3ab",
              "date": "10-30",
              "group": "2026-10",
              "lane": "chore",
              "title": "release: ship probe.json enabled by default (meta level)",
              "items": [
                "Rushiera",
                "cd5f3ab7dc"
              ],
              "status": "done",
              "evidence": "git cd5f3ab"
            },
            {
              "v": "0a23419",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge upstream v0.14.0 while retaining studio camera controls",
              "items": [
                "CGSS Contributors",
                "0a234191a1"
              ],
              "status": "done",
              "evidence": "git 0a23419"
            },
            {
              "v": "a8c71e0",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "Reconcile published studio branch and document upstream v0.14 sync",
              "items": [
                "CGSS Contributors",
                "a8c71e0a3d"
              ],
              "status": "done",
              "evidence": "git a8c71e0"
            },
            {
              "v": "5fffe40",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.0: behaviour contract table (44 checks) + dual-run differ + probe full allow rework",
              "items": [
                "Rushiera",
                "5fffe40d27"
              ],
              "status": "done",
              "evidence": "git 5fffe40"
            },
            {
              "v": "521e31f",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.1: live sample capture (four-file) + first live capture round (28 drivable endpoints)",
              "items": [
                "Rushiera",
                "521e31f2e3"
              ],
              "status": "done",
              "evidence": "git 521e31f"
            },
            {
              "v": "a1d95ac",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "tools: 上机副屏脚本（screens / move-to-screen）",
              "items": [
                "Rushiera",
                "a1d95ac0ac"
              ],
              "status": "done",
              "evidence": "git a1d95ac"
            },
            {
              "v": "2f7eb17",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Add MV transport controls and non-pausing PNG photography",
              "items": [
                "CGSS Contributors",
                "2f7eb17e4c"
              ],
              "status": "done",
              "evidence": "git 2f7eb17"
            },
            {
              "v": "5295663",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.2: move game window to second screen via two launcher chains + verify-screen pixel checks",
              "items": [
                "Rushiera",
                "5295663c41"
              ],
              "status": "done",
              "evidence": "git 5295663"
            },
            {
              "v": "b112a70",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.3: upstream packages filed in raw/ (never unpacked) + release split into base/update faces",
              "items": [
                "Rushiera",
                "b112a70f8e"
              ],
              "status": "done",
              "evidence": "git b112a70"
            },
            {
              "v": "b1b4acf",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Stabilize MV controls and mute; add camera inputs and 90 fps export",
              "items": [
                "CGSS Contributors",
                "b1b4acffa8"
              ],
              "status": "done",
              "evidence": "git b1b4acf"
            },
            {
              "v": "25d4135",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Export native MV titles and lyrics with independent controls",
              "items": [
                "sajoyukimi",
                "25d4135806"
              ],
              "status": "done",
              "evidence": "git 25d4135"
            },
            {
              "v": "da1cade",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "Add cached-frame loop seam preview tool",
              "items": [
                "sajoyukimi",
                "da1cade6b2"
              ],
              "status": "done",
              "evidence": "git da1cade"
            },
            {
              "v": "a73b820",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "Add card resource export with compatible layer loops and native particles",
              "items": [
                "sajoyukimi",
                "a73b820683"
              ],
              "status": "done",
              "evidence": "git a73b820"
            },
            {
              "v": "0c66f99",
              "date": "11-01",
              "group": "2026-11",
              "lane": "fix",
              "title": "Fix transparent atlas RGB leaking into Screen and Multiply effects",
              "items": [
                "sajoyukimi",
                "0c66f999d2"
              ],
              "status": "done",
              "evidence": "git 0c66f99"
            },
            {
              "v": "a38b320",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "Preserve native UI particle world scale during CG sampling",
              "items": [
                "sajoyukimi",
                "a38b320957"
              ],
              "status": "done",
              "evidence": "git a38b320"
            },
            {
              "v": "b974a75",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "merge: 雪見 分支合入 main (MV transport/photography, resource export, studio camera, loop preview)",
              "items": [
                "Rushiera",
                "b974a75ec8"
              ],
              "status": "done",
              "evidence": "git b974a75"
            },
            {
              "v": "b3e4368",
              "date": "11-01",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs(development): five-page menu after the merge",
              "items": [
                "Rushiera",
                "b3e4368e5f"
              ],
              "status": "done",
              "evidence": "git b3e4368"
            },
            {
              "v": "6a529f0",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.16.0: merge 雪見 (MV transport, photography, resource export, studio camera) into main; 5-page F1 menu",
              "items": [
                "Rushiera",
                "6a529f002d"
              ],
              "status": "done",
              "evidence": "git 6a529f0"
            },
            {
              "v": "96faa34",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "Add verified 2D Rich stream-copy export and physics control TODO",
              "items": [
                "sajoyukimi",
                "96faa34e42"
              ],
              "status": "done",
              "evidence": "git 96faa34"
            },
            {
              "v": "ac745b7",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.17.0: merge 雪見 (2D Rich stream-copy export + physics control TODO) into main",
              "items": [
                "Rushiera",
                "ac745b7af8"
              ],
              "status": "done",
              "evidence": "git ac745b7"
            },
            {
              "v": "9bd338e",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.17.0: bump VERSION after 雪見二次合入",
              "items": [
                "Rushiera",
                "9bd338ebea"
              ],
              "status": "done",
              "evidence": "git 9bd338e"
            },
            {
              "v": "ed7ddc7",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "update docs/development/TODO.md.",
              "items": [
                "sajoyukimi",
                "ed7ddc7828"
              ],
              "status": "done",
              "evidence": "git ed7ddc7"
            },
            {
              "v": "1a2f35b",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "update docs/development/TODO.md.",
              "items": [
                "sajoyukimi",
                "1a2f35b485"
              ],
              "status": "done",
              "evidence": "git 1a2f35b"
            },
            {
              "v": "4b92a52",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "侦察三项功能：物理参数面 / 2D进度条时钟源 / 字幕形态判定 + parasite 缺口清单",
              "items": [
                "Rushiera",
                "4b92a5263f"
              ],
              "status": "done",
              "evidence": "git 4b92a52"
            },
            {
              "v": "c49dcc7",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.18.0: 衣装物理滑条（ClothParameter 三 Rate 总倍率）",
              "items": [
                "Rushiera",
                "c49dcc7778"
              ],
              "status": "done",
              "evidence": "git c49dcc7"
            },
            {
              "v": "dcede4f",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.19.0: parasite P1 elem 数组元素读 + P2 嵌套类字段面",
              "items": [
                "Rushiera",
                "dcede4f9c1"
              ],
              "status": "done",
              "evidence": "git dcede4f"
            }
          ]
        }
      ]
    }
  ]
};
