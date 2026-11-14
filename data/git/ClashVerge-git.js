window.ARCH = {
  "meta": {
    "project": "ClashVerge",
    "title": "ClashVerge 提交时间线",
    "sub": "4 次提交 · 2026-11 → 2026-11",
    "ver": "ef92df7",
    "updated": "2026-11-14",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\ClashVerge",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\ClashVerge (branch master)"
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
              "v": "835f219",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "ClashVerge: 兜底仓首提交（二开脚本 + 适配层 + 勘察报告）",
              "items": [
                "Rushiera",
                "835f219ce6"
              ],
              "status": "done",
              "evidence": "git 835f219"
            },
            {
              "v": "eb64093",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.50: mihomo-driver 控制台（9 项菜单 + relay 启停 + 断网预警）",
              "items": [
                "Rushiera",
                "eb64093ef8"
              ],
              "status": "done",
              "evidence": "git eb64093"
            },
            {
              "v": "f52e185",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.52: 驱动审核通过 + D 档只读 PASS + NAT step1 未闭合",
              "items": [
                "Rushiera",
                "f52e1850b4"
              ],
              "status": "done",
              "evidence": "git f52e185"
            },
            {
              "v": "ef92df7",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.70 compat: short 升级门禁加两道护栏（探过才算 / 无 >4KB 下行）+ 新增 dbg-host --short 与解析对照两个观测位点 + 四处过期纠错",
              "items": [
                "Rushiera",
                "ef92df7d35"
              ],
              "status": "done",
              "evidence": "git ef92df7"
            }
          ]
        }
      ]
    }
  ]
};
