window.ARCH = {
  "meta": {
    "project": "Cosmoteer",
    "title": "Cosmoteer 提交时间线",
    "sub": "13 次提交 · 2026-10 → 2026-10",
    "ver": "78c3691",
    "updated": "2026-11-13",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\ourcosm",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\ourcosm (branch master)"
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
              "v": "91ada0d",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "cos-r9 baseline: P3 sandbox order link + crew hauling + creative gap survey + original baseline (512 asserts green)",
              "items": [
                "Rushiera",
                "91ada0da9f"
              ],
              "status": "done",
              "evidence": "git 91ada0d"
            },
            {
              "v": "478a8f2",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "cos-r9 L6: contract v1.9 register new public surface + controls.md errata",
              "items": [
                "Rushiera",
                "478a8f2f92"
              ],
              "status": "done",
              "evidence": "git 478a8f2"
            },
            {
              "v": "fc78068",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "cleanup: drop stale cos-r7 one-shot scripts from tools/CatTemp",
              "items": [
                "Rushiera",
                "fc78068f1b"
              ],
              "status": "done",
              "evidence": "git fc78068"
            },
            {
              "v": "78449d5",
              "date": "10-28",
              "group": "2026-10",
              "lane": "other",
              "title": "probe: LLM 可见探针（回环 HTTP 读数 + 主线程命令通道）v0.59",
              "items": [
                "Rushiera",
                "78449d5a54"
              ],
              "status": "done",
              "evidence": "git 78449d5"
            },
            {
              "v": "ec10d29",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.61: probe port 18540 + csproj compile scope + X-Probe headers",
              "items": [
                "Rushiera",
                "ec10d29ad4"
              ],
              "status": "done",
              "evidence": "git ec10d29"
            },
            {
              "v": "d49807f",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "cos-t3 v0.63 破口修法修掉伤害汇 探针文档与契约同步",
              "items": [
                "Rushiera",
                "d49807f4d9"
              ],
              "status": "done",
              "evidence": "git d49807f"
            },
            {
              "v": "a1118e3",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "cos-t3-A 反向过冲刹车口径假设被反证 报告交付 代码0行改动",
              "items": [
                "Rushiera",
                "a1118e3e60"
              ],
              "status": "done",
              "evidence": "git a1118e3"
            },
            {
              "v": "b169374",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "cos-p-handoff 补状态更新指针 防下一会话按过期清单接续",
              "items": [
                "Rushiera",
                "b169374ac3"
              ],
              "status": "done",
              "evidence": "git b169374"
            },
            {
              "v": "03588ff",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "交接勘误 静默猫恢复须先 cat.start 再 continue",
              "items": [
                "Rushiera",
                "03588ff68a"
              ],
              "status": "done",
              "evidence": "git 03588ff"
            },
            {
              "v": "636dc7e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.64 cos-t4 裁决落地轮：八线并发七线交付，order 组 14/20 待修测试船布局",
              "items": [
                "Rushiera",
                "636dc7e265"
              ],
              "status": "done",
              "evidence": "git 636dc7e"
            },
            {
              "v": "26597b9",
              "date": "10-30",
              "group": "2026-10",
              "lane": "other",
              "title": "probe: add usage-record requirement section",
              "items": [
                "Rushiera",
                "26597b91e2"
              ],
              "status": "done",
              "evidence": "git 26597b9"
            },
            {
              "v": "2c32b41",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "v0.65 前置轮：文档漂移侦察 + 阀门实测基线 + cos-t5 六线派活卡（Q-002，未派）",
              "items": [
                "Rushiera",
                "2c32b41dac"
              ],
              "status": "done",
              "evidence": "git 2c32b41"
            },
            {
              "v": "78c3691",
              "date": "10-31",
              "group": "2026-10",
              "lane": "other",
              "title": "cos-t6 v1.1: 派活前复核订正三处前提 + 报告索引同步",
              "items": [
                "Rushiera",
                "78c3691b43"
              ],
              "status": "done",
              "evidence": "git 78c3691"
            }
          ]
        }
      ]
    }
  ]
};
