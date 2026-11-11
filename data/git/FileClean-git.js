window.ARCH = {
  "meta": {
    "project": "FileClean",
    "title": "FileClean 提交时间线",
    "sub": "9 次提交 · 2026-11 → 2026-11",
    "ver": "d722970",
    "updated": "2026-11-11",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\FileClean",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\FileClean (branch master)"
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
              "v": "15403fe",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "挂载盘清理器: 兜底仓首提交（35 支脚本工具链）",
              "items": [
                "Rushiera",
                "15403fe461"
              ],
              "status": "done",
              "evidence": "git 15403fe"
            },
            {
              "v": "ed05bcb",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.9: 文件清理器形态拍板（TreeSize 逆向归档）",
              "items": [
                "Rushiera",
                "ed05bcbf3e"
              ],
              "status": "done",
              "evidence": "git ed05bcb"
            },
            {
              "v": "e94c0f8",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.11: 文件清理器 M0/M1（骨架+scan/index/report）",
              "items": [
                "Rushiera",
                "e94c0f8912"
              ],
              "status": "done",
              "evidence": "git e94c0f8"
            },
            {
              "v": "13a3dbb",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.12: 文件清理器 M2（dup/verify-hash/plan + 包组感知，36,808 组对账一致）",
              "items": [
                "Rushiera",
                "13a3dbbbff"
              ],
              "status": "done",
              "evidence": "git 13a3dbb"
            },
            {
              "v": "32a8ee2",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.13: M3 exec/verify/rollback 落地 + 小样本判据全绿",
              "items": [
                "Rushiera",
                "32a8ee2075"
              ],
              "status": "done",
              "evidence": "git 32a8ee2"
            },
            {
              "v": "c249d12",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.14 项目更名 FileClean + 工程根重组（csproj 扁平化 / legacy 旧链 / archive 历史产物）",
              "items": [
                "Rushiera",
                "c249d12603"
              ],
              "status": "done",
              "evidence": "git c249d12"
            },
            {
              "v": "527b616",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.14 修正：演练运行时数据（out-m2/data · out-m3/data · data-empty）不入库",
              "items": [
                "Rushiera",
                "527b616609"
              ],
              "status": "done",
              "evidence": "git 527b616"
            },
            {
              "v": "795f87d",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.16: C3 头+尾抽样 + R1 自检 + C1 覆盖率实测",
              "items": [
                "Rushiera",
                "795f87dcab"
              ],
              "status": "done",
              "evidence": "git 795f87d"
            },
            {
              "v": "d722970",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.19: 索引分片与引用列（--split / --refs / 产物排除）",
              "items": [
                "Rushiera",
                "d722970ce8"
              ],
              "status": "done",
              "evidence": "git d722970"
            }
          ]
        }
      ]
    }
  ]
};
