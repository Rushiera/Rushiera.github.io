window.ARCH = {
  "meta": {
    "project": "Akasha",
    "title": "Akasha 提交时间线",
    "sub": "23 次提交 · 2026-09 → 2026-10",
    "ver": "fbaa2cc",
    "updated": "2026-11-09",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\tools\\akasha",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\tools\\akasha (branch master)"
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
              "v": "58a5cbc",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Initial commit",
              "items": [
                "雾理莎",
                "58a5cbcfae"
              ],
              "status": "done",
              "evidence": "git 58a5cbc"
            },
            {
              "v": "feb4d69",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "S1 步 0：仓库骨架落地（Contracts/Engine/Models/Cli 四工程 + 两测试 + SetUp 部署工具）",
              "items": [
                "雾理莎",
                "feb4d698ca"
              ],
              "status": "done",
              "evidence": "git feb4d69"
            },
            {
              "v": "15698e6",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "布局修订：数据区随部署根（public/app + public/Data），模型入库，deploy 退役",
              "items": [
                "雾理莎",
                "15698e647d"
              ],
              "status": "done",
              "evidence": "git 15698e6"
            },
            {
              "v": "00fda46",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "遗留处理：模型校验清单（MANIFEST.json）+ model-verify 哈希比对 + model-manifest 命令",
              "items": [
                "雾理莎",
                "00fda46990"
              ],
              "status": "done",
              "evidence": "git 00fda46"
            },
            {
              "v": "ad9feed",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "S1 步 2：嵌入管道跑通（ONNX 推理 + BertTokenizer + CLS 池化 + L2 归一化）；模型必需件扩为四件",
              "items": [
                "雾理莎",
                "ad9feedc90"
              ],
              "status": "done",
              "evidence": "git ad9feed"
            },
            {
              "v": "916042f",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "v0.1.0: S1 步 3-5 切块/建库/检索（chunk + 倒排 + 向量 + search）",
              "items": [
                "雾理莎",
                "916042fd7a"
              ],
              "status": "done",
              "evidence": "git 916042f"
            },
            {
              "v": "2fa96c5",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.2.0: 抽 Akasha.App 应用服务层 + 建库进度与取消",
              "items": [
                "雾理莎",
                "2fa96c52ac"
              ],
              "status": "done",
              "evidence": "git 2fa96c5"
            },
            {
              "v": "e4375c4",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.4: B1 协议 v1 存储骨架 + B2 条目契约改造",
              "items": [
                "雾理莎",
                "e4375c4bd2"
              ],
              "status": "done",
              "evidence": "git e4375c4"
            },
            {
              "v": "31eb2d5",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "仓库治理: 补 .gitattributes——文本件 LF 检出 + 模型件豁免改写",
              "items": [
                "雾理莎",
                "31eb2d5a3e"
              ],
              "status": "done",
              "evidence": "git 31eb2d5"
            },
            {
              "v": "83cb908",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.5: B3 打包与解包（协议 v1 跨仓库搬运）",
              "items": [
                "雾理莎",
                "83cb90826e"
              ],
              "status": "done",
              "evidence": "git 83cb908"
            },
            {
              "v": "488bc75",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.7: 加词表干预层与词典通道",
              "items": [
                "雾理莎",
                "488bc7539d"
              ],
              "status": "done",
              "evidence": "git 488bc75"
            },
            {
              "v": "f8de6d1",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.8.0: 新增组向量与离散度硬门（C3）",
              "items": [
                "雾理莎",
                "f8de6d1347"
              ],
              "status": "done",
              "evidence": "git f8de6d1"
            },
            {
              "v": "1092303",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.9.0: C5 组的定位重构（别名表）+ 组向量退役",
              "items": [
                "雾理莎",
                "109230302b"
              ],
              "status": "done",
              "evidence": "git 1092303"
            },
            {
              "v": "82dd82f",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.10.0：C4 候选池跨轮累加 + 判断层随包走",
              "items": [
                "雾理莎",
                "82dd82f63c"
              ],
              "status": "done",
              "evidence": "git 82dd82f"
            },
            {
              "v": "ea226c6",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.10.1: 放开词项 DF 下限（df=1 进库）",
              "items": [
                "雾理莎",
                "ea226c66db"
              ],
              "status": "done",
              "evidence": "git ea226c6"
            },
            {
              "v": "01c1bf8",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.11.0: 新增入库粒度与标题覆盖通道",
              "items": [
                "雾理莎",
                "01c1bf845f"
              ],
              "status": "done",
              "evidence": "git 01c1bf8"
            },
            {
              "v": "82595bc",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.13.0: 检索分数分解与跨库检索",
              "items": [
                "雾理莎",
                "82595bcf4a"
              ],
              "status": "done",
              "evidence": "git 82595bc"
            },
            {
              "v": "1a0c402",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.14.0: 蒸馏提案裁决落地与 retire 指令",
              "items": [
                "雾理莎",
                "1a0c40288a"
              ],
              "status": "done",
              "evidence": "git 1a0c402"
            },
            {
              "v": "40a7ca2",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.15.0: 新增词表三视图报表与 CSV 导出",
              "items": [
                "雾理莎",
                "40a7ca2346"
              ],
              "status": "done",
              "evidence": "git 40a7ca2"
            },
            {
              "v": "e26f30a",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.17.0: 只读工作台与读面修复、表视图扩面",
              "items": [
                "雾理莎",
                "e26f30ae40"
              ],
              "status": "done",
              "evidence": "git e26f30a"
            },
            {
              "v": "a3e56a5",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "0.18.0: 工作台写回与影响面对账",
              "items": [
                "雾理莎",
                "a3e56a55a1"
              ],
              "status": "done",
              "evidence": "git a3e56a5"
            },
            {
              "v": "be5b4a5",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.19: 新增建库排除面与判断层名单单点",
              "items": [
                "雾理莎",
                "be5b4a5332"
              ],
              "status": "done",
              "evidence": "git be5b4a5"
            },
            {
              "v": "fbaa2cc",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "0.21.0: 新增中文虚词门禁与截断出声",
              "items": [
                "雾理莎",
                "fbaa2ccc42"
              ],
              "status": "done",
              "evidence": "git fbaa2cc"
            }
          ]
        }
      ]
    }
  ]
};
