window.ARCH = {
  "meta": {
    "project": "Livo",
    "title": "Livo 提交时间线",
    "sub": "22 次提交 · 2026-11 → 2026-11",
    "ver": "5b6336e",
    "updated": "2026-11-11",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\localGit\\Livo",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\localGit\\Livo (branch master)"
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
              "v": "0fb6dda",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.11: R4b moc3 语义层——IR 写出 v1/v3 moc3，官方 Core 加载通过",
              "items": [
                "Rushiera",
                "0fb6dda7d3"
              ],
              "status": "done",
              "evidence": "git 0fb6dda"
            },
            {
              "v": "fdaa1f4",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.14: IR v2 keyform + moc3 multi-key + channel contract",
              "items": [
                "Rushiera",
                "fdaa1f46c4"
              ],
              "status": "done",
              "evidence": "git fdaa1f4"
            },
            {
              "v": "54dd7c8",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.17: 通道P0P1+变形器攻坚第二轮（数据侧验证通过，口径待对照）",
              "items": [
                "Rushiera",
                "54dd7c8136"
              ],
              "status": "done",
              "evidence": "git 54dd7c8"
            },
            {
              "v": "abe68f1",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.18: 变形器坐标口径定标（根 warp / rotation）",
              "items": [
                "Rushiera",
                "abe68f1539"
              ],
              "status": "done",
              "evidence": "git abe68f1"
            },
            {
              "v": "859d1e6",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.19: warp 链嵌套定标 + 子矩形 warp 口径修正",
              "items": [
                "Rushiera",
                "859d1e6d54"
              ],
              "status": "done",
              "evidence": "git 859d1e6"
            },
            {
              "v": "3b60644",
              "date": "11-10",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.20: 嵌套 rotation 定标（rot 带 parent / warp 挂 rot 放出）",
              "items": [
                "Rushiera",
                "3b606442aa"
              ],
              "status": "done",
              "evidence": "git 3b60644"
            },
            {
              "v": "4e1ac1c",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.21: R4b-3 真机渲染验收 + 放置策略拍板 A",
              "items": [
                "Rushiera",
                "4e1ac1cbfe"
              ],
              "status": "done",
              "evidence": "git 4e1ac1c"
            },
            {
              "v": "372d887",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.25: R8 Layout + R6 Spine keyform + A2 + R7 lsct",
              "items": [
                "Rushiera",
                "372d887b08"
              ],
              "status": "done",
              "evidence": "git 372d887"
            },
            {
              "v": "ceda092",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.26: PSB (version=2) 读取支持",
              "items": [
                "Rushiera",
                "ceda0927b1"
              ],
              "status": "done",
              "evidence": "git ceda092"
            },
            {
              "v": "547aa86",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.28: PSD 蒙版读取 + channel 端序修复",
              "items": [
                "Rushiera",
                "547aa86a3d"
              ],
              "status": "done",
              "evidence": "git 547aa86"
            },
            {
              "v": "2951251",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.29: 蒙版落地 B——IR v4 masks[] + 导出期烘焙 + 三 op",
              "items": [
                "Rushiera",
                "2951251c14"
              ],
              "status": "done",
              "evidence": "git 2951251"
            },
            {
              "v": "852039f",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.30: IR v5 骨骼与顶点权重 + Spine 骨骼层级 / 加权 mesh",
              "items": [
                "Rushiera",
                "852039f1e4"
              ],
              "status": "done",
              "evidence": "git 852039f"
            },
            {
              "v": "a44ec2f",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.32: 自动绑定最小闭环（净室）",
              "items": [
                "Rushiera",
                "a44ec2fd95"
              ],
              "status": "done",
              "evidence": "git a44ec2f"
            },
            {
              "v": "f7acbf3",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.33: 图集紧致裁剪+旋转 / 矢量蒙版4x4超采样",
              "items": [
                "Rushiera",
                "f7acbf3de0"
              ],
              "status": "done",
              "evidence": "git f7acbf3"
            },
            {
              "v": "1910c70",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.34: 混合烘焙 bake-blend / real mask channel -3 / 图集 POT+多页",
              "items": [
                "Rushiera",
                "1910c701ed"
              ],
              "status": "done",
              "evidence": "git 1910c70"
            },
            {
              "v": "40114d2",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "0.35: 层组混合烘焙（组缓冲 → 整组混合 → 折回子层）+ 三层叠加样本与逐层对账",
              "items": [
                "Rushiera",
                "40114d2062"
              ],
              "status": "done",
              "evidence": "git 40114d2"
            },
            {
              "v": "5db3836",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.36: R7 边界收口（组内子层 / 嵌套组混合专项对账）",
              "items": [
                "Rushiera",
                "5db3836ce0"
              ],
              "status": "done",
              "evidence": "git 5db3836"
            },
            {
              "v": "50ca9d4",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.37: IR v7 物理设置 + Spine physics constraints",
              "items": [
                "Rushiera",
                "50ca9d4142"
              ],
              "status": "done",
              "evidence": "git 50ca9d4"
            },
            {
              "v": "f100796",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.40: IR v8 physics.cubism + physics3.json 导出 + 官方 Demo 参数响应验收",
              "items": [
                "Rushiera",
                "f100796651"
              ],
              "status": "done",
              "evidence": "git f100796"
            },
            {
              "v": "701895c",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.43 S1: 动画 IR v9 双栈结构 + 不变量 44-55 + 两条样例",
              "items": [
                "Rushiera",
                "701895c7d3"
              ],
              "status": "done",
              "evidence": "git 701895c"
            },
            {
              "v": "9e05efb",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.44: P2 S2 motion3 导出 + model3.json Motions 接线",
              "items": [
                "Rushiera",
                "9e05efb78f"
              ],
              "status": "done",
              "evidence": "git 9e05efb"
            },
            {
              "v": "5b6336e",
              "date": "11-11",
              "group": "2026-11",
              "lane": "other",
              "title": "v0.45: S3 Spine animations 导出",
              "items": [
                "Rushiera",
                "5b6336e78c"
              ],
              "status": "done",
              "evidence": "git 5b6336e"
            }
          ]
        }
      ]
    }
  ]
};
