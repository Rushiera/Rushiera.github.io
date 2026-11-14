window.ARCH = {
  "meta": {
    "project": "CGSE_CORE",
    "title": "CGSE_CORE 提交时间线",
    "sub": "317 次提交 · 2026-09 → 2026-11",
    "ver": "90934ed7",
    "updated": "2026-11-14",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\tools\\CGSE_CORE",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\tools\\CGSE_CORE (branch main)"
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
              "v": "42ec8249",
              "date": "09-23",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): add graph crafting with cyclic plans and parallel execution",
              "items": [
                "autumn",
                "42ec824996"
              ],
              "status": "done",
              "evidence": "git 42ec8249"
            },
            {
              "v": "51796c7a",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): preserve async output and retain large graph catalogs",
              "items": [
                "autumn",
                "51796c7ae5"
              ],
              "status": "done",
              "evidence": "git 51796c7a"
            },
            {
              "v": "9fdc0756",
              "date": "09-24",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(ae2): defer graph catalog encoding to planner workers",
              "items": [
                "autumn",
                "9fdc075681"
              ],
              "status": "done",
              "evidence": "git 9fdc0756"
            },
            {
              "v": "5c786304",
              "date": "09-24",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(ae2): reduce graph capture waits and exact input scans",
              "items": [
                "autumn",
                "5c786304b7"
              ],
              "status": "done",
              "evidence": "git 5c786304"
            },
            {
              "v": "c27185a7",
              "date": "09-24",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(ae2): pipeline cyclic jobs with protected material prefixes",
              "items": [
                "autumn",
                "c27185a710"
              ],
              "status": "done",
              "evidence": "git c27185a7"
            },
            {
              "v": "43c2ea52",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): preserve exact graph amounts and improve cyclic planning",
              "items": [
                "autumn",
                "43c2ea520c"
              ],
              "status": "done",
              "evidence": "git 43c2ea52"
            },
            {
              "v": "727b73f5",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): resolve coproduct demands and compress shared cycles",
              "items": [
                "autumn",
                "727b73f5a5"
              ],
              "status": "done",
              "evidence": "git 727b73f5"
            },
            {
              "v": "c854b494",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): accelerate graph planning and restore batched dispatch",
              "items": [
                "autumn",
                "c854b49448"
              ],
              "status": "done",
              "evidence": "git c854b494"
            },
            {
              "v": "9a84c0c8",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): harden graph solving and long-order execution",
              "items": [
                "autumn",
                "9a84c0c8eb"
              ],
              "status": "done",
              "evidence": "git 9a84c0c8"
            },
            {
              "v": "c275bcfd",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): batch shared catalysts without blocking downstream work",
              "items": [
                "autumn",
                "c275bcfdfc"
              ],
              "status": "done",
              "evidence": "git c275bcfd"
            },
            {
              "v": "4504709b",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(ae2): defer heavy feasibility analysis behind bounded search",
              "items": [
                "autumn",
                "4504709b70"
              ],
              "status": "done",
              "evidence": "git 4504709b"
            },
            {
              "v": "0a3ffdf3",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): compare direct conversions against lossy round trips",
              "items": [
                "autumn",
                "0a3ffdf317"
              ],
              "status": "done",
              "evidence": "git 0a3ffdf3"
            },
            {
              "v": "4ca4d47e",
              "date": "09-25",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): resume and parallelize integer planning branches",
              "items": [
                "autumn",
                "4ca4d47eb7"
              ],
              "status": "done",
              "evidence": "git 4ca4d47e"
            },
            {
              "v": "e6965ef0",
              "date": "09-26",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): presolve integer source choices and reuse proven conflicts",
              "items": [
                "autumn",
                "e6965ef096"
              ],
              "status": "done",
              "evidence": "git e6965ef0"
            },
            {
              "v": "95c21f48",
              "date": "09-26",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): improve coupled planning and stream large crafting supplies",
              "items": [
                "autumn",
                "95c21f4830"
              ],
              "status": "done",
              "evidence": "git 95c21f48"
            },
            {
              "v": "8ff8f051",
              "date": "09-26",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): reuse exact constraints and learn execution proofs",
              "items": [
                "autumn",
                "8ff8f05101"
              ],
              "status": "done",
              "evidence": "git 8ff8f051"
            },
            {
              "v": "7611bbf9",
              "date": "09-26",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): preserve planning proofs and optimize coupled search",
              "items": [
                "autumn",
                "7611bbf928"
              ],
              "status": "done",
              "evidence": "git 7611bbf9"
            },
            {
              "v": "6c32e0dc",
              "date": "09-26",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): discover optional byproduct sources and propagate planning proofs",
              "items": [
                "autumn",
                "6c32e0dcba"
              ],
              "status": "done",
              "evidence": "git 6c32e0dc"
            },
            {
              "v": "ce7124e4",
              "date": "09-26",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): solve bounded source choices and share recursive programs",
              "items": [
                "autumn",
                "ce7124e45a"
              ],
              "status": "done",
              "evidence": "git ce7124e4"
            },
            {
              "v": "7845b1d8",
              "date": "09-26",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): resume solver branches and strengthen seed and ordering proofs",
              "items": [
                "autumn",
                "7845b1d856"
              ],
              "status": "done",
              "evidence": "git 7845b1d8"
            },
            {
              "v": "d3621299",
              "date": "09-26",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): factor fused count models and compile private recovery routes",
              "items": [
                "autumn",
                "d36212996b"
              ],
              "status": "done",
              "evidence": "git d3621299"
            },
            {
              "v": "443249ad",
              "date": "09-26",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): extend seed and recovery planning with scoped proof reuse",
              "items": [
                "autumn",
                "443249adb0"
              ],
              "status": "done",
              "evidence": "git 443249ad"
            },
            {
              "v": "c7c0b7b7",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): preserve recovery choices and scale exact count planning",
              "items": [
                "autumn",
                "c7c0b7b776"
              ],
              "status": "done",
              "evidence": "git c7c0b7b7"
            },
            {
              "v": "cad806c3",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(ae2): keep shared programs compact through runtime and snapshots",
              "items": [
                "autumn",
                "cad806c318"
              ],
              "status": "done",
              "evidence": "git cad806c3"
            },
            {
              "v": "254ab1fd",
              "date": "09-27",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): add optional compact crafting CPU byte accounting",
              "items": [
                "autumn",
                "254ab1fd0a"
              ],
              "status": "done",
              "evidence": "git 254ab1fd"
            },
            {
              "v": "4f88e87b",
              "date": "09-28",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): strengthen exact graph solving and planning fallbacks",
              "items": [
                "autumn",
                "4f88e87be1"
              ],
              "status": "done",
              "evidence": "git 4f88e87b"
            },
            {
              "v": "7194f845",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): add configurable cycle-free graph fallback",
              "items": [
                "autumn",
                "7194f84562"
              ],
              "status": "done",
              "evidence": "git 7194f845"
            },
            {
              "v": "9e794365",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ae2): complete graph plan browser and high-resolution exports",
              "items": [
                "autumn",
                "9e79436573"
              ],
              "status": "done",
              "evidence": "git 9e794365"
            },
            {
              "v": "328ac636",
              "date": "09-29",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ae2): refresh on submission and prune redundant cycle work",
              "items": [
                "autumn",
                "328ac63641"
              ],
              "status": "done",
              "evidence": "git 328ac636"
            },
            {
              "v": "bd2f9409",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "perf(ae2): adapt graph animation to visible node count",
              "items": [
                "autumn",
                "bd2f9409ec"
              ],
              "status": "done",
              "evidence": "git bd2f9409"
            },
            {
              "v": "0eea5e69",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ae2): solve partial small cycles and isolate cached key tags",
              "items": [
                "autumn",
                "0eea5e69f1"
              ],
              "status": "done",
              "evidence": "git 0eea5e69"
            },
            {
              "v": "bb856c38",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ae2): run independent crafting branches alongside cycles",
              "items": [
                "autumn",
                "bb856c3858"
              ],
              "status": "done",
              "evidence": "git bb856c38"
            },
            {
              "v": "68b9b144",
              "date": "10-03",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ae2): strengthen CGSE search and reversible compilation",
              "items": [
                "autumn",
                "68b9b14438"
              ],
              "status": "done",
              "evidence": "git 68b9b144"
            },
            {
              "v": "60de36ca",
              "date": "10-03",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ae2): repair circuit caches and strengthen CGSE fallback",
              "items": [
                "autumn",
                "60de36ca3e"
              ],
              "status": "done",
              "evidence": "git 60de36ca"
            },
            {
              "v": "dcbc4740",
              "date": "10-03",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(ae2): strengthen CGSE solving and harden shared budgets",
              "items": [
                "autumn",
                "dcbc47405f"
              ],
              "status": "done",
              "evidence": "git dcbc4740"
            },
            {
              "v": "9ec8dbb8",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "perf(ae2): improve CGSE search coverage and solver reuse",
              "items": [
                "autumn",
                "9ec8dbb8ac"
              ],
              "status": "done",
              "evidence": "git 9ec8dbb8"
            },
            {
              "v": "6084c7ba",
              "date": "10-04",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(ae2): strengthen CGSE compiled views and scoped sharing",
              "items": [
                "autumn",
                "6084c7bab5"
              ],
              "status": "done",
              "evidence": "git 6084c7ba"
            },
            {
              "v": "245bfbfe",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "perf(ae2): reuse CGSE compilation and share certified view cuts",
              "items": [
                "autumn",
                "245bfbfefe"
              ],
              "status": "done",
              "evidence": "git 245bfbfe"
            },
            {
              "v": "0e95a666",
              "date": "10-04",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(ae2): complete CGSE scheduling reuse and certified sharing",
              "items": [
                "autumn",
                "0e95a6663d"
              ],
              "status": "done",
              "evidence": "git 0e95a666"
            },
            {
              "v": "8a7a0770",
              "date": "10-04",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ae2): preserve CGSE proofs and refine portfolio scheduling",
              "items": [
                "autumn",
                "8a7a077099"
              ],
              "status": "done",
              "evidence": "git 8a7a0770"
            },
            {
              "v": "2d236994",
              "date": "10-07",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(ae2): strengthen CGSE source search and compiled graph reuse",
              "items": [
                "autumn",
                "2d236994c1"
              ],
              "status": "done",
              "evidence": "git 2d236994"
            },
            {
              "v": "56b14cc3",
              "date": "10-08",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor: extract portable CGSE core with complete regression suites",
              "items": [
                "autumn",
                "56b14cc3dc"
              ],
              "status": "done",
              "evidence": "git 56b14cc3"
            },
            {
              "v": "1be5a631",
              "date": "10-08",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: license CGSE under MPL-2.0",
              "items": [
                "autumn",
                "1be5a6312e"
              ],
              "status": "done",
              "evidence": "git 1be5a631"
            },
            {
              "v": "ac8d26b7",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain stock-view search after candidate validation",
              "items": [
                "autumn",
                "ac8d26b761"
              ],
              "status": "done",
              "evidence": "git ac8d26b7"
            },
            {
              "v": "df588669",
              "date": "10-08",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: strengthen graph source search and small-interface solving",
              "items": [
                "autumn",
                "df5886692a"
              ],
              "status": "done",
              "evidence": "git df588669"
            },
            {
              "v": "3b63a578",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve root portfolio coverage and scaled search progress",
              "items": [
                "autumn",
                "3b63a578d1"
              ],
              "status": "done",
              "evidence": "git 3b63a578"
            },
            {
              "v": "8d24b1e3",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse exact matching prefixes during backtracking",
              "items": [
                "autumn",
                "8d24b1e3a9"
              ],
              "status": "done",
              "evidence": "git 8d24b1e3"
            },
            {
              "v": "590c83db",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: watch learned bounds and reuse reduced rational arithmetic",
              "items": [
                "autumn",
                "590c83dbf0"
              ],
              "status": "done",
              "evidence": "git 590c83db"
            },
            {
              "v": "63d27794",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: compact finite matching and streamline conflict analysis",
              "items": [
                "autumn",
                "63d2779485"
              ],
              "status": "done",
              "evidence": "git 63d27794"
            },
            {
              "v": "dfa41e13",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain conditional frontiers and accelerate separator scoring",
              "items": [
                "autumn",
                "dfa41e13ba"
              ],
              "status": "done",
              "evidence": "git dfa41e13"
            },
            {
              "v": "dbdea671",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: repair conditional integer kernels and admit residual sources",
              "items": [
                "autumn",
                "dbdea67188"
              ],
              "status": "done",
              "evidence": "git dbdea671"
            },
            {
              "v": "69470bad",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain specialist frontiers across solver quanta",
              "items": [
                "autumn",
                "69470badb5"
              ],
              "status": "done",
              "evidence": "git 69470bad"
            },
            {
              "v": "cae59245",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: enforce exact model scope for decision diagram continuations",
              "items": [
                "autumn",
                "cae592450b"
              ],
              "status": "done",
              "evidence": "git cae59245"
            },
            {
              "v": "390630fd",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse propagation residuals and streamline exact rational arithmetic",
              "items": [
                "autumn",
                "390630fde6"
              ],
              "status": "done",
              "evidence": "git 390630fd"
            },
            {
              "v": "95a17876",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse exact LP pivot factors and affine lattice operands",
              "items": [
                "autumn",
                "95a1787649"
              ],
              "status": "done",
              "evidence": "git 95a17876"
            },
            {
              "v": "9585a142",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain bounded residual source ranking windows",
              "items": [
                "autumn",
                "9585a142dd"
              ],
              "status": "done",
              "evidence": "git 9585a142"
            },
            {
              "v": "842b3eea",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: infer certified capacities before count branching",
              "items": [
                "autumn",
                "842b3eea5a"
              ],
              "status": "done",
              "evidence": "git 842b3eea"
            },
            {
              "v": "c8fd075a",
              "date": "10-09",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: add certified parity closure and retain root searches",
              "items": [
                "autumn",
                "c8fd075adb"
              ],
              "status": "done",
              "evidence": "git c8fd075a"
            },
            {
              "v": "c67ead23",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain numeric searches and accept completed root proofs",
              "items": [
                "autumn",
                "c67ead23a1"
              ],
              "status": "done",
              "evidence": "git c67ead23"
            },
            {
              "v": "beb23be3",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve solver progress and repair cyclic source views",
              "items": [
                "autumn",
                "beb23be34f"
              ],
              "status": "done",
              "evidence": "git beb23be3"
            },
            {
              "v": "01dff286",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover funded cycle entries and unmeasured source feedback",
              "items": [
                "autumn",
                "01dff2868e"
              ],
              "status": "done",
              "evidence": "git 01dff286"
            },
            {
              "v": "b3059076",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: specialize retained scalar count matching",
              "items": [
                "autumn",
                "b3059076e4"
              ],
              "status": "done",
              "evidence": "git b3059076"
            },
            {
              "v": "74bb4480",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: retain four-list residue matching for large binary counts",
              "items": [
                "autumn",
                "74bb4480c4"
              ],
              "status": "done",
              "evidence": "git 74bb4480"
            },
            {
              "v": "168b824b",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: specialize exact finite-domain LCG propagation",
              "items": [
                "autumn",
                "168b824be6"
              ],
              "status": "done",
              "evidence": "git 168b824b"
            },
            {
              "v": "66380b83",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: extend affine count search with exact integer Gram factors",
              "items": [
                "autumn",
                "66380b8330"
              ],
              "status": "done",
              "evidence": "git 66380b83"
            },
            {
              "v": "366cf2ba",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve numeric owner grants and report lattice progress",
              "items": [
                "autumn",
                "366cf2ba25"
              ],
              "status": "done",
              "evidence": "git 366cf2ba"
            },
            {
              "v": "3a75f505",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: retain potential-guided lattice refinement with certified bounds",
              "items": [
                "autumn",
                "3a75f505d2"
              ],
              "status": "done",
              "evidence": "git 3a75f505"
            },
            {
              "v": "124cc943",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: minimize integer conflicts in the auxiliary LCG search",
              "items": [
                "autumn",
                "124cc94357"
              ],
              "status": "done",
              "evidence": "git 124cc943"
            },
            {
              "v": "2496def4",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain productive count searches after complementary first visits",
              "items": [
                "autumn",
                "2496def436"
              ],
              "status": "done",
              "evidence": "git 2496def4"
            },
            {
              "v": "915b6c0e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse complementary count tables with compact exact keys",
              "items": [
                "autumn",
                "915b6c0e41"
              ],
              "status": "done",
              "evidence": "git 915b6c0e"
            },
            {
              "v": "6795d7a3",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain Boolean decision priorities and publish conflict deltas",
              "items": [
                "autumn",
                "6795d7a3df"
              ],
              "status": "done",
              "evidence": "git 6795d7a3"
            },
            {
              "v": "7e14f580",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain exact primitive row activities",
              "items": [
                "autumn",
                "7e14f58026"
              ],
              "status": "done",
              "evidence": "git 7e14f580"
            },
            {
              "v": "62f9883e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: attribute planning costs and settle requests before publication",
              "items": [
                "autumn",
                "62f9883e97"
              ],
              "status": "done",
              "evidence": "git 62f9883e"
            },
            {
              "v": "9fd651db",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse exact quarter sums before residue matching",
              "items": [
                "autumn",
                "9fd651db2c"
              ],
              "status": "done",
              "evidence": "git 9fd651db"
            },
            {
              "v": "cc653c5c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: solve low-density subsets with retained lattice blocks",
              "items": [
                "autumn",
                "cc653c5c61"
              ],
              "status": "done",
              "evidence": "git cc653c5c"
            },
            {
              "v": "2552fcd9",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: maintain subset lattice factors with exact integer minors",
              "items": [
                "autumn",
                "2552fcd954"
              ],
              "status": "done",
              "evidence": "git 2552fcd9"
            },
            {
              "v": "66f22b5b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse sparse affine basis updates",
              "items": [
                "autumn",
                "66f22b5ba1"
              ],
              "status": "done",
              "evidence": "git 66f22b5b"
            },
            {
              "v": "7c54a97e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: close solver gaps exposed by full regression",
              "items": [
                "autumn",
                "7c54a97e4f"
              ],
              "status": "done",
              "evidence": "git 7c54a97e"
            },
            {
              "v": "01e57bdd",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: connect checked execution reachability to count search",
              "items": [
                "autumn",
                "01e57bdd06"
              ],
              "status": "done",
              "evidence": "git 01e57bdd"
            },
            {
              "v": "ded8a215",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: retain and refine captured recipe candidate domains",
              "items": [
                "autumn",
                "ded8a21529"
              ],
              "status": "done",
              "evidence": "git ded8a215"
            },
            {
              "v": "865e0732",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: recover split-stock batches with portable candidate replay",
              "items": [
                "autumn",
                "865e07320e"
              ],
              "status": "done",
              "evidence": "git 865e0732"
            },
            {
              "v": "35662ebb",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: recover upstream candidate allocations with exact count reuse",
              "items": [
                "autumn",
                "35662ebb64"
              ],
              "status": "done",
              "evidence": "git 35662ebb"
            },
            {
              "v": "d5b35330",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: learn bounded integer cuts and replay material derivations",
              "items": [
                "autumn",
                "d5b35330d9"
              ],
              "status": "done",
              "evidence": "git d5b35330"
            },
            {
              "v": "19afbe9b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: reuse normalized derivations and keep checked LP witnesses",
              "items": [
                "autumn",
                "19afbe9b81"
              ],
              "status": "done",
              "evidence": "git 19afbe9b"
            },
            {
              "v": "3fa25a05",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: retain bounded integer LP alongside root count search",
              "items": [
                "autumn",
                "3fa25a056d"
              ],
              "status": "done",
              "evidence": "git 3fa25a05"
            },
            {
              "v": "2360b7f2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reuse verified plans and prove projected startup dead ends",
              "items": [
                "autumn",
                "2360b7f268"
              ],
              "status": "done",
              "evidence": "git 2360b7f2"
            },
            {
              "v": "d6709c2b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve complete proofs and harden public planning boundaries",
              "items": [
                "autumn",
                "d6709c2bb4"
              ],
              "status": "done",
              "evidence": "git d6709c2b"
            },
            {
              "v": "cb090c7b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: resume cold integer LP and support explicit mixed input domains",
              "items": [
                "autumn",
                "cb090c7b35"
              ],
              "status": "done",
              "evidence": "git cb090c7b"
            },
            {
              "v": "86d352f6",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: isolate request work clocks and reuse rounding scores",
              "items": [
                "autumn",
                "86d352f630"
              ],
              "status": "done",
              "evidence": "git 86d352f6"
            },
            {
              "v": "699f864d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse count rows across targets and retain auxiliary LP hints",
              "items": [
                "autumn",
                "699f864df3"
              ],
              "status": "done",
              "evidence": "git 699f864d"
            },
            {
              "v": "6124431f",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: align work budgets and verify count-model embeddings",
              "items": [
                "autumn",
                "6124431fbc"
              ],
              "status": "done",
              "evidence": "git 6124431f"
            },
            {
              "v": "2576f328",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain dual LP progress across budget slices",
              "items": [
                "autumn",
                "2576f32835"
              ],
              "status": "done",
              "evidence": "git 2576f328"
            },
            {
              "v": "d70a01af",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: sparsify shared equalities in count model views",
              "items": [
                "autumn",
                "d70a01affd"
              ],
              "status": "done",
              "evidence": "git d70a01af"
            },
            {
              "v": "a27e8878",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: admit Hall analysis by actual Boolean support",
              "items": [
                "autumn",
                "a27e887818"
              ],
              "status": "done",
              "evidence": "git a27e8878"
            },
            {
              "v": "bf7dde7f",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover cyclic startup witnesses within the main search budget",
              "items": [
                "autumn",
                "bf7dde7fad"
              ],
              "status": "done",
              "evidence": "git bf7dde7f"
            },
            {
              "v": "76963e2a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reduce solver summary and inventory allocations",
              "items": [
                "autumn",
                "76963e2a8d"
              ],
              "status": "done",
              "evidence": "git 76963e2a"
            },
            {
              "v": "5755232b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: streamline exact propagation and execution summaries",
              "items": [
                "autumn",
                "5755232b51"
              ],
              "status": "done",
              "evidence": "git 5755232b"
            },
            {
              "v": "e88cf30f",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve funded cyclic startup alternatives",
              "items": [
                "autumn",
                "e88cf30f88"
              ],
              "status": "done",
              "evidence": "git e88cf30f"
            },
            {
              "v": "7a9278ab",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: migrate historical probes and replay formats",
              "items": [
                "autumn",
                "7a9278ab79"
              ],
              "status": "done",
              "evidence": "git 7a9278ab"
            },
            {
              "v": "914fc8d2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve candidate progress through execution validation",
              "items": [
                "autumn",
                "914fc8d26c"
              ],
              "status": "done",
              "evidence": "git 914fc8d2"
            },
            {
              "v": "0ade76c8",
              "date": "10-12",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve component proofs and release seed verification",
              "items": [
                "autumn",
                "0ade76c8a6"
              ],
              "status": "done",
              "evidence": "git 0ade76c8"
            },
            {
              "v": "1fa8825f",
              "date": "10-12",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain execution reachability and proof continuations",
              "items": [
                "autumn",
                "1fa8825f8c"
              ],
              "status": "done",
              "evidence": "git 1fa8825f"
            },
            {
              "v": "50af5ba4",
              "date": "10-12",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: bound forced production in unit conversion networks",
              "items": [
                "autumn",
                "50af5ba4f4"
              ],
              "status": "done",
              "evidence": "git 50af5ba4"
            },
            {
              "v": "69a3a183",
              "date": "10-12",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: certify sparse resource bounds without exhausting source search",
              "items": [
                "autumn",
                "69a3a183fa"
              ],
              "status": "done",
              "evidence": "git 69a3a183"
            },
            {
              "v": "11a5c59d",
              "date": "10-12",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve allocation turns across strategy interruptions",
              "items": [
                "autumn",
                "11a5c59dc2"
              ],
              "status": "done",
              "evidence": "git 11a5c59d"
            },
            {
              "v": "608760c7",
              "date": "10-12",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: admit bounded count search behind private recipe chains",
              "items": [
                "autumn",
                "608760c73d"
              ],
              "status": "done",
              "evidence": "git 608760c7"
            },
            {
              "v": "c14b986c",
              "date": "10-12",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: complete bounded covers and search narrow integer kernels",
              "items": [
                "autumn",
                "c14b986c1b"
              ],
              "status": "done",
              "evidence": "git c14b986c"
            },
            {
              "v": "3034d716",
              "date": "10-12",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: stabilize packed graph order and compact dependency edges",
              "items": [
                "autumn",
                "3034d71673"
              ],
              "status": "done",
              "evidence": "git 3034d716"
            },
            {
              "v": "816c604a",
              "date": "10-12",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: keep count solving fair during stock-view repair",
              "items": [
                "autumn",
                "816c604afb"
              ],
              "status": "done",
              "evidence": "git 816c604a"
            },
            {
              "v": "e41e3bc3",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: sparsify integer congruence proofs",
              "items": [
                "autumn",
                "e41e3bc3c4"
              ],
              "status": "done",
              "evidence": "git e41e3bc3"
            },
            {
              "v": "693897c1",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse compiled integer equation slices",
              "items": [
                "autumn",
                "693897c100"
              ],
              "status": "done",
              "evidence": "git 693897c1"
            },
            {
              "v": "072fe2e2",
              "date": "10-12",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: repair LP candidates with bounded proximity search",
              "items": [
                "autumn",
                "072fe2e224"
              ],
              "status": "done",
              "evidence": "git 072fe2e2"
            },
            {
              "v": "55cfca3c",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: factor exact equality joins in LP neighborhoods",
              "items": [
                "autumn",
                "55cfca3cb4"
              ],
              "status": "done",
              "evidence": "git 55cfca3c"
            },
            {
              "v": "4888068d",
              "date": "10-12",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: combine retained LP neighborhoods with price-guided repair",
              "items": [
                "autumn",
                "4888068d7b"
              ],
              "status": "done",
              "evidence": "git 4888068d"
            },
            {
              "v": "c09410d1",
              "date": "10-13",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: learn failed execution counts and compress reachability",
              "items": [
                "autumn",
                "c09410d1d2"
              ],
              "status": "done",
              "evidence": "git c09410d1"
            },
            {
              "v": "2e858bfc",
              "date": "10-13",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: retain conflict learning in price-guided LP cores",
              "items": [
                "autumn",
                "2e858bfce0"
              ],
              "status": "done",
              "evidence": "git 2e858bfc"
            },
            {
              "v": "a43db9bc",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: index repeated range joins and reuse finite PB reasons",
              "items": [
                "autumn",
                "a43db9bc3b"
              ],
              "status": "done",
              "evidence": "git a43db9bc"
            },
            {
              "v": "4eb2e06d",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: refine range indexes on demand and stabilize proof parents",
              "items": [
                "autumn",
                "4eb2e06d87"
              ],
              "status": "done",
              "evidence": "git 4eb2e06d"
            },
            {
              "v": "c5283125",
              "date": "10-13",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: complete bounded missing-material previews with verified refills",
              "items": [
                "autumn",
                "c528312536"
              ],
              "status": "done",
              "evidence": "git c5283125"
            },
            {
              "v": "a91627cd",
              "date": "10-13",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: retain canonical grouped allocation search for bounded counts",
              "items": [
                "autumn",
                "a91627cde1"
              ],
              "status": "done",
              "evidence": "git a91627cd"
            },
            {
              "v": "2086ff14",
              "date": "10-13",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: separate conserved startup pools and complete execution proofs",
              "items": [
                "autumn",
                "2086ff14ec"
              ],
              "status": "done",
              "evidence": "git 2086ff14"
            },
            {
              "v": "987285e7",
              "date": "10-13",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: compose stocked entry programs with joint recovery allocation",
              "items": [
                "autumn",
                "987285e7d8"
              ],
              "status": "done",
              "evidence": "git 987285e7"
            },
            {
              "v": "a95960fc",
              "date": "10-13",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: combine wide allocation and retained relaxation repair",
              "items": [
                "autumn",
                "a95960fc9a"
              ],
              "status": "done",
              "evidence": "git a95960fc"
            },
            {
              "v": "7a9cad58",
              "date": "10-13",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: compile packing views for retained exact neighborhood search",
              "items": [
                "autumn",
                "7a9cad58b4"
              ],
              "status": "done",
              "evidence": "git 7a9cad58"
            },
            {
              "v": "faaf0e26",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: propagate packing choices and share exact dual explanations",
              "items": [
                "autumn",
                "faaf0e2611"
              ],
              "status": "done",
              "evidence": "git faaf0e26"
            },
            {
              "v": "56a7776b",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: propagate whole packing cores and interleave retained search",
              "items": [
                "autumn",
                "56a7776b69"
              ],
              "status": "done",
              "evidence": "git 56a7776b"
            },
            {
              "v": "09659fde",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse packing repairs and schedule scoped search phases",
              "items": [
                "autumn",
                "09659fde97"
              ],
              "status": "done",
              "evidence": "git 09659fde"
            },
            {
              "v": "335af1c8",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain packing frontiers across sparse exchange scouts",
              "items": [
                "autumn",
                "335af1c8b2"
              ],
              "status": "done",
              "evidence": "git 335af1c8"
            },
            {
              "v": "ee008f64",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse material rows across recipe coordinates and cache coefficient analysis",
              "items": [
                "autumn",
                "ee008f64c6"
              ],
              "status": "done",
              "evidence": "git ee008f64"
            },
            {
              "v": "e653f6c3",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: avoid sparse row copies and accelerate exact allocation bounds",
              "items": [
                "autumn",
                "e653f6c304"
              ],
              "status": "done",
              "evidence": "git e653f6c3"
            },
            {
              "v": "2610105e",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: accelerate conservation arithmetic and numerical pivot updates",
              "items": [
                "autumn",
                "2610105edf"
              ],
              "status": "done",
              "evidence": "git 2610105e"
            },
            {
              "v": "79778955",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse conservation kernels with independent cache budgets",
              "items": [
                "autumn",
                "797789554f"
              ],
              "status": "done",
              "evidence": "git 79778955"
            },
            {
              "v": "f64c08f5",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: isolate row-template retention budgets and skip duplicate proofs",
              "items": [
                "autumn",
                "f64c08f5df"
              ],
              "status": "done",
              "evidence": "git f64c08f5"
            },
            {
              "v": "08ab227a",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: isolate retained planning budgets and reuse scoped count proofs",
              "items": [
                "autumn",
                "08ab227a97"
              ],
              "status": "done",
              "evidence": "git 08ab227a"
            },
            {
              "v": "9388b42e",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: balance retained LP and candidate search handoffs",
              "items": [
                "autumn",
                "9388b42eaf"
              ],
              "status": "done",
              "evidence": "git 9388b42e"
            },
            {
              "v": "eb306b76",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: share complete-scope count searches without losing order diversity",
              "items": [
                "autumn",
                "eb306b76e2"
              ],
              "status": "done",
              "evidence": "git eb306b76"
            },
            {
              "v": "66139c86",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse exact packing suffixes after measured search warmup",
              "items": [
                "autumn",
                "66139c867f"
              ],
              "status": "done",
              "evidence": "git 66139c86"
            },
            {
              "v": "5ecac723",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain repair progress across wider LP exchanges",
              "items": [
                "autumn",
                "5ecac723e9"
              ],
              "status": "done",
              "evidence": "git 5ecac723"
            },
            {
              "v": "6668b00e",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: index exact packing propagation thresholds",
              "items": [
                "autumn",
                "6668b00ea6"
              ],
              "status": "done",
              "evidence": "git 6668b00e"
            },
            {
              "v": "13dbbe71",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: preserve useful packing service under small budgets",
              "items": [
                "autumn",
                "13dbbe71f1"
              ],
              "status": "done",
              "evidence": "git 13dbbe71"
            },
            {
              "v": "9ac7befb",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse exact packing value queries across propagation",
              "items": [
                "autumn",
                "9ac7befb9b"
              ],
              "status": "done",
              "evidence": "git 9ac7befb"
            },
            {
              "v": "0bc57915",
              "date": "10-15",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: plan symbolic tool capacity and reconcile actual state returns",
              "items": [
                "autumn",
                "0bc579150c"
              ],
              "status": "done",
              "evidence": "git 0bc57915"
            },
            {
              "v": "48ed8931",
              "date": "10-15",
              "group": "2026-10",
              "lane": "test",
              "title": "test: cover complete adapter candidate dependencies and current host config",
              "items": [
                "autumn",
                "48ed8931dc"
              ],
              "status": "done",
              "evidence": "git 48ed8931"
            },
            {
              "v": "1ebf59b3",
              "date": "10-15",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: describe symbolic input capacity and physical return contracts",
              "items": [
                "autumn",
                "1ebf59b3e2"
              ],
              "status": "done",
              "evidence": "git 1ebf59b3"
            },
            {
              "v": "5fb82e52",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: wake returned-state consumers without rescanning the execution graph",
              "items": [
                "autumn",
                "5fb82e52c8"
              ],
              "status": "done",
              "evidence": "git 5fb82e52"
            },
            {
              "v": "5df062b8",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: batch exact packing query accounting",
              "items": [
                "autumn",
                "5df062b807"
              ],
              "status": "done",
              "evidence": "git 5df062b8"
            },
            {
              "v": "17089fa3",
              "date": "10-15",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: schedule fractional packing neighborhoods from structure and outcomes",
              "items": [
                "autumn",
                "17089fa397"
              ],
              "status": "done",
              "evidence": "git 17089fa3"
            },
            {
              "v": "5a8f8a1f",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: size fractional packing index leaves by row count",
              "items": [
                "autumn",
                "5a8f8a1f00"
              ],
              "status": "done",
              "evidence": "git 5a8f8a1f"
            },
            {
              "v": "108f5da1",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse packing bounds and schedule repairs by remaining work",
              "items": [
                "autumn",
                "108f5da1e4"
              ],
              "status": "done",
              "evidence": "git 108f5da1"
            },
            {
              "v": "22c0ca78",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse suffix activities and batch query accounting",
              "items": [
                "autumn",
                "22c0ca789b"
              ],
              "status": "done",
              "evidence": "git 22c0ca78"
            },
            {
              "v": "9e4d52c4",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse physical topology across recipe alternatives",
              "items": [
                "autumn",
                "9e4d52c4fa"
              ],
              "status": "done",
              "evidence": "git 9e4d52c4"
            },
            {
              "v": "43debb11",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: add exact pair bounds to retained packing searches",
              "items": [
                "autumn",
                "43debb11f7"
              ],
              "status": "done",
              "evidence": "git 43debb11"
            },
            {
              "v": "5f928cc0",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve compact state restoration and physical tool multiplicity",
              "items": [
                "autumn",
                "5f928cc041"
              ],
              "status": "done",
              "evidence": "git 5f928cc0"
            },
            {
              "v": "d71be46e",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain physical tool allocation and repair capacity proposals",
              "items": [
                "autumn",
                "d71be46e89"
              ],
              "status": "done",
              "evidence": "git d71be46e"
            },
            {
              "v": "21e467a0",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: share physical tools across captured state rules",
              "items": [
                "autumn",
                "21e467a05e"
              ],
              "status": "done",
              "evidence": "git 21e467a0"
            },
            {
              "v": "1142e40d",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: index active DAG consumers for resource wakeups",
              "items": [
                "autumn",
                "1142e40d41"
              ],
              "status": "done",
              "evidence": "git 1142e40d"
            },
            {
              "v": "fe549ae1",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: restore witnessed tool-state cycles without per-use expansion",
              "items": [
                "autumn",
                "fe549ae167"
              ],
              "status": "done",
              "evidence": "git fe549ae1"
            },
            {
              "v": "41c499fc",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse witnessed state words across auxiliary loops",
              "items": [
                "autumn",
                "41c499fc2e"
              ],
              "status": "done",
              "evidence": "git 41c499fc"
            },
            {
              "v": "79752b62",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: compress witnessed cycles across scheduling passes",
              "items": [
                "autumn",
                "79752b6293"
              ],
              "status": "done",
              "evidence": "git 79752b62"
            },
            {
              "v": "5ab5fe97",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover physical state orders with retained recipe counts",
              "items": [
                "autumn",
                "5ab5fe9746"
              ],
              "status": "done",
              "evidence": "git 5ab5fe97"
            },
            {
              "v": "4d7b7bf9",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retry owned tool assignments after eligibility failures",
              "items": [
                "autumn",
                "4d7b7bf9c9"
              ],
              "status": "done",
              "evidence": "git 4d7b7bf9"
            },
            {
              "v": "0345ef2b",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover omitted cross-rule state candidates",
              "items": [
                "autumn",
                "0345ef2bcf"
              ],
              "status": "done",
              "evidence": "git 0345ef2b"
            },
            {
              "v": "bc921742",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: select bounded state support from large captured catalogs",
              "items": [
                "autumn",
                "bc921742e7"
              ],
              "status": "done",
              "evidence": "git bc921742"
            },
            {
              "v": "3fe77fff",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse captured producer indexes and retain state discovery",
              "items": [
                "autumn",
                "3fe77fff3c"
              ],
              "status": "done",
              "evidence": "git 3fe77fff"
            },
            {
              "v": "19e94e45",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse state supports and retain bounded recovery progress",
              "items": [
                "autumn",
                "19e94e45a5"
              ],
              "status": "done",
              "evidence": "git 19e94e45"
            },
            {
              "v": "53db074d",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse verified stock keys in captured state planning",
              "items": [
                "autumn",
                "53db074da1"
              ],
              "status": "done",
              "evidence": "git 53db074d"
            },
            {
              "v": "8ca2d2dd",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse captured state producer boundaries across targets",
              "items": [
                "autumn",
                "8ca2d2ddcf"
              ],
              "status": "done",
              "evidence": "git 8ca2d2dd"
            },
            {
              "v": "43cb358e",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover exact tool states needed as materials",
              "items": [
                "autumn",
                "43cb358ed1"
              ],
              "status": "done",
              "evidence": "git 43cb358e"
            },
            {
              "v": "8b87c8bf",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover implicit state sources in large captured catalogs",
              "items": [
                "autumn",
                "8b87c8bf8e"
              ],
              "status": "done",
              "evidence": "git 8b87c8bf"
            },
            {
              "v": "f28cf136",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse captured state sources across targets",
              "items": [
                "autumn",
                "f28cf1365a"
              ],
              "status": "done",
              "evidence": "git f28cf136"
            },
            {
              "v": "a8288417",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain planning alternatives and discover full regressions",
              "items": [
                "autumn",
                "a828841788"
              ],
              "status": "done",
              "evidence": "git a8288417"
            },
            {
              "v": "0de80f31",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover whole-key tool plans from subset shortages",
              "items": [
                "autumn",
                "0de80f31a8"
              ],
              "status": "done",
              "evidence": "git 0de80f31"
            },
            {
              "v": "528a1238",
              "date": "10-17",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: prune fragmented whole-key entity allocations",
              "items": [
                "autumn",
                "528a123852"
              ],
              "status": "done",
              "evidence": "git 528a1238"
            },
            {
              "v": "966a566c",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover tool replacements after whole-key allocation failures",
              "items": [
                "autumn",
                "966a566cf5"
              ],
              "status": "done",
              "evidence": "git 966a566c"
            },
            {
              "v": "6b50fd6e",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover shared tool plans from whole-key fragmentation",
              "items": [
                "autumn",
                "6b50fd6e25"
              ],
              "status": "done",
              "evidence": "git 6b50fd6e"
            },
            {
              "v": "f4623f37",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: scope fragmented tool recovery to eligible cohorts",
              "items": [
                "autumn",
                "f4623f37a5"
              ],
              "status": "done",
              "evidence": "git f4623f37"
            },
            {
              "v": "ae27b703",
              "date": "10-17",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: repair auxiliary tool counts after scoped feedback",
              "items": [
                "autumn",
                "ae27b703bb"
              ],
              "status": "done",
              "evidence": "git ae27b703"
            },
            {
              "v": "1e4ec568",
              "date": "10-17",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: retain cohort matching across decreasing thresholds",
              "items": [
                "autumn",
                "1e4ec5689a"
              ],
              "status": "done",
              "evidence": "git 1e4ec568"
            },
            {
              "v": "358786c7",
              "date": "10-17",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: solve vector allocations with retained affine subproblems",
              "items": [
                "autumn",
                "358786c777"
              ],
              "status": "done",
              "evidence": "git 358786c7"
            },
            {
              "v": "4072bcd9",
              "date": "10-17",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: compose residual matching with vector allocation search",
              "items": [
                "autumn",
                "4072bcd9c7"
              ],
              "status": "done",
              "evidence": "git 4072bcd9"
            },
            {
              "v": "8ded255f",
              "date": "10-17",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: package CGSE 0.1.0 as an independently updatable engine",
              "items": [
                "autumn",
                "8ded255ff3"
              ],
              "status": "done",
              "evidence": "git 8ded255f"
            },
            {
              "v": "27f214a7",
              "date": "10-17",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: compile release artifacts without running full regressions",
              "items": [
                "autumn",
                "27f214a796"
              ],
              "status": "done",
              "evidence": "git 27f214a7"
            },
            {
              "v": "85a091fc",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve verified refill previews in CGSE 0.1.1",
              "items": [
                "autumn",
                "85a091fce1"
              ],
              "status": "done",
              "evidence": "git 85a091fc"
            },
            {
              "v": "be15e57a",
              "date": "10-18",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: bundle AE dump into the CGSE Forge mod",
              "items": [
                "autumn",
                "be15e57a31"
              ],
              "status": "done",
              "evidence": "git be15e57a"
            },
            {
              "v": "b009f702",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: expand missing previews to terminal supplies in CGSE 0.1.2",
              "items": [
                "autumn",
                "b009f70256"
              ],
              "status": "done",
              "evidence": "git b009f702"
            },
            {
              "v": "3c15a002",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: gate vector allocation by structure and preserve search balance",
              "items": [
                "autumn",
                "3c15a002a8"
              ],
              "status": "done",
              "evidence": "git 3c15a002"
            },
            {
              "v": "d15bd4a9",
              "date": "10-18",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: retain bounded group exchange scouts without replacing count walks",
              "items": [
                "autumn",
                "d15bd4a995"
              ],
              "status": "done",
              "evidence": "git d15bd4a9"
            },
            {
              "v": "6346fdf5",
              "date": "10-18",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: reuse affine candidates after failed residual allocations",
              "items": [
                "autumn",
                "6346fdf5b1"
              ],
              "status": "done",
              "evidence": "git 6346fdf5"
            },
            {
              "v": "7df9bf67",
              "date": "10-18",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: enumerate stalled residual lattices within quantity bounds",
              "items": [
                "autumn",
                "7df9bf677b"
              ],
              "status": "done",
              "evidence": "git 7df9bf67"
            },
            {
              "v": "c22673dd",
              "date": "10-18",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: reuse lattice box search for small initial allocations",
              "items": [
                "autumn",
                "c22673dd04"
              ],
              "status": "done",
              "evidence": "git c22673dd"
            },
            {
              "v": "dc635259",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: revisit exact matching after bounded lattice misses",
              "items": [
                "autumn",
                "dc63525954"
              ],
              "status": "done",
              "evidence": "git dc635259"
            },
            {
              "v": "a945e37f",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve specialized tool lifetime during state recovery",
              "items": [
                "autumn",
                "a945e37ffa"
              ],
              "status": "done",
              "evidence": "git a945e37f"
            },
            {
              "v": "8ef89118",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reorder state operations after shared lifetime loss",
              "items": [
                "autumn",
                "8ef89118b0"
              ],
              "status": "done",
              "evidence": "git 8ef89118"
            },
            {
              "v": "8b6d15e3",
              "date": "10-18",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: guide state order recovery with bounded interference analysis",
              "items": [
                "autumn",
                "8b6d15e3f1"
              ],
              "status": "done",
              "evidence": "git 8b6d15e3"
            },
            {
              "v": "267de751",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: distinguish unequal tool lifetime losses during choice recovery",
              "items": [
                "autumn",
                "267de7511b"
              ],
              "status": "done",
              "evidence": "git 267de751"
            },
            {
              "v": "7b124212",
              "date": "10-18",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: optimize shared tool matching within choice feedback",
              "items": [
                "autumn",
                "7b124212ae"
              ],
              "status": "done",
              "evidence": "git 7b124212"
            },
            {
              "v": "02ba4119",
              "date": "10-18",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: optimize equal-size whole tool cohorts for 0.1.4",
              "items": [
                "autumn",
                "02ba41194d"
              ],
              "status": "done",
              "evidence": "git 02ba4119"
            },
            {
              "v": "3e84a21f",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover funded tool stock omitted by capacity proposals",
              "items": [
                "autumn",
                "3e84a21fb4"
              ],
              "status": "done",
              "evidence": "git 3e84a21f"
            },
            {
              "v": "f2efe060",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: fund missing tool manufacture in state proposals",
              "items": [
                "autumn",
                "f2efe060cb"
              ],
              "status": "done",
              "evidence": "git f2efe060"
            },
            {
              "v": "4f3d3957",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: finish bounded tool restoration without duplicate work",
              "items": [
                "autumn",
                "4f3d395778"
              ],
              "status": "done",
              "evidence": "git 4f3d3957"
            },
            {
              "v": "beb29d22",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: prove forced net production before gross bookkeeping",
              "items": [
                "autumn",
                "beb29d226b"
              ],
              "status": "done",
              "evidence": "git beb29d22"
            },
            {
              "v": "4c50336d",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: streamline state restoration and batch summary continuations",
              "items": [
                "autumn",
                "4c50336dc2"
              ],
              "status": "done",
              "evidence": "git 4c50336d"
            },
            {
              "v": "224e9172",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: prune impossible selected output views before ordering",
              "items": [
                "autumn",
                "224e917264"
              ],
              "status": "done",
              "evidence": "git 224e9172"
            },
            {
              "v": "5523ac2c",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve refill proofs and compare supply candidates",
              "items": [
                "autumn",
                "5523ac2cf1"
              ],
              "status": "done",
              "evidence": "git 5523ac2c"
            },
            {
              "v": "5111cc5f",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: factor refill producer support and bound rank continuations",
              "items": [
                "autumn",
                "5111cc5fa9"
              ],
              "status": "done",
              "evidence": "git 5111cc5f"
            },
            {
              "v": "c5daee40",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: yield refill candidate scans and transfer completed plan builders",
              "items": [
                "autumn",
                "c5daee40e2"
              ],
              "status": "done",
              "evidence": "git c5daee40"
            },
            {
              "v": "43e536e2",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: stream verifier keys and reuse immutable recipe return analysis",
              "items": [
                "autumn",
                "43e536e297"
              ],
              "status": "done",
              "evidence": "git 43e536e2"
            },
            {
              "v": "b5306e23",
              "date": "10-18",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: refine refill bills with bounded stock-funded source mixtures",
              "items": [
                "autumn",
                "b5306e238f"
              ],
              "status": "done",
              "evidence": "git b5306e23"
            },
            {
              "v": "26929196",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: prune surplus firings from verified refill plans",
              "items": [
                "autumn",
                "26929196d6"
              ],
              "status": "done",
              "evidence": "git 26929196"
            },
            {
              "v": "9206a32d",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recognize multi-recipe feedback in refill word pruning",
              "items": [
                "autumn",
                "9206a32df4"
              ],
              "status": "done",
              "evidence": "git 9206a32d"
            },
            {
              "v": "41786e5c",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: refine cyclic refill supplies with bounded prefix witnesses",
              "items": [
                "autumn",
                "41786e5cef"
              ],
              "status": "done",
              "evidence": "git 41786e5c"
            },
            {
              "v": "438b97f6",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: compile exact chain shortcuts for cyclic refill search",
              "items": [
                "autumn",
                "438b97f6b4"
              ],
              "status": "done",
              "evidence": "git 438b97f6"
            },
            {
              "v": "36de7978",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: size witnessed refill loops at exact supply breakpoints",
              "items": [
                "autumn",
                "36de797869"
              ],
              "status": "done",
              "evidence": "git 36de7978"
            },
            {
              "v": "84e38fe2",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: explain refill boundaries with an independent diagnostic budget",
              "items": [
                "autumn",
                "84e38fe226"
              ],
              "status": "done",
              "evidence": "git 84e38fe2"
            },
            {
              "v": "f15f5dd7",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: retain bounded verified refill supply alternatives",
              "items": [
                "autumn",
                "f15f5dd7bb"
              ],
              "status": "done",
              "evidence": "git f15f5dd7"
            },
            {
              "v": "6bde6275",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: complete refill cycles across internal entry points",
              "items": [
                "autumn",
                "6bde62756d"
              ],
              "status": "done",
              "evidence": "git 6bde6275"
            },
            {
              "v": "c66c3ca8",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: prune repeated flat refill blocks within the retained bill",
              "items": [
                "autumn",
                "c66c3ca8e0"
              ],
              "status": "done",
              "evidence": "git c66c3ca8"
            },
            {
              "v": "e70fe2bb",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: skip unused production totals in refill witness verification",
              "items": [
                "autumn",
                "e70fe2bb4d"
              ],
              "status": "done",
              "evidence": "git e70fe2bb"
            },
            {
              "v": "2292a4b4",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: stream recipe ports during refill word pruning",
              "items": [
                "autumn",
                "2292a4b48f"
              ],
              "status": "done",
              "evidence": "git 2292a4b4"
            },
            {
              "v": "5b96d576",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover tight-budget fallback with compact refill goals",
              "items": [
                "autumn",
                "5b96d576e8"
              ],
              "status": "done",
              "evidence": "git 5b96d576"
            },
            {
              "v": "e66304cb",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: schedule small execution frontiers during stock-count handoff",
              "items": [
                "autumn",
                "e66304cba2"
              ],
              "status": "done",
              "evidence": "git e66304cb"
            },
            {
              "v": "f56c267f",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse verified fallback summaries within refill budgets",
              "items": [
                "autumn",
                "f56c267f27"
              ],
              "status": "done",
              "evidence": "git f56c267f"
            },
            {
              "v": "def8f17c",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: refine long refill loops with exact tandem anchors",
              "items": [
                "autumn",
                "def8f17c67"
              ],
              "status": "done",
              "evidence": "git def8f17c"
            },
            {
              "v": "6fa43837",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: streamline refill cursors and structural scheduling",
              "items": [
                "autumn",
                "6fa4383726"
              ],
              "status": "done",
              "evidence": "git 6fa43837"
            },
            {
              "v": "4f8b6213",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: refine outer refill loops hidden by inner repeats",
              "items": [
                "autumn",
                "4f8b6213d5"
              ],
              "status": "done",
              "evidence": "git 4f8b6213"
            },
            {
              "v": "c62e38d0",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reduce structurally equal composite refill loops",
              "items": [
                "autumn",
                "c62e38d073"
              ],
              "status": "done",
              "evidence": "git c62e38d0"
            },
            {
              "v": "4d3974a5",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: normalize refill words and prune separated spans",
              "items": [
                "autumn",
                "4d3974a535"
              ],
              "status": "done",
              "evidence": "git 4d3974a5"
            },
            {
              "v": "21672d06",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: refine accepted refill loops by exact periods",
              "items": [
                "autumn",
                "21672d0681"
              ],
              "status": "done",
              "evidence": "git 21672d06"
            },
            {
              "v": "f66ae58a",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: defer vector allocation repairs until ordinary retries fail",
              "items": [
                "autumn",
                "f66ae58a35"
              ],
              "status": "done",
              "evidence": "git f66ae58a"
            },
            {
              "v": "ee56a690",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve compiled allocation completion opportunities",
              "items": [
                "autumn",
                "ee56a690ca"
              ],
              "status": "done",
              "evidence": "git ee56a690"
            },
            {
              "v": "180b460f",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: repair wide vector allocations with bounded neighborhoods",
              "items": [
                "autumn",
                "180b460f53"
              ],
              "status": "done",
              "evidence": "git 180b460f"
            },
            {
              "v": "15cb1152",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: repair interior allocations with bounded residual service",
              "items": [
                "autumn",
                "15cb1152a7"
              ],
              "status": "done",
              "evidence": "git 15cb1152"
            },
            {
              "v": "1807a61a",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: admit wide multidimensional allocation domains",
              "items": [
                "autumn",
                "1807a61a5a"
              ],
              "status": "done",
              "evidence": "git 1807a61a"
            },
            {
              "v": "e4ebf301",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: schedule packing suffix reuse by construction cost",
              "items": [
                "autumn",
                "e4ebf3019c"
              ],
              "status": "done",
              "evidence": "git e4ebf301"
            },
            {
              "v": "53dbda97",
              "date": "10-20",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: finish restored tool plans within the parent allowance",
              "items": [
                "autumn",
                "53dbda9744"
              ],
              "status": "done",
              "evidence": "git 53dbda97"
            },
            {
              "v": "03f971e4",
              "date": "10-20",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain packing frontiers across bounded repair phases",
              "items": [
                "autumn",
                "03f971e4fe"
              ],
              "status": "done",
              "evidence": "git 03f971e4"
            },
            {
              "v": "720a8141",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse exact word summaries in refill refinement",
              "items": [
                "autumn",
                "720a814101"
              ],
              "status": "done",
              "evidence": "git 720a8141"
            },
            {
              "v": "f9737127",
              "date": "10-20",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: combine exact equality supports with retained count search",
              "items": [
                "autumn",
                "f973712721"
              ],
              "status": "done",
              "evidence": "git f9737127"
            },
            {
              "v": "2f0bf3ce",
              "date": "10-20",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: combine asymmetric packing exchanges with retained search",
              "items": [
                "autumn",
                "2f0bf3cede"
              ],
              "status": "done",
              "evidence": "git 2f0bf3ce"
            },
            {
              "v": "d540c900",
              "date": "10-20",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: release CGSE 0.1.5 after full regression",
              "items": [
                "autumn",
                "d540c9003d"
              ],
              "status": "done",
              "evidence": "git d540c900"
            },
            {
              "v": "43611f38",
              "date": "10-20",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: compare complete multihop refill routes",
              "items": [
                "autumn",
                "43611f38c3"
              ],
              "status": "done",
              "evidence": "git 43611f38"
            },
            {
              "v": "14b5e7cc",
              "date": "10-20",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: jointly reallocate bound refill sources",
              "items": [
                "autumn",
                "14b5e7ccca"
              ],
              "status": "done",
              "evidence": "git 14b5e7cc"
            },
            {
              "v": "93dceeb0",
              "date": "10-20",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: preserve interior equality domains in private count search",
              "items": [
                "autumn",
                "93dceeb01c"
              ],
              "status": "done",
              "evidence": "git 93dceeb0"
            },
            {
              "v": "27672879",
              "date": "10-20",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: stage wider equality support for CGSE 0.1.6",
              "items": [
                "autumn",
                "2767287930"
              ],
              "status": "done",
              "evidence": "git 27672879"
            },
            {
              "v": "eb5589ea",
              "date": "10-20",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: reuse scoped PB conflicts in retained packing search",
              "items": [
                "autumn",
                "eb5589eacf"
              ],
              "status": "done",
              "evidence": "git eb5589ea"
            },
            {
              "v": "a95d0835",
              "date": "10-20",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: defer retained LP branching until packing repair completes",
              "items": [
                "autumn",
                "a95d0835dc"
              ],
              "status": "done",
              "evidence": "git a95d0835"
            },
            {
              "v": "46b61089",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: propagate exact prices in retained packing LP search",
              "items": [
                "autumn",
                "46b6108930"
              ],
              "status": "done",
              "evidence": "git 46b61089"
            },
            {
              "v": "a15f71bd",
              "date": "10-20",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: refine refill plans with joint coproduct source counts",
              "items": [
                "autumn",
                "a15f71bd2f"
              ],
              "status": "done",
              "evidence": "git a15f71bd"
            },
            {
              "v": "b99fe6f8",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse parent packing bases and exact price products",
              "items": [
                "autumn",
                "b99fe6f85b"
              ],
              "status": "done",
              "evidence": "git b99fe6f8"
            },
            {
              "v": "810a489e",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: reuse exact equality support word workspace",
              "items": [
                "autumn",
                "810a489e67"
              ],
              "status": "done",
              "evidence": "git 810a489e"
            },
            {
              "v": "1e1fef91",
              "date": "10-21",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: preserve exact inventory and verify base-material refill routes",
              "items": [
                "autumn",
                "1e1fef9163"
              ],
              "status": "done",
              "evidence": "git 1e1fef91"
            },
            {
              "v": "b6a23641",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: treat returned tools as finite refill leaves",
              "items": [
                "autumn",
                "b6a236414d"
              ],
              "status": "done",
              "evidence": "git b6a23641"
            },
            {
              "v": "5502802f",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: bound optional refill search and retain integration regressions",
              "items": [
                "autumn",
                "5502802ff0"
              ],
              "status": "done",
              "evidence": "git 5502802f"
            },
            {
              "v": "f36bda7a",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain cycle source paths in refill visualization",
              "items": [
                "autumn",
                "f36bda7ac9"
              ],
              "status": "done",
              "evidence": "git f36bda7a"
            },
            {
              "v": "c7d235ac",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: continue refill planning past oversized seed proposals",
              "items": [
                "autumn",
                "c7d235acdb"
              ],
              "status": "done",
              "evidence": "git c7d235ac"
            },
            {
              "v": "1df21d41",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain verified refill previews across catalyst retries",
              "items": [
                "autumn",
                "1df21d41e7"
              ],
              "status": "done",
              "evidence": "git 1df21d41"
            },
            {
              "v": "a503376f",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: strengthen cyclic planning and retain verified refill plans",
              "items": [
                "autumn",
                "a503376f26"
              ],
              "status": "done",
              "evidence": "git a503376f"
            },
            {
              "v": "98f77e14",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: give count allocation a fair search budget",
              "items": [
                "autumn",
                "98f77e1458"
              ],
              "status": "done",
              "evidence": "git 98f77e14"
            },
            {
              "v": "93f9fe87",
              "date": "10-24",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve cyclic startup and strengthen bounded count solving",
              "items": [
                "autumn",
                "93f9fe87e0"
              ],
              "status": "done",
              "evidence": "git 93f9fe87"
            },
            {
              "v": "8ba2be5b",
              "date": "10-24",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: advance CGSE to 0.2.3 after host synchronization",
              "items": [
                "autumn",
                "8ba2be5bb7"
              ],
              "status": "done",
              "evidence": "git 8ba2be5b"
            },
            {
              "v": "f4a72506",
              "date": "10-24",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain cyclic count candidates across stock boundaries",
              "items": [
                "autumn",
                "f4a7250659"
              ],
              "status": "done",
              "evidence": "git f4a72506"
            },
            {
              "v": "f7221d63",
              "date": "10-24",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: adapt cycle scheduling to observed material returns",
              "items": [
                "autumn",
                "f7221d6385"
              ],
              "status": "done",
              "evidence": "git f7221d63"
            },
            {
              "v": "4e28d264",
              "date": "10-25",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: solve sparse equality candidates with bounded messages",
              "items": [
                "autumn",
                "4e28d264b0"
              ],
              "status": "done",
              "evidence": "git 4e28d264"
            },
            {
              "v": "03506c90",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: restrict equality messages to target support windows",
              "items": [
                "autumn",
                "03506c9072"
              ],
              "status": "done",
              "evidence": "git 03506c90"
            },
            {
              "v": "b90fdc14",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve packing completion across nested search schedulers",
              "items": [
                "autumn",
                "b90fdc141a"
              ],
              "status": "done",
              "evidence": "git b90fdc14"
            },
            {
              "v": "f05e8cdf",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: keep planning coordinator within JIT compilation size limit",
              "items": [
                "autumn",
                "f05e8cdfb1"
              ],
              "status": "done",
              "evidence": "git f05e8cdf"
            },
            {
              "v": "df5f7429",
              "date": "10-26",
              "group": "2026-10",
              "lane": "test",
              "title": "test: distinguish refill source references from executed cycles",
              "items": [
                "autumn",
                "df5f7429ce"
              ],
              "status": "done",
              "evidence": "git df5f7429"
            },
            {
              "v": "f4c7c051",
              "date": "10-26",
              "group": "2026-10",
              "lane": "test",
              "title": "test: cover confirmation retries and stock-sensitive catalog reuse",
              "items": [
                "autumn",
                "f4c7c05191"
              ],
              "status": "done",
              "evidence": "git f4c7c051"
            },
            {
              "v": "86414a13",
              "date": "10-26",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: bump CGSE to 0.3.1",
              "items": [
                "autumn",
                "86414a13fc"
              ],
              "status": "done",
              "evidence": "git 86414a13"
            },
            {
              "v": "94b76eca",
              "date": "10-26",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: stabilize adaptive cycle scheduling and preserve working stock",
              "items": [
                "autumn",
                "94b76ecab2"
              ],
              "status": "done",
              "evidence": "git 94b76eca"
            },
            {
              "v": "980842aa",
              "date": "10-26",
              "group": "2026-10",
              "lane": "test",
              "title": "test: cover virtual supply and inventory reservation ownership",
              "items": [
                "autumn",
                "980842aa02"
              ],
              "status": "done",
              "evidence": "git 980842aa"
            },
            {
              "v": "fe7b06de",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain verified plans and repair bounded count candidates",
              "items": [
                "autumn",
                "fe7b06de9a"
              ],
              "status": "done",
              "evidence": "git fe7b06de"
            },
            {
              "v": "8fbee1ee",
              "date": "10-27",
              "group": "2026-10",
              "lane": "other",
              "title": "perf: avoid redundant count arithmetic and plan folding",
              "items": [
                "autumn",
                "8fbee1ee3b"
              ],
              "status": "done",
              "evidence": "git 8fbee1ee"
            },
            {
              "v": "2fbe77bf",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: support inventory-owned requests in bundled AE diagnostics",
              "items": [
                "autumn",
                "2fbe77bf88"
              ],
              "status": "done",
              "evidence": "git 2fbe77bf"
            },
            {
              "v": "b7c4a810",
              "date": "10-27",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: advance CGSE to 0.3.2 after host synchronization",
              "items": [
                "autumn",
                "b7c4a81036"
              ],
              "status": "done",
              "evidence": "git b7c4a810"
            },
            {
              "v": "034f4e63",
              "date": "11-05",
              "group": "2026-11",
              "lane": "chore",
              "title": "build: ignore project-local runtime directory",
              "items": [
                "Rushiera",
                "034f4e6307"
              ],
              "status": "done",
              "evidence": "git 034f4e63"
            },
            {
              "v": "8eaecd0e",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountAffineLattice admission refusals",
              "items": [
                "Rushiera",
                "8eaecd0ef8"
              ],
              "status": "done",
              "evidence": "git 8eaecd0e"
            },
            {
              "v": "879d4bd7",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountBinPackingSearch admission refusals",
              "items": [
                "Rushiera",
                "879d4bd752"
              ],
              "status": "done",
              "evidence": "git 879d4bd7"
            },
            {
              "v": "63703245",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountBoolean refusals; expose refusal state on reserve failure",
              "items": [
                "Rushiera",
                "63703245ea"
              ],
              "status": "done",
              "evidence": "git 63703245"
            },
            {
              "v": "b0e2b3c0",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountBranchProbe admission refusals",
              "items": [
                "Rushiera",
                "b0e2b3c046"
              ],
              "status": "done",
              "evidence": "git b0e2b3c0"
            },
            {
              "v": "f72f7dfc",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountCardinalitySearch admission refusals",
              "items": [
                "Rushiera",
                "f72f7dfcea"
              ],
              "status": "done",
              "evidence": "git f72f7dfc"
            },
            {
              "v": "2dd61552",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountCdcl admission refusals",
              "items": [
                "Rushiera",
                "2dd6155230"
              ],
              "status": "done",
              "evidence": "git 2dd61552"
            },
            {
              "v": "b1fa02f3",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountChainSchedule refusal paths (rounds limit and reserve failure)",
              "items": [
                "Rushiera",
                "b1fa02f34d"
              ],
              "status": "done",
              "evidence": "git b1fa02f3"
            },
            {
              "v": "1457acd8",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountComponents refusal paths",
              "items": [
                "Rushiera",
                "1457acd8f7"
              ],
              "status": "done",
              "evidence": "git 1457acd8"
            },
            {
              "v": "c1c0842d",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountCongruence admission refusals",
              "items": [
                "Rushiera",
                "c1c0842d6e"
              ],
              "status": "done",
              "evidence": "git c1c0842d"
            },
            {
              "v": "acf75eec",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: add default refusal() third state to CountContinuation",
              "items": [
                "Rushiera",
                "acf75eec5e"
              ],
              "status": "done",
              "evidence": "git acf75eec"
            },
            {
              "v": "b69d659a",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountCoverCuts admission refusals",
              "items": [
                "Rushiera",
                "b69d659acf"
              ],
              "status": "done",
              "evidence": "git b69d659a"
            },
            {
              "v": "39de2a06",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountDecisionDiagram refusals; widen domain-width gate to 16",
              "items": [
                "Rushiera",
                "39de2a0609"
              ],
              "status": "done",
              "evidence": "git 39de2a06"
            },
            {
              "v": "af16d29f",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "determinism: use exact residual tie-break in CountDemandProjection.repair",
              "items": [
                "Rushiera",
                "af16d29f61"
              ],
              "status": "done",
              "evidence": "git af16d29f"
            },
            {
              "v": "492e4084",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountDiophantine refusals; note multi-shape conflicts",
              "items": [
                "Rushiera",
                "492e408448"
              ],
              "status": "done",
              "evidence": "git 492e4084"
            },
            {
              "v": "5c038932",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountDomainSearch refusals; add trial face contract",
              "items": [
                "Rushiera",
                "5c03893202"
              ],
              "status": "done",
              "evidence": "git 5c038932"
            },
            {
              "v": "81bb7386",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountHall admission refusals",
              "items": [
                "Rushiera",
                "81bb738657"
              ],
              "status": "done",
              "evidence": "git 81bb7386"
            },
            {
              "v": "2e98cee7",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountHermite admission refusals",
              "items": [
                "Rushiera",
                "2e98cee720"
              ],
              "status": "done",
              "evidence": "git 2e98cee7"
            },
            {
              "v": "c7d47beb",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountHittingSet admission refusals",
              "items": [
                "Rushiera",
                "c7d47beb84"
              ],
              "status": "done",
              "evidence": "git c7d47beb"
            },
            {
              "v": "28d2f9a9",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "determinism: expose CountJump.ratio for exact residual comparison",
              "items": [
                "Rushiera",
                "28d2f9a949"
              ],
              "status": "done",
              "evidence": "git 28d2f9a9"
            },
            {
              "v": "829c94b5",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountKernelSearch refusal and abandon paths",
              "items": [
                "Rushiera",
                "829c94b5d9"
              ],
              "status": "done",
              "evidence": "git 829c94b5"
            },
            {
              "v": "012904d7",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: expose CountMeetInMiddle refusal state on quota or reserve failure",
              "items": [
                "Rushiera",
                "012904d7a2"
              ],
              "status": "done",
              "evidence": "git 012904d7"
            },
            {
              "v": "14dfac09",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountObbt admission refusals",
              "items": [
                "Rushiera",
                "14dfac09d3"
              ],
              "status": "done",
              "evidence": "git 14dfac09"
            },
            {
              "v": "d6ecc9c2",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountPacking admission refusals",
              "items": [
                "Rushiera",
                "d6ecc9c259"
              ],
              "status": "done",
              "evidence": "git d6ecc9c2"
            },
            {
              "v": "c1983af8",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountPackingLpSearch admission refusals",
              "items": [
                "Rushiera",
                "c1983af800"
              ],
              "status": "done",
              "evidence": "git c1983af8"
            },
            {
              "v": "f6609287",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountPartition admission refusals",
              "items": [
                "Rushiera",
                "f6609287fb"
              ],
              "status": "done",
              "evidence": "git f6609287"
            },
            {
              "v": "65ddb799",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountProbing admission refusals",
              "items": [
                "Rushiera",
                "65ddb799be"
              ],
              "status": "done",
              "evidence": "git 65ddb799"
            },
            {
              "v": "593283d2",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: wire trial face into CountQuickSolve",
              "items": [
                "Rushiera",
                "593283d2d0"
              ],
              "status": "done",
              "evidence": "git 593283d2"
            },
            {
              "v": "2ae7bb8d",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountRangedKernel refusal paths",
              "items": [
                "Rushiera",
                "2ae7bb8d6d"
              ],
              "status": "done",
              "evidence": "git 2ae7bb8d"
            },
            {
              "v": "5949a2ec",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: expose CountSeparator refusal state on mixed admission gate",
              "items": [
                "Rushiera",
                "5949a2ec2a"
              ],
              "status": "done",
              "evidence": "git 5949a2ec"
            },
            {
              "v": "3dbd34dc",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountSoftSearch refusals; consume trial face predicate",
              "items": [
                "Rushiera",
                "3dbd34dc02"
              ],
              "status": "done",
              "evidence": "git 3dbd34dc"
            },
            {
              "v": "d784828c",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute CountSymmetry admission refusals",
              "items": [
                "Rushiera",
                "d784828c05"
              ],
              "status": "done",
              "evidence": "git d784828c"
            },
            {
              "v": "20f88bb7",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: aggregate specialist refusal state in CountViewSearch",
              "items": [
                "Rushiera",
                "20f88bb724"
              ],
              "status": "done",
              "evidence": "git 20f88bb7"
            },
            {
              "v": "f7f8b2ec",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: attribute GraphOutputView admission refusals",
              "items": [
                "Rushiera",
                "f7f8b2ecb5"
              ],
              "status": "done",
              "evidence": "git f7f8b2ec"
            },
            {
              "v": "6d8e10f6",
              "date": "11-05",
              "group": "2026-11",
              "lane": "test",
              "title": "tests: cover CountDemandProjection repair tie-break with non-finite weights",
              "items": [
                "Rushiera",
                "6d8e10f613"
              ],
              "status": "done",
              "evidence": "git 6d8e10f6"
            },
            {
              "v": "fb5f1c5c",
              "date": "11-05",
              "group": "2026-11",
              "lane": "test",
              "title": "tests: report REFUSED reason and refused count in CountModelRegression",
              "items": [
                "Rushiera",
                "fb5f1c5ce7"
              ],
              "status": "done",
              "evidence": "git fb5f1c5c"
            },
            {
              "v": "7f7fa811",
              "date": "11-05",
              "group": "2026-11",
              "lane": "test",
              "title": "tests: carry refusal component through CountModelReplay results",
              "items": [
                "Rushiera",
                "7f7fa811e1"
              ],
              "status": "done",
              "evidence": "git 7f7fa811"
            },
            {
              "v": "485a2293",
              "date": "11-05",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs: add fork README and project-notes collaboration snapshot",
              "items": [
                "Rushiera",
                "485a229383"
              ],
              "status": "done",
              "evidence": "git 485a2293"
            },
            {
              "v": "9e055506",
              "date": "11-08",
              "group": "2026-11",
              "lane": "fix",
              "title": "fix: publish the trial face verdict on every counted completion path",
              "items": [
                "Rushiera",
                "9e055506b4"
              ],
              "status": "done",
              "evidence": "git 9e055506"
            },
            {
              "v": "e6989787",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "diagnostics: keep attribution out of the bounded note ring and bucket exclusive coordinator work",
              "items": [
                "Rushiera",
                "e6989787b7"
              ],
              "status": "done",
              "evidence": "git e6989787"
            },
            {
              "v": "29439f9e",
              "date": "11-08",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs: record the exclusive-phase attribution correction",
              "items": [
                "Rushiera",
                "29439f9e7a"
              ],
              "status": "done",
              "evidence": "git 29439f9e"
            },
            {
              "v": "90934ed7",
              "date": "11-11",
              "group": "2026-11",
              "lane": "fix",
              "title": "fix: keep the trial face verdict through the symmetry stage",
              "items": [
                "Rushiera",
                "90934ed7c6"
              ],
              "status": "done",
              "evidence": "git 90934ed7"
            }
          ]
        }
      ]
    }
  ]
};
