window.ARCH = {
  "meta": {
    "project": "KkFetch",
    "title": "KkFetch 提交时间线",
    "sub": "11 次提交 · 2026-11 → 2026-11",
    "ver": "845c4d2",
    "updated": "2026-11-14",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\KkFetch",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\KkFetch (branch master)"
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
              "v": "5f846ce",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "KkFetch: fallback repo initial commit",
              "items": [
                "Rushiera",
                "5f846ce564"
              ],
              "status": "done",
              "evidence": "git 5f846ce"
            },
            {
              "v": "aac9d47",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.35: AngleSharp 1.10.2 升级与重发布（含 v0.34 robots 门）",
              "items": [
                "Rushiera",
                "aac9d4794e"
              ],
              "status": "done",
              "evidence": "git aac9d47"
            },
            {
              "v": "ab26237",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.36 · 面板徽标三段 / 再提及判据 / 帖子榜最后贴文 / 折叠 / 排版（改造前基线）",
              "items": [
                "Rushiera",
                "ab26237f6c"
              ],
              "status": "done",
              "evidence": "git ab26237"
            },
            {
              "v": "1ee2e56",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.37.1 · 三层程序集 + 进程内热重载（pid 不变）+ 撤写接口 token 门禁 + 单实例复用 + 外置单页（刷新生效）",
              "items": [
                "Rushiera",
                "1ee2e56ac8"
              ],
              "status": "done",
              "evidence": "git 1ee2e56"
            },
            {
              "v": "19f0cde",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.37.2 gofile 等待上限 6s→15s + 回执诊断按轮重置；.gitignore 修 web/ 误伤（补入 Core/Web 源码 5 件）；清 .old 产物与生成物",
              "items": [
                "Rushiera",
                "19f0cde35b"
              ],
              "status": "done",
              "evidence": "git 19f0cde"
            },
            {
              "v": "a6935bb",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "acs-surface 运行态摘出：state.json / port.txt / logs/current.log 退出索引（结构件 server.mjs / surface.config.json / state.schema.json 保留；probe.txt / attach.state.json 已由 19f0cde 摘出）",
              "items": [
                "Rushiera",
                "a6935bbb94"
              ],
              "status": "done",
              "evidence": "git a6935bb"
            },
            {
              "v": "98fb6fa",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "ACS 自述面 ignore 细化：结构件 3 件白名单放行，运行态仍忽略（2026-11-12 v0.64.1 轮）",
              "items": [
                "Rushiera",
                "98fb6fadf8"
              ],
              "status": "done",
              "evidence": "git 98fb6fa"
            },
            {
              "v": "c791ba2",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.38.2: gofile直接下载（下载器/串行闸/前置探测/unreachable熔断）",
              "items": [
                "Rushiera",
                "c791ba2911"
              ],
              "status": "done",
              "evidence": "git c791ba2"
            },
            {
              "v": "f59653f",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.39.0 gofile 取直链内建（CDP 驱动独立 profile 无头浏览器）· 油猴路径退役（脚本/端点/回执删除）· 判重补齐 · 打开链路改 settle 节奏",
              "items": [
                "Rushiera",
                "f59653f354"
              ],
              "status": "done",
              "evidence": "git f59653f"
            },
            {
              "v": "8cd1a83",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.37.2 宿主：影子副本目录自动清理（启动/换核后保留当前+最近 5 个，dry-run 摘要落 data/run/prune.log）+ 修「核心退出码 3 被误当重启信号」的无限拉起循环",
              "items": [
                "Rushiera",
                "8cd1a83831"
              ],
              "status": "done",
              "evidence": "git 8cd1a83"
            },
            {
              "v": "845c4d2",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.40.0 · gofile 嵌套文件夹递归展开 + skipped 上报",
              "items": [
                "Rushiera",
                "845c4d2182"
              ],
              "status": "done",
              "evidence": "git 845c4d2"
            }
          ]
        }
      ]
    }
  ]
};
