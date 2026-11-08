window.ARCH = {
  "meta": {
    "project": "sc2api-listen",
    "title": "sc2api-listen 提交时间线",
    "sub": "30 次提交 · 2026-10 → 2026-11",
    "ver": "7cb967c",
    "updated": "2026-11-08",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\sc2api-listen",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\sc2api-listen (branch Rushiera)"
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
              "v": "0bd573b",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "Initial private tree: in-process SC2API listen for local 5.0.17.98370.",
              "items": [
                "Ansau-Inv",
                "0bd573bfda"
              ],
              "status": "done",
              "evidence": "git 0bd573b"
            },
            {
              "v": "a1f12b5",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Ready the listen interface for a private collaborator clone.",
              "items": [
                "Ansau-Inv",
                "a1f12b522b"
              ],
              "status": "done",
              "evidence": "git a1f12b5"
            },
            {
              "v": "96b631d",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Align docs with extras, sidecar, and the Battle.net debug no-op.",
              "items": [
                "Ansau-Inv",
                "96b631df7c"
              ],
              "status": "done",
              "evidence": "git 96b631d"
            },
            {
              "v": "b8bf44b",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Ship the prebuilt DLL and injector in build/.",
              "items": [
                "Ansau-Inv",
                "b8bf44bb05"
              ],
              "status": "done",
              "evidence": "git b8bf44b"
            },
            {
              "v": "e601a2a",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Keep api.md to caller usage only.",
              "items": [
                "Ansau-Inv",
                "e601a2a6b1"
              ],
              "status": "done",
              "evidence": "git e601a2a"
            },
            {
              "v": "f783b27",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Resolve listen hooks from AOB and xref at attach so a game update is a dump plus pattern fix.",
              "items": [
                "Ansau-Inv",
                "f783b27a3d"
              ],
              "status": "done",
              "evidence": "git f783b27"
            },
            {
              "v": "707d6af",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Gate the 98370 pin on TimeDateStamp and stop enable.py from blocking inject on hardcoded RVAs.",
              "items": [
                "Ansau-Inv",
                "707d6aff73"
              ],
              "status": "done",
              "evidence": "git 707d6af"
            },
            {
              "v": "b065aea",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "repo: 仓库改为工作区根，产品源码整体下沉 sc2api-listen/，新增 refer/ 参考面",
              "items": [
                "Rushiera",
                "b065aea94c"
              ],
              "status": "done",
              "evidence": "git b065aea"
            },
            {
              "v": "68c3947",
              "date": "10-31",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 工作区根 README 去掉本机私有构建脚本的命令块",
              "items": [
                "Rushiera",
                "68c39470c5"
              ],
              "status": "done",
              "evidence": "git 68c3947"
            },
            {
              "v": "1a5e744",
              "date": "10-31",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 新增上游结构变更通知（含路径映射 / 构建改法 / 回退方案 / 三条核出的事实）",
              "items": [
                "Rushiera",
                "1a5e7447c7"
              ],
              "status": "done",
              "evidence": "git 1a5e744"
            },
            {
              "v": "6864214",
              "date": "10-31",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 修正工作区结构图——tools/ 实际位置是 sc2api-listen/tools/（跟着源码下沉），根目录并无 tools/",
              "items": [
                "Rushiera",
                "6864214ab6"
              ],
              "status": "done",
              "evidence": "git 6864214"
            },
            {
              "v": "93144c0",
              "date": "10-31",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 上游通知里 tools/ 的落点修正为 sc2api-listen/tools/",
              "items": [
                "Rushiera",
                "93144c0ab1"
              ],
              "status": "done",
              "evidence": "git 93144c0"
            },
            {
              "v": "82f3fa7",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "Correct unit-tag docs: observation already stamps high 1 or 2; echo as-is.",
              "items": [
                "Ansau-Inv",
                "82f3fa7dab"
              ],
              "status": "done",
              "evidence": "git 82f3fa7"
            },
            {
              "v": "269c79d",
              "date": "10-31",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(refer): 补拉 4 个公开参考仓（SwarmBrain / HEP / Voyager / sc2reader），清单 13→17",
              "items": [
                "Rushiera",
                "269c79d74e"
              ],
              "status": "done",
              "evidence": "git 269c79d"
            },
            {
              "v": "4e60309",
              "date": "10-31",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(design): 新增 AI 面设计底稿 DESIGN.md（七层架构 / Intent 合同 / 25 压缩链 / 分期验收）",
              "items": [
                "Rushiera",
                "4e603095e6"
              ],
              "status": "done",
              "evidence": "git 4e60309"
            },
            {
              "v": "bf04f9e",
              "date": "10-31",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(design): 补入独立复核指出的 P0/P1 合同缺口与原稿冲突点更正",
              "items": [
                "Rushiera",
                "bf04f9ec31"
              ],
              "status": "done",
              "evidence": "git bf04f9e"
            },
            {
              "v": "90966c3",
              "date": "10-31",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(refer): 补入 17 仓读结论 findings（按 DESIGN 需求面对位 + commit 锚 + 三档可用性）",
              "items": [
                "Rushiera",
                "90966c3d46"
              ],
              "status": "done",
              "evidence": "git 90966c3"
            },
            {
              "v": "83cf2fe",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "probe: LLM 可见探针（Probe Protocol v1 · 形态 e · 18570）",
              "items": [
                "Rushiera",
                "83cf2feabe"
              ],
              "status": "done",
              "evidence": "git 83cf2fe"
            },
            {
              "v": "b753991",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "[+] 打通 sidecar 玩家槽 1-15 的已完成升级 [*] 写 sidecar 时跳过 9CF1C0 的 1v1 对手半边 [#] 定位 v0.1.0 并写明官方 upgrade_ids 不含队友",
              "items": [
                "Ansau-Inv",
                "b753991e16"
              ],
              "status": "done",
              "evidence": "git b753991"
            },
            {
              "v": "1dc95d5",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.11 probe: event actor + manual input listening + app visibility model",
              "items": [
                "Rushiera",
                "1dc95d5529"
              ],
              "status": "done",
              "evidence": "git 1dc95d5"
            },
            {
              "v": "495a852",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "merge: 接受上游 main（v0.1.0）三提交，路径按本支口径",
              "items": [
                "Rushiera",
                "495a852549"
              ],
              "status": "done",
              "evidence": "git 495a852"
            },
            {
              "v": "595e7ac",
              "date": "11-01",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs: 产品 README 补上游同步说明，api.md 指路改「产品目录」",
              "items": [
                "Rushiera",
                "595e7ac475"
              ],
              "status": "done",
              "evidence": "git 595e7ac"
            },
            {
              "v": "25b303f",
              "date": "11-01",
              "group": "2026-11",
              "lane": "docs",
              "title": "docs(design): tag 口径落定——原样回传（上游 v0.1.0 裁决）",
              "items": [
                "Rushiera",
                "25b303f121"
              ],
              "status": "done",
              "evidence": "git 25b303f"
            },
            {
              "v": "143b092",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "probe: 配置覆盖出声（port / cmd_wait_ms 被文件改写时进事件流）",
              "items": [
                "Rushiera",
                "143b092e1f"
              ],
              "status": "done",
              "evidence": "git 143b092"
            },
            {
              "v": "a052551",
              "date": "11-01",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.16: AI 面骨架 sc2bot 七层 + 85 条离线测试",
              "items": [
                "Rushiera",
                "a0525514cd"
              ],
              "status": "done",
              "evidence": "git a052551"
            },
            {
              "v": "3df509c",
              "date": "11-06",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.18: 参考面新增上游 bot 仓 SC2BOT（refer 只读登记，不推该仓）",
              "items": [
                "Rushiera",
                "3df509c950"
              ],
              "status": "done",
              "evidence": "git 3df509c"
            },
            {
              "v": "fe37d0d",
              "date": "11-06",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.19: 上游 bot 面对位入口 + tools 计数勘误",
              "items": [
                "Rushiera",
                "fe37d0d1d6"
              ],
              "status": "done",
              "evidence": "git fe37d0d"
            },
            {
              "v": "209e630",
              "date": "11-06",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.20: README workspace tree gains DESIGN.md and the local attach script; tests note the out-of-repo venv",
              "items": [
                "Rushiera",
                "209e630899"
              ],
              "status": "done",
              "evidence": "git 209e630"
            },
            {
              "v": "061461e",
              "date": "11-06",
              "group": "2026-11",
              "lane": "fix",
              "title": "fix(#17 #18): gametime from game loop (clamp when not in match) + test --safe read-only subset",
              "items": [
                "Rushiera",
                "061461e80c"
              ],
              "status": "done",
              "evidence": "git 061461e"
            },
            {
              "v": "7cb967c",
              "date": "11-06",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.23: 新增合作接口合同、去重重试与交叉校验、评测台骨架",
              "items": [
                "Rushiera",
                "7cb967c764"
              ],
              "status": "done",
              "evidence": "git 7cb967c"
            }
          ]
        }
      ]
    }
  ]
};
