window.ARCH = {
  "meta": {
    "project": "BOSS直聘",
    "title": "BOSS直聘 提交时间线",
    "sub": "4 次提交 · 2026-11 → 2026-11",
    "ver": "46a1d2e",
    "updated": "2026-11-11",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\BOSS直聘",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\BOSS直聘 (branch master)"
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
              "v": "0d78402",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "BOSS直聘: 兜底仓首提交（套壳浏览器 + 采集脚本 + 项目档案）",
              "items": [
                "Rushiera",
                "0d78402477"
              ],
              "status": "done",
              "evidence": "git 0d78402"
            },
            {
              "v": "f30406b",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "档案：补仓库入口与历史取数根（并发协议 v0.173 同名轮）",
              "items": [
                "Rushiera",
                "f30406b456"
              ],
              "status": "done",
              "evidence": "git f30406b"
            },
            {
              "v": "f4151c7",
              "date": "11-09",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs: L3 首版与项目档案索引对齐",
              "items": [
                "Rushiera",
                "f4151c7756"
              ],
              "status": "done",
              "evidence": "git f4151c7"
            },
            {
              "v": "46a1d2e",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.20.2: L2 routing + history index",
              "items": [
                "Rushiera",
                "46a1d2ee79"
              ],
              "status": "done",
              "evidence": "git 46a1d2e"
            }
          ]
        }
      ]
    }
  ]
};
