window.ARCH = {
  "meta": {
    "project": "EidolonCGSS",
    "title": "EidolonCGSS 提交时间线",
    "sub": "2 次提交 · 2026-11 → 2026-11",
    "ver": "67022ca",
    "updated": "2026-11-11",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\eidolon-cgss",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\eidolon-cgss (branch Rushiera)"
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
              "v": "4ce0995",
              "date": "11-06",
              "group": "2026-11",
              "lane": "feat",
              "title": "加交接文档：现状、启动方式、已知问题和没做完的",
              "items": [
                "fork",
                "4ce0995c4e"
              ],
              "status": "done",
              "evidence": "git 4ce0995"
            },
            {
              "v": "67022ca",
              "date": "11-09",
              "group": "2026-11",
              "lane": "test",
              "title": "tests: pass adult_sheet slot so Character construction matches",
              "items": [
                "Rushiera",
                "67022cab82"
              ],
              "status": "done",
              "evidence": "git 67022ca"
            }
          ]
        }
      ]
    }
  ]
};
