window.ARCH = {
  "meta": {
    "project": "Mau",
    "title": "Mau 提交时间线",
    "sub": "607 次提交 · 2026-08 → 2026-11",
    "ver": "ffe543cf",
    "updated": "2026-11-09",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\mau",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\mau (branch RushieraChange)"
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
              "v": "30252a39",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "Initial commit",
              "items": [
                "雾理莎",
                "30252a39d2"
              ],
              "status": "done",
              "evidence": "git 30252a39"
            },
            {
              "v": "ed03082b",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "P3 第一期：翻译器原型 + 10项目工程骨架 + README",
              "items": [
                "雾理莎",
                "ed03082b51"
              ],
              "status": "done",
              "evidence": "git ed03082b"
            },
            {
              "v": "cd7c58c8",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "G1: Git版本管理规范——主干开发/提交粒度/标签规则/黄金文件策略",
              "items": [
                "雾理莎",
                "cd7c58c838"
              ],
              "status": "done",
              "evidence": "git cd7c58c8"
            },
            {
              "v": "9cf9878d",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.18: P3.7-P3.9 翻译器5单元闭环——验证补全/worker+inbox异步生成/组合块生成+参数字段去重",
              "items": [
                "雾理莎",
                "9cf9878d6c"
              ],
              "status": "done",
              "evidence": "git 9cf9878d"
            },
            {
              "v": "c9db4e77",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.20: P4 前审计闭环——技术基座完整性里程碑",
              "items": [
                "雾理莎",
                "c9db4e77cf"
              ],
              "status": "done",
              "evidence": "git c9db4e77"
            },
            {
              "v": "c7cf884c",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.21 P4 全部完成——观察协议/热拔插/观察器服务/健壮性工程",
              "items": [
                "雾理莎",
                "c7cf884c1e"
              ],
              "status": "done",
              "evidence": "git c7cf884c"
            },
            {
              "v": "ebe27ee9",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.22 P4.5a: Mau.Runtime 基座机制补齐——OA/CommandBus/IdAllocator/ThreadGuard + HostSnapshot 透明度 + 12 测试",
              "items": [
                "雾理莎",
                "ebe27ee916"
              ],
              "status": "done",
              "evidence": "git ebe27ee9"
            },
            {
              "v": "3356de57",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.23 P4.5b-1: 积木百科全书 BricksCatalog + 批量移植 22 积木——FILE(11)/MATH(3)/DATA(6)/TEXT(1)/SHELL(1) + 文件头注释规范 + 输出端口生成 + L4 积木测试层",
              "items": [
                "雾理莎",
                "3356de57ad"
              ],
              "status": "done",
              "evidence": "git 3356de57"
            },
            {
              "v": "67e154de",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.24 P4.5b-2: 积木库全部落地——LLM(9)/Approval(4)/Office(4)/Log(4) 新增 21 积木，总计 41 积木 + BricksCatalog INDEX v2.0",
              "items": [
                "雾理莎",
                "67e154de60"
              ],
              "status": "done",
              "evidence": "git 67e154de"
            },
            {
              "v": "c3c3dc64",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "P4.5c mau serve 服务 + 语料模板 5 件 (v0.25)",
              "items": [
                "雾理莎",
                "c3c3dc64c4"
              ],
              "status": "done",
              "evidence": "git c3c3dc64"
            },
            {
              "v": "414be144",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "P4.5d build/publish 闭环：Roslyn Emit 无 SDK 构筑 + 独立部署发布 + L6 门禁 (v0.26)",
              "items": [
                "雾理莎",
                "414be14425"
              ],
              "status": "done",
              "evidence": "git 414be144"
            },
            {
              "v": "993eb8a0",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.27 翻译器扩展：实现接口声明（实现: 全限定名）+ 输出端口公开属性 + hello_cat/tool_cat 案例 (CH4 T1 反哺)",
              "items": [
                "雾理莎",
                "993eb8a041"
              ],
              "status": "done",
              "evidence": "git 993eb8a0"
            },
            {
              "v": "bd41ad21",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.29 框架闭合：L0 契约测试(9) + L6 E2E(2) 实化 + 门禁接入 8 项目 + 黄金对比 5 案例 + .gitignore 修正(generated-run/CatTemp)",
              "items": [
                "雾理莎",
                "bd41ad21ff"
              ],
              "status": "done",
              "evidence": "git bd41ad21"
            },
            {
              "v": "e5981ca6",
              "date": "08-04",
              "group": "2026-08",
              "lane": "other",
              "title": "契约可空化：OA.Post/Complete texts/paths 签名标注可空（对齐 IDog 语义，CH4 T2 反哺）",
              "items": [
                "雾理莎",
                "e5981ca66b"
              ],
              "status": "done",
              "evidence": "git e5981ca6"
            },
            {
              "v": "f1ed9336",
              "date": "08-05",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.30: README 运行时名词修复（CH 内核→Mau.Runtime，文档治理同步）",
              "items": [
                "雾理莎",
                "f1ed933676"
              ],
              "status": "done",
              "evidence": "git f1ed9336"
            },
            {
              "v": "7ee7ffb5",
              "date": "08-05",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.33: 机制积木6个+翻译器语义补齐（资源/析取/环豁免/注释/‖/数组类型）",
              "items": [
                "雾理莎",
                "7ee7ffb513"
              ],
              "status": "done",
              "evidence": "git 7ee7ffb5"
            },
            {
              "v": "0cd99ec9",
              "date": "08-05",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.34: CommandBus补强 BeginTickInput接口化+CommandPack.HasCommands邮件标志",
              "items": [
                "雾理莎",
                "0cd99ec953"
              ],
              "status": "done",
              "evidence": "git 0cd99ec9"
            },
            {
              "v": "5afb645a",
              "date": "08-05",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.35: 语言哲学落地 块格式命题+显式/轮末重置+重试降级+E2E3项+黄金重建",
              "items": [
                "雾理莎",
                "5afb645a54"
              ],
              "status": "done",
              "evidence": "git 5afb645a"
            },
            {
              "v": "7b6797fe",
              "date": "08-05",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.36: 机制下沉 FlowRegistry+FlowRunner+BrickRegistry线程安全+编译引用全量",
              "items": [
                "雾理莎",
                "7b6797fedd"
              ],
              "status": "done",
              "evidence": "git 7b6797fe"
            },
            {
              "v": "f0640ef2",
              "date": "08-05",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.37: Supervisor进程管理 AppRegistry+mau ps/kill+僵尸治理",
              "items": [
                "雾理莎",
                "f0640ef291"
              ],
              "status": "done",
              "evidence": "git f0640ef2"
            },
            {
              "v": "970c5c3e",
              "date": "08-05",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.38: Supervisor补全 SnapshotServer+mau status/snapshot+优雅kill+工具用法v0.3",
              "items": [
                "雾理莎",
                "970c5c3ee6"
              ],
              "status": "done",
              "evidence": "git 970c5c3e"
            },
            {
              "v": "d7252fe1",
              "date": "08-05",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.39: 仓库治理 README整合工程纪律+删AGENTS.md",
              "items": [
                "雾理莎",
                "d7252fe1cd"
              ],
              "status": "done",
              "evidence": "git d7252fe1"
            },
            {
              "v": "acda73ea",
              "date": "08-06",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.43: 模块化演进 双字典+数据流绑定+LLM/工具积木族+组模式",
              "items": [
                "雾理莎",
                "acda73eac5"
              ],
              "status": "done",
              "evidence": "git acda73ea"
            },
            {
              "v": "62476980",
              "date": "08-06",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.44: Shell工具适配器 ShellToolBrick+ClaimNext扩展",
              "items": [
                "雾理莎",
                "6247698040"
              ],
              "status": "done",
              "evidence": "git 62476980"
            },
            {
              "v": "10a37339",
              "date": "08-06",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.45: 错误消费积木+中间产物保留",
              "items": [
                "雾理莎",
                "10a37339ae"
              ],
              "status": "done",
              "evidence": "git 10a37339"
            },
            {
              "v": "05a53e3a",
              "date": "08-06",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.45b: BricksCatalog登记 错误消费积木+工具适配器族",
              "items": [
                "雾理莎",
                "05a53e3aa1"
              ],
              "status": "done",
              "evidence": "git 05a53e3a"
            },
            {
              "v": "3a3b17ee",
              "date": "08-06",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.46: 语义治理 BricksCatalog 82积木全量登记+OA/CMD/TOOL补全+SHELL去重",
              "items": [
                "雾理莎",
                "3a3b17ee4a"
              ],
              "status": "done",
              "evidence": "git 3a3b17ee"
            },
            {
              "v": "704c3d3b",
              "date": "08-06",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.46: README快速开始命令修正(verify/gen实际用法)",
              "items": [
                "雾理莎",
                "704c3d3b59"
              ],
              "status": "done",
              "evidence": "git 704c3d3b"
            },
            {
              "v": "3b4d7b40",
              "date": "08-06",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.48: T1积木索引机制——mau bricks命令+编号迁移+依赖行补全+门禁L4.5",
              "items": [
                "雾理莎",
                "3b4d7b40bf"
              ],
              "status": "done",
              "evidence": "git 3b4d7b40"
            },
            {
              "v": "eff2d8f1",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.49: T1债务全清+T2 mauproj组工程",
              "items": [
                "雾理莎",
                "eff2d8f173"
              ],
              "status": "done",
              "evidence": "git eff2d8f1"
            },
            {
              "v": "f5df4d5b",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.49: 修复gitignore误伤Mau.Bricks.Log(Log库入库)",
              "items": [
                "雾理莎",
                "f5df4d5b05"
              ],
              "status": "done",
              "evidence": "git f5df4d5b"
            },
            {
              "v": "591d677d",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.50: P6 mau check全谱校验器",
              "items": [
                "雾理莎",
                "591d677d79"
              ],
              "status": "done",
              "evidence": "git 591d677d"
            },
            {
              "v": "54eb59a4",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.51: R1 积木知识库治理——三件套闭环（Bricks文本库84积木/DataBox中台/翻译器内嵌BRIKGROUP/Mau.Bricks退役/仓库整洁）",
              "items": [
                "雾理莎",
                "54eb59a421"
              ],
              "status": "done",
              "evidence": "git 54eb59a4"
            },
            {
              "v": "797bc5ca",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.52: R1收尾修复——积木-基座API漂移补齐+索引治理+门禁退役段清理+黄金重建",
              "items": [
                "雾理莎",
                "797bc5caab"
              ],
              "status": "done",
              "evidence": "git 797bc5ca"
            },
            {
              "v": "91ea7eb6",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.52b: 清理 bricks test 误产物（file.write 默认参数落在仓库根）",
              "items": [
                "雾理莎",
                "91ea7eb650"
              ],
              "status": "done",
              "evidence": "git 91ea7eb6"
            },
            {
              "v": "aac1e1f6",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.52c: 跑测路径参数落系统临时目录——防仓库根污染",
              "items": [
                "雾理莎",
                "aac1e1f654"
              ],
              "status": "done",
              "evidence": "git aac1e1f6"
            },
            {
              "v": "e00b36bf",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.53: 审查漏洞修复——CLI唯一入口+Shell安全+凭证隔离+路径逃逸防护+发布链+零控制台",
              "items": [
                "雾理莎",
                "e00b36bf81"
              ],
              "status": "done",
              "evidence": "git e00b36bf"
            },
            {
              "v": "5fd2703f",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.54 审查修复：基线转绿 + Worker 加固 + 源码驱动索引",
              "items": [
                "雾理莎",
                "5fd2703f04"
              ],
              "status": "done",
              "evidence": "git 5fd2703f"
            },
            {
              "v": "aee5e764",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.55 防护定性：V1 红线化 + V2 撤销",
              "items": [
                "雾理莎",
                "aee5e76412"
              ],
              "status": "done",
              "evidence": "git aee5e764"
            },
            {
              "v": "c8ffbfd7",
              "date": "08-07",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.56: +mau bricks reseal 命令 + README v0.55 同步 + Bricks 校验尾归一",
              "items": [
                "雾理莎",
                "c8ffbfd70e"
              ],
              "status": "done",
              "evidence": "git c8ffbfd7"
            },
            {
              "v": "25c06140",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.57: +BRIK-OA-012 oa.complete_simple（无回执完成——CH4 P3.1 回执缺口定案）+ index 重建 85 积木",
              "items": [
                "雾理莎",
                "25c061404f"
              ],
              "status": "done",
              "evidence": "git 25c06140"
            },
            {
              "v": "060bdefe",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.58: +BRIK-CMD-006 cmd.is_key（指令分派判断——CH4 P3.5 生命周期指令闭环）+ index 86 积木",
              "items": [
                "雾理莎",
                "060bdefec4"
              ],
              "status": "done",
              "evidence": "git 060bdefe"
            },
            {
              "v": "5c3cc436",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.59: 基座下沉三件 ConfigStore/VersionInfo/CommandPump（CH4 M1 前置）+ M1BaseServicesTests 7 项",
              "items": [
                "雾理莎",
                "5c3cc43676"
              ],
              "status": "done",
              "evidence": "git 5c3cc436"
            },
            {
              "v": "acb97c46",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.60: 基座三分类 Dog/Pet（IDog/DogBase/IPet/PetBase + FlowRegistry kind 推断）+ BRIK-DOG 8 积木（CH4 M2 前置）+ CommandBricks 类别清单 +DOG",
              "items": [
                "雾理莎",
                "acb97c46fb"
              ],
              "status": "done",
              "evidence": "git acb97c46"
            },
            {
              "v": "dc9f1191",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.61: +BRIK-OA-013 complete_str（单键回执完成）+BRIK-OA-014 claim_one_simple（单数认领）+ dog.create 输出 officeId（M2 演示积木补丁）",
              "items": [
                "雾理莎",
                "dc9f1191c1"
              ],
              "status": "done",
              "evidence": "git dc9f1191"
            },
            {
              "v": "df5455c1",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.62: +BRIK-OA-015 complete_result（result/error 双键回执）+BRIK-OA-016 claim_next_simple（原子接单——M2b 工具 Cat 接单循环）",
              "items": [
                "雾理莎",
                "df5455c15f"
              ],
              "status": "done",
              "evidence": "git df5455c1"
            },
            {
              "v": "1e36aaa8",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.63: +BRIK-TOOL-012 tool.create_next（Dog 载体逐单发——游标 + DogBase + 载荷展平，M2b ToolPoster 发单核心）",
              "items": [
                "雾理莎",
                "1e36aaa818"
              ],
              "status": "done",
              "evidence": "git 1e36aaa8"
            },
            {
              "v": "5cc7b14f",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.64: +BRIK-TOOL-013 tool.run_generic（通用工具适配器——domain+toolName 路由 file.*/shell.exec，result/error 回执自动 Complete——M2b 工具 Cat 统一执行动作）",
              "items": [
                "雾理莎",
                "5cc7b14f4c"
              ],
              "status": "done",
              "evidence": "git 5cc7b14f"
            },
            {
              "v": "a7433ec6",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.65: +BRIK-DOG-009 collect_result（回执+载荷四键一次读）+ DogBase.GetPayloadStr + OA-016 多分隔符（M2b ToolPoster 回填定位）",
              "items": [
                "雾理莎",
                "a7433ec687"
              ],
              "status": "done",
              "evidence": "git a7433ec6"
            },
            {
              "v": "73fee3da",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.66: +依赖者批判报告 DEPENDENT-CRITIQUE（CH4 首依赖者三轮使用复盘——P0 调试基建/端口可构造性/语义文档，P1 可构造性审查/目录即清单）",
              "items": [
                "雾理莎",
                "73fee3daf3"
              ],
              "status": "done",
              "evidence": "git 73fee3da"
            },
            {
              "v": "2c29f072",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.67: 依赖者批判还债轮八模块闭环（R5工具链债+C2语义文档+D1行号映射+D2数据流日志+B1可构造性+E1黄金剥离+D3 mau debug+B2数组字面量）",
              "items": [
                "雾理莎",
                "2c29f0724b"
              ],
              "status": "done",
              "evidence": "git 2c29f072"
            },
            {
              "v": "c7a7cde0",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.67a: 全面跑测修复两处——mau debug 非交互挂死（ReadKey 限时轮询 10s）+ mauproj 文件行逗号分隔（AddList 与依赖/引用同规）",
              "items": [
                "雾理莎",
                "c7a7cde0f0"
              ],
              "status": "done",
              "evidence": "git c7a7cde0"
            },
            {
              "v": "62f80f30",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.68: M2c 基座补全——Dog 自动闭合（FlowRunner 帧末回收）+ run_generic office 域 + data.box_is 判断积木",
              "items": [
                "雾理莎",
                "62f80f308b"
              ],
              "status": "done",
              "evidence": "git 62f80f30"
            },
            {
              "v": "720d4ce6",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.69: M2c 六域积木——system.info/snapshot/env + math.random_int + csharp.compile 占位 + mau.build CLI 封装 + run_generic 六域路由",
              "items": [
                "雾理莎",
                "720d4ce6f2"
              ],
              "status": "done",
              "evidence": "git 720d4ce6"
            },
            {
              "v": "a38cd45b",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.70: 外部包接入协议 PACK——积木文件头 +包: 字段 + index.json packages 汇总 + V10 包一致性门禁 + README §七",
              "items": [
                "雾理莎",
                "a38cd45b33"
              ],
              "status": "done",
              "evidence": "git a38cd45b"
            },
            {
              "v": "a336aabe",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.71: M2d.1 Roslyn 接入——ICSharpBridge 接口（Runtime 零依赖）+ MauRoslynBridge 实现（多树隔离）+ csharp 15 积木（PACK 协议）",
              "items": [
                "雾理莎",
                "a336aabe14"
              ],
              "status": "done",
              "evidence": "git a336aabe"
            },
            {
              "v": "c186c4a5",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.72: PACK 类 BRIK 落地——IPackBridge 单方法调度 + Mau.Office 独立程序集（OfficeBridge）+ excel/word/csharp 三桥 + 15+4 积木改 PACK 调度（非 PACK 类零包声明）",
              "items": [
                "雾理莎",
                "c186c4a594"
              ],
              "status": "done",
              "evidence": "git c186c4a5"
            },
            {
              "v": "ac9f9bfd",
              "date": "08-08",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.72 补记: Bricks README v3.0——PACK v2 定稿（外部包接口隔离 + 普通积木零包声明 + 源码积木化长期方向）",
              "items": [
                "雾理莎",
                "ac9f9bfd3e"
              ],
              "status": "done",
              "evidence": "git ac9f9bfd"
            },
            {
              "v": "d7ba2ada",
              "date": "08-09",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.73: E2 数组跑测解锁（IsPrimitivePort/DefaultValue T[] 分支）+ PACK.7 V11 契约 schema 校验（调用方 Invoke+参数 vs PACK 声明漂移 FAIL）",
              "items": [
                "雾理莎",
                "d7ba2ada18"
              ],
              "status": "done",
              "evidence": "git d7ba2ada"
            },
            {
              "v": "9f1f2b6c",
              "date": "08-09",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.74: 审查修复轮——Mau.Office→Mau.WorkApp 改名 + 文档账对齐（reseal 链路/目录即清单/类别页）+ CliSupport 收敛 + V9 豁免/ID 校验/注释补齐",
              "items": [
                "雾理莎",
                "9f1f2b6ce1"
              ],
              "status": "done",
              "evidence": "git 9f1f2b6c"
            },
            {
              "v": "659c4ae1",
              "date": "08-09",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.76: run_generic csharp 域路由补全 14 工具（CH4 M2d.1）——BRIK-TOOL-013 + 依赖字段 + reseal + index 重建",
              "items": [
                "雾理莎",
                "659c4ae170"
              ],
              "status": "done",
              "evidence": "git 659c4ae1"
            },
            {
              "v": "e3804b1c",
              "date": "08-09",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.77: 审批结果留痕——ApprovalStore 统一入口 + approval.result 积木（M3.2 请求方感知）",
              "items": [
                "雾理莎",
                "e3804b1cfd"
              ],
              "status": "done",
              "evidence": "git e3804b1c"
            },
            {
              "v": "13f1fbf1",
              "date": "08-09",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.78: LlmBridge多配置表 + ui.*积木族(snapshot_chat/push/window_event) + IPet DIM——CH4 M3.3b/PUI驱动",
              "items": [
                "雾理莎",
                "13f1fbf1a2"
              ],
              "status": "done",
              "evidence": "git 13f1fbf1"
            },
            {
              "v": "b1636465",
              "date": "08-09",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.79: 多猫框架基座——CAT 类别积木（scan_instances/tools_json）+ UI 积木族扩展（snapshot_home/config/profile_*/config_*）+ CMD 路由（is_key_first/active_key）+ 工具名规范（DeepSeek 禁点号）+ AppDataConfig 配置持久化（%LOCALAPPDATA%/Mau_wls/CatHome4/）+ CredentialStore 落盘",
              "items": [
                "雾理莎",
                "b1636465f9"
              ],
              "status": "done",
              "evidence": "git b1636465"
            },
            {
              "v": "3c226bed",
              "date": "08-09",
              "group": "2026-08",
              "lane": "docs",
              "title": "docs: README 全面更新——v0.79 积木 141 + CAT 类别 + AppDataConfig 配置持久化 + 工具名规范 + 数据结构",
              "items": [
                "雾理莎",
                "3c226bed2f"
              ],
              "status": "done",
              "evidence": "git 3c226bed"
            },
            {
              "v": "348b072a",
              "date": "08-09",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.79: BoxStore.SetDic 放宽数组JSON——CH4多猫工具DataBox通道前置",
              "items": [
                "雾理莎",
                "348b072a21"
              ],
              "status": "done",
              "evidence": "git 348b072a"
            },
            {
              "v": "3bcdf6a9",
              "date": "08-09",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.80: 注入字段语法（注入: 文件头声明——宿主 Set 注入纯赋值）+ Fire 契约清单进生成物（黄金锁定签名漂移）+ L4 宿主桥判定修复（is_tool/ctx_push_tool 真实覆盖，chat/stream/completions 诚实 SKIP）——M51/M52/M53 根治；黄金全量重建（Fire 契约注释）",
              "items": [
                "雾理莎",
                "3bcdf6a997"
              ],
              "status": "done",
              "evidence": "git 3bcdf6a9"
            },
            {
              "v": "8633e4a8",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.81: M3.4伴随轮——CommandBus Unicode/KeySegment + ctx_rollback防御 + LlmProfile Secret + BRIK-WIN 3 + 审计体系立项",
              "items": [
                "雾理莎",
                "8633e4a813"
              ],
              "status": "done",
              "evidence": "git 8633e4a8"
            },
            {
              "v": "40bdcf8c",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.82: 审计体系全链路（A.1-A.6）+ win.open_dir 跑测副作用修复",
              "items": [
                "雾理莎",
                "40bdcf8c0a"
              ],
              "status": "done",
              "evidence": "git 40bdcf8c"
            },
            {
              "v": "36a86aa7",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.82a: sys.* 实时态段（G2——keys/flow/oa DataBox 当前态）+ 测试 3 项",
              "items": [
                "雾理莎",
                "36a86aa775"
              ],
              "status": "done",
              "evidence": "git 36a86aa7"
            },
            {
              "v": "c3e23d3c",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.83: 基建评审GAP.1/2落地——InvokeOnMain原语(投递+等待+超时+异常重抛)+CommandBus.GetKeyDic锁内化+查询线程安全契约",
              "items": [
                "雾理莎",
                "c3e23d3cbc"
              ],
              "status": "done",
              "evidence": "git c3e23d3c"
            },
            {
              "v": "10fccfbb",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.84: PipeService管道服务基座——SnapshotServer/MauServeWorker/Ch4ServeServer三套样板合一+Stop自连打断+测试5项",
              "items": [
                "雾理莎",
                "10fccfbb4a"
              ],
              "status": "done",
              "evidence": "git 10fccfbb"
            },
            {
              "v": "b9a49ae1",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.85: 基建评审GAP.4/5——审计段分界透明化(数据源标注+落盘策略文档化)+publish文件锁检测(占用探测+产物时间戳校验)",
              "items": [
                "雾理莎",
                "b9a49ae1aa"
              ],
              "status": "done",
              "evidence": "git b9a49ae1"
            },
            {
              "v": "55a46dad",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.86: LogEntry+Frame字段——FlowRunner.GlobalFrame日志帧号坐标(LogsTab第三栏显示)+积木谱黄金重建",
              "items": [
                "雾理莎",
                "55a46dad78"
              ],
              "status": "done",
              "evidence": "git 55a46dad"
            },
            {
              "v": "5fb7f5d6",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.86: 日志类别体系(LogEntry.Category C/O类+CommandBus严格来源source+OA埋点+sys.cmdlog/olog)",
              "items": [
                "雾理莎",
                "5fb7f5d647"
              ],
              "status": "done",
              "evidence": "git 5fb7f5d6"
            },
            {
              "v": "c6d2460d",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.86a: Log类别落盘覆盖(G1磁盘格式+Category段 G2 log.all输出类别+校验尾)",
              "items": [
                "雾理莎",
                "c6d2460db4"
              ],
              "status": "done",
              "evidence": "git c6d2460d"
            },
            {
              "v": "2feca420",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.86b: LlmSession.HasActiveSession + BRIK-UI-001 streaming判定改活跃会话(修复完成后streaming永久true)",
              "items": [
                "雾理莎",
                "2feca420ec"
              ],
              "status": "done",
              "evidence": "git 2feca420"
            },
            {
              "v": "ac218ccf",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.87: BRIK-UI-001 放行 Tool/Error 角色——工具结果进快照（CH4 v1.5b 配套）",
              "items": [
                "雾理莎",
                "ac218ccf63"
              ],
              "status": "done",
              "evidence": "git ac218ccf"
            },
            {
              "v": "c85e75a9",
              "date": "08-10",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.88: GAP.7 sys.llm——LLM会话透明查询(LlmSession.GetActiveSessions+LlmStreamSession.CreatedAt+sys.llm十指令+测试)",
              "items": [
                "雾理莎",
                "c85e75a9f4"
              ],
              "status": "done",
              "evidence": "git c85e75a9"
            },
            {
              "v": "59de1040",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.89: CH4 v1.6 流式填充配套——积木153（+6 tool.display/content_empty/retry_empty/round_stats_text/ctx_push_system/has_active_session）+ ShellBridge + usage解析 + create_next分档/路径映射",
              "items": [
                "雾理莎",
                "59de10401d"
              ],
              "status": "done",
              "evidence": "git 59de1040"
            },
            {
              "v": "a9b414bd",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.90: RB.3 P0三件首修——⑥生命周期契约(Reset全家+绑定先清空D27+原子切换D28)+D24发布分级(check --selftest+D24冒烟最小闭环)+D25引用确定性(ResolveReferences+CompileManyWithRefs+BuildSdkGroup显式引用); tool.create_next补using System",
              "items": [
                "雾理莎",
                "a9b414bd41"
              ],
              "status": "done",
              "evidence": "git a9b414bd"
            },
            {
              "v": "a6a19868",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.91: Build全链聚合①落地——mau up聚合器(清单解析+列表指纹/块尾双机制+拓扑执行+CatTemp中间态+D22进程内执行); Mau.build自检清单; publish outDir绝对路径规范化",
              "items": [
                "雾理莎",
                "a6a19868d9"
              ],
              "status": "done",
              "evidence": "git a6a19868"
            },
            {
              "v": "9665178a",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.91b: 聚合器工作目录=仓库根(FindRepoRoot)——外部命令/进程内命令相对路径统一基于仓库根解析(清单目录是 CatTemp 时不再错位)",
              "items": [
                "雾理莎",
                "9665178aa9"
              ],
              "status": "done",
              "evidence": "git 9665178a"
            },
            {
              "v": "6841d710",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.92: 聚合器增强——输入基准=仓库根(InputBaseDir)+产物目录排除(bin/obj/Debug/Release不参与指纹,防dotnet build漂移)+CH4.build五环节实机验证",
              "items": [
                "雾理莎",
                "6841d71011"
              ],
              "status": "done",
              "evidence": "git 6841d710"
            },
            {
              "v": "41b34b82",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.93: ②Runtime热感知落地——FlowWatchService(产物目录指纹轮询+D5-D9:帧节流/pending标记/按dll粒度)+FlowHost.ReloadFlows(D8/D10:原子替换+失败保留旧+报告)+FlowHandle.SourceDll+FlowALC.LoadShared(FileShare.ReadWrite|Delete不锁文件——热重载原子替换前置); HotReload+4/FlowWatch 8测试→Runtime 128",
              "items": [
                "雾理莎",
                "41b34b82ca"
              ],
              "status": "done",
              "evidence": "git 41b34b82"
            },
            {
              "v": "187883fc",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.95: RB.3③④⑤⑦完成——QueryBus统一查询通道(sys.query出口+线程域自动投递)+快照聚合sys.summary一屏看全+噪音过滤(--verbose两级,mau test 190→15行)+单实例互斥无超时(MauCmdMutex+MAU_INNER_CHILD豁免+FindLockedFile公共化); QueryBusTests 14→Runtime 142+七区块完整跑测全绿",
              "items": [
                "雾理莎",
                "187883fcf1"
              ],
              "status": "done",
              "evidence": "git 187883fc"
            },
            {
              "v": "7681e92b",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.96: 审查修复轮——死代码删除(CommandBus.IsAsciiLetter/OA.CopyArray)+九类重复实现收拢(HashUtil/TextUtil/TypeMap/PipeClient/AtomicWrite/FindRepoRoot/BuildMinimalCorpus/ChecksumPrefix/FlowNameFromPath)+版本号唯一事实源(csproj显式Version+横幅读VersionInfo)",
              "items": [
                "雾理莎",
                "7681e92b65"
              ],
              "status": "done",
              "evidence": "git 7681e92b"
            },
            {
              "v": "c1334584",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.97: 文档治理轮——design大瘦身14到5活文档+五维修复(csproj 0.97/README 153/design-status v3.0/rebuild文件头v0.8/R5C2状态同步/P4归位/Learn补漏)+Mau身份反蒸(skill v1.9/exp v1.33/tools v1.3)",
              "items": [
                "雾理莎",
                "c1334584ab"
              ],
              "status": "done",
              "evidence": "git c1334584"
            },
            {
              "v": "e9a64e00",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.98: 外部评审修复轮——Corpus模板库重写入门禁(0/5到4/4verify+check[E]段)+README积木表格漂移修复(142到153+WIN类别)+组合通道experimental定标+ALC弱引用回收断言(V10+TryUnload语义)+Observer loopback",
              "items": [
                "雾理莎",
                "e9a64e00ca"
              ],
              "status": "done",
              "evidence": "git e9a64e00"
            },
            {
              "v": "bfce7b16",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.99: D.2流式分片合并基座——LlmStreamSession ContentBuilder累积+BRIK-LLM-027 ctx_push_stream+UI-001 streamText改读会话",
              "items": [
                "雾理莎",
                "bfce7b16e5"
              ],
              "status": "done",
              "evidence": "git bfce7b16"
            },
            {
              "v": "eff957f2",
              "date": "08-11",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.99b: 索引源码驱动重建（index --update）——登记流程身份化（exp v1.36/skill v1.10/tools v1.4）",
              "items": [
                "雾理莎",
                "eff957f2a8"
              ],
              "status": "done",
              "evidence": "git eff957f2"
            },
            {
              "v": "83c71572",
              "date": "08-12",
              "group": "2026-08",
              "lane": "other",
              "title": "v1.00: D.3配套（LLM-028思考/NOTE-001内置Note/MarkdownParser下沉/BoxStore放宽）",
              "items": [
                "雾理莎",
                "83c7157263"
              ],
              "status": "done",
              "evidence": "git 83c71572"
            },
            {
              "v": "e3e7ffae",
              "date": "08-12",
              "group": "2026-08",
              "lane": "other",
              "title": "v1.00b: Mau.Cli版本号1.00同步（版本号唯一事实源）",
              "items": [
                "雾理莎",
                "e3e7ffaeed"
              ],
              "status": "done",
              "evidence": "git e3e7ffae"
            },
            {
              "v": "396cec76",
              "date": "08-12",
              "group": "2026-08",
              "lane": "other",
              "title": "v1.01: 工具可用性基座——cat.tools_json参数schema/错误可见性/观测埋点/空路径",
              "items": [
                "雾理莎",
                "396cec762a"
              ],
              "status": "done",
              "evidence": "git 396cec76"
            },
            {
              "v": "ebecab8f",
              "date": "08-12",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.97: V2.0重构声明 + 移除DEPENDENT-CRITIQUE（归档CCBP）",
              "items": [
                "雾理莎",
                "ebecab8f8c"
              ],
              "status": "done",
              "evidence": "git ebecab8f"
            },
            {
              "v": "49c8f6b2",
              "date": "08-12",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.0.2-M7: 翻译器v2五阶段流水线落地",
              "items": [
                "雾理莎",
                "49c8f6b24f"
              ],
              "status": "done",
              "evidence": "git 49c8f6b2"
            },
            {
              "v": "6e336d14",
              "date": "08-12",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.0.2-M8: 黄金重建+积木契约+CLI接入（CheckBricks E220-222/真实积木调用+BRIKGROUP/自动审计+[!]日志/verify-gen切v2/黄金重建——mau test MAU_CHECKS_OK + check 208/208）",
              "items": [
                "雾理莎",
                "6e336d14ce"
              ],
              "status": "done",
              "evidence": "git 6e336d14"
            },
            {
              "v": "a09623db",
              "date": "08-12",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.0.5: CH4复杂案例v2化+黄金测试重建+积木修正",
              "items": [
                "雾理莎",
                "a09623db6c"
              ],
              "status": "done",
              "evidence": "git a09623db"
            },
            {
              "v": "75244a9a",
              "date": "08-12",
              "group": "2026-08",
              "lane": "other",
              "title": "v1.01: 程序集版本同步(V2.0.5收工)",
              "items": [
                "雾理莎",
                "75244a9a4f"
              ],
              "status": "done",
              "evidence": "git 75244a9a"
            },
            {
              "v": "5e68f406",
              "date": "08-12",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.0.6: CLI重建——全链v2迁移+v1退役+时序报告+kill --all+check --analyze",
              "items": [
                "雾理莎",
                "5e68f40639"
              ],
              "status": "done",
              "evidence": "git 5e68f406"
            },
            {
              "v": "2d88e4f6",
              "date": "08-13",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.0.7: 生成器3修复——注入Setter PascalCase/Cube复位/资源初始值",
              "items": [
                "雾理莎",
                "2d88e4f6ad"
              ],
              "status": "done",
              "evidence": "git 2d88e4f6"
            },
            {
              "v": "4c09ff2a",
              "date": "08-13",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.0.8: RT系列超时治理与∥生成器落地",
              "items": [
                "雾理莎",
                "4c09ff2ac1"
              ],
              "status": "done",
              "evidence": "git 4c09ff2a"
            },
            {
              "v": "c6dbb4e1",
              "date": "08-13",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.0.9: 黄金哈希化——expected全文退役转哈希哨兵",
              "items": [
                "雾理莎",
                "c6dbb4e1a1"
              ],
              "status": "done",
              "evidence": "git c6dbb4e1"
            },
            {
              "v": "bcdccef2",
              "date": "08-13",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.1.0: 边界重定轮——产品积木机制+积木库纯化+零跨仓引用铁律",
              "items": [
                "雾理莎",
                "bcdccef2f9"
              ],
              "status": "done",
              "evidence": "git bcdccef2"
            },
            {
              "v": "3cd7c02a",
              "date": "08-13",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.1.1: T4模块谱压测台（三案例+probe.sink_slow+9测试+7语义边界+透明度缺口T6立项）",
              "items": [
                "雾理莎",
                "3cd7c02add"
              ],
              "status": "done",
              "evidence": "git 3cd7c02a"
            },
            {
              "v": "e8f337ca",
              "date": "08-13",
              "group": "2026-08",
              "lane": "other",
              "title": "v2.1.2: A类技术债清理——CLI 6命令退役（run/serve/serve-work/export/import/check --analyze）+ Mau.Observer/Mau.Serve/Mau.Serve.Tests 项目退役 + Mau.Corpus 空壳删除 + 门禁八段→七段（莎立项去留审查第一轮）",
              "items": [
                "雾理莎",
                "e8f337ca74"
              ],
              "status": "done",
              "evidence": "git e8f337ca"
            },
            {
              "v": "f7c0313a",
              "date": "08-14",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.0.1: P1-P3 完成——语言内核v3+Runtime纯化+观测支柱",
              "items": [
                "雾理莎",
                "f7c0313a92"
              ],
              "status": "done",
              "evidence": "git f7c0313a"
            },
            {
              "v": "148bdebb",
              "date": "08-14",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.0.2: P4-P6完成+积木最小化+工具链收拢+OA标识符清洗",
              "items": [
                "雾理莎",
                "148bdebbb8"
              ],
              "status": "done",
              "evidence": "git 148bdebb"
            },
            {
              "v": "511451f9",
              "date": "08-14",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.0.3: 文档轮——README现状页+积木README+黄金README+非v3残留清理",
              "items": [
                "雾理莎",
                "511451f973"
              ],
              "status": "done",
              "evidence": "git 511451f9"
            },
            {
              "v": "9040703d",
              "date": "08-14",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.0.7: 盒子数据面体系重推——@私有/全局两档+壳协程+P2a语料+ILlmRuntime内建",
              "items": [
                "雾理莎",
                "9040703d1e"
              ],
              "status": "done",
              "evidence": "git 9040703d"
            },
            {
              "v": "7f01c69c",
              "date": "08-14",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.0.7: 程序集版本同步",
              "items": [
                "雾理莎",
                "7f01c69ca9"
              ],
              "status": "done",
              "evidence": "git 7f01c69c"
            },
            {
              "v": "cf0dee8a",
              "date": "08-14",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.0.8: 代码审查轮——格式注释修复+join残留删除",
              "items": [
                "雾理莎",
                "cf0dee8a83"
              ],
              "status": "done",
              "evidence": "git cf0dee8a"
            },
            {
              "v": "e3145598",
              "date": "08-15",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.12: CH4 P2闭环——Command语义⇚+B1豁免+is_done/get_result_str积木+CH4.Entry宿主端到端贯通",
              "items": [
                "雾理莎",
                "e3145598c7"
              ],
              "status": "done",
              "evidence": "git e3145598"
            },
            {
              "v": "ed65aac4",
              "date": "08-15",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.12.1: TokenIds注释勘误——符号15+值6=21（黄金零漂移原则）",
              "items": [
                "雾理莎",
                "ed65aac49e"
              ],
              "status": "done",
              "evidence": "git ed65aac4"
            },
            {
              "v": "fefd36c5",
              "date": "08-15",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.0.9: CH4 P3验收——D1热重载修复+负例谱+观测落盘",
              "items": [
                "雾理莎",
                "fefd36c5b3"
              ],
              "status": "done",
              "evidence": "git fefd36c5"
            },
            {
              "v": "cfc09dd7",
              "date": "08-15",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.0.10: DeepSeek模型名替换v4-flash兜底",
              "items": [
                "雾理莎",
                "cfc09dd789"
              ],
              "status": "done",
              "evidence": "git cfc09dd7"
            },
            {
              "v": "2ff25415",
              "date": "08-16",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.16: CH4 P4流式+配置项收官——ILlmRuntime流式接口+DeepSeekLlmRuntime SSE流式+三积木llm.stream/chunk_ready/done_ready+QuickCat语料流式化+llm.cfg配置拉起+Remove语义",
              "items": [
                "雾理莎",
                "2ff25415d7"
              ],
              "status": "done",
              "evidence": "git 2ff25415"
            },
            {
              "v": "063f1c6a",
              "date": "08-16",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.16.1: llm.stream代码审查补漏——三元语法糖展开+契约补Remove副作用声明",
              "items": [
                "雾理莎",
                "063f1c6a3e"
              ],
              "status": "done",
              "evidence": "git 063f1c6a"
            },
            {
              "v": "5a92fb9a",
              "date": "08-16",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.1.0: P5工具协调与前文持久化",
              "items": [
                "雾理莎",
                "5a92fb9ad1"
              ],
              "status": "done",
              "evidence": "git 5a92fb9a"
            },
            {
              "v": "d45afb8a",
              "date": "08-16",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.1.1: 热重载补修",
              "items": [
                "雾理莎",
                "d45afb8ac8"
              ],
              "status": "done",
              "evidence": "git d45afb8a"
            },
            {
              "v": "e9db9a96",
              "date": "08-17",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.2.0: 架构调整轮——Providers/上下文/宿主拆分+格式审查",
              "items": [
                "雾理莎",
                "e9db9a96ee"
              ],
              "status": "done",
              "evidence": "git e9db9a96"
            },
            {
              "v": "49682c86",
              "date": "08-17",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.3.0: P6外观层协议+统一构筑链部署架构——HttpHost/Kestrel+Minimal API 外挂协议v1 + mau proj 组翻译落盘(BRIKGROUP共享闭包)+dotnet build + 产物双区public/+Mau-public/ + 引用源铁律 + Roslyn退出构筑主链 + 平替性实验通过 + 宿主无参默认Flows加载",
              "items": [
                "雾理莎",
                "49682c86a6"
              ],
              "status": "done",
              "evidence": "git 49682c86"
            },
            {
              "v": "e75255b8",
              "date": "08-17",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.3.0: 程序集版本同步 3.1.1→3.3.0（P6 部署架构轮）",
              "items": [
                "雾理莎",
                "e75255b857"
              ],
              "status": "done",
              "evidence": "git e75255b8"
            },
            {
              "v": "a8cc45c2",
              "date": "08-17",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.3.1: P6b外观层v2三区重构+MAU_LLM_*配置全局化——快照v1.1(boxes+?logs=N) + html三区页签 + 配置拉取env兜底 + 协议文档演进",
              "items": [
                "雾理莎",
                "a8cc45c233"
              ],
              "status": "done",
              "evidence": "git a8cc45c2"
            },
            {
              "v": "250fba92",
              "date": "08-17",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.3.2: P6c配置区v3——/api/v1/config读写(掩码+落盘) + HTML配置页签 + 代码质量审查(缩进修复/飞线清理)",
              "items": [
                "雾理莎",
                "250fba92d6"
              ],
              "status": "done",
              "evidence": "git 250fba92"
            },
            {
              "v": "27017d25",
              "date": "08-18",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.4.0: P7裂缝修复+D5可见度架构+D6警告收敛",
              "items": [
                "雾理莎",
                "27017d25ed"
              ],
              "status": "done",
              "evidence": "git 27017d25"
            },
            {
              "v": "67af51b5",
              "date": "08-18",
              "group": "2026-08",
              "lane": "docs",
              "title": "docs: P7主线审计报告落盘（五线反证+三段式结论）",
              "items": [
                "雾理莎",
                "67af51b536"
              ],
              "status": "done",
              "evidence": "git 67af51b5"
            },
            {
              "v": "332cd05b",
              "date": "08-18",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.6.0: P7b七件partial拆分+审计缺口四条闭环",
              "items": [
                "雾理莎",
                "332cd05bb2"
              ],
              "status": "done",
              "evidence": "git 332cd05b"
            },
            {
              "v": "f2dd0769",
              "date": "08-19",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.7.0: P8 一期工具组 + O 系列统一观测（LogStore V2/审计并入/帧流/四文件 runs）",
              "items": [
                "雾理莎",
                "f2dd07699d"
              ],
              "status": "done",
              "evidence": "git f2dd0769"
            },
            {
              "v": "272799d7",
              "date": "08-19",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.27: B3+B4 工具域实装与对话区",
              "items": [
                "雾理莎",
                "272799d73a"
              ],
              "status": "done",
              "evidence": "git 272799d7"
            },
            {
              "v": "0562d921",
              "date": "08-19",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.28: P8二期OA走单+DevCat 7线认领+7积木+FALLBACK+语料面收敛",
              "items": [
                "雾理莎",
                "0562d9217f"
              ],
              "status": "done",
              "evidence": "git 0562d921"
            },
            {
              "v": "2150592c",
              "date": "08-20",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.29: P8三期Roslyn cs.*编码工具域（ICSharpBridge+MauRoslynBridge磁盘权威缓存桥）+dev_cat 16线+积木收窄9",
              "items": [
                "雾理莎",
                "2150592c40"
              ],
              "status": "done",
              "evidence": "git 2150592c"
            },
            {
              "v": "f588c765",
              "date": "08-20",
              "group": "2026-08",
              "lane": "docs",
              "title": "docs: README 双区块重构（理想目标+仓库地图+CH4宿主呈现）",
              "items": [
                "雾理莎",
                "f588c765f4"
              ],
              "status": "done",
              "evidence": "git f588c765"
            },
            {
              "v": "c646a752",
              "date": "08-20",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.31: P8.5b真实自举里程碑+host.reload+命名空间寻址+D8清偿",
              "items": [
                "雾理莎",
                "c646a75297"
              ],
              "status": "done",
              "evidence": "git c646a752"
            },
            {
              "v": "ed63c621",
              "date": "08-20",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.31.1: 质量修复——会话指令泵化+host延迟直执+格式规范+BOM恢复",
              "items": [
                "雾理莎",
                "ed63c62106"
              ],
              "status": "done",
              "evidence": "git ed63c621"
            },
            {
              "v": "02326d99",
              "date": "08-20",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.32.0: P8.5c CCBP试探完成+host.reload修复+质量轮",
              "items": [
                "雾理莎",
                "02326d99e0"
              ],
              "status": "done",
              "evidence": "git 02326d99"
            },
            {
              "v": "a88f912a",
              "date": "08-20",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.33.0: P8.5d配置自改+文档统一性审查",
              "items": [
                "雾理莎",
                "a88f912a76"
              ],
              "status": "done",
              "evidence": "git a88f912a"
            },
            {
              "v": "80b7f882",
              "date": "08-21",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.34: 全量审查轮——死代码残留清理+文档同步（基座 v3.10.0）",
              "items": [
                "雾理莎",
                "80b7f88292"
              ],
              "status": "done",
              "evidence": "git 80b7f882"
            },
            {
              "v": "8477d406",
              "date": "08-21",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.10.1: 勘误——DefaultAppearance 头注释字形计数同步（15单字+2多字，@退役）",
              "items": [
                "雾理莎",
                "8477d406d7"
              ],
              "status": "done",
              "evidence": "git 8477d406"
            },
            {
              "v": "3c6656e3",
              "date": "08-21",
              "group": "2026-08",
              "lane": "other",
              "title": "v3.11.0: 质量处理轮——热重载事务回收/子进程死锁根治/SSE有界队列/Test SDK双路/快照DTO init",
              "items": [
                "雾理莎",
                "3c6656e30d"
              ],
              "status": "done",
              "evidence": "git 3c6656e3"
            },
            {
              "v": "b3d5ed8b",
              "date": "08-21",
              "group": "2026-08",
              "lane": "docs",
              "title": "docs: README 重写——立项目标 + 纯净部署序与常用指令（两段式精简）",
              "items": [
                "雾理莎",
                "b3d5ed8b56"
              ],
              "status": "done",
              "evidence": "git b3d5ed8b"
            },
            {
              "v": "2a0d7ac0",
              "date": "08-21",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.38.0: P9.1 会话对象化 + P9.2 盒桥 Key 段化（Mau v3.12.0）",
              "items": [
                "雾理莎",
                "2a0d7ac073"
              ],
              "status": "done",
              "evidence": "git 2a0d7ac0"
            },
            {
              "v": "43a61d1b",
              "date": "08-24",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.39.0: P9.3-P9.5 多猫并发收官——Mau v3.13.0",
              "items": [
                "雾理莎",
                "43a61d1bb5"
              ],
              "status": "done",
              "evidence": "git 43a61d1b"
            },
            {
              "v": "9baf2de2",
              "date": "08-24",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.40.0: M1 LLM API 配置池迁移（配置池+每猫独立Runtime+cat.chat通道）",
              "items": [
                "雾理莎",
                "9baf2de278"
              ],
              "status": "done",
              "evidence": "git 9baf2de2"
            },
            {
              "v": "49506b2b",
              "date": "08-24",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.42.0: M2 每猫配置独立 + M3 前后端配置管理面",
              "items": [
                "雾理莎",
                "49506b2b3d"
              ],
              "status": "done",
              "evidence": "git 49506b2b"
            },
            {
              "v": "df59d375",
              "date": "08-24",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.43.0: M4a-M4c Note工具迁移前三期+外观层事故处理条目",
              "items": [
                "雾理莎",
                "df59d375d0"
              ],
              "status": "done",
              "evidence": "git df59d375"
            },
            {
              "v": "17301118",
              "date": "08-25",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.44.0: 外观层单向数据流改造+增量流式",
              "items": [
                "雾理莎",
                "173011181c"
              ],
              "status": "done",
              "evidence": "git 17301118"
            },
            {
              "v": "6b6e9e91",
              "date": "08-25",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.45.0: 工具名规范化——21件点号→连字符（连字符被工具名独占）",
              "items": [
                "雾理莎",
                "6b6e9e9151"
              ],
              "status": "done",
              "evidence": "git 6b6e9e91"
            },
            {
              "v": "10b88043",
              "date": "08-25",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.46.0: LLM默认端点改造 + 全量审查拆分（C#6处/语料4文件/HTML模块化/文档全补）",
              "items": [
                "雾理莎",
                "10b8804303"
              ],
              "status": "done",
              "evidence": "git 10b88043"
            },
            {
              "v": "403e51e4",
              "date": "08-25",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.47.0: M3d体验轮修复+M4d验收",
              "items": [
                "雾理莎",
                "403e51e4b5"
              ],
              "status": "done",
              "evidence": "git 403e51e4"
            },
            {
              "v": "fc1e3573",
              "date": "08-26",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.49.0: 快照 cats FlowRegistry 化 + 自述/工具组规格定稿",
              "items": [
                "雾理莎",
                "fc1e3573d3"
              ],
              "status": "done",
              "evidence": "git fc1e3573"
            },
            {
              "v": "d2c022df",
              "date": "08-26",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.50.0: R0.1实体自述接口+导线多动作",
              "items": [
                "雾理莎",
                "d2c022df8d"
              ],
              "status": "done",
              "evidence": "git d2c022df"
            },
            {
              "v": "e258aca8",
              "date": "08-26",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.51.0: 工具组 Flow 化 + 外观层状态区",
              "items": [
                "雾理莎",
                "e258aca80b"
              ],
              "status": "done",
              "evidence": "git e258aca8"
            },
            {
              "v": "384a47ff",
              "date": "08-26",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.52.0: R2.1 联网搜索工具首发（Mau v3.16.0 基座）",
              "items": [
                "雾理莎",
                "384a47ff00"
              ],
              "status": "done",
              "evidence": "git 384a47ff"
            },
            {
              "v": "4c0d3382",
              "date": "08-27",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.53.0: T1 前端测试框架落地",
              "items": [
                "雾理莎",
                "4c0d3382ed"
              ],
              "status": "done",
              "evidence": "git 4c0d3382"
            },
            {
              "v": "de165b2b",
              "date": "08-27",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.54.0: R2.2 图像识别工具组 + 前端唯一事实源",
              "items": [
                "雾理莎",
                "de165b2b4d"
              ],
              "status": "done",
              "evidence": "git de165b2b"
            },
            {
              "v": "6a154a08",
              "date": "08-27",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.55.0: Mau version align to 3.17.0 (R2.2 vision base)",
              "items": [
                "雾理莎",
                "6a154a0828"
              ],
              "status": "done",
              "evidence": "git 6a154a08"
            },
            {
              "v": "c59059b8",
              "date": "08-27",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.56.0: qqbot 接入全链（配置池/管理器/输入输出/强匹配指令/前端）",
              "items": [
                "雾理莎",
                "c59059b8ed"
              ],
              "status": "done",
              "evidence": "git c59059b8"
            },
            {
              "v": "3e51646a",
              "date": "08-28",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.57.0: R3.1 万能接口最小闭环（TEMP积木+TempToolCat双入口+改积木即换临时工具）",
              "items": [
                "雾理莎",
                "3e51646a02"
              ],
              "status": "done",
              "evidence": "git 3e51646a"
            },
            {
              "v": "b9137126",
              "date": "08-28",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.58.0: 程序集拆分收官（S0.1-S5 五域迁移+S6 入口壳瘦身+S7 Core.Tests+S8 全链验证）",
              "items": [
                "雾理莎",
                "b91371261a"
              ],
              "status": "done",
              "evidence": "git b9137126"
            },
            {
              "v": "d1c9fe8f",
              "date": "08-28",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.58.0: 测试 MockLlm 修 warning（CS1998/CS8425）",
              "items": [
                "雾理莎",
                "d1c9fe8f3d"
              ],
              "status": "done",
              "evidence": "git d1c9fe8f"
            },
            {
              "v": "d88358ad",
              "date": "08-28",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.58.1: 质量轮——QQBotConnection注释补全+飞线删除+README重写",
              "items": [
                "雾理莎",
                "d88358adad"
              ],
              "status": "done",
              "evidence": "git d88358ad"
            },
            {
              "v": "1aac2446",
              "date": "08-28",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.59.0: E系列对话区三件（四态动效/每态计时/Token统计）+ usage解析全链 + 前端状态条",
              "items": [
                "雾理莎",
                "1aac24466e"
              ],
              "status": "done",
              "evidence": "git 1aac2446"
            },
            {
              "v": "ab59b9aa",
              "date": "08-29",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.60.0: 家用机部署 + ui.* 字号双配置接线 + E2E 移除 + F 顺序调整",
              "items": [
                "雾理莎",
                "ab59b9aaba"
              ],
              "status": "done",
              "evidence": "git ab59b9aa"
            },
            {
              "v": "366e4ab4",
              "date": "08-29",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.60.0: CatHome4 csproj 版本对齐 0.58.0 -> 0.60.0",
              "items": [
                "雾理莎",
                "366e4ab4d2"
              ],
              "status": "done",
              "evidence": "git 366e4ab4"
            },
            {
              "v": "54359107",
              "date": "08-29",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.61.0: 字号静态提档 + 全局字号配置移除",
              "items": [
                "雾理莎",
                "5435910705"
              ],
              "status": "done",
              "evidence": "git 54359107"
            },
            {
              "v": "5ff9a52a",
              "date": "08-29",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.62.0: F4 视图持久化后端基座",
              "items": [
                "雾理莎",
                "5ff9a52a0c"
              ],
              "status": "done",
              "evidence": "git 5ff9a52a"
            },
            {
              "v": "4c085240",
              "date": "08-30",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.63.0: F1 chat.html view 协议落地 + 表现优化",
              "items": [
                "雾理莎",
                "4c085240ef"
              ],
              "status": "done",
              "evidence": "git 4c085240"
            },
            {
              "v": "0f3c281d",
              "date": "08-30",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.64.0: F2 前端唯一化 + Majordomo 特殊会话",
              "items": [
                "雾理莎",
                "0f3c281deb"
              ],
              "status": "done",
              "evidence": "git 0f3c281d"
            },
            {
              "v": "e8bc9776",
              "date": "08-30",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.66.0: F3 MD渲染 + 前端版本自动化 + 外观三改",
              "items": [
                "雾理莎",
                "e8bc9776c5"
              ],
              "status": "done",
              "evidence": "git e8bc9776"
            },
            {
              "v": "0b0624b7",
              "date": "08-31",
              "group": "2026-08",
              "lane": "other",
              "title": "v0.67.0: L1 日志自然语言化 + 部署区刷新",
              "items": [
                "雾理莎",
                "0b0624b79a"
              ],
              "status": "done",
              "evidence": "git 0b0624b7"
            },
            {
              "v": "f833d05b",
              "date": "09-01",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.68.0: D 部署基建——SetUp 启动器 + Data 三级锚定 + 打开数据目录",
              "items": [
                "雾理莎",
                "f833d05ba5"
              ],
              "status": "done",
              "evidence": "git f833d05b"
            },
            {
              "v": "af974a76",
              "date": "09-01",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.68.1: D3 验收修复——FindDllDir 部署区回退 AppContext/Flows",
              "items": [
                "雾理莎",
                "af974a7652"
              ],
              "status": "done",
              "evidence": "git af974a76"
            },
            {
              "v": "20ed4ede",
              "date": "09-01",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.69.0: SetUp WinForms UI 外观层 + D3 纯净部署验收",
              "items": [
                "雾理莎",
                "20ed4ede33"
              ],
              "status": "done",
              "evidence": "git 20ed4ede"
            },
            {
              "v": "748513ef",
              "date": "09-01",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.69.1: SetUp prepare 收尾清理构建服务器（零隐式后台进程）",
              "items": [
                "雾理莎",
                "748513ef3a"
              ],
              "status": "done",
              "evidence": "git 748513ef"
            },
            {
              "v": "90bcee6a",
              "date": "09-01",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.70.0: text-* v2 工具组（检索/区间读/文件管理/锚点三态）+ D9 node 守望",
              "items": [
                "雾理莎",
                "90bcee6ab6"
              ],
              "status": "done",
              "evidence": "git 90bcee6a"
            },
            {
              "v": "4c501128",
              "date": "09-02",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.70.1: cs-comment_check 新增（缺注释扫描）+ cs-* id: 前缀修复（S1 压测轮）",
              "items": [
                "雾理莎",
                "4c5011285b"
              ],
              "status": "done",
              "evidence": "git 4c501128"
            },
            {
              "v": "50b15191",
              "date": "09-02",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.71.0: S2 LLM 重试+断点续传+重试可见性",
              "items": [
                "雾理莎",
                "50b15191d5"
              ],
              "status": "done",
              "evidence": "git 50b15191"
            },
            {
              "v": "da1047f7",
              "date": "09-02",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.72.0: S3 坏前文修复——占位补全+损坏备份",
              "items": [
                "雾理莎",
                "da1047f72b"
              ],
              "status": "done",
              "evidence": "git da1047f7"
            },
            {
              "v": "682dd096",
              "date": "09-02",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.73.0: 全量审查轮——文档漂移修复+版本对齐",
              "items": [
                "雾理莎",
                "682dd0964e"
              ],
              "status": "done",
              "evidence": "git 682dd096"
            },
            {
              "v": "27ee6549",
              "date": "09-02",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.74.0: 文档治理轮——README 对齐全局现状",
              "items": [
                "雾理莎",
                "27ee654984"
              ],
              "status": "done",
              "evidence": "git 27ee6549"
            },
            {
              "v": "62f09931",
              "date": "09-02",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.75.0: PsCat PowerShell 工具全链落地（免转义/UTF-8/写拦截/超时）",
              "items": [
                "雾理莎",
                "62f0993198"
              ],
              "status": "done",
              "evidence": "git 62f09931"
            },
            {
              "v": "4fa2374a",
              "date": "09-02",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.76.0: Codex审查修复轮——ToolBuild迁ProcessRunner+部署实例自包含",
              "items": [
                "雾理莎",
                "4fa2374a58"
              ],
              "status": "done",
              "evidence": "git 4fa2374a"
            },
            {
              "v": "d9e41d8d",
              "date": "09-02",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.76.1: 回滚部署实例自锚定——恢复全局AppData读取",
              "items": [
                "雾理莎",
                "d9e41d8dd9"
              ],
              "status": "done",
              "evidence": "git d9e41d8d"
            },
            {
              "v": "75005753",
              "date": "09-02",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.76.2: 受控根自由化+猫级白名单（enabledRoots/执行裁剪/info可见）",
              "items": [
                "雾理莎",
                "75005753e4"
              ],
              "status": "done",
              "evidence": "git 75005753"
            },
            {
              "v": "dd07f247",
              "date": "09-03",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.77.0: Flow 装配扫描化 + 工具定义禀赋化（统一工具池）",
              "items": [
                "雾理莎",
                "dd07f2474b"
              ],
              "status": "done",
              "evidence": "git dd07f247"
            },
            {
              "v": "98c22eed",
              "date": "09-03",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.77.1: 修复 SetUp.exe 旧二进制（PsCat 漏网）+ 补充发布流程",
              "items": [
                "雾理莎",
                "98c22eed5d"
              ],
              "status": "done",
              "evidence": "git 98c22eed"
            },
            {
              "v": "27e1925d",
              "date": "09-03",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.77.2: 全项目注入编译时间戳到产品版本（Directory.Build.targets）+ SetUp 重发布",
              "items": [
                "雾理莎",
                "27e1925dc5"
              ],
              "status": "done",
              "evidence": "git 27e1925d"
            },
            {
              "v": "776f1eaa",
              "date": "09-03",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.78.0: text-find **/ 递归前缀 + 工具描述能力化（去业务根名承诺）",
              "items": [
                "雾理莎",
                "776f1eaae4"
              ],
              "status": "done",
              "evidence": "git 776f1eaa"
            },
            {
              "v": "33104549",
              "date": "09-03",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.78.1: 配置作用域专项——积木 FS 猫级优先 + 根解析规范化",
              "items": [
                "雾理莎",
                "331045494e"
              ],
              "status": "done",
              "evidence": "git 33104549"
            },
            {
              "v": "bee79756",
              "date": "09-03",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.79.0: P3 cs-* 四修复——WindowsDesktop 探测/文件行号统一/转义识别/insert 行号区间",
              "items": [
                "雾理莎",
                "bee79756ee"
              ],
              "status": "done",
              "evidence": "git bee79756"
            },
            {
              "v": "e9320930",
              "date": "09-03",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.80.0: 会话视图修复——session_reset 显式事件 + 注入报告持久化 + 前文真实 usage 统计",
              "items": [
                "雾理莎",
                "e932093030"
              ],
              "status": "done",
              "evidence": "git e9320930"
            },
            {
              "v": "34d8ccb0",
              "date": "09-04",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.81.0: ChatUI 修复轮——Note 读取修复 + 状态区下移 + k/M 格式化 + roundsum 轮末气泡",
              "items": [
                "雾理莎",
                "34d8ccb0b4"
              ],
              "status": "done",
              "evidence": "git 34d8ccb0"
            },
            {
              "v": "8e3b733c",
              "date": "09-04",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.82.0: 直执移除轮——OA 工具 FALLBACK 直执面全删，执行唯一路径 = OA 认领",
              "items": [
                "雾理莎",
                "8e3b733cd8"
              ],
              "status": "done",
              "evidence": "git 8e3b733c"
            },
            {
              "v": "49ed23ce",
              "date": "09-04",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.82.1: BRIK 积木格式统一收敛——index --update 校验尾重算全量入库（BOM 格式统一为工具输出）",
              "items": [
                "雾理莎",
                "49ed23ce8f"
              ],
              "status": "done",
              "evidence": "git 49ed23ce"
            },
            {
              "v": "2efa017e",
              "date": "09-04",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.83.0: P5 编码契约缺口——积木 001-005 切 Auto 族 + ReadLinesAuto/Grep 编码探测",
              "items": [
                "雾理莎",
                "2efa017efb"
              ],
              "status": "done",
              "evidence": "git 2efa017e"
            },
            {
              "v": "8a9c680a",
              "date": "09-04",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.84.0: 气泡折叠（思考/工具默认收起）+ 工具轮文本流式 seal（闪烁残留修复）",
              "items": [
                "雾理莎",
                "8a9c680af8"
              ],
              "status": "done",
              "evidence": "git 8a9c680a"
            },
            {
              "v": "0aeb082f",
              "date": "09-04",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.85.0: 空回复续传（STREAM_CLOSED/空 content 自动重发 ≤2 次）",
              "items": [
                "雾理莎",
                "0aeb082f95"
              ],
              "status": "done",
              "evidence": "git 0aeb082f"
            },
            {
              "v": "0d8cf43d",
              "date": "09-07",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.86.0: 日志一致轮——业务直打归 LogStore + CMD 专属 [CMD] 前缀",
              "items": [
                "雾理莎",
                "0d8cf43d3d"
              ],
              "status": "done",
              "evidence": "git 0d8cf43d"
            },
            {
              "v": "5d8c926f",
              "date": "09-07",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.87.0: P6a 中止 + P10 roundsum 时间戳排序",
              "items": [
                "雾理莎",
                "5d8c926ffb"
              ],
              "status": "done",
              "evidence": "git 5d8c926f"
            },
            {
              "v": "0d7ddef5",
              "date": "09-07",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.0: P6b 会话回滚+分支（Reply 切点/MsgIndex 定位/播种克隆）",
              "items": [
                "雾理莎",
                "0d7ddef5a6"
              ],
              "status": "done",
              "evidence": "git 0d7ddef5"
            },
            {
              "v": "2782db36",
              "date": "09-07",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.1: fork 配置继承修复（运行时源/路径特判/qqbotId 保留）",
              "items": [
                "雾理莎",
                "2782db366e"
              ],
              "status": "done",
              "evidence": "git 2782db36"
            },
            {
              "v": "c65d7f11",
              "date": "09-07",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.2: 猫删除确认弹窗（提示配置与前文丢失）",
              "items": [
                "雾理莎",
                "c65d7f11dd"
              ],
              "status": "done",
              "evidence": "git c65d7f11"
            },
            {
              "v": "fb09ca24",
              "date": "09-07",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.2: 版本号同步（CatHome4.csproj）",
              "items": [
                "雾理莎",
                "fb09ca2479"
              ],
              "status": "done",
              "evidence": "git fb09ca24"
            },
            {
              "v": "0cc94773",
              "date": "09-07",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.3: P7 工具摘要格式化",
              "items": [
                "雾理莎",
                "0cc94773dd"
              ],
              "status": "done",
              "evidence": "git 0cc94773"
            },
            {
              "v": "824ac8fc",
              "date": "09-07",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.4: P1 托盘+自启（TFM windows+NotifyIcon+HKCU Run）+ schema 种子",
              "items": [
                "雾理莎",
                "824ac8fcc8"
              ],
              "status": "done",
              "evidence": "git 824ac8fc"
            },
            {
              "v": "60e3ce61",
              "date": "09-08",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.5: 新增 QQBot MD 通道与文件收发",
              "items": [
                "雾理莎",
                "60e3ce6159"
              ],
              "status": "done",
              "evidence": "git 60e3ce61"
            },
            {
              "v": "51b1da7b",
              "date": "09-08",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.6: 工具面修复轮（cs-* 六修 + replace all + 重载签名）+ SetUp --report 一键部署",
              "items": [
                "雾理莎",
                "51b1da7b2f"
              ],
              "status": "done",
              "evidence": "git 51b1da7b"
            },
            {
              "v": "4b626e1b",
              "date": "09-08",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.7: 跑测反馈修复轮（摘要统计/续传/命名/前端）",
              "items": [
                "雾理莎",
                "4b626e1b20"
              ],
              "status": "done",
              "evidence": "git 4b626e1b"
            },
            {
              "v": "1159d8b4",
              "date": "09-08",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.8: 前端三改+观测句柄同步修复",
              "items": [
                "雾理莎",
                "1159d8b460"
              ],
              "status": "done",
              "evidence": "git 1159d8b4"
            },
            {
              "v": "dce95c7c",
              "date": "09-08",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.88.8: 文档治理轮 README 对齐（×9 组/现状补全）",
              "items": [
                "雾理莎",
                "dce95c7c40"
              ],
              "status": "done",
              "evidence": "git dce95c7c"
            },
            {
              "v": "ea22a9eb",
              "date": "09-08",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.89.0: 续传三BUG修复+JsonUtil中文直显+tree忽略目录+注入工具组+Note气泡popover+title泵修复+前端js拆分",
              "items": [
                "雾理莎",
                "ea22a9ebe8"
              ],
              "status": "done",
              "evidence": "git ea22a9eb"
            },
            {
              "v": "7a079e98",
              "date": "09-09",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.90.0: Q1-Q5 收尾链重排 + qqbot 全MD/指令 + 托盘通知",
              "items": [
                "雾理莎",
                "7a079e98de"
              ],
              "status": "done",
              "evidence": "git 7a079e98"
            },
            {
              "v": "64d1b814",
              "date": "09-09",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.92.0: cs-check 共享框架/DefaultItemExcludes + Mau 根三链 + host-reload Flow 名/host-flows + mau 前缀",
              "items": [
                "雾理莎",
                "64d1b81414"
              ],
              "status": "done",
              "evidence": "git 64d1b814"
            },
            {
              "v": "5ac5da0f",
              "date": "09-09",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.78.0: 万能接口新增lower临时工具-热重载全链验证",
              "items": [
                "雾理莎",
                "5ac5da0fbb"
              ],
              "status": "done",
              "evidence": "git 5ac5da0f"
            },
            {
              "v": "e27d7ef3",
              "date": "09-09",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.93.0: Note 最后一条不自动拉起（剩余≥2 才拉起，实现向设计收敛）+ Note 前端调整（按钮上移避输入栏/字体统一 12px）+ 测试同步",
              "items": [
                "雾理莎",
                "e27d7ef38c"
              ],
              "status": "done",
              "evidence": "git e27d7ef3"
            },
            {
              "v": "b62b9162",
              "date": "09-10",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.94.0: info/host-flows 带编译时间（VersionInfo 编译时刻解析）",
              "items": [
                "雾理莎",
                "b62b9162b8"
              ],
              "status": "done",
              "evidence": "git b62b9162"
            },
            {
              "v": "9ea30451",
              "date": "09-10",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.95.0: QQBot 转发解耦（视图层gap+3+1+msg_seq）+ search切FoldinAI",
              "items": [
                "雾理莎",
                "9ea3045104"
              ],
              "status": "done",
              "evidence": "git 9ea30451"
            },
            {
              "v": "3e5171c8",
              "date": "09-10",
              "group": "2026-09",
              "lane": "other",
              "title": "web-search: tool_choice 强制搜索 + 官方端点验证（web_search 已删——FoldinAI 兜底）",
              "items": [
                "雾理莎",
                "3e5171c8ad"
              ],
              "status": "done",
              "evidence": "git 3e5171c8"
            },
            {
              "v": "1e0580ab",
              "date": "09-10",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.96.0: 外观层三改（折叠摘要/左栏顺序/四态总时长）",
              "items": [
                "雾理莎",
                "1e0580ab2f"
              ],
              "status": "done",
              "evidence": "git 1e0580ab"
            },
            {
              "v": "400dbf04",
              "date": "09-10",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.96.1: QQBot 图片链路——群聊附件下载 + faceType 原位路径 + 消息头来源区分",
              "items": [
                "雾理莎",
                "400dbf040d"
              ],
              "status": "done",
              "evidence": "git 400dbf04"
            },
            {
              "v": "6ed11135",
              "date": "09-10",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.97.0: websearch双协议(Anthropic/Responses)+OA载荷全文落盘+积木参数解析失败归因",
              "items": [
                "雾理莎",
                "6ed1113507"
              ],
              "status": "done",
              "evidence": "git 6ed11135"
            },
            {
              "v": "5e3380f5",
              "date": "09-10",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.97.7: 全代码审查 R1-R7 完成——frontend 版本同步 v46",
              "items": [
                "雾理莎",
                "5e3380f5b3"
              ],
              "status": "done",
              "evidence": "git 5e3380f5"
            },
            {
              "v": "369ca27e",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.97.9: F1 修复轮——pending 去重/日志 5MB 轮转/QQ 三字典单线程/volatile",
              "items": [
                "雾理莎",
                "369ca27e21"
              ],
              "status": "done",
              "evidence": "git 369ca27e"
            },
            {
              "v": "e9c575b0",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.98.0: F2 修复轮——E300 判据 A2/快照对账/泛型归一/校验盲区/逗号签名/积木归因",
              "items": [
                "雾理莎",
                "e9c575b096"
              ],
              "status": "done",
              "evidence": "git e9c575b0"
            },
            {
              "v": "d4ec6c18",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.98.2: F3积木退役(done_ready/file.read)+F4死代码清理13项",
              "items": [
                "雾理莎",
                "d4ec6c18e0"
              ],
              "status": "done",
              "evidence": "git d4ec6c18"
            },
            {
              "v": "7d0d6b2b",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.98.3: F5 语法糖7项全清 + style.css 冗余清理 + Runtime/CatHome4 格式批",
              "items": [
                "雾理莎",
                "7d0d6b2b56"
              ],
              "status": "done",
              "evidence": "git 7d0d6b2b"
            },
            {
              "v": "081e42c8",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.98.4: opencode zen usage 同帧适配 + 宿主返回体探针",
              "items": [
                "雾理莎",
                "081e42c867"
              ],
              "status": "done",
              "evidence": "git 081e42c8"
            },
            {
              "v": "0bb8c2c3",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.98.5: F6 修复轮——注释/文档/口径 + Mau.Providers 测试补位",
              "items": [
                "雾理莎",
                "0bb8c2c304"
              ],
              "status": "done",
              "evidence": "git 0bb8c2c3"
            },
            {
              "v": "1a1928e9",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.98.6: F7 版本对齐——7 csproj + server.js 禁 npx/超时守卫",
              "items": [
                "雾理莎",
                "1a1928e95d"
              ],
              "status": "done",
              "evidence": "git 1a1928e9"
            },
            {
              "v": "7af80313",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.99.0: A面验收证据 + host-reload 部署全流程 + mau-setup 工具",
              "items": [
                "雾理莎",
                "7af8031324"
              ],
              "status": "done",
              "evidence": "git 7af80313"
            },
            {
              "v": "2e96086c",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0: cs工具三改+目录回收+分部聚合+A/B面收口",
              "items": [
                "雾理莎",
                "2e96086c67"
              ],
              "status": "done",
              "evidence": "git 2e96086c"
            },
            {
              "v": "40621cef",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v3.20.0: CLI 参数面零容忍（9 入口）+ mau proj --out 删除（对应 CH4 v1.0.1）",
              "items": [
                "雾理莎",
                "40621cef93"
              ],
              "status": "done",
              "evidence": "git 40621cef"
            },
            {
              "v": "9b679266",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.2: 会话级 Token 计量落地 + [LLM] 结算行轮级口径纠偏 + 版本对齐",
              "items": [
                "雾理莎",
                "9b67926658"
              ],
              "status": "done",
              "evidence": "git 9b679266"
            },
            {
              "v": "ce7c7f3e",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.3: D 面历史样本核 + 搜索后端 Anthropic 通道路由 + 版本对齐",
              "items": [
                "雾理莎",
                "ce7c7f3e6e"
              ],
              "status": "done",
              "evidence": "git ce7c7f3e"
            },
            {
              "v": "3d77e0a2",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.4: P20 前端审查 + 修复轮（D 面收口）+ 版本对齐 7 csproj",
              "items": [
                "雾理莎",
                "3d77e0a242"
              ],
              "status": "done",
              "evidence": "git 3d77e0a2"
            },
            {
              "v": "b11d6464",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0: README 重写为项目简介+使用引导",
              "items": [
                "雾理莎",
                "b11d6464d6"
              ],
              "status": "done",
              "evidence": "git b11d6464"
            },
            {
              "v": "c42a8623",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.5: 配置读面补全与配置群补齐",
              "items": [
                "雾理莎",
                "c42a862351"
              ],
              "status": "done",
              "evidence": "git c42a8623"
            },
            {
              "v": "e70a26e9",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.6: cs-format 空白/缩进规整工具落地（A6）",
              "items": [
                "雾理莎",
                "e70a26e9b8"
              ],
              "status": "done",
              "evidence": "git e70a26e9"
            },
            {
              "v": "c0e369f0",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.7: cs-format 存量治理 + 宿主注入键修复",
              "items": [
                "雾理莎",
                "c0e369f0ed"
              ],
              "status": "done",
              "evidence": "git c0e369f0"
            },
            {
              "v": "4728fdd0",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.8: cs 写侧保真——节点规整换 Formatter + BOM 保真 + 存量归一",
              "items": [
                "雾理莎",
                "4728fdd058"
              ],
              "status": "done",
              "evidence": "git 4728fdd0"
            },
            {
              "v": "45906be2",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.9: 写侧两态契约（A25）",
              "items": [
                "雾理莎",
                "45906be2f8"
              ],
              "status": "done",
              "evidence": "git 45906be2"
            },
            {
              "v": "45e078f0",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.10: 工具面专项轮（A9 多项目入口 + A7 参数面零容忍 + A23 全链实跑）",
              "items": [
                "雾理莎",
                "45e078f073"
              ],
              "status": "done",
              "evidence": "git 45e078f0"
            },
            {
              "v": "91800434",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.11: 宿主自更新链（特权组 + relaunch + 原子切换 + 重启链）",
              "items": [
                "雾理莎",
                "9180043406"
              ],
              "status": "done",
              "evidence": "git 91800434"
            },
            {
              "v": "0ea704de",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.11 修复: 工具定义积木约定名改 tools.majordomocat",
              "items": [
                "雾理莎",
                "0ea704dea5"
              ],
              "status": "done",
              "evidence": "git 0ea704de"
            },
            {
              "v": "3252e3bb",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.11 静默修复: 工具定义积木缺失改为 E409 拒绝生成",
              "items": [
                "雾理莎",
                "3252e3bb81"
              ],
              "status": "done",
              "evidence": "git 3252e3bb"
            },
            {
              "v": "c8ff1123",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.12: 自更新链闭环（特权面判据 + QuickCat 积木 + 仓库根定位）",
              "items": [
                "雾理莎",
                "c8ff1123e7"
              ],
              "status": "done",
              "evidence": "git c8ff1123"
            },
            {
              "v": "f4621895",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.13: A30 收口——非工具组空组声明固化 + 工具定义约定落档",
              "items": [
                "雾理莎",
                "f462189507"
              ],
              "status": "done",
              "evidence": "git f4621895"
            },
            {
              "v": "4b85cffc",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.16: QQBot 转发接力链落地与收口",
              "items": [
                "雾理莎",
                "4b85cffc02"
              ],
              "status": "done",
              "evidence": "git 4b85cffc"
            },
            {
              "v": "4256446c",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.17: A4/A5/A8 closure + P3 sweep",
              "items": [
                "雾理莎",
                "4256446c2f"
              ],
              "status": "done",
              "evidence": "git 4256446c"
            },
            {
              "v": "e6018c5e",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.18: A38 residual P3 closure (R1/R2 sweep)",
              "items": [
                "雾理莎",
                "e6018c5ebe"
              ],
              "status": "done",
              "evidence": "git e6018c5e"
            },
            {
              "v": "5b63e797",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.19: 池治理收工轮——cs-member 多成员拒绝 + 版本对齐",
              "items": [
                "雾理莎",
                "5b63e7977d"
              ],
              "status": "done",
              "evidence": "git 5b63e797"
            },
            {
              "v": "4567fe31",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.01.000: 定版轮——版本号三位式 + 池/CHANGELOG 治理",
              "items": [
                "雾理莎",
                "4567fe317d"
              ],
              "status": "done",
              "evidence": "git 4567fe31"
            },
            {
              "v": "a3a8974c",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.01.001: 前文落盘保真 + 会话标识持久化",
              "items": [
                "雾理莎",
                "a3a8974cba"
              ],
              "status": "done",
              "evidence": "git a3a8974c"
            },
            {
              "v": "ce097882",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.000: 前文注入支持目录条目 + 配置面拖拽调序",
              "items": [
                "雾理莎",
                "ce097882af"
              ],
              "status": "done",
              "evidence": "git ce097882"
            },
            {
              "v": "a9f91a90",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.002: LLM 缓存隔离键改猫级 + 默认端点继承修复",
              "items": [
                "雾理莎",
                "a9f91a90ca"
              ],
              "status": "done",
              "evidence": "git a9f91a90"
            },
            {
              "v": "cbe5ec21",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.003: cs-check 引用集 TFM 判定（WindowsDesktop 仅 -windows）",
              "items": [
                "雾理莎",
                "cbe5ec2148"
              ],
              "status": "done",
              "evidence": "git cbe5ec21"
            },
            {
              "v": "5811d86c",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "ps 单行指令 1.02.005：powershell 定位收窄（禁代码注入/多段/绕过工具组）+ 日志写入重试与失败诊断 + 展示面截断放开与消耗可见 + 前端命令解读器",
              "items": [
                "雾理莎",
                "5811d86c3d"
              ],
              "status": "done",
              "evidence": "git 5811d86c"
            },
            {
              "v": "995392a8",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "v3.22.0: A48 工具执行后台化（CsCat par 化 + par 主动超时 + 迟到结果代际丢弃）",
              "items": [
                "雾理莎",
                "995392a8c9"
              ],
              "status": "done",
              "evidence": "git 995392a8"
            },
            {
              "v": "cc2649de",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "v3.22.0: cs-* 路径诊断分列（不存在/类型不符）+ 去重复拼接",
              "items": [
                "雾理莎",
                "cc2649ded6"
              ],
              "status": "done",
              "evidence": "git cc2649de"
            },
            {
              "v": "ac400d37",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.006: A48 扩散——7 组工具线 par 化 + 执行层 120s 上限统一",
              "items": [
                "雾理莎",
                "ac400d3721"
              ],
              "status": "done",
              "evidence": "git ac400d37"
            },
            {
              "v": "9e303a6d",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.007: A20 pwsh 工具线——双线、配置寻路、输出净化",
              "items": [
                "雾理莎",
                "9e303a6d9f"
              ],
              "status": "done",
              "evidence": "git 9e303a6d"
            },
            {
              "v": "7b81395c",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.008: A49 配置面自举——schema 模板同步 / 段注册 / 读面出口 / per-cat 退役 + 启动审计与读侧共享",
              "items": [
                "雾理莎",
                "7b81395c15"
              ],
              "status": "done",
              "evidence": "git 7b81395c"
            },
            {
              "v": "907ceea2",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.008: A50 端点解析同源化——info 按本猫解析 + 前端默认项带默认端点名",
              "items": [
                "雾理莎",
                "907ceea2f6"
              ],
              "status": "done",
              "evidence": "git 907ceea2"
            },
            {
              "v": "62b733ad",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.009: A47 前文增量落盘（JSONL + 末行残缺补全）",
              "items": [
                "雾理莎",
                "62b733adb8"
              ],
              "status": "done",
              "evidence": "git 62b733ad"
            },
            {
              "v": "f7dd2c33",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.010: 收口 A47 落盘链（补全回写 + 工具结果幂等 + 视图层落盘）",
              "items": [
                "雾理莎",
                "f7dd2c33b5"
              ],
              "status": "done",
              "evidence": "git f7dd2c33"
            },
            {
              "v": "503f809b",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.011: 会话标识 ≡ 猫 key + 白名单失败收紧（空白名单兜底）",
              "items": [
                "雾理莎",
                "503f809bd9"
              ],
              "status": "done",
              "evidence": "git 503f809b"
            },
            {
              "v": "99b98666",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.011: A51/A52/A57 校验尾退役 + 根注释 + 猫配置运行态分离",
              "items": [
                "雾理莎",
                "99b98666c3"
              ],
              "status": "done",
              "evidence": "git 99b98666"
            },
            {
              "v": "3ed3efef",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.012: A53 版本号单点归一——props 单点 + Mau 版本线退役 + SetUp 独立",
              "items": [
                "雾理莎",
                "3ed3efef90"
              ],
              "status": "done",
              "evidence": "git 3ed3efef"
            },
            {
              "v": "ac927398",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.013: 加载包机制（packs.json 池 + pack 内置工具 + 猫级挂载）",
              "items": [
                "雾理莎",
                "ac92739877"
              ],
              "status": "done",
              "evidence": "git ac927398"
            },
            {
              "v": "d233015d",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.014: 加载包前端面板（池管理弹层 + 猫配置挂载勾选 + 前端测试 6 例）",
              "items": [
                "雾理莎",
                "d233015ddc"
              ],
              "status": "done",
              "evidence": "git d233015d"
            },
            {
              "v": "87cc69b7",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.015: 加载包面板修订（allPacks 改对象列表修 undefined + 池管理移入配置页内联区）",
              "items": [
                "雾理莎",
                "87cc69b72e"
              ],
              "status": "done",
              "evidence": "git 87cc69b7"
            },
            {
              "v": "ca18d8e8",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.016: 新猫默认模板补 defaultPacks（全链继承 + CatEntry.Packs 防覆盖 + 模板区勾选区）",
              "items": [
                "雾理莎",
                "ca18d8e84c"
              ],
              "status": "done",
              "evidence": "git ca18d8e8"
            },
            {
              "v": "5a82de69",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.017: A54 帧落盘脏检查 + A55 错误可见",
              "items": [
                "雾理莎",
                "5a82de6920"
              ],
              "status": "done",
              "evidence": "git 5a82de69"
            },
            {
              "v": "3245ce67",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.018: cs-check 降级语法层 + AssemblyInfo 去重 + 目录入口提示",
              "items": [
                "雾理莎",
                "3245ce6787"
              ],
              "status": "done",
              "evidence": "git 3245ce67"
            },
            {
              "v": "aab4008f",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.019: A56 Log 削减 + cs-* 跨程序集引用复核",
              "items": [
                "雾理莎",
                "aab4008f3c"
              ],
              "status": "done",
              "evidence": "git aab4008f"
            },
            {
              "v": "0c93d002",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.020: 前端错误气泡与思考块外观——A55 解耦 + 折叠摘要",
              "items": [
                "雾理莎",
                "0c93d00257"
              ],
              "status": "done",
              "evidence": "git 0c93d002"
            },
            {
              "v": "9150ebf9",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.023: QQBot 转发 2+2 与 /last 重做",
              "items": [
                "雾理莎",
                "9150ebf9c6"
              ],
              "status": "done",
              "evidence": "git 9150ebf9"
            },
            {
              "v": "19dc17f4",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.024: 运行态七态基建——协议事件驱动态机 + 计时单源后端",
              "items": [
                "雾理莎",
                "19dc17f40b"
              ],
              "status": "done",
              "evidence": "git 19dc17f4"
            },
            {
              "v": "bed005c5",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.025: A59 六态外观与运行态推送",
              "items": [
                "雾理莎",
                "bed005c597"
              ],
              "status": "done",
              "evidence": "git bed005c5"
            },
            {
              "v": "780eb6de",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.027: A60 工具卡两段式 + A61 底部行与刷新恢复",
              "items": [
                "雾理莎",
                "780eb6de4e"
              ],
              "status": "done",
              "evidence": "git 780eb6de"
            },
            {
              "v": "21abfff0",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.028: 桌宠上线——态/交互驱动形态 + 圆角羽化素材 22 件 + /pet 静态路由",
              "items": [
                "雾理莎",
                "21abfff02f"
              ],
              "status": "done",
              "evidence": "git 21abfff0"
            },
            {
              "v": "b904cbcd",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.02.028: 版本号单点对齐 Directory.Build.props",
              "items": [
                "雾理莎",
                "b904cbcd6f"
              ],
              "status": "done",
              "evidence": "git b904cbcd"
            },
            {
              "v": "5bc3bd02",
              "date": "09-16",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.000: 版本单点推进与前端版本文件同步",
              "items": [
                "雾理莎",
                "5bc3bd028a"
              ],
              "status": "done",
              "evidence": "git 5bc3bd02"
            },
            {
              "v": "9c5971a0",
              "date": "09-17",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.000: 桌宠加载门禁与逐张哈希缓存、接缝溶解、素材重制",
              "items": [
                "雾理莎",
                "9c5971a02e"
              ],
              "status": "done",
              "evidence": "git 9c5971a0"
            },
            {
              "v": "1c80ca4f",
              "date": "09-17",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.001: 前端可视化维护 + 宿主 Log 面 trace 过滤",
              "items": [
                "雾理莎",
                "1c80ca4fef"
              ],
              "status": "done",
              "evidence": "git 1c80ca4f"
            },
            {
              "v": "d59c9bb1",
              "date": "09-17",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.001: 前端色彩令牌化——三层令牌体系 + 组件面零裸值",
              "items": [
                "雾理莎",
                "d59c9bb180"
              ],
              "status": "done",
              "evidence": "git d59c9bb1"
            },
            {
              "v": "d5be2e07",
              "date": "09-17",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.002: 前端描边三态 + 工具卡配色 + 桌宠素材",
              "items": [
                "雾理莎",
                "d5be2e07b9"
              ],
              "status": "done",
              "evidence": "git d5be2e07"
            },
            {
              "v": "9bcf9ffa",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.004: A13 测试规范与视图层补测 + Note 计数修正 + 裸根名路径解析",
              "items": [
                "雾理莎",
                "9bcf9ffa48"
              ],
              "status": "done",
              "evidence": "git 9bcf9ffa"
            },
            {
              "v": "457e7361",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.004: A63 测试面收敛——RecycleTests 并入 FileSystemServiceTests + Pocket* 终结器改 IDisposable + HotReload 恒真断言修正",
              "items": [
                "雾理莎",
                "457e736189"
              ],
              "status": "done",
              "evidence": "git 457e7361"
            },
            {
              "v": "091c34a7",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.006: 前端工具渲染骨架——chat-tools.js + PowerShell 双线区分",
              "items": [
                "雾理莎",
                "091c34a70a"
              ],
              "status": "done",
              "evidence": "git 091c34a7"
            },
            {
              "v": "7206d18b",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.015: 工具返回体结构化与前端渲染三层（CsCat 11 件）",
              "items": [
                "雾理莎",
                "7206d18bc2"
              ],
              "status": "done",
              "evidence": "git 7206d18b"
            },
            {
              "v": "28b608ac",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.016: cs-写侧行号基准修正（注解回取 attached 节点）",
              "items": [
                "雾理莎",
                "28b608ac43"
              ],
              "status": "done",
              "evidence": "git 28b608ac"
            },
            {
              "v": "bc92feea",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.016: A64 工具返回体结构化四批 + 生成器 nullable 段内保留",
              "items": [
                "雾理莎",
                "bc92feea78"
              ],
              "status": "done",
              "evidence": "git bc92feea"
            },
            {
              "v": "d713a537",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.017: info 分类 JSON 块 + QQ /info MD 投影 + PS 采集表",
              "items": [
                "雾理莎",
                "d713a5376c"
              ],
              "status": "done",
              "evidence": "git d713a537"
            },
            {
              "v": "82df1c5a",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.018: A65 对话图片附件（粘贴上传 + 包裹组装 + 渲染 + 识图工具卡）",
              "items": [
                "雾理莎",
                "82df1c5ade"
              ],
              "status": "done",
              "evidence": "git 82df1c5a"
            },
            {
              "v": "432ba217",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.020: A65 图片附件（受控根 + 绝对路径渲染 · 文件输出规范入纪律）",
              "items": [
                "雾理莎",
                "432ba21786"
              ],
              "status": "done",
              "evidence": "git 432ba217"
            },
            {
              "v": "e18ff371",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.020: PS 解读器段首锚定与指令类标识 + 收集表补齐核销",
              "items": [
                "雾理莎",
                "e18ff37150"
              ],
              "status": "done",
              "evidence": "git e18ff371"
            },
            {
              "v": "ca018e17",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.021: A62 猫与配置管理工具面 + 特权面组级声明",
              "items": [
                "雾理莎",
                "ca018e177d"
              ],
              "status": "done",
              "evidence": "git ca018e17"
            },
            {
              "v": "2d52881b",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.022: cs-format 行尾保真（写盘层归一+回读自检）+ 清 F4 遗留死代码",
              "items": [
                "雾理莎",
                "2d52881b3c"
              ],
              "status": "done",
              "evidence": "git 2d52881b"
            },
            {
              "v": "cfc1c777",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.023: A67 工具组拆分（FileCat 新建 + TextCat 收缩 7 件）",
              "items": [
                "雾理莎",
                "cfc1c777e3"
              ],
              "status": "done",
              "evidence": "git cfc1c777"
            },
            {
              "v": "d8b7f756",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.023: A68 静默 catch 全修 + cs-check 空 catch 检测",
              "items": [
                "雾理莎",
                "d8b7f756a6"
              ],
              "status": "done",
              "evidence": "git d8b7f756"
            },
            {
              "v": "a8652e5f",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.024: A69 视图层报错中文注释 + retry 摘要截断修",
              "items": [
                "雾理莎",
                "a8652e5f65"
              ],
              "status": "done",
              "evidence": "git a8652e5f"
            },
            {
              "v": "55768bd4",
              "date": "09-21",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.025: A70 提示词组装 + 搜索提示词收口 + 删死实现",
              "items": [
                "雾理莎",
                "55768bd444"
              ],
              "status": "done",
              "evidence": "git 55768bd4"
            },
            {
              "v": "78c9cfba",
              "date": "09-21",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.026: A74 端口分区与探针零端口",
              "items": [
                "雾理莎",
                "78c9cfba48"
              ],
              "status": "done",
              "evidence": "git 78c9cfba"
            },
            {
              "v": "35ab8b0d",
              "date": "09-21",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.026: A75 工具头判据 + 注册面整表替换 + SetUp 失败面收口",
              "items": [
                "雾理莎",
                "35ab8b0d84"
              ],
              "status": "done",
              "evidence": "git 35ab8b0d"
            },
            {
              "v": "4e5881e6",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.027: A71/A72 延迟指令队列 + 内置 sleep",
              "items": [
                "雾理莎",
                "4e5881e6b2"
              ],
              "status": "done",
              "evidence": "git 4e5881e6"
            },
            {
              "v": "b2fbb15c",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.028: sleep/timer 语义分离 + 工具 done 来源续约",
              "items": [
                "雾理莎",
                "b2fbb15c3b"
              ],
              "status": "done",
              "evidence": "git b2fbb15c"
            },
            {
              "v": "816df8a3",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.028: A77 前端静默兜底改纯提示（不再假收口）",
              "items": [
                "雾理莎",
                "816df8a333"
              ],
              "status": "done",
              "evidence": "git 816df8a3"
            },
            {
              "v": "e809ebb1",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.029: 思考收尾唯一出口 + 气泡标记全局态驱动",
              "items": [
                "雾理莎",
                "e809ebb1e0"
              ],
              "status": "done",
              "evidence": "git e809ebb1"
            },
            {
              "v": "b13d5652",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.029: 气泡内容列对齐 + 状态条居中 + user 右对齐 + 桌宠拖动定位修",
              "items": [
                "雾理莎",
                "b13d56525d"
              ],
              "status": "done",
              "evidence": "git b13d5652"
            },
            {
              "v": "48261fcb",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.029: A80 表格配色分层 + 滚动条间距几何修正",
              "items": [
                "雾理莎",
                "48261fcb3a"
              ],
              "status": "done",
              "evidence": "git 48261fcb"
            },
            {
              "v": "3a44f47c",
              "date": "09-23",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.029: A81 MD 块复制原文按钮（代码块/表格 + 线条图标）",
              "items": [
                "雾理莎",
                "3a44f47c9a"
              ],
              "status": "done",
              "evidence": "git 3a44f47c"
            },
            {
              "v": "ddc2f4bb",
              "date": "09-23",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.029: A83 定时面板重做 + G 方案外观层同步面归一",
              "items": [
                "雾理莎",
                "ddc2f4bb88"
              ],
              "status": "done",
              "evidence": "git ddc2f4bb"
            },
            {
              "v": "a8acef04",
              "date": "09-23",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.029: A84 工具卡运行中时长 + A85 think 两态两渲染器",
              "items": [
                "雾理莎",
                "a8acef04a5"
              ],
              "status": "done",
              "evidence": "git a8acef04"
            },
            {
              "v": "7e026ff3",
              "date": "09-23",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.031: A90 file-version 工具 + A86 断联恢复保留原文",
              "items": [
                "雾理莎",
                "7e026ff304"
              ],
              "status": "done",
              "evidence": "git 7e026ff3"
            },
            {
              "v": "9954e137",
              "date": "09-23",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.033: A87 新会话留档——旧会话四部分导出 sessions_old MD",
              "items": [
                "雾理莎",
                "9954e137c5"
              ],
              "status": "done",
              "evidence": "git 9954e137"
            },
            {
              "v": "5a58995f",
              "date": "09-23",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.034: A88 text-replace 删除标记（显式删除语义 + 摘要投影）",
              "items": [
                "雾理莎",
                "5a58995ffb"
              ],
              "status": "done",
              "evidence": "git 5a58995f"
            },
            {
              "v": "ffbf99a1",
              "date": "09-23",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.035: A89 最近前文变动（快照 sessions 段 + info tokens 段 · info 前文长度改实时值）",
              "items": [
                "雾理莎",
                "ffbf99a1b6"
              ],
              "status": "done",
              "evidence": "git ffbf99a1"
            },
            {
              "v": "60d5e8c7",
              "date": "09-23",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.036: PS 解读器补规则——dotnet 形态兜底 / 表达式括号 / where.exe 等 8 项 + 收集表核销",
              "items": [
                "雾理莎",
                "60d5e8c79e"
              ],
              "status": "done",
              "evidence": "git 60d5e8c7"
            },
            {
              "v": "8c54ead6",
              "date": "09-24",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.038: A91 全猫状态统计（cat.info + majordomo-catinfo + 前文长度口径修订）",
              "items": [
                "雾理莎",
                "8c54ead664"
              ],
              "status": "done",
              "evidence": "git 8c54ead6"
            },
            {
              "v": "7172b755",
              "date": "09-24",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.038: A93 前端滚动自持层（滚轮兜底+自绘滚动带）",
              "items": [
                "雾理莎",
                "7172b755bf"
              ],
              "status": "done",
              "evidence": "git 7172b755"
            },
            {
              "v": "892a00f7",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.038: 修复注册面并发测试首读抢跑（prepare 门禁误中止）",
              "items": [
                "雾理莎",
                "892a00f7fc"
              ],
              "status": "done",
              "evidence": "git 892a00f7"
            },
            {
              "v": "66aac1eb",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.038: QQ 私聊消息头硬编码名改为 Rushiera",
              "items": [
                "Rushiera",
                "66aac1eb48"
              ],
              "status": "done",
              "evidence": "git 66aac1eb"
            },
            {
              "v": "5b374a3f",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.039: A92 cs-member codes 批量入口（整批一次编译预检）",
              "items": [
                "雾理莎",
                "5b374a3ff6"
              ],
              "status": "done",
              "evidence": "git 5b374a3f"
            },
            {
              "v": "6da95b2b",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.040: A94 重试报错语义流完整（续传补原文+failed 终态+复位统一出口）",
              "items": [
                "雾理莎",
                "6da95b2ba3"
              ],
              "status": "done",
              "evidence": "git 6da95b2b"
            },
            {
              "v": "bbe3a0e6",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.040: A95 live 思考块生命周期归前端（态驱动销毁——后端零改动）",
              "items": [
                "雾理莎",
                "bbe3a0e66e"
              ],
              "status": "done",
              "evidence": "git bbe3a0e6"
            },
            {
              "v": "0a90288b",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.040: 检索工具截断可见化——Tree 广度优先 + depth 自然语义 + 越限报总量",
              "items": [
                "雾理莎",
                "0a90288b18"
              ],
              "status": "done",
              "evidence": "git 0a90288b"
            },
            {
              "v": "17428b04",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.041: Z8 宿主工具摘要退役——折叠行兜底前移 + 覆盖哨兵",
              "items": [
                "雾理莎",
                "17428b040b"
              ],
              "status": "done",
              "evidence": "git 17428b04"
            },
            {
              "v": "64864522",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.042: 工具注入面/授权面解耦 + 参数面对账门禁",
              "items": [
                "雾理莎",
                "6486452293"
              ],
              "status": "done",
              "evidence": "git 64864522"
            },
            {
              "v": "31eeebbd",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.044: 工具漂移摘要 + 特权面激活模型收窄",
              "items": [
                "雾理莎",
                "31eeebbd7a"
              ],
              "status": "done",
              "evidence": "git 31eeebbd"
            },
            {
              "v": "5a749b8c",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.046: timeback 上下文作用域工具 + 锚点松绑 + 尾巴清理",
              "items": [
                "雾理莎",
                "5a749b8ce5"
              ],
              "status": "done",
              "evidence": "git 5a749b8c"
            },
            {
              "v": "949d2608",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.048: timeback 语义重设（锚点=start 调用 · 回收=back 返回值）+ 同批多调用边界修正 + 视图转 gap",
              "items": [
                "雾理莎",
                "949d26083d"
              ],
              "status": "done",
              "evidence": "git 949d2608"
            },
            {
              "v": "678f05c6",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.051: timeback T2 落地——状态提示/归档到达面/本体修正黑名单",
              "items": [
                "雾理莎",
                "678f05c656"
              ],
              "status": "done",
              "evidence": "git 678f05c6"
            },
            {
              "v": "e4ebf323",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.052: timeback back 回执补释放条数与前文长度快照",
              "items": [
                "雾理莎",
                "e4ebf32398"
              ],
              "status": "done",
              "evidence": "git e4ebf323"
            },
            {
              "v": "d000c716",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.052: A105 图片插入主干 + 视服载荷语义修复",
              "items": [
                "雾理莎",
                "d000c716ae"
              ],
              "status": "done",
              "evidence": "git d000c716"
            },
            {
              "v": "001831f6",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.056: timeback 废弃块 + 批内次序 + image-inject 根寻址",
              "items": [
                "雾理莎",
                "001831f65f"
              ],
              "status": "done",
              "evidence": "git 001831f6"
            },
            {
              "v": "fb057ed3",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.056: A107 工具组定义缺陷可见性 + 解析探针",
              "items": [
                "雾理莎",
                "fb057ed38f"
              ],
              "status": "done",
              "evidence": "git fb057ed3"
            },
            {
              "v": "5226b947",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.057: A109 空catch判据收紧(全仓77处补语句) + PS禁目录列举 + 前端MD表格两修",
              "items": [
                "雾理莎",
                "5226b94720"
              ],
              "status": "done",
              "evidence": "git 5226b947"
            },
            {
              "v": "2ad0cea8",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.058: A104 timeback 归档重做(全局计数 + 一次回收一个作用域文件)",
              "items": [
                "雾理莎",
                "2ad0cea822"
              ],
              "status": "done",
              "evidence": "git 2ad0cea8"
            },
            {
              "v": "4c3d3379",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.062: 新增浏览器能力（headless 内核 + CDP 五工具）",
              "items": [
                "雾理莎",
                "4c3d3379a6"
              ],
              "status": "done",
              "evidence": "git 4c3d3379"
            },
            {
              "v": "97446e8f",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.062: 修复 timeback 三段式与思考块推送序",
              "items": [
                "雾理莎",
                "97446e8ffb"
              ],
              "status": "done",
              "evidence": "git 97446e8f"
            },
            {
              "v": "c55ea445",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.062: 受控根固定命名根与特权工具可见不可配（前端配置面区分）",
              "items": [
                "雾理莎",
                "c55ea44579"
              ],
              "status": "done",
              "evidence": "git c55ea445"
            },
            {
              "v": "8ffa0207",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.063: A111 转发游标内容锚定——锚点 + 块序变更通知 + 三级校正",
              "items": [
                "雾理莎",
                "8ffa0207ac"
              ],
              "status": "done",
              "evidence": "git 8ffa0207"
            },
            {
              "v": "136f286a",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.064: A112 文件标记扫描面统一——/last 接入标记扫描 + 文件发送统一出口",
              "items": [
                "雾理莎",
                "136f286a60"
              ],
              "status": "done",
              "evidence": "git 136f286a"
            },
            {
              "v": "f5210ae7",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.04.000: A113 .NET 10 全局升级——双 sln TFM 升 net10.0，SetUp 环境检测升 10",
              "items": [
                "雾理莎",
                "f5210ae7bb"
              ],
              "status": "done",
              "evidence": "git f5210ae7"
            },
            {
              "v": "2a0ea73e",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.04.001: A114/A115 统计口径 + A116 重启用时回执",
              "items": [
                "雾理莎",
                "2a0ea73e13"
              ],
              "status": "done",
              "evidence": "git 2a0ea73e"
            },
            {
              "v": "6ab8990a",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.04.002: A117 继续指令 + 输入区三按钮；测试隔离修复；失败措辞分档",
              "items": [
                "雾理莎",
                "6ab8990acd"
              ],
              "status": "done",
              "evidence": "git 6ab8990a"
            },
            {
              "v": "4e832034",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.04.002: timeback 状态提示步长 10 到 25；测试批数与断言同步",
              "items": [
                "雾理莎",
                "4e8320342d"
              ],
              "status": "done",
              "evidence": "git 4e832034"
            },
            {
              "v": "31c2a9b7",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.03.038: LLM 池编辑保留默认标记 + endpoint 推导三消费点同源",
              "items": [
                "Rushiera",
                "31c2a9b719"
              ],
              "status": "done",
              "evidence": "git 31c2a9b7"
            },
            {
              "v": "7fc94967",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.04.003: 前端字号体系重构（五档令牌 + 全局缩放配置）",
              "items": [
                "雾理莎",
                "7fc9496746"
              ],
              "status": "done",
              "evidence": "git 7fc94967"
            },
            {
              "v": "20c07e0e",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.05.008: A118 宿主外壳——WinExe 化 + 托盘常驻 + 总控窗 + 猫爪印图标四处同源 + 前端 favicon",
              "items": [
                "雾理莎",
                "20c07e0ed1"
              ],
              "status": "done",
              "evidence": "git 20c07e0e"
            },
            {
              "v": "ba3bfbc1",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.004: A120-A123 内容面字体（更纱）+ 浏览器一锚一进程 + 输入区遮挡修复",
              "items": [
                "雾理莎",
                "ba3bfbc1ec"
              ],
              "status": "done",
              "evidence": "git ba3bfbc1"
            },
            {
              "v": "7d324ca8",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: info 补根绝对路径 + A126 ps 根寻址（PSDrive 注入 + 保留名黑名单）",
              "items": [
                "雾理莎",
                "7d324ca8ae"
              ],
              "status": "done",
              "evidence": "git 7d324ca8"
            },
            {
              "v": "cffb096a",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 前端小优（info 根路径行 + 配置项注释单源）+ schema 文案校正",
              "items": [
                "雾理莎",
                "cffb096a60"
              ],
              "status": "done",
              "evidence": "git cffb096a"
            },
            {
              "v": "2667b7e5",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge origin/master (v1.06.005) into RushieraChange——冲突解决：DeepSeekVisionService 采纳莎侧 ImagePayload 重构 + 保留本方端点推导外移（CH_LlmApiConfigStore.DeriveChatEndpoint）",
              "items": [
                "Rushiera",
                "2667b7e514"
              ],
              "status": "done",
              "evidence": "git 2667b7e5"
            },
            {
              "v": "4c0fdf47",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.012: cs 工具面三件（A119/A124/A125）+ timeback 两项修订",
              "items": [
                "雾理莎",
                "4c0fdf47f3"
              ],
              "status": "done",
              "evidence": "git 4c0fdf47"
            },
            {
              "v": "2b86be88",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 更新配置页——大项收起展开·行内编辑·新猫模板套用",
              "items": [
                "Rushiera",
                "2b86be88d6"
              ],
              "status": "done",
              "evidence": "git 2b86be88"
            },
            {
              "v": "be6dad31",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 多猫主面板改版 + API 池默认列 + 新建猫自动命名",
              "items": [
                "Rushiera",
                "be6dad3164"
              ],
              "status": "done",
              "evidence": "git be6dad31"
            },
            {
              "v": "cbc7f605",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 修复多猫配置写入链——cat-config 字段级合并写 + 空值语义 + 落盘即刷新",
              "items": [
                "Rushiera",
                "cbc7f6056c"
              ],
              "status": "done",
              "evidence": "git cbc7f605"
            },
            {
              "v": "fbaf1a05",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 新增会话状态卡详情（端点 + 指令 + 弹层）",
              "items": [
                "Rushiera",
                "fbaf1a05e3"
              ],
              "status": "done",
              "evidence": "git fbaf1a05"
            },
            {
              "v": "24999a5f",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 面板体验轮——前文 tokens 上会话卡与详情 + 端口入口移至刷新左边 + 新猫模板隐藏特权组",
              "items": [
                "Rushiera",
                "24999a5f41"
              ],
              "status": "done",
              "evidence": "git 24999a5f"
            },
            {
              "v": "39ef1e1e",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 多猫面板会话状态列——phase 徽标 + 前文 tokens + 整行开会话详情",
              "items": [
                "Rushiera",
                "39ef1e1ec2"
              ],
              "status": "done",
              "evidence": "git 39ef1e1e"
            },
            {
              "v": "0887264c",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: LLM API 池测试按钮——三探报告弹窗（模型/站点/定价）",
              "items": [
                "Rushiera",
                "0887264c59"
              ],
              "status": "done",
              "evidence": "git 0887264c"
            },
            {
              "v": "e04a2ff6",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 会话详情易用性——停止·一行输入发送·遮罩关闭·末条输入沉底",
              "items": [
                "Rushiera",
                "e04a2ff6e9"
              ],
              "status": "done",
              "evidence": "git e04a2ff6"
            },
            {
              "v": "cb3cb0c3",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 前文注入选择式——多猫行新列 + 猫配置撤手动路径输入",
              "items": [
                "Rushiera",
                "cb3cb0c357"
              ],
              "status": "done",
              "evidence": "git cb3cb0c3"
            },
            {
              "v": "75fbda11",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.013: A127 工具分批调度（order 静态表／批间串行／徽标／启动对账）",
              "items": [
                "雾理莎",
                "75fbda1130"
              ],
              "status": "done",
              "evidence": "git 75fbda11"
            },
            {
              "v": "c761a34d",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 端点故障转移 + 备用端点 + 对话页角色标签",
              "items": [
                "Rushiera",
                "c761a34d41"
              ],
              "status": "done",
              "evidence": "git c761a34d"
            },
            {
              "v": "967fc8ba",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.013: A128 工具卡逐条回填 + A129 参数形态规范 + A132 配置写入剔除出声",
              "items": [
                "雾理莎",
                "967fc8ba60"
              ],
              "status": "done",
              "evidence": "git 967fc8ba"
            },
            {
              "v": "1b57ff02",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.014: A130 版本自增 - prepare 段0 读单点递增写回 + 版本域分部 Program.Version.cs + SetUp.exe 0.5.2 重发",
              "items": [
                "雾理莎",
                "1b57ff02a0"
              ],
              "status": "done",
              "evidence": "git 1b57ff02"
            },
            {
              "v": "cd1242b1",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.06.005: 用户态——当前用户 + 注入段 + QQ 消息头身份标记 + 面板弹层",
              "items": [
                "Rushiera",
                "cd1242b14c"
              ],
              "status": "done",
              "evidence": "git cd1242b1"
            },
            {
              "v": "652c81ea",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "版本单点重置 1.06.015 -> 1.7.0（A130 上线后新基线）",
              "items": [
                "雾理莎",
                "652c81ea1c"
              ],
              "status": "done",
              "evidence": "git 652c81ea"
            },
            {
              "v": "e6057ac8",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.1: 单点版本自增（restart-full 部署上线，段0 实测 1.7.0 -> 1.7.1）",
              "items": [
                "雾理莎",
                "e6057ac89c"
              ],
              "status": "done",
              "evidence": "git e6057ac8"
            },
            {
              "v": "786c3bd7",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge origin/master (v1.7.1) into RushieraChange——冲突解决：Handlers 采纳 A132 剔除出声（双参校验 + removedToolNames 回执）并保留字段级合并写；panel-catcfg 保存回执合并剔除提示与模板套用面；style.css 双侧样式块并留；frontend-version 取 301",
              "items": [
                "Rushiera",
                "786c3bd74c"
              ],
              "status": "done",
              "evidence": "git 786c3bd7"
            },
            {
              "v": "a9d2b0ff",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.5: A131 三类重启与重启链加固",
              "items": [
                "雾理莎",
                "a9d2b0ffa1"
              ],
              "status": "done",
              "evidence": "git a9d2b0ff"
            },
            {
              "v": "1b725422",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge origin/master (v1.7.5) into RushieraChange——冲突解决：frontend-version 取 301（该字段由 vitest 全局 setup 自增，取较大值保缓存单调不回退）；ChatSession.cs 自动合并",
              "items": [
                "Rushiera",
                "1b72542274"
              ],
              "status": "done",
              "evidence": "git 1b725422"
            },
            {
              "v": "c5b7d0e1",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.6: 单点版本自增（full 部署上线，段0 实测 1.7.5 -> 1.7.6）",
              "items": [
                "Rushiera",
                "c5b7d0e1e3"
              ],
              "status": "done",
              "evidence": "git c5b7d0e1"
            },
            {
              "v": "85d6131f",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.15: A137/A138/A139 转义与解析入口统一 + 重启切换加固",
              "items": [
                "雾理莎",
                "85d6131f9f"
              ],
              "status": "done",
              "evidence": "git 85d6131f"
            },
            {
              "v": "4fb5ccea",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "timeback 强化：环节判据 + 写操作台账（v1.7.16-1.7.17）",
              "items": [
                "雾理莎",
                "4fb5cceac1"
              ],
              "status": "done",
              "evidence": "git 4fb5ccea"
            },
            {
              "v": "82895d46",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "tools/codestat: 代码体量统计脚本常驻（去空行/去注释口径，参数化 + README）",
              "items": [
                "雾理莎",
                "82895d46f7"
              ],
              "status": "done",
              "evidence": "git 82895d46"
            },
            {
              "v": "bde23ccf",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge origin/master (v1.7.17) into RushieraChange——冲突解决：Directory.Build.props 版本取 1.7.17（较大值保版本单调）；frontend-version 取 301（缓存单调不回退）",
              "items": [
                "Rushiera",
                "bde23ccf02"
              ],
              "status": "done",
              "evidence": "git bde23ccf"
            },
            {
              "v": "a2485c8e",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.18: 单点版本自增（合并 master v1.7.15-1.7.17 + full 部署上线）",
              "items": [
                "Rushiera",
                "a2485c8e48"
              ],
              "status": "done",
              "evidence": "git a2485c8e"
            },
            {
              "v": "2dc6e7c9",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.19: 对话页前文弹层——API 角色标签左移 + 前文条数/tokens 可点击",
              "items": [
                "Rushiera",
                "2dc6e7c926"
              ],
              "status": "done",
              "evidence": "git 2dc6e7c9"
            },
            {
              "v": "44bd0f6e",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.21: 对话页前文关键信息弹层 + 归并越界修复",
              "items": [
                "Rushiera",
                "44bd0f6e3b"
              ],
              "status": "done",
              "evidence": "git 44bd0f6e"
            },
            {
              "v": "faf3f18b",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.23: 端点标签显当前生效站模型名 + 故障转移后延迟自动继续（15 秒 / 上限 12 次）",
              "items": [
                "Rushiera",
                "faf3f18b85"
              ],
              "status": "done",
              "evidence": "git faf3f18b"
            },
            {
              "v": "4c42d5fd",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.24: 完整前文留档——FullContextStore + /api/v1/fullctx + 弹层第四视图",
              "items": [
                "Rushiera",
                "4c42d5fd83"
              ],
              "status": "done",
              "evidence": "git 4c42d5fd"
            },
            {
              "v": "6e10ea63",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.26 前文自动重建（巡检+静默重建+留档守卫）+ 前文弹层窗口加固（恒含首条）",
              "items": [
                "Rushiera",
                "6e10ea63dd"
              ],
              "status": "done",
              "evidence": "git 6e10ea63"
            },
            {
              "v": "168f175d",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.18: 推送可靠性与外观层性能（A140-A143）",
              "items": [
                "雾理莎",
                "168f175dae"
              ],
              "status": "done",
              "evidence": "git 168f175d"
            },
            {
              "v": "0b164b0c",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.28: 前文类视图缺省可配置 chat.ctx_view_max（上限 2000）+ 弹层走端点缺省",
              "items": [
                "Rushiera",
                "0b164b0c8b"
              ],
              "status": "done",
              "evidence": "git 0b164b0c"
            },
            {
              "v": "13d09e20",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.21: A144 独占档 / A145 cat-config 合并写 / 视图层流① 补齐 / 工具卡构造内核 / A155 立项",
              "items": [
                "雾理莎",
                "13d09e20db"
              ],
              "status": "done",
              "evidence": "git 13d09e20"
            },
            {
              "v": "331ea874",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge origin/master (v1.7.18: 推送可靠性与外观层性能 A140-A143) into RushieraChange——冲突解决：Directory.Build.props 版本取较大值 1.7.28、frontend-version 取 309（缓存单调）；HttpHostOptions/HttpHost/AdminService 两侧新增字段并存（前文三视图 Builder + HistoryDeltaBuilder）；ui-common 两侧函数并存（wireInlineEdit + SSE 落差检测）；chat-view 融合 A142 分片重建与本支 chatInfoSet 状态栏",
              "items": [
                "Rushiera",
                "331ea87482"
              ],
              "status": "done",
              "evidence": "git 331ea874"
            },
            {
              "v": "e44a9642",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.29: 单点版本自增（合并 master v1.7.18 + full 部署上线）",
              "items": [
                "Rushiera",
                "e44a96423d"
              ],
              "status": "done",
              "evidence": "git e44a9642"
            },
            {
              "v": "a3d45f30",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.30: 完整前文采集入口 4 + 正文四字段口径统一 + 弹层刷新 + 统计改预估 token",
              "items": [
                "Rushiera",
                "a3d45f306a"
              ],
              "status": "done",
              "evidence": "git a3d45f30"
            },
            {
              "v": "4e7fb0b3",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.27: 工具面缺陷批 A146-A154 + 配置段创建通道（config-set declare）",
              "items": [
                "雾理莎",
                "4e7fb0b3fe"
              ],
              "status": "done",
              "evidence": "git 4e7fb0b3"
            },
            {
              "v": "3b6496f8",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.31: 完整前文 token 实测反推（A93）——usage 帧反推本会话比值 + 留档头折算行 + 端点 tokens 字段",
              "items": [
                "Rushiera",
                "3b6496f8f0"
              ],
              "status": "done",
              "evidence": "git 3b6496f8"
            },
            {
              "v": "1242195e",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.29: A155 视图出口结构收口与工具卡哨兵显式化（2a+2b）",
              "items": [
                "雾理莎",
                "1242195e87"
              ],
              "status": "done",
              "evidence": "git 1242195e"
            },
            {
              "v": "10345737",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.32: 前文/历史视图缺省改不限——删 chat.ctx_view_max 声明",
              "items": [
                "Rushiera",
                "1034573723"
              ],
              "status": "done",
              "evidence": "git 10345737"
            },
            {
              "v": "ddb747a3",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.34: 对话页历史从下往上加载——尾部窗口 + 上拉补历史",
              "items": [
                "Rushiera",
                "ddb747a3c3"
              ],
              "status": "done",
              "evidence": "git ddb747a3"
            },
            {
              "v": "6a93d4e4",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.32: A156期一 视图层与前文并列化（块契约落位）",
              "items": [
                "雾理莎",
                "6a93d4e4d1"
              ],
              "status": "done",
              "evidence": "git 6a93d4e4"
            },
            {
              "v": "3c4804d5",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.34: A157 视图块ID/时长/协议 + 视图推送崩溃修复",
              "items": [
                "雾理莎",
                "3c4804d5ce"
              ],
              "status": "done",
              "evidence": "git 3c4804d5"
            },
            {
              "v": "f7bb40cc",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.35: A158 期三 视图层两区镜像重构（出口 op 化 + 计数退役 + 重连全量）",
              "items": [
                "雾理莎",
                "f7bb40ccb1"
              ],
              "status": "done",
              "evidence": "git f7bb40cc"
            },
            {
              "v": "2179be01",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.36: A162 视图面改状态推送（前端架构纯化）",
              "items": [
                "雾理莎",
                "2179be013a"
              ],
              "status": "done",
              "evidence": "git 2179be01"
            },
            {
              "v": "7477ceb2",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.38: 视图面修复批部署（源码已回退——待 A164 重构）",
              "items": [
                "雾理莎",
                "7477ceb295"
              ],
              "status": "done",
              "evidence": "git 7477ceb2"
            },
            {
              "v": "253347f2",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "A165 阶段1: chat 快照协议 v2 后端落地（三段/三模式/无键面）",
              "items": [
                "雾理莎",
                "253347f22f"
              ],
              "status": "done",
              "evidence": "git 253347f2"
            },
            {
              "v": "e05515d8",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.40: A167 阶段3 主干重建（素材回填+主干6件+新chat.html+路由catch-all+旧件退役）+ 部署后修复链（全量帧单一真相源/载荷字段对齐/指令总线Chat前缀/toolIcon崩溃/渲染功能隔离/前端符号自检）",
              "items": [
                "雾理莎",
                "e05515d8d4"
              ],
              "status": "done",
              "evidence": "git e05515d8"
            },
            {
              "v": "7c4e4b94",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "A168-A174: 前端侧翼件转移七件（滚动自持/Note/定时/桌宠/图片粘贴/插话队列/PS解码恢复）+ 协议旧节清理",
              "items": [
                "雾理莎",
                "7c4e4b94f8"
              ],
              "status": "done",
              "evidence": "git 7c4e4b94"
            },
            {
              "v": "c4064d12",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.40: 前端形态契约收窄——气泡仅 user/text，其余 9 类改朴素件（形态表单点 registry.js BLOCK_FORM）",
              "items": [
                "雾理莎",
                "c4064d12fd"
              ],
              "status": "done",
              "evidence": "git c4064d12"
            },
            {
              "v": "dcbcb793",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge origin/master (v1.7.36: A162 视图面改状态推送 + A158 期三视图层两区镜像) into RushieraChange",
              "items": [
                "Rushiera",
                "dcbcb79332"
              ],
              "status": "done",
              "evidence": "git dcbcb793"
            },
            {
              "v": "93f82af8",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.37: 单点版本自增（合并 master v1.7.21-v1.7.36 + full 部署上线）",
              "items": [
                "Rushiera",
                "93f82af88d"
              ],
              "status": "done",
              "evidence": "git 93f82af8"
            },
            {
              "v": "c85ac917",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.41: 对话页历史全量重建 + 全量帧恢复 + 状态栏前文三段（A95-A97）",
              "items": [
                "Rushiera",
                "c85ac91740"
              ],
              "status": "done",
              "evidence": "git c85ac917"
            },
            {
              "v": "7180db92",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.40: 前端收口 A176-A178（fx 归位 / 死码清理 / 主干解耦）",
              "items": [
                "雾理莎",
                "7180db9229"
              ],
              "status": "done",
              "evidence": "git 7180db92"
            },
            {
              "v": "186b4292",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.40: 前端收口 A179（块声明表单点 / 刻度改查表 / 六态合并 / 桌宠右键菜单与通知面）—— 22 文件 +238 -112",
              "items": [
                "雾理莎",
                "186b4292a3"
              ],
              "status": "done",
              "evidence": "git 186b4292"
            },
            {
              "v": "f4a95254",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.40: 前端收口 A180（CSS 死规则 + 同源死码一并清理）",
              "items": [
                "雾理莎",
                "f4a95254d3"
              ],
              "status": "done",
              "evidence": "git f4a95254"
            },
            {
              "v": "79ce0ee8",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.43: 上游异常自动继续——重试耗尽未切换也延迟重发",
              "items": [
                "Rushiera",
                "79ce0ee8a1"
              ],
              "status": "done",
              "evidence": "git 79ce0ee8"
            },
            {
              "v": "b8e31af9",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.40: 前端收口 A181-A182（SSE 订阅面收窄 + 测试回归网重建）",
              "items": [
                "雾理莎",
                "b8e31af9e8"
              ],
              "status": "done",
              "evidence": "git b8e31af9"
            },
            {
              "v": "ecd1c89e",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.43: 前端收口 A185-A186（state 段补 delay 与 conn 字段 · delay 旁路端点退役）",
              "items": [
                "雾理莎",
                "ecd1c89e93"
              ],
              "status": "done",
              "evidence": "git ecd1c89e"
            },
            {
              "v": "cafd110e",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.47: A188 gap_text 分型 + A190/A191 旁路与旧事件退役",
              "items": [
                "雾理莎",
                "cafd110eb5"
              ],
              "status": "done",
              "evidence": "git cafd110e"
            },
            {
              "v": "67ea79bd",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.49: A187 live 语义入契约 + type 重构（thinksse/replysse/toolrun + empty）",
              "items": [
                "雾理莎",
                "67ea79bde3"
              ],
              "status": "done",
              "evidence": "git 67ea79bd"
            },
            {
              "v": "fd283ca9",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.49: A189 契约字段/通道表补齐 + A192 快照推送复核（注释勘误）",
              "items": [
                "雾理莎",
                "fd283ca9c6"
              ],
              "status": "done",
              "evidence": "git fd283ca9"
            },
            {
              "v": "ec52cb6c",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge origin/master (v1.7.49: A165-A167 前端架构换代 + 快照 v2 契约 + A187 live 语义) into RushieraChange——冲突解决：版本取大（1.7.49 / frontend-version 365 起 vitest 自增至 367）；前端采纳上游模块化（chat-core/chat-view 退役，js/chat/ 六段结构；本支前文弹层前端 chat-ctx.js 暂留待重接线）；历史链退役（/api/v1/history + BuildHistoryView + HistoryBuilder——由 persist:full 覆盖）；视图全量载荷取上游 v2（SetState + 无参 BuildFull；本支 ctxCount/ctxTokens 三段退役）；留档渲染取上游（LegacyBlockContent 块载荷键随 v2 改 text——BuildKeyInfo 与留档共用出口）；note/delay/sessionstate 端点随上游退役（并入 state 段）；A111 块序通知链（ViewOrderChange + QQ 游标校正）随上游退役；保留本支后端新增（context/keyinfo/fullctx 端点 + api-role 端点 + 完整前文留档 FullContextStore + 端点角色 LlmEndpointRole + 上游异常自动继续）；自动继续可见性改状态段推送 PushState；测试：dotnet test 324 通过（Core 281 + QQ 43）· 前端 vitest 143 通过",
              "items": [
                "Rushiera",
                "ec52cb6c21"
              ],
              "status": "done",
              "evidence": "git ec52cb6c"
            },
            {
              "v": "685d1090",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.50: 单点版本自增（合并 master v1.7.49 + full 部署上线）",
              "items": [
                "Rushiera",
                "685d1090a5"
              ],
              "status": "done",
              "evidence": "git 685d1090"
            },
            {
              "v": "beb0629e",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.50: 前端重接线——前文弹层四视图（js/chat/ctx.js）+ 状态栏三段入口 + 端点角色标签（js/chat/apirole.js）；依附 lib/dom·lib/format·chatInfoSet 现有面，零新增后端机制",
              "items": [
                "Rushiera",
                "beb0629ece"
              ],
              "status": "done",
              "evidence": "git beb0629e"
            },
            {
              "v": "6c479178",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.49: A193/A194 state 分层（分发表 + 五件迁出）",
              "items": [
                "雾理莎",
                "6c47917804"
              ],
              "status": "done",
              "evidence": "git 6c479178"
            },
            {
              "v": "d124c8b3",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.49: 前端 live 区重构与计数清零",
              "items": [
                "雾理莎",
                "d124c8b31b"
              ],
              "status": "done",
              "evidence": "git d124c8b3"
            },
            {
              "v": "f0926d3e",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.50: A196 后端 live 改状态投影（SetLive 两字符串）+ 临时区面板高度固定",
              "items": [
                "雾理莎",
                "f0926d3e7a"
              ],
              "status": "done",
              "evidence": "git f0926d3e"
            },
            {
              "v": "bf93da6e",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "前端：持久区 type 归一（gap_text 收包归一为 text）+ 块型气泡化（persist 八类全气泡 · 描边=态色 · inject/roundsum 淡紫）",
              "items": [
                "雾理莎",
                "bf93da6e67"
              ],
              "status": "done",
              "evidence": "git bf93da6e"
            },
            {
              "v": "87cacc5d",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge origin/master (v1.7.49-v1.7.50) into RushieraChange",
              "items": [
                "Rushiera",
                "87cacc5de6"
              ],
              "status": "done",
              "evidence": "git 87cacc5d"
            },
            {
              "v": "4b0a8cbd",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.50: frontend-version 自增（合并后回归——vitest 全局 setup 自增保缓存单调）",
              "items": [
                "Rushiera",
                "4b0a8cbddb"
              ],
              "status": "done",
              "evidence": "git 4b0a8cbd"
            },
            {
              "v": "fea22b81",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.52: 单点版本自增（合并 master v1.7.49-v1.7.50 + full 部署上线）",
              "items": [
                "Rushiera",
                "fea22b810b"
              ],
              "status": "done",
              "evidence": "git fea22b81"
            },
            {
              "v": "df3af4f5",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.53: 修复受控根保存死锁——系统根三列以定义为准（读面/写面归一）",
              "items": [
                "Rushiera",
                "df3af4f5c2"
              ],
              "status": "done",
              "evidence": "git df3af4f5"
            },
            {
              "v": "24cb4f2b",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.52: 新增会话元数据持久化与 state 双类 token",
              "items": [
                "雾理莎",
                "24cb4f2be1"
              ],
              "status": "done",
              "evidence": "git 24cb4f2b"
            },
            {
              "v": "c96a8549",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.53: A201 前端轮——会话标识/信息位上屏 + 统一格式化 + 后端 meta 修复",
              "items": [
                "雾理莎",
                "c96a85493b"
              ],
              "status": "done",
              "evidence": "git c96a8549"
            },
            {
              "v": "948439ef",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.54: A202 落盘时机重定义（每请求落盘 + jsonl 统计退役）",
              "items": [
                "雾理莎",
                "948439eff4"
              ],
              "status": "done",
              "evidence": "git 948439ef"
            },
            {
              "v": "8235bf55",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.55: reason 块载荷规整化 + A199 前端精细处理",
              "items": [
                "雾理莎",
                "8235bf559e"
              ],
              "status": "done",
              "evidence": "git 8235bf55"
            },
            {
              "v": "9b40e407",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.55: A200 工具卡声明层恢复（62 件拆件 + 专属骨架 + 计数恢复） + 图片包裹位置放宽",
              "items": [
                "雾理莎",
                "9b40e40718"
              ],
              "status": "done",
              "evidence": "git 9b40e407"
            },
            {
              "v": "f5217726",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "前端：A198 逐 type 核对（契约补 persist 载荷字段面 · 节点操作条复归 · roundsum miss 兜底消除）+ A203 交互三件（新会话二次确认 · 操作条按钮文案 · 信息位富文本分片）",
              "items": [
                "雾理莎",
                "f52177264a"
              ],
              "status": "done",
              "evidence": "git f5217726"
            },
            {
              "v": "be4542a3",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "前端：数值分片机制（信息位/轮结算 Hit·Miss·Down 三色 + 净命中量 + 小数分片）+ 滚动跟随重构（判定前置 / 平滑单例）+ MD 正文象牙白",
              "items": [
                "雾理莎",
                "be4542a321"
              ],
              "status": "done",
              "evidence": "git be4542a3"
            },
            {
              "v": "fc569176",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "前端：live 切换开关（滑块 输入/流式）+ 流式态色单源与气泡呼吸 + 两处自动切换（user/roundsum）",
              "items": [
                "雾理莎",
                "fc56917674"
              ],
              "status": "done",
              "evidence": "git fc569176"
            },
            {
              "v": "e69e1379",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "前端：流式呈现机制独立 stream.js（前缀增量 + 打字机 60 步/秒 + 面板跟随 + 段期光标；thinksse/replysse 同挂）+ 开关上方统计行 line/char/spd",
              "items": [
                "雾理莎",
                "e69e1379db"
              ],
              "status": "done",
              "evidence": "git e69e1379"
            },
            {
              "v": "2db2c169",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "前端：流式统计行改 100ms 统一刷新（10 次/秒 · 机制侧去推送）",
              "items": [
                "雾理莎",
                "2db2c1692d"
              ],
              "status": "done",
              "evidence": "git 2db2c169"
            },
            {
              "v": "c848ee91",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.57: A206 重启最后一帧收尾 + A205 timeback 成果定位",
              "items": [
                "雾理莎",
                "c848ee91a4"
              ],
              "status": "done",
              "evidence": "git c848ee91"
            },
            {
              "v": "bb69da6c",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.57: 前端微调四件（信息位文案顺序 · 轮末四项行单位色/间距 · 流式统计行口径 · 开关单按钮）",
              "items": [
                "雾理莎",
                "bb69da6c9d"
              ],
              "status": "done",
              "evidence": "git bb69da6c"
            },
            {
              "v": "8ca976ef",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.7.59: A204 系统注入统一入口 + user 块 src 标记 + 前端靠左/不打断输入",
              "items": [
                "雾理莎",
                "8ca976efb5"
              ],
              "status": "done",
              "evidence": "git 8ca976ef"
            },
            {
              "v": "c5a11fa2",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.1: 面板标题 CatHome4ConsoleV3 + 快照 version 常量 3",
              "items": [
                "雾理莎",
                "c5a11fa255"
              ],
              "status": "done",
              "evidence": "git c5a11fa2"
            },
            {
              "v": "1d91351b",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge origin/master (v1.8.1: A198-A206 前端轮 + 会话元数据持久化 + 系统注入统一入口) into RushieraChange",
              "items": [
                "Rushiera",
                "1d91351b2d"
              ],
              "status": "done",
              "evidence": "git 1d91351b"
            },
            {
              "v": "4fda141b",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.1: 工具描述收窄——PS 根寻址仅命令自身路径位（Bricks/TOOLS-008）",
              "items": [
                "雾理莎",
                "4fda141b94"
              ],
              "status": "done",
              "evidence": "git 4fda141b"
            },
            {
              "v": "b9f8ddc8",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.3: cs-* 入口统一——三态全通 + 按 class 定位 + 诊断码分列（T3-T6）",
              "items": [
                "雾理莎",
                "b9f8ddc856"
              ],
              "status": "done",
              "evidence": "git b9f8ddc8"
            },
            {
              "v": "648fc2e5",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.5: T7 cs 域报错归一（25 码码表 + 三段式）+ T8 cs-format csproj 入口同源化（CollectProjectSources · ResolveEntryPath 退役）",
              "items": [
                "雾理莎",
                "648fc2e5c7"
              ],
              "status": "done",
              "evidence": "git 648fc2e5"
            },
            {
              "v": "4096c2d7",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.7: 前文统计偶发归零修复（state 段 context 出口回落）",
              "items": [
                "雾理莎",
                "4096c2d774"
              ],
              "status": "done",
              "evidence": "git 4096c2d7"
            },
            {
              "v": "b9cf8fc0",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.8: 前文长度归零（session.new ResetStats + 回滚路径补清请求级实时值）",
              "items": [
                "雾理莎",
                "b9cf8fc07d"
              ],
              "status": "done",
              "evidence": "git b9cf8fc0"
            },
            {
              "v": "5cc74b8f",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.10: A207 转发面两批全做（游标越界回写 + 锚点续接 · 来源与轮绑定）+ 回滚路径前文长度归零",
              "items": [
                "雾理莎",
                "5cc74b8f72"
              ],
              "status": "done",
              "evidence": "git 5cc74b8f"
            },
            {
              "v": "50f9bc93",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "tools/tokencount: token 统计脚本 + DeepSeek 词表素材（无依赖 byte-level BPE）",
              "items": [
                "雾理莎",
                "50f9bc935e"
              ],
              "status": "done",
              "evidence": "git 50f9bc93"
            },
            {
              "v": "973514f6",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "tools/codestat: 排除 tokencount 数据目录（防素材污染统计口径）+ 基线刷新",
              "items": [
                "雾理莎",
                "973514f6a8"
              ],
              "status": "done",
              "evidence": "git 973514f6"
            },
            {
              "v": "852a2525",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/master' into RushieraChange",
              "items": [
                "Rushiera",
                "852a25254d"
              ],
              "status": "done",
              "evidence": "git 852a2525"
            },
            {
              "v": "eca75ce8",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.11: 合并 master v1.8.3-v1.8.10 + 部署自增",
              "items": [
                "Rushiera",
                "eca75ce84e"
              ],
              "status": "done",
              "evidence": "git eca75ce8"
            },
            {
              "v": "91dbed6c",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.11: 新猫默认模板增目录白名单（defaultEnabledRoots）",
              "items": [
                "Rushiera",
                "91dbed6c5e"
              ],
              "status": "done",
              "evidence": "git 91dbed6c"
            },
            {
              "v": "df9e30c0",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "配置面: reasoning_effort 开可写 low/high/max + thinking 常开只读 + 只读项前端显式化",
              "items": [
                "雾理莎",
                "df9e30c0dc"
              ],
              "status": "done",
              "evidence": "git df9e30c0"
            },
            {
              "v": "8d520068",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.11: web-search 输出上限 2048->8192 + 结论先行提示词 + 截断回落来源清单",
              "items": [
                "雾理莎",
                "8d520068e8"
              ],
              "status": "done",
              "evidence": "git 8d520068"
            },
            {
              "v": "af0c5cad",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.11: A208 观测留痕——指令受理/注入受理//last 取块与服务 L1 + ResolveCatKey",
              "items": [
                "雾理莎",
                "af0c5cad38"
              ],
              "status": "done",
              "evidence": "git af0c5cad"
            },
            {
              "v": "f8b10e98",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.13: A209 timeback 拆两名（timeback-start / timeback-back）+ 前端两件专属解析 + 情报行进返回体 + anchor 取空修复",
              "items": [
                "雾理莎",
                "f8b10e98a9"
              ],
              "status": "done",
              "evidence": "git f8b10e98"
            },
            {
              "v": "19dbfa21",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.17: timeback 域类型批1-3——白名单判定(TIMEBACK_PROFILE)/按需预热/归档type·tools/两类回执骨架/台账全量/前端段表与折叠行带type + back思考净化 + 规范口径同步",
              "items": [
                "雾理莎",
                "19dbfa2197"
              ],
              "status": "done",
              "evidence": "git 19dbfa21"
            },
            {
              "v": "98e89df5",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.21: timeback 域类型批 4-5（白名单边界精细 + 域规范卡）",
              "items": [
                "雾理莎",
                "98e89df55a"
              ],
              "status": "done",
              "evidence": "git 98e89df5"
            },
            {
              "v": "d952d96a",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.22: timeback 回执措辞（骨架台账判据 · 台账头含只读被拒+DENY/ERR · 情报行域内节约 · 节律提示去尾 · start 卡单行化）",
              "items": [
                "雾理莎",
                "d952d96a54"
              ],
              "status": "done",
              "evidence": "git d952d96a"
            },
            {
              "v": "1c217bb9",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.23: timeback 归档 info 快照空心修复 + mau-* 路径统一寻址",
              "items": [
                "雾理莎",
                "1c217bb912"
              ],
              "status": "done",
              "evidence": "git 1c217bb9"
            },
            {
              "v": "9af2d0b6",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.25: A210 cs 组回执统一口径（target/items + 一句话摘要）+ 构建输出编码修复",
              "items": [
                "雾理莎",
                "9af2d0b6b3"
              ],
              "status": "done",
              "evidence": "git 9af2d0b6"
            },
            {
              "v": "f21dec42",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.27: timeback-back 回执尾附回读规范（收域第一步·文案裁剪至纯动作句）",
              "items": [
                "雾理莎",
                "f21dec42f4"
              ],
              "status": "done",
              "evidence": "git f21dec42"
            },
            {
              "v": "b2b5c620",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.28: A211 cs 桥根 id 前缀寻址忽略大小写（对齐全局规范）+ 回归测试",
              "items": [
                "雾理莎",
                "b2b5c620ef"
              ],
              "status": "done",
              "evidence": "git b2b5c620"
            },
            {
              "v": "8da72140",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.32: 新增 cs-test 跑测工具 + cs-member 引导修正 + visioncat 描述优化",
              "items": [
                "雾理莎",
                "8da721401f"
              ],
              "status": "done",
              "evidence": "git 8da72140"
            },
            {
              "v": "f631fc64",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.34: browser_vision 域规范卡追加第⑥段「浏览器操作」",
              "items": [
                "雾理莎",
                "f631fc64f9"
              ],
              "status": "done",
              "evidence": "git f631fc64"
            },
            {
              "v": "f43f4276",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.37: A215 qqbot 文件通道放行群聊（端点按来源分派 + 补 msg_seq）+ 群聊被动上限实测 5 统一按 4",
              "items": [
                "雾理莎",
                "f43f427654"
              ],
              "status": "done",
              "evidence": "git f43f4276"
            },
            {
              "v": "454d19ed",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.40: A216 qqbot 图片包裹转富媒体单发 + 路径解析修复 + A217 超窗降级收窄（仅私聊 + 仅 40034005）",
              "items": [
                "雾理莎",
                "454d19ed69"
              ],
              "status": "done",
              "evidence": "git 454d19ed"
            },
            {
              "v": "1ea44749",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.42: A214 全组回执统一口径（11 组 + 内置对齐 A210 · target/items + 摘要行）",
              "items": [
                "雾理莎",
                "1ea4474930"
              ],
              "status": "done",
              "evidence": "git 1ea44749"
            },
            {
              "v": "5523f357",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.42: 合并 master v1.8.13-v1.8.42 into RushieraChange",
              "items": [
                "Rushiera",
                "5523f35798"
              ],
              "status": "done",
              "evidence": "git 5523f357"
            },
            {
              "v": "2954ff7b",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.43: 单点版本自增（合并 master v1.8.13-v1.8.42 + full 部署上线）",
              "items": [
                "Rushiera",
                "2954ff7bfd"
              ],
              "status": "done",
              "evidence": "git 2954ff7b"
            },
            {
              "v": "71947448",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.46: web-fetch URL 资产下载（WebCat 组 · 非阻塞）",
              "items": [
                "雾理莎",
                "71947448f5"
              ],
              "status": "done",
              "evidence": "git 71947448"
            },
            {
              "v": "646268c0",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.46: 合并 master v1.8.43-v1.8.46 into RushieraChange",
              "items": [
                "Rushiera",
                "646268c04b"
              ],
              "status": "done",
              "evidence": "git 646268c0"
            },
            {
              "v": "57917fe7",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.53: A1 browser-headful 登录工具 + 浏览器启动净化(--disable-sync)",
              "items": [
                "雾理莎",
                "57917fe748"
              ],
              "status": "done",
              "evidence": "git 57917fe7"
            },
            {
              "v": "752f2985",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.48: 单点版本自增（合并 master v1.8.43-v1.8.46 + incr 部署上线）",
              "items": [
                "Rushiera",
                "752f298598"
              ],
              "status": "done",
              "evidence": "git 752f2985"
            },
            {
              "v": "95780365",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.56: browser 描述重写 + headful 独占档",
              "items": [
                "雾理莎",
                "957803651a"
              ],
              "status": "done",
              "evidence": "git 95780365"
            },
            {
              "v": "e99e3c86",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.56: 合并 master v1.8.53-v1.8.56 into RushieraChange",
              "items": [
                "Rushiera",
                "e99e3c8650"
              ],
              "status": "done",
              "evidence": "git e99e3c86"
            },
            {
              "v": "64198fa5",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.59: 单点版本自增（合并 master v1.8.53-v1.8.56 + full 部署上线）+ 修 ThreadGuard 测试线程池复用 flaky",
              "items": [
                "Rushiera",
                "64198fa5e5"
              ],
              "status": "done",
              "evidence": "git 64198fa5"
            },
            {
              "v": "44f5105d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.59: A219 sys 双路径 + systemautomessage 独立块；A220 猫级 userInjectIdleOnly 开关",
              "items": [
                "雾理莎",
                "44f5105d9b"
              ],
              "status": "done",
              "evidence": "git 44f5105d"
            },
            {
              "v": "b824646d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.59: 前端渲染层——折叠行工具名+用时 · 核心对话开关 · sys 独立块 · timeback 域底色 · 刻度参数化",
              "items": [
                "雾理莎",
                "b824646dc1"
              ],
              "status": "done",
              "evidence": "git b824646d"
            },
            {
              "v": "c3f14358",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.61: miss>100k 预警 + 工具计时单工具口径",
              "items": [
                "雾理莎",
                "c3f143585e"
              ],
              "status": "done",
              "evidence": "git c3f14358"
            },
            {
              "v": "0410d473",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.64: 新增工具面快照持久化 + 工具面注释整理",
              "items": [
                "雾理莎",
                "0410d47339"
              ],
              "status": "done",
              "evidence": "git 0410d473"
            },
            {
              "v": "f04c9b8d",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.64: A222 对话右侧带连续同 type 块合段 + A223 多猫界面卡片化",
              "items": [
                "雾理莎",
                "f04c9b8d94"
              ],
              "status": "done",
              "evidence": "git f04c9b8d"
            },
            {
              "v": "05c8f562",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.73: A224 每猫Type标签 + A225 会话态统一投影与猫卡实时",
              "items": [
                "雾理莎",
                "05c8f562fd"
              ],
              "status": "done",
              "evidence": "git 05c8f562"
            },
            {
              "v": "dc5c3bbb",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.73: codestat README 基线沿革——每次运行保留快照行",
              "items": [
                "雾理莎",
                "dc5c3bbb3c"
              ],
              "status": "done",
              "evidence": "git dc5c3bbb"
            },
            {
              "v": "24c5b715",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.75: 更新 tools.webcat 补 required:[] + 积木索引重建",
              "items": [
                "雾理莎",
                "24c5b715b3"
              ],
              "status": "done",
              "evidence": "git 24c5b715"
            },
            {
              "v": "183318e1",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.76: A227 归位——算法面首批 + FileSystemService 提纯 + TEXT 积木承接",
              "items": [
                "雾理莎",
                "183318e123"
              ],
              "status": "done",
              "evidence": "git 183318e1"
            },
            {
              "v": "f9a30749",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.78: A228 收口——文件展示与 PS 拦截下沉积木层",
              "items": [
                "雾理莎",
                "f9a3074977"
              ],
              "status": "done",
              "evidence": "git f9a30749"
            },
            {
              "v": "99284013",
              "date": "10-12",
              "group": "2026-10",
              "lane": "fix",
              "title": "修复: timeback 域白名单补 cs-test + 台账 JSON 头 FAIL 态",
              "items": [
                "雾理莎",
                "99284013c6"
              ],
              "status": "done",
              "evidence": "git 99284013"
            },
            {
              "v": "4d69539b",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.83: A229-A233 五件（timeback 拉起 · pending 持久化与投影 · 显示名 · think md）",
              "items": [
                "雾理莎",
                "4d69539b82"
              ],
              "status": "done",
              "evidence": "git 4d69539b"
            },
            {
              "v": "57f57655",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.85: 回滚/分支视图面修复（视图截断与播种通道 + fork 元数据与 Type 继承）",
              "items": [
                "雾理莎",
                "57f5765582"
              ],
              "status": "done",
              "evidence": "git 57f57655"
            },
            {
              "v": "7aaf8b3b",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.86: A234 每猫思考强度可配（cat.cfg reasoningEffort，空=跟随全局）",
              "items": [
                "雾理莎",
                "7aaf8b3bfe"
              ],
              "status": "done",
              "evidence": "git 7aaf8b3b"
            },
            {
              "v": "0fc77715",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "README: WebCat 取代 SearchCat · 补配置群清单与 GitHub 镜像",
              "items": [
                "雾理莎",
                "0fc77715d2"
              ],
              "status": "done",
              "evidence": "git 0fc77715"
            },
            {
              "v": "50c2fb8f",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "README: 2.1 补 GitHub 同步仓库地址",
              "items": [
                "雾理莎",
                "50c2fb8f76"
              ],
              "status": "done",
              "evidence": "git 50c2fb8f"
            },
            {
              "v": "90d5774d",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.91 A235/A236/A237 轮末总结(RoundSummary) + LLMSimpleRequest 服务(实例池x4) + QuickCat 拆除",
              "items": [
                "雾理莎",
                "90d5774df9"
              ],
              "status": "done",
              "evidence": "git 90d5774d"
            },
            {
              "v": "f1a0d178",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.91: 合并 master v1.8.61-v1.8.91 into RushieraChange（18 笔）",
              "items": [
                "Rushiera",
                "f1a0d1787e"
              ],
              "status": "done",
              "evidence": "git f1a0d178"
            },
            {
              "v": "71fae5c9",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.93: 单点版本自增（合并 master v1.8.61-v1.8.91 + full 部署上线）",
              "items": [
                "Rushiera",
                "71fae5c9a5"
              ],
              "status": "done",
              "evidence": "git 71fae5c9"
            },
            {
              "v": "7fb7ab7d",
              "date": "10-13",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.93: 表格面板兼并上游猫卡特性（卡片化不采纳，特性并入表格）· sync-html 上线",
              "items": [
                "Rushiera",
                "7fb7ab7d1e"
              ],
              "status": "done",
              "evidence": "git 7fb7ab7d"
            },
            {
              "v": "7d4a0f02",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.93: A240 cs-test 回执放开失败测试完整块",
              "items": [
                "雾理莎",
                "7d4a0f021d"
              ],
              "status": "done",
              "evidence": "git 7d4a0f02"
            },
            {
              "v": "4b3f0c48",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.94: WebCat 搜索退行兼容——降级链 + 节流 + 验证升级（ISystemNotifyService）",
              "items": [
                "Rushiera",
                "4b3f0c48ee"
              ],
              "status": "done",
              "evidence": "git 4b3f0c48"
            },
            {
              "v": "aeb8b5be",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.94: A248 视图层 JSONL 化 + mau-setup 描述补部署两段分工",
              "items": [
                "雾理莎",
                "aeb8b5be4d"
              ],
              "status": "done",
              "evidence": "git aeb8b5be"
            },
            {
              "v": "4951ad94",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.95: A248 尾轮 注入报告收敛为普通块（唯一行型 t=b）",
              "items": [
                "雾理莎",
                "4951ad9415"
              ],
              "status": "done",
              "evidence": "git 4951ad94"
            },
            {
              "v": "8c26d24b",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "A241/A243: 前端视觉（视口框提亮 + 桌宠右上）+ README 重置（CatHome4 主标题 + 头图）",
              "items": [
                "雾理莎",
                "8c26d24b8d"
              ],
              "status": "done",
              "evidence": "git 8c26d24b"
            },
            {
              "v": "8ed267ca",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "A249/A242: 用户手册落 docs/manual/ + pet 生产线迁 tools/pet（母本入库 · 重烘）",
              "items": [
                "雾理莎",
                "8ed267caa4"
              ],
              "status": "done",
              "evidence": "git 8ed267ca"
            },
            {
              "v": "46171bb2",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.97: A244 外观配置池——池 CRUD + 每猫 appearanceId 引用 + 轮末总结迁入池 + 池单元测试",
              "items": [
                "雾理莎",
                "46171bb225"
              ],
              "status": "done",
              "evidence": "git 46171bb2"
            },
            {
              "v": "8d45a8e0",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.99: A245 桌宠种类消费与验收修复",
              "items": [
                "雾理莎",
                "8d45a8e012"
              ],
              "status": "done",
              "evidence": "git 8d45a8e0"
            },
            {
              "v": "95978d41",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.101: A251 桌宠空值不显示（取消 greencat 回落）+ QQ 测试加锁快照",
              "items": [
                "雾理莎",
                "95978d41d6"
              ],
              "status": "done",
              "evidence": "git 95978d41"
            },
            {
              "v": "2aedf941",
              "date": "10-14",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.104: A239 音频播放能力 + A252 日志读取面收口",
              "items": [
                "雾理莎",
                "2aedf941b1"
              ],
              "status": "done",
              "evidence": "git 2aedf941"
            },
            {
              "v": "a135fd04",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.110: py 执行基建（IPyService/PyService）+ PyCat 工具组 + 修复链",
              "items": [
                "雾理莎",
                "a135fd041d"
              ],
              "status": "done",
              "evidence": "git a135fd04"
            },
            {
              "v": "aa2b4042",
              "date": "10-15",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: gitignore 排除 __pycache__（py 工具线入库清理）",
              "items": [
                "雾理莎",
                "aa2b4042e9"
              ],
              "status": "done",
              "evidence": "git aa2b4042"
            },
            {
              "v": "8a54e786",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "A246/A247 TTS 接线（1.8.115）：audio-speak 工具 + 总结自动出声 + PyService 强杀兜底/自愈/受控根校验 + 标准输入 BOM 修复",
              "items": [
                "雾理莎",
                "8a54e786ba"
              ],
              "status": "done",
              "evidence": "git 8a54e786"
            },
            {
              "v": "097fea0d",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.115: Kokoro 启动开关 + PS 拦截改段首判定",
              "items": [
                "雾理莎",
                "097fea0de0"
              ],
              "status": "done",
              "evidence": "git 097fea0d"
            },
            {
              "v": "8b5b2090",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.116: 音频路径根寻址 + py/audio 前端渲染件补全",
              "items": [
                "雾理莎",
                "8b5b209097"
              ],
              "status": "done",
              "evidence": "git 8b5b2090"
            },
            {
              "v": "48463d06",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.95: 思考强度快捷面——对话页 [思考 档位] 点击循环 + 多猫页思考强度列下拉（/api/v1/effort 新端点）",
              "items": [
                "Rushiera",
                "48463d0618"
              ],
              "status": "done",
              "evidence": "git 48463d06"
            },
            {
              "v": "76e0b017",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.96: 浏览器服务——有头实例保活 + 域内复用（有头/无头共存，默认无头）",
              "items": [
                "Rushiera",
                "76e0b01738"
              ],
              "status": "done",
              "evidence": "git 76e0b017"
            },
            {
              "v": "06a3088b",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.119: 根寻址统一服务收口（A257/A258）+ 空 catch 清零",
              "items": [
                "雾理莎",
                "06a3088bc9"
              ],
              "status": "done",
              "evidence": "git 06a3088b"
            },
            {
              "v": "31276577",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.124: A253 依赖检测全落 + 代码警告清零",
              "items": [
                "雾理莎",
                "31276577ea"
              ],
              "status": "done",
              "evidence": "git 31276577"
            },
            {
              "v": "0c40527c",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.134: A254资源页签与主循环性能治理",
              "items": [
                "雾理莎",
                "0c40527c58"
              ],
              "status": "done",
              "evidence": "git 0c40527c"
            },
            {
              "v": "9399c19b",
              "date": "10-16",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.134 A259 资源页折线曲线外观与切页签时序修正",
              "items": [
                "雾理莎",
                "9399c19bf0"
              ],
              "status": "done",
              "evidence": "git 9399c19b"
            },
            {
              "v": "c8fb64a9",
              "date": "10-17",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.98: 有头降自动化特征+视口覆盖跳过",
              "items": [
                "Rushiera",
                "c8fb64a9f3"
              ],
              "status": "done",
              "evidence": "git c8fb64a9"
            },
            {
              "v": "8f92a24f",
              "date": "10-17",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.137: 修复启动拒启死锁并迁出 Kokoro 知识",
              "items": [
                "雾理莎",
                "8f92a24ffd"
              ],
              "status": "done",
              "evidence": "git 8f92a24f"
            },
            {
              "v": "252c19db",
              "date": "10-17",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.138: 新增 web-ds-search 结构化检索工具",
              "items": [
                "雾理莎",
                "252c19db41"
              ],
              "status": "done",
              "evidence": "git 252c19db"
            },
            {
              "v": "3c6e704c",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.138: 合并 master v1.8.93-v1.8.138（20 笔）into RushieraChange",
              "items": [
                "Rushiera",
                "3c6e704ca9"
              ],
              "status": "done",
              "evidence": "git 3c6e704c"
            },
            {
              "v": "19aceae4",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.140: 单点版本自增（合并 master 后部署上线）",
              "items": [
                "Rushiera",
                "19aceae4e7"
              ],
              "status": "done",
              "evidence": "git 19aceae4"
            },
            {
              "v": "aff1a2a7",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.141: 多猫列表补 enabledRoots 字段（目录白名单显示与实际不符修复）",
              "items": [
                "Rushiera",
                "aff1a2a7f0"
              ],
              "status": "done",
              "evidence": "git aff1a2a7"
            },
            {
              "v": "4abfa50f",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.141: 单点版本自增",
              "items": [
                "Rushiera",
                "4abfa50f16"
              ],
              "status": "done",
              "evidence": "git 4abfa50f"
            },
            {
              "v": "135e6a14",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.142: 单点版本自增（部署上线）",
              "items": [
                "Rushiera",
                "135e6a1496"
              ],
              "status": "done",
              "evidence": "git 135e6a14"
            },
            {
              "v": "24f11b6b",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.141 A260 startup resilience phase 1 - degradation registry + five outlets (log/snapshot/panel/dialog/report)",
              "items": [
                "雾理莎",
                "24f11b6be6"
              ],
              "status": "done",
              "evidence": "git 24f11b6b"
            },
            {
              "v": "083f7ce9",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.146: A260 启动韧性二期收口——八段执行器与目视验收两修",
              "items": [
                "雾理莎",
                "083f7ce924"
              ],
              "status": "done",
              "evidence": "git 083f7ce9"
            },
            {
              "v": "b9eee12d",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: text-replace regex 删除回执越界（T15）",
              "items": [
                "雾理莎",
                "b9eee12d1d"
              ],
              "status": "done",
              "evidence": "git b9eee12d"
            },
            {
              "v": "a251f842",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "CH4 1.8.148: cs-* 写侧恒落盘 + 编译诊断随回执 + 内容对账；全组文案对齐",
              "items": [
                "雾理莎",
                "a251f84241"
              ],
              "status": "done",
              "evidence": "git a251f842"
            },
            {
              "v": "42502c23",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.148: cmd.js 命令集扩充——外部工具链/pwsh/通用兜底",
              "items": [
                "雾理莎",
                "42502c23b7"
              ],
              "status": "done",
              "evidence": "git 42502c23"
            },
            {
              "v": "c0b4728a",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.143: timeback 开域判据三闸门化",
              "items": [
                "Rushiera",
                "c0b4728aa1"
              ],
              "status": "done",
              "evidence": "git c0b4728a"
            },
            {
              "v": "06b560d5",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "1.8.154: 轮末总结三段播报（提示音+播报名+正文）· 音色配置 audio.voice + 双下拉 · 数字与多音字归一 · 启动路径外观生效修复",
              "items": [
                "雾理莎",
                "06b560d5c8"
              ],
              "status": "done",
              "evidence": "git 06b560d5"
            },
            {
              "v": "d288b008",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.158: A261 启用根剔除出声 + A262 重启闸门上限与卡点发声",
              "items": [
                "雾理莎",
                "d288b0088e"
              ],
              "status": "done",
              "evidence": "git d288b008"
            },
            {
              "v": "7e26a93e",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.161: A264提示音缺失修复与素材替换 + A265总结音频单文件与块内点播 + A263工具卡流式用时",
              "items": [
                "雾理莎",
                "7e26a93ee8"
              ],
              "status": "done",
              "evidence": "git 7e26a93e"
            },
            {
              "v": "40a7925c",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.165: 修复 SetUp 代际自检判据（mtime 改内容快照 + 差异点名）",
              "items": [
                "雾理莎",
                "40a7925c48"
              ],
              "status": "done",
              "evidence": "git 40a7925c"
            },
            {
              "v": "942d9a37",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.169: A268 DbCat工具组五件接入 + A267 条目库服务",
              "items": [
                "雾理莎",
                "942d9a378f"
              ],
              "status": "done",
              "evidence": "git 942d9a37"
            },
            {
              "v": "4b8cbd37",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.172: A269 数据库四端点与页签 + A271 真链路验收 + A273 固定根 data/db 路径锁定",
              "items": [
                "雾理莎",
                "4b8cbd3784"
              ],
              "status": "done",
              "evidence": "git 4b8cbd37"
            },
            {
              "v": "947efdc4",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.173: A274 db 工具渲染 + A275 库权限勾选面",
              "items": [
                "雾理莎",
                "947efdc4be"
              ],
              "status": "done",
              "evidence": "git 947efdc4"
            },
            {
              "v": "277cf97a",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "1.8.177 A272 clear --tool-check residual + incr preflight dual gates (T17)",
              "items": [
                "雾理莎",
                "277cf97abd"
              ],
              "status": "done",
              "evidence": "git 277cf97a"
            },
            {
              "v": "d640ea07",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.178: A277 dbLibs 库级授权拦截",
              "items": [
                "雾理莎",
                "d640ea0780"
              ],
              "status": "done",
              "evidence": "git d640ea07"
            },
            {
              "v": "04c37081",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.179: info 补 db 段（授权库自证）+ CS0649 清理",
              "items": [
                "雾理莎",
                "04c37081ce"
              ],
              "status": "done",
              "evidence": "git 04c37081"
            },
            {
              "v": "89e2da2d",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.181: DbAdmin admin group + db-query paging + db contract",
              "items": [
                "雾理莎",
                "89e2da2de1"
              ],
              "status": "done",
              "evidence": "git 89e2da2d"
            },
            {
              "v": "5f95f4a1",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.182: db 健壮性收口（drop confirm 精确比对 + 回滚）+ dbAdmin 三件工具卡渲染",
              "items": [
                "雾理莎",
                "5f95f4a1cb"
              ],
              "status": "done",
              "evidence": "git 5f95f4a1"
            },
            {
              "v": "015f241d",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "1.8.185 external-input dispatch rebuild: unified route table, six pumps into one, CommandBus host wiring cleanup",
              "items": [
                "雾理莎",
                "015f241dd0"
              ],
              "status": "done",
              "evidence": "git 015f241d"
            },
            {
              "v": "9cf613db",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "A284 装配与执行分离：AdminRoutes 抽出 31 端点装配表（1.8.189）",
              "items": [
                "雾理莎",
                "9cf613db77"
              ],
              "status": "done",
              "evidence": "git 9cf613db"
            },
            {
              "v": "d7c4735d",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.190: A285 猫管理域独立（CatHostService 抽出）",
              "items": [
                "雾理莎",
                "d7c4735d57"
              ],
              "status": "done",
              "evidence": "git d7c4735d"
            },
            {
              "v": "1d00553e",
              "date": "10-21",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.144 mewbius endpoint client UA (site-scoped)",
              "items": [
                "Rushiera",
                "1d00553e13"
              ],
              "status": "done",
              "evidence": "git 1d00553e"
            },
            {
              "v": "4143d19b",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.191: dbAdmin 三件执行序登记",
              "items": [
                "雾理莎",
                "4143d19bf8"
              ],
              "status": "done",
              "evidence": "git 4143d19b"
            },
            {
              "v": "7718cbe6",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.191: A287 一次性LLM空回执死锁修复（积木+语料）",
              "items": [
                "雾理莎",
                "7718cbe633"
              ],
              "status": "done",
              "evidence": "git 7718cbe6"
            },
            {
              "v": "f40c224a",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.191: A287 回退 T_Stall 兜底（传感器滞后一帧致误判）",
              "items": [
                "雾理莎",
                "f40c224a0f"
              ],
              "status": "done",
              "evidence": "git f40c224a"
            },
            {
              "v": "8fbf8fe0",
              "date": "10-23",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.195: LLM 输出上限 131072 显式传入 + finish_reason 截断可见 + NU1903 清零",
              "items": [
                "雾理莎",
                "8fbf8fe0a3"
              ],
              "status": "done",
              "evidence": "git 8fbf8fe0"
            },
            {
              "v": "152c0ad8",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.145-146: workspace 分层——回收站/下载区下沉 tools/；bricks 索引重算",
              "items": [
                "Rushiera",
                "152c0ad88a"
              ],
              "status": "done",
              "evidence": "git 152c0ad8"
            },
            {
              "v": "df540273",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.147: image URL local-fetch inline for loopback/private hosts (ImagePayload) + tool descriptions",
              "items": [
                "Rushiera",
                "df54027315"
              ],
              "status": "done",
              "evidence": "git df540273"
            },
            {
              "v": "05afccc6",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.149: 前端测试服务 cwd 中立化（不锁运行区）+ file-version 版本读面双缺陷修复",
              "items": [
                "Rushiera",
                "05afccc65c"
              ],
              "status": "done",
              "evidence": "git 05afccc6"
            },
            {
              "v": "4a175acc",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.197: A290 Node 服务内核抽离 + A291 ts-* 五件工具",
              "items": [
                "雾理莎",
                "4a175acc7d"
              ],
              "status": "done",
              "evidence": "git 4a175acc"
            },
            {
              "v": "80dc4d41",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.8.198: ts-* 前端渲染 + 服务重拉与诊断缓存修复",
              "items": [
                "雾理莎",
                "80dc4d41e3"
              ],
              "status": "done",
              "evidence": "git 80dc4d41"
            },
            {
              "v": "782bf246",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "A292 ts 压测：check 20x 加速 + 迟到回执 id 校验 + find-ref 装饰器位置 + 压测载具 (1.8.199)",
              "items": [
                "雾理莎",
                "782bf246e1"
              ],
              "status": "done",
              "evidence": "git 782bf246"
            },
            {
              "v": "7a06bd0e",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.201: A293 识图域 · A295 浏览器超时 · text-replace 回执自证",
              "items": [
                "雾理莎",
                "7a06bd0e01"
              ],
              "status": "done",
              "evidence": "git 7a06bd0e"
            },
            {
              "v": "6019d4d2",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.203: A296 cat.stop 真停 + A297 重启闸门修复",
              "items": [
                "雾理莎",
                "6019d4d27f"
              ],
              "status": "done",
              "evidence": "git 6019d4d2"
            },
            {
              "v": "b0245755",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "前端: A298 面板猫卡真停适配（运行态底图 + 无会话参数收起）",
              "items": [
                "雾理莎",
                "b0245755fa"
              ],
              "status": "done",
              "evidence": "git b0245755"
            },
            {
              "v": "79562465",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "A299 QQBot 整体移除：整仓归档 _archive/CatHome4.QQ/，接线/管理面/内核/前端 18 处清零（1.8.204）",
              "items": [
                "雾理莎",
                "795624657d"
              ],
              "status": "done",
              "evidence": "git 79562465"
            },
            {
              "v": "db5a5a96",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.150 注入面瘦身——段0c 退役(身份归 USER.md) + 文案去「注入文件」字样",
              "items": [
                "Rushiera",
                "db5a5a96ab"
              ],
              "status": "done",
              "evidence": "git db5a5a96"
            },
            {
              "v": "5b034cb7",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "合并 master v1.8.141-v1.8.204（31 笔）+ A299 QQBot 移除 + 本支独有特性在新架构上重做",
              "items": [
                "Rushiera",
                "5b034cb78e"
              ],
              "status": "done",
              "evidence": "git 5b034cb7"
            },
            {
              "v": "f8be4181",
              "date": "11-02",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.209: A300 配队数据面 + A301 每组一端口群聊宿主 + 停机猫会话分层",
              "items": [
                "雾理莎",
                "f8be418152"
              ],
              "status": "done",
              "evidence": "git f8be4181"
            },
            {
              "v": "cfb18908",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "CH4 1.8.210：A302 群聊页（消息流+轮询）；A303 派单主链（消息 to / 管理员名单 / 轮末回执 / GroupCat 四工具）",
              "items": [
                "雾理莎",
                "cfb18908e5"
              ],
              "status": "done",
              "evidence": "git cfb18908"
            },
            {
              "v": "8dfdd413",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.211: GroupCat 工具名分隔符修正（点号改连字符）+ 版本自增",
              "items": [
                "雾理莎",
                "8dfdd413ba"
              ],
              "status": "done",
              "evidence": "git 8dfdd413"
            },
            {
              "v": "5c4460a3",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.213: 配队三列勾选与订阅自动转发 + Group 四工具渲染 + 组投影漏拷修复",
              "items": [
                "雾理莎",
                "5c4460a37d"
              ],
              "status": "done",
              "evidence": "git 5c4460a3"
            },
            {
              "v": "afc9ec85",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "A308/A309 组真实启停 + 会话重建入口（v1.8.216）",
              "items": [
                "雾理莎",
                "afc9ec8536"
              ],
              "status": "done",
              "evidence": "git afc9ec85"
            },
            {
              "v": "edc98af8",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.217 A310 cat-config toolNames double-form + A311 group chat page rewrite",
              "items": [
                "雾理莎",
                "edc98af817"
              ],
              "status": "done",
              "evidence": "git edc98af8"
            },
            {
              "v": "2016da64",
              "date": "11-03",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.218: A312 GroupCat quintet aligned to A214 head+summary+body",
              "items": [
                "雾理莎",
                "2016da6453"
              ],
              "status": "done",
              "evidence": "git 2016da64"
            },
            {
              "v": "558d76ae",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.211 CH4 前端三处改造：多猫页窄屏一猫两行 / 思考三档循环 / 端点标签 API:端点名[模型] + 模型下拉",
              "items": [
                "Rushiera",
                "558d76ae5f"
              ],
              "status": "done",
              "evidence": "git 558d76ae"
            },
            {
              "v": "78af11a3",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.222: Group 清空与订阅收敛 + A313 消息操作 + ui.user_name 署名",
              "items": [
                "雾理莎",
                "78af11a312"
              ],
              "status": "done",
              "evidence": "git 78af11a3"
            },
            {
              "v": "c7706326",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.227: group delivery addressing + receipt notify + sleep same-round wait",
              "items": [
                "雾理莎",
                "c77063265e"
              ],
              "status": "done",
              "evidence": "git c7706326"
            },
            {
              "v": "aededec9",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.212: 思考强度标签改纯三档轮换 + 模型下拉沿用上游顺序",
              "items": [
                "Rushiera",
                "aededec9af"
              ],
              "status": "done",
              "evidence": "git aededec9"
            },
            {
              "v": "2ebd5ba8",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.229: tool rename group-post/group-delegate + receipt retry queue + A316/A317 frame alignment",
              "items": [
                "雾理莎",
                "2ebd5ba8e3"
              ],
              "status": "done",
              "evidence": "git 2ebd5ba8"
            },
            {
              "v": "ea83ae7e",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.230: group-newsession one-way rule - admin cannot rebuild another admin",
              "items": [
                "雾理莎",
                "ea83ae7e7e"
              ],
              "status": "done",
              "evidence": "git ea83ae7e"
            },
            {
              "v": "6f80dc71",
              "date": "11-06",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.234 图片包裹优先于代码围栏（前后端同判据）+ 门禁遗留清偿（xUnit2009 / flaky 线程用例）",
              "items": [
                "雾理莎",
                "6f80dc71b4"
              ],
              "status": "done",
              "evidence": "git 6f80dc71"
            },
            {
              "v": "c910ae4a",
              "date": "11-06",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.236 工具卡两段计时（排队 / 执行分列）",
              "items": [
                "雾理莎",
                "c910ae4a41"
              ],
              "status": "done",
              "evidence": "git c910ae4a"
            },
            {
              "v": "0482988f",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.218 注入报告项目挂载：前文明细两栏收纳 + projectMount 跟猫走 + 每猫端口 inject 端点",
              "items": [
                "Rushiera",
                "0482988fb3"
              ],
              "status": "done",
              "evidence": "git 0482988f"
            },
            {
              "v": "d7ed0df4",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.222 部署锁三源修复：前端测试服务 cwd 中立 / 源码区四级定位 / 残留实例清扫 / cwd 持有者诊断",
              "items": [
                "Rushiera",
                "d7ed0df485"
              ],
              "status": "done",
              "evidence": "git d7ed0df4"
            },
            {
              "v": "8009e528",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.223: timeback 回卷保留域内人工输入",
              "items": [
                "Rushiera",
                "8009e528a1"
              ],
              "status": "done",
              "evidence": "git 8009e528"
            },
            {
              "v": "b92cfdd5",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.224: 修复项目挂载对主干猫失效",
              "items": [
                "Rushiera",
                "b92cfdd57d"
              ],
              "status": "done",
              "evidence": "git b92cfdd5"
            },
            {
              "v": "6ce436ea",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.225 配置页受控根区新增应用给猫与重启宿主",
              "items": [
                "Rushiera",
                "6ce436ea4f"
              ],
              "status": "done",
              "evidence": "git 6ce436ea"
            },
            {
              "v": "a8e5c319",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.227: 新增项目摘要与工具组一句式描述",
              "items": [
                "Rushiera",
                "a8e5c31984"
              ],
              "status": "done",
              "evidence": "git a8e5c319"
            },
            {
              "v": "a0d5e6c0",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.227 模型下拉闭包修复——点任一项只投末项（apirole.js + 单测补盲区）",
              "items": [
                "Rushiera",
                "a0d5e6c0c9"
              ],
              "status": "done",
              "evidence": "git a0d5e6c0"
            },
            {
              "v": "52596efc",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.229 数据根可配置 CH4_DATA_ROOT 回读注册表 + sessions_ctx keep=0 不删",
              "items": [
                "Rushiera",
                "52596efc9d"
              ],
              "status": "done",
              "evidence": "git 52596efc"
            },
            {
              "v": "dab49de6",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "CH4 1.8.231: 回收站落点定死为 workspace 根 tools/CatTemp/fs_recycle（RecycleRoot.Resolve 单出口）",
              "items": [
                "Rushiera",
                "dab49de6a6"
              ],
              "status": "done",
              "evidence": "git dab49de6"
            },
            {
              "v": "cc1beae8",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.234 启动链弹性化 A306 与系统根自动就位 A305",
              "items": [
                "Rushiera",
                "cc1beae87b"
              ],
              "status": "done",
              "evidence": "git cc1beae8"
            },
            {
              "v": "78c8ba16",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.237 合并 origin/master：Group 配队（A300-A318）+ 工具卡两段计时 + 图片包裹优先 + 前端页序保留本支（配置居首）",
              "items": [
                "Rushiera",
                "78c8ba1653"
              ],
              "status": "done",
              "evidence": "git 78c8ba16"
            },
            {
              "v": "64b8d11f",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.237 前端挂载预填与挂载按钮项目名（含 10 例单测）",
              "items": [
                "Rushiera",
                "64b8d11ffd"
              ],
              "status": "done",
              "evidence": "git 64b8d11f"
            },
            {
              "v": "31ca1492",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.237: 精简态滚动带保持全量外观",
              "items": [
                "Rushiera",
                "31ca149293"
              ],
              "status": "done",
              "evidence": "git 31ca1492"
            },
            {
              "v": "0bd4c5e6",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.237 精简态滚动带坐标统一+增量行推算（collect/缓存/补全）",
              "items": [
                "Rushiera",
                "0bd4c5e6d4"
              ],
              "status": "done",
              "evidence": "git 0bd4c5e6"
            },
            {
              "v": "e0dbdb7b",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.237 滚动带几何改临时解过滤测量 + 触发面补 characterData（流式吐字实时刷新）",
              "items": [
                "Rushiera",
                "e0dbdb7b44"
              ],
              "status": "done",
              "evidence": "git e0dbdb7b"
            },
            {
              "v": "c67ac879",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.237: 新增浏览态留存——精简开关与输入草稿跨刷新恢复",
              "items": [
                "Rushiera",
                "c67ac879f8"
              ],
              "status": "done",
              "evidence": "git c67ac879"
            },
            {
              "v": "91fe3d17",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.237: 挂载预填删除标记——前文条数分档 + 草稿恢复串认领",
              "items": [
                "Rushiera",
                "91fe3d174e"
              ],
              "status": "done",
              "evidence": "git 91fe3d17"
            },
            {
              "v": "923cd3a8",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.237 能力表补 GroupCat 组——群组协作 5 件 + sync-html 上线",
              "items": [
                "Rushiera",
                "923cd3a83a"
              ],
              "status": "done",
              "evidence": "git 923cd3a8"
            },
            {
              "v": "f0060660",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "mount: ensure skeletons on project mount; L3 index in injectList",
              "items": [
                "Rushiera",
                "f006066017"
              ],
              "status": "done",
              "evidence": "git f0060660"
            },
            {
              "v": "b588a727",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.239 前端：挂载空闲自动取消（离开页面/失焦 60s，仅未开始对话的猫）+ 前端版本自愈 + 冻结补判",
              "items": [
                "Rushiera",
                "b588a727ad"
              ],
              "status": "done",
              "evidence": "git b588a727"
            },
            {
              "v": "2fa4e627",
              "date": "11-08",
              "group": "2026-11",
              "lane": "other",
              "title": "chat/main.js：嵌入态 ESC 出口（并发协议面板弹层 ESC 关闭的猫页侧）",
              "items": [
                "Rushiera",
                "2fa4e627e6"
              ],
              "status": "done",
              "evidence": "git 2fa4e627"
            },
            {
              "v": "8266b6fc",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.242 项目挂载专家模式（L3 全挂/仅 readme）+ 挂载预览端点；并发协议前文装配改读宿主",
              "items": [
                "Rushiera",
                "8266b6fc89"
              ],
              "status": "done",
              "evidence": "git 8266b6fc"
            },
            {
              "v": "17ec2ad6",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "1.8.243 挂载离场自动取消（180s 在场不摘，回来即不取消）+ 首条消息上工X自动挂载",
              "items": [
                "Rushiera",
                "17ec2ad640"
              ],
              "status": "done",
              "evidence": "git 17ec2ad6"
            },
            {
              "v": "ffe543cf",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v1.8.244: localgit 升系统根（固定根表 + 探测创建 + 测试同步）",
              "items": [
                "Rushiera",
                "ffe543cf5a"
              ],
              "status": "done",
              "evidence": "git ffe543cf"
            }
          ]
        }
      ]
    }
  ]
};
