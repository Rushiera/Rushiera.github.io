window.ARCH = {
  "meta": {
    "project": "ApiSiteAnalyzer",
    "title": "ApiSiteAnalyzer 提交时间线",
    "sub": "47 次提交 · 2026-10 → 2026-11",
    "ver": "d7f0ed6",
    "updated": "2026-11-09",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\ApiSiteAnalyzer",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\ApiSiteAnalyzer (branch main)"
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
              "v": "239a5e0",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.2: API 站用量分析器——适配器契约 + CDP 通道 + 全量采集 + 三类数字面板",
              "items": [
                "Rushiera",
                "239a5e038e"
              ],
              "status": "done",
              "evidence": "git 239a5e0"
            },
            {
              "v": "ba128d8",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.2: .gitignore 只钉根目录 data/（避免连带忽略源码目录）",
              "items": [
                "Rushiera",
                "ba128d8be4"
              ],
              "status": "done",
              "evidence": "git ba128d8"
            },
            {
              "v": "685569c",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.3: 修面板挂死 + 双槽部署（CDP 超时 / 实例接管 / 版本自证）",
              "items": [
                "Rushiera",
                "685569ca3b"
              ],
              "status": "done",
              "evidence": "git 685569c"
            },
            {
              "v": "f55a9a0",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.3: README 目录树措辞对齐（槽位产物随仓走）",
              "items": [
                "Rushiera",
                "f55a9a05fa"
              ],
              "status": "done",
              "evidence": "git f55a9a0"
            },
            {
              "v": "f6e67db",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.3: A 槽产物重建（内嵌 source revision 对齐 HEAD f55a9a0）",
              "items": [
                "Rushiera",
                "f6e67dba87"
              ],
              "status": "done",
              "evidence": "git f6e67db"
            },
            {
              "v": "753004f",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.4: 增量追平 + 自动采集（双击拉取弹设置窗）",
              "items": [
                "Rushiera",
                "753004f17c"
              ],
              "status": "done",
              "evidence": "git 753004f"
            },
            {
              "v": "1f819c8",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.4.4: 输入列缓存小字 + 卡片近十次窗口 + 缓存口径修正",
              "items": [
                "Rushiera",
                "1f819c8cc9"
              ],
              "status": "done",
              "evidence": "git 1f819c8"
            },
            {
              "v": "e711be8",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.4.5: 请求 ID 卡片可点开明细",
              "items": [
                "Rushiera",
                "e711be8c71"
              ],
              "status": "done",
              "evidence": "git e711be8"
            },
            {
              "v": "28d4b07",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.5.2: API key 直连通道（特批站点）+ 站点切换重渲染",
              "items": [
                "Rushiera",
                "28d4b07006"
              ],
              "status": "done",
              "evidence": "git 28d4b07"
            },
            {
              "v": "6acaf2f",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.6.0: 总览站——合并全部站点 + 站点块（真实余额 / 不设限）",
              "items": [
                "Rushiera",
                "6acaf2f78c"
              ],
              "status": "done",
              "evidence": "git 6acaf2f"
            },
            {
              "v": "f97d4d1",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.7.0: 自动采集逐站独立 + 频率自动降级",
              "items": [
                "Rushiera",
                "f97d4d13a9"
              ],
              "status": "done",
              "evidence": "git f97d4d1"
            },
            {
              "v": "c71665e",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.7.2: 修总览键不一致 + 站点块登录态与下次采集",
              "items": [
                "Rushiera",
                "c71665ee43"
              ],
              "status": "done",
              "evidence": "git c71665e"
            },
            {
              "v": "96921f2",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.8.0: 图表空档补齐 + 卡片对比行（前 10 次带数值）",
              "items": [
                "Rushiera",
                "96921f24ae"
              ],
              "status": "done",
              "evidence": "git 96921f2"
            },
            {
              "v": "76e4fe8",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.9.0: 按天可点选 + 栏宽 1:2 + 按模型移位",
              "items": [
                "Rushiera",
                "76e4fe8ee9"
              ],
              "status": "done",
              "evidence": "git 76e4fe8"
            },
            {
              "v": "d123b14",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.10.0: 工作状态条 + 总览站点表",
              "items": [
                "Rushiera",
                "d123b14edb"
              ],
              "status": "done",
              "evidence": "git d123b14"
            },
            {
              "v": "775c0e1",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.10.1: 站点表宽度收敛——撤容器横向滚动，长文本换行不撑宽",
              "items": [
                "Rushiera",
                "775c0e1e83"
              ],
              "status": "done",
              "evidence": "git 775c0e1"
            },
            {
              "v": "d66e459",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11.0: 总览三按钮全局应用——逐站依次执行 + 批量槽位",
              "items": [
                "Rushiera",
                "d66e459f32"
              ],
              "status": "done",
              "evidence": "git d66e459"
            },
            {
              "v": "82ade8e",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11.1: 修异常采集不恢复——采集状态四路径共用出口",
              "items": [
                "Rushiera",
                "82ade8ef17"
              ],
              "status": "done",
              "evidence": "git 82ade8e"
            },
            {
              "v": "04c51b1",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11.2: 图表排序改 token 之和倒序 · 数值行 token / 请求数 · 按天新日期在上",
              "items": [
                "Rushiera",
                "04c51b1159"
              ],
              "status": "done",
              "evidence": "git 04c51b1"
            },
            {
              "v": "e7f1a22",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.12.0: 近 24 小时窗口四项卡片（输入 / 输出 token · 缓存命中率 · 已探明请求 ID + 前 24 小时对比）",
              "items": [
                "Rushiera",
                "e7f1a22710"
              ],
              "status": "done",
              "evidence": "git e7f1a22"
            },
            {
              "v": "300fede",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.14.1: 显示口径三轮——卡片改序 · 近24小时消费金额 · 47站折算÷10",
              "items": [
                "Rushiera",
                "300fedea3f"
              ],
              "status": "done",
              "evidence": "git 300fede"
            },
            {
              "v": "b06e2f7",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.0: 条形成分堆叠 + 请求 ID 明细完整数据（并行两路合流）",
              "items": [
                "Rushiera",
                "b06e2f7eca"
              ],
              "status": "done",
              "evidence": "git b06e2f7"
            },
            {
              "v": "7adabef",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.0: 时段紫条——该时段已探明请求 ID（2px · 独立比例尺）",
              "items": [
                "Rushiera",
                "7adabefa91"
              ],
              "status": "done",
              "evidence": "git 7adabef"
            },
            {
              "v": "1080b1a",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.0: README 补时段紫条口径",
              "items": [
                "Rushiera",
                "1080b1a207"
              ],
              "status": "done",
              "evidence": "git 1080b1a"
            },
            {
              "v": "f7e8100",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.1: 条形成分图例移入按天栏顶部",
              "items": [
                "Rushiera",
                "f7e8100a9b"
              ],
              "status": "done",
              "evidence": "git f7e8100"
            },
            {
              "v": "7da45ee",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.2 card drag order",
              "items": [
                "Rushiera",
                "7da45ee435"
              ],
              "status": "done",
              "evidence": "git 7da45ee"
            },
            {
              "v": "b81ece5",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.3 default card order",
              "items": [
                "Rushiera",
                "b81ece54e3"
              ],
              "status": "done",
              "evidence": "git b81ece5"
            },
            {
              "v": "2e77aab",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.16.0: rolling 24h hourly current (today elapsed + yesterday rest)",
              "items": [
                "Rushiera",
                "2e77aab7d8"
              ],
              "status": "done",
              "evidence": "git 2e77aab"
            },
            {
              "v": "6fe89ba",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.16.1: 线程分析——最近200条按输入+输出串线程链并标并发",
              "items": [
                "Rushiera",
                "6fe89baa37"
              ],
              "status": "done",
              "evidence": "git 6fe89ba"
            },
            {
              "v": "a4dd803",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.18: 线程分析判据收紧（相对5%+绝对1000+方向）+ 列表折叠 + 时间轴视图（同带 v0.17.0 过去24小时金额子窗口）",
              "items": [
                "Rushiera",
                "a4dd803a52"
              ],
              "status": "done",
              "evidence": "git a4dd803"
            },
            {
              "v": "30e8e6f",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.19.1: 静默采集（headless）+ 版本自证修复",
              "items": [
                "Rushiera",
                "30e8e6f6c4"
              ],
              "status": "done",
              "evidence": "git 30e8e6f"
            },
            {
              "v": "47d9113",
              "date": "10-17",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.20.2: 新增知序空间适配器与侦察命令 + 库内两列 + 最近记录列重排",
              "items": [
                "Rushiera",
                "47d9113a96"
              ],
              "status": "done",
              "evidence": "git 47d9113"
            },
            {
              "v": "9766a51",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.0: 余额位按站口径（知序空间已用积分）+ 登录窗口保活与优雅关闭实例",
              "items": [
                "Rushiera",
                "9766a5194e"
              ],
              "status": "done",
              "evidence": "git 9766a51"
            },
            {
              "v": "aa685f9",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.1: 知序空间积分比写死 250 积分=1 元 + 本地消费金额挂口径行",
              "items": [
                "Rushiera",
                "aa685f905f"
              ],
              "status": "done",
              "evidence": "git aa685f9"
            },
            {
              "v": "3ad7afb",
              "date": "10-18",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.21.2 新增第四站 知序空间2（buddy2）——同平台第二账号，靠用户目录分开；兑换码口径改为可记录可代填",
              "items": [
                "Rushiera",
                "3ad7afbfcd"
              ],
              "status": "done",
              "evidence": "git 3ad7afb"
            },
            {
              "v": "6d7e9ef",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.22.0: 第二站迁移接入 sub2api 网关（Sub2ApiSite + IDirectSite）",
              "items": [
                "Rushiera",
                "6d7e9ef2a5"
              ],
              "status": "done",
              "evidence": "git 6d7e9ef"
            },
            {
              "v": "b72ea0a",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.22.2: 去登录改前台标签页（此前开在后台通道页=看起来没打开）+ 知序空间兑换码自动填入 /refuel（只填不提交）",
              "items": [
                "Rushiera",
                "b72ea0a3fa"
              ],
              "status": "done",
              "evidence": "git b72ea0a"
            },
            {
              "v": "975791c",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.22.2: 发布暂存区路径勘误——PublishDir 改 tools/CatTemp（目录下沉遗留）",
              "items": [
                "Rushiera",
                "975791c74f"
              ],
              "status": "done",
              "evidence": "git 975791c"
            },
            {
              "v": "52bf91c",
              "date": "11-04",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.23.0: 知序空间双号合并与显示口径轮",
              "items": [
                "Rushiera",
                "52bf91cefd"
              ],
              "status": "done",
              "evidence": "git 52bf91c"
            },
            {
              "v": "8055805",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.23.0 用量条三轨：主条未命中+输出，缓存绿细条，请求数紫细条，各独立标尺",
              "items": [
                "Rushiera",
                "80558056c1"
              ],
              "status": "done",
              "evidence": "git 8055805"
            },
            {
              "v": "c82322d",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.24.1 第四站接入壳台账（明细分页/积分200）+ 中转站视图对接",
              "items": [
                "Rushiera",
                "c82322d25b"
              ],
              "status": "done",
              "evidence": "git c82322d"
            },
            {
              "v": "e2ff0bf",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.24.2 新增导出端点供壳整体搬运",
              "items": [
                "Rushiera",
                "e2ff0bfbe8"
              ],
              "status": "done",
              "evidence": "git e2ff0bf"
            },
            {
              "v": "6bc3752",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.25.0 改动→生效四层：页面外置热读 + 设置热读 + 部署脚本",
              "items": [
                "Rushiera",
                "6bc375267d"
              ],
              "status": "done",
              "evidence": "git 6bc3752"
            },
            {
              "v": "de3c0bd",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.25.0: 最近记录模型列按上游真模型显示（链请求不再显示 high）",
              "items": [
                "Rushiera",
                "de3c0bd772"
              ],
              "status": "done",
              "evidence": "git de3c0bd"
            },
            {
              "v": "fd8221f",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.3 业务核心进程内换核（三层 + 可回收 ALC + 影子副本）",
              "items": [
                "Rushiera",
                "fd8221fe8f"
              ],
              "status": "done",
              "evidence": "git fd8221f"
            },
            {
              "v": "f2b8129",
              "date": "11-05",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26.4 serve 自举 + 通道 local：面板启动探测 18100 未起则拉起壳；站点表显示本机直连",
              "items": [
                "Rushiera",
                "f2b81295aa"
              ],
              "status": "done",
              "evidence": "git f2b8129"
            },
            {
              "v": "d7f0ed6",
              "date": "11-06",
              "group": "2026-11",
              "lane": "chore",
              "title": "chore: CatTemp 进 gitignore（mitm 抓包落点）",
              "items": [
                "Rushiera",
                "d7f0ed60a9"
              ],
              "status": "done",
              "evidence": "git d7f0ed6"
            }
          ]
        }
      ]
    }
  ]
};
