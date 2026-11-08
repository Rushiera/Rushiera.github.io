window.ARCH = {
  "meta": {
    "project": "ECC",
    "title": "ECC 提交时间线",
    "sub": "最近 1500 / 共 4321 次提交 · 2026-07 → 2026-10",
    "ver": "b38be6a7",
    "updated": "2026-11-08",
    "contract": {
      "views": [
        "git"
      ]
    },
    "repo": "D:\\Mau\\WorkSpace\\tools\\ECC\\raw",
    "sources": [
      {
        "label": "数据源：git log（--reverse，含提交人）",
        "path": "D:\\Mau\\WorkSpace\\tools\\ECC\\raw (branch main)"
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
          "note": "这是机械生成的视图——不写判断，只搬 git log。样本：最近 1500 次，仓库共 4321 次（生成时 --max 截断，不是全史）。要读「做了什么」看标题；要看「改了哪些文件」点开行看 evidence 里的提交号。",
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
              "v": "39450c9b",
              "date": "07-29",
              "group": "2026-07",
              "lane": "fix",
              "title": "fix(agents): list files the sanitizer cannot read",
              "items": [
                "D. Michael Piscitelli",
                "39450c9be2"
              ],
              "status": "done",
              "evidence": "git 39450c9b"
            },
            {
              "v": "241b4b53",
              "date": "08-10",
              "group": "2026-08",
              "lane": "fix",
              "title": "fix(gateguard): cap session fact-force denials",
              "items": [
                "Suliman Abdulrazzaq",
                "241b4b535b"
              ],
              "status": "done",
              "evidence": "git 241b4b53"
            },
            {
              "v": "072e4684",
              "date": "08-21",
              "group": "2026-08",
              "lane": "fix",
              "title": "fix(rules): stop prescribing JS casing for every language in common/",
              "items": [
                "Ralf Penka",
                "072e468430"
              ],
              "status": "done",
              "evidence": "git 072e4684"
            },
            {
              "v": "4fc950c4",
              "date": "09-01",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(deps): bump lru to 0.18.2 to patch RUSTSEC-2026-0253",
              "items": [
                "aeonframework",
                "4fc950c462"
              ],
              "status": "done",
              "evidence": "git 4fc950c4"
            },
            {
              "v": "a0ecb793",
              "date": "09-02",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(rules): keep common naming guidance language-neutral",
              "items": [
                "haelyra",
                "a0ecb7939a"
              ],
              "status": "done",
              "evidence": "git a0ecb793"
            },
            {
              "v": "013ed0a8",
              "date": "09-02",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(rules): make Boolean naming guidance neutral",
              "items": [
                "haelyra",
                "013ed0a8e6"
              ],
              "status": "done",
              "evidence": "git 013ed0a8"
            },
            {
              "v": "6bf219c3",
              "date": "09-05",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(skills): add conventional-commit-review skill and commit-reviewer agent",
              "items": [
                "Max Beitan",
                "6bf219c33a"
              ],
              "status": "done",
              "evidence": "git 6bf219c3"
            },
            {
              "v": "5e3863e5",
              "date": "09-06",
              "group": "2026-09",
              "lane": "other",
              "title": "perf: avoid duplicate skill file reads",
              "items": [
                "Darwin Pardave",
                "5e3863e512"
              ],
              "status": "done",
              "evidence": "git 5e3863e5"
            },
            {
              "v": "380f4b35",
              "date": "09-07",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(memory-mcp): accept the reserved _meta param on ping",
              "items": [
                "Nguyen Thanh Dat",
                "380f4b35db"
              ],
              "status": "done",
              "evidence": "git 380f4b35"
            },
            {
              "v": "22d7ed51",
              "date": "09-08",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(github-ops): don't instruct auto-merge of dependency bumps",
              "items": [
                "luxury-sketch",
                "22d7ed5137"
              ],
              "status": "done",
              "evidence": "git 22d7ed51"
            },
            {
              "v": "c837459e",
              "date": "09-08",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(skills): add agent security hardening",
              "items": [
                "vam",
                "c837459e0a"
              ],
              "status": "done",
              "evidence": "git c837459e"
            },
            {
              "v": "3f3566fa",
              "date": "09-08",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skills): use configured agent ID limits",
              "items": [
                "vam",
                "3f3566fa11"
              ],
              "status": "done",
              "evidence": "git 3f3566fa"
            },
            {
              "v": "3eb0eefb",
              "date": "09-08",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skills): harden action and redirect boundaries",
              "items": [
                "vam",
                "3eb0eefbb3"
              ],
              "status": "done",
              "evidence": "git 3eb0eefb"
            },
            {
              "v": "30e403b9",
              "date": "09-08",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skills): prevent option-shaped agent IDs",
              "items": [
                "vam",
                "30e403b9bc"
              ],
              "status": "done",
              "evidence": "git 30e403b9"
            },
            {
              "v": "6b1fd318",
              "date": "09-08",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skills): enforce issue-defined agent ID cap",
              "items": [
                "vam",
                "6b1fd318ce"
              ],
              "status": "done",
              "evidence": "git 6b1fd318"
            },
            {
              "v": "d3af582b",
              "date": "09-09",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: handle Windows settings file identity",
              "items": [
                "Dante",
                "d3af582bad"
              ],
              "status": "done",
              "evidence": "git d3af582b"
            },
            {
              "v": "f6501eee",
              "date": "09-09",
              "group": "2026-09",
              "lane": "test",
              "title": "test: cover Windows settings identity races",
              "items": [
                "Dante",
                "f6501eeeac"
              ],
              "status": "done",
              "evidence": "git f6501eee"
            },
            {
              "v": "928c1dea",
              "date": "09-10",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(tasteforge): package reusable workflows and preserve native edits (#3033)",
              "items": [
                "Affaan Mustafa",
                "928c1dea72"
              ],
              "status": "done",
              "evidence": "git 928c1dea"
            },
            {
              "v": "f81b43b3",
              "date": "09-10",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: synchronize README skill tree count",
              "items": [
                "haelyra",
                "f81b43b38d"
              ],
              "status": "done",
              "evidence": "git f81b43b3"
            },
            {
              "v": "678c6dea",
              "date": "09-10",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(github-ops): synchronize localized merge authority",
              "items": [
                "haelyra",
                "678c6dea19"
              ],
              "status": "done",
              "evidence": "git 678c6dea"
            },
            {
              "v": "2ae86b4f",
              "date": "09-10",
              "group": "2026-09",
              "lane": "test",
              "title": "test(github-ops): report locale policy failures",
              "items": [
                "haelyra",
                "2ae86b4fcf"
              ],
              "status": "done",
              "evidence": "git 2ae86b4f"
            },
            {
              "v": "e2a69ff5",
              "date": "09-10",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): fail closed on unmodelled wrapper options and past the nesting limit",
              "items": [
                "L4XB",
                "e2a69ff5df"
              ],
              "status": "done",
              "evidence": "git e2a69ff5"
            },
            {
              "v": "c9148d0b",
              "date": "09-10",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3071 from haelyra/maint/stewardship-batch-2026-09-10",
              "items": [
                "haelyra",
                "c9148d0bb2"
              ],
              "status": "done",
              "evidence": "git c9148d0b"
            },
            {
              "v": "daadb579",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(ecc2): stream dashboard output with a DB cursor",
              "items": [
                "wellkilo",
                "daadb57963"
              ],
              "status": "done",
              "evidence": "git daadb579"
            },
            {
              "v": "8cd85213",
              "date": "09-11",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ecc2): bound output cursor recovery",
              "items": [
                "wellkilo",
                "8cd852136f"
              ],
              "status": "done",
              "evidence": "git 8cd85213"
            },
            {
              "v": "ded28b7d",
              "date": "09-11",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ecc2): address output cursor review",
              "items": [
                "wellkilo",
                "ded28b7d22"
              ],
              "status": "done",
              "evidence": "git ded28b7d"
            },
            {
              "v": "2d2fa295",
              "date": "09-11",
              "group": "2026-09",
              "lane": "test",
              "title": "test(install): allow slower Windows CI process startup",
              "items": [
                "dajiaohuang",
                "2d2fa295b2"
              ],
              "status": "done",
              "evidence": "git 2d2fa295"
            },
            {
              "v": "3a9c2b25",
              "date": "09-11",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ci): sync cross-harness catalog counts",
              "items": [
                "dajiaohuang",
                "3a9c2b2589"
              ],
              "status": "done",
              "evidence": "git 3a9c2b25"
            },
            {
              "v": "03ca6c39",
              "date": "09-11",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(governance): validate inline ADR successors",
              "items": [
                "Seekers2001",
                "03ca6c39e0"
              ],
              "status": "done",
              "evidence": "git 03ca6c39"
            },
            {
              "v": "07668cb7",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/main' into fix-pr-2943-shortcut-reference",
              "items": [
                "Seekers2001",
                "07668cb767"
              ],
              "status": "done",
              "evidence": "git 07668cb7"
            },
            {
              "v": "f3b423c4",
              "date": "09-11",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: update DevScratchpad description with AGENTS.md specs and 13 formats",
              "items": [
                "M Saad",
                "f3b423c4b3"
              ],
              "status": "done",
              "evidence": "git f3b423c4"
            },
            {
              "v": "882fbc01",
              "date": "09-11",
              "group": "2026-09",
              "lane": "other",
              "title": "merge: sync origin/main into Cursor hook dispatchers",
              "items": [
                "wellkilo",
                "882fbc018d"
              ],
              "status": "done",
              "evidence": "git 882fbc01"
            },
            {
              "v": "95b9fe15",
              "date": "09-11",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(rails-patterns): add Rails framework patterns skill (#3074)",
              "items": [
                "Rockwell Windsor Rice",
                "95b9fe157f"
              ],
              "status": "done",
              "evidence": "git 95b9fe15"
            },
            {
              "v": "4f373874",
              "date": "09-11",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): block-no-verify handles stuck optional values and long-option prefixes (#3073)",
              "items": [
                "Zaal",
                "4f37387420"
              ],
              "status": "done",
              "evidence": "git 4f373874"
            },
            {
              "v": "fba8e352",
              "date": "09-11",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(mcp): add serply-search server catalog entry (#3085)",
              "items": [
                "Serply",
                "fba8e352cc"
              ],
              "status": "done",
              "evidence": "git fba8e352"
            },
            {
              "v": "1ac07903",
              "date": "09-11",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): keep hooks.json within Claude Code's schema",
              "items": [
                "zpearce-2814",
                "1ac07903ec"
              ],
              "status": "done",
              "evidence": "git 1ac07903"
            },
            {
              "v": "3033436d",
              "date": "09-12",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: filter epic sync issues by label (#3089)",
              "items": [
                "Wu Shuwen",
                "3033436dcc"
              ],
              "status": "done",
              "evidence": "git 3033436d"
            },
            {
              "v": "2083c983",
              "date": "09-12",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): support Windows linter paths and ESLint 9 (#3076)",
              "items": [
                "Dante",
                "2083c9839a"
              ],
              "status": "done",
              "evidence": "git 2083c983"
            },
            {
              "v": "bdf92d8f",
              "date": "09-12",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: add explicit hook consent to OpenCode install command (#3080)",
              "items": [
                "Radosław Kaznowski",
                "bdf92d8fab"
              ],
              "status": "done",
              "evidence": "git bdf92d8f"
            },
            {
              "v": "c4904e3f",
              "date": "09-12",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(catalog): remove Serply and Squish entries (#3094)",
              "items": [
                "Affaan Mustafa",
                "c4904e3f63"
              ],
              "status": "done",
              "evidence": "git c4904e3f"
            },
            {
              "v": "1ed03ecf",
              "date": "09-12",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(control-pane): live control-plane view with 2D projection and static-threshold advisories",
              "items": [
                "Affaan Mustafa",
                "1ed03ecf2e"
              ],
              "status": "done",
              "evidence": "git 1ed03ecf"
            },
            {
              "v": "ab1f1a09",
              "date": "09-12",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat: group verified capsules into offline retrospective reports",
              "items": [
                "Affaan Mustafa",
                "ab1f1a09ba"
              ],
              "status": "done",
              "evidence": "git ab1f1a09"
            },
            {
              "v": "4da6ae22",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/main' into fix-pr-2943-shortcut-reference",
              "items": [
                "Seekers2001",
                "4da6ae22ec"
              ],
              "status": "done",
              "evidence": "git 4da6ae22"
            },
            {
              "v": "b6ddd13a",
              "date": "09-12",
              "group": "2026-09",
              "lane": "fix",
              "title": "Fix/rails patterns followups",
              "items": [
                "Rockwell Windsor Rice",
                "b6ddd13a9f"
              ],
              "status": "done",
              "evidence": "git b6ddd13a"
            },
            {
              "v": "a47327d9",
              "date": "09-12",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(governance): harden ADR audit boundaries",
              "items": [
                "Seekers2001",
                "a47327d998"
              ],
              "status": "done",
              "evidence": "git a47327d9"
            },
            {
              "v": "26c9db4e",
              "date": "09-12",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/main' into fix-pr-2943-shortcut-reference",
              "items": [
                "Seekers2001",
                "26c9db4e7e"
              ],
              "status": "done",
              "evidence": "git 26c9db4e"
            },
            {
              "v": "90ef62cb",
              "date": "09-12",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(memory): distinguish incomplete reads from missing records",
              "items": [
                "Affaan Mustafa",
                "90ef62cb1d"
              ],
              "status": "done",
              "evidence": "git 90ef62cb"
            },
            {
              "v": "03b44fe5",
              "date": "09-12",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: add oxlint complexity rule and ratchet ceiling for JS/TS",
              "items": [
                "Gabriel Abreu",
                "03b44fe5a2"
              ],
              "status": "done",
              "evidence": "git 03b44fe5"
            },
            {
              "v": "8321021c",
              "date": "09-12",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(memory): classify directory traversal failures",
              "items": [
                "Affaan Mustafa",
                "8321021c54"
              ],
              "status": "done",
              "evidence": "git 8321021c"
            },
            {
              "v": "6c97fab5",
              "date": "09-13",
              "group": "2026-09",
              "lane": "other",
              "title": "merge: sync Hookify runtime with main",
              "items": [
                "wellkilo",
                "6c97fab57e"
              ],
              "status": "done",
              "evidence": "git 6c97fab5"
            },
            {
              "v": "e1805d7d",
              "date": "09-13",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(metrics): cache cumulative session costs",
              "items": [
                "wellkilo",
                "e1805d7deb"
              ],
              "status": "done",
              "evidence": "git e1805d7d"
            },
            {
              "v": "afa5651e",
              "date": "09-13",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skills): avoid a literal $1 placeholder in the security-review sql example",
              "items": [
                "Cedrick Cantero",
                "afa5651e9f"
              ],
              "status": "done",
              "evidence": "git afa5651e"
            },
            {
              "v": "1b12e19c",
              "date": "09-13",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(metrics): address incremental snapshot review",
              "items": [
                "wellkilo",
                "1b12e19c63"
              ],
              "status": "done",
              "evidence": "git 1b12e19c"
            },
            {
              "v": "c2405149",
              "date": "09-13",
              "group": "2026-09",
              "lane": "test",
              "title": "test(metrics): make snapshot mode assertion portable",
              "items": [
                "wellkilo",
                "c2405149f7"
              ],
              "status": "done",
              "evidence": "git c2405149"
            },
            {
              "v": "987c1e10",
              "date": "09-13",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(metrics): bound incremental snapshot recovery",
              "items": [
                "wellkilo",
                "987c1e103f"
              ],
              "status": "done",
              "evidence": "git 987c1e10"
            },
            {
              "v": "e9302928",
              "date": "09-13",
              "group": "2026-09",
              "lane": "test",
              "title": "test(metrics): isolate snapshot read byte accounting",
              "items": [
                "wellkilo",
                "e9302928d0"
              ],
              "status": "done",
              "evidence": "git e9302928"
            },
            {
              "v": "76329557",
              "date": "09-13",
              "group": "2026-09",
              "lane": "test",
              "title": "test(metrics): derive oversized fixture from scan cap",
              "items": [
                "wellkilo",
                "76329557c4"
              ],
              "status": "done",
              "evidence": "git 76329557"
            },
            {
              "v": "94738197",
              "date": "09-13",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'upstream/main' into fix-pr-2943-sync-20260913",
              "items": [
                "Seekers2001",
                "9473819759"
              ],
              "status": "done",
              "evidence": "git 94738197"
            },
            {
              "v": "e306b8bc",
              "date": "09-13",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(governance): require ADR successor",
              "items": [
                "Seekers2001",
                "e306b8bc69"
              ],
              "status": "done",
              "evidence": "git e306b8bc"
            },
            {
              "v": "97ba8b05",
              "date": "09-13",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(plankton-code-quality): address oxlint review findings",
              "items": [
                "Gabriel Abreu",
                "97ba8b05ab"
              ],
              "status": "done",
              "evidence": "git 97ba8b05"
            },
            {
              "v": "f719f5c3",
              "date": "09-13",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(memory-mcp): accept metadata on initialized notifications",
              "items": [
                "Fibilişim",
                "f719f5c37b"
              ],
              "status": "done",
              "evidence": "git f719f5c3"
            },
            {
              "v": "ef475c79",
              "date": "09-14",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: resolve OpenCode source imports and installed skills paths",
              "items": [
                "Yusuf Efe",
                "ef475c7997"
              ],
              "status": "done",
              "evidence": "git ef475c79"
            },
            {
              "v": "c62f5a9c",
              "date": "09-14",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore(deps): bump the actions-minor-and-patch group with 2 updates",
              "items": [
                "dependabot[bot]",
                "c62f5a9cb7"
              ],
              "status": "done",
              "evidence": "git c62f5a9c"
            },
            {
              "v": "cacecada",
              "date": "09-14",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore(deps): bump the cargo-minor-and-patch group across 1 directory with 3 updates",
              "items": [
                "dependabot[bot]",
                "cacecada15"
              ],
              "status": "done",
              "evidence": "git cacecada"
            },
            {
              "v": "1b9d599a",
              "date": "09-14",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): keep home targets target-safe",
              "items": [
                "Dante",
                "1b9d599aab"
              ],
              "status": "done",
              "evidence": "git 1b9d599a"
            },
            {
              "v": "8e641003",
              "date": "09-14",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): clean legacy home agents state",
              "items": [
                "Dante",
                "8e641003ba"
              ],
              "status": "done",
              "evidence": "git 8e641003"
            },
            {
              "v": "27667bc7",
              "date": "09-14",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(security): harden worker approval, hook traversal, MCP exec, install scripts, git hooks",
              "items": [
                "Geronimo",
                "27667bc746"
              ],
              "status": "done",
              "evidence": "git 27667bc7"
            },
            {
              "v": "3e72db8a",
              "date": "09-14",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(i18n): add Polish localization scout",
              "items": [
                "Dante",
                "3e72db8aa5"
              ],
              "status": "done",
              "evidence": "git 3e72db8a"
            },
            {
              "v": "a3c24818",
              "date": "09-14",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(security): provider error taxonomy, tool leak hardening, hook gate, atomic cleanup",
              "items": [
                "Geronimo",
                "a3c24818bb"
              ],
              "status": "done",
              "evidence": "git a3c24818"
            },
            {
              "v": "92f5e720",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #1 from VarunGore36/fix/security-critical-hardening",
              "items": [
                "Varun Gore",
                "92f5e720e9"
              ],
              "status": "done",
              "evidence": "git 92f5e720"
            },
            {
              "v": "b336b01d",
              "date": "09-14",
              "group": "2026-09",
              "lane": "test",
              "title": "test(hooks): tolerate slower CI startup",
              "items": [
                "Dante",
                "b336b01df6"
              ],
              "status": "done",
              "evidence": "git b336b01d"
            },
            {
              "v": "071f2dbd",
              "date": "09-14",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(i18n): clarify Polish module scope",
              "items": [
                "Dante",
                "071f2dbd28"
              ],
              "status": "done",
              "evidence": "git 071f2dbd"
            },
            {
              "v": "89c2bf4e",
              "date": "09-14",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(llm): require an SDK that supports provider initialization",
              "items": [
                "kapelame",
                "89c2bf4e40"
              ],
              "status": "done",
              "evidence": "git 89c2bf4e"
            },
            {
              "v": "5929d246",
              "date": "09-14",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(opencode): write hook results through the output contract",
              "items": [
                "kapelame",
                "5929d24694"
              ],
              "status": "done",
              "evidence": "git 5929d246"
            },
            {
              "v": "15f1ee8a",
              "date": "09-14",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(claw,executor): restore Windows shim launch, close stray coroutine",
              "items": [
                "Geronimo",
                "15f1ee8a41"
              ],
              "status": "done",
              "evidence": "git 15f1ee8a"
            },
            {
              "v": "cb13c074",
              "date": "09-14",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #2 from VarunGore36/fix/claw-windows-exec-regression",
              "items": [
                "Varun Gore",
                "cb13c07464"
              ],
              "status": "done",
              "evidence": "git cb13c074"
            },
            {
              "v": "c5bbee3c",
              "date": "09-14",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(worker,installer,claw): correct approval flag, installer order, percent path hardening",
              "items": [
                "Geronimo",
                "c5bbee3cb8"
              ],
              "status": "done",
              "evidence": "git c5bbee3c"
            },
            {
              "v": "fb8c36f6",
              "date": "09-15",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #4 from VarunGore36/fix/reviewer-followups",
              "items": [
                "Varun Gore",
                "fb8c36f6cc"
              ],
              "status": "done",
              "evidence": "git fb8c36f6"
            },
            {
              "v": "d5dee313",
              "date": "09-15",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(security): stderr skip, independent audit, home MCP trust, dry-run conflict check",
              "items": [
                "Geronimo",
                "d5dee31321"
              ],
              "status": "done",
              "evidence": "git d5dee313"
            },
            {
              "v": "3734f6cb",
              "date": "09-15",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat: add passive TCAS shadow receipts",
              "items": [
                "Affaan Mustafa",
                "3734f6cb3a"
              ],
              "status": "done",
              "evidence": "git 3734f6cb"
            },
            {
              "v": "c0ee7477",
              "date": "09-15",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: preserve edited Codex user configuration",
              "items": [
                "Yann Roberto",
                "c0ee747789"
              ],
              "status": "done",
              "evidence": "git c0ee7477"
            },
            {
              "v": "08094a34",
              "date": "09-15",
              "group": "2026-09",
              "lane": "test",
              "title": "test: require preserved Codex ledger entries",
              "items": [
                "Yann Roberto",
                "08094a34f9"
              ],
              "status": "done",
              "evidence": "git 08094a34"
            },
            {
              "v": "2cdc218c",
              "date": "09-15",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(opencode): preserve ECC guidance in custom compaction prompts",
              "items": [
                "kapelame",
                "2cdc218c45"
              ],
              "status": "done",
              "evidence": "git 2cdc218c"
            },
            {
              "v": "e65f12bf",
              "date": "09-15",
              "group": "2026-09",
              "lane": "chore",
              "title": "release: ecc-universal 2.2.2",
              "items": [
                "Affaan Mustafa",
                "e65f12bf7e"
              ],
              "status": "done",
              "evidence": "git e65f12bf"
            },
            {
              "v": "e3afc47a",
              "date": "09-15",
              "group": "2026-09",
              "lane": "test",
              "title": "test: align release expectations with version and OpenCode dist",
              "items": [
                "Affaan Mustafa",
                "e3afc47a8b"
              ],
              "status": "done",
              "evidence": "git e3afc47a"
            },
            {
              "v": "48acd64a",
              "date": "09-15",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(pi): recognize @scope/pi-subagents in /ecc-doctor companion check",
              "items": [
                "ECC Agent",
                "48acd64ae6"
              ],
              "status": "done",
              "evidence": "git 48acd64a"
            },
            {
              "v": "ef0a487e",
              "date": "09-16",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): validate the denial cap as a whole integer",
              "items": [
                "SulimanAbdulrazzaq",
                "ef0a487edd"
              ],
              "status": "done",
              "evidence": "git ef0a487e"
            },
            {
              "v": "e404468a",
              "date": "09-16",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: correct agent location and add ecc: prefix to agent names in rules",
              "items": [
                "yashraj4",
                "e404468a62"
              ],
              "status": "done",
              "evidence": "git e404468a"
            },
            {
              "v": "6502cf24",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(llm): forward max_tokens to Ollama num_predict",
              "items": [
                "Aniruddha Adak",
                "6502cf24bf"
              ],
              "status": "done",
              "evidence": "git 6502cf24"
            },
            {
              "v": "a0283ac5",
              "date": "09-17",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: add lane rules and Ito desk relationship notes (2026-09-16)",
              "items": [
                "Affaan Mustafa",
                "a0283ac561"
              ],
              "status": "done",
              "evidence": "git a0283ac5"
            },
            {
              "v": "f70e5c1c",
              "date": "09-17",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore: merge main and address outstanding review feedback",
              "items": [
                "Md. Kishor Morol",
                "f70e5c1c47"
              ],
              "status": "done",
              "evidence": "git f70e5c1c"
            },
            {
              "v": "bcb23704",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): accept --locale bn",
              "items": [
                "Md. Kishor Morol",
                "bcb23704a8"
              ],
              "status": "done",
              "evidence": "git bcb23704"
            },
            {
              "v": "6f967dce",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(bengali): version-safe collation check, accurate \\w guidance",
              "items": [
                "Md. Kishor Morol",
                "6f967dcee4"
              ],
              "status": "done",
              "evidence": "git 6f967dce"
            },
            {
              "v": "bc464fd4",
              "date": "09-17",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore: restore yarn.lock from main",
              "items": [
                "Suliman Abdulrazzaq",
                "bc464fd42c"
              ],
              "status": "done",
              "evidence": "git bc464fd4"
            },
            {
              "v": "09c8069f",
              "date": "09-17",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): note that the denial cap also covers MultiEdit",
              "items": [
                "Suliman Abdulrazzaq",
                "09c8069fb0"
              ],
              "status": "done",
              "evidence": "git 09c8069f"
            },
            {
              "v": "32d0201b",
              "date": "09-17",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): say when the denial cap starts allowing new paths",
              "items": [
                "Suliman Abdulrazzaq",
                "32d0201b53"
              ],
              "status": "done",
              "evidence": "git 32d0201b"
            },
            {
              "v": "946b8019",
              "date": "09-17",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat: add /astra-review cross-provider code review via Codex CLI",
              "items": [
                "kenima-arc",
                "946b80198f"
              ],
              "status": "done",
              "evidence": "git 946b8019"
            },
            {
              "v": "4018d3dc",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(astra-review): harden report writing and make tests portable",
              "items": [
                "kenima-arc",
                "4018d3dc56"
              ],
              "status": "done",
              "evidence": "git 4018d3dc"
            },
            {
              "v": "ab53d626",
              "date": "09-17",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): note the denial cap is best effort under concurrent hooks",
              "items": [
                "Suliman Abdulrazzaq",
                "ab53d62604"
              ],
              "status": "done",
              "evidence": "git ab53d626"
            },
            {
              "v": "bb1c58a3",
              "date": "09-17",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: Add SerpApi as a sponsor (#3155)",
              "items": [
                "Jasir Zaeem",
                "bb1c58a350"
              ],
              "status": "done",
              "evidence": "git bb1c58a3"
            },
            {
              "v": "15cd6ff5",
              "date": "09-17",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: archive Atlas Cloud sponsorship",
              "items": [
                "Affaan Mustafa",
                "15cd6ff506"
              ],
              "status": "done",
              "evidence": "git 15cd6ff5"
            },
            {
              "v": "7cfc9b36",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): ignore heredoc prose for tee and path-qualified sinks (#2886)",
              "items": [
                "Frank_zhu",
                "7cfc9b3608"
              ],
              "status": "done",
              "evidence": "git 7cfc9b36"
            },
            {
              "v": "dd6ee538",
              "date": "09-17",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3156 from affaan-m/fix/sponsor-status-20260917",
              "items": [
                "Affaan Mustafa",
                "dd6ee538ae"
              ],
              "status": "done",
              "evidence": "git dd6ee538"
            },
            {
              "v": "fc6fe5e5",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): pre-push skipped every Python project that uses a virtualenv",
              "items": [
                "Juan Garibay",
                "fc6fe5e5df"
              ],
              "status": "done",
              "evidence": "git fc6fe5e5"
            },
            {
              "v": "5cbe78c2",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): keep venv paths intact and check every pytest candidate",
              "items": [
                "Juan Garibay",
                "5cbe78c22b"
              ],
              "status": "done",
              "evidence": "git 5cbe78c2"
            },
            {
              "v": "1f5cd2af",
              "date": "09-17",
              "group": "2026-09",
              "lane": "test",
              "title": "test(hooks): build the pre-push python fixture env without mutation",
              "items": [
                "Juan Garibay",
                "1f5cd2af73"
              ],
              "status": "done",
              "evidence": "git 1f5cd2af"
            },
            {
              "v": "c6195edb",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): stop probing the pytest override, and stop failing on exit 5",
              "items": [
                "Juan Garibay",
                "c6195edb2f"
              ],
              "status": "done",
              "evidence": "git c6195edb"
            },
            {
              "v": "08b173f1",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): a blank ECC_PYTEST_CMD is an override, and say when one is in use",
              "items": [
                "Juan Garibay",
                "08b173f12f"
              ],
              "status": "done",
              "evidence": "git 08b173f1"
            },
            {
              "v": "9cdc40e6",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): do not run a virtualenv interpreter the repository ships",
              "items": [
                "Juan Garibay",
                "9cdc40e6d1"
              ],
              "status": "done",
              "evidence": "git 9cdc40e6"
            },
            {
              "v": "ca1a5ad8",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): name the remedy in the blank-override failure",
              "items": [
                "Juan Garibay",
                "ca1a5ad8bc"
              ],
              "status": "done",
              "evidence": "git ca1a5ad8"
            },
            {
              "v": "3c317470",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): resolve the venv path before asking git whether it is tracked",
              "items": [
                "Juan Garibay",
                "3c31747016"
              ],
              "status": "done",
              "evidence": "git 3c317470"
            },
            {
              "v": "4869db30",
              "date": "09-17",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): match the index case-insensitively, and isolate the pytest probe",
              "items": [
                "Juan Garibay",
                "4869db30c4"
              ],
              "status": "done",
              "evidence": "git 4869db30"
            },
            {
              "v": "f81a375d",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(astra-review): add usage guide in English and Japanese",
              "items": [
                "kenima-arc",
                "f81a375de9"
              ],
              "status": "done",
              "evidence": "git f81a375d"
            },
            {
              "v": "1d143e30",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(ja-JP): refresh Japanese README to match the English README",
              "items": [
                "kenima-arc",
                "1d143e3098"
              ],
              "status": "done",
              "evidence": "git 1d143e30"
            },
            {
              "v": "6e024eb8",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(rules): fix ECC plugin agent location and ecc: prefix",
              "items": [
                "Sharad.",
                "6e024eb881"
              ],
              "status": "done",
              "evidence": "git 6e024eb8"
            },
            {
              "v": "5b4ebcf0",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(astra-review): add day-to-day workflow for a separate project",
              "items": [
                "kenima-arc",
                "5b4ebcf0f9"
              ],
              "status": "done",
              "evidence": "git 5b4ebcf0"
            },
            {
              "v": "fc52d437",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(astra-review): point the workflow at /ecc:tdd-workflow",
              "items": [
                "kenima-arc",
                "fc52d4375d"
              ],
              "status": "done",
              "evidence": "git fc52d437"
            },
            {
              "v": "3155504f",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'upstream/main' into codex/docs-governance-audit-foundation",
              "items": [
                "Seekers2001",
                "3155504f0b"
              ],
              "status": "done",
              "evidence": "git 3155504f"
            },
            {
              "v": "b15f7d81",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(mcp): expose memory auth boundary (#3134)",
              "items": [
                "Affaan Mustafa",
                "b15f7d8171"
              ],
              "status": "done",
              "evidence": "git b15f7d81"
            },
            {
              "v": "ab66f51a",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: repair README badges and live star history",
              "items": [
                "Affaan Mustafa",
                "ab66f51a29"
              ],
              "status": "done",
              "evidence": "git ab66f51a"
            },
            {
              "v": "0a1e0780",
              "date": "09-18",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ci): reconcile catalog validation with current main",
              "items": [
                "affaan-m",
                "0a1e0780d3"
              ],
              "status": "done",
              "evidence": "git 0a1e0780"
            },
            {
              "v": "4be4eb4c",
              "date": "09-18",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): reconcile OpenCode hook consent with current main",
              "items": [
                "affaan-m",
                "4be4eb4cf3"
              ],
              "status": "done",
              "evidence": "git 4be4eb4c"
            },
            {
              "v": "db61d1c7",
              "date": "09-18",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): warn that parallel-batch siblings may already be applied (#3136)",
              "items": [
                "Affaan Mustafa",
                "db61d1c76a"
              ],
              "status": "done",
              "evidence": "git db61d1c7"
            },
            {
              "v": "da214d73",
              "date": "09-18",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: stop home installs copying .agents into ~/.claude and ~/.codex",
              "items": [
                "Affaan Mustafa",
                "da214d73b7"
              ],
              "status": "done",
              "evidence": "git da214d73"
            },
            {
              "v": "34de45f2",
              "date": "09-18",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): enforce loader-documented keys in shipped hooks configs (#3163)",
              "items": [
                "Affaan Mustafa",
                "34de45f210"
              ],
              "status": "done",
              "evidence": "git 34de45f2"
            },
            {
              "v": "1a8beb71",
              "date": "09-18",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(opencode): add resolvable package entry and loadable in-place sources",
              "items": [
                "Affaan Mustafa",
                "1a8beb71c5"
              ],
              "status": "done",
              "evidence": "git 1a8beb71"
            },
            {
              "v": "23634afb",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(i18n): reconcile Polish locale installation guidance",
              "items": [
                "affaan-m",
                "23634afb6c"
              ],
              "status": "done",
              "evidence": "git 23634afb"
            },
            {
              "v": "f0378ccd",
              "date": "09-18",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(tests): feed guided install PTY answers only after each prompt",
              "items": [
                "Affaan Mustafa",
                "f0378ccdb6"
              ],
              "status": "done",
              "evidence": "git f0378ccd"
            },
            {
              "v": "9a19f251",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "merge: retain current hook checks with Polish locale",
              "items": [
                "affaan-m",
                "9a19f251c9"
              ],
              "status": "done",
              "evidence": "git 9a19f251"
            },
            {
              "v": "8cfbc267",
              "date": "09-18",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: reconcile pre-exclusion .agents installs on claude and codex home upgrades",
              "items": [
                "Affaan Mustafa",
                "8cfbc26797"
              ],
              "status": "done",
              "evidence": "git 8cfbc267"
            },
            {
              "v": "c2d4196d",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3167 from affaan-m/fix/opencode-plugin-entry",
              "items": [
                "Affaan Mustafa",
                "c2d4196d8f"
              ],
              "status": "done",
              "evidence": "git c2d4196d"
            },
            {
              "v": "d14cf185",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3166 from affaan-m/fix/ci-node18-test-job",
              "items": [
                "Affaan Mustafa",
                "d14cf18549"
              ],
              "status": "done",
              "evidence": "git d14cf185"
            },
            {
              "v": "c023a8e5",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/3116-home-install-exclusions",
              "items": [
                "Affaan Mustafa",
                "c023a8e5a7"
              ],
              "status": "done",
              "evidence": "git c023a8e5"
            },
            {
              "v": "66462a5b",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/3136-gateguard-batch-consistency",
              "items": [
                "Affaan Mustafa",
                "66462a5bf1"
              ],
              "status": "done",
              "evidence": "git 66462a5b"
            },
            {
              "v": "1bb31dfe",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/prepush-venv-pytest",
              "items": [
                "Affaan Mustafa",
                "1bb31dfeae"
              ],
              "status": "done",
              "evidence": "git 1bb31dfe"
            },
            {
              "v": "f778926f",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/agent-location-docs",
              "items": [
                "Affaan Mustafa",
                "f778926fb6"
              ],
              "status": "done",
              "evidence": "git f778926f"
            },
            {
              "v": "09ae8be2",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/issue-2886-heredoc-gateguard",
              "items": [
                "Affaan Mustafa",
                "09ae8be2bd"
              ],
              "status": "done",
              "evidence": "git 09ae8be2"
            },
            {
              "v": "a10cee99",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into docs/ja-readme-refresh",
              "items": [
                "Affaan Mustafa",
                "a10cee9951"
              ],
              "status": "done",
              "evidence": "git a10cee99"
            },
            {
              "v": "e7e491a9",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/ollama-generation-token-limit",
              "items": [
                "Affaan Mustafa",
                "e7e491a94d"
              ],
              "status": "done",
              "evidence": "git e7e491a9"
            },
            {
              "v": "1a2965f3",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/agent-location-and-namespacing",
              "items": [
                "Affaan Mustafa",
                "1a2965f3b8"
              ],
              "status": "done",
              "evidence": "git 1a2965f3"
            },
            {
              "v": "58540b30",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3165 from affaan-m/fix/3116-home-install-exclusions",
              "items": [
                "Affaan Mustafa",
                "58540b3036"
              ],
              "status": "done",
              "evidence": "git 58540b30"
            },
            {
              "v": "4755a56b",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3164 from affaan-m/fix/3136-gateguard-batch-consistency",
              "items": [
                "Affaan Mustafa",
                "4755a56bc0"
              ],
              "status": "done",
              "evidence": "git 4755a56b"
            },
            {
              "v": "27dbe41b",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3159 from jgaribay01/fix/prepush-venv-pytest",
              "items": [
                "Affaan Mustafa",
                "27dbe41b09"
              ],
              "status": "done",
              "evidence": "git 27dbe41b"
            },
            {
              "v": "63d58990",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3158 from sharadvc/fix/agent-location-docs",
              "items": [
                "Affaan Mustafa",
                "63d589903d"
              ],
              "status": "done",
              "evidence": "git 63d58990"
            },
            {
              "v": "4007e25b",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3157 from Frank-zhu0404/fix/issue-2886-heredoc-gateguard",
              "items": [
                "Affaan Mustafa",
                "4007e25b58"
              ],
              "status": "done",
              "evidence": "git 4007e25b"
            },
            {
              "v": "6715384b",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3153 from kenima-arc/docs/ja-readme-refresh",
              "items": [
                "Affaan Mustafa",
                "6715384bb5"
              ],
              "status": "done",
              "evidence": "git 6715384b"
            },
            {
              "v": "ce7a4847",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3147 from AniruddhaAdak/fix/ollama-generation-token-limit",
              "items": [
                "Affaan Mustafa",
                "ce7a4847ca"
              ],
              "status": "done",
              "evidence": "git ce7a4847"
            },
            {
              "v": "75970dda",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: fix LANE-RULES heading level and drop personal path",
              "items": [
                "Affaan Mustafa",
                "75970dda72"
              ],
              "status": "done",
              "evidence": "git 75970dda"
            },
            {
              "v": "c7e60cc6",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/main' into pr-3146",
              "items": [
                "Affaan Mustafa",
                "c7e60cc6a6"
              ],
              "status": "done",
              "evidence": "git c7e60cc6"
            },
            {
              "v": "07e6b42e",
              "date": "09-18",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: use fenced code blocks in agent rules to satisfy MD046",
              "items": [
                "Affaan Mustafa",
                "07e6b42e5c"
              ],
              "status": "done",
              "evidence": "git 07e6b42e"
            },
            {
              "v": "dde604e7",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3146 from yashraj4/fix/agent-location-and-namespacing",
              "items": [
                "Affaan Mustafa",
                "dde604e75f"
              ],
              "status": "done",
              "evidence": "git dde604e7"
            },
            {
              "v": "2bcba5b6",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into docs/lane-rules-20260916",
              "items": [
                "Affaan Mustafa",
                "2bcba5b66f"
              ],
              "status": "done",
              "evidence": "git 2bcba5b6"
            },
            {
              "v": "10013e8b",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3149 from affaan-m/docs/lane-rules-20260916",
              "items": [
                "Affaan Mustafa",
                "10013e8b63"
              ],
              "status": "done",
              "evidence": "git 10013e8b"
            },
            {
              "v": "522b49a3",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/readme-badges-star-history-20260918",
              "items": [
                "Affaan Mustafa",
                "522b49a3c5"
              ],
              "status": "done",
              "evidence": "git 522b49a3"
            },
            {
              "v": "9e06a279",
              "date": "09-18",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3162 from affaan-m/fix/readme-badges-star-history-20260918",
              "items": [
                "Affaan Mustafa",
                "9e06a2792b"
              ],
              "status": "done",
              "evidence": "git 9e06a279"
            },
            {
              "v": "8bf16ccf",
              "date": "09-19",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): keep silent hook paths silent (#2987)",
              "items": [
                "He Dong",
                "8bf16ccfec"
              ],
              "status": "done",
              "evidence": "git 8bf16ccf"
            },
            {
              "v": "c752aac1",
              "date": "09-19",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore(skills): declare licenses on the Codex skill mirror (#2997)",
              "items": [
                "Çağrı Solakoğlu",
                "c752aac186"
              ],
              "status": "done",
              "evidence": "git c752aac1"
            },
            {
              "v": "8ab8f405",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/main' into bugfix/serialize-openai-tool-calls-20260903t164126z",
              "items": [
                "Iams4kura",
                "8ab8f40567"
              ],
              "status": "done",
              "evidence": "git 8ab8f405"
            },
            {
              "v": "f6eb8004",
              "date": "09-19",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(session-start): scope summary lookup to repository identity (#3160) (#3168)",
              "items": [
                "Affaan Mustafa",
                "f6eb800474"
              ],
              "status": "done",
              "evidence": "git f6eb8004"
            },
            {
              "v": "07756cee",
              "date": "09-19",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): gate ref- and history-destroying git commands (#3154, #3151) (#3170)",
              "items": [
                "Affaan Mustafa",
                "07756cee15"
              ],
              "status": "done",
              "evidence": "git 07756cee"
            },
            {
              "v": "e715751c",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'upstream/main' into codex/docs-governance-audit-foundation",
              "items": [
                "Seekers2001",
                "e715751cf5"
              ],
              "status": "done",
              "evidence": "git e715751c"
            },
            {
              "v": "92f53c4c",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge main into feat/hookify-enforcement-runtime",
              "items": [
                "wellkilo",
                "92f53c4c89"
              ],
              "status": "done",
              "evidence": "git 92f53c4c"
            },
            {
              "v": "b14004f1",
              "date": "09-19",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(continuous-learning-v2): allow sdk-cli entrypoint in observe.sh (#3171)",
              "items": [
                "Frank_zhu",
                "b14004f12f"
              ],
              "status": "done",
              "evidence": "git b14004f1"
            },
            {
              "v": "8abdfde0",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "⚡ feat: add prompt-caching-strategy skill",
              "items": [
                "buleboy",
                "8abdfde0f1"
              ],
              "status": "done",
              "evidence": "git 8abdfde0"
            },
            {
              "v": "08813f49",
              "date": "09-19",
              "group": "2026-09",
              "lane": "test",
              "title": "test(security): Layer-1 observe.sh entrypoint allowlist evidence (#3171)",
              "items": [
                "Frank_zhu",
                "08813f49ff"
              ],
              "status": "done",
              "evidence": "git 08813f49"
            },
            {
              "v": "1e8e3ad0",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3172 from Frank-zhu0404/fix/issue-3171-observe-sdk-cli",
              "items": [
                "Affaan Mustafa",
                "1e8e3ad0ac"
              ],
              "status": "done",
              "evidence": "git 1e8e3ad0"
            },
            {
              "v": "91ba9b4c",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3133 from affaan-m/release/ecc-universal-2.2.2",
              "items": [
                "Affaan Mustafa",
                "91ba9b4cf6"
              ],
              "status": "done",
              "evidence": "git 91ba9b4c"
            },
            {
              "v": "56f68072",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3118 from affaan-m/dependabot/cargo/ecc2/cargo-minor-and-patch-d4c8c185e0",
              "items": [
                "Affaan Mustafa",
                "56f6807274"
              ],
              "status": "done",
              "evidence": "git 56f68072"
            },
            {
              "v": "e030cb49",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3117 from affaan-m/dependabot/github_actions/actions-minor-and-patch-f97e9e776c",
              "items": [
                "Affaan Mustafa",
                "e030cb492a"
              ],
              "status": "done",
              "evidence": "git e030cb49"
            },
            {
              "v": "ada4db11",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3111 from Fibilisim-Tekno/fix/memory-initialized-metadata",
              "items": [
                "Affaan Mustafa",
                "ada4db1157"
              ],
              "status": "done",
              "evidence": "git ada4db11"
            },
            {
              "v": "4ec72291",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3104 from cedrickcantero/fix/security-review-sql-placeholder",
              "items": [
                "Affaan Mustafa",
                "4ec7229146"
              ],
              "status": "done",
              "evidence": "git 4ec72291"
            },
            {
              "v": "0a5207b6",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3102 from wellkilo/perf/metrics-tail-read",
              "items": [
                "Affaan Mustafa",
                "0a5207b6f2"
              ],
              "status": "done",
              "evidence": "git 0a5207b6"
            },
            {
              "v": "f06d4a02",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3064 from wellkilo/feat/dashboard-output-cursor",
              "items": [
                "Affaan Mustafa",
                "f06d4a02d9"
              ],
              "status": "done",
              "evidence": "git f06d4a02"
            },
            {
              "v": "1ec2263b",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3137 from iyertalks/fix/pi-doctor-scoped-companion",
              "items": [
                "Affaan Mustafa",
                "1ec2263b3f"
              ],
              "status": "done",
              "evidence": "git 1ec2263b"
            },
            {
              "v": "b2279eb1",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3130 from shoyann/fix/preserve-codex-user-config",
              "items": [
                "Affaan Mustafa",
                "b2279eb1d7"
              ],
              "status": "done",
              "evidence": "git b2279eb1"
            },
            {
              "v": "a0600a00",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3125 from kapelame/audit/ecc-opencode-output-contract",
              "items": [
                "Affaan Mustafa",
                "a0600a00fb"
              ],
              "status": "done",
              "evidence": "git a0600a00"
            },
            {
              "v": "fc9273e5",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3126 from VarunGore36/fix/reviewer-followups",
              "items": [
                "Affaan Mustafa",
                "fc9273e5e0"
              ],
              "status": "done",
              "evidence": "git fc9273e5"
            },
            {
              "v": "b0e2f26b",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3124 from kapelame/audit/ecc-python-sdk-floor",
              "items": [
                "Affaan Mustafa",
                "b0e2f26b63"
              ],
              "status": "done",
              "evidence": "git b0e2f26b"
            },
            {
              "v": "934195f9",
              "date": "09-19",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3123 from VarunGore36/fix/security-critical-hardening",
              "items": [
                "Affaan Mustafa",
                "934195f955"
              ],
              "status": "done",
              "evidence": "git 934195f9"
            },
            {
              "v": "2d300a19",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge origin/main into feat/2885-agent-security-hardening",
              "items": [
                "vam",
                "2d300a19be"
              ],
              "status": "done",
              "evidence": "git 2d300a19"
            },
            {
              "v": "6c24ccc6",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'upstream/main' into codex/docs-governance-audit-foundation",
              "items": [
                "Seekers2001",
                "6c24ccc642"
              ],
              "status": "done",
              "evidence": "git 6c24ccc6"
            },
            {
              "v": "9d579fbc",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'affaan-m:main' into main",
              "items": [
                "Varun Gore",
                "9d579fbcfa"
              ],
              "status": "done",
              "evidence": "git 9d579fbc"
            },
            {
              "v": "9547e28f",
              "date": "09-20",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/gateguard-session-budget",
              "items": [
                "Suliman Abdulrazzaq",
                "9547e28f61"
              ],
              "status": "done",
              "evidence": "git 9547e28f"
            },
            {
              "v": "5191a908",
              "date": "09-20",
              "group": "2026-09",
              "lane": "refactor",
              "title": "refactor: split install-lifecycle god-module, harden test runner and lint",
              "items": [
                "Geronimo",
                "5191a908d1"
              ],
              "status": "done",
              "evidence": "git 5191a908"
            },
            {
              "v": "731afd23",
              "date": "09-20",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: preserve child process failure in run-all exit count",
              "items": [
                "Geronimo",
                "731afd23c5"
              ],
              "status": "done",
              "evidence": "git 731afd23"
            },
            {
              "v": "0895f0d8",
              "date": "09-20",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(ci): lint skills for Codex-safe frontmatter and Claude substitutions",
              "items": [
                "Cursor Agent",
                "0895f0d8b5"
              ],
              "status": "done",
              "evidence": "git 0895f0d8"
            },
            {
              "v": "d442f5c7",
              "date": "09-20",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ci): skip POSIX $1 assignment in skill host-compat lint",
              "items": [
                "Cursor Agent",
                "d442f5c75e"
              ],
              "status": "done",
              "evidence": "git d442f5c7"
            },
            {
              "v": "9c45149b",
              "date": "09-20",
              "group": "2026-09",
              "lane": "test",
              "title": "test: opt Python pre-push fixtures into ECC_PREPUSH_RUN_CHECKS",
              "items": [
                "Cursor Agent",
                "9c45149bae"
              ],
              "status": "done",
              "evidence": "git 9c45149b"
            },
            {
              "v": "bb8fd645",
              "date": "09-20",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: keep test runner exit behavior compatible with CI",
              "items": [
                "Geronimo",
                "bb8fd64582"
              ],
              "status": "done",
              "evidence": "git bb8fd645"
            },
            {
              "v": "bf6248bc",
              "date": "09-20",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: add ECC_TEST_ALLOW_FAILURES to coverage job too",
              "items": [
                "Geronimo",
                "bf6248bc76"
              ],
              "status": "done",
              "evidence": "git bf6248bc"
            },
            {
              "v": "111387af",
              "date": "09-20",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: fix dead MCP overview link in shortform guide (#3190)",
              "items": [
                "Cocoon-Break",
                "111387afe4"
              ],
              "status": "done",
              "evidence": "git 111387af"
            },
            {
              "v": "9606a741",
              "date": "09-20",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): handle proximity HTTP errors (#3191)",
              "items": [
                "Tamer",
                "9606a741af"
              ],
              "status": "done",
              "evidence": "git 9606a741"
            },
            {
              "v": "651118bd",
              "date": "09-20",
              "group": "2026-09",
              "lane": "fix",
              "title": "Fix/control plane canvas size (#3192)",
              "items": [
                "Tamer",
                "651118bd50"
              ],
              "status": "done",
              "evidence": "git 651118bd"
            },
            {
              "v": "2b6e8397",
              "date": "09-20",
              "group": "2026-09",
              "lane": "fix",
              "title": "Fix/proximity a11y risk cues (#3193)",
              "items": [
                "Tamer",
                "2b6e839771"
              ],
              "status": "done",
              "evidence": "git 2b6e8397"
            },
            {
              "v": "1e4576e6",
              "date": "09-20",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: enforce signed release provenance gates",
              "items": [
                "Viggo Phillips",
                "1e4576e685"
              ],
              "status": "done",
              "evidence": "git 1e4576e6"
            },
            {
              "v": "30069406",
              "date": "09-20",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore: merge main into Bengali integration",
              "items": [
                "Md. Kishor Morol",
                "300694069f"
              ],
              "status": "done",
              "evidence": "git 30069406"
            },
            {
              "v": "95448ad8",
              "date": "09-21",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: isolate Claude project hooks from ESM hosts (#3184)",
              "items": [
                "Eastern",
                "95448ad81d"
              ],
              "status": "done",
              "evidence": "git 95448ad8"
            },
            {
              "v": "9ac593b5",
              "date": "09-21",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(scripts): extract cross-platform openBrowser helper with structured launch result (#3180)",
              "items": [
                "auyua9",
                "9ac593b55c"
              ],
              "status": "done",
              "evidence": "git 9ac593b5"
            },
            {
              "v": "559c295c",
              "date": "09-21",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(skills): add adaptive OSINT investigation toolkit",
              "items": [
                "Yann Roberto",
                "559c295c93"
              ],
              "status": "done",
              "evidence": "git 559c295c"
            },
            {
              "v": "752dca41",
              "date": "09-21",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore(deps): bump dirs from 6.0.0 to 7.0.0 in /ecc2",
              "items": [
                "dependabot[bot]",
                "752dca41e1"
              ],
              "status": "done",
              "evidence": "git 752dca41"
            },
            {
              "v": "181edcdb",
              "date": "09-21",
              "group": "2026-09",
              "lane": "refactor",
              "title": "refactor(skills): make OSINT investigation compact and self-contained",
              "items": [
                "Yann Roberto",
                "181edcdb4a"
              ],
              "status": "done",
              "evidence": "git 181edcdb"
            },
            {
              "v": "ca149d4f",
              "date": "09-21",
              "group": "2026-09",
              "lane": "refactor",
              "title": "refactor(skills): keep OSINT contribution methodology-only",
              "items": [
                "Yann Roberto",
                "ca149d4fb8"
              ],
              "status": "done",
              "evidence": "git ca149d4f"
            },
            {
              "v": "49246f16",
              "date": "09-21",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(skills): broaden OSINT triggers for CTF investigations",
              "items": [
                "Yann Roberto",
                "49246f16ee"
              ],
              "status": "done",
              "evidence": "git 49246f16"
            },
            {
              "v": "2749ccba",
              "date": "09-21",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(skills): emphasize investigation from sparse clues",
              "items": [
                "Yann Roberto",
                "2749ccbaec"
              ],
              "status": "done",
              "evidence": "git 2749ccba"
            },
            {
              "v": "eef7dcee",
              "date": "09-21",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(skills): clarify OSINT workflow and example sections",
              "items": [
                "Yann Roberto",
                "eef7dcee94"
              ],
              "status": "done",
              "evidence": "git eef7dcee"
            },
            {
              "v": "5b05a3f0",
              "date": "09-21",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: address release gate review findings",
              "items": [
                "Viggo Phillips",
                "5b05a3f006"
              ],
              "status": "done",
              "evidence": "git 5b05a3f0"
            },
            {
              "v": "32c10932",
              "date": "09-21",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: accept nullable workflow metadata",
              "items": [
                "Viggo Phillips",
                "32c10932fc"
              ],
              "status": "done",
              "evidence": "git 32c10932"
            },
            {
              "v": "9feabe78",
              "date": "09-21",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'upstream/main' into codex/docs-governance-audit-foundation",
              "items": [
                "Seekers2001",
                "9feabe7841"
              ],
              "status": "done",
              "evidence": "git 9feabe78"
            },
            {
              "v": "8d597276",
              "date": "09-21",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skills): confine frontend-slides export server to the deck directory and bind loopback (#3206)",
              "items": [
                "pablolozano0216-art",
                "8d59727633"
              ],
              "status": "done",
              "evidence": "git 8d597276"
            },
            {
              "v": "c056ae7d",
              "date": "09-21",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): support python style comments in pre-commit quality checks (#3194)",
              "items": [
                "Sedat Dağ",
                "c056ae7df2"
              ],
              "status": "done",
              "evidence": "git c056ae7d"
            },
            {
              "v": "8b951d3b",
              "date": "09-21",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skill-comply): stop a failed step supplying evidence downstream (#3109)",
              "items": [
                "Lukas",
                "8b951d3bf6"
              ],
              "status": "done",
              "evidence": "git 8b951d3b"
            },
            {
              "v": "d7cf4584",
              "date": "09-22",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: restore Claude plugin setup compatibility (#3205)",
              "items": [
                "asp",
                "d7cf4584cf"
              ],
              "status": "done",
              "evidence": "git d7cf4584"
            },
            {
              "v": "43b3a01e",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "Update README with install health check instructions (#3196)",
              "items": [
                "Ram Singh",
                "43b3a01ee0"
              ],
              "status": "done",
              "evidence": "git 43b3a01e"
            },
            {
              "v": "7b7dfc64",
              "date": "09-22",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): detect destructive SQL passed quoted to SQL clients (#3107)",
              "items": [
                "Varun Gore",
                "7b7dfc6412"
              ],
              "status": "done",
              "evidence": "git 7b7dfc64"
            },
            {
              "v": "bf70150e",
              "date": "09-22",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): sanitize dangerous invisible unicode in denial paths (#3103)",
              "items": [
                "xsf",
                "bf70150eb2"
              ],
              "status": "done",
              "evidence": "git bf70150e"
            },
            {
              "v": "7371f035",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "merge: reconcile Polish locale with current main",
              "items": [
                "Dante",
                "7371f035da"
              ],
              "status": "done",
              "evidence": "git 7371f035"
            },
            {
              "v": "89448e75",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'upstream/main' into codex/docs-governance-audit-foundation",
              "items": [
                "Seekers2001",
                "89448e75cc"
              ],
              "status": "done",
              "evidence": "git 89448e75"
            },
            {
              "v": "94ca2de3",
              "date": "09-22",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): accept UTF-8 BOM in install configs",
              "items": [
                "Yann Roberto",
                "94ca2de35e"
              ],
              "status": "done",
              "evidence": "git 94ca2de3"
            },
            {
              "v": "43a91f66",
              "date": "09-22",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'affaan-m:main' into main",
              "items": [
                "Varun Gore",
                "43a91f66ed"
              ],
              "status": "done",
              "evidence": "git 43a91f66"
            },
            {
              "v": "a21e0675",
              "date": "09-22",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: resolve pre-existing lint errors in control-pane and plan-canvas",
              "items": [
                "Geronimo",
                "a21e06751a"
              ],
              "status": "done",
              "evidence": "git a21e0675"
            },
            {
              "v": "61c230c1",
              "date": "09-23",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: distinguish PowerShell foreach statements",
              "items": [
                "Dante",
                "61c230c163"
              ],
              "status": "done",
              "evidence": "git 61c230c1"
            },
            {
              "v": "306c2177",
              "date": "09-23",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: scan piped foreach grouping blocks",
              "items": [
                "Dante",
                "306c217729"
              ],
              "status": "done",
              "evidence": "git 306c2177"
            },
            {
              "v": "1aea7801",
              "date": "09-23",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore(codex): route sample roles to GPT-6 Sol and Luna",
              "items": [
                "nguyenphivn",
                "1aea78011b"
              ],
              "status": "done",
              "evidence": "git 1aea7801"
            },
            {
              "v": "dddbe52c",
              "date": "09-23",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skill-stocktake): exclude trash and mark unmeasured usage",
              "items": [
                "Yann Roberto",
                "dddbe52cb7"
              ],
              "status": "done",
              "evidence": "git dddbe52c"
            },
            {
              "v": "6d9c1eb3",
              "date": "09-23",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skill-stocktake): explicitly replace full-run caches",
              "items": [
                "Yann Roberto",
                "6d9c1eb3bc"
              ],
              "status": "done",
              "evidence": "git 6d9c1eb3"
            },
            {
              "v": "6a555c78",
              "date": "09-23",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge origin/main, taking main's tree",
              "items": [
                "L4XB",
                "6a555c78c1"
              ],
              "status": "done",
              "evidence": "git 6a555c78"
            },
            {
              "v": "f35470e9",
              "date": "09-23",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): unwrap the runners and shell forms the SQL-client check still misses",
              "items": [
                "L4XB",
                "f35470e9b8"
              ],
              "status": "done",
              "evidence": "git f35470e9"
            },
            {
              "v": "64e004a9",
              "date": "09-23",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): keep the arguments after env -S whole",
              "items": [
                "L4XB",
                "64e004a962"
              ],
              "status": "done",
              "evidence": "git 64e004a9"
            },
            {
              "v": "a7c6b4b3",
              "date": "09-24",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(agents): add ruby-reviewer",
              "items": [
                "Leslie-23",
                "a7c6b4b3b8"
              ],
              "status": "done",
              "evidence": "git a7c6b4b3"
            },
            {
              "v": "90481d5e",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: consolidate UI evidence gate into frontend design direction",
              "items": [
                "Samuel Bushi",
                "90481d5e4a"
              ],
              "status": "done",
              "evidence": "git 90481d5e"
            },
            {
              "v": "c770b08e",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: require rendered evidence for every target viewport",
              "items": [
                "Samuel Bushi",
                "c770b08eef"
              ],
              "status": "done",
              "evidence": "git c770b08e"
            },
            {
              "v": "19a803b4",
              "date": "09-24",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into feat/update-tinystruct-patterns-skill",
              "items": [
                "@James",
                "19a803b466"
              ],
              "status": "done",
              "evidence": "git 19a803b4"
            },
            {
              "v": "fb1f81e0",
              "date": "09-24",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: sync tinystruct-patterns skill with latest tinystruct framework (1.7.34)",
              "items": [
                "@James",
                "fb1f81e0d7"
              ],
              "status": "done",
              "evidence": "git fb1f81e0"
            },
            {
              "v": "e0017a32",
              "date": "09-24",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into feat/update-tinystruct-patterns-skill",
              "items": [
                "James M. ZHOU",
                "e0017a3206"
              ],
              "status": "done",
              "evidence": "git e0017a32"
            },
            {
              "v": "ae47883f",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "Fix the issues",
              "items": [
                "@James",
                "ae47883fc6"
              ],
              "status": "done",
              "evidence": "git ae47883f"
            },
            {
              "v": "2c799595",
              "date": "09-24",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'feat/update-tinystruct-patterns-skill' of https://github.com/m0ver/everything-claude-code into feat/update-tinystruct-patterns-skill",
              "items": [
                "@James",
                "2c7995959b"
              ],
              "status": "done",
              "evidence": "git 2c799595"
            },
            {
              "v": "f83eaf6c",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: add Japanese database reference and clean up relative link",
              "items": [
                "@James",
                "f83eaf6c65"
              ],
              "status": "done",
              "evidence": "git f83eaf6c"
            },
            {
              "v": "95aac7a1",
              "date": "09-24",
              "group": "2026-09",
              "lane": "other",
              "title": "Update docs/ja-JP/skills/tinystruct-patterns/SKILL.md",
              "items": [
                "James M. ZHOU",
                "95aac7a101"
              ],
              "status": "done",
              "evidence": "git 95aac7a1"
            },
            {
              "v": "704e3604",
              "date": "09-24",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: add missing AbstractData and Serializable imports to ja-JP database.md example",
              "items": [
                "@James",
                "704e360486"
              ],
              "status": "done",
              "evidence": "git 704e3604"
            },
            {
              "v": "2d887d75",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(agents): widen ruby-reviewer diff scope and flag bulk writes",
              "items": [
                "Leslie-23",
                "2d887d756d"
              ],
              "status": "done",
              "evidence": "git 2d887d75"
            },
            {
              "v": "62bf2b29",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(mcp): pin chrome-devtools-mcp to 1.10.1 instead of @latest",
              "items": [
                "ritms42",
                "62bf2b2910"
              ],
              "status": "done",
              "evidence": "git 62bf2b29"
            },
            {
              "v": "bbe5d784",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): read the command line su runs, and unwrap taskset",
              "items": [
                "L4XB",
                "bbe5d78420"
              ],
              "status": "done",
              "evidence": "git bbe5d784"
            },
            {
              "v": "2df1aa7a",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): check every command su is given, not only the first",
              "items": [
                "L4XB",
                "2df1aa7a92"
              ],
              "status": "done",
              "evidence": "git 2df1aa7a"
            },
            {
              "v": "0ae2fa06",
              "date": "09-24",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): report a failed live refresh instead of discarding it",
              "items": [
                "L4XB",
                "0ae2fa06a4"
              ],
              "status": "done",
              "evidence": "git 0ae2fa06"
            },
            {
              "v": "e482e579",
              "date": "09-25",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: point the Kimi Code link at the international site (kimi.ai/code) (#3183)",
              "items": [
                "Tony Yu",
                "e482e57941"
              ],
              "status": "done",
              "evidence": "git e482e579"
            },
            {
              "v": "2a9b56bf",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: replace blanket ECC_TEST_ALLOW_FAILURES with targeted ECC_TEST_SKIP",
              "items": [
                "Geronimo",
                "2a9b56bf36"
              ],
              "status": "done",
              "evidence": "git 2a9b56bf"
            },
            {
              "v": "31f4ed12",
              "date": "09-25",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'affaan-m:main' into main",
              "items": [
                "Varun Gore",
                "31f4ed120e"
              ],
              "status": "done",
              "evidence": "git 31f4ed12"
            },
            {
              "v": "10969f58",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): keep a superseded refresh failure off the board",
              "items": [
                "L4XB",
                "10969f587b"
              ],
              "status": "done",
              "evidence": "git 10969f58"
            },
            {
              "v": "98483803",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): judge a failed refresh by the loads that started after it",
              "items": [
                "L4XB",
                "9848380309"
              ],
              "status": "done",
              "evidence": "git 98483803"
            },
            {
              "v": "96516aa2",
              "date": "09-25",
              "group": "2026-09",
              "lane": "test",
              "title": "test(control-pane): give the page a fixed clock",
              "items": [
                "L4XB",
                "96516aa247"
              ],
              "status": "done",
              "evidence": "git 96516aa2"
            },
            {
              "v": "029f850b",
              "date": "09-25",
              "group": "2026-09",
              "lane": "test",
              "title": "test(control-pane): pin which load decides a failed refresh",
              "items": [
                "L4XB",
                "029f850bd0"
              ],
              "status": "done",
              "evidence": "git 029f850b"
            },
            {
              "v": "928a2952",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): let the newest finished load decide the board",
              "items": [
                "L4XB",
                "928a295247"
              ],
              "status": "done",
              "evidence": "git 928a2952"
            },
            {
              "v": "36460824",
              "date": "09-25",
              "group": "2026-09",
              "lane": "test",
              "title": "test(control-pane): pin that a late response keeps its hands off newer data",
              "items": [
                "L4XB",
                "36460824ee"
              ],
              "status": "done",
              "evidence": "git 36460824"
            },
            {
              "v": "a82d587e",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): order data and outcomes of every load separately",
              "items": [
                "L4XB",
                "a82d587e3f"
              ],
              "status": "done",
              "evidence": "git a82d587e"
            },
            {
              "v": "217f3037",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): fail a load whose snapshot cannot be shown, and run the shown query",
              "items": [
                "L4XB",
                "217f303713"
              ],
              "status": "done",
              "evidence": "git 217f3037"
            },
            {
              "v": "50c4e93f",
              "date": "09-25",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore: merge latest main into MyBatis contribution",
              "items": [
                "Gunwoo",
                "50c4e93f31"
              ],
              "status": "done",
              "evidence": "git 50c4e93f"
            },
            {
              "v": "bebc6218",
              "date": "09-25",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore: reconcile remote MyBatis branch merge",
              "items": [
                "Gunwoo",
                "bebc621826"
              ],
              "status": "done",
              "evidence": "git bebc6218"
            },
            {
              "v": "980e637c",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: normalize viewport evidence labels",
              "items": [
                "Samuel Bushi",
                "980e637c3c"
              ],
              "status": "done",
              "evidence": "git 980e637c"
            },
            {
              "v": "7fbdc55f",
              "date": "09-25",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(skills): add MCP dependency review skill",
              "items": [
                "Tomelias",
                "7fbdc55fea"
              ],
              "status": "done",
              "evidence": "git 7fbdc55f"
            },
            {
              "v": "8f6b4d61",
              "date": "09-25",
              "group": "2026-09",
              "lane": "test",
              "title": "test(skills): add MCP dependency review regression coverage",
              "items": [
                "Tomelias",
                "8f6b4d6133"
              ],
              "status": "done",
              "evidence": "git 8f6b4d61"
            },
            {
              "v": "1d2b7205",
              "date": "09-25",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(security): add AgentShield evidence for MCP review skill",
              "items": [
                "Tomelias",
                "1d2b7205af"
              ],
              "status": "done",
              "evidence": "git 1d2b7205"
            },
            {
              "v": "da5757b6",
              "date": "09-25",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ci): flag CLAUDE_PROJECT_DIR in skill fences with Codex rewrite guidance",
              "items": [
                "Matt Van Horn",
                "da5757b6ff"
              ],
              "status": "done",
              "evidence": "git da5757b6"
            },
            {
              "v": "742395bc",
              "date": "09-26",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(scripts): confine plan-canvas artifact assets and escape 404 paths",
              "items": [
                "WRG",
                "742395bca7"
              ],
              "status": "done",
              "evidence": "git 742395bc"
            },
            {
              "v": "d237e197",
              "date": "09-26",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(scripts): sandbox HTML siblings, link-name MIME, portable fixtures",
              "items": [
                "WRG",
                "d237e1972f"
              ],
              "status": "done",
              "evidence": "git d237e197"
            },
            {
              "v": "8f895f47",
              "date": "09-26",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: address MCP dependency review feedback",
              "items": [
                "ELIAS TOM",
                "8f895f4729"
              ],
              "status": "done",
              "evidence": "git 8f895f47"
            },
            {
              "v": "10375876",
              "date": "09-26",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: sync MCP review guidance",
              "items": [
                "ELIAS TOM",
                "1037587619"
              ],
              "status": "done",
              "evidence": "git 10375876"
            },
            {
              "v": "3128610f",
              "date": "09-26",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: sync Cursor MCP review guidance",
              "items": [
                "ELIAS TOM",
                "3128610f7c"
              ],
              "status": "done",
              "evidence": "git 3128610f"
            },
            {
              "v": "85960fd9",
              "date": "09-26",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(security): pin AgentShield evidence version",
              "items": [
                "ELIAS TOM",
                "85960fd95b"
              ],
              "status": "done",
              "evidence": "git 85960fd9"
            },
            {
              "v": "2cc96fca",
              "date": "09-26",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore: merge upstream main into docs governance audit",
              "items": [
                "Seekers2001",
                "2cc96fca2e"
              ],
              "status": "done",
              "evidence": "git 2cc96fca"
            },
            {
              "v": "b166520d",
              "date": "09-26",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'upstream/main' into feat/agent-payment-x402-upstream-solana",
              "items": [
                "Notorious D.E.V",
                "b166520d96"
              ],
              "status": "done",
              "evidence": "git b166520d"
            },
            {
              "v": "ec879062",
              "date": "09-26",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(agent-payment-x402): reserve session budget before awaiting confirmation",
              "items": [
                "Notorious D.E.V",
                "ec879062f9"
              ],
              "status": "done",
              "evidence": "git ec879062"
            },
            {
              "v": "3052732f",
              "date": "09-26",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): add non-color risk cues to the control-plane view",
              "items": [
                "pasmud",
                "3052732f28"
              ],
              "status": "done",
              "evidence": "git 3052732f"
            },
            {
              "v": "18e78da3",
              "date": "09-26",
              "group": "2026-09",
              "lane": "test",
              "title": "test(control-pane): derive the a11y palette from the rendered view",
              "items": [
                "pasmud",
                "18e78da390"
              ],
              "status": "done",
              "evidence": "git 18e78da3"
            },
            {
              "v": "6e15d454",
              "date": "09-26",
              "group": "2026-09",
              "lane": "test",
              "title": "test(ci): pin that identifiers containing CLAUDE_PROJECT_DIR still pass",
              "items": [
                "Matt Van Horn",
                "6e15d45467"
              ],
              "status": "done",
              "evidence": "git 6e15d454"
            },
            {
              "v": "036fa497",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge main, and raise the pinned CLI to 0.10.0",
              "items": [
                "iyashjayesh",
                "036fa49779"
              ],
              "status": "done",
              "evidence": "git 036fa497"
            },
            {
              "v": "7899734c",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Stop the documented sync command writing a card on a dry run",
              "items": [
                "iyashjayesh",
                "7899734c64"
              ],
              "status": "done",
              "evidence": "git 7899734c"
            },
            {
              "v": "df34108e",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Do not promise an output path the config can override",
              "items": [
                "iyashjayesh",
                "df34108e0f"
              ],
              "status": "done",
              "evidence": "git df34108e"
            },
            {
              "v": "99e75b70",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Make the offered README link relative to the README being edited",
              "items": [
                "iyashjayesh",
                "99e75b70f9"
              ],
              "status": "done",
              "evidence": "git 99e75b70"
            },
            {
              "v": "6744a017",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): announce polled advisories through a live region",
              "items": [
                "pasmud",
                "6744a01748"
              ],
              "status": "done",
              "evidence": "git 6744a017"
            },
            {
              "v": "9e0996c6",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): replace stale live-region guidance when a poll fails",
              "items": [
                "pasmud",
                "9e0996c6d6"
              ],
              "status": "done",
              "evidence": "git 9e0996c6"
            },
            {
              "v": "e97e3330",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): keep the canvas label and live region consistent",
              "items": [
                "pasmud",
                "e97e333040"
              ],
              "status": "done",
              "evidence": "git e97e3330"
            },
            {
              "v": "5b65751b",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: restore plan canvas process launcher",
              "items": [
                "Seekers2001",
                "5b65751bd5"
              ],
              "status": "done",
              "evidence": "git 5b65751b"
            },
            {
              "v": "9d1e05a0",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: normalize markdown link path separators",
              "items": [
                "Seekers2001",
                "9d1e05a06e"
              ],
              "status": "done",
              "evidence": "git 9d1e05a0"
            },
            {
              "v": "a3e9bc51",
              "date": "09-27",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: fix prerequisites in manual install examples",
              "items": [
                "Yann Roberto",
                "a3e9bc5184"
              ],
              "status": "done",
              "evidence": "git a3e9bc51"
            },
            {
              "v": "91e31a03",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): refine preflight comment and cross-reference package.json engines",
              "items": [
                "wzc",
                "91e31a032e"
              ],
              "status": "done",
              "evidence": "git 91e31a03"
            },
            {
              "v": "cee58ba3",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): settle the poll guard against the last settled request",
              "items": [
                "pasmud",
                "cee58ba39e"
              ],
              "status": "done",
              "evidence": "git cee58ba3"
            },
            {
              "v": "2b35e299",
              "date": "09-27",
              "group": "2026-09",
              "lane": "test",
              "title": "test: cover launcher error handling",
              "items": [
                "Seekers2001",
                "2b35e299ea"
              ],
              "status": "done",
              "evidence": "git 2b35e299"
            },
            {
              "v": "c196dc7d",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skills): reject Windows-unsafe components in workspace_path example",
              "items": [
                "vam",
                "c196dc7d51"
              ],
              "status": "done",
              "evidence": "git c196dc7d"
            },
            {
              "v": "3ade64aa",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge origin/main into feat/2885-agent-security-hardening",
              "items": [
                "vam",
                "3ade64aa43"
              ],
              "status": "done",
              "evidence": "git 3ade64aa"
            },
            {
              "v": "995d3c49",
              "date": "09-27",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: update skill counts for agent-security-hardening",
              "items": [
                "vam",
                "995d3c4934"
              ],
              "status": "done",
              "evidence": "git 995d3c49"
            },
            {
              "v": "d42d918b",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): stop a stale poll lowering the staleness mark",
              "items": [
                "pasmud",
                "d42d918bd3"
              ],
              "status": "done",
              "evidence": "git d42d918b"
            },
            {
              "v": "0765f7a2",
              "date": "09-27",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(profiles): add opt-in Lean/Full and hybrid Auto selection",
              "items": [
                "haelyra",
                "0765f7a2ca"
              ],
              "status": "done",
              "evidence": "git 0765f7a2"
            },
            {
              "v": "874883c7",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(profiles): make evaluator permissions and Windows checks portable",
              "items": [
                "haelyra",
                "874883c728"
              ],
              "status": "done",
              "evidence": "git 874883c7"
            },
            {
              "v": "a9e3ecb7",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ci): allow slow Windows test cleanup",
              "items": [
                "haelyra",
                "a9e3ecb77f"
              ],
              "status": "done",
              "evidence": "git a9e3ecb7"
            },
            {
              "v": "befde0d2",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(profiles): bind routing receipts and harden review paths",
              "items": [
                "haelyra",
                "befde0d2cd"
              ],
              "status": "done",
              "evidence": "git befde0d2"
            },
            {
              "v": "eaeef53a",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3234 from haelyra/feat/ecc-029-production-acceptance",
              "items": [
                "haelyra",
                "eaeef53a15"
              ],
              "status": "done",
              "evidence": "git eaeef53a"
            },
            {
              "v": "042924e1",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): support invocation through POSIX sh (#3014)",
              "items": [
                "Tushar Panchal",
                "042924e1f4"
              ],
              "status": "done",
              "evidence": "git 042924e1"
            },
            {
              "v": "7eb1e32a",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "merge: preserve Turkish guide link fixes with reviewed main",
              "items": [
                "affaan-m",
                "7eb1e32ae0"
              ],
              "status": "done",
              "evidence": "git 7eb1e32a"
            },
            {
              "v": "f8c604d3",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge current main into PR #3060, preserving reviewed contribution",
              "items": [
                "affaan-m",
                "f8c604d37e"
              ],
              "status": "done",
              "evidence": "git f8c604d3"
            },
            {
              "v": "80b93397",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge current main into PR #3121, preserving reviewed contribution",
              "items": [
                "affaan-m",
                "80b9339727"
              ],
              "status": "done",
              "evidence": "git 80b93397"
            },
            {
              "v": "72c7ca53",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge current main into PR #3013, preserving reviewed contribution",
              "items": [
                "affaan-m",
                "72c7ca5387"
              ],
              "status": "done",
              "evidence": "git 72c7ca53"
            },
            {
              "v": "923019d9",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(opencode): preserve consent ownership through guarded install and repair",
              "items": [
                "affaan-m",
                "923019d99f"
              ],
              "status": "done",
              "evidence": "git 923019d9"
            },
            {
              "v": "61049547",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge current main while preserving reviewed OpenCode consent guards",
              "items": [
                "affaan-m",
                "610495474a"
              ],
              "status": "done",
              "evidence": "git 61049547"
            },
            {
              "v": "d3b8a3e9",
              "date": "09-27",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore(deps): bump actions/stale from 10.4.0 to 11.0.0 (#3005)",
              "items": [
                "dependabot[bot]",
                "d3b8a3e908"
              ],
              "status": "done",
              "evidence": "git d3b8a3e9"
            },
            {
              "v": "ac27e096",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into docs/oxlint-complexity-ratchet",
              "items": [
                "Affaan Mustafa",
                "ac27e096f5"
              ],
              "status": "done",
              "evidence": "git ac27e096"
            },
            {
              "v": "9f64ff2c",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(context): refresh registry binding for Polish docs module",
              "items": [
                "affaan-m",
                "9f64ff2c3d"
              ],
              "status": "done",
              "evidence": "git 9f64ff2c"
            },
            {
              "v": "533f5ff2",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(docs): format complexity sources as Markdown links",
              "items": [
                "affaan-m",
                "533f5ff20a"
              ],
              "status": "done",
              "evidence": "git 533f5ff2"
            },
            {
              "v": "5ffe239e",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(tests): reconcile launcher coverage with current main",
              "items": [
                "affaan-m",
                "5ffe239ee5"
              ],
              "status": "done",
              "evidence": "git 5ffe239e"
            },
            {
              "v": "aff9c645",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): preserve snapshot integrity during failed refreshes",
              "items": [
                "affaan-m",
                "aff9c64560"
              ],
              "status": "done",
              "evidence": "git aff9c645"
            },
            {
              "v": "9f6c16fe",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(tests): make guarded parent replacement portable to Windows",
              "items": [
                "affaan-m",
                "9f6c16fe02"
              ],
              "status": "done",
              "evidence": "git 9f6c16fe"
            },
            {
              "v": "6dc706fe",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): distinguish user plugins from ECC aliases",
              "items": [
                "affaan-m",
                "6dc706fe85"
              ],
              "status": "done",
              "evidence": "git 6dc706fe"
            },
            {
              "v": "d4047a4d",
              "date": "09-27",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: reconcile manual install prerequisites with current main",
              "items": [
                "affaan-m",
                "d4047a4d2f"
              ],
              "status": "done",
              "evidence": "git d4047a4d"
            },
            {
              "v": "f5d0fcc7",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): reconcile UTF-8 BOM support with current main",
              "items": [
                "affaan-m",
                "f5d0fcc7e1"
              ],
              "status": "done",
              "evidence": "git f5d0fcc7"
            },
            {
              "v": "506f25fb",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(plan-canvas): confine artifact assets and sandbox SVG documents",
              "items": [
                "affaan-m",
                "506f25fb54"
              ],
              "status": "done",
              "evidence": "git 506f25fb"
            },
            {
              "v": "503e2ef3",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(mcp): reconcile reviewed chrome-devtools pin with current main",
              "items": [
                "affaan-m",
                "503e2ef331"
              ],
              "status": "done",
              "evidence": "git 503e2ef3"
            },
            {
              "v": "a74c7433",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): classify literal dd execution without matching passive text",
              "items": [
                "affaan-m",
                "a74c743370"
              ],
              "status": "done",
              "evidence": "git a74c7433"
            },
            {
              "v": "d12c5a58",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(context): refresh manual trigger binding after Plankton docs update",
              "items": [
                "affaan-m",
                "d12c5a584d"
              ],
              "status": "done",
              "evidence": "git d12c5a58"
            },
            {
              "v": "1394cf6f",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge current main and verify PowerShell foreach classification",
              "items": [
                "affaan-m",
                "1394cf6f0a"
              ],
              "status": "done",
              "evidence": "git 1394cf6f"
            },
            {
              "v": "1c41fa7c",
              "date": "09-27",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(codex): clarify explicit MCP pin refresh and verify shared recommendation",
              "items": [
                "affaan-m",
                "1c41fa7c00"
              ],
              "status": "done",
              "evidence": "git 1c41fa7c"
            },
            {
              "v": "429384f8",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(opencode): refuse known legacy hooks without consent",
              "items": [
                "affaan-m",
                "429384f80c"
              ],
              "status": "done",
              "evidence": "git 429384f8"
            },
            {
              "v": "dbeb7232",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(plan-canvas): bind bounded artifact reads to verified descriptors",
              "items": [
                "affaan-m",
                "dbeb723218"
              ],
              "status": "done",
              "evidence": "git dbeb7232"
            },
            {
              "v": "d8113492",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): detect stdin dd writes and launcher-wrapped shells",
              "items": [
                "affaan-m",
                "d811349224"
              ],
              "status": "done",
              "evidence": "git d8113492"
            },
            {
              "v": "e9911d66",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(opencode): preserve primary failures through complete lock cleanup",
              "items": [
                "affaan-m",
                "e9911d6668"
              ],
              "status": "done",
              "evidence": "git e9911d66"
            },
            {
              "v": "57841ab3",
              "date": "09-27",
              "group": "2026-09",
              "lane": "test",
              "title": "test(plan-canvas): canonicalize temporary fixture paths",
              "items": [
                "affaan-m",
                "57841ab3e6"
              ],
              "status": "done",
              "evidence": "git 57841ab3"
            },
            {
              "v": "7c9c4473",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(release): bind trusted checks and signed tag identity on current main",
              "items": [
                "affaan-m",
                "7c9c44736b"
              ],
              "status": "done",
              "evidence": "git 7c9c4473"
            },
            {
              "v": "cfe6d90d",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-plane): preserve accessible state across poll races",
              "items": [
                "affaan-m",
                "cfe6d90d9f"
              ],
              "status": "done",
              "evidence": "git cfe6d90d"
            },
            {
              "v": "83f19dee",
              "date": "09-27",
              "group": "2026-09",
              "lane": "test",
              "title": "test(plan-canvas): isolate filesystem fixtures and cleanup failures",
              "items": [
                "affaan-m",
                "83f19dee14"
              ],
              "status": "done",
              "evidence": "git 83f19dee"
            },
            {
              "v": "8f7db0f3",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gan): verify responsive and keyboard evaluator capabilities",
              "items": [
                "affaan-m",
                "8f7db0f3cf"
              ],
              "status": "done",
              "evidence": "git 8f7db0f3"
            },
            {
              "v": "2f0df4ed",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(project-init): map FastAPI guidance without unsupported launchers",
              "items": [
                "affaan-m",
                "2f0df4ed80"
              ],
              "status": "done",
              "evidence": "git 2f0df4ed"
            },
            {
              "v": "1673814b",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge current main and reconcile scientific skill names",
              "items": [
                "affaan-m",
                "1673814b0b"
              ],
              "status": "done",
              "evidence": "git 1673814b"
            },
            {
              "v": "d98549cc",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3008 into backlog batch",
              "items": [
                "affaan-m",
                "d98549ccf7"
              ],
              "status": "done",
              "evidence": "git d98549cc"
            },
            {
              "v": "3587ba70",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3210 into backlog batch",
              "items": [
                "affaan-m",
                "3587ba70b9"
              ],
              "status": "done",
              "evidence": "git 3587ba70"
            },
            {
              "v": "f2835aac",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3121 into backlog batch",
              "items": [
                "affaan-m",
                "f2835aacf3"
              ],
              "status": "done",
              "evidence": "git f2835aac"
            },
            {
              "v": "7253ad41",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3246 into backlog batch",
              "items": [
                "affaan-m",
                "7253ad415c"
              ],
              "status": "done",
              "evidence": "git 7253ad41"
            },
            {
              "v": "68b85593",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3233 into backlog batch",
              "items": [
                "affaan-m",
                "68b8559397"
              ],
              "status": "done",
              "evidence": "git 68b85593"
            },
            {
              "v": "ef57e979",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3099 into backlog batch",
              "items": [
                "affaan-m",
                "ef57e979ef"
              ],
              "status": "done",
              "evidence": "git ef57e979"
            },
            {
              "v": "982e7d37",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3060 into backlog batch",
              "items": [
                "affaan-m",
                "982e7d3766"
              ],
              "status": "done",
              "evidence": "git 982e7d37"
            },
            {
              "v": "aa233efd",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3013 into backlog batch",
              "items": [
                "affaan-m",
                "aa233efd3a"
              ],
              "status": "done",
              "evidence": "git aa233efd"
            },
            {
              "v": "b66584c4",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3244 into backlog batch",
              "items": [
                "affaan-m",
                "b66584c445"
              ],
              "status": "done",
              "evidence": "git b66584c4"
            },
            {
              "v": "0656f7af",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3235 into backlog batch",
              "items": [
                "affaan-m",
                "0656f7af0b"
              ],
              "status": "done",
              "evidence": "git 0656f7af"
            },
            {
              "v": "e6cd4498",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3243 into backlog batch",
              "items": [
                "affaan-m",
                "e6cd4498ef"
              ],
              "status": "done",
              "evidence": "git e6cd4498"
            },
            {
              "v": "75dec472",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3213 into backlog batch",
              "items": [
                "affaan-m",
                "75dec47278"
              ],
              "status": "done",
              "evidence": "git 75dec472"
            },
            {
              "v": "72c6d904",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #2829 into backlog batch",
              "items": [
                "affaan-m",
                "72c6d90478"
              ],
              "status": "done",
              "evidence": "git 72c6d904"
            },
            {
              "v": "9fae9163",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #2954 into backlog batch",
              "items": [
                "affaan-m",
                "9fae9163f2"
              ],
              "status": "done",
              "evidence": "git 9fae9163"
            },
            {
              "v": "6e87e7a8",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #2988 into backlog batch",
              "items": [
                "affaan-m",
                "6e87e7a8ef"
              ],
              "status": "done",
              "evidence": "git 6e87e7a8"
            },
            {
              "v": "d2ce0b58",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3241 into backlog batch",
              "items": [
                "affaan-m",
                "d2ce0b58dd"
              ],
              "status": "done",
              "evidence": "git d2ce0b58"
            },
            {
              "v": "b7cc7e39",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3195 into backlog batch",
              "items": [
                "affaan-m",
                "b7cc7e3920"
              ],
              "status": "done",
              "evidence": "git b7cc7e39"
            },
            {
              "v": "426bb266",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3059 into backlog batch",
              "items": [
                "affaan-m",
                "426bb26620"
              ],
              "status": "done",
              "evidence": "git 426bb266"
            },
            {
              "v": "d0dc1fcb",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): preserve OpenCode refusal for relative source roots",
              "items": [
                "affaan-m",
                "d0dc1fcb08"
              ],
              "status": "done",
              "evidence": "git d0dc1fcb"
            },
            {
              "v": "17c17522",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge relative-root consent correction from PR #3008",
              "items": [
                "affaan-m",
                "17c1752262"
              ],
              "status": "done",
              "evidence": "git 17c17522"
            },
            {
              "v": "ffb69744",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(release): report pending gate reasons on bounded timeout",
              "items": [
                "affaan-m",
                "ffb69744b0"
              ],
              "status": "done",
              "evidence": "git ffb69744"
            },
            {
              "v": "6a3c2d00",
              "date": "09-27",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(context): bind manual triggers to reviewed batch inventory",
              "items": [
                "affaan-m",
                "6a3c2d00f5"
              ],
              "status": "done",
              "evidence": "git 6a3c2d00"
            },
            {
              "v": "6fcdd7ab",
              "date": "09-27",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge release-gate diagnostic correction from PR #3195",
              "items": [
                "affaan-m",
                "6fcdd7ab87"
              ],
              "status": "done",
              "evidence": "git 6fcdd7ab"
            },
            {
              "v": "e8cba155",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: make optional reviewer dispatch clean up safely",
              "items": [
                "affaan-m",
                "e8cba155a8"
              ],
              "status": "done",
              "evidence": "git e8cba155"
            },
            {
              "v": "57da51c7",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: count observer instinct files using loader eligibility",
              "items": [
                "affaan-m",
                "57da51c74b"
              ],
              "status": "done",
              "evidence": "git 57da51c7"
            },
            {
              "v": "eaae00d8",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: deny Playwright tools in non-browser evaluator modes",
              "items": [
                "affaan-m",
                "eaae00d851"
              ],
              "status": "done",
              "evidence": "git eaae00d8"
            },
            {
              "v": "ef8c2d8b",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(opencode): guard legacy cleanup and portable consent fixtures",
              "items": [
                "affaan-m",
                "ef8c2d8b9c"
              ],
              "status": "done",
              "evidence": "git ef8c2d8b"
            },
            {
              "v": "f36b5d1f",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(release): bind privileged checkout to verified event commit",
              "items": [
                "affaan-m",
                "f36b5d1fda"
              ],
              "status": "done",
              "evidence": "git f36b5d1f"
            },
            {
              "v": "39a73dc1",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(config): cover requirements-based FastAPI builds",
              "items": [
                "affaan-m",
                "39a73dc109"
              ],
              "status": "done",
              "evidence": "git 39a73dc1"
            },
            {
              "v": "2edb1de2",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-plane): restore accepted view after render failure",
              "items": [
                "affaan-m",
                "2edb1de269"
              ],
              "status": "done",
              "evidence": "git 2edb1de2"
            },
            {
              "v": "71bb09c7",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test(plan-canvas): isolate independently owned asset descriptors",
              "items": [
                "affaan-m",
                "71bb09c76b"
              ],
              "status": "done",
              "evidence": "git 71bb09c7"
            },
            {
              "v": "490585fb",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(platform): pass Windows browser URLs as validated data",
              "items": [
                "affaan-m",
                "490585fbcb"
              ],
              "status": "done",
              "evidence": "git 490585fb"
            },
            {
              "v": "aa315021",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR #3008 CI and security follow-up",
              "items": [
                "affaan-m",
                "aa3150214f"
              ],
              "status": "done",
              "evidence": "git aa315021"
            },
            {
              "v": "f1a98498",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR #3195 CI and security follow-up",
              "items": [
                "affaan-m",
                "f1a98498cd"
              ],
              "status": "done",
              "evidence": "git f1a98498"
            },
            {
              "v": "620d70b2",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR #2988 CI and security follow-up",
              "items": [
                "affaan-m",
                "620d70b2b6"
              ],
              "status": "done",
              "evidence": "git 620d70b2"
            },
            {
              "v": "e9a1c754",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR #3243 CI and security follow-up",
              "items": [
                "affaan-m",
                "e9a1c754d6"
              ],
              "status": "done",
              "evidence": "git e9a1c754"
            },
            {
              "v": "12f10baa",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR #3241 CI and security follow-up",
              "items": [
                "affaan-m",
                "12f10baa09"
              ],
              "status": "done",
              "evidence": "git 12f10baa"
            },
            {
              "v": "b989e2db",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR #3244 CI and security follow-up",
              "items": [
                "affaan-m",
                "b989e2dbcc"
              ],
              "status": "done",
              "evidence": "git b989e2db"
            },
            {
              "v": "1995a756",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR #2954 CI and security follow-up",
              "items": [
                "affaan-m",
                "1995a756e3"
              ],
              "status": "done",
              "evidence": "git 1995a756"
            },
            {
              "v": "c4b18b45",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): classify standard launcher and GNU time options",
              "items": [
                "affaan-m",
                "c4b18b452d"
              ],
              "status": "done",
              "evidence": "git c4b18b45"
            },
            {
              "v": "a7be02f5",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR #2829 launcher and GNU time correction",
              "items": [
                "affaan-m",
                "a7be02f53b"
              ],
              "status": "done",
              "evidence": "git a7be02f5"
            },
            {
              "v": "863dad83",
              "date": "09-28",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(sponsors): reconcile inactive listings with current main",
              "items": [
                "affaan-m",
                "863dad8304"
              ],
              "status": "done",
              "evidence": "git 863dad83"
            },
            {
              "v": "c4929204",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): bind legacy reads to trusted access flags",
              "items": [
                "affaan-m",
                "c492920468"
              ],
              "status": "done",
              "evidence": "git c4929204"
            },
            {
              "v": "c76bdfe5",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(plan-canvas): describe browser dispatch accurately",
              "items": [
                "affaan-m",
                "c76bdfe528"
              ],
              "status": "done",
              "evidence": "git c76bdfe5"
            },
            {
              "v": "b16955fe",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Integrate exact reviewed PR3008 follow-up",
              "items": [
                "affaan-m",
                "b16955fe25"
              ],
              "status": "done",
              "evidence": "git b16955fe"
            },
            {
              "v": "0d8070b3",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Integrate exact reviewed PR3244 follow-up",
              "items": [
                "affaan-m",
                "0d8070b32e"
              ],
              "status": "done",
              "evidence": "git 0d8070b3"
            },
            {
              "v": "ccb4c517",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Integrate reviewed contributor PR2768",
              "items": [
                "affaan-m",
                "ccb4c51737"
              ],
              "status": "done",
              "evidence": "git ccb4c517"
            },
            {
              "v": "be9fe61e",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): verify legacy postimages with owned descriptors",
              "items": [
                "affaan-m",
                "be9fe61ef7"
              ],
              "status": "done",
              "evidence": "git be9fe61e"
            },
            {
              "v": "4e57bf32",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge commit 'be9fe61ef75bd907e62e800b464704d3fa2509eb' into affaan/integrate-reviewed-backlog-20260928",
              "items": [
                "affaan-m",
                "4e57bf3225"
              ],
              "status": "done",
              "evidence": "git 4e57bf32"
            },
            {
              "v": "c47f902b",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed observer status counting repair and retain combined registry binding",
              "items": [
                "affaan-m",
                "c47f902bcc"
              ],
              "status": "done",
              "evidence": "git c47f902b"
            },
            {
              "v": "54e30adf",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed sponsor status corrections while retaining combined documentation",
              "items": [
                "affaan-m",
                "54e30adf84"
              ],
              "status": "done",
              "evidence": "git 54e30adf"
            },
            {
              "v": "c5831840",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge commit '4e57bf3225e639ccd00db636ea9b4175b3f6b39c' into affaan/integrate-reviewed-followups-20260928",
              "items": [
                "affaan-m",
                "c58318408e"
              ],
              "status": "done",
              "evidence": "git c5831840"
            },
            {
              "v": "de480c65",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): distinguish literal data from executable shell contexts",
              "items": [
                "affaan-m",
                "de480c65fd"
              ],
              "status": "done",
              "evidence": "git de480c65"
            },
            {
              "v": "609427ca",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge commit 'de480c65fdbbdf8b0b6ffce0f16c0968791c5fbd' into affaan/integrate-reviewed-followups-20260928",
              "items": [
                "affaan-m",
                "609427cacc"
              ],
              "status": "done",
              "evidence": "git 609427ca"
            },
            {
              "v": "615b7f10",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test(install): mutate postimage fixtures through owned descriptors",
              "items": [
                "affaan-m",
                "615b7f107a"
              ],
              "status": "done",
              "evidence": "git 615b7f10"
            },
            {
              "v": "b87d8875",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge commit '615b7f107a21b67532944f3f321c61dd282060c3' into affaan/integrate-reviewed-backlog-20260928",
              "items": [
                "affaan-m",
                "b87d887582"
              ],
              "status": "done",
              "evidence": "git b87d8875"
            },
            {
              "v": "8e0b9850",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge commit 'b87d8875825d052aff7aea6b69c0d92650dc62a4' into affaan/integrate-reviewed-followups-20260928",
              "items": [
                "affaan-m",
                "8e0b98507f"
              ],
              "status": "done",
              "evidence": "git 8e0b9850"
            },
            {
              "v": "b07f6909",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test: cover commands after empty PowerShell foreach body",
              "items": [
                "Dante",
                "b07f690987"
              ],
              "status": "done",
              "evidence": "git b07f6909"
            },
            {
              "v": "621abca3",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): bound snapshot loads and automatic polling",
              "items": [
                "affaan-m",
                "621abca350"
              ],
              "status": "done",
              "evidence": "git 621abca3"
            },
            {
              "v": "78527c02",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge commit '621abca3503a0cd3464928a94c1c1e93dcc1d9bd' into affaan/integrate-reviewed-followups-20260928",
              "items": [
                "affaan-m",
                "78527c0294"
              ],
              "status": "done",
              "evidence": "git 78527c02"
            },
            {
              "v": "ef0c31ad",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge contributor empty-foreach regression coverage into reviewed follow-ups",
              "items": [
                "affaan-m",
                "ef0c31ad99"
              ],
              "status": "done",
              "evidence": "git ef0c31ad"
            },
            {
              "v": "c1f9286e",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge main and reconcile agent inventory documentation",
              "items": [
                "affaan-m",
                "c1f9286e9a"
              ],
              "status": "done",
              "evidence": "git c1f9286e"
            },
            {
              "v": "cc9914ce",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge main and align translated agent metadata",
              "items": [
                "affaan-m",
                "cc9914ce77"
              ],
              "status": "done",
              "evidence": "git cc9914ce"
            },
            {
              "v": "8d15d6bf",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed agent inventory and evaluator defense documentation",
              "items": [
                "affaan-m",
                "8d15d6bfde"
              ],
              "status": "done",
              "evidence": "git 8d15d6bf"
            },
            {
              "v": "b23b602b",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge main and preserve clarified command descriptions",
              "items": [
                "affaan-m",
                "b23b602bae"
              ],
              "status": "done",
              "evidence": "git b23b602b"
            },
            {
              "v": "13b3c598",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test(observer): dispatch status through a fixed private wrapper",
              "items": [
                "affaan-m",
                "13b3c5989b"
              ],
              "status": "done",
              "evidence": "git 13b3c598"
            },
            {
              "v": "f4d06f72",
              "date": "09-28",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(context-budget): scope transcript accounting to explicit private inputs",
              "items": [
                "affaan-m",
                "f4d06f7211"
              ],
              "status": "done",
              "evidence": "git f4d06f72"
            },
            {
              "v": "46df9ccc",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(install): preserve inactive user configs and recheck consent before completion",
              "items": [
                "affaan-m",
                "46df9ccc87"
              ],
              "status": "done",
              "evidence": "git 46df9ccc"
            },
            {
              "v": "a7a1d8c2",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed locale metadata alignment with canonical GAN capabilities",
              "items": [
                "affaan-m",
                "a7a1d8c2d8"
              ],
              "status": "done",
              "evidence": "git a7a1d8c2"
            },
            {
              "v": "ec0753bc",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): preserve shell boundaries and detect literal hook bypasses",
              "items": [
                "affaan-m",
                "ec0753bc7f"
              ],
              "status": "done",
              "evidence": "git ec0753bc"
            },
            {
              "v": "2b9164c0",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): inspect SQL clients behind supported launchers",
              "items": [
                "affaan-m",
                "2b9164c042"
              ],
              "status": "done",
              "evidence": "git 2b9164c0"
            },
            {
              "v": "19c0c167",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed command trigger descriptions with preserved Santa workflow",
              "items": [
                "affaan-m",
                "19c0c167f5"
              ],
              "status": "done",
              "evidence": "git 19c0c167"
            },
            {
              "v": "5dc3f967",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test(release): fail when the asynchronous check queue cannot complete",
              "items": [
                "affaan-m",
                "5dc3f96743"
              ],
              "status": "done",
              "evidence": "git 5dc3f967"
            },
            {
              "v": "3cceee89",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed context accounting with aggregate registry binding",
              "items": [
                "affaan-m",
                "3cceee8914"
              ],
              "status": "done",
              "evidence": "git 3cceee89"
            },
            {
              "v": "97ac1009",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge exact reviewed PR3008 follow-up",
              "items": [
                "affaan-m",
                "97ac1009d7"
              ],
              "status": "done",
              "evidence": "git 97ac1009"
            },
            {
              "v": "d30050d3",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge exact reviewed PR2878 follow-up",
              "items": [
                "affaan-m",
                "d30050d31e"
              ],
              "status": "done",
              "evidence": "git d30050d3"
            },
            {
              "v": "f4528c48",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge exact reviewed PR2965 follow-up",
              "items": [
                "affaan-m",
                "f4528c48a7"
              ],
              "status": "done",
              "evidence": "git f4528c48"
            },
            {
              "v": "442179e7",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge exact reviewed PR2829 follow-up",
              "items": [
                "affaan-m",
                "442179e7d6"
              ],
              "status": "done",
              "evidence": "git 442179e7"
            },
            {
              "v": "6c4e682c",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge exact reviewed PR3195 follow-up",
              "items": [
                "affaan-m",
                "6c4e682c61"
              ],
              "status": "done",
              "evidence": "git 6c4e682c"
            },
            {
              "v": "63f30ffc",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test(plan-canvas): close owned resources across failure paths",
              "items": [
                "affaan-m",
                "63f30ffc36"
              ],
              "status": "done",
              "evidence": "git 63f30ffc"
            },
            {
              "v": "9886c333",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(batch): preserve Plan Canvas cleanup on every failure path",
              "items": [
                "affaan-m",
                "9886c333f6"
              ],
              "status": "done",
              "evidence": "git 9886c333"
            },
            {
              "v": "521de010",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(state-store): preserve concurrent writes across processes",
              "items": [
                "Yann Roberto",
                "521de010bc"
              ],
              "status": "done",
              "evidence": "git 521de010"
            },
            {
              "v": "a0444eb8",
              "date": "09-28",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(skills): add scoped JSON locale synchronization workflow",
              "items": [
                "affaan-m",
                "a0444eb8a6"
              ],
              "status": "done",
              "evidence": "git a0444eb8"
            },
            {
              "v": "339db5b0",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(config-protection): guard current config and ignore filenames",
              "items": [
                "affaan-m",
                "339db5b0be"
              ],
              "status": "done",
              "evidence": "git 339db5b0"
            },
            {
              "v": "74023e56",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(config-protection): protect qualified shared linter configurations",
              "items": [
                "affaan-m",
                "74023e5689"
              ],
              "status": "done",
              "evidence": "git 74023e56"
            },
            {
              "v": "688e939b",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(state-store): address contention and pragma review findings",
              "items": [
                "Yann Roberto",
                "688e939b29"
              ],
              "status": "done",
              "evidence": "git 688e939b"
            },
            {
              "v": "b150db1b",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR2444 localization workflow into maintained batch",
              "items": [
                "affaan-m",
                "b150db1bb4"
              ],
              "status": "done",
              "evidence": "git b150db1b"
            },
            {
              "v": "78dee5c8",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR2845 configuration filename protections",
              "items": [
                "affaan-m",
                "78dee5c829"
              ],
              "status": "done",
              "evidence": "git 78dee5c8"
            },
            {
              "v": "da2edcb7",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR2835 qualified configuration protections",
              "items": [
                "affaan-m",
                "da2edcb740"
              ],
              "status": "done",
              "evidence": "git da2edcb7"
            },
            {
              "v": "de5119dc",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(locale): reject missing canonical agent declarations",
              "items": [
                "affaan-m",
                "de5119dcb6"
              ],
              "status": "done",
              "evidence": "git de5119dc"
            },
            {
              "v": "e7d69ac9",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed PR2879 missing-declaration regression correction",
              "items": [
                "affaan-m",
                "e7d69ac9ee"
              ],
              "status": "done",
              "evidence": "git e7d69ac9"
            },
            {
              "v": "cc1539fd",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test(plan-canvas): bound stalled cleanup and flush results before exit",
              "items": [
                "affaan-m",
                "cc1539fda0"
              ],
              "status": "done",
              "evidence": "git cc1539fd"
            },
            {
              "v": "6bcc3135",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed Plan Canvas test termination correction",
              "items": [
                "affaan-m",
                "6bcc31358e"
              ],
              "status": "done",
              "evidence": "git 6bcc3135"
            },
            {
              "v": "57851831",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(control-pane): bound concurrent mutation workers",
              "items": [
                "Yann Roberto",
                "5785183108"
              ],
              "status": "done",
              "evidence": "git 57851831"
            },
            {
              "v": "154fa123",
              "date": "09-28",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: describe optional skill editor without unsupported claims",
              "items": [
                "affaan-m",
                "154fa123d8"
              ],
              "status": "done",
              "evidence": "git 154fa123"
            },
            {
              "v": "71c81268",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge upstream/main into codex/docs-governance-audit-foundation",
              "items": [
                "Seekers2001",
                "71c812686c"
              ],
              "status": "done",
              "evidence": "git 71c81268"
            },
            {
              "v": "b5406da6",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed optional skill-editor documentation PR2990",
              "items": [
                "affaan-m",
                "b5406da674"
              ],
              "status": "done",
              "evidence": "git b5406da6"
            },
            {
              "v": "dee88465",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): preserve Git configuration across shell command scopes",
              "items": [
                "affaan-m",
                "dee884656e"
              ],
              "status": "done",
              "evidence": "git dee88465"
            },
            {
              "v": "807f07a6",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed Git environment scope correction for PR2965",
              "items": [
                "affaan-m",
                "807f07a687"
              ],
              "status": "done",
              "evidence": "git 807f07a6"
            },
            {
              "v": "81df6475",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(codex): restrict .codex/config.toml to non-escalating keys",
              "items": [
                "rubicks-112",
                "81df6475b2"
              ],
              "status": "done",
              "evidence": "git 81df6475"
            },
            {
              "v": "5d4cca81",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test: bound installer child shutdown and preserve diagnostics",
              "items": [
                "affaan-m",
                "5d4cca811d"
              ],
              "status": "done",
              "evidence": "git 5d4cca81"
            },
            {
              "v": "aa0ea428",
              "date": "09-28",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: align composed catalog counts with i18n skill",
              "items": [
                "affaan-m",
                "aa0ea42882"
              ],
              "status": "done",
              "evidence": "git aa0ea428"
            },
            {
              "v": "c5bb5579",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(codex): separate project guidance from user install defaults",
              "items": [
                "affaan-m",
                "c5bb5579fe"
              ],
              "status": "done",
              "evidence": "git c5bb5579"
            },
            {
              "v": "e41c9241",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test(installer): pass capability probe as a private script file",
              "items": [
                "affaan-m",
                "e41c9241f5"
              ],
              "status": "done",
              "evidence": "git e41c9241"
            },
            {
              "v": "edcb389e",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge current main into Bun documentation update",
              "items": [
                "affaan-m",
                "edcb389e2c"
              ],
              "status": "done",
              "evidence": "git edcb389e"
            },
            {
              "v": "eca84624",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): track append assignments in Git override checks",
              "items": [
                "affaan-m",
                "eca846248d"
              ],
              "status": "done",
              "evidence": "git eca84624"
            },
            {
              "v": "423b2158",
              "date": "09-28",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(ja): match the canonical command count",
              "items": [
                "affaan-m",
                "423b2158a9"
              ],
              "status": "done",
              "evidence": "git 423b2158"
            },
            {
              "v": "7ffea709",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): distinguish Biome configs from results files",
              "items": [
                "affaan-m",
                "7ffea7091a"
              ],
              "status": "done",
              "evidence": "git 7ffea709"
            },
            {
              "v": "e10bbaa4",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed append-assignment correction from PR2965",
              "items": [
                "affaan-m",
                "e10bbaa492"
              ],
              "status": "done",
              "evidence": "git e10bbaa4"
            },
            {
              "v": "93fca4a6",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge reviewed Biome-filename correction from PR2835",
              "items": [
                "affaan-m",
                "93fca4a604"
              ],
              "status": "done",
              "evidence": "git 93fca4a6"
            },
            {
              "v": "48decd0d",
              "date": "09-28",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(bun): clarify isolation, audit coverage and package commands",
              "items": [
                "affaan-m",
                "48decd0deb"
              ],
              "status": "done",
              "evidence": "git 48decd0d"
            },
            {
              "v": "ed4b856b",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(state-store): preserve ownership and errors through cleanup",
              "items": [
                "affaan-m",
                "ed4b856bfe"
              ],
              "status": "done",
              "evidence": "git ed4b856b"
            },
            {
              "v": "8a6e52c9",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test(skills): assert COMMAND-REGISTRY.json is fresh in plan-orchestrate fixtures",
              "items": [
                "Santhi Prakash",
                "8a6e52c990"
              ],
              "status": "done",
              "evidence": "git 8a6e52c9"
            },
            {
              "v": "285f1a78",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: reconcile stale managed install operations",
              "items": [
                "Patrick Obrtal",
                "285f1a789e"
              ],
              "status": "done",
              "evidence": "git 285f1a78"
            },
            {
              "v": "8937dde6",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' of https://github.com/affaan-m/ECC into HEAD",
              "items": [
                "Santhi Prakash",
                "8937dde67e"
              ],
              "status": "done",
              "evidence": "git 8937dde6"
            },
            {
              "v": "431f36d1",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(manifests): refresh skill-triggers registryDigest for plan-orchestrate",
              "items": [
                "Santhi Prakash",
                "431f36d127"
              ],
              "status": "done",
              "evidence": "git 431f36d1"
            },
            {
              "v": "d62eb30d",
              "date": "09-28",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(skills): fix broken bar chart example link in remotion charts rule",
              "items": [
                "Roli Bosch",
                "d62eb30de0"
              ],
              "status": "done",
              "evidence": "git d62eb30d"
            },
            {
              "v": "e98a9da2",
              "date": "09-28",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): improve first-touch signal quality and session efficiency",
              "items": [
                "Jeffrey Montoya",
                "e98a9da288"
              ],
              "status": "done",
              "evidence": "git e98a9da2"
            },
            {
              "v": "92b9d7c7",
              "date": "09-28",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): document first-touch classes, search credit, and denial cap",
              "items": [
                "Jeffrey Montoya",
                "92b9d7c7be"
              ],
              "status": "done",
              "evidence": "git 92b9d7c7"
            },
            {
              "v": "332d3d8f",
              "date": "09-28",
              "group": "2026-09",
              "lane": "other",
              "title": "Update scripts/lib/gateguard-target-class.js",
              "items": [
                "Jeffrey Montoya",
                "332d3d8fef"
              ],
              "status": "done",
              "evidence": "git 332d3d8f"
            },
            {
              "v": "e5b95ce9",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): match glob bracket classes exactly",
              "items": [
                "Jeffrey Montoya",
                "e5b95ce921"
              ],
              "status": "done",
              "evidence": "git e5b95ce9"
            },
            {
              "v": "bd12ff4c",
              "date": "09-28",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): recognise all PowerShell -Exclude spellings",
              "items": [
                "Jeffrey Montoya",
                "bd12ff4cfa"
              ],
              "status": "done",
              "evidence": "git bd12ff4c"
            },
            {
              "v": "442a6da1",
              "date": "09-28",
              "group": "2026-09",
              "lane": "test",
              "title": "test(gateguard): cover added sensitive key and credential names",
              "items": [
                "Jeffrey Montoya",
                "442a6da150"
              ],
              "status": "done",
              "evidence": "git 442a6da1"
            },
            {
              "v": "f84d31a8",
              "date": "09-28",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): clarify when the sibling time window applies",
              "items": [
                "Jeffrey Montoya",
                "f84d31a83f"
              ],
              "status": "done",
              "evidence": "git f84d31a8"
            },
            {
              "v": "23939c63",
              "date": "09-29",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): strip SOFT HYPHEN (U+00AD) from sanitizePath",
              "items": [
                "haimingZZ",
                "23939c637e"
              ],
              "status": "done",
              "evidence": "git 23939c63"
            },
            {
              "v": "4494ffc1",
              "date": "09-29",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(docs-governance): audit UNC markdown links",
              "items": [
                "Seekers2001",
                "4494ffc1e5"
              ],
              "status": "done",
              "evidence": "git 4494ffc1"
            },
            {
              "v": "a85f43b1",
              "date": "09-29",
              "group": "2026-09",
              "lane": "test",
              "title": "test(control-pane): assert the rollback redraws without waiting for a resize",
              "items": [
                "pasmud",
                "a85f43b1fa"
              ],
              "status": "done",
              "evidence": "git a85f43b1"
            },
            {
              "v": "d0b4652c",
              "date": "09-29",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: pin tinystruct-patterns frontmatter to upstream framework version",
              "items": [
                "@James",
                "d0b4652c9d"
              ],
              "status": "done",
              "evidence": "git d0b4652c"
            },
            {
              "v": "55abca21",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/feat/update-tinystruct-patterns-skill'",
              "items": [
                "@James",
                "55abca2118"
              ],
              "status": "done",
              "evidence": "git 55abca21"
            },
            {
              "v": "abe2a310",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into codex/add-ui-quality-gate",
              "items": [
                "haelyra",
                "abe2a310ca"
              ],
              "status": "done",
              "evidence": "git abe2a310"
            },
            {
              "v": "b6e39151",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into agent/add-mybatis-patterns",
              "items": [
                "haelyra",
                "b6e3915132"
              ],
              "status": "done",
              "evidence": "git b6e39151"
            },
            {
              "v": "97d3c732",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into feat/bengali-language-support",
              "items": [
                "haelyra",
                "97d3c73257"
              ],
              "status": "done",
              "evidence": "git 97d3c732"
            },
            {
              "v": "83b66cac",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/gateguard-session-budget",
              "items": [
                "haelyra",
                "83b66cac25"
              ],
              "status": "done",
              "evidence": "git 83b66cac"
            },
            {
              "v": "21500e66",
              "date": "09-29",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: synchronize skill trigger registry digest",
              "items": [
                "Samuel Bushi",
                "21500e66d1"
              ],
              "status": "done",
              "evidence": "git 21500e66"
            },
            {
              "v": "dc3f44ad",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into affaan/integrate-reviewed-followups-20260928",
              "items": [
                "haelyra",
                "dc3f44ad5a"
              ],
              "status": "done",
              "evidence": "git dc3f44ad"
            },
            {
              "v": "51a59a11",
              "date": "09-29",
              "group": "2026-09",
              "lane": "test",
              "title": "test(gateguard): align spawned hook timeouts",
              "items": [
                "haelyra",
                "51a59a1112"
              ],
              "status": "done",
              "evidence": "git 51a59a11"
            },
            {
              "v": "759d841b",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "merge: preserve PR #3243 rollback redraw regression",
              "items": [
                "haelyra",
                "759d841b24"
              ],
              "status": "done",
              "evidence": "git 759d841b"
            },
            {
              "v": "d30588f9",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge pull request #3251 from affaan-m/affaan/integrate-reviewed-followups-20260928",
              "items": [
                "haelyra",
                "d30588f90a"
              ],
              "status": "done",
              "evidence": "git d30588f9"
            },
            {
              "v": "f3db4eb2",
              "date": "09-29",
              "group": "2026-09",
              "lane": "chore",
              "title": "build(deps): bump undici in the npm-security group across 1 directory",
              "items": [
                "dependabot[bot]",
                "f3db4eb2e9"
              ],
              "status": "done",
              "evidence": "git f3db4eb2"
            },
            {
              "v": "c4c51706",
              "date": "09-29",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/plan-orchestrate-retired-orchestrate",
              "items": [
                "Santhi Prakash",
                "c4c5170654"
              ],
              "status": "done",
              "evidence": "git c4c51706"
            },
            {
              "v": "c70874fa",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(pi): curated pi/core skills+prompts profile, CI load test, and 2.2.2 release sync (#3264)",
              "items": [
                "Affaan Mustafa",
                "c70874fae9"
              ],
              "status": "done",
              "evidence": "git c70874fa"
            },
            {
              "v": "ea86d156",
              "date": "09-29",
              "group": "2026-09",
              "lane": "refactor",
              "title": "refactor(gateguard): move search evidence and state helpers to lib",
              "items": [
                "Jeffrey Montoya",
                "ea86d156fe"
              ],
              "status": "done",
              "evidence": "git ea86d156"
            },
            {
              "v": "979d5be8",
              "date": "09-29",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): move code rationale to design notes",
              "items": [
                "Jeffrey Montoya",
                "979d5be822"
              ],
              "status": "done",
              "evidence": "git 979d5be8"
            },
            {
              "v": "a7fd960b",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): add change profile for first-touch edits",
              "items": [
                "Jeffrey Montoya",
                "a7fd960b20"
              ],
              "status": "done",
              "evidence": "git a7fd960b"
            },
            {
              "v": "10f67715",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): ask code questions that fit the change",
              "items": [
                "Jeffrey Montoya",
                "10f67715b1"
              ],
              "status": "done",
              "evidence": "git 10f67715"
            },
            {
              "v": "ad0d9183",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): pass comment and whitespace-only edits",
              "items": [
                "Jeffrey Montoya",
                "ad0d9183ff"
              ],
              "status": "done",
              "evidence": "git ad0d9183"
            },
            {
              "v": "c3b2a7e6",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): name the closest search that did not count",
              "items": [
                "Jeffrey Montoya",
                "c3b2a7e627"
              ],
              "status": "done",
              "evidence": "git c3b2a7e6"
            },
            {
              "v": "77ddf9a7",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): pass read-only shell commands before the routine gate",
              "items": [
                "Jeffrey Montoya",
                "77ddf9a792"
              ],
              "status": "done",
              "evidence": "git 77ddf9a7"
            },
            {
              "v": "6f0fbb6b",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): keep session-keyed state for 8 idle hours",
              "items": [
                "Jeffrey Montoya",
                "6f0fbb6bc9"
              ],
              "status": "done",
              "evidence": "git 6f0fbb6b"
            },
            {
              "v": "15d4f169",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): gate sensitive targets in subagents",
              "items": [
                "Jeffrey Montoya",
                "15d4f169d3"
              ],
              "status": "done",
              "evidence": "git 15d4f169"
            },
            {
              "v": "d591999e",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): add metrics event schema and report script",
              "items": [
                "Jeffrey Montoya",
                "d591999ec0"
              ],
              "status": "done",
              "evidence": "git d591999e"
            },
            {
              "v": "4c035dd8",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): record opt-in decision metrics",
              "items": [
                "Jeffrey Montoya",
                "4c035dd834"
              ],
              "status": "done",
              "evidence": "git 4c035dd8"
            },
            {
              "v": "f7e4735c",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): add scenario corpus and evaluation script",
              "items": [
                "Jeffrey Montoya",
                "f7e4735cca"
              ],
              "status": "done",
              "evidence": "git f7e4735c"
            },
            {
              "v": "142ecf8f",
              "date": "09-29",
              "group": "2026-09",
              "lane": "test",
              "title": "test(gateguard): replay the scenario corpus as a regression test",
              "items": [
                "Jeffrey Montoya",
                "142ecf8fdb"
              ],
              "status": "done",
              "evidence": "git 142ecf8f"
            },
            {
              "v": "bd4584b5",
              "date": "09-29",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): add evaluation results",
              "items": [
                "Jeffrey Montoya",
                "bd4584b5ed"
              ],
              "status": "done",
              "evidence": "git bd4584b5"
            },
            {
              "v": "03010553",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): build condensed code hints from the question ids",
              "items": [
                "Jeffrey Montoya",
                "0301055327"
              ],
              "status": "done",
              "evidence": "git 03010553"
            },
            {
              "v": "21ea5f96",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): profile shell scripts and Python module constants",
              "items": [
                "Jeffrey Montoya",
                "21ea5f96a8"
              ],
              "status": "done",
              "evidence": "git 21ea5f96"
            },
            {
              "v": "42e90721",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): credit test files by their module stem",
              "items": [
                "Jeffrey Montoya",
                "42e9072136"
              ],
              "status": "done",
              "evidence": "git 42e90721"
            },
            {
              "v": "82420f06",
              "date": "09-29",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): treat directive comments and continuations as code",
              "items": [
                "Jeffrey Montoya",
                "82420f061a"
              ],
              "status": "done",
              "evidence": "git 82420f06"
            },
            {
              "v": "6e677b00",
              "date": "09-29",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): judge comment-only edits against the file they change",
              "items": [
                "Jeffrey Montoya",
                "6e677b008c"
              ],
              "status": "done",
              "evidence": "git 6e677b00"
            },
            {
              "v": "20eb2395",
              "date": "09-29",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): gate MultiEdit by its file_path and widen surface checks",
              "items": [
                "Jeffrey Montoya",
                "20eb2395e9"
              ],
              "status": "done",
              "evidence": "git 20eb2395"
            },
            {
              "v": "7a8d8437",
              "date": "09-29",
              "group": "2026-09",
              "lane": "test",
              "title": "test(gateguard): add comment-context and exported-member scenarios",
              "items": [
                "Jeffrey Montoya",
                "7a8d8437ef"
              ],
              "status": "done",
              "evidence": "git 7a8d8437"
            },
            {
              "v": "4e33e290",
              "date": "09-29",
              "group": "2026-09",
              "lane": "test",
              "title": "test(gateguard): use descriptive helper and fixture names",
              "items": [
                "Jeffrey Montoya",
                "4e33e29005"
              ],
              "status": "done",
              "evidence": "git 4e33e290"
            },
            {
              "v": "10639a0c",
              "date": "09-29",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): gate NotebookEdit and hard-linked targets",
              "items": [
                "Jeffrey Montoya",
                "10639a0c9e"
              ],
              "status": "done",
              "evidence": "git 10639a0c"
            },
            {
              "v": "d4045c73",
              "date": "09-29",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): document NotebookEdit, hard links and exempt precedence",
              "items": [
                "Jeffrey Montoya",
                "d4045c7370"
              ],
              "status": "done",
              "evidence": "git d4045c73"
            },
            {
              "v": "8a1f7631",
              "date": "09-29",
              "group": "2026-09",
              "lane": "test",
              "title": "test(gateguard): create file symlinks for the hard-link case on Windows",
              "items": [
                "Jeffrey Montoya",
                "8a1f763184"
              ],
              "status": "done",
              "evidence": "git 8a1f7631"
            },
            {
              "v": "216fe89c",
              "date": "09-29",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): write scenario gate results as SARIF",
              "items": [
                "Jeffrey Montoya",
                "216fe89c36"
              ],
              "status": "done",
              "evidence": "git 216fe89c"
            },
            {
              "v": "a202f31b",
              "date": "09-29",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(security): add GateGuard fact-force security evidence",
              "items": [
                "Jeffrey Montoya",
                "a202f31b78"
              ],
              "status": "done",
              "evidence": "git a202f31b"
            },
            {
              "v": "8438f040",
              "date": "09-29",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(security): add AgentShield evidence for GateGuard fact-force",
              "items": [
                "Jeffrey Montoya",
                "8438f040ac"
              ],
              "status": "done",
              "evidence": "git 8438f040"
            },
            {
              "v": "bd9402f7",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): scope MCP health checks to MCP tools (#2838)",
              "items": [
                "Santhi Prakash",
                "bd9402f774"
              ],
              "status": "done",
              "evidence": "git bd9402f7"
            },
            {
              "v": "840eb53e",
              "date": "09-30",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore: sync MyBatis skill triggers with current catalog",
              "items": [
                "Gunwoo",
                "840eb53efd"
              ],
              "status": "done",
              "evidence": "git 840eb53e"
            },
            {
              "v": "01c9a670",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): honor CLAUDE_CONFIG_DIR for the default agent data home",
              "items": [
                "drakeo338",
                "01c9a670de"
              ],
              "status": "done",
              "evidence": "git 01c9a670"
            },
            {
              "v": "1221a872",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): honour directory-qualified include globs",
              "items": [
                "Jeffrey Montoya",
                "1221a8727f"
              ],
              "status": "done",
              "evidence": "git 1221a872"
            },
            {
              "v": "3055eb37",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(gateguard): link SARIF findings to the evaluated corpus",
              "items": [
                "Jeffrey Montoya",
                "3055eb3746"
              ],
              "status": "done",
              "evidence": "git 3055eb37"
            },
            {
              "v": "b15c0538",
              "date": "09-30",
              "group": "2026-09",
              "lane": "refactor",
              "title": "refactor(gateguard): split change profile and search filters into focused modules",
              "items": [
                "Jeffrey Montoya",
                "b15c0538f6"
              ],
              "status": "done",
              "evidence": "git b15c0538"
            },
            {
              "v": "f19425db",
              "date": "09-30",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): move change-profile notes into their own file",
              "items": [
                "Jeffrey Montoya",
                "f19425dbf1"
              ],
              "status": "done",
              "evidence": "git f19425db"
            },
            {
              "v": "4b02f669",
              "date": "09-30",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): refresh evaluation and security evidence",
              "items": [
                "Jeffrey Montoya",
                "4b02f66951"
              ],
              "status": "done",
              "evidence": "git 4b02f669"
            },
            {
              "v": "ddef0301",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' into fix/plan-orchestrate-retired-orchestrate",
              "items": [
                "Santhi Prakash",
                "ddef030123"
              ],
              "status": "done",
              "evidence": "git ddef0301"
            },
            {
              "v": "eb30409f",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(skills): authorize laravel-security download on the model before signing a URL",
              "items": [
                "rhmatzeka",
                "eb30409fc5"
              ],
              "status": "done",
              "evidence": "git eb30409f"
            },
            {
              "v": "b43a6770",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge upstream/main into codex/docs-governance-audit-foundation",
              "items": [
                "Seekers2001",
                "b43a6770ab"
              ],
              "status": "done",
              "evidence": "git b43a6770"
            },
            {
              "v": "5f7ba84b",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'affaan-m:main' into main",
              "items": [
                "Geronimo",
                "5f7ba84b38"
              ],
              "status": "done",
              "evidence": "git 5f7ba84b"
            },
            {
              "v": "25c5f504",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge branch 'main' of github.com:VarunGore36/ECC",
              "items": [
                "Geronimo",
                "25c5f504bf"
              ],
              "status": "done",
              "evidence": "git 25c5f504"
            },
            {
              "v": "d6f20191",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(llm): strip leaked reasoning from self-hosted model output",
              "items": [
                "FenjuFu",
                "d6f20191de"
              ],
              "status": "done",
              "evidence": "git d6f20191"
            },
            {
              "v": "74836ce6",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(llm): forward tool definitions to Ollama",
              "items": [
                "FenjuFu",
                "74836ce65f"
              ],
              "status": "done",
              "evidence": "git 74836ce6"
            },
            {
              "v": "334b7847",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(hooks): keep ~/.claude eligible as project sharing root with CLAUDE_CONFIG_DIR",
              "items": [
                "drakeo338",
                "334b7847bd"
              ],
              "status": "done",
              "evidence": "git 334b7847"
            },
            {
              "v": "b09a26aa",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(package): publish scripts/github-coordination.js for the /epic-* commands",
              "items": [
                "Yi-111-a",
                "b09a26aaad"
              ],
              "status": "done",
              "evidence": "git b09a26aa"
            },
            {
              "v": "6f141fe5",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ecc2): sandbox Config::config_path() under cfg(test)",
              "items": [
                "Toni Alatalo",
                "6f141fe5a2"
              ],
              "status": "done",
              "evidence": "git 6f141fe5"
            },
            {
              "v": "708d6213",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix(ecc2): also sandbox the legacy ~/.claude/ecc2.toml path under cfg(test)",
              "items": [
                "Toni Alatalo",
                "708d621372"
              ],
              "status": "done",
              "evidence": "git 708d6213"
            },
            {
              "v": "b7f80ff0",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(gateguard): load modules and parse searches only when a call needs them",
              "items": [
                "Jeffrey Montoya",
                "b7f80ff012"
              ],
              "status": "done",
              "evidence": "git b7f80ff0"
            },
            {
              "v": "eab92ed2",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(gateguard): skip plain character runs when lexing code",
              "items": [
                "Jeffrey Montoya",
                "eab92ed21d"
              ],
              "status": "done",
              "evidence": "git eab92ed2"
            },
            {
              "v": "d95aa342",
              "date": "09-30",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): measure hook latency in fresh processes",
              "items": [
                "Jeffrey Montoya",
                "d95aa3425e"
              ],
              "status": "done",
              "evidence": "git d95aa342"
            },
            {
              "v": "ef32c8e9",
              "date": "09-30",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(security): refresh GateGuard evidence for the latency changes",
              "items": [
                "Jeffrey Montoya",
                "ef32c8e9ee"
              ],
              "status": "done",
              "evidence": "git ef32c8e9"
            },
            {
              "v": "b802ec80",
              "date": "09-30",
              "group": "2026-09",
              "lane": "test",
              "title": "test(hooks): compare project sharing path against the canonical temp dir",
              "items": [
                "drakeo338",
                "b802ec80a6"
              ],
              "status": "done",
              "evidence": "git b802ec80"
            },
            {
              "v": "d39fcd8a",
              "date": "09-30",
              "group": "2026-09",
              "lane": "refactor",
              "title": "refactor(gateguard): read the transcript tail through a small shared module",
              "items": [
                "Jeffrey Montoya",
                "d39fcd8ac3"
              ],
              "status": "done",
              "evidence": "git d39fcd8a"
            },
            {
              "v": "2ec52af6",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "perf(gateguard): profile a change only when used and check its window first",
              "items": [
                "Jeffrey Montoya",
                "2ec52af6d0"
              ],
              "status": "done",
              "evidence": "git 2ec52af6"
            },
            {
              "v": "33624cac",
              "date": "09-30",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): refresh latency results",
              "items": [
                "Jeffrey Montoya",
                "33624cac18"
              ],
              "status": "done",
              "evidence": "git 33624cac"
            },
            {
              "v": "780dfb78",
              "date": "09-30",
              "group": "2026-09",
              "lane": "test",
              "title": "test: cover legacy OpenCode home repair and uninstall",
              "items": [
                "Yusuf Efe",
                "780dfb7894"
              ],
              "status": "done",
              "evidence": "git 780dfb78"
            },
            {
              "v": "c965a61d",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/2655' into maint/stewardship-batch-2026-09-30",
              "items": [
                "haelyra",
                "c965a61da5"
              ],
              "status": "done",
              "evidence": "git c965a61d"
            },
            {
              "v": "d9f250c7",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/2689' into maint/stewardship-batch-2026-09-30",
              "items": [
                "haelyra",
                "d9f250c7c8"
              ],
              "status": "done",
              "evidence": "git d9f250c7"
            },
            {
              "v": "cc9d2c3b",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/3255' into maint/stewardship-batch-2026-09-30",
              "items": [
                "haelyra",
                "cc9d2c3b65"
              ],
              "status": "done",
              "evidence": "git cc9d2c3b"
            },
            {
              "v": "fe1c973c",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/3265' into maint/stewardship-batch-2026-09-30",
              "items": [
                "haelyra",
                "fe1c973ca3"
              ],
              "status": "done",
              "evidence": "git fe1c973c"
            },
            {
              "v": "7c03203d",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/3267' into maint/stewardship-batch-2026-09-30",
              "items": [
                "haelyra",
                "7c03203dd8"
              ],
              "status": "done",
              "evidence": "git 7c03203d"
            },
            {
              "v": "4993147d",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/3269' into maint/stewardship-batch-2026-09-30",
              "items": [
                "haelyra",
                "4993147de5"
              ],
              "status": "done",
              "evidence": "git 4993147d"
            },
            {
              "v": "c4c73c85",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/3277' into maint/stewardship-batch-2026-09-30",
              "items": [
                "haelyra",
                "c4c73c85f3"
              ],
              "status": "done",
              "evidence": "git c4c73c85"
            },
            {
              "v": "ab748ffe",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/3278' into maint/stewardship-batch-2026-09-30",
              "items": [
                "haelyra",
                "ab748ffe7f"
              ],
              "status": "done",
              "evidence": "git ab748ffe"
            },
            {
              "v": "23cdcbd6",
              "date": "09-30",
              "group": "2026-09",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/3257' into maint/stewardship-batch-2026-09-30",
              "items": [
                "haelyra",
                "23cdcbd633"
              ],
              "status": "done",
              "evidence": "git 23cdcbd6"
            },
            {
              "v": "5ea62987",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: reconcile stewardship batch on current main",
              "items": [
                "haelyra",
                "5ea629876e"
              ],
              "status": "done",
              "evidence": "git 5ea62987"
            },
            {
              "v": "c9560d13",
              "date": "09-30",
              "group": "2026-09",
              "lane": "fix",
              "title": "fix: classify new skills for pi core",
              "items": [
                "haelyra",
                "c9560d13bd"
              ],
              "status": "done",
              "evidence": "git c9560d13"
            },
            {
              "v": "c1e57bed",
              "date": "09-30",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: sync Turkish catalog counts",
              "items": [
                "haelyra",
                "c1e57bed74"
              ],
              "status": "done",
              "evidence": "git c1e57bed"
            },
            {
              "v": "85b4e4ee",
              "date": "09-30",
              "group": "2026-09",
              "lane": "test",
              "title": "test: make Bengali syntax check byte exact",
              "items": [
                "haelyra",
                "85b4e4eea3"
              ],
              "status": "done",
              "evidence": "git 85b4e4ee"
            },
            {
              "v": "5af55fad",
              "date": "09-30",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: preserve intent in language and query guidance",
              "items": [
                "haelyra",
                "5af55fad0a"
              ],
              "status": "done",
              "evidence": "git 5af55fad"
            },
            {
              "v": "f0bbac05",
              "date": "09-30",
              "group": "2026-09",
              "lane": "chore",
              "title": "chore: refresh context registry digest",
              "items": [
                "haelyra",
                "f0bbac057d"
              ],
              "status": "done",
              "evidence": "git f0bbac05"
            },
            {
              "v": "3c17f41a",
              "date": "09-30",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs: resolve integration review findings",
              "items": [
                "haelyra",
                "3c17f41a43"
              ],
              "status": "done",
              "evidence": "git 3c17f41a"
            },
            {
              "v": "b8212629",
              "date": "09-30",
              "group": "2026-09",
              "lane": "feat",
              "title": "feat(gateguard): compare hook latency with confidence intervals",
              "items": [
                "Jeffrey Montoya",
                "b821262997"
              ],
              "status": "done",
              "evidence": "git b8212629"
            },
            {
              "v": "32a6ffe9",
              "date": "09-30",
              "group": "2026-09",
              "lane": "docs",
              "title": "docs(gateguard): report p50 and p90 with intervals per call type",
              "items": [
                "Jeffrey Montoya",
                "32a6ffe943"
              ],
              "status": "done",
              "evidence": "git 32a6ffe9"
            },
            {
              "v": "94cd7db7",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(state-store): retry Windows contention and repair fixtures",
              "items": [
                "Yann Roberto",
                "94cd7db7c3"
              ],
              "status": "done",
              "evidence": "git 94cd7db7"
            },
            {
              "v": "3768c036",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(state-store): preserve permission errors after lock retries",
              "items": [
                "Yann Roberto",
                "3768c03653"
              ],
              "status": "done",
              "evidence": "git 3768c036"
            },
            {
              "v": "1d20d449",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skill-stocktake): make batch workflow executable",
              "items": [
                "Yann Roberto",
                "1d20d449e6"
              ],
              "status": "done",
              "evidence": "git 1d20d449"
            },
            {
              "v": "566eddec",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/main' into fix/stocktake-live-inventory",
              "items": [
                "Yann Roberto",
                "566eddec57"
              ],
              "status": "done",
              "evidence": "git 566eddec"
            },
            {
              "v": "bb39e5da",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skill-stocktake): reconcile resumed live inventories safely",
              "items": [
                "Yann Roberto",
                "bb39e5da7f"
              ],
              "status": "done",
              "evidence": "git bb39e5da"
            },
            {
              "v": "9a1ccaaf",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skill-stocktake): invalidate stale resumed evaluations",
              "items": [
                "Yann Roberto",
                "9a1ccaaf25"
              ],
              "status": "done",
              "evidence": "git 9a1ccaaf"
            },
            {
              "v": "3b7d15e7",
              "date": "10-01",
              "group": "2026-10",
              "lane": "test",
              "title": "test(skill-stocktake): make traversal failure fixtures portable",
              "items": [
                "Yann Roberto",
                "3b7d15e7fa"
              ],
              "status": "done",
              "evidence": "git 3b7d15e7"
            },
            {
              "v": "d24c97d1",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(agent-payment-x402): release the session reservation when nothing was signed",
              "items": [
                "Notorious D.E.V",
                "d24c97d13c"
              ],
              "status": "done",
              "evidence": "git d24c97d1"
            },
            {
              "v": "f302863d",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): respect indirect skill citations in auto routing",
              "items": [
                "Yann Roberto",
                "f302863d58"
              ],
              "status": "done",
              "evidence": "git f302863d"
            },
            {
              "v": "b1ba4959",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(sessions): serialize alias read-modify-write operations",
              "items": [
                "Yann Roberto",
                "b1ba495997"
              ],
              "status": "done",
              "evidence": "git b1ba4959"
            },
            {
              "v": "ab45ed1e",
              "date": "10-01",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): pin questions for classes that skip profiling",
              "items": [
                "Jeffrey Montoya",
                "ab45ed1edf"
              ],
              "status": "done",
              "evidence": "git ab45ed1e"
            },
            {
              "v": "184c6577",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(sessions): preserve committed results on lock cleanup errors",
              "items": [
                "Yann Roberto",
                "184c657788"
              ],
              "status": "done",
              "evidence": "git 184c6577"
            },
            {
              "v": "2d2712b8",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): honor directive order and singular rejections",
              "items": [
                "Yann Roberto",
                "2d2712b899"
              ],
              "status": "done",
              "evidence": "git 2d2712b8"
            },
            {
              "v": "2b993291",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): report test config root cleanup failures instead of ignoring them",
              "items": [
                "Toni Alatalo",
                "2b993291d4"
              ],
              "status": "done",
              "evidence": "git 2b993291"
            },
            {
              "v": "6fae7b03",
              "date": "10-01",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ecc2): assert test config roots differ across threads",
              "items": [
                "Toni Alatalo",
                "6fae7b03b7"
              ],
              "status": "done",
              "evidence": "git 6fae7b03"
            },
            {
              "v": "e2b32713",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(pi): classify documentation governance",
              "items": [
                "Seekers2001",
                "e2b32713d5"
              ],
              "status": "done",
              "evidence": "git e2b32713"
            },
            {
              "v": "5e170e48",
              "date": "10-01",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(bengali): preserve decimal tokens",
              "items": [
                "haelyra",
                "5e170e4886"
              ],
              "status": "done",
              "evidence": "git 5e170e48"
            },
            {
              "v": "077d7476",
              "date": "10-01",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ecc2): assert isolated config roots",
              "items": [
                "haelyra",
                "077d74764f"
              ],
              "status": "done",
              "evidence": "git 077d7476"
            },
            {
              "v": "e63809cc",
              "date": "10-01",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: refresh context registry digest",
              "items": [
                "haelyra",
                "e63809ccc1"
              ],
              "status": "done",
              "evidence": "git e63809cc"
            },
            {
              "v": "1e895858",
              "date": "10-01",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(kiro): use always inclusion for always-on steering files",
              "items": [
                "Eric Bellavance",
                "1e895858d0"
              ],
              "status": "done",
              "evidence": "git 1e895858"
            },
            {
              "v": "eb32557b",
              "date": "10-01",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(kiro): document steering upgrade for existing installs",
              "items": [
                "Eric Bellavance",
                "eb32557b7f"
              ],
              "status": "done",
              "evidence": "git eb32557b"
            },
            {
              "v": "a7f316a2",
              "date": "10-01",
              "group": "2026-10",
              "lane": "test",
              "title": "test(kiro): assert steering inclusion modes match the README",
              "items": [
                "Eric Bellavance",
                "a7f316a219"
              ],
              "status": "done",
              "evidence": "git a7f316a2"
            },
            {
              "v": "828e7c41",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "Update .kiro/README.md",
              "items": [
                "Eric Bellavance",
                "828e7c41fa"
              ],
              "status": "done",
              "evidence": "git 828e7c41"
            },
            {
              "v": "2cd63dab",
              "date": "10-01",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: merge upstream main into chart example link repair",
              "items": [
                "Roli Bosch",
                "2cd63dab7a"
              ],
              "status": "done",
              "evidence": "git 2cd63dab"
            },
            {
              "v": "0348d7b6",
              "date": "10-01",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(release): 2.2.3, ECC-only naming in pi/core and a longer npm publish wait (#3329)",
              "items": [
                "Affaan Mustafa",
                "0348d7b6d7"
              ],
              "status": "done",
              "evidence": "git 0348d7b6"
            },
            {
              "v": "c05b2d66",
              "date": "10-01",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: retire the Everything Claude Code name, ECC only (#3330)",
              "items": [
                "Affaan Mustafa",
                "c05b2d6614"
              ],
              "status": "done",
              "evidence": "git c05b2d66"
            },
            {
              "v": "ea0a6ff6",
              "date": "10-01",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'main' into fix/plan-orchestrate-retired-orchestrate",
              "items": [
                "Santhi Prakash",
                "ea0a6ff61a"
              ],
              "status": "done",
              "evidence": "git ea0a6ff6"
            },
            {
              "v": "ef648e01",
              "date": "10-01",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(ja-JP): match current sponsors (CodeRabbit, Greptile, Moonshot AI, Itô, SerpApi) (#3363)",
              "items": [
                "Affaan Mustafa",
                "ef648e0189"
              ],
              "status": "done",
              "evidence": "git ef648e01"
            },
            {
              "v": "85dd4888",
              "date": "10-02",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: add DeepSeek Harness guide, hooks generator, and setup skill",
              "items": [
                "phungthien269",
                "85dd488892"
              ],
              "status": "done",
              "evidence": "git 85dd4888"
            },
            {
              "v": "37569084",
              "date": "10-02",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: register DeepSeek Harness in the adapter compliance matrix",
              "items": [
                "phungthien269",
                "3756908464"
              ],
              "status": "done",
              "evidence": "git 37569084"
            },
            {
              "v": "8fca8ef4",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: address CodeRabbit and Greptile review findings",
              "items": [
                "phungthien269",
                "8fca8ef4aa"
              ],
              "status": "done",
              "evidence": "git 8fca8ef4"
            },
            {
              "v": "9cccf7dc",
              "date": "10-02",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: preserve WIP home migration review fixes after upstream replacement",
              "items": [
                "Dante",
                "9cccf7dca5"
              ],
              "status": "done",
              "evidence": "git 9cccf7dc"
            },
            {
              "v": "32ac3aff",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): limit followup to target-compatible dependency resolution",
              "items": [
                "Dante",
                "32ac3aff78"
              ],
              "status": "done",
              "evidence": "git 32ac3aff"
            },
            {
              "v": "e5a5201d",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): require explicit optional cross-target dependencies",
              "items": [
                "Dante",
                "e5a5201dbd"
              ],
              "status": "done",
              "evidence": "git e5a5201d"
            },
            {
              "v": "2861dee1",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): only strip close-only reasoning when the deployment declares it",
              "items": [
                "FenjuFu",
                "2861dee176"
              ],
              "status": "done",
              "evidence": "git 2861dee1"
            },
            {
              "v": "558c06c3",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): send Ollama tools only to tool-capable models and keep call identity",
              "items": [
                "FenjuFu",
                "558c06c3f8"
              ],
              "status": "done",
              "evidence": "git 558c06c3"
            },
            {
              "v": "381b9b7b",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): discard orphan dependencies of skipped requests",
              "items": [
                "Dante",
                "381b9b7bf4"
              ],
              "status": "done",
              "evidence": "git 381b9b7b"
            },
            {
              "v": "06179f7c",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): refresh registry binding after optional dependency metadata",
              "items": [
                "Dante",
                "06179f7cb1"
              ],
              "status": "done",
              "evidence": "git 06179f7c"
            },
            {
              "v": "81ddae39",
              "date": "10-02",
              "group": "2026-10",
              "lane": "test",
              "title": "test(install): isolate dependency manifest variants immutably",
              "items": [
                "Dante",
                "81ddae39df"
              ],
              "status": "done",
              "evidence": "git 81ddae39"
            },
            {
              "v": "214eecc8",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ci): restore main's yarn.lock clobbered by the upstream sync merge",
              "items": [
                "Santhi Prakash",
                "214eecc81f"
              ],
              "status": "done",
              "evidence": "git 214eecc8"
            },
            {
              "v": "561c7317",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'upstream/main' into codex/docs-governance-audit-foundation",
              "items": [
                "Seekers2001",
                "561c7317dc"
              ],
              "status": "done",
              "evidence": "git 561c7317"
            },
            {
              "v": "60e82f95",
              "date": "10-02",
              "group": "2026-10",
              "lane": "test",
              "title": "test(install): isolate dependency plans from build artifacts",
              "items": [
                "Dante",
                "60e82f9587"
              ],
              "status": "done",
              "evidence": "git 60e82f95"
            },
            {
              "v": "2d829c04",
              "date": "10-02",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): add context and decisions",
              "items": [
                "Seekers2001",
                "2d829c04f4"
              ],
              "status": "done",
              "evidence": "git 2d829c04"
            },
            {
              "v": "4f08958d",
              "date": "10-02",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): add change impact",
              "items": [
                "Seekers2001",
                "4f08958da4"
              ],
              "status": "done",
              "evidence": "git 4f08958d"
            },
            {
              "v": "9e672444",
              "date": "10-02",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): add test regression workflows",
              "items": [
                "Seekers2001",
                "9e67244491"
              ],
              "status": "done",
              "evidence": "git 9e672444"
            },
            {
              "v": "0434cd91",
              "date": "10-02",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'upstream/main' into feat/story-lifecycle-skill",
              "items": [
                "t0kubetsu",
                "0434cd9168"
              ],
              "status": "done",
              "evidence": "git 0434cd91"
            },
            {
              "v": "9909e9e0",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(docs): clarify Pi router prerequisites",
              "items": [
                "Seekers2001",
                "9909e9e05e"
              ],
              "status": "done",
              "evidence": "git 9909e9e0"
            },
            {
              "v": "74262955",
              "date": "10-02",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(story-lifecycle): collision-safe, all-or-nothing ledger writes",
              "items": [
                "t0kubetsu",
                "7426295579"
              ],
              "status": "done",
              "evidence": "git 74262955"
            },
            {
              "v": "3ebc9bd3",
              "date": "10-02",
              "group": "2026-10",
              "lane": "test",
              "title": "test: isolate HOME in state-store CLI tests",
              "items": [
                "Karim Farahat",
                "3ebc9bd3d2"
              ],
              "status": "done",
              "evidence": "git 3ebc9bd3"
            },
            {
              "v": "5ecca888",
              "date": "10-02",
              "group": "2026-10",
              "lane": "test",
              "title": "test: isolate OpenCode config dirs in state-store CLI tests",
              "items": [
                "Karim Farahat",
                "5ecca8883e"
              ],
              "status": "done",
              "evidence": "git 5ecca888"
            },
            {
              "v": "7dfdb5a0",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context-packs): refresh skill-trigger manifest digest for bengali-nlp",
              "items": [
                "Md. Kishor Morol",
                "7dfdb5a00c"
              ],
              "status": "done",
              "evidence": "git 7dfdb5a0"
            },
            {
              "v": "967daec0",
              "date": "10-02",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(gateguard): measure question effectiveness with trapped agent tasks",
              "items": [
                "Jeffrey Montoya",
                "967daec0d6"
              ],
              "status": "done",
              "evidence": "git 967daec0"
            },
            {
              "v": "0dad22f5",
              "date": "10-02",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(gateguard): describe the question effectiveness evaluation",
              "items": [
                "Jeffrey Montoya",
                "0dad22f5ac"
              ],
              "status": "done",
              "evidence": "git 0dad22f5"
            },
            {
              "v": "7afde35e",
              "date": "10-02",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(gateguard): measure question effectiveness against a hidden user intent",
              "items": [
                "montjeffrey",
                "7afde35e49"
              ],
              "status": "done",
              "evidence": "git 7afde35e"
            },
            {
              "v": "5588e276",
              "date": "10-02",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(gateguard): report the pilot null result and the hidden-intent design",
              "items": [
                "montjeffrey",
                "5588e27646"
              ],
              "status": "done",
              "evidence": "git 5588e276"
            },
            {
              "v": "63d812ed",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): make the hidden-intent runner safe to scale",
              "items": [
                "montjeffrey",
                "63d812ed97"
              ],
              "status": "done",
              "evidence": "git 63d812ed"
            },
            {
              "v": "e716f7ea",
              "date": "10-02",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): use the repository's own test helper",
              "items": [
                "montjeffrey",
                "e716f7ea65"
              ],
              "status": "done",
              "evidence": "git e716f7ea"
            },
            {
              "v": "bfd4f825",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): extract the arm tree without handing tar a drive letter",
              "items": [
                "montjeffrey",
                "bfd4f8255a"
              ],
              "status": "done",
              "evidence": "git bfd4f825"
            },
            {
              "v": "acf49804",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): report intervals and an exact test next to the hole counts",
              "items": [
                "montjeffrey",
                "acf4980442"
              ],
              "status": "done",
              "evidence": "git acf49804"
            },
            {
              "v": "f2c0cc87",
              "date": "10-02",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): add five blind-authored hidden-intent scenarios",
              "items": [
                "montjeffrey",
                "f2c0cc8734"
              ],
              "status": "done",
              "evidence": "git f2c0cc87"
            },
            {
              "v": "2d7a5313",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): do not charge the ungated arm with gate-specific holes",
              "items": [
                "montjeffrey",
                "2d7a5313c3"
              ],
              "status": "done",
              "evidence": "git 2d7a5313"
            },
            {
              "v": "b7c1fe3e",
              "date": "10-02",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): one decisive fact per scenario, and no undisclosed shape in a grader",
              "items": [
                "montjeffrey",
                "b7c1fe3eeb"
              ],
              "status": "done",
              "evidence": "git b7c1fe3e"
            },
            {
              "v": "c9f270de",
              "date": "10-02",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(gateguard): report the 48-trial hidden-intent result",
              "items": [
                "montjeffrey",
                "c9f270def1"
              ],
              "status": "done",
              "evidence": "git c9f270de"
            },
            {
              "v": "75563604",
              "date": "10-03",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): retry Ollama capability lookups that failed",
              "items": [
                "FenjuFu",
                "7556360412"
              ],
              "status": "done",
              "evidence": "git 75563604"
            },
            {
              "v": "af325fbb",
              "date": "10-03",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): keep complete JSON answers whole in prefilled reasoning mode",
              "items": [
                "FenjuFu",
                "af325fbb85"
              ],
              "status": "done",
              "evidence": "git af325fbb"
            },
            {
              "v": "00d73fba",
              "date": "10-03",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): honor CLAUDE_CONFIG_DIR instead of writing to ~/.claude",
              "items": [
                "basil-k-aji-dev",
                "00d73fbae2"
              ],
              "status": "done",
              "evidence": "git 00d73fba"
            },
            {
              "v": "14d54a92",
              "date": "10-03",
              "group": "2026-10",
              "lane": "test",
              "title": "test(agent-data-home): pin the trusted root that moves with CLAUDE_CONFIG_DIR",
              "items": [
                "basil-k-aji-dev",
                "14d54a9285"
              ],
              "status": "done",
              "evidence": "git 14d54a92"
            },
            {
              "v": "238309ce",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'main' into fix/gateguard-session-budget",
              "items": [
                "Suliman Abdulrazzaq",
                "238309ce29"
              ],
              "status": "done",
              "evidence": "git 238309ce"
            },
            {
              "v": "06658d78",
              "date": "10-03",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: refresh skill triggers registry digest",
              "items": [
                "Suliman Abdulrazzaq",
                "06658d789e"
              ],
              "status": "done",
              "evidence": "git 06658d78"
            },
            {
              "v": "cd85014b",
              "date": "10-03",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(plan-canvas): route session state through CLAUDE_CONFIG_DIR",
              "items": [
                "basil-k-aji-dev",
                "cd85014b9e"
              ],
              "status": "done",
              "evidence": "git cd85014b"
            },
            {
              "v": "1c051192",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "Clarify optional Uizze research capabilities and local gates",
              "items": [
                "Samuel Bushi",
                "1c05119281"
              ],
              "status": "done",
              "evidence": "git 1c051192"
            },
            {
              "v": "bfaa5393",
              "date": "10-03",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge upstream/main into feat/bengali-language-support",
              "items": [
                "Md. Kishor Morol",
                "bfaa53935a"
              ],
              "status": "done",
              "evidence": "git bfaa5393"
            },
            {
              "v": "38ba0e5e",
              "date": "10-03",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(tr): restore live agent and skill counts after main merge",
              "items": [
                "Md. Kishor Morol",
                "38ba0e5ebd"
              ],
              "status": "done",
              "evidence": "git 38ba0e5e"
            },
            {
              "v": "b29823b4",
              "date": "10-03",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): leave the ambiguity unflagged in every prompt",
              "items": [
                "montjeffrey",
                "b29823b435"
              ],
              "status": "done",
              "evidence": "git b29823b4"
            },
            {
              "v": "a8fbe44e",
              "date": "10-03",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(gateguard): report the unflagged-prompt run, where the arms separate",
              "items": [
                "montjeffrey",
                "a8fbe44e4f"
              ],
              "status": "done",
              "evidence": "git a8fbe44e"
            },
            {
              "v": "b10ed932",
              "date": "10-04",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(agents): flag a failed signature read and a missing tally",
              "items": [
                "D. Michael Piscitelli",
                "b10ed932e6"
              ],
              "status": "done",
              "evidence": "git b10ed932"
            },
            {
              "v": "de10a2ac",
              "date": "10-04",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: sync MCP review skill with upstream and clarify trust boundary",
              "items": [
                "Tomelias",
                "de10a2aca8"
              ],
              "status": "done",
              "evidence": "git de10a2ac"
            },
            {
              "v": "05c6b017",
              "date": "10-04",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: cover Docker and Python MCP dependency selectors",
              "items": [
                "Tom Elias",
                "05c6b017e1"
              ],
              "status": "done",
              "evidence": "git 05c6b017"
            },
            {
              "v": "3c0297e7",
              "date": "10-04",
              "group": "2026-10",
              "lane": "test",
              "title": "test(hooks): assert the SessionStart child exits cleanly",
              "items": [
                "basil-k-aji-dev",
                "3c0297e737"
              ],
              "status": "done",
              "evidence": "git 3c0297e7"
            },
            {
              "v": "d351fc55",
              "date": "10-04",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): fall back when a prefilled answer is too deeply nested to parse",
              "items": [
                "FenjuFu",
                "d351fc5502"
              ],
              "status": "done",
              "evidence": "git d351fc55"
            },
            {
              "v": "7e7993f2",
              "date": "10-04",
              "group": "2026-10",
              "lane": "test",
              "title": "test(docs): classify audit link regressions",
              "items": [
                "Seekers2001",
                "7e7993f24f"
              ],
              "status": "done",
              "evidence": "git 7e7993f2"
            },
            {
              "v": "8a7d6129",
              "date": "10-04",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(gateguard): ask what outside the repository fixes a format or semantics",
              "items": [
                "montjeffrey",
                "8a7d61299c"
              ],
              "status": "done",
              "evidence": "git 8a7d6129"
            },
            {
              "v": "56a516c2",
              "date": "10-04",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge upstream/main into feat/gateguard-fewer-round-trips",
              "items": [
                "montjeffrey",
                "56a516c2c5"
              ],
              "status": "done",
              "evidence": "git 56a516c2"
            },
            {
              "v": "3a4a5746",
              "date": "10-04",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): a throwing hook no longer ends the fresh-process replay",
              "items": [
                "montjeffrey",
                "3a4a574609"
              ],
              "status": "done",
              "evidence": "git 3a4a5746"
            },
            {
              "v": "6dbf6e68",
              "date": "10-04",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): report fresh-process failures and fail the gate on them",
              "items": [
                "montjeffrey",
                "6dbf6e6883"
              ],
              "status": "done",
              "evidence": "git 6dbf6e68"
            },
            {
              "v": "7b037211",
              "date": "10-04",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): close the overage leak and pre-register the confirmatory run",
              "items": [
                "montjeffrey",
                "7b03721135"
              ],
              "status": "done",
              "evidence": "git 7b037211"
            },
            {
              "v": "d5450716",
              "date": "10-04",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(gateguard): confirmatory run does not confirm",
              "items": [
                "montjeffrey",
                "d545071699"
              ],
              "status": "done",
              "evidence": "git d5450716"
            },
            {
              "v": "1d66665d",
              "date": "10-04",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(gateguard): the external-contract question did not move the gated arm",
              "items": [
                "montjeffrey",
                "1d66665d39"
              ],
              "status": "done",
              "evidence": "git 1d66665d"
            },
            {
              "v": "64746b0f",
              "date": "10-05",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: sync main and refresh stocktake registry digest",
              "items": [
                "Yann Roberto",
                "64746b0f66"
              ],
              "status": "done",
              "evidence": "git 64746b0f"
            },
            {
              "v": "159440d2",
              "date": "10-05",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: sync context routing branch with main",
              "items": [
                "Yann Roberto",
                "159440d259"
              ],
              "status": "done",
              "evidence": "git 159440d2"
            },
            {
              "v": "d38b0791",
              "date": "10-05",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: sync session alias branch with main",
              "items": [
                "Yann Roberto",
                "d38b079115"
              ],
              "status": "done",
              "evidence": "git d38b0791"
            },
            {
              "v": "8be6a6f2",
              "date": "10-05",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: sync state store branch with main",
              "items": [
                "Yann Roberto",
                "8be6a6f292"
              ],
              "status": "done",
              "evidence": "git 8be6a6f2"
            },
            {
              "v": "586d4b91",
              "date": "10-05",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): keep answers too deeply nested to parse whole in prefilled mode",
              "items": [
                "FenjuFu",
                "586d4b91cc"
              ],
              "status": "done",
              "evidence": "git 586d4b91"
            },
            {
              "v": "7f3f18ee",
              "date": "10-05",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(deps): bump undici",
              "items": [
                "dependabot[bot]",
                "7f3f18ee68"
              ],
              "status": "done",
              "evidence": "git 7f3f18ee"
            },
            {
              "v": "65e6e5ee",
              "date": "10-05",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(deps-dev): bump the npm-minor-and-patch group across 1 directory with 4 updates",
              "items": [
                "dependabot[bot]",
                "65e6e5ee27"
              ],
              "status": "done",
              "evidence": "git 65e6e5ee"
            },
            {
              "v": "dab221a6",
              "date": "10-05",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(deps): bump the cargo-minor-and-patch group across 1 directory with 3 updates",
              "items": [
                "dependabot[bot]",
                "dab221a601"
              ],
              "status": "done",
              "evidence": "git dab221a6"
            },
            {
              "v": "175a0800",
              "date": "10-05",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): enforce evaluation validity guards",
              "items": [
                "montjeffrey",
                "175a0800d0"
              ],
              "status": "done",
              "evidence": "git 175a0800"
            },
            {
              "v": "d84cadfa",
              "date": "10-05",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/main' into fix/gateguard-sql-client-arguments",
              "items": [
                "L4XB",
                "d84cadfa86"
              ],
              "status": "done",
              "evidence": "git d84cadfa"
            },
            {
              "v": "f8380852",
              "date": "10-05",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): reach SQL clients behind shell flag clusters, su and taskset",
              "items": [
                "L4XB",
                "f838085274"
              ],
              "status": "done",
              "evidence": "git f8380852"
            },
            {
              "v": "8c560ac0",
              "date": "10-05",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ci): close catalog gate holes on README project tree",
              "items": [
                "sybertoooth7-lgtm",
                "8c560ac0cd"
              ],
              "status": "done",
              "evidence": "git 8c560ac0"
            },
            {
              "v": "03a68e04",
              "date": "10-05",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): harden effectiveness evidence",
              "items": [
                "montjeffrey",
                "03a68e04a8"
              ],
              "status": "done",
              "evidence": "git 03a68e04"
            },
            {
              "v": "d69eaecf",
              "date": "10-06",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(state-store): keep cleanup diagnostics off caller errors",
              "items": [
                "Yann Roberto",
                "d69eaecf25"
              ],
              "status": "done",
              "evidence": "git d69eaecf"
            },
            {
              "v": "11fdfb14",
              "date": "10-06",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(hooks): point permission configuration at settings.json instead of ~/.claude.json",
              "items": [
                "wanjinhao1",
                "11fdfb1466"
              ],
              "status": "done",
              "evidence": "git 11fdfb14"
            },
            {
              "v": "25d7e71b",
              "date": "10-06",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(opencode): describe enabled plugin hook checks",
              "items": [
                "Huanyi Xie",
                "25d7e71be6"
              ],
              "status": "done",
              "evidence": "git 25d7e71b"
            },
            {
              "v": "ad7385b9",
              "date": "10-06",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(orchestration): use supported Codex worker command",
              "items": [
                "Huanyi Xie",
                "ad7385b9a5"
              ],
              "status": "done",
              "evidence": "git ad7385b9"
            },
            {
              "v": "b95a4170",
              "date": "10-06",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(performance): explain adaptive reasoning effort controls",
              "items": [
                "Huanyi Xie",
                "b95a4170b7"
              ],
              "status": "done",
              "evidence": "git b95a4170"
            },
            {
              "v": "06094330",
              "date": "10-06",
              "group": "2026-10",
              "lane": "test",
              "title": "test(orchestration): verify unset approval policy default",
              "items": [
                "Huanyi Xie",
                "0609433033"
              ],
              "status": "done",
              "evidence": "git 06094330"
            },
            {
              "v": "cb1a5b98",
              "date": "10-06",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(opencode): retain mandatory manual verification",
              "items": [
                "Huanyi Xie",
                "cb1a5b981e"
              ],
              "status": "done",
              "evidence": "git cb1a5b98"
            },
            {
              "v": "57ea3133",
              "date": "10-06",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(performance): align thinking cost recommendations",
              "items": [
                "Huanyi Xie",
                "57ea313385"
              ],
              "status": "done",
              "evidence": "git 57ea3133"
            },
            {
              "v": "a8980776",
              "date": "10-06",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: qualify effort settings by provider and model",
              "items": [
                "Huanyi Xie",
                "a8980776d8"
              ],
              "status": "done",
              "evidence": "git a8980776"
            },
            {
              "v": "72d738de",
              "date": "10-06",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(proximity): observe uncommitted worktree changes",
              "items": [
                "Huanyi Xie",
                "72d738de37"
              ],
              "status": "done",
              "evidence": "git 72d738de"
            },
            {
              "v": "990e45e1",
              "date": "10-06",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opencode): avoid duplicate home plugin initialization",
              "items": [
                "Huanyi Xie",
                "990e45e177"
              ],
              "status": "done",
              "evidence": "git 990e45e1"
            },
            {
              "v": "3989e50a",
              "date": "10-06",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(proximity): retain all tracked working-set paths",
              "items": [
                "Huanyi Xie",
                "3989e50ab3"
              ],
              "status": "done",
              "evidence": "git 3989e50a"
            },
            {
              "v": "52cc44f4",
              "date": "10-06",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(proximity): isolate diff headers and preserve partial probes",
              "items": [
                "Huanyi Xie",
                "52cc44f40a"
              ],
              "status": "done",
              "evidence": "git 52cc44f4"
            },
            {
              "v": "f7d7532d",
              "date": "10-06",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(proximity): decode quoted paths with precise line ranges",
              "items": [
                "Huanyi Xie",
                "f7d7532d65"
              ],
              "status": "done",
              "evidence": "git f7d7532d"
            },
            {
              "v": "a3f00af6",
              "date": "10-06",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): report nested TypeScript errors on Windows",
              "items": [
                "agammann",
                "a3f00af6d2"
              ],
              "status": "done",
              "evidence": "git a3f00af6"
            },
            {
              "v": "603e1dee",
              "date": "10-06",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(hooks): flatten block-no-verify decision tree",
              "items": [
                "Affaan Mustafa",
                "603e1dee1e"
              ],
              "status": "done",
              "evidence": "git 603e1dee"
            },
            {
              "v": "1cf47ab0",
              "date": "10-07",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): run Windows formatter shims in quality gate",
              "items": [
                "Yann Roberto",
                "1cf47ab0e5"
              ],
              "status": "done",
              "evidence": "git 1cf47ab0"
            },
            {
              "v": "7f797d65",
              "date": "10-07",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(story-lifecycle): confine ledger I/O, race-free stale locks, enforce transitions",
              "items": [
                "t0kubetsu",
                "7f797d65c4"
              ],
              "status": "done",
              "evidence": "git 7f797d65"
            },
            {
              "v": "bf5cd6c9",
              "date": "10-07",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(story-lifecycle): reject Points outside 1, 2, 3, 5, 8",
              "items": [
                "t0kubetsu",
                "bf5cd6c95e"
              ],
              "status": "done",
              "evidence": "git bf5cd6c9"
            },
            {
              "v": "f65a9697",
              "date": "10-07",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): add brownfield-retrospective workflow for mid-project ECC adoption",
              "items": [
                "aiscimi-code",
                "f65a969745"
              ],
              "status": "done",
              "evidence": "git f65a9697"
            },
            {
              "v": "ad86a8d9",
              "date": "10-07",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): track current phase in gap register for mid-stream resume",
              "items": [
                "aiscimi-code",
                "ad86a8d972"
              ],
              "status": "done",
              "evidence": "git ad86a8d9"
            },
            {
              "v": "bd134281",
              "date": "10-07",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): pin function-word auto-admission false positive",
              "items": [
                "montjeffrey",
                "bd13428151"
              ],
              "status": "done",
              "evidence": "git bd134281"
            },
            {
              "v": "deeb27d8",
              "date": "10-07",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): require a name or trigger anchor for implicit admission",
              "items": [
                "montjeffrey",
                "deeb27d87b"
              ],
              "status": "done",
              "evidence": "git deeb27d8"
            },
            {
              "v": "c5184297",
              "date": "10-07",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): specify isolated Claude native generations",
              "items": [
                "montjeffrey",
                "c51842974a"
              ],
              "status": "done",
              "evidence": "git c5184297"
            },
            {
              "v": "f9196d37",
              "date": "10-07",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(context): prepare isolated Claude native generations",
              "items": [
                "montjeffrey",
                "f9196d3762"
              ],
              "status": "done",
              "evidence": "git f9196d37"
            },
            {
              "v": "d0e2736d",
              "date": "10-07",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): specify generation-bound prompt suggestions",
              "items": [
                "montjeffrey",
                "d0e2736df2"
              ],
              "status": "done",
              "evidence": "git d0e2736d"
            },
            {
              "v": "9ac68d37",
              "date": "10-07",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(context): suggest skills at prompt time from a generation-bound index",
              "items": [
                "montjeffrey",
                "9ac68d3713"
              ],
              "status": "done",
              "evidence": "git 9ac68d37"
            },
            {
              "v": "7e328510",
              "date": "10-07",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): require anchored prompt suggestions",
              "items": [
                "montjeffrey",
                "7e32851077"
              ],
              "status": "done",
              "evidence": "git 7e328510"
            },
            {
              "v": "2a62742b",
              "date": "10-07",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): suggest only anchored skills at prompt time",
              "items": [
                "montjeffrey",
                "2a62742b02"
              ],
              "status": "done",
              "evidence": "git 2a62742b"
            },
            {
              "v": "fafcdc89",
              "date": "10-07",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): admit later Claude Code 2.1 patches",
              "items": [
                "montjeffrey",
                "fafcdc8991"
              ],
              "status": "done",
              "evidence": "git fafcdc89"
            },
            {
              "v": "3ff4937f",
              "date": "10-07",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): admit later Claude Code 2.1 patches",
              "items": [
                "montjeffrey",
                "3ff4937f1f"
              ],
              "status": "done",
              "evidence": "git 3ff4937f"
            },
            {
              "v": "b4f7b770",
              "date": "10-07",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): require compact stored retrieval vectors",
              "items": [
                "montjeffrey",
                "b4f7b7708f"
              ],
              "status": "done",
              "evidence": "git b4f7b770"
            },
            {
              "v": "8df78d93",
              "date": "10-07",
              "group": "2026-10",
              "lane": "other",
              "title": "perf(context): store routing vectors in a compact encoding",
              "items": [
                "montjeffrey",
                "8df78d934e"
              ],
              "status": "done",
              "evidence": "git 8df78d93"
            },
            {
              "v": "b4943a5e",
              "date": "10-07",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: record skill runs under OpenCode and report unmeasured skills honestly",
              "items": [
                "YogurDungeon",
                "b4943a5e4b"
              ],
              "status": "done",
              "evidence": "git b4943a5e"
            },
            {
              "v": "8c192572",
              "date": "10-07",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(lib): split powershell destructive-command scanners",
              "items": [
                "Affaan Mustafa",
                "8c1925722c"
              ],
              "status": "done",
              "evidence": "git 8c192572"
            },
            {
              "v": "04b60e42",
              "date": "10-08",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(astra-review): let Astra apply fixes when Fable hits its usage limit",
              "items": [
                "kenima-arc",
                "04b60e42d7"
              ],
              "status": "done",
              "evidence": "git 04b60e42"
            },
            {
              "v": "9c21aaa6",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): set pipefail before piped gates in verification-loop",
              "items": [
                "David He",
                "9c21aaa681"
              ],
              "status": "done",
              "evidence": "git 9c21aaa6"
            },
            {
              "v": "27d58e58",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): strip ecc: plugin namespace from manual Claude installs",
              "items": [
                "serhattayaz-ai",
                "27d58e589a"
              ],
              "status": "done",
              "evidence": "git 27d58e58"
            },
            {
              "v": "bb95734f",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): keep namespace stripping when link rewriting is skipped",
              "items": [
                "serhattayaz-ai",
                "bb95734f4e"
              ],
              "status": "done",
              "evidence": "git bb95734f"
            },
            {
              "v": "ab606759",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(install): cover namespace stripping in the Claude manual install",
              "items": [
                "serhattayaz-ai",
                "ab606759d9"
              ],
              "status": "done",
              "evidence": "git ab606759"
            },
            {
              "v": "38b8c07f",
              "date": "10-08",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'affaan-m:main' into main",
              "items": [
                "Varun Gore",
                "38b8c07f26"
              ],
              "status": "done",
              "evidence": "git 38b8c07f"
            },
            {
              "v": "722f2193",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin runtime closure checks",
              "items": [
                "montjeffrey",
                "722f2193cb"
              ],
              "status": "done",
              "evidence": "git 722f2193"
            },
            {
              "v": "840a72b6",
              "date": "10-08",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(carriers): validate carrier runtime closure in CI",
              "items": [
                "montjeffrey",
                "840a72b6c1"
              ],
              "status": "done",
              "evidence": "git 840a72b6"
            },
            {
              "v": "4d8e3cfa",
              "date": "10-08",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the runtime-closure gate slice",
              "items": [
                "montjeffrey",
                "4d8e3cfac0"
              ],
              "status": "done",
              "evidence": "git 4d8e3cfa"
            },
            {
              "v": "3c8042fb",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin scanner edge cases and share one registry run",
              "items": [
                "montjeffrey",
                "3c8042fb33"
              ],
              "status": "done",
              "evidence": "git 3c8042fb"
            },
            {
              "v": "5f7c2e9d",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): flag absolute and package imports a carrier cannot ship",
              "items": [
                "montjeffrey",
                "5f7c2e9d7a"
              ],
              "status": "done",
              "evidence": "git 5f7c2e9d"
            },
            {
              "v": "6abf02bb",
              "date": "10-08",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(carriers): flag absolute and package imports a carrier cannot ship",
              "items": [
                "montjeffrey",
                "6abf02bb49"
              ],
              "status": "done",
              "evidence": "git 6abf02bb"
            },
            {
              "v": "03b8f684",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): reject malformed Claude validation entries",
              "items": [
                "montjeffrey",
                "03b8f6849f"
              ],
              "status": "done",
              "evidence": "git 03b8f684"
            },
            {
              "v": "928baaf2",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): require well-formed Claude validation entries",
              "items": [
                "montjeffrey",
                "928baaf26d"
              ],
              "status": "done",
              "evidence": "git 928baaf2"
            },
            {
              "v": "333e755f",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): cover spaced calls, escaped specifiers, Windows paths and index.json",
              "items": [
                "montjeffrey",
                "333e755f50"
              ],
              "status": "done",
              "evidence": "git 333e755f"
            },
            {
              "v": "0d3c85bd",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): match spaced calls, cook escapes, treat Windows and file URLs as absolute",
              "items": [
                "montjeffrey",
                "0d3c85bd54"
              ],
              "status": "done",
              "evidence": "git 0d3c85bd"
            },
            {
              "v": "e85c529e",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): an interpolated from identifier is not an import",
              "items": [
                "montjeffrey",
                "e85c529eaf"
              ],
              "status": "done",
              "evidence": "git e85c529e"
            },
            {
              "v": "d00b379f",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): keep keyword patterns from spanning an interpolation",
              "items": [
                "montjeffrey",
                "d00b379f70"
              ],
              "status": "done",
              "evidence": "git d00b379f"
            },
            {
              "v": "aec97150",
              "date": "10-08",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the closure review follow-up",
              "items": [
                "montjeffrey",
                "aec97150d8"
              ],
              "status": "done",
              "evidence": "git aec97150"
            },
            {
              "v": "f4c9b05e",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): pin routing index recovery, entry validation, bounds and mode-aware advice",
              "items": [
                "montjeffrey",
                "f4c9b05e54"
              ],
              "status": "done",
              "evidence": "git f4c9b05e"
            },
            {
              "v": "a973e331",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): recover retired routing indexes, validate entries and match advice to mode",
              "items": [
                "montjeffrey",
                "a973e33134"
              ],
              "status": "done",
              "evidence": "git a973e331"
            },
            {
              "v": "6d15a127",
              "date": "10-08",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(i18n): add Arabic localization scout",
              "items": [
                "taljeri",
                "6d15a1272e"
              ],
              "status": "done",
              "evidence": "git 6d15a127"
            },
            {
              "v": "684c9711",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): resolve session IDs from hook payloads",
              "items": [
                "Eneko Ruiz",
                "684c971173"
              ],
              "status": "done",
              "evidence": "git 684c9711"
            },
            {
              "v": "849456d5",
              "date": "10-08",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): add agent runtime gateway smoke test",
              "items": [
                "dusseau-dev",
                "849456d57e"
              ],
              "status": "done",
              "evidence": "git 849456d5"
            },
            {
              "v": "ca739b11",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin runtime closure checks",
              "items": [
                "montjeffrey",
                "ca739b11d8"
              ],
              "status": "done",
              "evidence": "git ca739b11"
            },
            {
              "v": "d3e6ce84",
              "date": "10-08",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(carriers): validate carrier runtime closure in CI",
              "items": [
                "montjeffrey",
                "d3e6ce84cd"
              ],
              "status": "done",
              "evidence": "git d3e6ce84"
            },
            {
              "v": "4814561d",
              "date": "10-08",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the runtime-closure gate slice",
              "items": [
                "montjeffrey",
                "4814561d1a"
              ],
              "status": "done",
              "evidence": "git 4814561d"
            },
            {
              "v": "be604c07",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin scanner edge cases and share one registry run",
              "items": [
                "montjeffrey",
                "be604c073a"
              ],
              "status": "done",
              "evidence": "git be604c07"
            },
            {
              "v": "d6063753",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): flag absolute and package imports a carrier cannot ship",
              "items": [
                "montjeffrey",
                "d606375366"
              ],
              "status": "done",
              "evidence": "git d6063753"
            },
            {
              "v": "9d082716",
              "date": "10-08",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(carriers): flag absolute and package imports a carrier cannot ship",
              "items": [
                "montjeffrey",
                "9d08271638"
              ],
              "status": "done",
              "evidence": "git 9d082716"
            },
            {
              "v": "4cd7741e",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): cover spaced calls, escaped specifiers, Windows paths and index.json",
              "items": [
                "montjeffrey",
                "4cd7741e74"
              ],
              "status": "done",
              "evidence": "git 4cd7741e"
            },
            {
              "v": "cd83d3ce",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): match spaced calls, cook escapes, treat Windows and file URLs as absolute",
              "items": [
                "montjeffrey",
                "cd83d3ce22"
              ],
              "status": "done",
              "evidence": "git cd83d3ce"
            },
            {
              "v": "50d59dd1",
              "date": "10-08",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): an interpolated from identifier is not an import",
              "items": [
                "montjeffrey",
                "50d59dd1f9"
              ],
              "status": "done",
              "evidence": "git 50d59dd1"
            },
            {
              "v": "40e426ea",
              "date": "10-08",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): keep keyword patterns from spanning an interpolation",
              "items": [
                "montjeffrey",
                "40e426eafc"
              ],
              "status": "done",
              "evidence": "git 40e426ea"
            },
            {
              "v": "bf729d56",
              "date": "10-08",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the closure review follow-up",
              "items": [
                "montjeffrey",
                "bf729d56ba"
              ],
              "status": "done",
              "evidence": "git bf729d56"
            },
            {
              "v": "cfcd81c0",
              "date": "10-08",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(lib): share span readers in shell-substitution",
              "items": [
                "Affaan Mustafa",
                "cfcd81c076"
              ],
              "status": "done",
              "evidence": "git cfcd81c0"
            },
            {
              "v": "d3ad8b52",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: quote argument-hint values that YAML parses as arrays",
              "items": [
                "zakyirsyaad",
                "d3ad8b524c"
              ],
              "status": "done",
              "evidence": "git d3ad8b52"
            },
            {
              "v": "e60dbbc7",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(qwen): ship agent context in .qwen/QWEN.md instead of installer docs",
              "items": [
                "zakyirsyaad",
                "e60dbbc769"
              ],
              "status": "done",
              "evidence": "git e60dbbc7"
            },
            {
              "v": "11a970e1",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: detect Dart/Flutter projects in project-detect.js",
              "items": [
                "Beksultan Pirmatov",
                "11a970e11e"
              ],
              "status": "done",
              "evidence": "git 11a970e1"
            },
            {
              "v": "64eaa7d1",
              "date": "10-09",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(qwen): add qwen-adapt-agents.js to normalize agent frontmatter",
              "items": [
                "zakyirsyaad",
                "64eaa7d124"
              ],
              "status": "done",
              "evidence": "git 64eaa7d1"
            },
            {
              "v": "70940903",
              "date": "10-09",
              "group": "2026-10",
              "lane": "test",
              "title": "test(commands): guard argument-hint against unquoted flow sequences",
              "items": [
                "zakyirsyaad",
                "70940903cc"
              ],
              "status": "done",
              "evidence": "git 70940903"
            },
            {
              "v": "7695b993",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(qwen): map WebSearch to web_search instead of dropping it",
              "items": [
                "zakyirsyaad",
                "7695b99348"
              ],
              "status": "done",
              "evidence": "git 7695b993"
            },
            {
              "v": "0bb84032",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(qwen): correct three claims in the Qwen context file",
              "items": [
                "zakyirsyaad",
                "0bb8403249"
              ],
              "status": "done",
              "evidence": "git 0bb84032"
            },
            {
              "v": "93e64754",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(qwen): publish the adapter, handle CRLF, reject unknown flags",
              "items": [
                "zakyirsyaad",
                "93e6475420"
              ],
              "status": "done",
              "evidence": "git 93e64754"
            },
            {
              "v": "f76c469f",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(state-store): persist writes from prepared result queries",
              "items": [
                "Yann Roberto",
                "f76c469fa7"
              ],
              "status": "done",
              "evidence": "git f76c469f"
            },
            {
              "v": "a6ce6fbb",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(state-store): tolerate missing Windows lock device IDs",
              "items": [
                "Yann Roberto",
                "a6ce6fbbdb"
              ],
              "status": "done",
              "evidence": "git a6ce6fbb"
            },
            {
              "v": "39796acf",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "perf(state-store): reuse unchanged read snapshots",
              "items": [
                "Yann Roberto",
                "39796acf2f"
              ],
              "status": "done",
              "evidence": "git 39796acf"
            },
            {
              "v": "20cd70e0",
              "date": "10-09",
              "group": "2026-10",
              "lane": "test",
              "title": "test: stop Windows developer tooling from leaking into setup, tar, and audit tests",
              "items": [
                "montjeffrey",
                "20cd70e06d"
              ],
              "status": "done",
              "evidence": "git 20cd70e0"
            },
            {
              "v": "0f34fdcc",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: resolve installed OpenCode skill paths consistently",
              "items": [
                "Yusuf Efe",
                "0f34fdcc14"
              ],
              "status": "done",
              "evidence": "git 0f34fdcc"
            },
            {
              "v": "c29a724b",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: declare optional cross-target install dependencies",
              "items": [
                "Dante",
                "c29a724bcd"
              ],
              "status": "done",
              "evidence": "git c29a724b"
            },
            {
              "v": "b6262c36",
              "date": "10-09",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: integrate read-only documentation governance audit",
              "items": [
                "haelyra",
                "b6262c3665"
              ],
              "status": "done",
              "evidence": "git b6262c36"
            },
            {
              "v": "aa365f44",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: integrate bounded Bun 1.4 runtime guidance",
              "items": [
                "haelyra",
                "aa365f4405"
              ],
              "status": "done",
              "evidence": "git aa365f44"
            },
            {
              "v": "9e951e26",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: normalize portable workspace path separators",
              "items": [
                "haelyra",
                "9e951e266d"
              ],
              "status": "done",
              "evidence": "git 9e951e26"
            },
            {
              "v": "9c21c207",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: match Hermes hook examples to installed filenames",
              "items": [
                "haelyra",
                "9c21c20744"
              ],
              "status": "done",
              "evidence": "git 9c21c207"
            },
            {
              "v": "131c6186",
              "date": "10-09",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: integrate native Copilot skill and agent distribution",
              "items": [
                "haelyra",
                "131c6186c3"
              ],
              "status": "done",
              "evidence": "git 131c6186"
            },
            {
              "v": "e0b507ae",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: ship commit review guidance with accurate conventions",
              "items": [
                "haelyra",
                "e0b507aeac"
              ],
              "status": "done",
              "evidence": "git e0b507ae"
            },
            {
              "v": "c6b2c55b",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): never run .sh hooks through the WSL bash launcher on Windows",
              "items": [
                "montjeffrey",
                "c6b2c55b87"
              ],
              "status": "done",
              "evidence": "git c6b2c55b"
            },
            {
              "v": "846c4506",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: keep activity dashboard executable and bound log reads",
              "items": [
                "haelyra",
                "846c450658"
              ],
              "status": "done",
              "evidence": "git 846c4506"
            },
            {
              "v": "a50ee13c",
              "date": "10-09",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: execute bounded local Hookify rules in lifecycle hooks",
              "items": [
                "wellkilo",
                "a50ee13cac"
              ],
              "status": "done",
              "evidence": "git a50ee13c"
            },
            {
              "v": "0f3fcbc2",
              "date": "10-09",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: refresh development dependencies with coherent npm lock",
              "items": [
                "dependabot[bot]",
                "0f3fcbc295"
              ],
              "status": "done",
              "evidence": "git 0f3fcbc2"
            },
            {
              "v": "c4f419be",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: refresh reviewed stewardship source 3280 on current main",
              "items": [
                "haelyra",
                "c4f419bea0"
              ],
              "status": "done",
              "evidence": "git c4f419be"
            },
            {
              "v": "3ab06e8c",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve reviewed routing wrapper source 2755",
              "items": [
                "haelyra",
                "3ab06e8c6c"
              ],
              "status": "done",
              "evidence": "git 3ab06e8c"
            },
            {
              "v": "660a38ad",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested documentation governance source 2943",
              "items": [
                "haelyra",
                "660a38ad24"
              ],
              "status": "done",
              "evidence": "git 660a38ad"
            },
            {
              "v": "95bbd841",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested tool-choice provider source 2950",
              "items": [
                "haelyra",
                "95bbd84106"
              ],
              "status": "done",
              "evidence": "git 95bbd841"
            },
            {
              "v": "64b235a6",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested Bun isolate guidance source 2968",
              "items": [
                "haelyra",
                "64b235a663"
              ],
              "status": "done",
              "evidence": "git 64b235a6"
            },
            {
              "v": "2ad3bdbe",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested Copilot install sources 2960 and 2963",
              "items": [
                "haelyra",
                "2ad3bdbef4"
              ],
              "status": "done",
              "evidence": "git 2ad3bdbe"
            },
            {
              "v": "27f49f44",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested Copilot distribution source 2963",
              "items": [
                "haelyra",
                "27f49f447c"
              ],
              "status": "done",
              "evidence": "git 27f49f44"
            },
            {
              "v": "74355d8c",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve source 2974 with tested distribution and commit guidance fixes",
              "items": [
                "haelyra",
                "74355d8cc7"
              ],
              "status": "done",
              "evidence": "git 74355d8c"
            },
            {
              "v": "a6f6faed",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve source 2983 with tested activity dashboard fixes",
              "items": [
                "haelyra",
                "a6f6faed2a"
              ],
              "status": "done",
              "evidence": "git a6f6faed"
            },
            {
              "v": "83cd2ad9",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested commit-review source 2974",
              "items": [
                "haelyra",
                "83cd2ad91e"
              ],
              "status": "done",
              "evidence": "git 83cd2ad9"
            },
            {
              "v": "c3f48920",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested Cursor dispatcher source 3001",
              "items": [
                "haelyra",
                "c3f48920de"
              ],
              "status": "done",
              "evidence": "git c3f48920"
            },
            {
              "v": "899a1231",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested dashboard read-once source 3002",
              "items": [
                "haelyra",
                "899a12310e"
              ],
              "status": "done",
              "evidence": "git 899a1231"
            },
            {
              "v": "34ba911a",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested Python audit source 3007",
              "items": [
                "haelyra",
                "34ba911ad3"
              ],
              "status": "done",
              "evidence": "git 34ba911a"
            },
            {
              "v": "1d02fbfa",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested agent-security source 3015",
              "items": [
                "haelyra",
                "1d02fbfa51"
              ],
              "status": "done",
              "evidence": "git 1d02fbfa"
            },
            {
              "v": "4cb9f29c",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested Hermes hooks source 3019",
              "items": [
                "haelyra",
                "4cb9f29c06"
              ],
              "status": "done",
              "evidence": "git 4cb9f29c"
            },
            {
              "v": "aba3c241",
              "date": "10-09",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin exact import resolution, portable separators, and regex after a condition",
              "items": [
                "montjeffrey",
                "aba3c241af"
              ],
              "status": "done",
              "evidence": "git aba3c241"
            },
            {
              "v": "61399718",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested token card source 3039 and synchronize catalog",
              "items": [
                "haelyra",
                "6139971817"
              ],
              "status": "done",
              "evidence": "git 61399718"
            },
            {
              "v": "a1e0f46c",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested PowerShell prerequisite source 3042",
              "items": [
                "haelyra",
                "a1e0f46c7c"
              ],
              "status": "done",
              "evidence": "git a1e0f46c"
            },
            {
              "v": "fa3f459a",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): resolve imports exactly, reject backslash separators, see regex after a condition",
              "items": [
                "montjeffrey",
                "fa3f459a93"
              ],
              "status": "done",
              "evidence": "git fa3f459a"
            },
            {
              "v": "dd14493e",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the second closure review follow-up",
              "items": [
                "montjeffrey",
                "dd14493e98"
              ],
              "status": "done",
              "evidence": "git dd14493e"
            },
            {
              "v": "117cda35",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: retain original 3002 ancestry with current tested parser",
              "items": [
                "haelyra",
                "117cda3538"
              ],
              "status": "done",
              "evidence": "git 117cda35"
            },
            {
              "v": "46ec7aca",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested SQL wrapper guard source 3050",
              "items": [
                "haelyra",
                "46ec7aca9b"
              ],
              "status": "done",
              "evidence": "git 46ec7aca"
            },
            {
              "v": "7265b989",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested bounded Hookify carry-forward candidate 3055",
              "items": [
                "haelyra",
                "7265b989c4"
              ],
              "status": "done",
              "evidence": "git 7265b989"
            },
            {
              "v": "cc288b6e",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: reconcile tested OpenCode home carry-forward with Copilot transforms",
              "items": [
                "haelyra",
                "cc288b6e28"
              ],
              "status": "done",
              "evidence": "git cc288b6e"
            },
            {
              "v": "195301cb",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested optional dependency carry-forward 3119",
              "items": [
                "haelyra",
                "195301cb04"
              ],
              "status": "done",
              "evidence": "git 195301cb"
            },
            {
              "v": "dec97747",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(csharp): recommend AwesomeAssertions for readable assertions",
              "items": [
                "Eneko Ruiz",
                "dec9774791"
              ],
              "status": "done",
              "evidence": "git dec97747"
            },
            {
              "v": "958f54ea",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested dependency source 3049 and bound brace expansion",
              "items": [
                "haelyra",
                "958f54eac1"
              ],
              "status": "done",
              "evidence": "git 958f54ea"
            },
            {
              "v": "d5abc5c8",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve reviewed plan registry source 2914",
              "items": [
                "haelyra",
                "d5abc5c8fc"
              ],
              "status": "done",
              "evidence": "git d5abc5c8"
            },
            {
              "v": "206ad231",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve payment source 2575 with tested origin and approval boundaries",
              "items": [
                "haelyra",
                "206ad23125"
              ],
              "status": "done",
              "evidence": "git 206ad231"
            },
            {
              "v": "0aebb36a",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve cache guidance source 3173 with measured cost boundaries",
              "items": [
                "haelyra",
                "0aebb36af2"
              ],
              "status": "done",
              "evidence": "git 0aebb36a"
            },
            {
              "v": "67c89375",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve serialized store source 3252 with portable cache fixtures",
              "items": [
                "haelyra",
                "67c89375c3"
              ],
              "status": "done",
              "evidence": "git 67c89375"
            },
            {
              "v": "5cc14d7c",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #2914 from santhiprakash/fix/plan-orchestrate-retired-orchestrate",
              "items": [
                "haelyra",
                "5cc14d7c31"
              ],
              "status": "done",
              "evidence": "git 5cc14d7c"
            },
            {
              "v": "eed806bf",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: restore unskipped installer refactor validation",
              "items": [
                "haelyra",
                "eed806bf4a"
              ],
              "status": "done",
              "evidence": "git eed806bf"
            },
            {
              "v": "9f9ea5e3",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(codex): fail closed when pre-commit cannot find ripgrep",
              "items": [
                "Eneko Ruiz",
                "9f9ea5e35b"
              ],
              "status": "done",
              "evidence": "git 9f9ea5e3"
            },
            {
              "v": "c27de0c5",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve reviewed main integration ancestry for 2914",
              "items": [
                "haelyra",
                "c27de0c55c"
              ],
              "status": "done",
              "evidence": "git c27de0c5"
            },
            {
              "v": "ad031b60",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge upstream/main into feat/gateguard-fewer-round-trips",
              "items": [
                "montjeffrey",
                "ad031b60fb"
              ],
              "status": "done",
              "evidence": "git ad031b60"
            },
            {
              "v": "d312d6f3",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve project and user Codex configuration source 3253",
              "items": [
                "haelyra",
                "d312d6f35c"
              ],
              "status": "done",
              "evidence": "git d312d6f3"
            },
            {
              "v": "b6416b07",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve role sample source 3219 and user model choices",
              "items": [
                "haelyra",
                "b6416b07e8"
              ],
              "status": "done",
              "evidence": "git b6416b07"
            },
            {
              "v": "a5432e84",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested stocktake discovery and save source 3220",
              "items": [
                "haelyra",
                "a5432e84f7"
              ],
              "status": "done",
              "evidence": "git a5432e84"
            },
            {
              "v": "d854a4a2",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve OSINT source 3198 and upstream license bytes",
              "items": [
                "haelyra",
                "d854a4a280"
              ],
              "status": "done",
              "evidence": "git d854a4a2"
            },
            {
              "v": "d38daabd",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve Ruby reviewer source 3227 with nil and false semantics",
              "items": [
                "haelyra",
                "d38daabd98"
              ],
              "status": "done",
              "evidence": "git d38daabd"
            },
            {
              "v": "b6e02619",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve static MCP dependency review source 3239",
              "items": [
                "haelyra",
                "b6e0261903"
              ],
              "status": "done",
              "evidence": "git b6e02619"
            },
            {
              "v": "5bf248d5",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve source-verified tinystruct documentation 3231",
              "items": [
                "haelyra",
                "5bf248d51d"
              ],
              "status": "done",
              "evidence": "git 5bf248d5"
            },
            {
              "v": "b6e2cfe5",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve tested installer extraction 3187 and Copilot ownership fixture",
              "items": [
                "haelyra",
                "b6e2cfe5e4"
              ],
              "status": "done",
              "evidence": "git b6e2cfe5"
            },
            {
              "v": "ba052034",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reconcile reviewed sources and generated integration surfaces",
              "items": [
                "haelyra",
                "ba0520340f"
              ],
              "status": "done",
              "evidence": "git ba052034"
            },
            {
              "v": "53e606b7",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve reviewed original and refreshed source ancestry",
              "items": [
                "haelyra",
                "53e606b78e"
              ],
              "status": "done",
              "evidence": "git 53e606b7"
            },
            {
              "v": "253c051d",
              "date": "10-09",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin CommonJS require candidates, regex after a block, and non-import from",
              "items": [
                "montjeffrey",
                "253c051dbf"
              ],
              "status": "done",
              "evidence": "git 253c051d"
            },
            {
              "v": "bdb2ceb2",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): follow Node's CommonJS candidates, see regex after a block, ignore non-import from",
              "items": [
                "montjeffrey",
                "bdb2ceb230"
              ],
              "status": "done",
              "evidence": "git bdb2ceb2"
            },
            {
              "v": "0ca7864a",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the third closure review follow-up",
              "items": [
                "montjeffrey",
                "0ca7864ad7"
              ],
              "status": "done",
              "evidence": "git 0ca7864a"
            },
            {
              "v": "64ac61e6",
              "date": "10-09",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin member calls and deeply nested computed arguments",
              "items": [
                "montjeffrey",
                "64ac61e6a3"
              ],
              "status": "done",
              "evidence": "git 64ac61e6"
            },
            {
              "v": "5ce12fb9",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): ignore member calls named require or import, and warn on deeply nested arguments",
              "items": [
                "montjeffrey",
                "5ce12fb9f9"
              ],
              "status": "done",
              "evidence": "git 5ce12fb9"
            },
            {
              "v": "0f8a3026",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the member-call and nested-argument fixes",
              "items": [
                "montjeffrey",
                "0f8a302627"
              ],
              "status": "done",
              "evidence": "git 0f8a3026"
            },
            {
              "v": "0cb1476f",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: pin and bound Hookify rule reads",
              "items": [
                "haelyra",
                "0cb1476f9d"
              ],
              "status": "done",
              "evidence": "git 0cb1476f"
            },
            {
              "v": "da8c7024",
              "date": "10-09",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: drop the node_modules symlink committed by mistake",
              "items": [
                "montjeffrey",
                "da8c702435"
              ],
              "status": "done",
              "evidence": "git da8c7024"
            },
            {
              "v": "8dc5fe30",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge feat/gateguard-fewer-round-trips into feat/gateguard-question-effectiveness",
              "items": [
                "montjeffrey",
                "8dc5fe3082"
              ],
              "status": "done",
              "evidence": "git 8dc5fe30"
            },
            {
              "v": "5981dd70",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: complete reviewed integration workflows and safety checks",
              "items": [
                "haelyra",
                "5981dd7092"
              ],
              "status": "done",
              "evidence": "git 5981dd70"
            },
            {
              "v": "59305119",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed #3277 ancestry with the stronger tested config",
              "items": [
                "haelyra",
                "5930511997"
              ],
              "status": "done",
              "evidence": "git 59305119"
            },
            {
              "v": "335f3296",
              "date": "10-09",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): pin recovery from a partial index file and generation-bound content",
              "items": [
                "montjeffrey",
                "335f329618"
              ],
              "status": "done",
              "evidence": "git 335f3296"
            },
            {
              "v": "0e78d885",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): publish routing index bytes atomically and repair a partial file",
              "items": [
                "montjeffrey",
                "0e78d88506"
              ],
              "status": "done",
              "evidence": "git 0e78d885"
            },
            {
              "v": "beb33e51",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(context): record the October 9 review follow-up",
              "items": [
                "montjeffrey",
                "beb33e512f"
              ],
              "status": "done",
              "evidence": "git beb33e51"
            },
            {
              "v": "984d4f07",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve Hookify Windows missing-device identity",
              "items": [
                "haelyra",
                "984d4f0701"
              ],
              "status": "done",
              "evidence": "git 984d4f07"
            },
            {
              "v": "d66e684d",
              "date": "10-09",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(gitignore): ignore node_modules whether it is a directory or a symlink",
              "items": [
                "montjeffrey",
                "d66e684d4f"
              ],
              "status": "done",
              "evidence": "git d66e684d"
            },
            {
              "v": "aac9b3d3",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve activity errors, asset bytes and runner summaries",
              "items": [
                "haelyra",
                "aac9b3d34b"
              ],
              "status": "done",
              "evidence": "git aac9b3d3"
            },
            {
              "v": "8384d609",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3479 from affaan-m/integration/ecc-043-20261009-verified",
              "items": [
                "haelyra",
                "8384d609a0"
              ],
              "status": "done",
              "evidence": "git 8384d609"
            },
            {
              "v": "92947a68",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge upstream/main into feat/gateguard-fewer-round-trips",
              "items": [
                "montjeffrey",
                "92947a68df"
              ],
              "status": "done",
              "evidence": "git 92947a68"
            },
            {
              "v": "993b5f23",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: guard literal Git hook redirects and env split arguments",
              "items": [
                "haelyra",
                "993b5f230f"
              ],
              "status": "done",
              "evidence": "git 993b5f23"
            },
            {
              "v": "34a97fa8",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject unsupported env split-string escapes",
              "items": [
                "haelyra",
                "34a97fa898"
              ],
              "status": "done",
              "evidence": "git 34a97fa8"
            },
            {
              "v": "4eb71d92",
              "date": "10-09",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3484 from affaan-m/integration/ecc-043-20261009-verified",
              "items": [
                "haelyra",
                "4eb71d92a3"
              ],
              "status": "done",
              "evidence": "git 4eb71d92"
            },
            {
              "v": "df82e75a",
              "date": "10-09",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin exact import resolution, portable separators, and regex after a condition",
              "items": [
                "montjeffrey",
                "df82e75a4c"
              ],
              "status": "done",
              "evidence": "git df82e75a"
            },
            {
              "v": "a22c65aa",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): resolve imports exactly, reject backslash separators, see regex after a condition",
              "items": [
                "montjeffrey",
                "a22c65aa6a"
              ],
              "status": "done",
              "evidence": "git a22c65aa"
            },
            {
              "v": "a1d9eeed",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the second closure review follow-up",
              "items": [
                "montjeffrey",
                "a1d9eeed2f"
              ],
              "status": "done",
              "evidence": "git a1d9eeed"
            },
            {
              "v": "21784add",
              "date": "10-09",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin CommonJS require candidates, regex after a block, and non-import from",
              "items": [
                "montjeffrey",
                "21784add5d"
              ],
              "status": "done",
              "evidence": "git 21784add"
            },
            {
              "v": "498da59b",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): follow Node's CommonJS candidates, see regex after a block, ignore non-import from",
              "items": [
                "montjeffrey",
                "498da59b3c"
              ],
              "status": "done",
              "evidence": "git 498da59b"
            },
            {
              "v": "d9fe9717",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the third closure review follow-up",
              "items": [
                "montjeffrey",
                "d9fe97171d"
              ],
              "status": "done",
              "evidence": "git d9fe9717"
            },
            {
              "v": "7497de02",
              "date": "10-09",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin member calls and deeply nested computed arguments",
              "items": [
                "montjeffrey",
                "7497de02ab"
              ],
              "status": "done",
              "evidence": "git 7497de02"
            },
            {
              "v": "a54c8df9",
              "date": "10-09",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): ignore member calls named require or import, and warn on deeply nested arguments",
              "items": [
                "montjeffrey",
                "a54c8df98b"
              ],
              "status": "done",
              "evidence": "git a54c8df9"
            },
            {
              "v": "79f327f6",
              "date": "10-09",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): record the member-call and nested-argument fixes",
              "items": [
                "montjeffrey",
                "79f327f6c9"
              ],
              "status": "done",
              "evidence": "git 79f327f6"
            },
            {
              "v": "3849426a",
              "date": "10-09",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(ci): share the catalog count replacer",
              "items": [
                "Affaan Mustafa",
                "3849426a95"
              ],
              "status": "done",
              "evidence": "git 3849426a"
            },
            {
              "v": "ac5fd9ea",
              "date": "10-10",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: bump rustls",
              "items": [
                "dependabot[bot]",
                "ac5fd9ead9"
              ],
              "status": "done",
              "evidence": "git ac5fd9ea"
            },
            {
              "v": "edeb7b9e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): scope compound directives and preserve imperative requests",
              "items": [
                "Yann Roberto",
                "edeb7b9e9a"
              ],
              "status": "done",
              "evidence": "git edeb7b9e"
            },
            {
              "v": "763acfbc",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): require scoped evidence for automatic skill loading",
              "items": [
                "Yann Roberto",
                "763acfbce0"
              ],
              "status": "done",
              "evidence": "git 763acfbc"
            },
            {
              "v": "b5a8bf06",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): preserve skill requests after task preambles",
              "items": [
                "Yann Roberto",
                "b5a8bf0603"
              ],
              "status": "done",
              "evidence": "git b5a8bf06"
            },
            {
              "v": "a70b9795",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): keep illustrative skill requests on the proposal path",
              "items": [
                "Yann Roberto",
                "a70b9795d1"
              ],
              "status": "done",
              "evidence": "git a70b9795"
            },
            {
              "v": "310441dc",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): honor current-task requests after examples",
              "items": [
                "Yann Roberto",
                "310441dcc8"
              ],
              "status": "done",
              "evidence": "git 310441dc"
            },
            {
              "v": "e1546ed4",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: installer slice from PR #3120 review (Haelyra)",
              "items": [
                "Geronimo",
                "e1546ed45d"
              ],
              "status": "done",
              "evidence": "git e1546ed4"
            },
            {
              "v": "cd1a253d",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: review feedback on installer slice tests",
              "items": [
                "Geronimo",
                "cd1a253d61"
              ],
              "status": "done",
              "evidence": "git cd1a253d"
            },
            {
              "v": "b40f0f33",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: make concurrency test genuinely overlapping with continuous validity probes",
              "items": [
                "Geronimo",
                "b40f0f33d7"
              ],
              "status": "done",
              "evidence": "git b40f0f33"
            },
            {
              "v": "807ccbfc",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: sync origin/main into docs-context-decisions",
              "items": [
                "Seekers2001",
                "807ccbfcc0"
              ],
              "status": "done",
              "evidence": "git 807ccbfc"
            },
            {
              "v": "83bba4e4",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: sync origin/main into docs-change-impact",
              "items": [
                "Seekers2001",
                "83bba4e41f"
              ],
              "status": "done",
              "evidence": "git 83bba4e4"
            },
            {
              "v": "d8100784",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: sync origin/main into docs-test-regression",
              "items": [
                "Seekers2001",
                "d810078424"
              ],
              "status": "done",
              "evidence": "git d8100784"
            },
            {
              "v": "2d9e6977",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: add native Qoder plugin support",
              "items": [
                "calm",
                "2d9e6977dc"
              ],
              "status": "done",
              "evidence": "git 2d9e6977"
            },
            {
              "v": "92728a07",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test: harden Qoder plugin verification",
              "items": [
                "calm",
                "92728a07bc"
              ],
              "status": "done",
              "evidence": "git 92728a07"
            },
            {
              "v": "f124f339",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test: honor Qoder hook timeout",
              "items": [
                "calm",
                "f124f339af"
              ],
              "status": "done",
              "evidence": "git f124f339"
            },
            {
              "v": "2cb50cea",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test: isolate Qoder context limits",
              "items": [
                "calm",
                "2cb50cea63"
              ],
              "status": "done",
              "evidence": "git 2cb50cea"
            },
            {
              "v": "e128f439",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'main' into cursor/skill-host-compat-ci-10d0",
              "items": [
                "Matt Van Horn",
                "e128f4398b"
              ],
              "status": "done",
              "evidence": "git e128f439"
            },
            {
              "v": "5ec23e8e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reconcile skill-host-compat with current main",
              "items": [
                "Matt Van Horn",
                "5ec23e8e3d"
              ],
              "status": "done",
              "evidence": "git 5ec23e8e"
            },
            {
              "v": "df50d561",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3283: serialize session alias mutations",
              "items": [
                "haelyra",
                "df50d56146"
              ],
              "status": "done",
              "evidence": "git df50d561"
            },
            {
              "v": "82a3913d",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3414: isolate state-store CLI homes",
              "items": [
                "haelyra",
                "82a3913da6"
              ],
              "status": "done",
              "evidence": "git 82a3913d"
            },
            {
              "v": "b79346d1",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(frontend): integrate rendered evidence contract from PR 2814",
              "items": [
                "haelyra",
                "b79346d16b"
              ],
              "status": "done",
              "evidence": "git b79346d1"
            },
            {
              "v": "7753a55d",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3416: route hook state through Claude profiles",
              "items": [
                "haelyra",
                "7753a55d08"
              ],
              "status": "done",
              "evidence": "git 7753a55d"
            },
            {
              "v": "de39adfa",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3322: correct Kiro steering inclusion contract",
              "items": [
                "haelyra",
                "de39adfa9d"
              ],
              "status": "done",
              "evidence": "git de39adfa"
            },
            {
              "v": "644c7cae",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3431: correct hooks permission settings paths",
              "items": [
                "haelyra",
                "644c7cae8d"
              ],
              "status": "done",
              "evidence": "git 644c7cae"
            },
            {
              "v": "b3c3b775",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3440: observe active worktree changes",
              "items": [
                "haelyra",
                "b3c3b77561"
              ],
              "status": "done",
              "evidence": "git b3c3b775"
            },
            {
              "v": "423edc1d",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3441: initialize OpenCode home hooks once",
              "items": [
                "haelyra",
                "423edc1d46"
              ],
              "status": "done",
              "evidence": "git 423edc1d"
            },
            {
              "v": "b7456359",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3432: document enabled OpenCode hook behavior",
              "items": [
                "haelyra",
                "b7456359d2"
              ],
              "status": "done",
              "evidence": "git b7456359"
            },
            {
              "v": "51d5cd1e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3433: explain adaptive reasoning controls",
              "items": [
                "haelyra",
                "51d5cd1ef4"
              ],
              "status": "done",
              "evidence": "git 51d5cd1e"
            },
            {
              "v": "01a6373a",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3477: align C# rule with AwesomeAssertions guidance",
              "items": [
                "haelyra",
                "01a6373a1d"
              ],
              "status": "done",
              "evidence": "git 01a6373a"
            },
            {
              "v": "dd527e36",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3443: match nested TypeScript diagnostics on Windows",
              "items": [
                "haelyra",
                "dd527e3613"
              ],
              "status": "done",
              "evidence": "git dd527e36"
            },
            {
              "v": "a003286e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3455: preserve verification gate failure status without SIGPIPE",
              "items": [
                "haelyra",
                "a003286e10"
              ],
              "status": "done",
              "evidence": "git a003286e"
            },
            {
              "v": "a4bf7a45",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(sanitizer): integrate unreadable audit with portable filename quoting",
              "items": [
                "haelyra",
                "a4bf7a45ca"
              ],
              "status": "done",
              "evidence": "git a4bf7a45"
            },
            {
              "v": "94ed7023",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(commands): preserve string argument hints from PR 3472",
              "items": [
                "haelyra",
                "94ed702344"
              ],
              "status": "done",
              "evidence": "git 94ed7023"
            },
            {
              "v": "2a75aaa8",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(orchestration): integrate supported Codex worker invocation (#3434)",
              "items": [
                "haelyra",
                "2a75aaa803"
              ],
              "status": "done",
              "evidence": "git 2a75aaa8"
            },
            {
              "v": "ba1f8d19",
              "date": "10-10",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(gitignore): integrate symlinked dependency exclusion (#3482)",
              "items": [
                "haelyra",
                "ba1f8d19f6"
              ],
              "status": "done",
              "evidence": "git ba1f8d19"
            },
            {
              "v": "b40c9d52",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3470: detect Dart and structurally identify Flutter dependencies",
              "items": [
                "haelyra",
                "b40c9d5289"
              ],
              "status": "done",
              "evidence": "git b40c9d52"
            },
            {
              "v": "fa7f1358",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(qwen): integrate native workflow context and quote remaining hint",
              "items": [
                "haelyra",
                "fa7f135812"
              ],
              "status": "done",
              "evidence": "git fa7f1358"
            },
            {
              "v": "27875bfd",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3444: track OpenCode skill runs and report measurement gaps",
              "items": [
                "haelyra",
                "27875bfd02"
              ],
              "status": "done",
              "evidence": "git 27875bfd"
            },
            {
              "v": "3b9fc44e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3445: launch formatter shims safely on Windows",
              "items": [
                "haelyra",
                "3b9fc44e14"
              ],
              "status": "done",
              "evidence": "git 3b9fc44e"
            },
            {
              "v": "6038e899",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3428: validate and sync every catalog project tree entry",
              "items": [
                "haelyra",
                "6038e89904"
              ],
              "status": "done",
              "evidence": "git 6038e899"
            },
            {
              "v": "41ce11d8",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3456: adapt manual Claude component references",
              "items": [
                "haelyra",
                "41ce11d889"
              ],
              "status": "done",
              "evidence": "git 41ce11d8"
            },
            {
              "v": "54a92785",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3464: identify hooks by their input sessions",
              "items": [
                "haelyra",
                "54a9278560"
              ],
              "status": "done",
              "evidence": "git 54a92785"
            },
            {
              "v": "53dd92ee",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): integrate atomic state and global dry-run (#3486)",
              "items": [
                "haelyra",
                "53dd92eef6"
              ],
              "status": "done",
              "evidence": "git 53dd92ee"
            },
            {
              "v": "4b612a73",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3462: add Arabic locale while preserving Bengali distribution",
              "items": [
                "haelyra",
                "4b612a73f3"
              ],
              "status": "done",
              "evidence": "git 4b612a73"
            },
            {
              "v": "07c18210",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(qwen): adapt managed agents before ownership receipts",
              "items": [
                "haelyra",
                "07c18210eb"
              ],
              "status": "done",
              "evidence": "git 07c18210"
            },
            {
              "v": "e53dd0ea",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3447: add bounded brownfield audit with project-owned decisions",
              "items": [
                "haelyra",
                "e53dd0ea05"
              ],
              "status": "done",
              "evidence": "git e53dd0ea"
            },
            {
              "v": "8757c699",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): integrate GNU sed execution receiver checks from PR 3493",
              "items": [
                "haelyra",
                "8757c69927"
              ],
              "status": "done",
              "evidence": "git 8757c699"
            },
            {
              "v": "350f8516",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3475: isolate Windows developer-tool fixtures",
              "items": [
                "haelyra",
                "350f8516d2"
              ],
              "status": "done",
              "evidence": "git 350f8516"
            },
            {
              "v": "37752df9",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3466: add authorized gateway smoke workflow with failure cleanup",
              "items": [
                "haelyra",
                "37752df9e0"
              ],
              "status": "done",
              "evidence": "git 37752df9"
            },
            {
              "v": "ecf2f31c",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3476: select native Windows shell paths",
              "items": [
                "haelyra",
                "ecf2f31cb7"
              ],
              "status": "done",
              "evidence": "git ecf2f31c"
            },
            {
              "v": "4735712a",
              "date": "10-10",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(deps): integrate verified Rust dependency updates (#3200, #3250, #3483)",
              "items": [
                "haelyra",
                "4735712ac1"
              ],
              "status": "done",
              "evidence": "git 4735712a"
            },
            {
              "v": "c7f2c2f7",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): integrate anchored implicit skill admission (#3451)",
              "items": [
                "haelyra",
                "c7f2c2f702"
              ],
              "status": "done",
              "evidence": "git c7f2c2f7"
            },
            {
              "v": "58fc8f25",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(qoder): integrate native plugin and SessionStart projection",
              "items": [
                "haelyra",
                "58fc8f25a5"
              ],
              "status": "done",
              "evidence": "git 58fc8f25"
            },
            {
              "v": "7444ea72",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): integrate per-request Claude 5.5 cost estimation (#3491)",
              "items": [
                "haelyra",
                "7444ea72db"
              ],
              "status": "done",
              "evidence": "git 7444ea72"
            },
            {
              "v": "fb1429a0",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3478: fail closed on unavailable secret scanning",
              "items": [
                "haelyra",
                "fb1429a08c"
              ],
              "status": "done",
              "evidence": "git fb1429a0"
            },
            {
              "v": "b8d34fd1",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(context): integrate verified isolated Claude generations (#3452)",
              "items": [
                "haelyra",
                "b8d34fd134"
              ],
              "status": "done",
              "evidence": "git b8d34fd1"
            },
            {
              "v": "bb15240c",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): preserve native Claude names through repair receipts",
              "items": [
                "haelyra",
                "bb15240c9c"
              ],
              "status": "done",
              "evidence": "git bb15240c"
            },
            {
              "v": "56a8235e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(catalog): preserve locale navigation and export new skill metadata",
              "items": [
                "haelyra",
                "56a8235ea6"
              ],
              "status": "done",
              "evidence": "git 56a8235e"
            },
            {
              "v": "eb7ffd8d",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(agents): integrate isolated Pi conversion foundation from PR 3022",
              "items": [
                "haelyra",
                "eb7ffd8d64"
              ],
              "status": "done",
              "evidence": "git eb7ffd8d"
            },
            {
              "v": "d05a507c",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3490: reserve lifecycle time for Stop persistence",
              "items": [
                "haelyra",
                "d05a507c8b"
              ],
              "status": "done",
              "evidence": "git d05a507c"
            },
            {
              "v": "9d09febe",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): scope host compatibility to target projections",
              "items": [
                "haelyra",
                "9d09febe5d"
              ],
              "status": "done",
              "evidence": "git 9d09febe"
            },
            {
              "v": "810e5c01",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(context): integrate generation-bound advisory suggestions (#3453)",
              "items": [
                "haelyra",
                "810e5c0176"
              ],
              "status": "done",
              "evidence": "git 810e5c01"
            },
            {
              "v": "64fdb301",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3457: validate static carrier dependencies with the maintained TypeScript parser",
              "items": [
                "haelyra",
                "64fdb301cd"
              ],
              "status": "done",
              "evidence": "git 64fdb301"
            },
            {
              "v": "a3e9ddfd",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(gateguard): integrate evidence-aware first-touch questions",
              "items": [
                "haelyra",
                "a3e9ddfde7"
              ],
              "status": "done",
              "evidence": "git a3e9ddfd"
            },
            {
              "v": "e6d8b6de",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): integrate hidden-intent effectiveness trials",
              "items": [
                "haelyra",
                "e6d8b6ded1"
              ],
              "status": "done",
              "evidence": "git e6d8b6de"
            },
            {
              "v": "603164ae",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(review): integrate consent-gated independent Codex review",
              "items": [
                "haelyra",
                "603164ae79"
              ],
              "status": "done",
              "evidence": "git 603164ae"
            },
            {
              "v": "cc48be3c",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): bind advisory receipts and apply suggestion evidence floors",
              "items": [
                "haelyra",
                "cc48be3c52"
              ],
              "status": "done",
              "evidence": "git cc48be3c"
            },
            {
              "v": "2a69663c",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: integrate twelve reviewed catalog and documentation PRs",
              "items": [
                "haelyra",
                "2a69663c5c"
              ],
              "status": "done",
              "evidence": "git 2a69663c"
            },
            {
              "v": "e9f8c3ca",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge PR #3256: reconcile obsolete managed installer files safely",
              "items": [
                "haelyra",
                "e9f8c3ca66"
              ],
              "status": "done",
              "evidence": "git e9f8c3ca"
            },
            {
              "v": "3b24eca2",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(dsh): integrate version-scoped hook setup and distribution wiring",
              "items": [
                "haelyra",
                "3b24eca2e6"
              ],
              "status": "done",
              "evidence": "git 3b24eca2"
            },
            {
              "v": "38c40cda",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: integrate fourteen reviewed runtime and hook PRs",
              "items": [
                "haelyra",
                "38c40cda73"
              ],
              "status": "done",
              "evidence": "git 38c40cda"
            },
            {
              "v": "9966fef8",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(agents): preserve user-owned definitions during Pi conversion",
              "items": [
                "haelyra",
                "9966fef84a"
              ],
              "status": "done",
              "evidence": "git 9966fef8"
            },
            {
              "v": "113f58d8",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): reconcile obsolete managed files without deleting edits (#3256)",
              "items": [
                "haelyra",
                "113f58d8e6"
              ],
              "status": "done",
              "evidence": "git 113f58d8"
            },
            {
              "v": "19a96ca2",
              "date": "10-10",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(review): keep temporary-directory guidance compatible with command validation",
              "items": [
                "haelyra",
                "19a96ca2bb"
              ],
              "status": "done",
              "evidence": "git 19a96ca2"
            },
            {
              "v": "be230bd8",
              "date": "10-10",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: integrate reviewed adapters, conversion and GateGuard improvements",
              "items": [
                "haelyra",
                "be230bd85c"
              ],
              "status": "done",
              "evidence": "git be230bd8"
            },
            {
              "v": "e4db30b5",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): remove obsolete path binding from advice fixture",
              "items": [
                "haelyra",
                "e4db30b583"
              ],
              "status": "done",
              "evidence": "git e4db30b5"
            },
            {
              "v": "56d4ff43",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(carriers): pin object-literal division, spread requires and extra arguments",
              "items": [
                "montjeffrey",
                "56d4ff4331"
              ],
              "status": "done",
              "evidence": "git 56d4ff43"
            },
            {
              "v": "f7bc7503",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(carriers): close the object-literal, spread and extra-argument false negatives",
              "items": [
                "montjeffrey",
                "f7bc750326"
              ],
              "status": "done",
              "evidence": "git f7bc7503"
            },
            {
              "v": "0cd54181",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(opencode): exercise installed discovery without activating inert barrel",
              "items": [
                "haelyra",
                "0cd541812e"
              ],
              "status": "done",
              "evidence": "git 0cd54181"
            },
            {
              "v": "01b0202c",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(deps): close current URI and Markdown toolchain advisories",
              "items": [
                "haelyra",
                "01b0202c86"
              ],
              "status": "done",
              "evidence": "git 01b0202c"
            },
            {
              "v": "8b76be1d",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge refreshed PR #3457: preserve current source ancestry and new regression cases",
              "items": [
                "haelyra",
                "8b76be1dbe"
              ],
              "status": "done",
              "evidence": "git 8b76be1d"
            },
            {
              "v": "3c5ae57a",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/review/catalog-current' into integration/ecc-043-20261010",
              "items": [
                "haelyra",
                "3c5ae57a2e"
              ],
              "status": "done",
              "evidence": "git 3c5ae57a"
            },
            {
              "v": "38c7d89b",
              "date": "10-10",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(carriers): normalize reconciliation note spacing",
              "items": [
                "haelyra",
                "38c7d89b3e"
              ],
              "status": "done",
              "evidence": "git 38c7d89b"
            },
            {
              "v": "5cf52627",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(qwen): preserve explicit empty agent tool allowlists",
              "items": [
                "haelyra",
                "5cf5262760"
              ],
              "status": "done",
              "evidence": "git 5cf52627"
            },
            {
              "v": "fa26ba06",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(qwen): reject unrepresentable empty tool authority before writes",
              "items": [
                "haelyra",
                "fa26ba0673"
              ],
              "status": "done",
              "evidence": "git fa26ba06"
            },
            {
              "v": "80446792",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(pi): classify new provider and orchestration resources",
              "items": [
                "haelyra",
                "8044679227"
              ],
              "status": "done",
              "evidence": "git 80446792"
            },
            {
              "v": "d6dc05a1",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(tests): keep transcript and hook fixtures in private temp roots",
              "items": [
                "haelyra",
                "d6dc05a12b"
              ],
              "status": "done",
              "evidence": "git d6dc05a1"
            },
            {
              "v": "b327efca",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(transcript): isolate the extracted reader missing-file probe",
              "items": [
                "haelyra",
                "b327efcad3"
              ],
              "status": "done",
              "evidence": "git b327efca"
            },
            {
              "v": "7682bb5b",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(adapters): bound parsing and publish review artifacts safely",
              "items": [
                "haelyra",
                "7682bb5b49"
              ],
              "status": "done",
              "evidence": "git 7682bb5b"
            },
            {
              "v": "1d13881b",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): scope transcript byte counts to live descriptors",
              "items": [
                "haelyra",
                "1d13881b1e"
              ],
              "status": "done",
              "evidence": "git 1d13881b"
            },
            {
              "v": "a2dbcdb2",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(eval): reject resume symlinks without no-follow support",
              "items": [
                "haelyra",
                "a2dbcdb2e0"
              ],
              "status": "done",
              "evidence": "git a2dbcdb2"
            },
            {
              "v": "630edba9",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(pi): regenerate the curated profile after source integration",
              "items": [
                "haelyra",
                "630edba97e"
              ],
              "status": "done",
              "evidence": "git 630edba9"
            },
            {
              "v": "a062b22a",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ci): provision real ripgrep for secret-scanner workflow checks",
              "items": [
                "haelyra",
                "a062b22a35"
              ],
              "status": "done",
              "evidence": "git a062b22a"
            },
            {
              "v": "6d813fe3",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(qwen): normalize indentless lists and validate converted frontmatter",
              "items": [
                "haelyra",
                "6d813fe308"
              ],
              "status": "done",
              "evidence": "git 6d813fe3"
            },
            {
              "v": "74aace40",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opencode): preserve CommonJS runtime scope and user script ownership",
              "items": [
                "haelyra",
                "74aace4071"
              ],
              "status": "done",
              "evidence": "git 74aace40"
            },
            {
              "v": "19a1b62f",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(eval): preserve session ownership and frozen intent inputs",
              "items": [
                "haelyra",
                "19a1b62f35"
              ],
              "status": "done",
              "evidence": "git 19a1b62f"
            },
            {
              "v": "d34d022b",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): expect native directory keys on Windows",
              "items": [
                "haelyra",
                "d34d022bc5"
              ],
              "status": "done",
              "evidence": "git d34d022b"
            },
            {
              "v": "ad176030",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(settings): allow quarantine recovery retry on slower filesystems",
              "items": [
                "haelyra",
                "ad176030e7"
              ],
              "status": "done",
              "evidence": "git ad176030"
            },
            {
              "v": "a0ae9523",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(codex): canonicalize native Windows task paths before dispatch",
              "items": [
                "haelyra",
                "a0ae95231d"
              ],
              "status": "done",
              "evidence": "git a0ae9523"
            },
            {
              "v": "a0dacd22",
              "date": "10-10",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: allow bounded completion of the full Windows test matrix",
              "items": [
                "haelyra",
                "a0dacd2282"
              ],
              "status": "done",
              "evidence": "git a0dacd22"
            },
            {
              "v": "24de70a5",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(fs): retry bounded Windows atomic rename sharing failures",
              "items": [
                "haelyra",
                "24de70a507"
              ],
              "status": "done",
              "evidence": "git 24de70a5"
            },
            {
              "v": "740fc4fa",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge refreshed PR #3491 request-model deduplication follow-up",
              "items": [
                "haelyra",
                "740fc4fa88"
              ],
              "status": "done",
              "evidence": "git 740fc4fa"
            },
            {
              "v": "9aa9003e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: account for PowerShell CRLF in strict PCRE2 probe",
              "items": [
                "haelyra",
                "9aa9003e1b"
              ],
              "status": "done",
              "evidence": "git 9aa9003e"
            },
            {
              "v": "e76ea52a",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(security): bind fixture reads and mutations to private descriptors",
              "items": [
                "haelyra",
                "e76ea52ae3"
              ],
              "status": "done",
              "evidence": "git e76ea52a"
            },
            {
              "v": "872df03e",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): enforce literal formatter invocation at spawn boundaries",
              "items": [
                "haelyra",
                "872df03e1f"
              ],
              "status": "done",
              "evidence": "git 872df03e"
            },
            {
              "v": "0b077081",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(plan-canvas): validate feedback IPC locator and request shape",
              "items": [
                "haelyra",
                "0b07708137"
              ],
              "status": "done",
              "evidence": "git 0b077081"
            },
            {
              "v": "e259e06c",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(plan-canvas): reconcile profile resolver and retain invalid feedback queues",
              "items": [
                "haelyra",
                "e259e06c75"
              ],
              "status": "done",
              "evidence": "git e259e06c"
            },
            {
              "v": "6f02de84",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(profiles): seed feedback through the canonical session producer",
              "items": [
                "haelyra",
                "6f02de840b"
              ],
              "status": "done",
              "evidence": "git 6f02de84"
            },
            {
              "v": "068d9325",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(state): retry Windows sharing reads without dropping published aliases",
              "items": [
                "haelyra",
                "068d93251e"
              ],
              "status": "done",
              "evidence": "git 068d9325"
            },
            {
              "v": "15834ef1",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(state): remove the superseded filesystem import",
              "items": [
                "haelyra",
                "15834ef199"
              ],
              "status": "done",
              "evidence": "git 15834ef1"
            },
            {
              "v": "0a181df2",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(session): preserve optional startup context and independent history reads",
              "items": [
                "haelyra",
                "0a181df218"
              ],
              "status": "done",
              "evidence": "git 0a181df2"
            },
            {
              "v": "3f3309c9",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(session): exercise fallback persistence across calendar rollover",
              "items": [
                "haelyra",
                "3f3309c93e"
              ],
              "status": "done",
              "evidence": "git 3f3309c9"
            },
            {
              "v": "33a91492",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(session): pass calendar fixture inputs as data",
              "items": [
                "haelyra",
                "33a91492e8"
              ],
              "status": "done",
              "evidence": "git 33a91492"
            },
            {
              "v": "a87957ea",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(session): pass alias fault controls as data to fixed preload",
              "items": [
                "haelyra",
                "a87957ea5e"
              ],
              "status": "done",
              "evidence": "git a87957ea"
            },
            {
              "v": "f614e82a",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(session): preserve alias identity when its store is unreadable",
              "items": [
                "haelyra",
                "f614e82ae5"
              ],
              "status": "done",
              "evidence": "git f614e82a"
            },
            {
              "v": "2d515e4f",
              "date": "10-10",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3495 from affaan-m/integration/ecc-043-20261010",
              "items": [
                "haelyra",
                "2d515e4fc2"
              ],
              "status": "done",
              "evidence": "git 2d515e4f"
            },
            {
              "v": "9faa6b76",
              "date": "10-10",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): pin searches that never saw the target and Unicode line terminators",
              "items": [
                "montjeffrey",
                "9faa6b76d2"
              ],
              "status": "done",
              "evidence": "git 9faa6b76"
            },
            {
              "v": "64d8971a",
              "date": "10-10",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): credit only searches that could have seen the target",
              "items": [
                "montjeffrey",
                "64d8971a64"
              ],
              "status": "done",
              "evidence": "git 64d8971a"
            },
            {
              "v": "329ca4e1",
              "date": "10-10",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(gateguard): document type filters, path patterns and lookups",
              "items": [
                "montjeffrey",
                "329ca4e11a"
              ],
              "status": "done",
              "evidence": "git 329ca4e1"
            },
            {
              "v": "7b175667",
              "date": "10-10",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(hooks): split gateguard gate and classifiers into smaller units",
              "items": [
                "Affaan Mustafa",
                "7b1756670f"
              ],
              "status": "done",
              "evidence": "git 7b175667"
            },
            {
              "v": "71bf7879",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: keep session summaries within the lifecycle deadline",
              "items": [
                "Tivonsico",
                "71bf78796f"
              ],
              "status": "done",
              "evidence": "git 71bf7879"
            },
            {
              "v": "1ad235fd",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: report explicitly disabled summaries as skipped",
              "items": [
                "Tivonsico",
                "1ad235fdfe"
              ],
              "status": "done",
              "evidence": "git 1ad235fd"
            },
            {
              "v": "27c3ce1c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): price Claude 5.5 per deduplicated request",
              "items": [
                "Dante",
                "27c3ce1c10"
              ],
              "status": "done",
              "evidence": "git 27c3ce1c"
            },
            {
              "v": "53afd058",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/main' into fix/3488-generation-pricing",
              "items": [
                "Dante",
                "53afd058be"
              ],
              "status": "done",
              "evidence": "git 53afd058"
            },
            {
              "v": "ffe0e36d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "hooks: model GNU sed execution — script and file operands are data, e/s///e are shell receivers",
              "items": [
                "chenhz01",
                "ffe0e36d46"
              ],
              "status": "done",
              "evidence": "git ffe0e36d"
            },
            {
              "v": "34a7f415",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "hooks: parse sed options through the whole argv — later -e scripts still execute",
              "items": [
                "chenhz01",
                "34a7f41539"
              ],
              "status": "done",
              "evidence": "git 34a7f415"
            },
            {
              "v": "95964ee6",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "hooks: block escaped sed exec fragments conservatively; decompose sed readers",
              "items": [
                "chenhz01",
                "95964ee623"
              ],
              "status": "done",
              "evidence": "git 95964ee6"
            },
            {
              "v": "3af000e1",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "hooks: first operand after -- is still the sed script when no script option was given",
              "items": [
                "chenhz01",
                "3af000e143"
              ],
              "status": "done",
              "evidence": "git 3af000e1"
            },
            {
              "v": "6acaf769",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(cost-tracker): retain model across duplicate usage blocks",
              "items": [
                "Dante",
                "6acaf769b9"
              ],
              "status": "done",
              "evidence": "git 6acaf769"
            },
            {
              "v": "161713ed",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): pin the original four code questions and an opt-in external-contract question",
              "items": [
                "montjeffrey",
                "161713edce"
              ],
              "status": "done",
              "evidence": "git 161713ed"
            },
            {
              "v": "f7f47679",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): make the external-contract question opt-in",
              "items": [
                "montjeffrey",
                "f7f47679b6"
              ],
              "status": "done",
              "evidence": "git f7f47679"
            },
            {
              "v": "d9efa98b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): preserve locale selections during auto-update",
              "items": [
                "Yann Roberto",
                "d9efa98bb6"
              ],
              "status": "done",
              "evidence": "git d9efa98b"
            },
            {
              "v": "07309c3e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve locale selections during managed updates",
              "items": [
                "haelyra",
                "07309c3eca"
              ],
              "status": "done",
              "evidence": "git 07309c3e"
            },
            {
              "v": "7bcb8dab",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: preserve passive scoped coordination receipts from PR 3128",
              "items": [
                "haelyra",
                "7bcb8dabee"
              ],
              "status": "done",
              "evidence": "git 7bcb8dab"
            },
            {
              "v": "4f5970bf",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(codex): ship named CLI profile files with ownership protection",
              "items": [
                "haelyra",
                "4f5970bf4f"
              ],
              "status": "done",
              "evidence": "git 4f5970bf"
            },
            {
              "v": "c9a3143a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve citation intent and current routing evidence gates",
              "items": [
                "haelyra",
                "c9a3143aa4"
              ],
              "status": "done",
              "evidence": "git c9a3143a"
            },
            {
              "v": "837cbb07",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(catalog): reject unmarked agent-tree skill undercounts",
              "items": [
                "haelyra",
                "837cbb0773"
              ],
              "status": "done",
              "evidence": "git 837cbb07"
            },
            {
              "v": "242abdec",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): integrate revised reasoning filtering from PR 3272",
              "items": [
                "haelyra",
                "242abdecb4"
              ],
              "status": "done",
              "evidence": "git 242abdec"
            },
            {
              "v": "54460191",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): integrate capability-aware Ollama tools from PR 3275",
              "items": [
                "haelyra",
                "544601912a"
              ],
              "status": "done",
              "evidence": "git 54460191"
            },
            {
              "v": "bd963470",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve target-scoped GateGuard search credit from PR 3496",
              "items": [
                "haelyra",
                "bd96347002"
              ],
              "status": "done",
              "evidence": "git bd963470"
            },
            {
              "v": "5ad9cb93",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: harden container OAuth callback relay lifecycle",
              "items": [
                "haelyra",
                "5ad9cb931b"
              ],
              "status": "done",
              "evidence": "git 5ad9cb93"
            },
            {
              "v": "54925308",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): integrate collision-safe story lifecycle from PR 2311",
              "items": [
                "haelyra",
                "54925308d7"
              ],
              "status": "done",
              "evidence": "git 54925308"
            },
            {
              "v": "43febb9a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve opt-in GateGuard contract questions from PR 3497",
              "items": [
                "haelyra",
                "43febb9ada"
              ],
              "status": "done",
              "evidence": "git 43febb9a"
            },
            {
              "v": "80964ec4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): ship standalone skill-health command runtime",
              "items": [
                "haelyra",
                "80964ec4fe"
              ],
              "status": "done",
              "evidence": "git 80964ec4"
            },
            {
              "v": "3ab8a4f6",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): integrate optional domain context workflow from PR 3411",
              "items": [
                "haelyra",
                "3ab8a4f618"
              ],
              "status": "done",
              "evidence": "git 3ab8a4f6"
            },
            {
              "v": "36f01734",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): integrate optional change impact workflow from PR 3412",
              "items": [
                "haelyra",
                "36f01734e7"
              ],
              "status": "done",
              "evidence": "git 36f01734"
            },
            {
              "v": "412347a2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): integrate optional test governance workflows from PR 3413",
              "items": [
                "haelyra",
                "412347a2ab"
              ],
              "status": "done",
              "evidence": "git 412347a2"
            },
            {
              "v": "807c98af",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve cheap native context routing from PR 2740",
              "items": [
                "haelyra",
                "807c98aff6"
              ],
              "status": "done",
              "evidence": "git 807c98af"
            },
            {
              "v": "da87114e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: honor global preview in every guided install entry",
              "items": [
                "haelyra",
                "da87114e05"
              ],
              "status": "done",
              "evidence": "git da87114e"
            },
            {
              "v": "6233b648",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): resolve bootstrap from selected Claude config root",
              "items": [
                "haelyra",
                "6233b648f9"
              ],
              "status": "done",
              "evidence": "git 6233b648"
            },
            {
              "v": "7f226d06",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: prevent stranded observation counter locks after process death",
              "items": [
                "haelyra",
                "7f226d069c"
              ],
              "status": "done",
              "evidence": "git 7f226d06"
            },
            {
              "v": "e4b9451c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): honor selected models in provider resolution",
              "items": [
                "Yann Roberto",
                "e4b9451c68"
              ],
              "status": "done",
              "evidence": "git e4b9451c"
            },
            {
              "v": "7b4e7828",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: redact escaped quoted credentials in observation records",
              "items": [
                "haelyra",
                "7b4e7828ce"
              ],
              "status": "done",
              "evidence": "git 7b4e7828"
            },
            {
              "v": "9d7e5a5b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: refresh canonical skill digest after observer fixes",
              "items": [
                "haelyra",
                "9d7e5a5bc9"
              ],
              "status": "done",
              "evidence": "git 9d7e5a5b"
            },
            {
              "v": "e611cf66",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(state): serialize work-item claims and preserve existing ownership",
              "items": [
                "haelyra",
                "e611cf66d0"
              ],
              "status": "done",
              "evidence": "git e611cf66"
            },
            {
              "v": "52d546f0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: align Turkish instructions with the prepared skill catalog",
              "items": [
                "haelyra",
                "52d546f0d1"
              ],
              "status": "done",
              "evidence": "git 52d546f0"
            },
            {
              "v": "3add1816",
              "date": "10-11",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: offer an opt-in local Claude usage display",
              "items": [
                "haelyra",
                "3add1816ea"
              ],
              "status": "done",
              "evidence": "git 3add1816"
            },
            {
              "v": "dadfdd66",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'steward/security-20261011' of /Users/hira/Documents/ECC/ecc-review-security-20261011 into integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "dadfdd6691"
              ],
              "status": "done",
              "evidence": "git dadfdd66"
            },
            {
              "v": "d6aab839",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'steward/docs-providers-20261011' of /Users/hira/Documents/ECC/ecc-review-docs-providers-20261011 into integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "d6aab8393f"
              ],
              "status": "done",
              "evidence": "git d6aab839"
            },
            {
              "v": "f58f15af",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'steward/install-20261011' of /Users/hira/Documents/ECC/ecc-review-install-20261011 into integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "f58f15af30"
              ],
              "status": "done",
              "evidence": "git f58f15af"
            },
            {
              "v": "401faee0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: bound observer counters and apply first-tick thresholds",
              "items": [
                "haelyra",
                "401faee091"
              ],
              "status": "done",
              "evidence": "git 401faee0"
            },
            {
              "v": "ad92fee8",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: refresh routing source digest after relay guidance",
              "items": [
                "haelyra",
                "ad92fee888"
              ],
              "status": "done",
              "evidence": "git ad92fee8"
            },
            {
              "v": "1bbebf61",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(story-lifecycle): reject unsafe numeric allocation IDs",
              "items": [
                "haelyra",
                "1bbebf61d9"
              ],
              "status": "done",
              "evidence": "git 1bbebf61"
            },
            {
              "v": "d2f721a0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject recursive callback relays and verify profile display isolation",
              "items": [
                "haelyra",
                "d2f721a030"
              ],
              "status": "done",
              "evidence": "git d2f721a0"
            },
            {
              "v": "c79a7d03",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): give shared command helpers one module owner",
              "items": [
                "haelyra",
                "c79a7d0321"
              ],
              "status": "done",
              "evidence": "git c79a7d03"
            },
            {
              "v": "5fe62f3d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'steward/security-20261011' of /Users/hira/Documents/ECC/ecc-review-security-20261011 into integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "5fe62f3d98"
              ],
              "status": "done",
              "evidence": "git 5fe62f3d"
            },
            {
              "v": "09d4283c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'steward/install-20261011' of /Users/hira/Documents/ECC/ecc-review-install-20261011 into integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "09d4283cf5"
              ],
              "status": "done",
              "evidence": "git 09d4283c"
            },
            {
              "v": "f4f8beba",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: require explicit reasoning format before stripping content",
              "items": [
                "haelyra",
                "f4f8beba01"
              ],
              "status": "done",
              "evidence": "git f4f8beba"
            },
            {
              "v": "effa074f",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(llm): normalize model environment values",
              "items": [
                "Yann Roberto",
                "effa074f7d"
              ],
              "status": "done",
              "evidence": "git effa074f"
            },
            {
              "v": "65399a0c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'steward/docs-providers-20261011' of /Users/hira/Documents/ECC/ecc-review-docs-providers-20261011 into integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "65399a0c87"
              ],
              "status": "done",
              "evidence": "git 65399a0c"
            },
            {
              "v": "353f64fa",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'refs/remotes/pr/3499' into integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "353f64fa83"
              ],
              "status": "done",
              "evidence": "git 353f64fa"
            },
            {
              "v": "298ac253",
              "date": "10-11",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: merge main into context citation fix",
              "items": [
                "Yann Roberto",
                "298ac25330"
              ],
              "status": "done",
              "evidence": "git 298ac253"
            },
            {
              "v": "bd966c9b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: reproduce commands-only ESM runtime and scope conflicts",
              "items": [
                "haelyra",
                "bd966c9bfa"
              ],
              "status": "done",
              "evidence": "git bd966c9b"
            },
            {
              "v": "dbfd6ab0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: protect commands-only CommonJS runtime in Claude installs",
              "items": [
                "haelyra",
                "dbfd6ab009"
              ],
              "status": "done",
              "evidence": "git dbfd6ab0"
            },
            {
              "v": "e9f95e39",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reconcile profile projections and selected-model fallback checks",
              "items": [
                "haelyra",
                "e9f95e394f"
              ],
              "status": "done",
              "evidence": "git e9f95e39"
            },
            {
              "v": "33b656c2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'fix/commands-commonjs-runtime-20261011' of /Users/hira/Documents/ECC/ecc-command-runtime-repair-20261011 into integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "33b656c241"
              ],
              "status": "done",
              "evidence": "git 33b656c2"
            },
            {
              "v": "f1fafe67",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: preserve hook-only ESM workflows with user module scopes",
              "items": [
                "haelyra",
                "f1fafe670c"
              ],
              "status": "done",
              "evidence": "git f1fafe67"
            },
            {
              "v": "7ce21217",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge refreshed PR #3282 while preserving the verified source tree",
              "items": [
                "haelyra",
                "7ce2121737"
              ],
              "status": "done",
              "evidence": "git 7ce21217"
            },
            {
              "v": "2bfee727",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): preserve user TypeScript module scopes and retained boundaries",
              "items": [
                "haelyra",
                "2bfee727e2"
              ],
              "status": "done",
              "evidence": "git 2bfee727"
            },
            {
              "v": "b582964d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(commands): execute selected-profile resolvers and honor explicit audit intent",
              "items": [
                "haelyra",
                "b582964d67"
              ],
              "status": "done",
              "evidence": "git b582964d"
            },
            {
              "v": "223da783",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test(commands): pass declared resolver source to the fixed shell harness",
              "items": [
                "haelyra",
                "223da78361"
              ],
              "status": "done",
              "evidence": "git 223da783"
            },
            {
              "v": "58b70497",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: correct late search credit and security test gates",
              "items": [
                "haelyra",
                "58b704977a"
              ],
              "status": "done",
              "evidence": "git 58b70497"
            },
            {
              "v": "3e395c6b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve opt-in usage data and publish networked callbacks",
              "items": [
                "haelyra",
                "3e395c6b76"
              ],
              "status": "done",
              "evidence": "git 3e395c6b"
            },
            {
              "v": "64426965",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: harden ledger publication and mixed Ollama histories",
              "items": [
                "haelyra",
                "644269657c"
              ],
              "status": "done",
              "evidence": "git 64426965"
            },
            {
              "v": "7a6db7bb",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge late GateGuard filter and security fixture repairs",
              "items": [
                "haelyra",
                "7a6db7bb85"
              ],
              "status": "done",
              "evidence": "git 7a6db7bb"
            },
            {
              "v": "afdf403a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: keep stale lock race fixture portable",
              "items": [
                "haelyra",
                "afdf403ae9"
              ],
              "status": "done",
              "evidence": "git afdf403a"
            },
            {
              "v": "bdc9f4b0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge verified usage display and actual Compose callback corrections",
              "items": [
                "haelyra",
                "bdc9f4b04e"
              ],
              "status": "done",
              "evidence": "git bdc9f4b0"
            },
            {
              "v": "bb1a3bac",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge descriptor-bound ledger and mixed-provider history repairs",
              "items": [
                "haelyra",
                "bb1a3bacea"
              ],
              "status": "done",
              "evidence": "git bb1a3bac"
            },
            {
              "v": "74fa43fd",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(projections): reconcile current Docker guidance and registry binding",
              "items": [
                "haelyra",
                "74fa43fd78"
              ],
              "status": "done",
              "evidence": "git 74fa43fd"
            },
            {
              "v": "8f80de59",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ledger): retain lock descriptors across ownership checks and release",
              "items": [
                "haelyra",
                "8f80de5975"
              ],
              "status": "done",
              "evidence": "git 8f80de59"
            },
            {
              "v": "15b51b6c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(windows): make fault probes portable and bound sharing-denial retries",
              "items": [
                "haelyra",
                "15b51b6ca4"
              ],
              "status": "done",
              "evidence": "git 15b51b6c"
            },
            {
              "v": "ca32c9ab",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ledger): normalize the competing-publication fault selector",
              "items": [
                "haelyra",
                "ca32c9ab79"
              ],
              "status": "done",
              "evidence": "git ca32c9ab"
            },
            {
              "v": "89bf930c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(rules): fix the common coding-style link",
              "items": [
                "Eneko Ruiz",
                "89bf930c9f"
              ],
              "status": "done",
              "evidence": "git 89bf930c"
            },
            {
              "v": "a194883e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test(windows): pin native Bash and normalize executable paths",
              "items": [
                "haelyra",
                "a194883e0d"
              ],
              "status": "done",
              "evidence": "git a194883e"
            },
            {
              "v": "32bbddab",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: keep unchanged skill rates stable at zero threshold",
              "items": [
                "Eneko Ruiz",
                "32bbddab1d"
              ],
              "status": "done",
              "evidence": "git 32bbddab"
            },
            {
              "v": "9f82a0c2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: fix Kiro license link",
              "items": [
                "Eneko Ruiz",
                "9f82a0c219"
              ],
              "status": "done",
              "evidence": "git 9f82a0c2"
            },
            {
              "v": "8b755a66",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: validate instinct confidence before status rendering",
              "items": [
                "Eneko Ruiz",
                "8b755a66df"
              ],
              "status": "done",
              "evidence": "git 8b755a66"
            },
            {
              "v": "db05c048",
              "date": "10-11",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: fix translated rules coding-style link",
              "items": [
                "Eneko Ruiz",
                "db05c04868"
              ],
              "status": "done",
              "evidence": "git db05c048"
            },
            {
              "v": "acb75bc1",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: ignore directories when listing skill snapshots",
              "items": [
                "Eneko Ruiz",
                "acb75bc1ed"
              ],
              "status": "done",
              "evidence": "git acb75bc1"
            },
            {
              "v": "5da9a1f4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preflight ledger storage and normalize saved model padding",
              "items": [
                "haelyra",
                "5da9a1f4a7"
              ],
              "status": "done",
              "evidence": "git 5da9a1f4"
            },
            {
              "v": "0c28980b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: fix migration guide README anchor",
              "items": [
                "Eneko Ruiz",
                "0c28980bbd"
              ],
              "status": "done",
              "evidence": "git 0c28980b"
            },
            {
              "v": "60ce177d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: accept a leading UTF-8 BOM in instinct files",
              "items": [
                "Eneko Ruiz",
                "60ce177d74"
              ],
              "status": "done",
              "evidence": "git 60ce177d"
            },
            {
              "v": "3d8f3128",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve rg type case and filename exclusion scope",
              "items": [
                "haelyra",
                "3d8f31285f"
              ],
              "status": "done",
              "evidence": "git 3d8f3128"
            },
            {
              "v": "1ae4b88e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: skip non-object skill execution JSONL rows",
              "items": [
                "Eneko Ruiz",
                "1ae4b88e06"
              ],
              "status": "done",
              "evidence": "git 1ae4b88e"
            },
            {
              "v": "e081afcb",
              "date": "10-11",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: fix delivery-gate installation source",
              "items": [
                "Eneko Ruiz",
                "e081afcbd7"
              ],
              "status": "done",
              "evidence": "git e081afcb"
            },
            {
              "v": "0c356470",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: cover offline model selector operator workflows",
              "items": [
                "haelyra",
                "0c35647012"
              ],
              "status": "done",
              "evidence": "git 0c356470"
            },
            {
              "v": "e6ed26d0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge storage preflight and operator model normalization repairs",
              "items": [
                "haelyra",
                "e6ed26d0ad"
              ],
              "status": "done",
              "evidence": "git e6ed26d0"
            },
            {
              "v": "3ac34cfc",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: validate skill execution failure reasons before storage",
              "items": [
                "Eneko Ruiz",
                "3ac34cfc3c"
              ],
              "status": "done",
              "evidence": "git 3ac34cfc"
            },
            {
              "v": "95585e4b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: read piped tasks when evaluating output files",
              "items": [
                "Eneko Ruiz",
                "95585e4b29"
              ],
              "status": "done",
              "evidence": "git 95585e4b"
            },
            {
              "v": "3a80db87",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge faithful ripgrep type-case and file-only exclusions",
              "items": [
                "haelyra",
                "3a80db87d2"
              ],
              "status": "done",
              "evidence": "git 3a80db87"
            },
            {
              "v": "d0cf7aa6",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge real model-selector CLI workflows and coverage verification",
              "items": [
                "haelyra",
                "d0cf7aa6b7"
              ],
              "status": "done",
              "evidence": "git d0cf7aa6"
            },
            {
              "v": "5d26f455",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): bind manual triggers to the verified storage guidance",
              "items": [
                "haelyra",
                "5d26f455ee"
              ],
              "status": "done",
              "evidence": "git 5d26f455"
            },
            {
              "v": "723e097e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ledger): bind storage-preservation snapshots to descriptors",
              "items": [
                "haelyra",
                "723e097e92"
              ],
              "status": "done",
              "evidence": "git 723e097e"
            },
            {
              "v": "cc12310b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ledger): classify owned snapshot entries through directory records",
              "items": [
                "haelyra",
                "cc12310b69"
              ],
              "status": "done",
              "evidence": "git cc12310b"
            },
            {
              "v": "a0b28601",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: preserve Windows GateGuard corpus denial policy",
              "items": [
                "haelyra",
                "a0b286011a"
              ],
              "status": "done",
              "evidence": "git a0b28601"
            },
            {
              "v": "aa5ddf0a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3501 for incoming stewardship",
              "items": [
                "haelyra",
                "aa5ddf0af6"
              ],
              "status": "done",
              "evidence": "git aa5ddf0a"
            },
            {
              "v": "9423f9f0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3502 for incoming stewardship",
              "items": [
                "haelyra",
                "9423f9f0da"
              ],
              "status": "done",
              "evidence": "git 9423f9f0"
            },
            {
              "v": "770bcddf",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3503 for incoming stewardship",
              "items": [
                "haelyra",
                "770bcddfd8"
              ],
              "status": "done",
              "evidence": "git 770bcddf"
            },
            {
              "v": "7b50c867",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3504 for incoming stewardship",
              "items": [
                "haelyra",
                "7b50c86733"
              ],
              "status": "done",
              "evidence": "git 7b50c867"
            },
            {
              "v": "542b6a89",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3505 for incoming stewardship",
              "items": [
                "haelyra",
                "542b6a89c1"
              ],
              "status": "done",
              "evidence": "git 542b6a89"
            },
            {
              "v": "a33e5b33",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3506 for incoming stewardship",
              "items": [
                "haelyra",
                "a33e5b3312"
              ],
              "status": "done",
              "evidence": "git a33e5b33"
            },
            {
              "v": "2f8b126e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3507 for incoming stewardship",
              "items": [
                "haelyra",
                "2f8b126e3a"
              ],
              "status": "done",
              "evidence": "git 2f8b126e"
            },
            {
              "v": "7ef61ca0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3508 for incoming stewardship",
              "items": [
                "haelyra",
                "7ef61ca058"
              ],
              "status": "done",
              "evidence": "git 7ef61ca0"
            },
            {
              "v": "63b84217",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed contributor PR #3509 for incoming stewardship",
              "items": [
                "haelyra",
                "63b84217e3"
              ],
              "status": "done",
              "evidence": "git 63b84217"
            },
            {
              "v": "2df7533e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: include verified first-cohort GateGuard repair",
              "items": [
                "haelyra",
                "2df7533ee4"
              ],
              "status": "done",
              "evidence": "git 2df7533e"
            },
            {
              "v": "a7e5c4d0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve snapshot paths and reject malformed skill tracking rows",
              "items": [
                "haelyra",
                "a7e5c4d030"
              ],
              "status": "done",
              "evidence": "git a7e5c4d0"
            },
            {
              "v": "61b1d495",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: bound snapshot allocation to safe version numbers",
              "items": [
                "haelyra",
                "61b1d49538"
              ],
              "status": "done",
              "evidence": "git 61b1d495"
            },
            {
              "v": "15d9ffd1",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: validate rollback allocation before changing live skill",
              "items": [
                "haelyra",
                "15d9ffd1c9"
              ],
              "status": "done",
              "evidence": "git 15d9ffd1"
            },
            {
              "v": "137ec69a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: verify Windows lock refusal after committed publication",
              "items": [
                "haelyra",
                "137ec69adc"
              ],
              "status": "done",
              "evidence": "git 137ec69a"
            },
            {
              "v": "cffcf05e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "hooks: sed labels end at semicolon — commands after b/t/T/: are still scanned",
              "items": [
                "chenhz01",
                "cffcf05e7a"
              ],
              "status": "done",
              "evidence": "git cffcf05e"
            },
            {
              "v": "8858b5f7",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'integration/ecc-043-20261011' of https://github.com/affaan-m/ECC into integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "8858b5f7d3"
              ],
              "status": "done",
              "evidence": "git 8858b5f7"
            },
            {
              "v": "8ce348fb",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3500 from affaan-m/integration/ecc-043-20261011",
              "items": [
                "haelyra",
                "8ce348fbea"
              ],
              "status": "done",
              "evidence": "git 8ce348fb"
            },
            {
              "v": "cbca1dc2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(claude-plugin): target explicitly disabled destinations in scope migration",
              "items": [
                "akushonkamen",
                "cbca1dc2cc"
              ],
              "status": "done",
              "evidence": "git cbca1dc2"
            },
            {
              "v": "8a404dbb",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve story projections and blank provider defaults",
              "items": [
                "haelyra",
                "8a404dbbdc"
              ],
              "status": "done",
              "evidence": "git 8a404dbb"
            },
            {
              "v": "0b37f482",
              "date": "10-11",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: refresh registry identity after projection repair",
              "items": [
                "haelyra",
                "0b37f482d8"
              ],
              "status": "done",
              "evidence": "git 0b37f482"
            },
            {
              "v": "8f34a6a2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: preserve skill manifest formatting",
              "items": [
                "haelyra",
                "8f34a6a224"
              ],
              "status": "done",
              "evidence": "git 8f34a6a2"
            },
            {
              "v": "a73e04cc",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover failed ledger batches and preserve project state",
              "items": [
                "haelyra",
                "a73e04cc6d"
              ],
              "status": "done",
              "evidence": "git a73e04cc"
            },
            {
              "v": "6d0b8d4d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: bind ledger failure snapshots to file descriptors",
              "items": [
                "haelyra",
                "6d0b8d4dcb"
              ],
              "status": "done",
              "evidence": "git 6d0b8d4d"
            },
            {
              "v": "64d155ae",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): pin grader decoys, pilot retries and the hookless-trial abort",
              "items": [
                "montjeffrey",
                "64d155ae1d"
              ],
              "status": "done",
              "evidence": "git 64d155ae"
            },
            {
              "v": "6a7996aa",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): make harness graders check content and count only valid trials",
              "items": [
                "montjeffrey",
                "6a7996aa70"
              ],
              "status": "done",
              "evidence": "git 6a7996aa"
            },
            {
              "v": "c76d0e17",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject the shared base as a scenario sandbox",
              "items": [
                "Eneko Ruiz",
                "c76d0e173a"
              ],
              "status": "done",
              "evidence": "git c76d0e17"
            },
            {
              "v": "4ce5ae01",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve search scope and installed cache discovery",
              "items": [
                "haelyra",
                "4ce5ae0119"
              ],
              "status": "done",
              "evidence": "git 4ce5ae01"
            },
            {
              "v": "6d8e69df",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: skip occupied snapshot paths without overflowing",
              "items": [
                "Eneko Ruiz",
                "6d8e69df52"
              ],
              "status": "done",
              "evidence": "git 6d8e69df"
            },
            {
              "v": "626ea562",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test(context): pin one registry load per resolution and routing index build",
              "items": [
                "montjeffrey",
                "626ea56291"
              ],
              "status": "done",
              "evidence": "git 626ea562"
            },
            {
              "v": "8e99eaa4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "perf(context): load the registry once per resolution and routing index build",
              "items": [
                "montjeffrey",
                "8e99eaa4e3"
              ],
              "status": "done",
              "evidence": "git 8e99eaa4"
            },
            {
              "v": "4e337f0a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: integrate contributor snapshot allocation revision",
              "items": [
                "haelyra",
                "4e337f0a43"
              ],
              "status": "done",
              "evidence": "git 4e337f0a"
            },
            {
              "v": "344c1fc3",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: integrate truthful GateGuard harness grading and retry evidence",
              "items": [
                "haelyra",
                "344c1fc3fa"
              ],
              "status": "done",
              "evidence": "git 344c1fc3"
            },
            {
              "v": "c4b83259",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: prepare six focused ECC reliability repairs",
              "items": [
                "haelyra",
                "c4b8325945"
              ],
              "status": "done",
              "evidence": "git c4b83259"
            },
            {
              "v": "a668d06f",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: publish rollback target snapshot before replacing live skill",
              "items": [
                "haelyra",
                "a668d06f30"
              ],
              "status": "done",
              "evidence": "git a668d06f"
            },
            {
              "v": "ce54cef0",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: verify rollback preservation across filesystem error codes",
              "items": [
                "haelyra",
                "ce54cef0e4"
              ],
              "status": "done",
              "evidence": "git ce54cef0"
            },
            {
              "v": "48f88b81",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve ordinary rollback failure repairs in next PR cohort",
              "items": [
                "haelyra",
                "48f88b817d"
              ],
              "status": "done",
              "evidence": "git 48f88b81"
            },
            {
              "v": "1abc625d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: integrate six focused workflow repairs with canonical registry identity",
              "items": [
                "haelyra",
                "1abc625de9"
              ],
              "status": "done",
              "evidence": "git 1abc625d"
            },
            {
              "v": "0658c887",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: use static module and JSON input for CSV grader controls",
              "items": [
                "haelyra",
                "0658c88710"
              ],
              "status": "done",
              "evidence": "git 0658c887"
            },
            {
              "v": "3fa6e305",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve rollback version state and bounded runtime workflows",
              "items": [
                "haelyra",
                "3fa6e30502"
              ],
              "status": "done",
              "evidence": "git 3fa6e305"
            },
            {
              "v": "32e0a100",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve reviewed recovery and command-discovery repairs in follow-up batch",
              "items": [
                "haelyra",
                "32e0a10023"
              ],
              "status": "done",
              "evidence": "git 32e0a100"
            },
            {
              "v": "1ec5b328",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: normalize root overrides and report unverified snapshot staging",
              "items": [
                "haelyra",
                "1ec5b328c6"
              ],
              "status": "done",
              "evidence": "git 1ec5b328"
            },
            {
              "v": "99ee8a88",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: carry reviewed staging and plugin-root input guards into follow-up batch",
              "items": [
                "haelyra",
                "99ee8a8818"
              ],
              "status": "done",
              "evidence": "git 99ee8a88"
            },
            {
              "v": "bded8387",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preflight and document snapshot storage capability",
              "items": [
                "haelyra",
                "bded8387eb"
              ],
              "status": "done",
              "evidence": "git bded8387"
            },
            {
              "v": "33372e99",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: make presence expiry controls deterministic",
              "items": [
                "haelyra",
                "33372e9970"
              ],
              "status": "done",
              "evidence": "git 33372e99"
            },
            {
              "v": "0d4fd902",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: carry verified storage capability and deterministic Canvas checks",
              "items": [
                "haelyra",
                "0d4fd902ca"
              ],
              "status": "done",
              "evidence": "git 0d4fd902"
            },
            {
              "v": "0908bd31",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: distinguish snapshot probe and publication faults",
              "items": [
                "haelyra",
                "0908bd3148"
              ],
              "status": "done",
              "evidence": "git 0908bd31"
            },
            {
              "v": "6b3873f4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: preserve phase-specific snapshot failure controls in follow-up batch",
              "items": [
                "haelyra",
                "6b3873f4c2"
              ],
              "status": "done",
              "evidence": "git 6b3873f4"
            },
            {
              "v": "ee77b3a9",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: allow bounded CLI startup on loaded runners",
              "items": [
                "haelyra",
                "ee77b3a930"
              ],
              "status": "done",
              "evidence": "git ee77b3a9"
            },
            {
              "v": "a4d9297d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: allow bounded sustained Windows atomic replacement contention",
              "items": [
                "haelyra",
                "a4d9297da1"
              ],
              "status": "done",
              "evidence": "git a4d9297d"
            },
            {
              "v": "2187cdb4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: carry bounded native eval CLI startup checks into follow-up batch",
              "items": [
                "haelyra",
                "2187cdb49f"
              ],
              "status": "done",
              "evidence": "git 2187cdb4"
            },
            {
              "v": "deb5d0a1",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test(gateguard): pin a CSV decoy that overwrites its input rows",
              "items": [
                "montjeffrey",
                "deb5d0a1d0"
              ],
              "status": "done",
              "evidence": "git deb5d0a1"
            },
            {
              "v": "58f7021a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): fix the CSV grader's expected values before the export runs",
              "items": [
                "montjeffrey",
                "58f7021a64"
              ],
              "status": "done",
              "evidence": "git 58f7021a"
            },
            {
              "v": "1b7cf4e4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: align alias failure bounds with reviewed Windows writer retry policy",
              "items": [
                "haelyra",
                "1b7cf4e417"
              ],
              "status": "done",
              "evidence": "git 1b7cf4e4"
            },
            {
              "v": "e9efbc26",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: pin a Python resolver that skips the Windows Store python3 stub",
              "items": [
                "montjeffrey",
                "e9efbc2626"
              ],
              "status": "done",
              "evidence": "git e9efbc26"
            },
            {
              "v": "72f2105c",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: run the Hermes hook tests with a resolved Python 3 on Windows",
              "items": [
                "montjeffrey",
                "72f2105cf6"
              ],
              "status": "done",
              "evidence": "git 72f2105c"
            },
            {
              "v": "d4a44ded",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3511 from affaan-m/integration/ecc-043-incoming-20261011",
              "items": [
                "haelyra",
                "d4a44ded8c"
              ],
              "status": "done",
              "evidence": "git d4a44ded"
            },
            {
              "v": "c7a46706",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/pr-3523' into steward/late-arrivals-20261011",
              "items": [
                "haelyra",
                "c7a467061b"
              ],
              "status": "done",
              "evidence": "git c7a46706"
            },
            {
              "v": "acc453d3",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge remote-tracking branch 'origin/pr-3524' into steward/late-arrivals-20261011",
              "items": [
                "haelyra",
                "acc453d357"
              ],
              "status": "done",
              "evidence": "git acc453d3"
            },
            {
              "v": "03f9a59b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: separate stdin fixture startup budget from drain deadline",
              "items": [
                "haelyra",
                "03f9a59bc7"
              ],
              "status": "done",
              "evidence": "git 03f9a59b"
            },
            {
              "v": "d60c9070",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: exercise real Python discovery failure controls",
              "items": [
                "haelyra",
                "d60c90708c"
              ],
              "status": "done",
              "evidence": "git d60c9070"
            },
            {
              "v": "87c136fc",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: integrate strict issue targeting and Windows Python discovery",
              "items": [
                "haelyra",
                "87c136fcae"
              ],
              "status": "done",
              "evidence": "git 87c136fc"
            },
            {
              "v": "7b346385",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: raise on unparseable skill-comply classifier output",
              "items": [
                "drakeo338",
                "7b34638500"
              ],
              "status": "done",
              "evidence": "git 7b346385"
            },
            {
              "v": "6c9c2515",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: address evaluator portability and recording review findings",
              "items": [
                "haelyra",
                "6c9c25158a"
              ],
              "status": "done",
              "evidence": "git 6c9c2515"
            },
            {
              "v": "1d1b62e5",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: recover plugin migration at the effective settings scope",
              "items": [
                "haelyra",
                "1d1b62e58e"
              ],
              "status": "done",
              "evidence": "git 1d1b62e5"
            },
            {
              "v": "3515db6a",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve evaluator input and audit contracts across platforms",
              "items": [
                "haelyra",
                "3515db6aad"
              ],
              "status": "done",
              "evidence": "git 3515db6a"
            },
            {
              "v": "1aed82de",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: refresh trigger registry binding after evaluator repair",
              "items": [
                "haelyra",
                "1aed82de24"
              ],
              "status": "done",
              "evidence": "git 1aed82de"
            },
            {
              "v": "ae4bc283",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve classifier parse failures through compliance grading",
              "items": [
                "haelyra",
                "ae4bc283ae"
              ],
              "status": "done",
              "evidence": "git ae4bc283"
            },
            {
              "v": "f6fe47de",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "merge: preserve latest contributor CSV grading repair",
              "items": [
                "haelyra",
                "f6fe47de27"
              ],
              "status": "done",
              "evidence": "git f6fe47de"
            },
            {
              "v": "ba8595b4",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: annotate classifier controls and bind canonical resources",
              "items": [
                "haelyra",
                "ba8595b43f"
              ],
              "status": "done",
              "evidence": "git ba8595b4"
            },
            {
              "v": "b71b832b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject malformed classifier values before reporting",
              "items": [
                "haelyra",
                "b71b832bf0"
              ],
              "status": "done",
              "evidence": "git b71b832b"
            },
            {
              "v": "cfeb773d",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject constant grader output and classify overflow errors",
              "items": [
                "haelyra",
                "cfeb773d96"
              ],
              "status": "done",
              "evidence": "git cfeb773d"
            },
            {
              "v": "6ef38a29",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: validate evaluator files before pipe reads and strengthen grader controls",
              "items": [
                "haelyra",
                "6ef38a2993"
              ],
              "status": "done",
              "evidence": "git 6ef38a29"
            },
            {
              "v": "2ec80189",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve missing-result auth diagnostics and bound fixture contention",
              "items": [
                "haelyra",
                "2ec80189a4"
              ],
              "status": "done",
              "evidence": "git 2ec80189"
            },
            {
              "v": "8d969b0e",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: retain authentication diagnostics across empty stream blocks",
              "items": [
                "haelyra",
                "8d969b0ec4"
              ],
              "status": "done",
              "evidence": "git 8d969b0e"
            },
            {
              "v": "6cb9f0a1",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: distinguish auth failures from ordinary provider discussion",
              "items": [
                "haelyra",
                "6cb9f0a162"
              ],
              "status": "done",
              "evidence": "git 6cb9f0a1"
            },
            {
              "v": "345cd364",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: accept Windows directory refusal before piped evaluator input",
              "items": [
                "haelyra",
                "345cd364a3"
              ],
              "status": "done",
              "evidence": "git 345cd364"
            },
            {
              "v": "d0f56322",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject linked sandbox bases before scenario cleanup",
              "items": [
                "haelyra",
                "d0f5632287"
              ],
              "status": "done",
              "evidence": "git d0f56322"
            },
            {
              "v": "70f571e2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: drain synthetic scanner input before reporting status",
              "items": [
                "haelyra",
                "70f571e205"
              ],
              "status": "done",
              "evidence": "git 70f571e2"
            },
            {
              "v": "9fdf1ca2",
              "date": "10-11",
              "group": "2026-10",
              "lane": "test",
              "title": "test: recognize unavailable Windows symlink privilege",
              "items": [
                "haelyra",
                "9fdf1ca277"
              ],
              "status": "done",
              "evidence": "git 9fdf1ca2"
            },
            {
              "v": "b92f181b",
              "date": "10-11",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3520 from affaan-m/integration/ecc-043-followup-20261011",
              "items": [
                "haelyra",
                "b92f181b3b"
              ],
              "status": "done",
              "evidence": "git b92f181b"
            },
            {
              "v": "1e787f62",
              "date": "10-11",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(lib): split install-lifecycle repair and inspect paths",
              "items": [
                "Affaan Mustafa",
                "1e787f62f5"
              ],
              "status": "done",
              "evidence": "git 1e787f62"
            },
            {
              "v": "4aa28cca",
              "date": "10-11",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(commands): honor Codex model configuration in Santa Loop",
              "items": [
                "ethereal49",
                "4aa28ccac5"
              ],
              "status": "done",
              "evidence": "git 4aa28cca"
            },
            {
              "v": "3cf0e709",
              "date": "10-12",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(github-coordination): reject malformed issue numbers instead of truncating them",
              "items": [
                "akushonkamen",
                "3cf0e709d5"
              ],
              "status": "done",
              "evidence": "git 3cf0e709"
            },
            {
              "v": "35c7681d",
              "date": "10-12",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(hooks): break up session-end summary and main flow",
              "items": [
                "Affaan Mustafa",
                "35c7681d47"
              ],
              "status": "done",
              "evidence": "git 35c7681d"
            },
            {
              "v": "b46a2ac5",
              "date": "10-12",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(skills): fix Preferrably typo in remotion fonts rule",
              "items": [
                "edilman38-cyber",
                "b46a2ac58e"
              ],
              "status": "done",
              "evidence": "git b46a2ac5"
            },
            {
              "v": "3dbccf75",
              "date": "10-13",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: parse fractional instinct creation timestamps",
              "items": [
                "Eneko Ruiz",
                "3dbccf75d3"
              ],
              "status": "done",
              "evidence": "git 3dbccf75"
            },
            {
              "v": "905bb16f",
              "date": "10-13",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(lib): split gateguard file-context scanners by token",
              "items": [
                "Affaan Mustafa",
                "905bb16ff2"
              ],
              "status": "done",
              "evidence": "git 905bb16f"
            },
            {
              "v": "63cc0833",
              "date": "10-13",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: use effort controls in adaptive-thinking workarounds",
              "items": [
                "Eneko Ruiz",
                "63cc08332d"
              ],
              "status": "done",
              "evidence": "git 63cc0833"
            },
            {
              "v": "5aa13c7d",
              "date": "10-13",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: distinguish Flask and FastAPI testing fixtures",
              "items": [
                "Eneko Ruiz",
                "5aa13c7d33"
              ],
              "status": "done",
              "evidence": "git 5aa13c7d"
            },
            {
              "v": "88871370",
              "date": "10-13",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: preserve the Chinese command template code fence",
              "items": [
                "Eneko Ruiz",
                "88871370c5"
              ],
              "status": "done",
              "evidence": "git 88871370"
            },
            {
              "v": "e4666abb",
              "date": "10-13",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opencode): ship @opencode-ai/plugin as a runtime dependency",
              "items": [
                "Gaurav Dubey",
                "e4666abb01"
              ],
              "status": "done",
              "evidence": "git e4666abb"
            },
            {
              "v": "9824f422",
              "date": "10-13",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: normalize Windows file paths in failure patterns",
              "items": [
                "Eneko Ruiz",
                "9824f422d2"
              ],
              "status": "done",
              "evidence": "git 9824f422"
            },
            {
              "v": "150348a5",
              "date": "10-13",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: repair localized development workflow links",
              "items": [
                "Eneko Ruiz",
                "150348a57a"
              ],
              "status": "done",
              "evidence": "git 150348a5"
            },
            {
              "v": "014fcae6",
              "date": "10-13",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: repair localized brand voice schema links",
              "items": [
                "Eneko Ruiz",
                "014fcae682"
              ],
              "status": "done",
              "evidence": "git 014fcae6"
            },
            {
              "v": "c2a28b29",
              "date": "10-13",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: order failure pattern timestamps chronologically",
              "items": [
                "Eneko Ruiz",
                "c2a28b2963"
              ],
              "status": "done",
              "evidence": "git c2a28b29"
            },
            {
              "v": "8f728699",
              "date": "10-13",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject negative execution counters",
              "items": [
                "Eneko Ruiz",
                "8f72869987"
              ],
              "status": "done",
              "evidence": "git 8f728699"
            },
            {
              "v": "0bdb6a52",
              "date": "10-13",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: validate session alias titles before saving",
              "items": [
                "Eneko Ruiz",
                "0bdb6a52ab"
              ],
              "status": "done",
              "evidence": "git 0bdb6a52"
            },
            {
              "v": "7b7ec11b",
              "date": "10-13",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve escaped instinct strings through serialization",
              "items": [
                "Eneko Ruiz",
                "7b7ec11b2a"
              ],
              "status": "done",
              "evidence": "git 7b7ec11b"
            },
            {
              "v": "99b6a9bb",
              "date": "10-13",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject lossy classifier tool-call indices",
              "items": [
                "Eneko Ruiz",
                "99b6a9bb8f"
              ],
              "status": "done",
              "evidence": "git 99b6a9bb"
            },
            {
              "v": "ee7156c0",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): give Antigravity rules an activation trigger",
              "items": [
                "Gaurav Dubey",
                "ee7156c0f6"
              ],
              "status": "done",
              "evidence": "git ee7156c0"
            },
            {
              "v": "9bb1309d",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): quote Antigravity rule globs as a YAML string",
              "items": [
                "Gaurav Dubey",
                "9bb1309db6"
              ],
              "status": "done",
              "evidence": "git 9bb1309d"
            },
            {
              "v": "23ae02e1",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): pass native Antigravity rules through before YAML parsing",
              "items": [
                "Gaurav Dubey",
                "23ae02e144"
              ],
              "status": "done",
              "evidence": "git 23ae02e1"
            },
            {
              "v": "74e9a172",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): require a value before treating an Antigravity trigger as native",
              "items": [
                "Gaurav Dubey",
                "74e9a17291"
              ],
              "status": "done",
              "evidence": "git 74e9a172"
            },
            {
              "v": "5a236c20",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): decide native Antigravity triggers from parsed YAML",
              "items": [
                "Gaurav Dubey",
                "5a236c2071"
              ],
              "status": "done",
              "evidence": "git 5a236c20"
            },
            {
              "v": "f45a75b5",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): reject blank quoted Antigravity triggers in the YAML fallback",
              "items": [
                "Gaurav Dubey",
                "f45a75b5f7"
              ],
              "status": "done",
              "evidence": "git f45a75b5"
            },
            {
              "v": "d3c49a80",
              "date": "10-14",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(ci): split validate-hooks into per-shape validators",
              "items": [
                "Affaan Mustafa",
                "d3c49a80df"
              ],
              "status": "done",
              "evidence": "git d3c49a80"
            },
            {
              "v": "944ea9d0",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ci): unescape node -e inline programs in one pass",
              "items": [
                "Affaan Mustafa",
                "944ea9d050"
              ],
              "status": "done",
              "evidence": "git 944ea9d0"
            },
            {
              "v": "6a8e522f",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: add missing sections to CONTRIBUTING table of contents",
              "items": [
                "arvindvishwakarma001",
                "6a8e522fbb"
              ],
              "status": "done",
              "evidence": "git 6a8e522f"
            },
            {
              "v": "07051ec5",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: fix stale ecc-universal version pin in ANTIGRAVITY-GUIDE",
              "items": [
                "Uvais Bughari",
                "07051ec5c7"
              ],
              "status": "done",
              "evidence": "git 07051ec5"
            },
            {
              "v": "94b0844e",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: also fix prose version reference flagged by CodeRabbit",
              "items": [
                "Uvais Bughari",
                "94b0844e9c"
              ],
              "status": "done",
              "evidence": "git 94b0844e"
            },
            {
              "v": "c5378bf4",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(fastapi-patterns): import Depends in the router example",
              "items": [
                "Wen",
                "c5378bf456"
              ],
              "status": "done",
              "evidence": "git c5378bf4"
            },
            {
              "v": "580acac9",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(laravel-security): drop the undefined sanitize_html validation rule",
              "items": [
                "Wen",
                "580acac926"
              ],
              "status": "done",
              "evidence": "git 580acac9"
            },
            {
              "v": "a492b081",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(perl-security): drop nonexistent perlcritic policies",
              "items": [
                "Wen",
                "a492b08126"
              ],
              "status": "done",
              "evidence": "git a492b081"
            },
            {
              "v": "95e6e4e7",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(django-security): keep the CSRF cookie readable for the AJAX example",
              "items": [
                "Wen",
                "95e6e4e735"
              ],
              "status": "done",
              "evidence": "git 95e6e4e7"
            },
            {
              "v": "73e92ae9",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(safety-guard): state that the skill is advisory and ships no hook",
              "items": [
                "Wen",
                "73e92ae994"
              ],
              "status": "done",
              "evidence": "git 73e92ae9"
            },
            {
              "v": "daa22ec2",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(social-publisher): require user approval before socialclaw apply",
              "items": [
                "Wen",
                "daa22ec2ea"
              ],
              "status": "done",
              "evidence": "git daa22ec2"
            },
            {
              "v": "936cf3d0",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(delivery-gate): honor stop_hook_active and match Claude Code project dir encoding",
              "items": [
                "Wen",
                "936cf3d040"
              ],
              "status": "done",
              "evidence": "git 936cf3d0"
            },
            {
              "v": "6839f58c",
              "date": "10-14",
              "group": "2026-10",
              "lane": "test",
              "title": "test(delivery-gate): select an interpreter only if it runs Python 3",
              "items": [
                "Wen",
                "6839f58cd3"
              ],
              "status": "done",
              "evidence": "git 6839f58c"
            },
            {
              "v": "2eed06b5",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(delivery-gate): document that a missing memory directory only warns",
              "items": [
                "Wen",
                "2eed06b585"
              ],
              "status": "done",
              "evidence": "git 2eed06b5"
            },
            {
              "v": "cf340809",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ck): run commands from the skill directory and pass JSON through a heredoc",
              "items": [
                "Wen",
                "cf3408097c"
              ],
              "status": "done",
              "evidence": "git cf340809"
            },
            {
              "v": "59868a94",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ck): escape the skill dir for bash when SessionStart fills it in",
              "items": [
                "Wen",
                "59868a9404"
              ],
              "status": "done",
              "evidence": "git 59868a94"
            },
            {
              "v": "ea8b4886",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(frontend-slides): make relative PDF output paths absolute before export",
              "items": [
                "Wen",
                "ea8b48860e"
              ],
              "status": "done",
              "evidence": "git ea8b4886"
            },
            {
              "v": "f933bad1",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(frontend-slides): ignore CDPATH when resolving input and output paths",
              "items": [
                "Wen",
                "f933bad11b"
              ],
              "status": "done",
              "evidence": "git f933bad1"
            },
            {
              "v": "3906ba98",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opensource-pipeline): commit packaging and sanitizer fixes before publishing",
              "items": [
                "Wen",
                "3906ba98f3"
              ],
              "status": "done",
              "evidence": "git 3906ba98"
            },
            {
              "v": "1acdd02f",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opensource-pipeline): publish only the commit the sanitizer scanned",
              "items": [
                "Wen",
                "1acdd02fb4"
              ],
              "status": "done",
              "evidence": "git 1acdd02f"
            },
            {
              "v": "1e381ef3",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(videodb): load the project .env from the working directory in ws_listener",
              "items": [
                "Wen",
                "1e381ef30b"
              ],
              "status": "done",
              "evidence": "git 1e381ef3"
            },
            {
              "v": "5a34568c",
              "date": "10-14",
              "group": "2026-10",
              "lane": "test",
              "title": "test(videodb): cover ws_listener .env lookup and reconnect budget",
              "items": [
                "Wen",
                "5a34568cdf"
              ],
              "status": "done",
              "evidence": "git 5a34568c"
            },
            {
              "v": "ab917e01",
              "date": "10-14",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(videodb): say where the listener lives on hosts without CLAUDE_SKILL_DIR",
              "items": [
                "Wen",
                "ab917e010a"
              ],
              "status": "done",
              "evidence": "git ab917e01"
            },
            {
              "v": "e40a6c30",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skill-comply): block setup-command allowlist bypasses and use a per-user sandbox base",
              "items": [
                "Wen",
                "e40a6c30da"
              ],
              "status": "done",
              "evidence": "git e40a6c30"
            },
            {
              "v": "15819040",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skill-comply): stop setup commands from planting git hooks",
              "items": [
                "Wen",
                "15819040cf"
              ],
              "status": "done",
              "evidence": "git 15819040"
            },
            {
              "v": "4d17020f",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(continuous-learning-v2): redact cloud keys, DSNs and PEM blocks in observations",
              "items": [
                "Wen",
                "4d17020f49"
              ],
              "status": "done",
              "evidence": "git 4d17020f"
            },
            {
              "v": "64f28b60",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(continuous-learning-v2): redact tokens after JSON escapes and truncated DSNs",
              "items": [
                "Wen",
                "64f28b6096"
              ],
              "status": "done",
              "evidence": "git 64f28b60"
            },
            {
              "v": "f1b01825",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ck): never let forget remove the shared contexts root",
              "items": [
                "Wen",
                "f1b01825d8"
              ],
              "status": "done",
              "evidence": "git f1b01825"
            },
            {
              "v": "cb0cda86",
              "date": "10-14",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ck): assert forget removes the selected project's directory and registry entry",
              "items": [
                "Wen",
                "cb0cda8623"
              ],
              "status": "done",
              "evidence": "git cb0cda86"
            },
            {
              "v": "af94289c",
              "date": "10-14",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ck): reject only parent-traversal segments in the forget guard",
              "items": [
                "Wen",
                "af94289c17"
              ],
              "status": "done",
              "evidence": "git af94289c"
            },
            {
              "v": "2ad3b546",
              "date": "10-15",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: add npmscan-action for dependency security",
              "items": [
                "Shyngys Shynbolatov",
                "2ad3b546e5"
              ],
              "status": "done",
              "evidence": "git 2ad3b546"
            },
            {
              "v": "f3457a34",
              "date": "10-15",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skill-tracker): reject non-string execution timestamps",
              "items": [
                "Tivonsico",
                "f3457a3483"
              ],
              "status": "done",
              "evidence": "git f3457a34"
            },
            {
              "v": "6db65267",
              "date": "10-15",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): preserve excluded MCP servers in install state",
              "items": [
                "Yann Roberto",
                "6db65267dd"
              ],
              "status": "done",
              "evidence": "git 6db65267"
            },
            {
              "v": "932aa393",
              "date": "10-15",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: prevent GitHub work item identity collisions",
              "items": [
                "Yann Roberto",
                "932aa393c1"
              ],
              "status": "done",
              "evidence": "git 932aa393"
            },
            {
              "v": "ced82ccf",
              "date": "10-15",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): tolerate JSONC comments in the OpenCode config membership check",
              "items": [
                "Hemang Varshney",
                "ced82ccf9f"
              ],
              "status": "done",
              "evidence": "git ced82ccf"
            },
            {
              "v": "1d704e75",
              "date": "10-15",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): load js-yaml lazily so session-start runs without node_modules",
              "items": [
                "azank",
                "1d704e75e3"
              ],
              "status": "done",
              "evidence": "git 1d704e75"
            },
            {
              "v": "8e2cdefb",
              "date": "10-15",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): reject unterminated comments, keep plugin shape check, handle CR endings",
              "items": [
                "Hemang Varshney",
                "8e2cdefba6"
              ],
              "status": "done",
              "evidence": "git 8e2cdefb"
            },
            {
              "v": "218f4ae8",
              "date": "10-15",
              "group": "2026-10",
              "lane": "test",
              "title": "test(hooks): isolate the no-deps session-start test from NODE_PATH and the context cap",
              "items": [
                "azank",
                "218f4ae85f"
              ],
              "status": "done",
              "evidence": "git 218f4ae8"
            },
            {
              "v": "868ac1e8",
              "date": "10-15",
              "group": "2026-10",
              "lane": "test",
              "title": "test(hooks): build the session-start test env without mutating it",
              "items": [
                "azank",
                "868ac1e894"
              ],
              "status": "done",
              "evidence": "git 868ac1e8"
            },
            {
              "v": "dc42aa54",
              "date": "10-15",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(worker): reject non-file task inputs",
              "items": [
                "KET ⚡",
                "dc42aa5409"
              ],
              "status": "done",
              "evidence": "git dc42aa54"
            },
            {
              "v": "35d7c698",
              "date": "10-15",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): read BOM-prefixed managed hook preferences",
              "items": [
                "KET ⚡",
                "35d7c698e9"
              ],
              "status": "done",
              "evidence": "git 35d7c698"
            },
            {
              "v": "0ad248d1",
              "date": "10-15",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(ci): guard PR submission bursts and alert maintainers",
              "items": [
                "haelyra",
                "0ad248d199"
              ],
              "status": "done",
              "evidence": "git 0ad248d1"
            },
            {
              "v": "0cf3a25d",
              "date": "10-15",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(ci): keep PR moderation limited to submission rate",
              "items": [
                "haelyra",
                "0cf3a25d57"
              ],
              "status": "done",
              "evidence": "git 0cf3a25d"
            },
            {
              "v": "76aaa77d",
              "date": "10-15",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3596 from affaan-m/feat/pr-burst-protection",
              "items": [
                "haelyra",
                "76aaa77df6"
              ],
              "status": "done",
              "evidence": "git 76aaa77d"
            },
            {
              "v": "d53359a9",
              "date": "10-15",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(scripts): table-drive the operator readiness dashboard",
              "items": [
                "Affaan Mustafa",
                "d53359a974"
              ],
              "status": "done",
              "evidence": "git d53359a9"
            },
            {
              "v": "f7c6809b",
              "date": "10-15",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(commands): address Santa Loop review feedback",
              "items": [
                "ethereal49",
                "f7c6809bd7"
              ],
              "status": "done",
              "evidence": "git f7c6809b"
            },
            {
              "v": "0bbd0694",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): guard MCP exclusions by payload shape",
              "items": [
                "Yann Roberto",
                "0bbd0694c0"
              ],
              "status": "done",
              "evidence": "git 0bbd0694"
            },
            {
              "v": "405610bc",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(dashboard): keep the web dashboard running when no browser launcher is installed",
              "items": [
                "Gaurav Dubey",
                "405610bc29"
              ],
              "status": "done",
              "evidence": "git 405610bc"
            },
            {
              "v": "159e3899",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(dashboard): log when the browser cannot be opened automatically",
              "items": [
                "Gaurav Dubey",
                "159e389927"
              ],
              "status": "done",
              "evidence": "git 159e3899"
            },
            {
              "v": "72cf9321",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(worker): clarify invalid task file diagnostics",
              "items": [
                "KET ⚡",
                "72cf932195"
              ],
              "status": "done",
              "evidence": "git 72cf9321"
            },
            {
              "v": "35f57c80",
              "date": "10-16",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(eval): split the context-profile evaluator run loop",
              "items": [
                "Affaan Mustafa",
                "35f57c80e6"
              ],
              "status": "done",
              "evidence": "git 35f57c80"
            },
            {
              "v": "5367671a",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject missing session inspection option values",
              "items": [
                "Eneko Ruiz",
                "5367671a22"
              ],
              "status": "done",
              "evidence": "git 5367671a"
            },
            {
              "v": "633aed12",
              "date": "10-16",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: explain FastAPI async fixture lifespan management",
              "items": [
                "Eneko Ruiz",
                "633aed12e2"
              ],
              "status": "done",
              "evidence": "git 633aed12"
            },
            {
              "v": "0931f667",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: normalize Windows paths containing spaces and Unicode",
              "items": [
                "Eneko Ruiz",
                "0931f66775"
              ],
              "status": "done",
              "evidence": "git 0931f667"
            },
            {
              "v": "3a261478",
              "date": "10-16",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: repair Japanese guide image URLs",
              "items": [
                "Eneko Ruiz",
                "3a26147843"
              ],
              "status": "done",
              "evidence": "git 3a261478"
            },
            {
              "v": "3ac640f6",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: sort missing inspection dates after pre-epoch timestamps",
              "items": [
                "Eneko Ruiz",
                "3ac640f6cc"
              ],
              "status": "done",
              "evidence": "git 3ac640f6"
            },
            {
              "v": "65f7dfb7",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: reject missing session database and limit values",
              "items": [
                "Eneko Ruiz",
                "65f7dfb735"
              ],
              "status": "done",
              "evidence": "git 65f7dfb7"
            },
            {
              "v": "5701a4f2",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: respect CLAUDE_CONFIG_DIR with WSL Windows-path conversion",
              "items": [
                "Alan Vo",
                "5701a4f2e1"
              ],
              "status": "done",
              "evidence": "git 5701a4f2"
            },
            {
              "v": "42973757",
              "date": "10-16",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: use UTF-8 throughout skill compliance workflows",
              "items": [
                "Eneko Ruiz",
                "429737572a"
              ],
              "status": "done",
              "evidence": "git 42973757"
            },
            {
              "v": "81b7f9b1",
              "date": "10-17",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: refresh registry digest after skill update",
              "items": [
                "Eneko Ruiz",
                "81b7f9b18f"
              ],
              "status": "done",
              "evidence": "git 81b7f9b1"
            },
            {
              "v": "26d2010a",
              "date": "10-17",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(hooks): split shell-scan into per-token helpers",
              "items": [
                "Affaan Mustafa",
                "26d2010a16"
              ],
              "status": "done",
              "evidence": "git 26d2010a"
            },
            {
              "v": "87aaef56",
              "date": "10-17",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(lib): split the gateguard code lexer by token class",
              "items": [
                "Affaan Mustafa",
                "87aaef56cb"
              ],
              "status": "done",
              "evidence": "git 87aaef56"
            },
            {
              "v": "5c507e07",
              "date": "10-17",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(lib): split search evidence by tool and credit path",
              "items": [
                "Affaan Mustafa",
                "5c507e0704"
              ],
              "status": "done",
              "evidence": "git 5c507e07"
            },
            {
              "v": "6f1881ae",
              "date": "10-17",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(lib): split nasiko install, uninstall and tar extraction",
              "items": [
                "Affaan Mustafa",
                "6f1881aeaf"
              ],
              "status": "done",
              "evidence": "git 6f1881ae"
            },
            {
              "v": "58b191c2",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: normalize trailing Windows paths and spaced filenames",
              "items": [
                "Eneko Ruiz",
                "58b191c25d"
              ],
              "status": "done",
              "evidence": "git 58b191c2"
            },
            {
              "v": "f1c6692f",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: include the oldest dashboard window boundary",
              "items": [
                "Eneko Ruiz",
                "f1c6692f99"
              ],
              "status": "done",
              "evidence": "git f1c6692f"
            },
            {
              "v": "21e0ab52",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(session-aliases): reject array-shaped alias maps",
              "items": [
                "Eneko Ruiz",
                "21e0ab5271"
              ],
              "status": "done",
              "evidence": "git 21e0ab52"
            },
            {
              "v": "1d20bed3",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: treat optional-only specs as compliant",
              "items": [
                "Eneko Ruiz",
                "1d20bed37f"
              ],
              "status": "done",
              "evidence": "git 1d20bed3"
            },
            {
              "v": "feff29fd",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opensource-pipeline): keep pre-existing reports out of the first fork commit",
              "items": [
                "Wen",
                "feff29fd80"
              ],
              "status": "done",
              "evidence": "git feff29fd"
            },
            {
              "v": "1d10720b",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skill-comply): check the archive operand, not selected members, before extraction",
              "items": [
                "Wen",
                "1d10720b44"
              ],
              "status": "done",
              "evidence": "git 1d10720b"
            },
            {
              "v": "7d447343",
              "date": "10-17",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(continuous-learning-v2): redact numeric DSN passwords cut at the truncation boundary",
              "items": [
                "Wen",
                "7d44734328"
              ],
              "status": "done",
              "evidence": "git 7d447343"
            },
            {
              "v": "9471ef47",
              "date": "10-18",
              "group": "2026-10",
              "lane": "test",
              "title": "test(runner): add a worker pool and an ECC_TEST_ONLY filter to run-all",
              "items": [
                "Affaan Mustafa",
                "9471ef4724"
              ],
              "status": "done",
              "evidence": "git 9471ef47"
            },
            {
              "v": "07971588",
              "date": "10-18",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: replace the 33-way test matrix with full and package-manager lanes",
              "items": [
                "Affaan Mustafa",
                "07971588f8"
              ],
              "status": "done",
              "evidence": "git 07971588"
            },
            {
              "v": "9388e06e",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve diagnostics after extensionless Windows paths",
              "items": [
                "Eneko Ruiz",
                "9388e06ec7"
              ],
              "status": "done",
              "evidence": "git 9388e06e"
            },
            {
              "v": "c73353e2",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: normalize Windows backup filename suffixes",
              "items": [
                "Eneko Ruiz",
                "c73353e2c7"
              ],
              "status": "done",
              "evidence": "git c73353e2"
            },
            {
              "v": "67034687",
              "date": "10-18",
              "group": "2026-10",
              "lane": "fix",
              "title": "Fix CLAUDE_CONFIG_DIR tilde expansion, blank path fallback, and inline WSL resolver parity",
              "items": [
                "Alan Vo",
                "67034687f3"
              ],
              "status": "done",
              "evidence": "git 67034687"
            },
            {
              "v": "f78fe328",
              "date": "10-18",
              "group": "2026-10",
              "lane": "test",
              "title": "test: enforce legacy locales for UTF-8 regressions",
              "items": [
                "Eneko Ruiz",
                "f78fe3287b"
              ],
              "status": "done",
              "evidence": "git f78fe328"
            },
            {
              "v": "e9176a14",
              "date": "10-18",
              "group": "2026-10",
              "lane": "test",
              "title": "test: annotate the legacy locale I/O wrapper",
              "items": [
                "Eneko Ruiz",
                "e9176a14e3"
              ],
              "status": "done",
              "evidence": "git e9176a14"
            },
            {
              "v": "dcf27b83",
              "date": "10-19",
              "group": "2026-10",
              "lane": "other",
              "title": "perf(proximity): bound memory for large line ranges",
              "items": [
                "Bortlesboat",
                "dcf27b8361"
              ],
              "status": "done",
              "evidence": "git dcf27b83"
            },
            {
              "v": "6c557856",
              "date": "10-19",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(ci): cap open PRs per contributor at ten (#3639)",
              "items": [
                "Affaan Mustafa",
                "6c557856af"
              ],
              "status": "done",
              "evidence": "git 6c557856"
            },
            {
              "v": "8293d0da",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(commands): drop unrendered LITE_MODE_FLAG token from codeagent-wrapper calls (#3640)",
              "items": [
                "Affaan Mustafa",
                "8293d0da8f"
              ],
              "status": "done",
              "evidence": "git 8293d0da"
            },
            {
              "v": "5af4395e",
              "date": "10-19",
              "group": "2026-10",
              "lane": "test",
              "title": "test(lib): cover five untested scripts/lib modules (#3641)",
              "items": [
                "Affaan Mustafa",
                "5af4395e5c"
              ],
              "status": "done",
              "evidence": "git 5af4395e"
            },
            {
              "v": "79d22134",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opensource-pipeline): drop copied reports from the index even when .gitignore re-includes them",
              "items": [
                "Wen",
                "79d22134e6"
              ],
              "status": "done",
              "evidence": "git 79d22134"
            },
            {
              "v": "1bf9c21e",
              "date": "10-19",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(videodb): use $HOME for the Codex skill path inside the quoted command",
              "items": [
                "Wen",
                "1bf9c21e77"
              ],
              "status": "done",
              "evidence": "git 1bf9c21e"
            },
            {
              "v": "a14e43f6",
              "date": "10-19",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skill-comply): find the tar archive after other option values in old-style clusters",
              "items": [
                "Wen",
                "a14e43f6c6"
              ],
              "status": "done",
              "evidence": "git a14e43f6"
            },
            {
              "v": "a31dfbf0",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'main' into fix/jsonc-opencode-config-membership-check",
              "items": [
                "haelyra",
                "a31dfbf0e4"
              ],
              "status": "done",
              "evidence": "git a31dfbf0"
            },
            {
              "v": "224f99c0",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'main' into fix/managed-hook-config-bom",
              "items": [
                "haelyra",
                "224f99c059"
              ],
              "status": "done",
              "evidence": "git 224f99c0"
            },
            {
              "v": "2144e787",
              "date": "10-20",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: refresh skill trigger digest for remotion typo",
              "items": [
                "haelyra",
                "2144e78761"
              ],
              "status": "done",
              "evidence": "git 2144e787"
            },
            {
              "v": "bf49b20a",
              "date": "10-20",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: pin Antigravity registry check to 2.2.3",
              "items": [
                "haelyra",
                "bf49b20a71"
              ],
              "status": "done",
              "evidence": "git bf49b20a"
            },
            {
              "v": "acc24a22",
              "date": "10-20",
              "group": "2026-10",
              "lane": "test",
              "title": "test: align Antigravity guide check with pinned release",
              "items": [
                "haelyra",
                "acc24a226f"
              ],
              "status": "done",
              "evidence": "git acc24a22"
            },
            {
              "v": "14693070",
              "date": "10-20",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: normalize apostrophes inside quoted Windows paths",
              "items": [
                "haelyra",
                "14693070a1"
              ],
              "status": "done",
              "evidence": "git 14693070"
            },
            {
              "v": "0fe05856",
              "date": "10-20",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: refresh combined skill trigger registry digest",
              "items": [
                "haelyra",
                "0fe0585619"
              ],
              "status": "done",
              "evidence": "git 0fe05856"
            },
            {
              "v": "accdc30c",
              "date": "10-20",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: refresh registry digest for combined skill changes",
              "items": [
                "haelyra",
                "accdc30c07"
              ],
              "status": "done",
              "evidence": "git accdc30c"
            },
            {
              "v": "45a021ea",
              "date": "10-20",
              "group": "2026-10",
              "lane": "test",
              "title": "test: remove extra trailing blank line from installer coverage",
              "items": [
                "haelyra",
                "45a021ea11"
              ],
              "status": "done",
              "evidence": "git 45a021ea"
            },
            {
              "v": "d9ad010b",
              "date": "10-20",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: refresh digest for ten combined skill fixes",
              "items": [
                "haelyra",
                "d9ad010b19"
              ],
              "status": "done",
              "evidence": "git d9ad010b"
            },
            {
              "v": "90b9fba1",
              "date": "10-20",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opencode): pin Node 18 compatible runtime plugin",
              "items": [
                "haelyra",
                "90b9fba1a4"
              ],
              "status": "done",
              "evidence": "git 90b9fba1"
            },
            {
              "v": "c04d00c1",
              "date": "10-20",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(integration): address review findings in docs and diagnostics",
              "items": [
                "haelyra",
                "c04d00c15e"
              ],
              "status": "done",
              "evidence": "git c04d00c1"
            },
            {
              "v": "fcff074e",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'stewardship/verified-pr-batch-3538-3566' into stewardship/verified-pr-batch-3602-3621-owned",
              "items": [
                "haelyra",
                "fcff074e6f"
              ],
              "status": "done",
              "evidence": "git fcff074e"
            },
            {
              "v": "63daf0e8",
              "date": "10-20",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skill-comply): send Unicode Claude prompts through stdin",
              "items": [
                "haelyra",
                "63daf0e89d"
              ],
              "status": "done",
              "evidence": "git 63daf0e8"
            },
            {
              "v": "071e1fea",
              "date": "10-20",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(integration): address reviewer portability and guidance",
              "items": [
                "haelyra",
                "071e1fea6d"
              ],
              "status": "done",
              "evidence": "git 071e1fea"
            },
            {
              "v": "a6db53f8",
              "date": "10-20",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(inspection): normalize diagnostic-looking Windows filenames",
              "items": [
                "haelyra",
                "a6db53f835"
              ],
              "status": "done",
              "evidence": "git a6db53f8"
            },
            {
              "v": "6e11d21d",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'stewardship/verified-pr-batch-3538-3566' into stewardship/verified-pr-batch-3602-3621-owned",
              "items": [
                "haelyra",
                "6e11d21dd1"
              ],
              "status": "done",
              "evidence": "git 6e11d21d"
            },
            {
              "v": "dd640d14",
              "date": "10-20",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: refresh registry digest after skill-comply repair",
              "items": [
                "haelyra",
                "dd640d14ff"
              ],
              "status": "done",
              "evidence": "git dd640d14"
            },
            {
              "v": "3ffb0d90",
              "date": "10-20",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge branch 'stewardship/verified-pr-batch-3602-3621-owned' into stewardship/verified-pr-batch-3569-3578-owned",
              "items": [
                "haelyra",
                "3ffb0d90af"
              ],
              "status": "done",
              "evidence": "git 3ffb0d90"
            },
            {
              "v": "a1e84ca6",
              "date": "10-20",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opensource): permit only untracked reports at publish gate",
              "items": [
                "haelyra",
                "a1e84ca67a"
              ],
              "status": "done",
              "evidence": "git a1e84ca6"
            },
            {
              "v": "30b68924",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): treat .pi as a foreign platform path (#3560)",
              "items": [
                "Gaurav Dubey",
                "30b68924ae"
              ],
              "status": "done",
              "evidence": "git 30b68924"
            },
            {
              "v": "90606c83",
              "date": "10-21",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: correct MODULE_NOT_FOUND plugin cache path (#3586)",
              "items": [
                "Zhengyu Chen",
                "90606c8315"
              ],
              "status": "done",
              "evidence": "git 90606c83"
            },
            {
              "v": "e887967d",
              "date": "10-21",
              "group": "2026-10",
              "lane": "test",
              "title": "test: cover skill plugin-root resolution with installed-invocation fixture",
              "items": [
                "Geronimo",
                "e887967d6d"
              ],
              "status": "done",
              "evidence": "git e887967d"
            },
            {
              "v": "25465060",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: resolve the ECC script root in skill commands across install modes",
              "items": [
                "Geronimo",
                "25465060a3"
              ],
              "status": "done",
              "evidence": "git 25465060"
            },
            {
              "v": "a4bf054f",
              "date": "10-21",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: refresh skill-triggers registry digest for skill doc changes",
              "items": [
                "Geronimo",
                "a4bf054f5d"
              ],
              "status": "done",
              "evidence": "git a4bf054f"
            },
            {
              "v": "e191cf8b",
              "date": "10-21",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: narrow npmscan to dependency-file changes, least privilege, comment only on findings",
              "items": [
                "Shyngys Shynbolatov",
                "e191cf8b36"
              ],
              "status": "done",
              "evidence": "git e191cf8b"
            },
            {
              "v": "7f366e79",
              "date": "10-21",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(security): add security evidence for #3582 with recorded npmscan runs",
              "items": [
                "Shyngys Shynbolatov",
                "7f366e793f"
              ],
              "status": "done",
              "evidence": "git 7f366e79"
            },
            {
              "v": "db29f112",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): preserve usage records at transcript tail boundaries",
              "items": [
                "yyx",
                "db29f112ff"
              ],
              "status": "done",
              "evidence": "git db29f112"
            },
            {
              "v": "9bd8c114",
              "date": "10-21",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(skills): add seller replay guard to agent-payment-x402",
              "items": [
                "Christopher Ferjo",
                "9bd8c1146e"
              ],
              "status": "done",
              "evidence": "git 9bd8c114"
            },
            {
              "v": "e24bffde",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): harden x402 seller replay guard; add executable test",
              "items": [
                "Christopher Ferjo",
                "e24bffde26"
              ],
              "status": "done",
              "evidence": "git e24bffde"
            },
            {
              "v": "ef5a0805",
              "date": "10-21",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): cap pending replay claims when the store stops replying",
              "items": [
                "Christopher Ferjo",
                "ef5a0805a4"
              ],
              "status": "done",
              "evidence": "git ef5a0805"
            },
            {
              "v": "99aa85dd",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): let the dev-server block see a tmux launch past tmux options",
              "items": [
                "L4XB",
                "99aa85dde9"
              ],
              "status": "done",
              "evidence": "git 99aa85dd"
            },
            {
              "v": "87945aac",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): read tmux option clusters and command sequences in the dev-server block",
              "items": [
                "L4XB",
                "87945aac1f"
              ],
              "status": "done",
              "evidence": "git 87945aac"
            },
            {
              "v": "eee00776",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): end a tmux command at a semicolon that ends an argument",
              "items": [
                "L4XB",
                "eee00776be"
              ],
              "status": "done",
              "evidence": "git eee00776"
            },
            {
              "v": "adf435d3",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): find console.log in modified files from a subdirectory session",
              "items": [
                "L4XB",
                "adf435d36f"
              ],
              "status": "done",
              "evidence": "git adf435d3"
            },
            {
              "v": "5311485e",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): keep a backslash in double quotes as bash does in the dev-server block",
              "items": [
                "L4XB",
                "5311485e94"
              ],
              "status": "done",
              "evidence": "git 5311485e"
            },
            {
              "v": "b02e02dc",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): list modified files from the repository root even with diff.relative",
              "items": [
                "L4XB",
                "b02e02dcd2"
              ],
              "status": "done",
              "evidence": "git b02e02dc"
            },
            {
              "v": "cd1f5b74",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): match tsc diagnostics by the file they name",
              "items": [
                "L4XB",
                "cd1f5b74e2"
              ],
              "status": "done",
              "evidence": "git cd1f5b74"
            },
            {
              "v": "10e7c580",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): recognize Prettier's TypeScript and JSON5 config files",
              "items": [
                "L4XB",
                "10e7c5800f"
              ],
              "status": "done",
              "evidence": "git 10e7c580"
            },
            {
              "v": "0ca9eeb3",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): stop hook stdin reads when the caller never sends EOF",
              "items": [
                "Gaurav Dubey",
                "0ca9eeb3ce"
              ],
              "status": "done",
              "evidence": "git 0ca9eeb3"
            },
            {
              "v": "943eb826",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): clamp the stdin idle deadline to the timer maximum",
              "items": [
                "Gaurav Dubey",
                "943eb826b5"
              ],
              "status": "done",
              "evidence": "git 943eb826"
            },
            {
              "v": "2600c702",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): fail closed on incomplete input in bash-hook-dispatcher",
              "items": [
                "Gaurav Dubey",
                "2600c70298"
              ],
              "status": "done",
              "evidence": "git 2600c702"
            },
            {
              "v": "8f767240",
              "date": "10-22",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): keep x402 replay claims until the authorization expires",
              "items": [
                "Christopher Ferjo",
                "8f7672406c"
              ],
              "status": "done",
              "evidence": "git 8f767240"
            },
            {
              "v": "707e0e19",
              "date": "10-23",
              "group": "2026-10",
              "lane": "test",
              "title": "test(hooks): cover a complete Bash request on held-open stdin",
              "items": [
                "Gaurav Dubey",
                "707e0e1956"
              ],
              "status": "done",
              "evidence": "git 707e0e19"
            },
            {
              "v": "ce37e4d1",
              "date": "10-23",
              "group": "2026-10",
              "lane": "test",
              "title": "test(hooks): pin hook flags in the held-open stdin helper",
              "items": [
                "Gaurav Dubey",
                "ce37e4d16d"
              ],
              "status": "done",
              "evidence": "git ce37e4d1"
            },
            {
              "v": "6ab58b6d",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(tests): resolve python utf-8 io and timeout issues on Windows",
              "items": [
                "Rufat Azizzade",
                "6ab58b6d3b"
              ],
              "status": "done",
              "evidence": "git 6ab58b6d"
            },
            {
              "v": "90d94d44",
              "date": "10-25",
              "group": "2026-10",
              "lane": "test",
              "title": "test: fix Windows install and ck hook expectations",
              "items": [
                "haelyra",
                "90d94d4424"
              ],
              "status": "done",
              "evidence": "git 90d94d44"
            },
            {
              "v": "87e8d734",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opencode): ship audited runtime dependencies",
              "items": [
                "haelyra",
                "87e8d734a7"
              ],
              "status": "done",
              "evidence": "git 87e8d734"
            },
            {
              "v": "108ff186",
              "date": "10-25",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(ci): limit Issue bursts and open submissions per author (#3723)",
              "items": [
                "haelyra",
                "108ff18624"
              ],
              "status": "done",
              "evidence": "git 108ff186"
            },
            {
              "v": "e4947993",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3654 from affaan-m/stewardship/verified-pr-batch-3569-3578-owned",
              "items": [
                "haelyra",
                "e494799377"
              ],
              "status": "done",
              "evidence": "git e4947993"
            },
            {
              "v": "e3292b00",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3594 from ketpatil77/fix/managed-hook-config-bom",
              "items": [
                "haelyra",
                "e3292b0010"
              ],
              "status": "done",
              "evidence": "git e3292b00"
            },
            {
              "v": "dcb947a4",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): judge exempt globs against real target location",
              "items": [
                "Gaurav Dubey",
                "dcb947a4e1"
              ],
              "status": "done",
              "evidence": "git dcb947a4"
            },
            {
              "v": "e06c9d27",
              "date": "10-25",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: integrate four reviewed workflow guidance PRs",
              "items": [
                "Dante",
                "e06c9d276b"
              ],
              "status": "done",
              "evidence": "git e06c9d27"
            },
            {
              "v": "7b1449ef",
              "date": "10-25",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(governance): port optional module and context workflows",
              "items": [
                "Seekers2001",
                "7b1449ef53"
              ],
              "status": "done",
              "evidence": "git 7b1449ef"
            },
            {
              "v": "b98bff4a",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(observer): keep project context and leases aligned after remote changes",
              "items": [
                "Gaurav Dubey",
                "b98bff4a45"
              ],
              "status": "done",
              "evidence": "git b98bff4a"
            },
            {
              "v": "f4e8f6eb",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge reviewed OpenCode JSONC fix from #3590",
              "items": [
                "haelyra",
                "f4e8f6eb3e"
              ],
              "status": "done",
              "evidence": "git f4e8f6eb"
            },
            {
              "v": "7f0b6ce5",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): reject malformed empty-container JSONC commas",
              "items": [
                "haelyra",
                "7f0b6ce500"
              ],
              "status": "done",
              "evidence": "git 7f0b6ce5"
            },
            {
              "v": "e2be9b5a",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3732 from affaan-m/stewardship/opencode-jsonc-3590-20261025",
              "items": [
                "haelyra",
                "e2be9b5ac4"
              ],
              "status": "done",
              "evidence": "git e2be9b5a"
            },
            {
              "v": "f3904009",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3583 from Tivonsico/fix/skill-run-timestamp-type-20261014",
              "items": [
                "haelyra",
                "f390400944"
              ],
              "status": "done",
              "evidence": "git f3904009"
            },
            {
              "v": "6ddc4ea0",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "Integrate L4XB PR #3666",
              "items": [
                "haelyra",
                "6ddc4ea007"
              ],
              "status": "done",
              "evidence": "git 6ddc4ea0"
            },
            {
              "v": "0e7588ce",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "Integrate L4XB PR #3667",
              "items": [
                "haelyra",
                "0e7588cec5"
              ],
              "status": "done",
              "evidence": "git 0e7588ce"
            },
            {
              "v": "9c8a66b6",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "Integrate L4XB PR #3664",
              "items": [
                "haelyra",
                "9c8a66b696"
              ],
              "status": "done",
              "evidence": "git 9c8a66b6"
            },
            {
              "v": "605e0061",
              "date": "10-25",
              "group": "2026-10",
              "lane": "other",
              "title": "Integrate L4XB PR #3662",
              "items": [
                "haelyra",
                "605e006137"
              ],
              "status": "done",
              "evidence": "git 605e0061"
            },
            {
              "v": "0a7a9a71",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): use session repository for console warnings",
              "items": [
                "haelyra",
                "0a7a9a718e"
              ],
              "status": "done",
              "evidence": "git 0a7a9a71"
            },
            {
              "v": "e10f7241",
              "date": "10-25",
              "group": "2026-10",
              "lane": "test",
              "title": "test(hooks): isolate Git fixtures from inherited env",
              "items": [
                "haelyra",
                "e10f72413f"
              ],
              "status": "done",
              "evidence": "git e10f7241"
            },
            {
              "v": "b144908d",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(types): declare Git utility options",
              "items": [
                "haelyra",
                "b144908df6"
              ],
              "status": "done",
              "evidence": "git b144908d"
            },
            {
              "v": "46baaedd",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): claim x402 payments in onAfterVerify, fail closed",
              "items": [
                "Christopher Ferjo",
                "46baaeddf0"
              ],
              "status": "done",
              "evidence": "git 46baaedd"
            },
            {
              "v": "c1128808",
              "date": "10-25",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): release x402 claims that land after a timeout",
              "items": [
                "Christopher Ferjo",
                "c11288086c"
              ],
              "status": "done",
              "evidence": "git c1128808"
            },
            {
              "v": "4c28a7be",
              "date": "10-26",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: audit closed-issue delivery claims — cited PRs must actually be merged (#3522)",
              "items": [
                "chenhz01",
                "4c28a7be9e"
              ],
              "status": "done",
              "evidence": "git 4c28a7be"
            },
            {
              "v": "25278e7d",
              "date": "10-26",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3736 from haelyra/integration/l4xb-four-hooks-20261025",
              "items": [
                "haelyra",
                "25278e7d7b"
              ],
              "status": "done",
              "evidence": "git 25278e7d"
            },
            {
              "v": "73286a2e",
              "date": "10-26",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: distinguish target acceptance from local verification",
              "items": [
                "Eneko Ruiz",
                "73286a2e11"
              ],
              "status": "done",
              "evidence": "git 73286a2e"
            },
            {
              "v": "d4c1fecf",
              "date": "10-26",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: sync Pi verification guidance and clarify target evidence",
              "items": [
                "Eneko Ruiz",
                "d4c1fecfaf"
              ],
              "status": "done",
              "evidence": "git d4c1fecf"
            },
            {
              "v": "84e0c302",
              "date": "10-26",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: render selector colors as ANSI sequences",
              "items": [
                "Eneko Ruiz",
                "84e0c3025c"
              ],
              "status": "done",
              "evidence": "git 84e0c302"
            },
            {
              "v": "8572b5fb",
              "date": "10-26",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: keep selector output compatible with CP1252",
              "items": [
                "Eneko Ruiz",
                "8572b5fb63"
              ],
              "status": "done",
              "evidence": "git 8572b5fb"
            },
            {
              "v": "03834ce1",
              "date": "10-26",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: carry target acceptance guidance to Codex and Kiro",
              "items": [
                "Eneko Ruiz",
                "03834ce145"
              ],
              "status": "done",
              "evidence": "git 03834ce1"
            },
            {
              "v": "e21d41c9",
              "date": "10-26",
              "group": "2026-10",
              "lane": "test",
              "title": "test: preserve Windows system root in selector subprocesses",
              "items": [
                "Eneko Ruiz",
                "e21d41c9fe"
              ],
              "status": "done",
              "evidence": "git e21d41c9"
            },
            {
              "v": "dc9bb9f2",
              "date": "10-26",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): keep inline resolver backslash-free so hooks parse on Windows",
              "items": [
                "Gaurav Dubey",
                "dc9bb9f2d9"
              ],
              "status": "done",
              "evidence": "git dc9bb9f2"
            },
            {
              "v": "9ccdb06d",
              "date": "10-26",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(skills): point flox-environments at flox/flox-skills",
              "items": [
                "Isaac Karrer",
                "9ccdb06d01"
              ],
              "status": "done",
              "evidence": "git 9ccdb06d"
            },
            {
              "v": "a9eb2fc1",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: add connector diagnostics gap evaluation",
              "items": [
                "Dante",
                "a9eb2fc140"
              ],
              "status": "done",
              "evidence": "git a9eb2fc1"
            },
            {
              "v": "39e34905",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(codex): document cache dependencies without bin links",
              "items": [
                "Dante",
                "39e34905f5"
              ],
              "status": "done",
              "evidence": "git 39e34905"
            },
            {
              "v": "c4942d87",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: add public feedback goal fidelity evaluation",
              "items": [
                "Dante",
                "c4942d873e"
              ],
              "status": "done",
              "evidence": "git c4942d87"
            },
            {
              "v": "ad149f23",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: add prepared verifier and accepted effect evaluation",
              "items": [
                "Dante",
                "ad149f236e"
              ],
              "status": "done",
              "evidence": "git ad149f23"
            },
            {
              "v": "0e257044",
              "date": "10-27",
              "group": "2026-10",
              "lane": "test",
              "title": "test: cover goal fidelity evaluation artifacts",
              "items": [
                "Dante",
                "0e257044ac"
              ],
              "status": "done",
              "evidence": "git 0e257044"
            },
            {
              "v": "8921a5e7",
              "date": "10-27",
              "group": "2026-10",
              "lane": "test",
              "title": "test: validate connector gap evaluation artifacts",
              "items": [
                "Dante",
                "8921a5e732"
              ],
              "status": "done",
              "evidence": "git 8921a5e7"
            },
            {
              "v": "2de32980",
              "date": "10-27",
              "group": "2026-10",
              "lane": "test",
              "title": "test: cover prepared verifier effect state artifacts",
              "items": [
                "Dante",
                "2de32980ea"
              ],
              "status": "done",
              "evidence": "git 2de32980"
            },
            {
              "v": "424c9120",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(codex): verify active cache and stop failed installs",
              "items": [
                "Dante",
                "424c9120f1"
              ],
              "status": "done",
              "evidence": "git 424c9120"
            },
            {
              "v": "89b8c26a",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(codex): quote active plugin cache paths",
              "items": [
                "Dante",
                "89b8c26a6d"
              ],
              "status": "done",
              "evidence": "git 89b8c26a"
            },
            {
              "v": "8dea6c55",
              "date": "10-27",
              "group": "2026-10",
              "lane": "test",
              "title": "test: tolerate verifier playbook table spacing",
              "items": [
                "Dante",
                "8dea6c554e"
              ],
              "status": "done",
              "evidence": "git 8dea6c55"
            },
            {
              "v": "c56b45af",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: complete verifier fixture report evidence contract",
              "items": [
                "Dante",
                "c56b45afdc"
              ],
              "status": "done",
              "evidence": "git c56b45af"
            },
            {
              "v": "dd6f58d3",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(codex): recommend native cache recovery in checker",
              "items": [
                "Dante",
                "dd6f58d3d4"
              ],
              "status": "done",
              "evidence": "git dd6f58d3"
            },
            {
              "v": "49f8893d",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(codex): bind cache rerun guidance to active plugin",
              "items": [
                "Dante",
                "49f8893dd3"
              ],
              "status": "done",
              "evidence": "git 49f8893d"
            },
            {
              "v": "018bc4d7",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): ignore tool events from unregistered sessions",
              "items": [
                "Harry",
                "018bc4d7cb"
              ],
              "status": "done",
              "evidence": "git 018bc4d7"
            },
            {
              "v": "432ebe2c",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: scope connector preparation around unavailable SSH",
              "items": [
                "Dante",
                "432ebe2cd1"
              ],
              "status": "done",
              "evidence": "git 432ebe2c"
            },
            {
              "v": "4f0c0876",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: update tinystruct-patterns skill for tinystruct 1.7.37",
              "items": [
                "@James",
                "4f0c087661"
              ],
              "status": "done",
              "evidence": "git 4f0c0876"
            },
            {
              "v": "153b185e",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: correct and extend tinystruct-patterns logging configuration",
              "items": [
                "@James",
                "153b185e02"
              ],
              "status": "done",
              "evidence": "git 153b185e"
            },
            {
              "v": "deec267f",
              "date": "10-27",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: qualify CLI-first guidance and add FileHandler details in tinystruct-patterns",
              "items": [
                "@James",
                "deec267f07"
              ],
              "status": "done",
              "evidence": "git deec267f"
            },
            {
              "v": "f57a8d8a",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): let [1m] marker beat CLAUDE_CODE_AUTO_COMPACT_WINDOW",
              "items": [
                "darkzOGx",
                "f57a8d8a74"
              ],
              "status": "done",
              "evidence": "git f57a8d8a"
            },
            {
              "v": "ed2f02dd",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(config-protection): check MultiEdit edits[].file_path targets",
              "items": [
                "Brian La Plume",
                "ed2f02dd06"
              ],
              "status": "done",
              "evidence": "git ed2f02dd"
            },
            {
              "v": "1d55d690",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(run-with-flags): fail closed for oversized Bash GateGuard input",
              "items": [
                "Brian La Plume",
                "1d55d690b9"
              ],
              "status": "done",
              "evidence": "git 1d55d690"
            },
            {
              "v": "646b4d14",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): classify rm/Git behind sudo/doas/env/command wrappers",
              "items": [
                "Brian La Plume",
                "646b4d1442"
              ],
              "status": "done",
              "evidence": "git 646b4d14"
            },
            {
              "v": "9c6499d7",
              "date": "10-27",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): copy pooled buffer bytes before return in golang-patterns",
              "items": [
                "Dan",
                "9c6499d770"
              ],
              "status": "done",
              "evidence": "git 9c6499d7"
            },
            {
              "v": "0618bdc7",
              "date": "10-27",
              "group": "2026-10",
              "lane": "test",
              "title": "test(claw): keep the askClaude tests from spawning a real claude CLI",
              "items": [
                "Muhammad Zubair",
                "0618bdc7a8"
              ],
              "status": "done",
              "evidence": "git 0618bdc7"
            },
            {
              "v": "b423a183",
              "date": "10-27",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(context-packs): refresh skill-triggers registry digest",
              "items": [
                "Wen",
                "b423a183b5"
              ],
              "status": "done",
              "evidence": "git b423a183"
            },
            {
              "v": "e242335d",
              "date": "10-27",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(context-packs): refresh skill-triggers registry digest",
              "items": [
                "Wen",
                "e242335d27"
              ],
              "status": "done",
              "evidence": "git e242335d"
            },
            {
              "v": "47a5245f",
              "date": "10-27",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(context-packs): refresh skill-triggers registry digest",
              "items": [
                "Wen",
                "47a5245f1b"
              ],
              "status": "done",
              "evidence": "git 47a5245f"
            },
            {
              "v": "c5a11f9f",
              "date": "10-27",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(context-packs): refresh skill-triggers registry digest",
              "items": [
                "Wen",
                "c5a11f9f7a"
              ],
              "status": "done",
              "evidence": "git c5a11f9f"
            },
            {
              "v": "6425693e",
              "date": "10-28",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(install): install converted rules for the copilot target",
              "items": [
                "manuel-albanese_ssgia",
                "6425693e4b"
              ],
              "status": "done",
              "evidence": "git 6425693e"
            },
            {
              "v": "6c3dfb7b",
              "date": "10-28",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: distinguish target contract dependencies after scope revision",
              "items": [
                "Dante",
                "6c3dfb7b96"
              ],
              "status": "done",
              "evidence": "git 6c3dfb7b"
            },
            {
              "v": "54e66695",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): prevent recursive auto-dispatch of assignment handoffs",
              "items": [
                "harryert",
                "54e66695b1"
              ],
              "status": "done",
              "evidence": "git 54e66695"
            },
            {
              "v": "b0a4551a",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): exclude native delegation notices from auto-dispatch",
              "items": [
                "Harry",
                "b0a4551adf"
              ],
              "status": "done",
              "evidence": "git b0a4551a"
            },
            {
              "v": "d3bc76e6",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): honor configured worktree policy in daemon dispatch",
              "items": [
                "Harry",
                "d3bc76e61e"
              ],
              "status": "done",
              "evidence": "git d3bc76e6"
            },
            {
              "v": "ec7ff61d",
              "date": "10-28",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ecc2): cover long native delegation sender IDs",
              "items": [
                "Harry",
                "ec7ff61d4d"
              ],
              "status": "done",
              "evidence": "git ec7ff61d"
            },
            {
              "v": "bb32cb38",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): delimit Claude tasks after variadic options",
              "items": [
                "Shubham Padkonde",
                "bb32cb389b"
              ],
              "status": "done",
              "evidence": "git bb32cb38"
            },
            {
              "v": "9b27576e",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): preserve assigned work in load and rebalance",
              "items": [
                "Harry",
                "9b27576ee7"
              ],
              "status": "done",
              "evidence": "git 9b27576e"
            },
            {
              "v": "b3b13350",
              "date": "10-28",
              "group": "2026-10",
              "lane": "test",
              "title": "test: isolate HOME in the test files that write to the real home directory",
              "items": [
                "Muhammad Zubair",
                "b3b13350d1"
              ],
              "status": "done",
              "evidence": "git b3b13350"
            },
            {
              "v": "b805cdfa",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(work-items): preserve native ownership during GitHub sync",
              "items": [
                "Shubham Padkonde",
                "b805cdfae8"
              ],
              "status": "done",
              "evidence": "git b805cdfa"
            },
            {
              "v": "a75cdc32",
              "date": "10-28",
              "group": "2026-10",
              "lane": "test",
              "title": "test(work-items): verify claim preservation and report suite totals",
              "items": [
                "Shubham Padkonde",
                "a75cdc322b"
              ],
              "status": "done",
              "evidence": "git a75cdc32"
            },
            {
              "v": "f1f54204",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): accept all supported component families in config",
              "items": [
                "Yann Roberto",
                "f1f542044c"
              ],
              "status": "done",
              "evidence": "git f1f54204"
            },
            {
              "v": "15cc7632",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): harden copilot rule conversion edge cases",
              "items": [
                "manuel-albanesee",
                "15cc7632d1"
              ],
              "status": "done",
              "evidence": "git 15cc7632"
            },
            {
              "v": "41149457",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): keep fenced code examples unchanged in copilot rules",
              "items": [
                "manuel-albanesee",
                "4114945775"
              ],
              "status": "done",
              "evidence": "git 41149457"
            },
            {
              "v": "73f61801",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opencode): make the declined-hooks plugin stub satisfy the V2 loader schema",
              "items": [
                "Ali Arslan",
                "73f61801db"
              ],
              "status": "done",
              "evidence": "git 73f61801"
            },
            {
              "v": "b4b3c84c",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(tests): satisfy review on the loader-contract suite",
              "items": [
                "Ali Arslan",
                "b4b3c84ca0"
              ],
              "status": "done",
              "evidence": "git b4b3c84c"
            },
            {
              "v": "6b11ffeb",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(tests): assert the inert OpenCode stub as a V2 definition object",
              "items": [
                "Ali Arslan",
                "6b11ffeb7d"
              ],
              "status": "done",
              "evidence": "git 6b11ffeb"
            },
            {
              "v": "4ebe4c8b",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(tests): skip the inert OpenCode stub when loading plugin factories",
              "items": [
                "Ali Arslan",
                "4ebe4c8bc3"
              ],
              "status": "done",
              "evidence": "git 4ebe4c8b"
            },
            {
              "v": "b2f4abb4",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opencode): treat the pre-fix declined factory stub as inactive during migration",
              "items": [
                "Ali Arslan",
                "b2f4abb4c4"
              ],
              "status": "done",
              "evidence": "git b2f4abb4"
            },
            {
              "v": "770eb29b",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opencode): remove the pre-fix declined stub the legacy migration leaves behind",
              "items": [
                "Ali Arslan",
                "770eb29b9f"
              ],
              "status": "done",
              "evidence": "git 770eb29b"
            },
            {
              "v": "7253c8a2",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): treat sudo list/validate/edit modes as non-executing",
              "items": [
                "Brian La Plume",
                "7253c8a261"
              ],
              "status": "done",
              "evidence": "git 7253c8a2"
            },
            {
              "v": "fbb9d34f",
              "date": "10-28",
              "group": "2026-10",
              "lane": "test",
              "title": "test(config-protection): missing protected target before an existing one",
              "items": [
                "Brian La Plume",
                "fbb9d34fd1"
              ],
              "status": "done",
              "evidence": "git fbb9d34f"
            },
            {
              "v": "9f05c6fe",
              "date": "10-28",
              "group": "2026-10",
              "lane": "test",
              "title": "test(run-with-flags): pin hook enablement env in GateGuard truncation tests",
              "items": [
                "Brian La Plume",
                "9f05c6fe01"
              ],
              "status": "done",
              "evidence": "git 9f05c6fe"
            },
            {
              "v": "a46e36d4",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): sudo env assignments between options, missing value flags",
              "items": [
                "Brian La Plume",
                "a46e36d488"
              ],
              "status": "done",
              "evidence": "git a46e36d4"
            },
            {
              "v": "2a3ed896",
              "date": "10-28",
              "group": "2026-10",
              "lane": "refactor",
              "title": "refactor(config-protection): build targetPaths without mutation",
              "items": [
                "Brian La Plume",
                "2a3ed89600"
              ],
              "status": "done",
              "evidence": "git 2a3ed896"
            },
            {
              "v": "4a76f784",
              "date": "10-28",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(gateguard): expand unique sudo long-option prefixes",
              "items": [
                "Brian La Plume",
                "4a76f78411"
              ],
              "status": "done",
              "evidence": "git 4a76f784"
            },
            {
              "v": "d2df54a2",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(opencode): never report repair success while the pre-fix stub is retained",
              "items": [
                "Ali Arslan",
                "d2df54a2ef"
              ],
              "status": "done",
              "evidence": "git d2df54a2"
            },
            {
              "v": "7b307518",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(opencode): assert the stub removal was attempted",
              "items": [
                "Ali Arslan",
                "7b3075180f"
              ],
              "status": "done",
              "evidence": "git 7b307518"
            },
            {
              "v": "613d58e7",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): exclude template and started assignment notices from rerouting",
              "items": [
                "Harry",
                "613d58e701"
              ],
              "status": "done",
              "evidence": "git 613d58e7"
            },
            {
              "v": "7af7a18b",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ecc2): prevent template handoff redispatch after real launch",
              "items": [
                "Harry",
                "7af7a18bd5"
              ],
              "status": "done",
              "evidence": "git 7af7a18b"
            },
            {
              "v": "aa63399e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): add issue-review skill and /issue-review command",
              "items": [
                "Tomoya.Fujita",
                "aa63399ebd"
              ],
              "status": "done",
              "evidence": "git aa63399e"
            },
            {
              "v": "6288fe6e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: explain Qwen extension common rule supplement",
              "items": [
                "ivaseeq",
                "6288fe6e47"
              ],
              "status": "done",
              "evidence": "git 6288fe6e"
            },
            {
              "v": "4c58ea1f",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: honor QWEN_HOME in common rule copy instructions",
              "items": [
                "ivaseeq",
                "4c58ea1f69"
              ],
              "status": "done",
              "evidence": "git 4c58ea1f"
            },
            {
              "v": "344953d3",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: resolve ECC rule source under QWEN_HOME",
              "items": [
                "ivaseeq",
                "344953d3e2"
              ],
              "status": "done",
              "evidence": "git 344953d3"
            },
            {
              "v": "1d77da5b",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(work-items): leave imported issues available for native claims",
              "items": [
                "Shubham Padkonde",
                "1d77da5be7"
              ],
              "status": "done",
              "evidence": "git 1d77da5b"
            },
            {
              "v": "581cc541",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(work-items): require explicit ready state for new claims",
              "items": [
                "Harry Chen",
                "581cc54186"
              ],
              "status": "done",
              "evidence": "git 581cc541"
            },
            {
              "v": "49f33292",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(work-items): cover explicit ready claim admission",
              "items": [
                "Harry Chen",
                "49f3329222"
              ],
              "status": "done",
              "evidence": "git 49f33292"
            },
            {
              "v": "037df2b3",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(work-items): preserve legacy active claim idempotence",
              "items": [
                "Harry Chen",
                "037df2b3e9"
              ],
              "status": "done",
              "evidence": "git 037df2b3"
            },
            {
              "v": "2948adf3",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(work-items): cover legacy in-progress claim compatibility",
              "items": [
                "Harry Chen",
                "2948adf3af"
              ],
              "status": "done",
              "evidence": "git 2948adf3"
            },
            {
              "v": "69a46925",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(work-items): cover automatic ready-only pickup",
              "items": [
                "Harry Chen",
                "69a46925ee"
              ],
              "status": "done",
              "evidence": "git 69a46925"
            },
            {
              "v": "9fd9aa5e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(work-items): select next ready task over full native store",
              "items": [
                "Harry Chen",
                "9fd9aa5e7c"
              ],
              "status": "done",
              "evidence": "git 9fd9aa5e"
            },
            {
              "v": "fbea3e0c",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(work-items): use native unbounded ready selection for pickup",
              "items": [
                "Harry Chen",
                "fbea3e0c62"
              ],
              "status": "done",
              "evidence": "git fbea3e0c"
            },
            {
              "v": "24bed716",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(work-items): admit older ready tasks past newest 100 entries",
              "items": [
                "Harry Chen",
                "24bed7165e"
              ],
              "status": "done",
              "evidence": "git 24bed716"
            },
            {
              "v": "77209f81",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ecc2): serialize template cwd with shared guard",
              "items": [
                "Harry",
                "77209f81dd"
              ],
              "status": "done",
              "evidence": "git 77209f81"
            },
            {
              "v": "c6bfc09f",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): preserve unread inbox messages and expose full content",
              "items": [
                "haelyra",
                "c6bfc09f01"
              ],
              "status": "done",
              "evidence": "git c6bfc09f"
            },
            {
              "v": "72df50d1",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ecc2): verify exact displayed inbox message IDs",
              "items": [
                "Harry",
                "72df50d184"
              ],
              "status": "done",
              "evidence": "git 72df50d1"
            },
            {
              "v": "8e4a6c03",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: validate Codex hook references in plugin cache",
              "items": [
                "longankang",
                "8e4a6c03bf"
              ],
              "status": "done",
              "evidence": "git 8e4a6c03"
            },
            {
              "v": "bbbf060e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): retain assignment provenance for safe independent dispatch",
              "items": [
                "Harry",
                "bbbf060ebc"
              ],
              "status": "done",
              "evidence": "git bbbf060e"
            },
            {
              "v": "098c2350",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): resolve native assignment directory from parent lead",
              "items": [
                "Harry",
                "098c2350ba"
              ],
              "status": "done",
              "evidence": "git 098c2350"
            },
            {
              "v": "ad51be75",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ecc2): reject ambiguous relative Lead directory for assignment",
              "items": [
                "Harry",
                "ad51be7515"
              ],
              "status": "done",
              "evidence": "git ad51be75"
            },
            {
              "v": "86c4e1bb",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): honor configured worker profile during native inbox dispatch",
              "items": [
                "Harry",
                "86c4e1bbf4"
              ],
              "status": "done",
              "evidence": "git 86c4e1bb"
            },
            {
              "v": "b890f291",
              "date": "10-29",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(ecc2): update native schedule instructions in place",
              "items": [
                "Harry",
                "b890f2915d"
              ],
              "status": "done",
              "evidence": "git b890f291"
            },
            {
              "v": "241d4215",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: fix broken session storage example link in longform guide",
              "items": [
                "ame",
                "241d42152c"
              ],
              "status": "done",
              "evidence": "git 241d4215"
            },
            {
              "v": "c5be66c9",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(ecc2): preserve nonempty schedule run timestamp on task update",
              "items": [
                "Harry",
                "c5be66c96b"
              ],
              "status": "done",
              "evidence": "git c5be66c9"
            },
            {
              "v": "2af8f933",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(i18n): fix broken links in translated skills and READMEs",
              "items": [
                "ame",
                "2af8f933a5"
              ],
              "status": "done",
              "evidence": "git 2af8f933"
            },
            {
              "v": "eec6623a",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): close a quote that follows a backslash in shell-substitution",
              "items": [
                "leoca",
                "eec6623a61"
              ],
              "status": "done",
              "evidence": "git eec6623a"
            },
            {
              "v": "fb468331",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(scripts): harden gemini-adapt-agents for CRLF, unknown flags, and block tool lists",
              "items": [
                "minteeqahmed-png",
                "fb4683317f"
              ],
              "status": "done",
              "evidence": "git fb468331"
            },
            {
              "v": "68eb49d1",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): harden Antigravity target containment, agent tools, and binary asset copies",
              "items": [
                "minteeqahmed-png",
                "68eb49d175"
              ],
              "status": "done",
              "evidence": "git 68eb49d1"
            },
            {
              "v": "ef82fcb1",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(scripts): strip unquoted YAML comments and preserve mixed body line endings",
              "items": [
                "minteeqahmed-png",
                "ef82fcb130"
              ],
              "status": "done",
              "evidence": "git ef82fcb1"
            },
            {
              "v": "5362ffe2",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(install): preserve mixed body line endings verbatim in Antigravity agent transform",
              "items": [
                "minteeqahmed-png",
                "5362ffe26d"
              ],
              "status": "done",
              "evidence": "git 5362ffe2"
            },
            {
              "v": "8851c049",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: integrate reviewed workflow guidance from #3727",
              "items": [
                "haelyra",
                "8851c049ec"
              ],
              "status": "done",
              "evidence": "git 8851c049"
            },
            {
              "v": "9b296f4c",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: preserve latest contributor migration safeguards and workflow assertions",
              "items": [
                "haelyra",
                "9b296f4cab"
              ],
              "status": "done",
              "evidence": "git 9b296f4c"
            },
            {
              "v": "c337d7c0",
              "date": "10-29",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat: integrate reviewed module governance with Windows path assertions",
              "items": [
                "haelyra",
                "c337d7c057"
              ],
              "status": "done",
              "evidence": "git c337d7c0"
            },
            {
              "v": "8e00137b",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: integrate observer identity and lease repair with canonical root matching",
              "items": [
                "haelyra",
                "8e00137b04"
              ],
              "status": "done",
              "evidence": "git 8e00137b"
            },
            {
              "v": "9aed578c",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: integrate symlink-aware GateGuard exemptions from #3726",
              "items": [
                "haelyra",
                "9aed578c67"
              ],
              "status": "done",
              "evidence": "git 9aed578c"
            },
            {
              "v": "674d5458",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3764",
              "items": [
                "haelyra",
                "674d5458c9"
              ],
              "status": "done",
              "evidence": "git 674d5458"
            },
            {
              "v": "cbdd9be2",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3778",
              "items": [
                "haelyra",
                "cbdd9be209"
              ],
              "status": "done",
              "evidence": "git cbdd9be2"
            },
            {
              "v": "bca6fcee",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3567",
              "items": [
                "haelyra",
                "bca6fcee9e"
              ],
              "status": "done",
              "evidence": "git bca6fcee"
            },
            {
              "v": "7bc0b1a6",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3631",
              "items": [
                "haelyra",
                "7bc0b1a6a9"
              ],
              "status": "done",
              "evidence": "git 7bc0b1a6"
            },
            {
              "v": "09e0eb7d",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3591",
              "items": [
                "haelyra",
                "09e0eb7d7f"
              ],
              "status": "done",
              "evidence": "git 09e0eb7d"
            },
            {
              "v": "59b8ab02",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3707",
              "items": [
                "haelyra",
                "59b8ab024f"
              ],
              "status": "done",
              "evidence": "git 59b8ab02"
            },
            {
              "v": "6e58410e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3555",
              "items": [
                "haelyra",
                "6e58410eaa"
              ],
              "status": "done",
              "evidence": "git 6e58410e"
            },
            {
              "v": "e6b301a4",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3580",
              "items": [
                "haelyra",
                "e6b301a4ac"
              ],
              "status": "done",
              "evidence": "git e6b301a4"
            },
            {
              "v": "16e4edc5",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: integrate portable selector output from #3744",
              "items": [
                "haelyra",
                "16e4edc5ba"
              ],
              "status": "done",
              "evidence": "git 16e4edc5"
            },
            {
              "v": "3a346e51",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3587",
              "items": [
                "haelyra",
                "3a346e5109"
              ],
              "status": "done",
              "evidence": "git 3a346e51"
            },
            {
              "v": "d2c71fd0",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3588",
              "items": [
                "haelyra",
                "d2c71fd0e9"
              ],
              "status": "done",
              "evidence": "git d2c71fd0"
            },
            {
              "v": "a60c58ab",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3780",
              "items": [
                "haelyra",
                "a60c58ab42"
              ],
              "status": "done",
              "evidence": "git a60c58ab"
            },
            {
              "v": "f77db133",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3614",
              "items": [
                "haelyra",
                "f77db133ac"
              ],
              "status": "done",
              "evidence": "git f77db133"
            },
            {
              "v": "ff147d75",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3593",
              "items": [
                "haelyra",
                "ff147d751f"
              ],
              "status": "done",
              "evidence": "git ff147d75"
            },
            {
              "v": "6a3c45ac",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3601",
              "items": [
                "haelyra",
                "6a3c45ac7f"
              ],
              "status": "done",
              "evidence": "git 6a3c45ac"
            },
            {
              "v": "c7db9b41",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3657",
              "items": [
                "haelyra",
                "c7db9b410f"
              ],
              "status": "done",
              "evidence": "git c7db9b41"
            },
            {
              "v": "65d83f92",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3669",
              "items": [
                "haelyra",
                "65d83f9290"
              ],
              "status": "done",
              "evidence": "git 65d83f92"
            },
            {
              "v": "3f3b88a7",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3550",
              "items": [
                "haelyra",
                "3f3b88a725"
              ],
              "status": "done",
              "evidence": "git 3f3b88a7"
            },
            {
              "v": "124887fd",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3748",
              "items": [
                "haelyra",
                "124887fd3b"
              ],
              "status": "done",
              "evidence": "git 124887fd"
            },
            {
              "v": "8fc06b13",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3562",
              "items": [
                "haelyra",
                "8fc06b13cb"
              ],
              "status": "done",
              "evidence": "git 8fc06b13"
            },
            {
              "v": "ff9095f6",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3775",
              "items": [
                "haelyra",
                "ff9095f6f7"
              ],
              "status": "done",
              "evidence": "git ff9095f6"
            },
            {
              "v": "291635f7",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3776",
              "items": [
                "haelyra",
                "291635f7f9"
              ],
              "status": "done",
              "evidence": "git 291635f7"
            },
            {
              "v": "14ba1e21",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3777",
              "items": [
                "haelyra",
                "14ba1e211f"
              ],
              "status": "done",
              "evidence": "git 14ba1e21"
            },
            {
              "v": "023acf21",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3794",
              "items": [
                "haelyra",
                "023acf21d0"
              ],
              "status": "done",
              "evidence": "git 023acf21"
            },
            {
              "v": "6fa858fb",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3803",
              "items": [
                "haelyra",
                "6fa858fbdf"
              ],
              "status": "done",
              "evidence": "git 6fa858fb"
            },
            {
              "v": "7acdf215",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3804",
              "items": [
                "haelyra",
                "7acdf21516"
              ],
              "status": "done",
              "evidence": "git 7acdf215"
            },
            {
              "v": "c12fe451",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3799",
              "items": [
                "haelyra",
                "c12fe451cd"
              ],
              "status": "done",
              "evidence": "git c12fe451"
            },
            {
              "v": "b21be028",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3800",
              "items": [
                "haelyra",
                "b21be0281b"
              ],
              "status": "done",
              "evidence": "git b21be028"
            },
            {
              "v": "414e2add",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3763",
              "items": [
                "haelyra",
                "414e2add02"
              ],
              "status": "done",
              "evidence": "git 414e2add"
            },
            {
              "v": "49098b12",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3753",
              "items": [
                "haelyra",
                "49098b1259"
              ],
              "status": "done",
              "evidence": "git 49098b12"
            },
            {
              "v": "9eb2f191",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3789",
              "items": [
                "haelyra",
                "9eb2f191c0"
              ],
              "status": "done",
              "evidence": "git 9eb2f191"
            },
            {
              "v": "0cfce78d",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3568",
              "items": [
                "haelyra",
                "0cfce78d35"
              ],
              "status": "done",
              "evidence": "git 0cfce78d"
            },
            {
              "v": "41d4dd64",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3579",
              "items": [
                "haelyra",
                "41d4dd64c1"
              ],
              "status": "done",
              "evidence": "git 41d4dd64"
            },
            {
              "v": "c1c56358",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3740",
              "items": [
                "haelyra",
                "c1c56358a5"
              ],
              "status": "done",
              "evidence": "git c1c56358"
            },
            {
              "v": "86165667",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3749",
              "items": [
                "haelyra",
                "8616566726"
              ],
              "status": "done",
              "evidence": "git 86165667"
            },
            {
              "v": "7d052a79",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3750",
              "items": [
                "haelyra",
                "7d052a7958"
              ],
              "status": "done",
              "evidence": "git 7d052a79"
            },
            {
              "v": "ac736a7b",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3751",
              "items": [
                "haelyra",
                "ac736a7b8c"
              ],
              "status": "done",
              "evidence": "git ac736a7b"
            },
            {
              "v": "2ecb5fcc",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3752",
              "items": [
                "haelyra",
                "2ecb5fcc04"
              ],
              "status": "done",
              "evidence": "git 2ecb5fcc"
            },
            {
              "v": "a98821ff",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3779",
              "items": [
                "haelyra",
                "a98821fff9"
              ],
              "status": "done",
              "evidence": "git a98821ff"
            },
            {
              "v": "60053622",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3791",
              "items": [
                "haelyra",
                "60053622fe"
              ],
              "status": "done",
              "evidence": "git 60053622"
            },
            {
              "v": "754d7ad5",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3773",
              "items": [
                "haelyra",
                "754d7ad579"
              ],
              "status": "done",
              "evidence": "git 754d7ad5"
            },
            {
              "v": "ab9e6057",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3792",
              "items": [
                "haelyra",
                "ab9e6057df"
              ],
              "status": "done",
              "evidence": "git ab9e6057"
            },
            {
              "v": "ec06db41",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3795",
              "items": [
                "haelyra",
                "ec06db418d"
              ],
              "status": "done",
              "evidence": "git ec06db41"
            },
            {
              "v": "9a390532",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3796",
              "items": [
                "haelyra",
                "9a39053236"
              ],
              "status": "done",
              "evidence": "git 9a390532"
            },
            {
              "v": "2d9b503e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3798",
              "items": [
                "haelyra",
                "2d9b503e9a"
              ],
              "status": "done",
              "evidence": "git 2d9b503e"
            },
            {
              "v": "299cde9d",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3774",
              "items": [
                "haelyra",
                "299cde9d95"
              ],
              "status": "done",
              "evidence": "git 299cde9d"
            },
            {
              "v": "54f137e7",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3790",
              "items": [
                "haelyra",
                "54f137e7a4"
              ],
              "status": "done",
              "evidence": "git 54f137e7"
            },
            {
              "v": "d24240f7",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "maint: integrate reviewed contribution #3582",
              "items": [
                "haelyra",
                "d24240f719"
              ],
              "status": "done",
              "evidence": "git d24240f7"
            },
            {
              "v": "44e50892",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: integrate x402 replay guard with bounded retention and audited test dependencies",
              "items": [
                "haelyra",
                "44e508922a"
              ],
              "status": "done",
              "evidence": "git 44e50892"
            },
            {
              "v": "eb9a5ca0",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): keep $'...' open across an escaped apostrophe",
              "items": [
                "leoca",
                "eb9a5ca0c6"
              ],
              "status": "done",
              "evidence": "git eb9a5ca0"
            },
            {
              "v": "0d920594",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: close installed workflow and review publication gaps before integration",
              "items": [
                "haelyra",
                "0d92059410"
              ],
              "status": "done",
              "evidence": "git 0d920594"
            },
            {
              "v": "b0070af9",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): return new quote state from toggleQuote instead of mutating it",
              "items": [
                "leoca",
                "b0070af9d1"
              ],
              "status": "done",
              "evidence": "git b0070af9"
            },
            {
              "v": "1eadb741",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: scope Copilot detector projection to the canonical TDD workflow",
              "items": [
                "haelyra",
                "1eadb741a5"
              ],
              "status": "done",
              "evidence": "git 1eadb741"
            },
            {
              "v": "26507d9a",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test: isolate transcript fixtures in an exclusive temporary directory",
              "items": [
                "haelyra",
                "26507d9acd"
              ],
              "status": "done",
              "evidence": "git 26507d9a"
            },
            {
              "v": "38f4a9be",
              "date": "10-29",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore: sync fractional timestamp fix with main",
              "items": [
                "Eneko Ruiz",
                "38f4a9be90"
              ],
              "status": "done",
              "evidence": "git 38f4a9be"
            },
            {
              "v": "6d7d4920",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: close final integration security and portability gaps",
              "items": [
                "haelyra",
                "6d7d4920c8"
              ],
              "status": "done",
              "evidence": "git 6d7d4920"
            },
            {
              "v": "bd722f7f",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge latest fractional timestamp contributor head with combined digest",
              "items": [
                "haelyra",
                "bd722f7fe3"
              ],
              "status": "done",
              "evidence": "git bd722f7f"
            },
            {
              "v": "f7c4357e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test: separate legacy realpath fallback from native Windows alias behavior",
              "items": [
                "haelyra",
                "f7c4357e1c"
              ],
              "status": "done",
              "evidence": "git f7c4357e"
            },
            {
              "v": "de8c2900",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: keep Copilot detector explanation aligned with installed workflow",
              "items": [
                "haelyra",
                "de8c290057"
              ],
              "status": "done",
              "evidence": "git de8c2900"
            },
            {
              "v": "26c6d50b",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: resolve issue review host before the first fetch",
              "items": [
                "haelyra",
                "26c6d50b77"
              ],
              "status": "done",
              "evidence": "git 26c6d50b"
            },
            {
              "v": "716de494",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: bind issue evidence to a verified immutable target revision",
              "items": [
                "haelyra",
                "716de494a1"
              ],
              "status": "done",
              "evidence": "git 716de494"
            },
            {
              "v": "16798618",
              "date": "10-29",
              "group": "2026-10",
              "lane": "chore",
              "title": "ci: verify documented revision gate early on Windows",
              "items": [
                "haelyra",
                "167986184b"
              ],
              "status": "done",
              "evidence": "git 16798618"
            },
            {
              "v": "47d035ef",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: isolate issue evidence fixtures and preserve review authority boundaries",
              "items": [
                "haelyra",
                "47d035ef7c"
              ],
              "status": "done",
              "evidence": "git 47d035ef"
            },
            {
              "v": "07e1e4c6",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: keep issue text literal in review commands and atomically create fixtures",
              "items": [
                "haelyra",
                "07e1e4c606"
              ],
              "status": "done",
              "evidence": "git 07e1e4c6"
            },
            {
              "v": "61472d54",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test: disable background maintenance in isolated Git fixtures",
              "items": [
                "haelyra",
                "61472d54c0"
              ],
              "status": "done",
              "evidence": "git 61472d54"
            },
            {
              "v": "91b5f6a3",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3806 from affaan-m/maint/pr-stewardship-20261029",
              "items": [
                "haelyra",
                "91b5f6a371"
              ],
              "status": "done",
              "evidence": "git 91b5f6a3"
            },
            {
              "v": "fbc0b253",
              "date": "10-29",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(deps): bump rustls",
              "items": [
                "dependabot[bot]",
                "fbc0b2538d"
              ],
              "status": "done",
              "evidence": "git fbc0b253"
            },
            {
              "v": "5e062a3b",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): integrate reviewed shell quote extraction fix (#3801)",
              "items": [
                "haelyra",
                "5e062a3b3b"
              ],
              "status": "done",
              "evidence": "git 5e062a3b"
            },
            {
              "v": "ee21d8da",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): preserve context-window evidence over compact trigger (#3760)",
              "items": [
                "haelyra",
                "ee21d8da5c"
              ],
              "status": "done",
              "evidence": "git ee21d8da"
            },
            {
              "v": "0036875f",
              "date": "10-29",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(install): integrate namespaced Copilot rule instructions",
              "items": [
                "haelyra",
                "0036875f86"
              ],
              "status": "done",
              "evidence": "git 0036875f"
            },
            {
              "v": "f29e3327",
              "date": "10-29",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): port reviewed TypeScript patterns onto current catalog",
              "items": [
                "haelyra",
                "f29e33271b"
              ],
              "status": "done",
              "evidence": "git f29e3327"
            },
            {
              "v": "0509bd04",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): integrate registered-session activity filtering (#3755)",
              "items": [
                "haelyra",
                "0509bd04fb"
              ],
              "status": "done",
              "evidence": "git 0509bd04"
            },
            {
              "v": "969786b8",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: integrate verified tinystruct 1.7.37 guidance",
              "items": [
                "haelyra",
                "969786b850"
              ],
              "status": "done",
              "evidence": "git 969786b8"
            },
            {
              "v": "2cdc1572",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): integrate reviewed shell quoting and context precedence repairs",
              "items": [
                "haelyra",
                "2cdc157205"
              ],
              "status": "done",
              "evidence": "git 2cdc1572"
            },
            {
              "v": "8aae0e6b",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): integrate isolated tool activity readback repair",
              "items": [
                "haelyra",
                "8aae0e6b49"
              ],
              "status": "done",
              "evidence": "git 8aae0e6b"
            },
            {
              "v": "a43dd350",
              "date": "10-29",
              "group": "2026-10",
              "lane": "feat",
              "title": "feat(skills): integrate validated TypeScript patterns and distribution",
              "items": [
                "haelyra",
                "a43dd3501a"
              ],
              "status": "done",
              "evidence": "git a43dd350"
            },
            {
              "v": "3f844bd1",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): bind curated triggers to combined reviewed registry",
              "items": [
                "haelyra",
                "3f844bd175"
              ],
              "status": "done",
              "evidence": "git 3f844bd1"
            },
            {
              "v": "829b8e42",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(deps): integrate rustls 0.23.46 security update (#3807)",
              "items": [
                "haelyra",
                "829b8e42d6"
              ],
              "status": "done",
              "evidence": "git 829b8e42"
            },
            {
              "v": "e55b9c13",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): preserve persisted tool event ownership on replay",
              "items": [
                "haelyra",
                "e55b9c1346"
              ],
              "status": "done",
              "evidence": "git e55b9c13"
            },
            {
              "v": "6b8c757e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): validate TypeScript example arrays and request identifiers",
              "items": [
                "haelyra",
                "6b8c757e54"
              ],
              "status": "done",
              "evidence": "git 6b8c757e"
            },
            {
              "v": "ca24fb12",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: clarify compact fallback and tinystruct transport dependencies",
              "items": [
                "haelyra",
                "ca24fb12c0"
              ],
              "status": "done",
              "evidence": "git ca24fb12"
            },
            {
              "v": "fc549b63",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix: preserve Windows rule examples and conservative summary budgets",
              "items": [
                "haelyra",
                "fc549b6372"
              ],
              "status": "done",
              "evidence": "git fc549b63"
            },
            {
              "v": "fee046c6",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ecc2): retain persisted tool event ownership on replay",
              "items": [
                "haelyra",
                "fee046c6a0"
              ],
              "status": "done",
              "evidence": "git fee046c6"
            },
            {
              "v": "54464e0b",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(skills): harden reviewed TypeScript assertions and request IDs",
              "items": [
                "haelyra",
                "54464e0b78"
              ],
              "status": "done",
              "evidence": "git 54464e0b"
            },
            {
              "v": "3a9f2f95",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: clarify context fallback and tinystruct transport dependencies",
              "items": [
                "haelyra",
                "3a9f2f9580"
              ],
              "status": "done",
              "evidence": "git 3a9f2f95"
            },
            {
              "v": "f75d8322",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): rebind registry after verified review repairs",
              "items": [
                "haelyra",
                "f75d8322f6"
              ],
              "status": "done",
              "evidence": "git f75d8322"
            },
            {
              "v": "b37942d3",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(summary): preserve work before the earlier compaction boundary",
              "items": [
                "haelyra",
                "b37942d3c1"
              ],
              "status": "done",
              "evidence": "git b37942d3"
            },
            {
              "v": "5fd527cf",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ci): verify pinned Windows ripgrep without Chocolatey",
              "items": [
                "haelyra",
                "5fd527cf66"
              ],
              "status": "done",
              "evidence": "git 5fd527cf"
            },
            {
              "v": "6cd41995",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): attribute native activity to the registered ECC session",
              "items": [
                "haelyra",
                "6cd41995f4"
              ],
              "status": "done",
              "evidence": "git 6cd41995"
            },
            {
              "v": "96996a13",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: separate summary budgets from context capacity guidance",
              "items": [
                "haelyra",
                "96996a13c7"
              ],
              "status": "done",
              "evidence": "git 96996a13"
            },
            {
              "v": "27e257f5",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(ci): verify pinned Windows ripgrep before running test gates",
              "items": [
                "haelyra",
                "27e257f59f"
              ],
              "status": "done",
              "evidence": "git 27e257f5"
            },
            {
              "v": "e4b8b8bf",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(tinystruct): qualify symlinked static-root protection",
              "items": [
                "haelyra",
                "e4b8b8bf01"
              ],
              "status": "done",
              "evidence": "git e4b8b8bf"
            },
            {
              "v": "d1eba24d",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): attribute native activity to the registered ECC session",
              "items": [
                "haelyra",
                "d1eba24d5f"
              ],
              "status": "done",
              "evidence": "git d1eba24d"
            },
            {
              "v": "0fae27de",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs: qualify tinystruct static-root protections against pinned source",
              "items": [
                "haelyra",
                "0fae27de35"
              ],
              "status": "done",
              "evidence": "git 0fae27de"
            },
            {
              "v": "794d8cd8",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): bind final reviewed guidance registry",
              "items": [
                "haelyra",
                "794d8cd8d1"
              ],
              "status": "done",
              "evidence": "git 794d8cd8"
            },
            {
              "v": "3dca6e2e",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(hooks): preserve provider conversation identity under inherited environments",
              "items": [
                "haelyra",
                "3dca6e2e88"
              ],
              "status": "done",
              "evidence": "git 3dca6e2e"
            },
            {
              "v": "eb267762",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(x402): reject a provably invalid ECDSA scalar",
              "items": [
                "haelyra",
                "eb267762a1"
              ],
              "status": "done",
              "evidence": "git eb267762"
            },
            {
              "v": "05bc52ae",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test(insaits): report captured monitor failure diagnostics",
              "items": [
                "haelyra",
                "05bc52ae83"
              ],
              "status": "done",
              "evidence": "git 05bc52ae"
            },
            {
              "v": "e645a75c",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test: make invalid payment signatures deterministic",
              "items": [
                "haelyra",
                "e645a75c2a"
              ],
              "status": "done",
              "evidence": "git e645a75c"
            },
            {
              "v": "1739020d",
              "date": "10-29",
              "group": "2026-10",
              "lane": "test",
              "title": "test: preserve exact monitor assertions with actionable diagnostics",
              "items": [
                "haelyra",
                "1739020dba"
              ],
              "status": "done",
              "evidence": "git 1739020d"
            },
            {
              "v": "e4f2f88a",
              "date": "10-29",
              "group": "2026-10",
              "lane": "docs",
              "title": "docs(tinystruct): validate example login inputs before authentication",
              "items": [
                "haelyra",
                "e4f2f88a32"
              ],
              "status": "done",
              "evidence": "git e4f2f88a"
            },
            {
              "v": "35769d00",
              "date": "10-29",
              "group": "2026-10",
              "lane": "fix",
              "title": "fix(context): validate budgets and remind before native compaction",
              "items": [
                "haelyra",
                "35769d00d9"
              ],
              "status": "done",
              "evidence": "git 35769d00"
            },
            {
              "v": "fafdfb5d",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge independently reviewed context budget and reminder repairs",
              "items": [
                "haelyra",
                "fafdfb5de6"
              ],
              "status": "done",
              "evidence": "git fafdfb5d"
            },
            {
              "v": "66d7b058",
              "date": "10-29",
              "group": "2026-10",
              "lane": "chore",
              "title": "chore(context): bind curated triggers to reviewed guidance repairs",
              "items": [
                "haelyra",
                "66d7b0587b"
              ],
              "status": "done",
              "evidence": "git 66d7b058"
            },
            {
              "v": "b38be6a7",
              "date": "10-29",
              "group": "2026-10",
              "lane": "other",
              "title": "Merge pull request #3809 from affaan-m/maint/pr-continuation-20261029",
              "items": [
                "haelyra",
                "b38be6a7f6"
              ],
              "status": "done",
              "evidence": "git b38be6a7"
            }
          ]
        }
      ]
    }
  ]
};
