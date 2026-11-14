window.ARCH = {
  "meta": {
    "project": "并发协议",
    "title": "并发协议 提交时间线",
    "sub": "61 次提交 · 2026-11 → 2026-11",
    "ver": "cc4adce",
    "updated": "2026-11-14",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\并发协议",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\并发协议 (branch master)"
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
              "v": "5902301",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "并发协议: 兜底仓首提交（panel 源码 / witness 工具 / 任务卡 / 模板）",
              "items": [
                "Rushiera",
                "5902301315"
              ],
              "status": "done",
              "evidence": "git 5902301"
            },
            {
              "v": "32c2866",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "并发协议 v0.171: 见证者读 localGit 兜底仓（commits 端点三级解析 + 时间线脚本改以 git 目录判仓）",
              "items": [
                "Rushiera",
                "32c28661e9"
              ],
              "status": "done",
              "evidence": "git 32c2866"
            },
            {
              "v": "2ec538b",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.172: Commits 来源五态标注 + localgit 根按 id 解析",
              "items": [
                "Rushiera",
                "2ec538b09e"
              ],
              "status": "done",
              "evidence": "git 2ec538b"
            },
            {
              "v": "5131e32",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.173: 时间线生成器（none 分层文案 + 生成时刻本机时区）；Scheduler 挂载不强制专家模式",
              "items": [
                "Rushiera",
                "5131e328f2"
              ],
              "status": "done",
              "evidence": "git 5131e32"
            },
            {
              "v": "ba901c2",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.176: 猫对话页弹层关闭清项目挂载",
              "items": [
                "Rushiera",
                "ba901c28d0"
              ],
              "status": "done",
              "evidence": "git ba901c2"
            },
            {
              "v": "501ce28",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.175: 空闲删猫机制（idleKillCats）与 nav_rescue 常驻身份撤销",
              "items": [
                "Rushiera",
                "501ce2804c"
              ],
              "status": "done",
              "evidence": "git 501ce28"
            },
            {
              "v": "4e8f54f",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.178: 常驻实体条新增异常档（有前文没在忙也没回复）",
              "items": [
                "Rushiera",
                "4e8f54f3cb"
              ],
              "status": "done",
              "evidence": "git 4e8f54f"
            },
            {
              "v": "72ceb34",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.182: L3 十槽 A-J + 整理模板按新设计改写 + check-l3 对账脚本",
              "items": [
                "Rushiera",
                "72ceb348d5"
              ],
              "status": "done",
              "evidence": "git 72ceb34"
            },
            {
              "v": "e60713b",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.184: 思考挡位投递修复（写面顺序 + 寻址）",
              "items": [
                "Rushiera",
                "e60713b1fe"
              ],
              "status": "done",
              "evidence": "git e60713b"
            },
            {
              "v": "ed0fd0e",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.184b: 整理轮收口与失败补进事件流水",
              "items": [
                "Rushiera",
                "ed0fd0e070"
              ],
              "status": "done",
              "evidence": "git ed0fd0e"
            },
            {
              "v": "0e17c37",
              "date": "11-09",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.187 unmount keeps project mount while project busy",
              "items": [
                "Rushiera",
                "0e17c37c06"
              ],
              "status": "done",
              "evidence": "git 0e17c37"
            },
            {
              "v": "984fbbc",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.186: 实体条/项目卡右键菜单 + 前文整理转发",
              "items": [
                "Rushiera",
                "984fbbc8f6"
              ],
              "status": "done",
              "evidence": "git 984fbbc"
            },
            {
              "v": "4e2369d",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.189: 四区项目名右键 + QQBotB 前文整理失败关线",
              "items": [
                "Rushiera",
                "4e2369d2a4"
              ],
              "status": "done",
              "evidence": "git 4e2369d"
            },
            {
              "v": "bf3ff5e",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.190: VerifyStore lock + BOSS L2 routing + audit cleanup",
              "items": [
                "Rushiera",
                "bf3ff5e07a"
              ],
              "status": "done",
              "evidence": "git bf3ff5e"
            },
            {
              "v": "10ec2cc",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.192: verify card decision-parsing compat + shared blocks in dispatch prompt (parallel 0.193-0.196 WIP included)",
              "items": [
                "Rushiera",
                "10ec2ccaf4"
              ],
              "status": "done",
              "evidence": "git 10ec2cc"
            },
            {
              "v": "179adfa",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.194: 前端改源即生效 + 启动/部署不新开窗口",
              "items": [
                "Rushiera",
                "179adfa7ae"
              ],
              "status": "done",
              "evidence": "git 179adfa"
            },
            {
              "v": "4f80006",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.197: 委托单 v2 四期落地（B1 授权单+B2 相位+C1 目标挂载+C2 AC 核销）",
              "items": [
                "Rushiera",
                "4f800062cf"
              ],
              "status": "done",
              "evidence": "git 4f80006"
            },
            {
              "v": "f009ea0",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.199: B3 引擎切 v2 + 线级 work unit + 全事件写面",
              "items": [
                "Rushiera",
                "f009ea0144"
              ],
              "status": "done",
              "evidence": "git f009ea0"
            },
            {
              "v": "acbf269",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.200: 委托整理（授权时）+ 兜底仓解析",
              "items": [
                "Rushiera",
                "acbf2691b5"
              ],
              "status": "done",
              "evidence": "git acbf269"
            },
            {
              "v": "20e6441",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.205: 排序条热度占比与24h推进窗口",
              "items": [
                "Rushiera",
                "20e6441ab6"
              ],
              "status": "done",
              "evidence": "git 20e6441"
            },
            {
              "v": "455987b",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.206: 收工语义与学历史（档案回填；含上轮 12 处代码）",
              "items": [
                "Rushiera",
                "455987b0e9"
              ],
              "status": "done",
              "evidence": "git 455987b"
            },
            {
              "v": "5fc110b",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.207: 线级继承 + 真派活 rounds 4-5 + resume 按钮 + 启用根全集",
              "items": [
                "Rushiera",
                "5fc110b344"
              ],
              "status": "done",
              "evidence": "git 5fc110b"
            },
            {
              "v": "cf00207",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "0.208: patch 按轮 base（开轮快照 + delta）+ resume 轮次用尽档 + Hime r6",
              "items": [
                "Rushiera",
                "cf002071d8"
              ],
              "status": "done",
              "evidence": "git cf00207"
            },
            {
              "v": "3707dfa",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "0.209: GATE1（A 裁剪版）+ AC 机读（A 平铺）+ 见证者第九能力「委托流转」",
              "items": [
                "Rushiera",
                "3707dfabcd"
              ],
              "status": "done",
              "evidence": "git 3707dfa"
            },
            {
              "v": "bf4766d",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.210: GATE2/GATE-RISK + 回滚执行面 + AC 覆盖率 + 收线自动删猫",
              "items": [
                "Rushiera",
                "bf4766d701"
              ],
              "status": "done",
              "evidence": "git bf4766d"
            },
            {
              "v": "cd9d9e6",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.212: 收线 AC 机检顺序修复 + r7/r8 真轮次（自动删猫双验 / 零增量剪枝首验）",
              "items": [
                "Rushiera",
                "cd9d9e650c"
              ],
              "status": "done",
              "evidence": "git cd9d9e6"
            },
            {
              "v": "c0ab501",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.213: A-1 r9 真机增量 + produced/AC 判据缺陷（state）",
              "items": [
                "Rushiera",
                "c0ab501448"
              ],
              "status": "done",
              "evidence": "git c0ab501"
            },
            {
              "v": "ccbf4c4",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.214: produced 修法 B（写面文件系统面）+ AC 修法 A；r10-r12 state",
              "items": [
                "Rushiera",
                "ccbf4c4424"
              ],
              "status": "done",
              "evidence": "git ccbf4c4"
            },
            {
              "v": "ff6d676",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.215: 执行猫手段面——toolNames 补 proc/http/py，提示词加手段优先序与工具回馈",
              "items": [
                "Rushiera",
                "ff6d676147"
              ],
              "status": "done",
              "evidence": "git ff6d676"
            },
            {
              "v": "9b548ad",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.217: 实体条右键交接收工（产物判据）",
              "items": [
                "Rushiera",
                "9b548ade63"
              ],
              "status": "done",
              "evidence": "git 9b548ad"
            },
            {
              "v": "f02d76e",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.225: 主干交接收工改填进对话页（不代发）",
              "items": [
                "Rushiera",
                "f02d76e17a"
              ],
              "status": "done",
              "evidence": "git f02d76e"
            },
            {
              "v": "e219581",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.234: 架构图 check 兼容层 + 骨架/维护链脚本",
              "items": [
                "Rushiera",
                "e219581d55"
              ],
              "status": "done",
              "evidence": "git e219581"
            },
            {
              "v": "ab5e8f6",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.237: 见证者外围兼容层（单一白名单 / 归档读面 / 根覆盖 / title 最长列）",
              "items": [
                "Rushiera",
                "ab5e8f6ef1"
              ],
              "status": "done",
              "evidence": "git ab5e8f6"
            },
            {
              "v": "9a4b651",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.238: check.mjs 备份落点与独立立项回落 + maintain --site 站点自更新",
              "items": [
                "Rushiera",
                "9a4b651377"
              ],
              "status": "done",
              "evidence": "git 9a4b651"
            },
            {
              "v": "e3743a3",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.239: 兜底补记（0.229 面板架构图弹层视口高改动 + state 两件；本会话无 panel/witness 代码改动）",
              "items": [
                "Rushiera",
                "e3743a3005"
              ],
              "status": "done",
              "evidence": "git e3743a3"
            },
            {
              "v": "ab9abb2",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.240 check.mjs parseTodoItems 编号第五形态（S1.6 / P5.1 / M1.5）",
              "items": [
                "Rushiera",
                "ab9abb26e9"
              ],
              "status": "done",
              "evidence": "git ab9abb2"
            },
            {
              "v": "042dbfa",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.247: 交接报告归档定型（五族判据+copy+自动收）",
              "items": [
                "Rushiera",
                "042dbfa1c9"
              ],
              "status": "done",
              "evidence": "git 042dbfa"
            },
            {
              "v": "b281b0f",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.250: 实体条 Akasha 常驻最右硬档 + 常驻池扩至 R喵16",
              "items": [
                "Rushiera",
                "b281b0fb54"
              ],
              "status": "done",
              "evidence": "git b281b0f"
            },
            {
              "v": "f7683f5",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.249: 整理卡解析兼容层（无标题编号列表）+ DropRoute 同步",
              "items": [
                "Rushiera",
                "f7683f5927"
              ],
              "status": "done",
              "evidence": "git f7683f5"
            },
            {
              "v": "87e1ff8",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.251: 整理卡决策解析三修 + 投递行实体过滤",
              "items": [
                "Rushiera",
                "87e1ff8ca5"
              ],
              "status": "done",
              "evidence": "git 87e1ff8"
            },
            {
              "v": "abb3763",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.252: 生命周期细化 + 模块生命周期单开",
              "items": [
                "Rushiera",
                "abb3763a20"
              ],
              "status": "done",
              "evidence": "git abb3763"
            },
            {
              "v": "636492f",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.253: 模块升第十能力 + 回落轴 + 四项目模块别名",
              "items": [
                "Rushiera",
                "636492fa8c"
              ],
              "status": "done",
              "evidence": "git 636492f"
            },
            {
              "v": "e0d1cb3",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.254: 未归类二批 QQBotB/KKManager + 口径评估",
              "items": [
                "Rushiera",
                "e0d1cb31c4"
              ],
              "status": "done",
              "evidence": "git e0d1cb3"
            },
            {
              "v": "f3581d9",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.257b: 未归类四批 Mau 100%->69.2%",
              "items": [
                "Rushiera",
                "f3581d9bbe"
              ],
              "status": "done",
              "evidence": "git f3581d9"
            },
            {
              "v": "a0e0cb2",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.259-L3-rebuild-and-prompt-final",
              "items": [
                "Rushiera",
                "a0e0cb29ac"
              ],
              "status": "done",
              "evidence": "git a0e0cb2"
            },
            {
              "v": "7578f79",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.258d: ApiSiteAnalyzer 加裸词直连否决并撤词（aliases 净改动 0）",
              "items": [
                "Rushiera",
                "7578f7990e"
              ],
              "status": "done",
              "evidence": "git 7578f79"
            },
            {
              "v": "9f18aa9",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.261: 排序器排除 .modules 旁路，项目卡不再翻倍",
              "items": [
                "Rushiera",
                "9f18aa918a"
              ],
              "status": "done",
              "evidence": "git 9f18aa9"
            },
            {
              "v": "0a3d34e",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.262 仓库卫生：state/entrust 与 prompt-baseline 移出版本控制",
              "items": [
                "Rushiera",
                "0a3d34e92c"
              ],
              "status": "done",
              "evidence": "git 0a3d34e"
            },
            {
              "v": "f9dc8d7",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.262 面板人闸 + 引擎判据六项（tidy 时序 / 整理契约 / recover / README 速查 / budget 端点 / 授权区）",
              "items": [
                "Rushiera",
                "f9dc8d77b9"
              ],
              "status": "done",
              "evidence": "git f9dc8d7"
            },
            {
              "v": "1b38551",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.263 收线即核销 + 人判 AC + tick retry + brief 一屏（P0-A/B/C · U-2 剩余 · U-3 部分 · U-5）",
              "items": [
                "Rushiera",
                "1b38551b5f"
              ],
              "status": "done",
              "evidence": "git 1b38551"
            },
            {
              "v": "215fca9",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.264: 回执状态词前缀 + 台账 tail",
              "items": [
                "Rushiera",
                "215fca93b4"
              ],
              "status": "done",
              "evidence": "git 215fca9"
            },
            {
              "v": "03c2e6b",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.265 归档三分：报告入子目录 + 版本3 死指针清理",
              "items": [
                "Rushiera",
                "03c2e6b8bb"
              ],
              "status": "done",
              "evidence": "git 03c2e6b"
            },
            {
              "v": "972bb22",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.266: 编号系统 B+b 显示层两处（pid-round）",
              "items": [
                "Rushiera",
                "972bb226c1"
              ],
              "status": "done",
              "evidence": "git 972bb22"
            },
            {
              "v": "9ec92e7",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.269: taskSource=goals + 授权单模板 + 撤销结案",
              "items": [
                "Rushiera",
                "9ec92e758b"
              ],
              "status": "done",
              "evidence": "git 9ec92e7"
            },
            {
              "v": "b7f1d06",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.272: 整理卡适配层 P0/P1（卡类三层 + 报告卡只读 + 无决策可投 + 候选行解析）",
              "items": [
                "Rushiera",
                "b7f1d06ae3"
              ],
              "status": "done",
              "evidence": "git b7f1d06"
            },
            {
              "v": "790badf",
              "date": "11-12",
              "group": "2026-11",
              "lane": "other",
              "title": "0.273 P2 拍板写回（decide 端点 + 前端接线 + 回执顺序修复）",
              "items": [
                "Rushiera",
                "790badf1dc"
              ],
              "status": "done",
              "evidence": "git 790badf"
            },
            {
              "v": "c011f15",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.275 模板 v3：SkeletonWriter 三项契约（含标记 / 无残留占位符 / 写后回读）",
              "items": [
                "Rushiera",
                "c011f1596c"
              ],
              "status": "done",
              "evidence": "git c011f15"
            },
            {
              "v": "d5d3f44",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.277 整理卡解析面扩到五类起点形态 + parseGap/reportSignals/parserProfile 自证",
              "items": [
                "Rushiera",
                "d5d3f44194"
              ],
              "status": "done",
              "evidence": "git d5d3f44"
            },
            {
              "v": "2a618b7",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.278 快照热缓存+单飞 · cats stale 回放 · 首屏并行 · 台账瘦身",
              "items": [
                "Rushiera",
                "2a618b742b"
              ],
              "status": "done",
              "evidence": "git 2a618b7"
            },
            {
              "v": "0452476",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "0.280 夹叙决策七写法：routeDecs 七处解析扩展（中文子题行 / 裸键块 / 句中决策点 / 紧贴斜杠 / 标记不加粗 / 候选后缀词）",
              "items": [
                "Rushiera",
                "045247653e"
              ],
              "status": "done",
              "evidence": "git 0452476"
            },
            {
              "v": "cc4adce",
              "date": "11-13",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.283 新增 lifecycle-audit.mjs 生命周期审计脚本（只读 · 样本对账 bug 0）",
              "items": [
                "Rushiera",
                "cc4adce717"
              ],
              "status": "done",
              "evidence": "git cc4adce"
            }
          ]
        }
      ]
    }
  ]
};
