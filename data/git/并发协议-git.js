window.ARCH = {
  "meta": {
    "project": "并发协议",
    "title": "并发协议 提交时间线",
    "sub": "33 次提交 · 2026-11 → 2026-11",
    "ver": "ab5e8f6",
    "updated": "2026-11-11",
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
            }
          ]
        }
      ]
    }
  ]
};
