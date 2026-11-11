window.ARCH = {
  "meta": {
    "project": "ECC",
    "title": "ECC 提交时间线",
    "sub": "3 次提交 · 2026-11 → 2026-11",
    "ver": "a1404507",
    "updated": "2026-11-11",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\ECC",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\ECC (branch master)"
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
              "v": "3eff256a",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "ECC: 兜底仓首提交（work 二开层，自 2026-11-09 起算；上游 raw 历史不计入）",
              "items": [
                "Rushiera",
                "3eff256a11"
              ],
              "status": "done",
              "evidence": "git 3eff256a"
            },
            {
              "v": "5b439045",
              "date": "11-09",
              "group": "2026-11",
              "lane": "chore",
              "title": "chore: 同步上游 main b38be6a7..d2ef2680（PR 治理 CI 六文件）",
              "items": [
                "Rushiera",
                "5b4390455b"
              ],
              "status": "done",
              "evidence": "git 5b439045"
            },
            {
              "v": "a1404507",
              "date": "11-09",
              "group": "2026-11",
              "lane": "feat",
              "title": "feat(tests): run-all 逐文件超时",
              "items": [
                "Rushiera",
                "a1404507aa"
              ],
              "status": "done",
              "evidence": "git a1404507"
            }
          ]
        }
      ]
    }
  ]
};
