window.ARCH = {
  "meta": {
    "project": "ThrottleStop",
    "title": "ThrottleStop 提交时间线",
    "sub": "4 次提交 · 2026-11 → 2026-11",
    "ver": "a75ae99",
    "updated": "2026-11-11",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\ThrottleStop",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\ThrottleStop (branch master)"
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
              "v": "f3a6f92",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "ThrottleStop: 兜底仓首提交（采集 / 控制 / 探针脚本 + 配置）",
              "items": [
                "Rushiera",
                "f3a6f92562"
              ],
              "status": "done",
              "evidence": "git f3a6f92"
            },
            {
              "v": "5477f55",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.9: 采集器 v5 丢秒自证与卡顿留证",
              "items": [
                "Rushiera",
                "5477f55627"
              ],
              "status": "done",
              "evidence": "git 5477f55"
            },
            {
              "v": "97a4746",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.16: collector v8 (self-harm fix) + clean boot baseline + ts_bench + perf-report 10/11",
              "items": [
                "Rushiera",
                "97a4746818"
              ],
              "status": "done",
              "evidence": "git 97a4746"
            },
            {
              "v": "a75ae99",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.17: supplement 12 + report index",
              "items": [
                "Rushiera",
                "a75ae992fc"
              ],
              "status": "done",
              "evidence": "git a75ae99"
            }
          ]
        }
      ]
    }
  ]
};
