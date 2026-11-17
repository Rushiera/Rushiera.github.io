window.ARCH = {
  "meta": {
    "project": "ClashVerge",
    "title": "ClashVerge 提交时间线",
    "sub": "13 次提交 · 2026-11 → 2026-11",
    "ver": "e81a353",
    "updated": "2026-11-17",
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
            },
            {
              "v": "85c8f18",
              "date": "11-16",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.74 工程迁入 tools/work/ClashVerge：junction 重建 + 服务 ImagePath 改指 + 引用同帧改",
              "items": [
                "Rushiera",
                "85c8f18a42"
              ],
              "status": "done",
              "evidence": "git 85c8f18"
            },
            {
              "v": "623d768",
              "date": "11-17",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.77 Phase 0: sniffer 协议画像（alpn/path/ech）+ 服务模式部署脚本 + netlog 跟踪面",
              "items": [
                "Rushiera",
                "623d768c6c"
              ],
              "status": "done",
              "evidence": "git 623d768"
            },
            {
              "v": "928a146",
              "date": "11-17",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.77 netlog 工具层入库（#55 处置：白名单放行 *.mjs / *.md，库与数据仍排除）",
              "items": [
                "Rushiera",
                "928a1464f3"
              ],
              "status": "done",
              "evidence": "git 928a146"
            },
            {
              "v": "7c235c7",
              "date": "11-17",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.77 Phase 0: netlog conn 扩列（alpn/path/ech/sniff_source）+ 采集器写入",
              "items": [
                "Rushiera",
                "7c235c7897"
              ],
              "status": "done",
              "evidence": "git 7c235c7"
            },
            {
              "v": "7a1b353",
              "date": "11-17",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.77 Phase 0: probe-schema 库面判据（conn 画像列 + 非空计数）",
              "items": [
                "Rushiera",
                "7a1b3533b3"
              ],
              "status": "done",
              "evidence": "git 7a1b353"
            },
            {
              "v": "5193e9d",
              "date": "11-17",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.77 elevate-swap-kernel: 加 trap（停服务后异常必拉回服务）",
              "items": [
                "Rushiera",
                "5193e9da02"
              ],
              "status": "done",
              "evidence": "git 5193e9d"
            },
            {
              "v": "07d953f",
              "date": "11-17",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.78 旁路表加 bypass-scsp-localhost-api（bn765.com → DIRECT）",
              "items": [
                "Rushiera",
                "07d953f62d"
              ],
              "status": "done",
              "evidence": "git 07d953f"
            },
            {
              "v": "53c195b",
              "date": "11-17",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.77 Phase 0: reload-config（payload 通道重载，204 实测）+ 强制嗅探钩子",
              "items": [
                "Rushiera",
                "53c195b61d"
              ],
              "status": "done",
              "evidence": "git 53c195b"
            },
            {
              "v": "e81a353",
              "date": "11-17",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.77 Phase 0 验收：接续板更新（ALPN/明文 path 落库 · 服务模式换内核判据）",
              "items": [
                "Rushiera",
                "e81a353a00"
              ],
              "status": "done",
              "evidence": "git e81a353"
            }
          ]
        }
      ]
    }
  ]
};
