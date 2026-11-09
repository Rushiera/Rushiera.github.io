window.ARCH = {
  "meta": {
    "project": "Gakumas",
    "title": "Gakumas 提交时间线",
    "sub": "27 次提交 · 2026-10 → 2026-10",
    "ver": "1b23012",
    "updated": "2026-11-09",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\GakumasUnlock",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\GakumasUnlock (branch dev/rushiera)"
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
              "v": "5d35d01",
              "date": "10-24",
              "group": "2026-10",
              "lane": "other",
              "title": "add GakumasUnlock package",
              "items": [
                "gakumas",
                "5d35d01ec6"
              ],
              "status": "done",
              "evidence": "git 5d35d01"
            },
            {
              "v": "b4846a4",
              "date": "10-24",
              "group": "2026-10",
              "lane": "other",
              "title": "包内自包含改造：游戏本体/资源缓存/日志收进包内相对路径；新增 adopt-game 收编脚本、.gitignore、.gitattributes",
              "items": [
                "Rushiera",
                "b4846a47d3"
              ],
              "status": "done",
              "evidence": "git b4846a4"
            },
            {
              "v": "5f97e69",
              "date": "10-24",
              "group": "2026-10",
              "lane": "other",
              "title": "UI 回归脚本输出改到包内 logs\\uitests，不再写 %TEMP%",
              "items": [
                "Rushiera",
                "5f97e6935a"
              ],
              "status": "done",
              "evidence": "git 5f97e69"
            },
            {
              "v": "ddfb28f",
              "date": "10-24",
              "group": "2026-10",
              "lane": "other",
              "title": "启动器内置 LLM 探针通道：127.0.0.1:18500 (/ /state /events /shot.png /ping) + logs/probe 事件流 + 启动自检",
              "items": [
                "Rushiera",
                "ddfb28f5a1"
              ],
              "status": "done",
              "evidence": "git ddfb28f"
            },
            {
              "v": "a56b05b",
              "date": "10-24",
              "group": "2026-10",
              "lane": "other",
              "title": "探针改为默认关闭（需 probe.json 显式启用）；重新打包 exe 与 7z",
              "items": [
                "gakumas",
                "a56b05b937"
              ],
              "status": "done",
              "evidence": "git a56b05b"
            },
            {
              "v": "c3787a4",
              "date": "10-24",
              "group": "2026-10",
              "lane": "other",
              "title": "移除 3.3 历史发行包 学园偶像大师通行证.7z（现行版本以源码树为准）",
              "items": [
                "Rushiera",
                "c3787a4f8a"
              ],
              "status": "done",
              "evidence": "git c3787a4"
            },
            {
              "v": "75d8b71",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "探针端口回退 + /state 走 UI 线程缓存 + DMM 接入阻塞判据留档",
              "items": [
                "Rushiera",
                "75d8b71f04"
              ],
              "status": "done",
              "evidence": "git 75d8b71"
            },
            {
              "v": "c894d72",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "合并上游 dev/rushiera：吸收探针默认关闭（保留本支端口回退）",
              "items": [
                "Rushiera",
                "c894d72025"
              ],
              "status": "done",
              "evidence": "git c894d72"
            },
            {
              "v": "7210171",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "重编 学マス启动器.exe：合并后源码（探针默认关闭 + 端口回退 + /state UI 线程缓存）",
              "items": [
                "Rushiera",
                "72101713de"
              ],
              "status": "done",
              "evidence": "git 7210171"
            },
            {
              "v": "324428f",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "重编 学マス启动器.exe（推送脚本自动）",
              "items": [
                "Rushiera",
                "324428f86a"
              ],
              "status": "done",
              "evidence": "git 324428f"
            },
            {
              "v": "80cf2e2",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "重编 学マス启动器.exe（推送脚本自动）",
              "items": [
                "Rushiera",
                "80cf2e2489"
              ],
              "status": "done",
              "evidence": "git 80cf2e2"
            },
            {
              "v": "86025ac",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "自动推送：启动器重编 + 工作区变更",
              "items": [
                "Rushiera",
                "86025ac7ec"
              ],
              "status": "done",
              "evidence": "git 86025ac"
            },
            {
              "v": "f9eb749",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.4: 启动服务按钮 + 服务器详情子签",
              "items": [
                "Rushiera",
                "f9eb749a64"
              ],
              "status": "done",
              "evidence": "git f9eb749"
            },
            {
              "v": "c5d0164",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "自动推送：启动器重编 + 工作区变更",
              "items": [
                "Rushiera",
                "c5d0164d12"
              ],
              "status": "done",
              "evidence": "git c5d0164"
            },
            {
              "v": "3db79e9",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "R 系收口：档位 A 清单直通 + 代理接管安全修复",
              "items": [
                "Rushiera",
                "3db79e91f7"
              ],
              "status": "done",
              "evidence": "git 3db79e9"
            },
            {
              "v": "ca8eb41",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "自动推送：启动器重编 + 工作区变更",
              "items": [
                "Rushiera",
                "ca8eb41a89"
              ],
              "status": "done",
              "evidence": "git ca8eb41"
            },
            {
              "v": "bcc5e56",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "gitignore: 排除 .prev 备份",
              "items": [
                "Rushiera",
                "bcc5e56ef4"
              ],
              "status": "done",
              "evidence": "git bcc5e56"
            },
            {
              "v": "5994c55",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "gitignore: 同步 .prev 规则",
              "items": [
                "Rushiera",
                "5994c550df"
              ],
              "status": "done",
              "evidence": "git 5994c55"
            },
            {
              "v": "d177c2b",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "probe: L1 server probe (18502/18503) + L2 actions (/action /click /key /focus) + M1 parasite_km; fix probe.json enable + query decoding; port move 18500->18510",
              "items": [
                "Rushiera",
                "d177c2b3c1"
              ],
              "status": "done",
              "evidence": "git d177c2b"
            },
            {
              "v": "ad6171b",
              "date": "10-28",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: keep parasite_km build outputs out of git (obj/dll/build.log ignored; rebuild via tools/parasite_km/build.ps1)",
              "items": [
                "Rushiera",
                "ad6171b4c2"
              ],
              "status": "done",
              "evidence": "git ad6171b"
            },
            {
              "v": "f53a698",
              "date": "10-28",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: ignore parasite_km build outputs",
              "items": [
                "Rushiera",
                "f53a698599"
              ],
              "status": "done",
              "evidence": "git f53a698"
            },
            {
              "v": "a0d7f5c",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.9: launcher command surface (/cmd, 9 commands) + self-replace (launcher.reload), build.ps1 -Out",
              "items": [
                "Rushiera",
                "a0d7f5c08c"
              ],
              "status": "done",
              "evidence": "git a0d7f5c"
            },
            {
              "v": "4c605d8",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "probe: X-Probe-* response headers (protocol v1)",
              "items": [
                "Rushiera",
                "4c605d84eb"
              ],
              "status": "done",
              "evidence": "git 4c605d8"
            },
            {
              "v": "fdbfce5",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "tools: 上机副屏脚本（screens / move-to-screen）",
              "items": [
                "Rushiera",
                "fdbfce51f3"
              ],
              "status": "done",
              "evidence": "git fdbfce5"
            },
            {
              "v": "3c61ba0",
              "date": "10-31",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: align docs with measured facts; track probe.json",
              "items": [
                "Rushiera",
                "3c61ba0641"
              ],
              "status": "done",
              "evidence": "git 3c61ba0"
            },
            {
              "v": "611746d",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "tasks: gkm-c1 concurrency card (queue Q-004) + reports index",
              "items": [
                "Rushiera",
                "611746d9cc"
              ],
              "status": "done",
              "evidence": "git 611746d"
            },
            {
              "v": "1b23012",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "gkm-c2: 任务卡落地 + 报告索引重写（三条遗留裁决入卡）",
              "items": [
                "Rushiera",
                "1b23012bbb"
              ],
              "status": "done",
              "evidence": "git 1b23012"
            }
          ]
        }
      ]
    }
  ]
};
