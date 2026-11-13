window.ARCH = {
  "meta": {
    "project": "ComfyDock",
    "title": "ComfyDock 提交时间线",
    "sub": "41 次提交 · 2026-09 → 2026-11",
    "ver": "31641ab",
    "updated": "2026-11-13",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\ComfyDock",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\ComfyDock (branch main)"
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
              "v": "ace70f6",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.1: 立项；采集链打通（现存代码整体导入，截至 v0.25）",
              "items": [
                "Rushiera",
                "ace70f64ed"
              ],
              "status": "done",
              "evidence": "git ace70f6"
            },
            {
              "v": "56be96e",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.2: 一键包发布（exe + Web + data）+ 全量采集 22/22 实锤",
              "items": [
                "Rushiera",
                "56be96ef3f"
              ],
              "status": "done",
              "evidence": "git 56be96e"
            },
            {
              "v": "3336285",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.3: 逐行落盘 + 单行刷新 + 实时进度条",
              "items": [
                "Rushiera",
                "3336285761"
              ],
              "status": "done",
              "evidence": "git 3336285"
            },
            {
              "v": "5e7331b",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.4: CDP 通道——工作流列表采集 / 展开 / 跳转",
              "items": [
                "Rushiera",
                "5e7331bb87"
              ],
              "status": "done",
              "evidence": "git 5e7331b"
            },
            {
              "v": "b54c659",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.5: 工作流读写闭环——上传 / 删除 / 本地清单 / 拖拽上传",
              "items": [
                "Rushiera",
                "b54c65953c"
              ],
              "status": "done",
              "evidence": "git b54c659"
            },
            {
              "v": "faf93ad",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.6: 控制面重构——受控实例 + 串行任务队列 + 面板交互",
              "items": [
                "Rushiera",
                "faf93adbce"
              ],
              "status": "done",
              "evidence": "git faf93ad"
            },
            {
              "v": "bd9e3e7",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.7: 发布与启动——发布落点改仓库根 + 启动守卫",
              "items": [
                "Rushiera",
                "bd9e3e7c5c"
              ],
              "status": "done",
              "evidence": "git bd9e3e7"
            },
            {
              "v": "1ed021d",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.8: API 密钥列——采集首页 payload 的 apiKey",
              "items": [
                "Rushiera",
                "1ed021d1e8"
              ],
              "status": "done",
              "evidence": "git 1ed021d"
            },
            {
              "v": "899db1b",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.9: 更名与定位——ComfyDock + 本地状态按钮",
              "items": [
                "Rushiera",
                "899db1bcd7"
              ],
              "status": "done",
              "evidence": "git 899db1b"
            },
            {
              "v": "e43b7d4",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.10: 采集提速——未登录短路 + 250ms 轮询 + 并发采集",
              "items": [
                "Rushiera",
                "e43b7d433e"
              ],
              "status": "done",
              "evidence": "git e43b7d4"
            },
            {
              "v": "b35b569",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.11: 面板电源——重启 / 关闭",
              "items": [
                "Rushiera",
                "b35b569a0f"
              ],
              "status": "done",
              "evidence": "git b35b569"
            },
            {
              "v": "99ff337",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.12: 本地工作流面——整理 + 折叠 + 状态记忆",
              "items": [
                "Rushiera",
                "99ff3375d3"
              ],
              "status": "done",
              "evidence": "git 99ff337"
            },
            {
              "v": "f042a25",
              "date": "09-26",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.13: 折叠修复——事件委托 + 折叠态不建子树",
              "items": [
                "Rushiera",
                "f042a25b1b"
              ],
              "status": "done",
              "evidence": "git f042a25"
            },
            {
              "v": "3fc9c24",
              "date": "09-26",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.14: 本地工作流面修复——renderLocal 重建前清空",
              "items": [
                "Rushiera",
                "3fc9c2436f"
              ],
              "status": "done",
              "evidence": "git 3fc9c24"
            },
            {
              "v": "e0ab429",
              "date": "09-26",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.15: 余额解析修复——剥千分位分隔符",
              "items": [
                "Rushiera",
                "e0ab429c2e"
              ],
              "status": "done",
              "evidence": "git e0ab429"
            },
            {
              "v": "96f32a9",
              "date": "09-26",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.16: 重启修复——不杀进程树 + 先等自然退出",
              "items": [
                "Rushiera",
                "96f32a9c69"
              ],
              "status": "done",
              "evidence": "git 96f32a9"
            },
            {
              "v": "047e911",
              "date": "09-26",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.17: 占用判定修复——扫进程命令行 + 残留回收",
              "items": [
                "Rushiera",
                "047e911beb"
              ],
              "status": "done",
              "evidence": "git 047e911"
            },
            {
              "v": "6aed0f1",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.18: 删除即摘快照 + 列序与整行点击",
              "items": [
                "Rushiera",
                "6aed0f1d8e"
              ],
              "status": "done",
              "evidence": "git 6aed0f1"
            },
            {
              "v": "9ddaf05",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.19: 说明列增「算力获取」一行",
              "items": [
                "Rushiera",
                "9ddaf05350"
              ],
              "status": "done",
              "evidence": "git 9ddaf05"
            },
            {
              "v": "61b0993",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20: 线上识别能力——音频上云端工作流",
              "items": [
                "Rushiera",
                "61b099333f"
              ],
              "status": "done",
              "evidence": "git 61b0993"
            },
            {
              "v": "8a80e7c",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21: 选择音频 / 目录对话框修复",
              "items": [
                "Rushiera",
                "8a80e7cee1"
              ],
              "status": "done",
              "evidence": "git 8a80e7c"
            },
            {
              "v": "21171b1",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.22: 换版发布——文件位寻址 + 版本自证",
              "items": [
                "Rushiera",
                "21171b17e5"
              ],
              "status": "done",
              "evidence": "git 21171b1"
            },
            {
              "v": "672872c",
              "date": "10-06",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.23: 线上识别工作区化",
              "items": [
                "Rushiera",
                "672872c132"
              ],
              "status": "done",
              "evidence": "git 672872c"
            },
            {
              "v": "60d60a4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.24: 线上生成（文本口径）+ 额度概览接口",
              "items": [
                "Rushiera",
                "60d60a418b"
              ],
              "status": "done",
              "evidence": "git 60d60a4"
            },
            {
              "v": "f63d2d9",
              "date": "10-12",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.25: 换号阈值（推测剩余 ≥ 20）+ 回传刷新",
              "items": [
                "Rushiera",
                "f63d2d995e"
              ],
              "status": "done",
              "evidence": "git f63d2d9"
            },
            {
              "v": "c5f1f47",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.26 本地生成（MOSS-Image）板块：依赖索引/下载器/插件安装(qkv拆分补丁)/出图；内核升0.41.0；重启链改CreateProcess新开控制台",
              "items": [
                "Rushiera",
                "c5f1f47574"
              ],
              "status": "done",
              "evidence": "git c5f1f47"
            },
            {
              "v": "4baa1ab",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.31: 内置推理通道 + 换版重启根因 + 本地生成容器化 + 参数说明",
              "items": [
                "Rushiera",
                "4baa1abd45"
              ],
              "status": "done",
              "evidence": "git 4baa1ab"
            },
            {
              "v": "a0468e6",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.33: WD 打标（本地生成第三生成器）+ TTS 跑法四档",
              "items": [
                "Rushiera",
                "a0468e6a66"
              ],
              "status": "done",
              "evidence": "git a0468e6"
            },
            {
              "v": "3a8b2f2",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.35: IrodoriTTS 收编 ComfyUI 环境（不装运行时）+ 权重迁 models/TTS/yoshino + 跑法五档与参数说明",
              "items": [
                "Rushiera",
                "3a8b2f2f66"
              ],
              "status": "done",
              "evidence": "git 3a8b2f2"
            },
            {
              "v": "6785836",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.36: RVC 变声接入（自持实现·免 fairseq·模型与依赖落 ComfyUI·面板第四生成器）",
              "items": [
                "Rushiera",
                "6785836960"
              ],
              "status": "done",
              "evidence": "git 6785836"
            },
            {
              "v": "0781c0b",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.38: Qwen3-Omni 支持视频（自动抽音轨）+ 提示词默认逐字稿 + 引擎搬进 ComfyUI 自持",
              "items": [
                "Rushiera",
                "0781c0ba52"
              ],
              "status": "done",
              "evidence": "git 0781c0b"
            },
            {
              "v": "ce6f58a",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "RVC 实时链：线3 C# 侧 + 线2 worker 脚本 + 真机档位实测",
              "items": [
                "Rushiera",
                "ce6f58a80c"
              ],
              "status": "done",
              "evidence": "git ce6f58a"
            },
            {
              "v": "ab27e97",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.39 RVC 四条线合流：离线段批量（目录一层 + 多音色逐条）+ 实时链（流式 worker / 设备 / 热更 / 干声变声提交三态）+ 面板三档子签 + 说明书 rvc-realtime.md",
              "items": [
                "Rushiera",
                "ab27e9728d"
              ],
              "status": "done",
              "evidence": "git ab27e97"
            },
            {
              "v": "b27aed8",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.41: 送声换 VB-CABLE（内置包+一键装+三态提交）· 实时换参数自动重开流 · 套壳浏览器与账号表入库",
              "items": [
                "Rushiera",
                "b27aed8a49"
              ],
              "status": "done",
              "evidence": "git b27aed8"
            },
            {
              "v": "6c5977d",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.42: 本地生成新增 MoeGoe（VITS）语音合成与语音转换",
              "items": [
                "Rushiera",
                "6c5977dcf6"
              ],
              "status": "done",
              "evidence": "git 6c5977d"
            },
            {
              "v": "f340db2",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.44: VITS 合成按说话人批量与产物矩阵 + RVC 实时链桥接 VITS-VC",
              "items": [
                "Rushiera",
                "f340db2d68"
              ],
              "status": "done",
              "evidence": "git f340db2"
            },
            {
              "v": "db0858a",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.45: VITS-VC bridge auto source speaker + auto f0 shift + tail padding fix",
              "items": [
                "Rushiera",
                "db0858aff9"
              ],
              "status": "done",
              "evidence": "git db0858a"
            },
            {
              "v": "cf47c7f",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.46: VITS-VC bridge selects model + target speaker in RVC tab (no VITS sub-tab dependency)",
              "items": [
                "Rushiera",
                "cf47c7f6b7"
              ],
              "status": "done",
              "evidence": "git cf47c7f"
            },
            {
              "v": "81b352a",
              "date": "10-22",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.47: MOSS 图像编辑（四格参考图 + DMD 叠加）+ 使用说明书",
              "items": [
                "Rushiera",
                "81b352a1ec"
              ],
              "status": "done",
              "evidence": "git 81b352a"
            },
            {
              "v": "d17d7a3",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.48 IrodoriTTS 去 30 秒时长夹紧 + 按句切段；修换版链端口判据",
              "items": [
                "Rushiera",
                "d17d7a338e"
              ],
              "status": "done",
              "evidence": "git d17d7a3"
            },
            {
              "v": "31641ab",
              "date": "11-07",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.49: 新增 TTS 显存上限参数",
              "items": [
                "Rushiera",
                "31641abdc1"
              ],
              "status": "done",
              "evidence": "git 31641ab"
            }
          ]
        }
      ]
    }
  ]
};
