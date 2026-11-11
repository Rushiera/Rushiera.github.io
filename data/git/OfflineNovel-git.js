window.ARCH = {
  "meta": {
    "project": "OfflineNovel",
    "title": "OfflineNovel 提交时间线",
    "sub": "11 次提交 · 2026-11 → 2026-11",
    "ver": "3bb8a50",
    "updated": "2026-11-11",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\OfflineNovel",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\OfflineNovel (branch master)"
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
              "v": "1d52499",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.1: OfflineNovel 立项 + AbyssPlayer 子产品（pak + 启动器）",
              "items": [
                "Rushiera",
                "1d52499cc3"
              ],
              "status": "done",
              "evidence": "git 1d52499"
            },
            {
              "v": "d851130",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.1: 工作区规范三件（README / 要求与判据 / index 处置）",
              "items": [
                "Rushiera",
                "d851130ac6"
              ],
              "status": "done",
              "evidence": "git d851130"
            },
            {
              "v": "e724a38",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.5: Senpri static-web package landing (885 vols / 903 files / 27.33 GB)",
              "items": [
                "Rushiera",
                "e724a38841"
              ],
              "status": "done",
              "evidence": "git e724a38"
            },
            {
              "v": "50672dc",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.3.1: pak 数据契约落地（map 补 CRC32 / verify 三层校验）",
              "items": [
                "Rushiera",
                "50672dc683"
              ],
              "status": "done",
              "evidence": "git 50672dc"
            },
            {
              "v": "c29235f",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.5.1: data contract (manifest p/v/o/l/c + vol atomicity) + Senpri manifest CRC upgrade",
              "items": [
                "Rushiera",
                "c29235f759"
              ],
              "status": "done",
              "evidence": "git c29235f"
            },
            {
              "v": "91c3539",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.7: 盒子形态归位",
              "items": [
                "Rushiera",
                "91c35396ee"
              ],
              "status": "done",
              "evidence": "git 91c3539"
            },
            {
              "v": "87886cc",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.8: pak 直读还原器 + 类型声明",
              "items": [
                "Rushiera",
                "87886ccb2f"
              ],
              "status": "done",
              "evidence": "git 87886cc"
            },
            {
              "v": "047cd2d",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.8: Abyss 类型生成器归位 + restore_pak 空地图守门",
              "items": [
                "Rushiera",
                "047cd2d34c"
              ],
              "status": "done",
              "evidence": "git 047cd2d"
            },
            {
              "v": "ec3d8ac",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.9: 复核轮——档案数字修正 + 原数据清理事实 + README 同步",
              "items": [
                "Rushiera",
                "ec3d8ac0b1"
              ],
              "status": "done",
              "evidence": "git ec3d8ac"
            },
            {
              "v": "8a5f481",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.12: Legeclo 启动链修复 + 全场景验收；并入 Senpri v0.10 / MistTrainGirls v0.11",
              "items": [
                "Rushiera",
                "8a5f4813ac"
              ],
              "status": "done",
              "evidence": "git 8a5f481"
            },
            {
              "v": "3bb8a50",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.13: Himegari 启动链修复（--port/实例复用/占用提示/api status）+ verify_scenes 数据面验收 + 角色鉴赏 ShowCh 与破图降级",
              "items": [
                "Rushiera",
                "3bb8a50a35"
              ],
              "status": "done",
              "evidence": "git 3bb8a50"
            }
          ]
        }
      ]
    }
  ]
};
