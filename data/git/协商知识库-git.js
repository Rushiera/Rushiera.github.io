window.ARCH = {
  "meta": {
    "project": "协商知识库",
    "title": "协商知识库 提交时间线",
    "sub": "131 次提交 · 2026-10 → 2026-10",
    "ver": "08f2292",
    "updated": "2026-11-08",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\协商知识库",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\协商知识库 (branch main)"
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
              "v": "73c2618",
              "date": "10-04",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 项目档案与设计文档",
              "items": [
                "Rushiera",
                "73c2618871"
              ],
              "status": "done",
              "evidence": "git 73c2618"
            },
            {
              "v": "49fb094",
              "date": "10-04",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 宪法与常驻前文数据",
              "items": [
                "Rushiera",
                "49fb094476"
              ],
              "status": "done",
              "evidence": "git 49fb094"
            },
            {
              "v": "3c9d317",
              "date": "10-04",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: 工具链（分离 / 建档 / 语义层 / 面板后端）",
              "items": [
                "Rushiera",
                "3c9d3171c7"
              ],
              "status": "done",
              "evidence": "git 3c9d317"
            },
            {
              "v": "d848ed7",
              "date": "10-04",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: 面板前端（主页客户档案 + 副页五模块）",
              "items": [
                "Rushiera",
                "d848ed7c5b"
              ],
              "status": "done",
              "evidence": "git d848ed7"
            },
            {
              "v": "031a90b",
              "date": "10-04",
              "group": "2026-10",
              "lane": "test",
              "title": "test: 回归与诊断脚本",
              "items": [
                "Rushiera",
                "031a90bb92"
              ],
              "status": "done",
              "evidence": "git 031a90b"
            },
            {
              "v": "d9e35f8",
              "date": "10-04",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 音频面工作区（约定与元数据；录音与成套副本不入库）",
              "items": [
                "Rushiera",
                "d9e35f8d57"
              ],
              "status": "done",
              "evidence": "git d9e35f8"
            },
            {
              "v": "9417c1e",
              "date": "10-04",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: 知识库面约定与台账",
              "items": [
                "Rushiera",
                "9417c1ed6c"
              ],
              "status": "done",
              "evidence": "git 9417c1e"
            },
            {
              "v": "8cb0e56",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "data: 语义记录与索引（含客户姓名与通话摘要）",
              "items": [
                "Rushiera",
                "8cb0e566b0"
              ],
              "status": "done",
              "evidence": "git 8cb0e56"
            },
            {
              "v": "36c93b5",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "data: 客户档案与送收落点（含协商历史与转写全文）",
              "items": [
                "Rushiera",
                "36c93b5602"
              ],
              "status": "done",
              "evidence": "git 36c93b5"
            },
            {
              "v": "08eb296",
              "date": "10-04",
              "group": "2026-10",
              "lane": "chore",
              "title": "release: v0.56 稽核定档与口径分发（本次会话）",
              "items": [
                "Rushiera",
                "08eb296287"
              ],
              "status": "done",
              "evidence": "git 08eb296"
            },
            {
              "v": "db61798",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.57 第三轮批复（380 条素材）+ 核实接口 + 口径全库分发",
              "items": [
                "Rushiera",
                "db61798efb"
              ],
              "status": "done",
              "evidence": "git db61798"
            },
            {
              "v": "1ecf72c",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.57 文档索引补核实用途（收工索引完整性）",
              "items": [
                "Rushiera",
                "1ecf72c82f"
              ],
              "status": "done",
              "evidence": "git 1ecf72c"
            },
            {
              "v": "ecc4e6a",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.59 判档口径修正 + 沉淀分发",
              "items": [
                "Rushiera",
                "ecc4e6ad9f"
              ],
              "status": "done",
              "evidence": "git ecc4e6a"
            },
            {
              "v": "802cc7a",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.61: 档案时间线拆板块渲染与展示排序",
              "items": [
                "Rushiera",
                "802cc7ab37"
              ],
              "status": "done",
              "evidence": "git 802cc7a"
            },
            {
              "v": "d48c136",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.66 语义轮第三轮：项目文档（M45 · CHANGELOG · todo 待批面）",
              "items": [
                "Rushiera",
                "d48c1367db"
              ],
              "status": "done",
              "evidence": "git d48c136"
            },
            {
              "v": "294bcad",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.66 语义轮第三轮：18 条新语义记录 + 42 份本条条目",
              "items": [
                "Rushiera",
                "294bcada9a"
              ],
              "status": "done",
              "evidence": "git 294bcad"
            },
            {
              "v": "49fc95a",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.66 语义轮第三轮：客户档案归组（41 客户 / 42 通话）",
              "items": [
                "Rushiera",
                "49fc95a8d1"
              ],
              "status": "done",
              "evidence": "git 49fc95a"
            },
            {
              "v": "995103c",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.66 语义轮第三轮：台账去重（corrections 306 / anomalies 126）+ 前文 49802 字 + inbox 已消费回传移出",
              "items": [
                "Rushiera",
                "995103cc63"
              ],
              "status": "done",
              "evidence": "git 995103c"
            },
            {
              "v": "d7aa423",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.66 语义轮第三轮：raw 索引（创建时间戳回填 3 条）",
              "items": [
                "Rushiera",
                "d7aa423278"
              ],
              "status": "done",
              "evidence": "git d7aa423"
            },
            {
              "v": "8f17506",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.67: 接入 RunningHub 线上识别通道",
              "items": [
                "Rushiera",
                "8f175062d9"
              ],
              "status": "done",
              "evidence": "git 8f17506"
            },
            {
              "v": "956ed80",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.67: 补记送 LLM 环节接法",
              "items": [
                "Rushiera",
                "956ed8032b"
              ],
              "status": "done",
              "evidence": "git 956ed80"
            },
            {
              "v": "12d1fda",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.67: 校正回归项数与 workflowId 口径",
              "items": [
                "Rushiera",
                "12d1fdab4b"
              ],
              "status": "done",
              "evidence": "git 12d1fda"
            },
            {
              "v": "43373d0",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.73: 补推 v0.68–v0.73 改动 + Git 档案",
              "items": [
                "Rushiera",
                "43373d0000"
              ],
              "status": "done",
              "evidence": "git 43373d0"
            },
            {
              "v": "838f8fe",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.73: Git 档案回填同步状态",
              "items": [
                "Rushiera",
                "838f8fe9fc"
              ],
              "status": "done",
              "evidence": "git 838f8fe"
            },
            {
              "v": "abe868c",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.73: 补记陈旧 index.lock 判例",
              "items": [
                "Rushiera",
                "abe868c050"
              ],
              "status": "done",
              "evidence": "git abe868c"
            },
            {
              "v": "74380f8",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.73: Git 档案同步状态终稿",
              "items": [
                "Rushiera",
                "74380f8de6"
              ],
              "status": "done",
              "evidence": "git 74380f8"
            },
            {
              "v": "ecbfa88",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.74: 疑义批次收口与录音有效性口径",
              "items": [
                "Rushiera",
                "ecbfa88314"
              ],
              "status": "done",
              "evidence": "git ecbfa88"
            },
            {
              "v": "8401580",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.74: 更新 Git 档案同步状态",
              "items": [
                "Rushiera",
                "8401580c19"
              ],
              "status": "done",
              "evidence": "git 8401580"
            },
            {
              "v": "e01364a",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.76: 第十三条操作面与三种手段定档",
              "items": [
                "Rushiera",
                "e01364ace2"
              ],
              "status": "done",
              "evidence": "git e01364a"
            },
            {
              "v": "9293f50",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.76: 更新 Git 档案同步状态",
              "items": [
                "Rushiera",
                "9293f504f5"
              ],
              "status": "done",
              "evidence": "git 9293f50"
            },
            {
              "v": "194a0e8",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.80: 纠错去重 + 自动语义轮与无效录音贯通",
              "items": [
                "Rushiera",
                "194a0e8f0c"
              ],
              "status": "done",
              "evidence": "git 194a0e8"
            },
            {
              "v": "3355185",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.81: 自动语义轮生产全量跑与真链路记录",
              "items": [
                "Rushiera",
                "3355185e1d"
              ],
              "status": "done",
              "evidence": "git 3355185"
            },
            {
              "v": "0d84e81",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.82: 自动语义轮纠偏与口径变更重跑",
              "items": [
                "Rushiera",
                "0d84e819cb"
              ],
              "status": "done",
              "evidence": "git 0d84e81"
            },
            {
              "v": "722954a",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.83: 原始文件面三改（姓名/标识跳转/备注）+ 自动分析归位",
              "items": [
                "Rushiera",
                "722954a168"
              ],
              "status": "done",
              "evidence": "git 722954a"
            },
            {
              "v": "e6893ce",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.84: 口径分发——先还后调·违约跟催·投诉与情绪",
              "items": [
                "Rushiera",
                "e6893ce064"
              ],
              "status": "done",
              "evidence": "git e6893ce"
            },
            {
              "v": "47232a2",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.85: 档案时间线三改（悬停摘要 · 全文/摘要小窗 · 标识标签）",
              "items": [
                "Rushiera",
                "47232a2a28"
              ],
              "status": "done",
              "evidence": "git 47232a2"
            },
            {
              "v": "97f9975",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.85: 更新 Git 档案同步状态",
              "items": [
                "Rushiera",
                "97f9975ab2"
              ],
              "status": "done",
              "evidence": "git 97f9975"
            },
            {
              "v": "9e618bc",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.86: 文档结构重整——文档地图·口径去重·历史外移·客户档案分层",
              "items": [
                "Rushiera",
                "9e618bc4c6"
              ],
              "status": "done",
              "evidence": "git 9e618bc"
            },
            {
              "v": "bb145cd",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.87: 知识库沉淀（去重 · 归并 · 口径一致性）",
              "items": [
                "Rushiera",
                "bb145cde3f"
              ],
              "status": "done",
              "evidence": "git bb145cd"
            },
            {
              "v": "29ee679",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.87: 补记 ingest 追加入库无去重判据 + Git 同步状态",
              "items": [
                "Rushiera",
                "29ee679dc7"
              ],
              "status": "done",
              "evidence": "git 29ee679"
            },
            {
              "v": "e77a09d",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88: 全量重跑模型小窗 + 多模型通道",
              "items": [
                "Rushiera",
                "e77a09dc88"
              ],
              "status": "done",
              "evidence": "git e77a09d"
            },
            {
              "v": "0705865",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88: 同步 Git 档案",
              "items": [
                "Rushiera",
                "0705865fe1"
              ],
              "status": "done",
              "evidence": "git 0705865"
            },
            {
              "v": "9a4513c",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88: 回归项数核对（43/78/110）",
              "items": [
                "Rushiera",
                "9a4513c224"
              ],
              "status": "done",
              "evidence": "git 9a4513c"
            },
            {
              "v": "188e6ab",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.88b: 多通道并发上限判例 + 待办",
              "items": [
                "Rushiera",
                "188e6ab86c"
              ],
              "status": "done",
              "evidence": "git 188e6ab"
            },
            {
              "v": "093e2b6",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.91: 并发互不干涉 + 重试池 + 限流退让 + 上工方式修正",
              "items": [
                "Rushiera",
                "093e2b62ba"
              ],
              "status": "done",
              "evidence": "git 093e2b6"
            },
            {
              "v": "a61fd7e",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.92: 面板单实例 + 旧窗口自动关",
              "items": [
                "Rushiera",
                "a61fd7e925"
              ],
              "status": "done",
              "evidence": "git a61fd7e"
            },
            {
              "v": "9d07f32",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.92: 收工补记（Git 档案同步状态 + 并发写入判例）",
              "items": [
                "Rushiera",
                "9d07f32dbb"
              ],
              "status": "done",
              "evidence": "git 9d07f32"
            },
            {
              "v": "d6c7a8d",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.93: 取件地址入面板 + 搬运源改址",
              "items": [
                "Rushiera",
                "d6c7a8d50c"
              ],
              "status": "done",
              "evidence": "git d6c7a8d"
            },
            {
              "v": "7e7b3c2",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.95: 流程交代面 + 三问口径",
              "items": [
                "Rushiera",
                "7e7b3c2cf9"
              ],
              "status": "done",
              "evidence": "git 7e7b3c2"
            },
            {
              "v": "5551b1c",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.95b: 收工判例入 todo",
              "items": [
                "Rushiera",
                "5551b1c3e7"
              ],
              "status": "done",
              "evidence": "git 5551b1c"
            },
            {
              "v": "8522490",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.96: 卫星产品线建档（Strata + llama.cpp）",
              "items": [
                "Rushiera",
                "8522490942"
              ],
              "status": "done",
              "evidence": "git 8522490"
            },
            {
              "v": "ad932fb",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.96b: 收工账面（todo 核销 + git 档案同步）",
              "items": [
                "Rushiera",
                "ad932fbed8"
              ],
              "status": "done",
              "evidence": "git ad932fb"
            },
            {
              "v": "3fee702",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.97: 卫星线单次不切片上限实测与切片规程",
              "items": [
                "Rushiera",
                "3fee70255e"
              ],
              "status": "done",
              "evidence": "git 3fee702"
            },
            {
              "v": "d842000",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.98: 卫星线全库 43 条批跑（含三条判例：退化循环 / 闸门盲区 / 切片放大过头）",
              "items": [
                "Rushiera",
                "d84200022f"
              ],
              "status": "done",
              "evidence": "git d842000"
            },
            {
              "v": "4613036",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.98b: 收工账面（git 档案同步）",
              "items": [
                "Rushiera",
                "4613036635"
              ],
              "status": "done",
              "evidence": "git 4613036"
            },
            {
              "v": "dae9ac4",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.00: 换引擎——Qwen3-Omni 转正（omni.py）+ 旧链封存 refuse/ + 转写操作面（提示词/自动开关/单测/无效状态列）",
              "items": [
                "Rushiera",
                "dae9ac477a"
              ],
              "status": "done",
              "evidence": "git dae9ac4"
            },
            {
              "v": "ade2959",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.01: 卫星线归档 · 引擎资产搬入 tools/",
              "items": [
                "Rushiera",
                "ade295952a"
              ],
              "status": "done",
              "evidence": "git ade2959"
            },
            {
              "v": "3799b66",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.02: 成套收敛（text 转正 · 不放音频副本）+ 无效状态二步确认——文档与回归面（代码面已随 v1.01 提交入库）",
              "items": [
                "Rushiera",
                "3799b66bb7"
              ],
              "status": "done",
              "evidence": "git 3799b66"
            },
            {
              "v": "8b45e55",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.03: 自动转写总闸 · 转写队列面 · 已就绪成套删除",
              "items": [
                "Rushiera",
                "8b45e55bc5"
              ],
              "status": "done",
              "evidence": "git 8b45e55"
            },
            {
              "v": "918f64f",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.03: todo 补自动分析总闸与档位条实点验收",
              "items": [
                "Rushiera",
                "918f64fb30"
              ],
              "status": "done",
              "evidence": "git 918f64f"
            },
            {
              "v": "9b41ee5",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.04: 任务槽解耦（转写链不再被自动分析挡）",
              "items": [
                "Rushiera",
                "9b41ee5f46"
              ],
              "status": "done",
              "evidence": "git 9b41ee5"
            },
            {
              "v": "0ba498a",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.04: 补提交面记述（非本方在途改动）",
              "items": [
                "Rushiera",
                "0ba498af67"
              ],
              "status": "done",
              "evidence": "git 0ba498a"
            },
            {
              "v": "968fac9",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.05: 条目补漏段 + 判据同源（1d4a21c9 判例）",
              "items": [
                "Rushiera",
                "968fac9fb8"
              ],
              "status": "done",
              "evidence": "git 968fac9"
            },
            {
              "v": "a02857f",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06: 自动转写补建档段（新文件不再漏推队列）",
              "items": [
                "Rushiera",
                "a02857f13d"
              ],
              "status": "done",
              "evidence": "git a02857f"
            },
            {
              "v": "a816e3e",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06: 收工核销（todo 清 4 条 + git-profile 同步状态）",
              "items": [
                "Rushiera",
                "a816e3e7a1"
              ],
              "status": "done",
              "evidence": "git a816e3e"
            },
            {
              "v": "5a9f58a",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.08: 连败不设上限 + 随带 v1.07 仅落后重跑",
              "items": [
                "Rushiera",
                "5a9f58a1bc"
              ],
              "status": "done",
              "evidence": "git 5a9f58a"
            },
            {
              "v": "ee69b5a",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.08: 收工核销（project 版本行 + git-profile 同步状态）",
              "items": [
                "Rushiera",
                "ee69b5a61f"
              ],
              "status": "done",
              "evidence": "git ee69b5a"
            },
            {
              "v": "053c77e",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.08: 收工核销（v1.07 提交面记述 + 口径计数 + todo）",
              "items": [
                "Rushiera",
                "053c77e1fe"
              ],
              "status": "done",
              "evidence": "git 053c77e"
            },
            {
              "v": "ba448a9",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.08: 收工核销（落后判据 x 数据处理轮 记 todo）",
              "items": [
                "Rushiera",
                "ba448a9e7d"
              ],
              "status": "done",
              "evidence": "git ba448a9"
            },
            {
              "v": "94c57bc",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.09: 数据处理轮（音频就绪→识别就绪预处理）",
              "items": [
                "Rushiera",
                "94c57bc717"
              ],
              "status": "done",
              "evidence": "git 94c57bc"
            },
            {
              "v": "fd77964",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.09: 收工补记（架构演进 + 行动面 + Git 档案）",
              "items": [
                "Rushiera",
                "fd77964661"
              ],
              "status": "done",
              "evidence": "git fd77964"
            },
            {
              "v": "9786cad",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.10: 阶段六列 + 收工（生成物刷新）",
              "items": [
                "Rushiera",
                "9786cad9ea"
              ],
              "status": "done",
              "evidence": "git 9786cad"
            },
            {
              "v": "145c314",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.12: 阶段五列（标识分配含姓名）+ 收工",
              "items": [
                "Rushiera",
                "145c314d1e"
              ],
              "status": "done",
              "evidence": "git 145c314"
            },
            {
              "v": "4ff4f15",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.12: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "4ff4f15e3b"
              ],
              "status": "done",
              "evidence": "git 4ff4f15"
            },
            {
              "v": "843b22c",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.15: 已归档回传改拆板块渲染（人读形态）",
              "items": [
                "Rushiera",
                "843b22c7fd"
              ],
              "status": "done",
              "evidence": "git 843b22c"
            },
            {
              "v": "92d7cff",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.15: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "92d7cff56d"
              ],
              "status": "done",
              "evidence": "git 92d7cff"
            },
            {
              "v": "15a958a",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.13: 收工补记（识别就绪三态 面板实点待办）",
              "items": [
                "Rushiera",
                "15a958aae5"
              ],
              "status": "done",
              "evidence": "git 15a958a"
            },
            {
              "v": "0b030cf",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.13: 收工补记（面板实点待办 + v1.14 D案记述）",
              "items": [
                "Rushiera",
                "0b030cfef4"
              ],
              "status": "done",
              "evidence": "git 0b030cf"
            },
            {
              "v": "3a2c5f5",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.14: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "3a2c5f5ca7"
              ],
              "status": "done",
              "evidence": "git 3a2c5f5"
            },
            {
              "v": "0df6b16",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.16: 模型与并发统一入口 + 跨轮次共享闸门",
              "items": [
                "Rushiera",
                "0df6b162d6"
              ],
              "status": "done",
              "evidence": "git 0df6b16"
            },
            {
              "v": "7e07dc4",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.16: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "7e07dc4130"
              ],
              "status": "done",
              "evidence": "git 7e07dc4"
            },
            {
              "v": "61aa54d",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.18: 数据处理提示词改版（第三人转告 + 挂机方字段）+ 存量清洗结果清空待重跑",
              "items": [
                "Rushiera",
                "61aa54d6b3"
              ],
              "status": "done",
              "evidence": "git 61aa54d"
            },
            {
              "v": "f3522d5",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.18 补：文档地图数据处理口径行格式修正",
              "items": [
                "Rushiera",
                "f3522d5fd4"
              ],
              "status": "done",
              "evidence": "git f3522d5"
            },
            {
              "v": "d73243a",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.17: 识别就绪列头清洗→识别 + 识别后字数 + 补表头",
              "items": [
                "Rushiera",
                "d73243ab81"
              ],
              "status": "done",
              "evidence": "git d73243a"
            },
            {
              "v": "5154569",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.17: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "5154569b02"
              ],
              "status": "done",
              "evidence": "git 5154569"
            },
            {
              "v": "b829a9d",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.19: 已归档就绪清单改表格",
              "items": [
                "Rushiera",
                "b829a9d565"
              ],
              "status": "done",
              "evidence": "git b829a9d"
            },
            {
              "v": "08de11c",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.19: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "08de11ca56"
              ],
              "status": "done",
              "evidence": "git 08de11c"
            },
            {
              "v": "3eb3d31",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.20: 数据处理总闸档位修复",
              "items": [
                "Rushiera",
                "3eb3d31741"
              ],
              "status": "done",
              "evidence": "git 3eb3d31"
            },
            {
              "v": "8157540",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.20: Git档案同步状态更新",
              "items": [
                "Rushiera",
                "8157540eb9"
              ],
              "status": "done",
              "evidence": "git 8157540"
            },
            {
              "v": "4da7536",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.21: 就绪清单可点看内容（三块共用小窗）+ 手工无效/已处理两处计数口径 + 数据处理清单并两段",
              "items": [
                "Rushiera",
                "4da7536474"
              ],
              "status": "done",
              "evidence": "git 4da7536"
            },
            {
              "v": "3e21d66",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.21: 收工补记（运行面在途产物 + 并行写入方重画不丢编辑）",
              "items": [
                "Rushiera",
                "3e21d66be5"
              ],
              "status": "done",
              "evidence": "git 3e21d66"
            },
            {
              "v": "f0ccd3f",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.21: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "f0ccd3fa1e"
              ],
              "status": "done",
              "evidence": "git f0ccd3f"
            },
            {
              "v": "8b35c15",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.22: 自动分析总闸轮内停止派发 + 面板重画不丢编辑",
              "items": [
                "Rushiera",
                "8b35c15921"
              ],
              "status": "done",
              "evidence": "git 8b35c15"
            },
            {
              "v": "45d1149",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.22: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "45d1149e00"
              ],
              "status": "done",
              "evidence": "git 45d1149"
            },
            {
              "v": "0ed0cb0",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.22: 收工补记（回归补跑核销）",
              "items": [
                "Rushiera",
                "0ed0cb0a19"
              ],
              "status": "done",
              "evidence": "git 0ed0cb0"
            },
            {
              "v": "eb54cb1",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.22: 收工补记（Git 档案同步状态 补记）",
              "items": [
                "Rushiera",
                "eb54cb1f20"
              ],
              "status": "done",
              "evidence": "git eb54cb1"
            },
            {
              "v": "e572837",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.23: 已知易错点形态整理 2385 到 43 条 + 疑义批量批复 399 到 26 条 + 口径分发",
              "items": [
                "Rushiera",
                "e57283749d"
              ],
              "status": "done",
              "evidence": "git e572837"
            },
            {
              "v": "83013ce",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.23: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "83013ce120"
              ],
              "status": "done",
              "evidence": "git 83013ce"
            },
            {
              "v": "4568034",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.24: 识别就绪面清空重跑 + 单条验证",
              "items": [
                "Rushiera",
                "4568034f1b"
              ],
              "status": "done",
              "evidence": "git 4568034"
            },
            {
              "v": "8c7b9f0",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.25: 事件驱动取件改退避重试（不自动回落）",
              "items": [
                "Rushiera",
                "8c7b9f0ef2"
              ],
              "status": "done",
              "evidence": "git 8c7b9f0"
            },
            {
              "v": "20c40e4",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.25: 收工补记（Git 档案同步状态）",
              "items": [
                "Rushiera",
                "20c40e4acb"
              ],
              "status": "done",
              "evidence": "git 20c40e4"
            },
            {
              "v": "a9f6a9e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.27: 音频就绪计数口径 + 成套读取口径",
              "items": [
                "Rushiera",
                "a9f6a9e1f2"
              ],
              "status": "done",
              "evidence": "git a9f6a9e"
            },
            {
              "v": "96fcd67",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.27: 运行面产物（kb/calls 应对话术模板）",
              "items": [
                "Rushiera",
                "96fcd67cc5"
              ],
              "status": "done",
              "evidence": "git 96fcd67"
            },
            {
              "v": "53be838",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.27: 运行面产物（kb/semantic 语义记录）",
              "items": [
                "Rushiera",
                "53be838207"
              ],
              "status": "done",
              "evidence": "git 53be838"
            },
            {
              "v": "281b6d8",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.27: 运行面产物（kb/clients · auto · raw 账本）",
              "items": [
                "Rushiera",
                "281b6d8d27"
              ],
              "status": "done",
              "evidence": "git 281b6d8"
            },
            {
              "v": "427d51f",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.27: 成套判据入 raw 约定（README）",
              "items": [
                "Rushiera",
                "427d51f107"
              ],
              "status": "done",
              "evidence": "git 427d51f"
            },
            {
              "v": "b7dd23e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.28: 模范应对面立项 + 应对库落地",
              "items": [
                "Rushiera",
                "b7dd23efa5"
              ],
              "status": "done",
              "evidence": "git b7dd23e"
            },
            {
              "v": "b815a2d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.29: 已归档删回传结果（单笔 / 批量）",
              "items": [
                "Rushiera",
                "b815a2d0b1"
              ],
              "status": "done",
              "evidence": "git b815a2d"
            },
            {
              "v": "6d8a64d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.30: 口径变更机械判据入文档地图 + 前文重刷",
              "items": [
                "Rushiera",
                "6d8a64dc2a"
              ],
              "status": "done",
              "evidence": "git 6d8a64d"
            },
            {
              "v": "ecad9a0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.30: project M92 入档 + git-profile 补记",
              "items": [
                "Rushiera",
                "ecad9a0bb0"
              ],
              "status": "done",
              "evidence": "git ecad9a0"
            },
            {
              "v": "c9ba039",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.31: 归组自愈 + 串行归组",
              "items": [
                "Rushiera",
                "c9ba039569"
              ],
              "status": "done",
              "evidence": "git c9ba039"
            },
            {
              "v": "e54cde4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.31: git-profile 同步状态补记",
              "items": [
                "Rushiera",
                "e54cde41ee"
              ],
              "status": "done",
              "evidence": "git e54cde4"
            },
            {
              "v": "d72830b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.31: 搬运账本随收工入档",
              "items": [
                "Rushiera",
                "d72830bc26"
              ],
              "status": "done",
              "evidence": "git d72830b"
            },
            {
              "v": "c9bf7e4",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.32: 口径源件自愈（送 LLM 前自动重刷前文）",
              "items": [
                "Rushiera",
                "c9bf7e488c"
              ],
              "status": "done",
              "evidence": "git c9bf7e4"
            },
            {
              "v": "ebed3d3",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.32: git-profile 同步状态补记",
              "items": [
                "Rushiera",
                "ebed3d356e"
              ],
              "status": "done",
              "evidence": "git ebed3d3"
            },
            {
              "v": "b10e3b6",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.32: todo 面板实点条目并入前文自愈 + 补实测结论",
              "items": [
                "Rushiera",
                "b10e3b69b1"
              ],
              "status": "done",
              "evidence": "git b10e3b6"
            },
            {
              "v": "ca5ab38",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.33: 教程录音（无效状态列第二档处置）",
              "items": [
                "Rushiera",
                "ca5ab38f03"
              ],
              "status": "done",
              "evidence": "git ca5ab38"
            },
            {
              "v": "107444b",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.33: git-profile 同步状态补记",
              "items": [
                "Rushiera",
                "107444b80c"
              ],
              "status": "done",
              "evidence": "git 107444b"
            },
            {
              "v": "d090088",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.35: 模范应对进档案时间线",
              "items": [
                "Rushiera",
                "d090088d87"
              ],
              "status": "done",
              "evidence": "git d090088"
            },
            {
              "v": "22bef0e",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.35: git-profile 同步状态补记",
              "items": [
                "Rushiera",
                "22bef0e50b"
              ],
              "status": "done",
              "evidence": "git 22bef0e"
            },
            {
              "v": "90ac97a",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.35: 客户档案重刷（模范应对进时间线）",
              "items": [
                "Rushiera",
                "90ac97ad27"
              ],
              "status": "done",
              "evidence": "git 90ac97a"
            },
            {
              "v": "d263caf",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.35: 客户档案重刷（自愈后续）",
              "items": [
                "Rushiera",
                "d263caf07f"
              ],
              "status": "done",
              "evidence": "git d263caf"
            },
            {
              "v": "af0bdca",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.35: git-profile 同步状态补记",
              "items": [
                "Rushiera",
                "af0bdca9f3"
              ],
              "status": "done",
              "evidence": "git af0bdca"
            },
            {
              "v": "22055f8",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.36: 回执合格性机械判据 + 全库清创",
              "items": [
                "Rushiera",
                "22055f8fad"
              ],
              "status": "done",
              "evidence": "git 22055f8"
            },
            {
              "v": "23f979e",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.36: git-profile 同步状态补记",
              "items": [
                "Rushiera",
                "23f979e54c"
              ],
              "status": "done",
              "evidence": "git 23f979e"
            },
            {
              "v": "363afe7",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.37: 运行面外置——共享 ComfyUI",
              "items": [
                "Rushiera",
                "363afe7863"
              ],
              "status": "done",
              "evidence": "git 363afe7"
            },
            {
              "v": "7c67f8f",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.37: git-profile 同步状态 + 文档地图勘误",
              "items": [
                "Rushiera",
                "7c67f8fc03"
              ],
              "status": "done",
              "evidence": "git 7c67f8f"
            },
            {
              "v": "b8be699",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.43: call scripts v3 + first-call template v2",
              "items": [
                "Rushiera",
                "b8be699815"
              ],
              "status": "done",
              "evidence": "git b8be699"
            },
            {
              "v": "f315447",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.44: LLM 端点换域适配（time.api.freeshare.tech）",
              "items": [
                "Rushiera",
                "f315447137"
              ],
              "status": "done",
              "evidence": "git f315447"
            },
            {
              "v": "9c829be",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.44: 补记 git-profile 同步状态",
              "items": [
                "Rushiera",
                "9c829bef8f"
              ],
              "status": "done",
              "evidence": "git 9c829be"
            },
            {
              "v": "08f2292",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.44: todo 并发共用条目 + git-profile HEAD",
              "items": [
                "Rushiera",
                "08f2292072"
              ],
              "status": "done",
              "evidence": "git 08f2292"
            }
          ]
        }
      ]
    }
  ]
};
