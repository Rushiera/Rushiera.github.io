window.ARCH = {
  "meta": {
    "project": "并发协议",
    "title": "并发协议 提交时间线",
    "sub": "3 次提交 · 2026-11 → 2026-11",
    "ver": "2ec538b",
    "updated": "2026-11-09",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\并发协议",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\并发协议 (branch master)"
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
              "v": "5902301",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "并发协议: 兜底仓首提交（panel 源码 / witness 工具 / 任务卡 / 模板）",
              "items": [
                "Rushiera",
                "5902301315"
              ],
              "status": "done",
              "evidence": "git 5902301"
            },
            {
              "v": "32c2866",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "并发协议 v0.171: 见证者读 localGit 兜底仓（commits 端点三级解析 + 时间线脚本改以 git 目录判仓）",
              "items": [
                "Rushiera",
                "32c28661e9"
              ],
              "status": "done",
              "evidence": "git 32c2866"
            },
            {
              "v": "2ec538b",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.172: Commits 来源五态标注 + localgit 根按 id 解析",
              "items": [
                "Rushiera",
                "2ec538b09e"
              ],
              "status": "done",
              "evidence": "git 2ec538b"
            }
          ]
        }
      ]
    }
  ]
};
