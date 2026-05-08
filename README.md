# Coin.research

> **10-Bagger 深度投研 · 5Y × 10Y 双时间轴**
>
> 一套可复用的机构级投研框架。每份报告回答同一个问题：
> **这家公司 5 年和 10 年后分别值多少钱？有多大概率翻 10 倍？**

🌐 **在线访问**：[coin.puliot.com](https://coin.puliot.com)
🧠 **方法论 skill（开源）**：[github.com/zsjunai/claude-skill-10x-analysis](https://github.com/zsjunai/claude-skill-10x-analysis)

![Vue](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.4-646cff?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)
![ChartJS](https://img.shields.io/badge/Chart.js-4.5-ff6384?logo=chart.js&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Aliyun%20ECS-FF6A00?logo=alibabacloud&logoColor=white)
[![Skill](https://img.shields.io/badge/Claude%20Code-Skill-blue)](https://github.com/zsjunai/claude-skill-10x-analysis)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 🧠 方法论开源（Claude Code Skill）

本站所有报告由一套**开源的 Claude Code skill** 驱动：

📦 **[claude-skill-10x-analysis](https://github.com/zsjunai/claude-skill-10x-analysis)** — 25 模块 · 9 步流程 · 17+14 硬规则 · v3 校准案例库

```bash
# 任何 Claude Code 用户可一键使用
cd ~/.claude/skills
git clone https://github.com/zsjunai/claude-skill-10x-analysis.git investment--10x-analysis
```

之后在 Claude Code 下直接问"分析下英伟达"、"腾讯 10 年 10x 空间吗"，Claude 会自动按本站同款方法论输出完整 25 模块分析。

**开源仓库包含**：
- `SKILL.md` — 主方法论（v3.1）
- `calibration-cases.md` — 7 个真实校准案例（避免重复犯错）
- `README.md` — 安装 + 演进史 + 贡献指南
- MIT License

---

## 特色

- **25 个分析模块**：公司全景 · 团队股权 · 关键人风险 · **资本配置评分 A-D** · 财务三表 · 护城河 · 空头剧本 · 催化剂 · 风险矩阵 · 竞争格局 · 赛道 TAM · 雷达图 · 双时间轴情景 · 加权期望 · 下行风险量化 · 历史估值分位 · 敏感度 Tornado · **共识 vs 指引 Gap** · **对照组策略（vs 被动 ETF）** · SOTP · Kelly 仓位 · 组合相关性 · 对冲建议 · **Track Record 可验证假设**
- **9 步方法论**：**Web Search Pre-Flight ★** → 事实锚定 → 十倍基因体检 → 合同积压 → 竞品对照 → 双时间轴情景 → 加权期望 → 观察指标 → **Track Record 锁定**
- **17 条硬规则 + 14 条禁止**：含 v3 新增"Web search 优先"、"加权 multiplier 一致性"、"反弹陷阱识别"、"mNAV 折价拆解结构性 vs 真实低估"
- **5Y × 10Y 双时间轴**：5 年拿回报节奏，10 年看终局；真 10-bagger 要求 5Y 3-4x + 10Y 10x+
- **Kelly 仓位推导**：期望回报 / 情景方差 × ½ 得到建议仓位区间，杜绝拍脑袋
- **跨市场支持**：美股 🇺🇸 · A 股 🇨🇳 · 港股 🇭🇰 · 未上市 ⚫
- **TypeScript 60+ 字段强类型**：`CompanyDetail` 接口约束所有模块，新增公司漏项直接编译失败
- **Light blueprint 主题**：暖白 + 靛紫 / 亮紫渐变，摒弃赛博朋克
- **Chart.js 9 种可视化**：营收轨迹 · 利润率演进 · 市场份额环 · 双时间轴情景柱 · TAM 对数柱 · 8 维雷达 · 历史估值折线 · Tornado 水平双向柱 · 分析师目标价条
- **首页档案库矩阵图**：19 家公司 5Y × 10Y 期望散点图 + vs 被动超额回报排序
- **v3 校准机制**：用户质疑驱动迭代修正 → 7 个真实错误案例沉淀为可执行教训（[详见开源 skill](https://github.com/zsjunai/claude-skill-10x-analysis/blob/main/calibration-cases.md)）

## 已覆盖公司（19 家 · 按 vs 被动超额回报排序）

| Ticker | 公司 | 市场 | 评级 | 5Y | 10Y | vs 被动 |
|---|---|---|---|---|---|---|
| [MSTR](./src/data/strategy.ts) | Strategy (MicroStrategy) | 🇺🇸 NASDAQ | 🟢 Bullish · mNAV 折价区间 | 6.0x | 20.4x | **+27.5pp** |
| [BMNR](./src/data/bmnr.ts) | Bitmine Immersion | 🇺🇸 NYSE | 🟢 Bullish · ETH 飞轮 | 4.48x | 12.0x | **+20.5pp** |
| [SBET](./src/data/sbet.ts) | Sharplink (ETH 财库) | 🇺🇸 NASDAQ | 🟢 Bullish · 深度折价 | 2.45x | 7.65x | +14.8pp |
| [COIN](./src/data/coinbase.ts) | Coinbase Global | 🇺🇸 NASDAQ | 🟢 Bullish · 逐步加仓 | 1.83x | 4.76x | +9.1pp |
| [NBIS](./src/data/nebius.ts) | Nebius Group | 🇺🇸 NASDAQ | 🟢 Bullish · 回调加仓 | 2.80x | 4.76x | +9.1pp |
| [SPX](./src/data/spacex.ts) | SpaceX | ⚫ Pre-IPO | 🟢 Bullish · IPO 后择机 | 2.13x | 4.63x | +8.8pp |
| [CRCL](./src/data/circle.ts) | Circle Internet Group | 🇺🇸 NYSE | 🟡 Neutral · 回调加仓 | 1.65x | 4.1x | +7.3pp |
| [09992](./src/data/popmart.ts) | 泡泡玛特 Pop Mart | 🇭🇰 HKEX | 🟡 Neutral · 回调加仓 | 1.50x | 3.56x | +5.7pp |
| [601012](./src/data/longi.ts) | 隆基绿能 LONGi | 🇨🇳 SH | 🟡 Neutral · 困境反转 | 1.64x | 3.31x | +4.7pp |
| [ORCL](./src/data/oracle.ts) | Oracle Corporation | 🇺🇸 NYSE | 🟢 Bullish · 分批建仓 | 2.13x | 3.24x | +4.7pp |
| [HOOD](./src/data/robinhood.ts) | Robinhood Markets | 🇺🇸 NASDAQ | 🟡 Neutral · 回调加仓 | 1.37x | 3.10x | +4.2pp |
| [06160](./src/data/beigene.ts) | 百济神州 / BeOne | 🇭🇰 HKEX | 🟡 Neutral · 分批建仓 | 1.56x | 3.09x | +4.2pp |
| [603799](./src/data/huayou.ts) | 华友钴业 Huayou Cobalt | 🇨🇳 SH | 🟡 Neutral · 周期反转 | 1.54x | 2.98x | +3.7pp |
| [600309](./src/data/wanhua.ts) | 万华化学 Wanhua | 🇨🇳 SH | 🟡 Neutral · 分批建仓 | 1.32x | 2.38x | +1.6pp |
| [002648](./src/data/weixing.ts) | 卫星化学 Satellite | 🇨🇳 SZ | 🟡 Neutral · 关注 | 1.30x | 2.15x | +0.5pp |
| [300274](./src/data/sungrow.ts) | 阳光电源 Sungrow | 🇨🇳 SZ | 🟡 Neutral · 等回调 | 1.41x | 1.97x | -0.8pp |
| [PLTR](./src/data/pltr.ts) | Palantir Technologies | 🇺🇸 NASDAQ | 🔴 Bearish · 估值压制 | 0.99x | 1.75x | -2.0pp |
| [QCOM](./src/data/qualcomm.ts) | Qualcomm | 🇺🇸 NASDAQ | 🟡 Neutral · Apple cliff | 1.02x | 1.51x | -3.6pp |
| [INTC](./src/data/intel.ts) | Intel Corporation | 🇺🇸 NASDAQ | 🔴 Bearish · 反弹完成 | 0.68x | 1.05x | -7.3pp |

> 📊 **关键洞察**：前 3 名全部是加密财库股（MSTR / BMNR / SBET），但全部建立在 mNAV < 1.0x 折价区间 + BTC/ETH 长期 CAGR 25-37% 主流共识假设上。**90% CI 极宽 -10% 到 +50% CAGR**——超额 +27pp 可能减半甚至反转。

> ⚠️ **反弹陷阱警示**：Intel 1Y +449%、Nebius 1Y +630%、Sungrow 1Y +64% 都已计入"反弹后估值偏高"修正——参考 [calibration-cases.md](https://github.com/zsjunai/claude-skill-10x-analysis/blob/main/calibration-cases.md) 案例 6/7。

路线图（即将覆盖）：CoreWeave · 微软 · 特斯拉 · 台积电 · 宁德时代 · 中芯国际 · 紫金矿业 · 贵州茅台 · 比亚迪 · 腾讯控股 · 美团 · Anthropic（pre-IPO）。

## 快速开始

```bash
pnpm install            # 安装依赖
pnpm dev                # 本地开发（端口 10000）
pnpm build              # 生产构建（TS 严格检查 + vite build）
pnpm preview            # 预览构建产物
```

访问 **http://localhost:10000**。

## 添加新公司（3 步）

1. 复制 `src/data/nebius.ts` → `src/data/<id>.ts`，按 `CompanyDetail` 接口填数据
2. 在 `src/data/companies.ts` 的 `companyRegistry` 与 `companies` 各加一行（含 `market` + `currency` 字段）
3. `git push` → GitHub Actions 自动部署上线（无需人工介入）

TypeScript 严格模式会校验所有必填字段，任何遗漏都在编译阶段暴露。

## 分析方法论 · 9 步概览

| # | 步骤 | 说明 |
|---|---|---|
| **00** | **Web Search Pre-Flight ★** | **任何分析前必先 search 最新事实**（股价 / mNAV / 持仓 / 政策）—— v3 强制规则，依赖记忆是 7 次校准错误的同源根因 |
| 01 | 事实锚定 | 严格基于某日期已披露公开事实（财报 / 合同披露 / 主流研报），不使用预测作为输入 |
| 02 | 十倍基因体检 | 五项核心基因（软件边际 / 网络效应 / 数据闭环 / 定价权 / 再投资空间）差距扫描 |
| 03 | 合同积压量化 | 把长期合同 / 战略入股 / 产能路径图转化为"未来 3-5 年收入地板" |
| 04 | 竞品横向对照 | 8 维雷达图 + 头号对手深度对照 + Win-Loss 场景 |
| 05 | 双时间轴情景 | 构建 3-5 档情景，同时推到 5Y 和 10Y 两个时点，显式主观概率 |
| 06 | 加权期望 | `E[Mcap] = Σ Pᵢ × Midᵢ` · 5Y 与 10Y 同步输出 · 加情景标准差与下行概率 |
| 07 | 观察指标 | 5 项季度级跟踪指标判定公司走在哪条轨迹上 |
| 08 | **Track Record 锁定** | 锁定 4-6 条带目标日期的可验证命题，3/6/12 月后回看建立命中率 |

详见 [/methodology](./src/views/MethodologyView.vue) 或本地 `pnpm dev` 访问，完整方法论见 [开源 skill](https://github.com/zsjunai/claude-skill-10x-analysis/blob/main/SKILL.md)。

## 硬规则（17 条必须 + 14 条禁止）

| ✓ 必须做 | ✗ 不能做 |
|---|---|
| 用事实而非故事 | 使用 PR 话术（"颠覆性"/"革命性"） |
| 包含反面证据（等量看空看多） | 给单一目标价（必须给情景分布） |
| 标注数据时点（anchor date） | 只讲一面 |
| 情景概率显式化（加总 100%） | 回避概率（不给概率无法事后复盘） |
| 区分事实与推断 | 堆砌数据（数据只在推出决策时才有意义） |
| 双时间轴并列（5Y 和 10Y 一起给） | 只看 10Y 终局（忽视 5Y 节奏） |
| 量化下行风险（σ / P(亏 30%+) / 最大回撤） | 只报期望不报方差 |
| 敏感度排序（最敏感 3 个变量） | 忽略组合视角（缺相关性与对冲建议） |
| 仓位用公式推（Kelly / Vol-targeting） | 只看团队履历不看资本配置 |
| 评估管理层花钱能力（ROIIC / 回购 / 股息 / M&A） | 默认 "vs 现金"（应 vs 被动 ETF） |
| 对比共识与公司指引 gap | 不留可验证假设 |
| 锁定可验证假设（Track Record） | **★ 用记忆数据做"自信判断"** |
| 对照被动组合定仓位（超额 CAGR > 5% 才值单选） | **★ 用悲观/乐观双重假设算 vs ETF** |
| **★ Web search 优先于记忆**（任何"自信判断"前必查最新事实） | **★ 涨幅 +50%+ 后还用"基线乐观"假设**（反弹陷阱） |
| **★ 核心宏观假设用主流共识**（BTC 25-40% / ETH 30-37% / 不拍脑袋） | |
| **★ 基准计算一致性**（vs ETF 用加权 multiplier · 两边同情景） | |
| **★ 拆解溢价/折价的"结构性 vs 真实低估"**（mNAV 0.74x ≠ 必然回归 1.0x） | |

## 技术栈

```
Vue 3.5 (Composition API) + vue-router 4
Vite 6 + TypeScript 5.7 (strict)
Chart.js 4 (按需 register, 含 Radar / Logarithmic / Doughnut)
@fontsource-variable (自托管字体，免 Google Fonts 被墙)
pnpm (包管理)
GitHub Actions → rsync over SSH → 阿里云 ECS (Nginx + HTTPS)
```

## 项目结构

```
src/
├── main.ts                       # 应用入口
├── App.vue                       # 根组件
├── router.ts                     # vue-router
├── types/company.ts              # CompanyDetail 接口（60+ 字段）
├── data/
│   ├── companies.ts              # registry + summary 列表（19 家）
│   ├── strategy.ts               # MSTR (BTC 财库 #1)
│   ├── bmnr.ts                   # Bitmine (ETH 财库 #1)
│   ├── sbet.ts                   # Sharplink (ETH 财库 #2)
│   ├── coinbase.ts               # Coinbase (加密交易所)
│   ├── nebius.ts                 # Nebius (AI Neocloud)
│   ├── spacex.ts                 # SpaceX (Pre-IPO)
│   ├── circle.ts                 # Circle (USDC)
│   ├── popmart.ts                # 泡泡玛特
│   ├── longi.ts                  # 隆基绿能
│   ├── oracle.ts                 # Oracle (AI 算力新基建)
│   ├── robinhood.ts              # Robinhood
│   ├── beigene.ts                # 百济神州 / BeOne
│   ├── huayou.ts                 # 华友钴业
│   ├── wanhua.ts                 # 万华化学
│   ├── weixing.ts                # 卫星化学
│   ├── sungrow.ts                # 阳光电源
│   ├── pltr.ts                   # Palantir
│   ├── qualcomm.ts               # Qualcomm
│   └── intel.ts                  # Intel
├── components/
│   ├── NavBar.vue
│   ├── LogoMark.vue
│   ├── PriceCard.vue
│   ├── ScenarioRow.vue
│   ├── ChartView.vue             # Chart.js 响应式封装
│   └── TocSidebar.vue            # 浮动 TOC + 滚动高亮
├── views/
│   ├── HomeView.vue              # 公司列表 + 方法论 + 路线图
│   ├── CompanyView.vue           # 详情页（29+ 模块）
│   └── MethodologyView.vue       # 方法论详解
└── styles/main.css
```

## License

MIT

## 声明

本站所有分析为基于公开信息的独立研究，**不构成投资建议**。投资有风险，入市需谨慎。
