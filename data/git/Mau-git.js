window.ARCH = {
  "meta": {
    "project": "Mau",
    "title": "Mau 提交时间线",
    "sub": "35 次提交 · 2026-11 → 2026-11",
    "ver": "04a7d15",
    "updated": "2026-11-14",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\Mau",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\Mau (branch RushieraChange)"
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
              "v": "af6e89c",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "CatHome5: 兜底仓首提交（0.23.3 · P3-b 尾部后）",
              "items": [
                "Rushiera",
                "af6e89caad"
              ],
              "status": "done",
              "evidence": "git af6e89c"
            },
            {
              "v": "f6fb62d",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.23.3: 修 toolset e2e 异步导线时序（test-only）",
              "items": [
                "Rushiera",
                "f6fb62da6d"
              ],
              "status": "done",
              "evidence": "git f6fb62d"
            },
            {
              "v": "064aa1f",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.23.3: p3b-1 ViewStore.CopyFrom（fork 播种，零接线）",
              "items": [
                "Rushiera",
                "064aa1f319"
              ],
              "status": "done",
              "evidence": "git 064aa1f"
            },
            {
              "v": "9c9dbab",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.23.4: info 内置 db 段",
              "items": [
                "Rushiera",
                "9c9dbab07d"
              ],
              "status": "done",
              "evidence": "git 9c9dbab"
            },
            {
              "v": "48956b4",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.23.4: Mau-Go S1.6/S1.7 侦察报告（20 组语料映射 + 5 分部行数 + 第 2 轮复核）",
              "items": [
                "Rushiera",
                "48956b437e"
              ],
              "status": "done",
              "evidence": "git 48956b4"
            },
            {
              "v": "1c6ae5c",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.24.0: TempToolCat + llm probe + d-2 九条条件路由 + cs-format 桥侧修复",
              "items": [
                "Rushiera",
                "1c6ae5cff6"
              ],
              "status": "done",
              "evidence": "git 1c6ae5c"
            },
            {
              "v": "4287034",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.25.0: D3 宿主内自更新链（闸门·接力·回执注入）+ full/incr/host 三档实机全取证",
              "items": [
                "Rushiera",
                "428703456c"
              ],
              "status": "done",
              "evidence": "git 4287034"
            },
            {
              "v": "f08022a",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.0: P5 外壳三件——托盘常驻 / 开机自启 / CLI 双写 + --run 单指令模式",
              "items": [
                "Rushiera",
                "f08022aa00"
              ],
              "status": "done",
              "evidence": "git f08022a"
            },
            {
              "v": "8aedca3",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.1: csbridge 部署自持——deploy prepare 收集桥产物（--csbridge / 缺失出声跳过）+ 部署实例走桥实测",
              "items": [
                "Rushiera",
                "8aedca327a"
              ],
              "status": "done",
              "evidence": "git 8aedca3"
            },
            {
              "v": "7464fd5",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.2: 轮末总结服务接线——SVC/LLMSimpleRequest 全链（发单 / 每帧回收 / roundsummary 块 ts=roundsum+1）+ OA RemoveByOwner + 6 例单测；实机一单全链 + a4 153 / p3c 973327·973597 零回退",
              "items": [
                "Rushiera",
                "7464fd552b"
              ],
              "status": "done",
              "evidence": "git 7464fd5"
            },
            {
              "v": "3b77372",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.3: 视图实时面（c-5）接线——SetLive 三态（thinksse/replysse/toolrun）+ sealReasonStream 实装 + enterPhase leaveThink 收口 + refreshToolLive 投影；5 例单测；实机三轮 data-live 采样 + 视图落盘回读；a4 153 / p3c 973327·973597 零回退",
              "items": [
                "Rushiera",
                "3b7737252f"
              ],
              "status": "done",
              "evidence": "git 3b77372"
            },
            {
              "v": "92b65e6",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.4: 工具轮间隙文本（c-8）接线——pumpLlm 工具分支 AppendGapText（C# ChatSession.cs:2888-2892 口径：OnAssistantToolCalls 之后 / sealReasonStream 之前，空文本不写）+ gaptext_test.go 2 例；门禁 34 项绿；a4 153/13/7 与 p3c 973327·973597 零回退；实机 gap_text 块落盘于 toolcard 之前",
              "items": [
                "Rushiera",
                "92b65e6133"
              ],
              "status": "done",
              "evidence": "git 92b65e6"
            },
            {
              "v": "929481b",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.5: P3-c c-2 内置补全（pack/sleep/timer）+ 延迟队列 + 包数据面——门禁 34 项绿；a4 153/13/7 与 p3c 973327/973597 零回退；实机 sleep（durMs 1999）+ timer（delays.json 非空→systemautomessage source=timer）+ pack（10 件/66909 字符）全链取证",
              "items": [
                "Rushiera",
                "929481b022"
              ],
              "status": "done",
              "evidence": "git 929481b"
            },
            {
              "v": "b3f66a3",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "commit CatHome5",
              "items": [
                "Rushiera",
                "b3f66a3f49"
              ],
              "status": "done",
              "evidence": "git b3f66a3"
            },
            {
              "v": "ad57622",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.26.7 指令路由全表（c-6）：cat.* 单猫族对齐 + delay.* 全族",
              "items": [
                "Rushiera",
                "ad57622ff9"
              ],
              "status": "done",
              "evidence": "git ad57622"
            },
            {
              "v": "e52bc03",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.26.8 · P3-c 尾部 c-3：端点探活 + 故障转移（P3-c 全项收口）",
              "items": [
                "Rushiera",
                "e52bc03a33"
              ],
              "status": "done",
              "evidence": "git e52bc03"
            },
            {
              "v": "950bea4",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "Mau-Go 0.1.18: P4 余 17 条前 9 件（OA 增量 5 + DATA/SELF/LOG 4）——积木表 84 件；门禁 34 行绿",
              "items": [
                "Rushiera",
                "950bea4253"
              ],
              "status": "done",
              "evidence": "git 950bea4"
            },
            {
              "v": "33e56f9",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "Mau-Go 0.1.20: P4 余 8 条收口（LLM 流式 5 + TEST 3）——DataBox.Remove 原语 + 段盒四键 + 组合根 LLMStream 适配器 + Log 接线；积木 97 件；门禁 34 行绿；check-l3 PASS",
              "items": [
                "Rushiera",
                "33e56f9c28"
              ],
              "status": "done",
              "evidence": "git 33e56f9"
            },
            {
              "v": "6931e16",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.8: Mau-Go 0.1.21 GROUP 八件收口（105/105，GroupCat 解锁）",
              "items": [
                "Rushiera",
                "6931e16a78"
              ],
              "status": "done",
              "evidence": "git 6931e16"
            },
            {
              "v": "5102fd5",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.9: CHANGELOG 补记轮（llm 流式五件 + GROUP 八件）——版本单点升 0.26.9",
              "items": [
                "Rushiera",
                "5102fd5849"
              ],
              "status": "done",
              "evidence": "git 5102fd5"
            },
            {
              "v": "2e0d574",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.27.0: p4-3 组订阅自动转发（GroupAutoForward）——1 秒节流巡检 + 静默窗口到期逐订阅者汇总注入 + 游标推进（对齐 C# GroupAutoForward.cs；含 5 例单测）",
              "items": [
                "Rushiera",
                "2e0d574260"
              ],
              "status": "done",
              "evidence": "git 2e0d574"
            },
            {
              "v": "555314d",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.28.0: p3b-2 顶尾补差接线（reconcileViewOnLoad：AppendTailMissing + 对账抽样 5 条；含 AuditEntries 单测）",
              "items": [
                "Rushiera",
                "555314d032"
              ],
              "status": "done",
              "evidence": "git 555314d"
            },
            {
              "v": "e9e4682",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.29.0: d-1 多猫面第一段（多猫存储面 + cat.* 全族指令面 + 启动扫描 + 运行态分离）",
              "items": [
                "Rushiera",
                "e9e46821e8"
              ],
              "status": "done",
              "evidence": "git e9e4682"
            },
            {
              "v": "852b15e",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.30.0: d-1a 组轻宿主 + d-1b 每猫独立对话端口（hostinstance 装配面）",
              "items": [
                "Rushiera",
                "852b15e005"
              ],
              "status": "done",
              "evidence": "git 852b15e"
            },
            {
              "v": "40012c7",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.31.0: d-1c 管理面多猫编辑（cat-config / cat-detail 按猫寻址 + Deps SessionFor/CatLookup 双钩子）",
              "items": [
                "Rushiera",
                "40012c7f91"
              ],
              "status": "done",
              "evidence": "git 40012c7"
            },
            {
              "v": "9d15658",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.32.0: d-1 尾部——每猫端口 Chat / cat.chat 自动挂载（AutoMountForCat）+ cat.cfg 缺省 mountAuto/projectMountExpert=true",
              "items": [
                "Rushiera",
                "9d15658863"
              ],
              "status": "done",
              "evidence": "git 9d15658"
            },
            {
              "v": "397764c",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.33.0: inject/auto per-cat 写面 + 每猫端口 inject 三件",
              "items": [
                "Rushiera",
                "397764c055"
              ],
              "status": "done",
              "evidence": "git 397764c"
            },
            {
              "v": "2c2e6f1",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.34.0: CH4 1.8.265/266 管理面板对齐（全跟随三键 + cat.cfg.set 三分支 + catcfg.tplbroadcast + cat-default 15 字段 + 新猫 follow 初值）",
              "items": [
                "Rushiera",
                "2c2e6f1e13"
              ],
              "status": "done",
              "evidence": "git 2c2e6f1"
            },
            {
              "v": "8a221ee",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.35.0: 重启链双硬化（重复实例检测 + 自启前检）",
              "items": [
                "Rushiera",
                "8a221eeaf0"
              ],
              "status": "done",
              "evidence": "git 8a221ee"
            },
            {
              "v": "de415b8",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.35.0: 源码默认版本号同步 0.35.0",
              "items": [
                "Rushiera",
                "de415b84be"
              ],
              "status": "done",
              "evidence": "git de415b8"
            },
            {
              "v": "1f62579",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.36.0: relaunch 段1b 同目录残留实例清扫（KillHostsInDirectory 等价物）——优雅关 2s → 强杀 3s → settle 1s，结果进报告 step；两负例实机",
              "items": [
                "Rushiera",
                "1f62579b01"
              ],
              "status": "done",
              "evidence": "git 1f62579"
            },
            {
              "v": "de84d65",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.36.1: 默认猫独立对话端口（面板「打开对话」落回管理页修复）+ 视图取帧单点",
              "items": [
                "Rushiera",
                "de84d65530"
              ],
              "status": "done",
              "evidence": "git de84d65"
            },
            {
              "v": "49c78aa",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.36.2 受控根猫级隔离：enabledRoots 语义对齐 C#（空=仅常驻根）+ 每猫文件服务 + cat.roots 审计 + rootsEffective 读面",
              "items": [
                "Rushiera",
                "49c78aaff1"
              ],
              "status": "done",
              "evidence": "git 49c78aa"
            },
            {
              "v": "0d98b85",
              "date": "11-14",
              "group": "2026-11",
              "lane": "other",
              "title": "0.36.2 Go 主仓切换：基线参考区 /raw/ 与 C# 历史备份不入库（2026-11-14 Mau 仓 = Go CAT5 / Mau-Go + CatHome5）",
              "items": [
                "Rushiera",
                "0d98b85c52"
              ],
              "status": "done",
              "evidence": "git 0d98b85"
            },
            {
              "v": "04a7d15",
              "date": "11-14",
              "group": "2026-11",
              "lane": "other",
              "title": "0.36.2 README 重写：仓库首页按 ACS 格式（定位 blockquote + 双区块 + 坐标系 + 面结构 + 现状 + 路线 + 文档索引 + 邻居分工；施工版记录保留于 raw/cathome5 与 git 历史）",
              "items": [
                "Rushiera",
                "04a7d15d02"
              ],
              "status": "done",
              "evidence": "git 04a7d15"
            }
          ]
        }
      ]
    }
  ]
};
