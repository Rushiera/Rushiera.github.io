window.ARCH = {
  "meta": {
    "project": "KKManager",
    "title": "KKManager 提交时间线",
    "sub": "77 次提交 · 2026-09 → 2026-10",
    "ver": "532285b",
    "updated": "2026-11-08",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\mau\\WorkSpace\\KKManager",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\mau\\WorkSpace\\KKManager (branch main)"
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
              "v": "726f963",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.6: 初始化仓库——源码与发布规范入库",
              "items": [
                "Rushiera",
                "726f96355f"
              ],
              "status": "done",
              "evidence": "git 726f963"
            },
            {
              "v": "55dcf92",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.9: 卡片排序（按游戏内顺序/按大小升降）+ Data 源码入库 + 并发留档",
              "items": [
                "Rushiera",
                "55dcf92e95"
              ],
              "status": "done",
              "evidence": "git 55dcf92"
            },
            {
              "v": "993f933",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.11: 扫描清扫——已消失的卡片 / mod 记录随扫描清理",
              "items": [
                "Rushiera",
                "993f933da8"
              ],
              "status": "done",
              "evidence": "git 993f933"
            },
            {
              "v": "8983b4f",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.12: 重复副本占用失败可执行化 + 无操作行点击反馈",
              "items": [
                "Rushiera",
                "8983b4f5ac"
              ],
              "status": "done",
              "evidence": "git 8983b4f"
            },
            {
              "v": "4b5b7aa",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.13: 顶部扫描口径——扫描主要 / 追加库扫描（ScanScope 预置与追加）",
              "items": [
                "Rushiera",
                "4b5b7aa2b7"
              ],
              "status": "done",
              "evidence": "git 4b5b7aa"
            },
            {
              "v": "64d69a8",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.2: 发布版——更新记录三处（README 置顶 / readme.txt / 台账）+ 发布即推 GitHub（对应编译版 0.18.13）",
              "items": [
                "Rushiera",
                "64d69a86ea"
              ],
              "status": "done",
              "evidence": "git 64d69a8"
            },
            {
              "v": "d69581c",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.14: 卡片编辑——敏感带 weakPoint + 五项是否接受 denial（字母表 + 读写 + 面板控件）",
              "items": [
                "Rushiera",
                "d69581cb4c"
              ],
              "status": "done",
              "evidence": "git d69581c"
            },
            {
              "v": "e65b2c4",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.15: 重复副本——完整路径 / 创建时间 / MD5 档案（只算冲突文件 · 算过就忽略）+ 不一致标红",
              "items": [
                "Rushiera",
                "e65b2c4d71"
              ],
              "status": "done",
              "evidence": "git e65b2c4"
            },
            {
              "v": "7f35163",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.3: 发布版——含编译版 0.18.14–0.18.15 全部改动（卡片编辑：敏感带 + 五项是否接受 · 重复副本：完整路径 + 创建/修改时间 + MD5 档案与标红）· 更新记录三处同源",
              "items": [
                "Rushiera",
                "7f35163dc1"
              ],
              "status": "done",
              "evidence": "git 7f35163"
            },
            {
              "v": "a249675",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.17: 重复副本组行加引用卡片缩略图（前三张 + 查看更多）· 并入对侧 0.18.16 叠层改动",
              "items": [
                "Rushiera",
                "a2496753e0"
              ],
              "status": "done",
              "evidence": "git a249675"
            },
            {
              "v": "8efb27c",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.18: 重复副本行紧凑 + 时间标红精确到段（年月日不同整串红 · 只有时分秒不同只标红时分秒）",
              "items": [
                "Rushiera",
                "8efb27c1c6"
              ],
              "status": "done",
              "evidence": "git 8efb27c"
            },
            {
              "v": "11f66b9",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.18: 发布版 1.0.4——含 0.18.16-0.18.18 全部改动 · 更新记录三处同源",
              "items": [
                "Rushiera",
                "11f66b904f"
              ],
              "status": "done",
              "evidence": "git 11f66b9"
            },
            {
              "v": "b20d148",
              "date": "09-27",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: 发布技能档台账路径改指实况（实例规范档在发布区）",
              "items": [
                "Rushiera",
                "b20d148216"
              ],
              "status": "done",
              "evidence": "git b20d148"
            },
            {
              "v": "5f751f4",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.19: 重复副本提速（引用卡片改一次批量轻量查询）",
              "items": [
                "Rushiera",
                "5f751f445f"
              ],
              "status": "done",
              "evidence": "git 5f751f4"
            },
            {
              "v": "2ca8900",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.21: 「展开文件夹」只在卡片页出现（mod 库 / 缺失清单不再显示）",
              "items": [
                "Rushiera",
                "2ca89007e9"
              ],
              "status": "done",
              "evidence": "git 2ca8900"
            },
            {
              "v": "2742533",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.22: 库根「浏览…」修好（创建后未显示 → 持续置顶 + 强制显示）· 调试日志收进 --browse-debug",
              "items": [
                "Rushiera",
                "2742533293"
              ],
              "status": "done",
              "evidence": "git 2742533"
            },
            {
              "v": "b8c7aaa",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.5: 发布版 1.0.5——含 0.18.19-0.18.22 全部改动 · 更新记录三处同源 · 基线取 HEAD 快照",
              "items": [
                "Rushiera",
                "b8c7aaaab5"
              ],
              "status": "done",
              "evidence": "git b8c7aaa"
            },
            {
              "v": "30d9c66",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.23: 按作者整理——范围勾选 + 预览计划落表（冲突必清零）+ 三重闸门 + 后台搬运 + 清空目录 | CLI sort / 面板三弹框",
              "items": [
                "Rushiera",
                "30d9c66d81"
              ],
              "status": "done",
              "evidence": "git 30d9c66"
            },
            {
              "v": "b7731ac",
              "date": "09-27",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: 发布规范增铁律 4（基线取已提交快照 · 不 add -A）+ 技能档步 1/8b 同步",
              "items": [
                "Rushiera",
                "b7731acb4a"
              ],
              "status": "done",
              "evidence": "git b7731ac"
            },
            {
              "v": "d4892a4",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.6: 发布版 1.0.6——含编译版 0.18.23 全部改动 · 更新记录三处同源",
              "items": [
                "Rushiera",
                "d4892a4d3c"
              ],
              "status": "done",
              "evidence": "git d4892a4"
            },
            {
              "v": "13d03d3",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.24: 卡片排序扩展——按文件名 / 按角色名（名字读自卡片数据区 + 存量补名）",
              "items": [
                "Rushiera",
                "13d03d3c0b"
              ],
              "status": "done",
              "evidence": "git 13d03d3"
            },
            {
              "v": "11a8c62",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.25: 修复卡片排序按钮点击无反应（按文件名 / 按角色名补绑定）",
              "items": [
                "Rushiera",
                "11a8c625d5"
              ],
              "status": "done",
              "evidence": "git 11a8c62"
            },
            {
              "v": "16bdce6",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.28: 整理冲突小窗数据补全 + 与重复副本共用渲染",
              "items": [
                "Rushiera",
                "16bdce60ac"
              ],
              "status": "done",
              "evidence": "git 16bdce6"
            },
            {
              "v": "945968c",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.27: 场景卡 sd 识别（数据区首段版本串判据）+ 卡片分析 timeline 长度（Timeline 按 duration/timeScale 折算）+ 存量卡类型补正；新增 Core/TimelineReader 与探针 tlinfo（面板行与缓存随在途 index.html 并入）",
              "items": [
                "Rushiera",
                "945968cc76"
              ],
              "status": "done",
              "evidence": "git 945968c"
            },
            {
              "v": "930a445",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.29: 场景卡（sd）专属视图——16:9 比例 + 宽列（三处缩略图区全覆盖）",
              "items": [
                "Rushiera",
                "930a4453c6"
              ],
              "status": "done",
              "evidence": "git 930a445"
            },
            {
              "v": "8f75349",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.7: 发布版 1.0.7——含编译版 0.18.24-0.18.29 全部改动（场景卡 16:9 视图 + timeline · 整理冲突小窗 · 卡片排序两键）· 更新记录三处同源",
              "items": [
                "Rushiera",
                "8f75349eb2"
              ],
              "status": "done",
              "evidence": "git 8f75349"
            },
            {
              "v": "a9a90ea",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.18.30: 卡片分析 / 编辑卡片拆分——只读结构视图独立成窗（不查编辑授权）+ 编辑卡片只留点名字段",
              "items": [
                "Rushiera",
                "a9a90ea007"
              ],
              "status": "done",
              "evidence": "git a9a90ea"
            },
            {
              "v": "17e9201",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.19.2: 服装槽位读取——人物卡七套 coordinate（服装 9 槽 + 饰品 20 槽 + 化妆）",
              "items": [
                "Rushiera",
                "17e9201325"
              ],
              "status": "done",
              "evidence": "git 17e9201"
            },
            {
              "v": "11f1ba3",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.19.3: 场景卡（sd）深度分析——插件条目 + 内嵌角色数据 + timeline 深度",
              "items": [
                "Rushiera",
                "11f1ba392b"
              ],
              "status": "done",
              "evidence": "git 11f1ba3"
            },
            {
              "v": "57b84b4",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.19.5: 场景卡（sd）深度分析扩栏——插件条目版本/内容摘要 · 场景道具（kkpe 记录）· 时间轴轨道组名（含 v0.19.4 内嵌角色首图按份装配）",
              "items": [
                "Rushiera",
                "57b84b443c"
              ],
              "status": "done",
              "evidence": "git 57b84b4"
            },
            {
              "v": "2e6afac",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.19.6: 场景卡新节「内嵌角色数据（每份）」——份头段（数据版本/卡面图）× 数据块目录（块名/版本/字节数）",
              "items": [
                "Rushiera",
                "2e6afacfaa"
              ],
              "status": "done",
              "evidence": "git 2e6afac"
            },
            {
              "v": "2be13d7",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.19.7: 卡片排序新增「按 timeline 长度」（升序/降序）——扫描期对场景卡补读长度落表 card_timeline + 排序键与第五枚按钮",
              "items": [
                "Rushiera",
                "2be13d7202"
              ],
              "status": "done",
              "evidence": "git 2be13d7"
            },
            {
              "v": "8ac1de7",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.8: 发布版 1.0.8——含编译版 0.18.30-0.19.7 全部改动（卡片分析/编辑拆分 · 概览配色 · 服装槽位 · 场景卡 sd 深度分析 + 逐份内嵌角色数据 · 卡片排序 timeline）· 更新记录三处同源",
              "items": [
                "Rushiera",
                "8ac1de7e76"
              ],
              "status": "done",
              "evidence": "git 8ac1de7"
            },
            {
              "v": "6b21645",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.20.1: mod 扫描面放宽——库根内全枚举·判据=manifest.xml（含 0.20.0 扫描分级并入）",
              "items": [
                "Rushiera",
                "6b21645e9c"
              ],
              "status": "done",
              "evidence": "git 6b21645"
            },
            {
              "v": "5ce2d66",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.20.1: 扫描会话化（段内单句柄复用）+ 标记定位 SIMD 化（CollectDeclaration/ScanMarks 改 Span.IndexOf）",
              "items": [
                "Rushiera",
                "5ce2d66ebb"
              ],
              "status": "done",
              "evidence": "git 5ce2d66"
            },
            {
              "v": "8161ced",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.20.2: 读面会话接线收口（timeline / coord / detail / scene 共用段内句柄）",
              "items": [
                "Rushiera",
                "8161ced9e2"
              ],
              "status": "done",
              "evidence": "git 8161ced"
            },
            {
              "v": "03f365a",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.20.3: 本轮全修——mod_count 判空（三处读点）· 阶段2 局部窗口全接段内句柄 · timeline 串头偏移（str8/str16 各多 1 字节致空轴卡误报越界）",
              "items": [
                "Rushiera",
                "03f365abc2"
              ],
              "status": "done",
              "evidence": "git 03f365a"
            },
            {
              "v": "45025eb",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.20.3: 并入对侧在途（插件库根 BepInEx + 使用者自建待办）——消 HEAD 编译缺口（Scanner 引用 pluginRoots / PluginInfo / PluginReader）",
              "items": [
                "Rushiera",
                "45025ebbfa"
              ],
              "status": "done",
              "evidence": "git 45025eb"
            },
            {
              "v": "dcf2c69",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.20.5: 非卡 / 非 mod 清单（统计卡 + 弹窗：卡图/理由/位置 + 一键移到缓存库）· 无数据区纯图片改判非卡（修 0.20.0 引入的口径回归）· 卡片库根只读误判修复",
              "items": [
                "Rushiera",
                "dcf2c69f39"
              ],
              "status": "done",
              "evidence": "git dcf2c69"
            },
            {
              "v": "bca761a",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v1.0.9 发布：含编译版 0.20.0-0.20.5 全部改动（扫描分级 / 插件库 / 待办清单 / 非卡清单）· 纯发布零源码改动",
              "items": [
                "Rushiera",
                "bca761add6"
              ],
              "status": "done",
              "evidence": "git bca761a"
            },
            {
              "v": "abdd83a",
              "date": "09-29",
              "group": "2026-09",
              "lane": "chore",
              "title": "RELEASE.md 铁律4：发布基线快照解包通道固定为 git archive --format=zip + Expand-Archive（bsdtar 中文名条目报 Invalid empty pathname）",
              "items": [
                "Rushiera",
                "abdd83a6af"
              ],
              "status": "done",
              "evidence": "git abdd83a"
            },
            {
              "v": "c865145",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.20.6: 时间轴轨道视图（组树/轨道/关键帧 + 时刻游标）",
              "items": [
                "Rushiera",
                "c8651452bc"
              ],
              "status": "done",
              "evidence": "git c865145"
            },
            {
              "v": "c4f9b2c",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.20.7: 修轨道端点 400——full 改可选参数（0.20.6 面板恒报读取失败）",
              "items": [
                "Rushiera",
                "c4f9b2cede"
              ],
              "status": "done",
              "evidence": "git c4f9b2c"
            },
            {
              "v": "cd495c0",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.8~0.20.11: 数据面归并提交——引用三列分型 + 插件清单八列与 cfg 表 + 分片库常驻",
              "items": [
                "Rushiera",
                "cd495c0f3f"
              ],
              "status": "done",
              "evidence": "git cd495c0"
            },
            {
              "v": "7b8a655",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.13: 插件库根不再预置只读（预置值 readOnly=false）· 复合库号 LibDbFileName · ScanPlan Move 步骤移除",
              "items": [
                "Rushiera",
                "7b8a6556d4"
              ],
              "status": "done",
              "evidence": "git 7b8a655"
            },
            {
              "v": "5170b71",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.11: 插件读取面——程序集级元数据 + cfg 全量解析 + 中文说明表内嵌",
              "items": [
                "Rushiera",
                "5170b71ee6"
              ],
              "status": "done",
              "evidence": "git 5170b71"
            },
            {
              "v": "d14e225",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.15: 插件配置值写回——最小改动只换值段 · 授权与白名单双闸门 · 写后逐字节回读",
              "items": [
                "Rushiera",
                "d14e225d3f"
              ],
              "status": "done",
              "evidence": "git d14e225"
            },
            {
              "v": "0728bf7",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "插件日志读取面：补已加载 / 被跳过 / 出错三类插件名集合（供面板行级状态标识）",
              "items": [
                "Rushiera",
                "0728bf7e32"
              ],
              "status": "done",
              "evidence": "git 0728bf7"
            },
            {
              "v": "4e65b9c",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.10: 时间轴读取提速——近窗优先（先扫尾 16MB）+ 锚点 Span.IndexOf 向量化（Studio 403 张 -35%）",
              "items": [
                "Rushiera",
                "4e65b9caa0"
              ],
              "status": "done",
              "evidence": "git 4e65b9c"
            },
            {
              "v": "2cbe1e1",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.10~0.20.14: 扫描面归并提交——分片库常驻 · 进度粒度×10 · 并行段（SharedDone/ResolveWorkers）· 插件库连带扫描段",
              "items": [
                "Rushiera",
                "2cbe1e1b11"
              ],
              "status": "done",
              "evidence": "git 2cbe1e1"
            },
            {
              "v": "0ca8340",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.11~0.20.15: 面板服务端归并提交——插件清单端点 + 插件分析端点 + cfg 写回端点（授权与白名单双闸门）· 插件连带扫描进度三计数",
              "items": [
                "Rushiera",
                "0ca83405e0"
              ],
              "status": "done",
              "evidence": "git 0ca8340"
            },
            {
              "v": "0e9f320",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.9~0.20.15: 面板前端归并提交——unity3d 大条目闸门 · 引用三列 · 插件清单页签与标识点 · 扫描顺序只读 · cfg 当前值可编辑与保存询问窗",
              "items": [
                "Rushiera",
                "0e9f320586"
              ],
              "status": "done",
              "evidence": "git 0e9f320"
            },
            {
              "v": "6ac950f",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.11~0.20.14: CLI 归并提交——插件清单 / 插件分析 / 配置读取命令 + 扫描主要连带插件库计数出声",
              "items": [
                "Rushiera",
                "6ac950f15a"
              ],
              "status": "done",
              "evidence": "git 6ac950f"
            },
            {
              "v": "4afe5c5",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "探针面：KKManagerProbe 引产品项目（与产品同源读面）+ moduse 探针（引用三列核对）",
              "items": [
                "Rushiera",
                "4afe5c53a1"
              ],
              "status": "done",
              "evidence": "git 4afe5c5"
            },
            {
              "v": "b6fd269",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "revealer：撤下 1.0.1-1.0.7 发布版文本件（分发面已由 1.0.8/1.0.9 取代）· 补 UPDATES.md 功能更新史",
              "items": [
                "Rushiera",
                "b6fd269eb0"
              ],
              "status": "done",
              "evidence": "git b6fd269"
            },
            {
              "v": "baaaf10",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "版本行 0.20.7 → 0.20.14（跨 0.20.8-0.20.14 各轮顺延）· plugin-notes.txt 登记为内嵌资源",
              "items": [
                "Rushiera",
                "baaaf1035f"
              ],
              "status": "done",
              "evidence": "git baaaf10"
            },
            {
              "v": "3244000",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "插件日志读取面：补名称归一（去掉版本段）+ 错误行来源名提取（供面板行级状态标识）",
              "items": [
                "Rushiera",
                "3244000160"
              ],
              "status": "done",
              "evidence": "git 3244000"
            },
            {
              "v": "92d7a71",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.16: 插件日志实况判定收口为单点——新 PluginLogReader.StateOf 键值法（error/loaded/skipped/none），调用方各自删本地名称归一",
              "items": [
                "Rushiera",
                "92d7a711d4"
              ],
              "status": "done",
              "evidence": "git 92d7a71"
            },
            {
              "v": "69dc033",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.16: 插件清单行级标识重做——左圆点=上次启动实况（蓝/黄/红/灰）· 右标签=配置文件（紫框/灰框），标识点与实况行同源",
              "items": [
                "Rushiera",
                "69dc033c00"
              ],
              "status": "done",
              "evidence": "git 69dc033"
            },
            {
              "v": "6883541",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "版本行 0.20.15 → 0.20.16",
              "items": [
                "Rushiera",
                "6883541c1f"
              ],
              "status": "done",
              "evidence": "git 6883541"
            },
            {
              "v": "2663adb",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.17: 插件清单配置文件标签移到圆点右侧并去方括号",
              "items": [
                "Rushiera",
                "2663adb7fa"
              ],
              "status": "done",
              "evidence": "git 2663adb"
            },
            {
              "v": "772bc7a",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.18: 卡片排序新增按缺失（黑到灰到黄到绿固定序）",
              "items": [
                "Rushiera",
                "772bc7a8d9"
              ],
              "status": "done",
              "evidence": "git 772bc7a"
            },
            {
              "v": "d52db46",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.19: 扫描主要库先导段——人物卡主库本目录先只建行（不含子文件夹），面板立刻看见文件名与卡片原图",
              "items": [
                "Rushiera",
                "d52db46f4a"
              ],
              "status": "done",
              "evidence": "git d52db46"
            },
            {
              "v": "b6c602b",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.0: 先导段卡死修复——分片库事务改 deferred（BEGIN），一处覆盖先导/并行/清扫全族",
              "items": [
                "Rushiera",
                "b6c602b6d7"
              ],
              "status": "done",
              "evidence": "git b6c602b"
            },
            {
              "v": "b9e7e01",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.1: Scanner 四处空 catch 补出声（删除临时文件失败出声 / 插件库枚举失败并入扫描错误清单）",
              "items": [
                "Rushiera",
                "b9e7e01f28"
              ],
              "status": "done",
              "evidence": "git b9e7e01"
            },
            {
              "v": "5b7b96d",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v1.10.0: 发布版 1.10.0——含编译版 0.20.6-0.21.1 全部改动（发布文本件 + README 更新记录 + 发布台账）",
              "items": [
                "Rushiera",
                "5b7b96dbdf"
              ],
              "status": "done",
              "evidence": "git 5b7b96d"
            },
            {
              "v": "b0e3df4",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.2: 文件夹视图跨分片重复修复（QueryFolders 按库根+文件夹合并）",
              "items": [
                "Rushiera",
                "b0e3df4e64"
              ],
              "status": "done",
              "evidence": "git b0e3df4"
            },
            {
              "v": "399a318",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "探针: 新增 folders 对账命令（文件夹行同键唯一性 + 各库根合计）",
              "items": [
                "Rushiera",
                "399a318549"
              ],
              "status": "done",
              "evidence": "git 399a318"
            },
            {
              "v": "74868a6",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.3: 扫描配置改「组勾选单元」——统一扫描必选组 + 卡片分析可选组",
              "items": [
                "Rushiera",
                "74868a66ca"
              ],
              "status": "done",
              "evidence": "git 74868a6"
            },
            {
              "v": "d6409ad",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.3: 并行 worker 默认 32 · 分片数默认 32 并固定不裁剪",
              "items": [
                "Rushiera",
                "d6409ad1a9"
              ],
              "status": "done",
              "evidence": "git d6409ad"
            },
            {
              "v": "069513d",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.4: 建库预置——空结构模板库嵌入 exe，首启一次性备齐全部 db（零 DDL）",
              "items": [
                "Rushiera",
                "069513d4b1"
              ],
              "status": "done",
              "evidence": "git 069513d"
            },
            {
              "v": "bc83089",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.4: 探针新增建库基准 dbbench 与模板生成 mktpl 命令",
              "items": [
                "Rushiera",
                "bc830898ad"
              ],
              "status": "done",
              "evidence": "git bc83089"
            },
            {
              "v": "89de99d",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.5: 已存在的库文件不再重跑建表事务（打开 96 片 101 s → 0.25 s）",
              "items": [
                "Rushiera",
                "89de99d463"
              ],
              "status": "done",
              "evidence": "git 89de99d"
            },
            {
              "v": "7559157",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.5: 探针新增打开 / 关闭基准与分片数 / journal 对照命令",
              "items": [
                "Rushiera",
                "7559157a25"
              ],
              "status": "done",
              "evidence": "git 7559157"
            },
            {
              "v": "3b8a98c",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.5: 发布 1.0.11（含编译版 0.21.2–0.21.5 全部改动）+ 发布版号勘误（1.0.10 由误记的跳级号更正）",
              "items": [
                "Rushiera",
                "3b8a98c481"
              ],
              "status": "done",
              "evidence": "git 3b8a98c"
            },
            {
              "v": "363310e",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.6: 页面加载后静默预热分片库（首扫 78.1 s → 12.7 s · 关闭 ~0）",
              "items": [
                "Rushiera",
                "363310e015"
              ],
              "status": "done",
              "evidence": "git 363310e"
            },
            {
              "v": "532285b",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.6: 探针新增扫描分段计时 scanbench 与预热对照 warmup/wbench/warmscan",
              "items": [
                "Rushiera",
                "532285b010"
              ],
              "status": "done",
              "evidence": "git 532285b"
            }
          ]
        }
      ]
    }
  ]
};
