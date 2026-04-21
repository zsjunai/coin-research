# Coin.research

> **10-Bagger 深度投研 · 5Y × 10Y 双时间轴**
>
> 一套可复用的机构级投研框架。每份报告回答同一个问题：
> **这家公司 5 年和 10 年后分别值多少钱？有多大概率翻 10 倍？**

🌐 **在线访问**：[coin.puliot.com](https://coin.puliot.com)

![Vue](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.4-646cff?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)
![ChartJS](https://img.shields.io/badge/Chart.js-4.5-ff6384?logo=chart.js&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Aliyun%20ECS-FF6A00?logo=alibabacloud&logoColor=white)

---

## 特色

- **29+ 分析模块**：公司全景 · 团队股权 · 关键人风险 · **资本配置评分 A-D** · 财务三表 · 护城河 · 空头剧本 · 催化剂 · 风险矩阵 · 竞争格局 · 赛道 TAM · 雷达图 · 双时间轴情景 · 加权期望 · 下行风险量化 · 历史估值分位 · 敏感度 Tornado · **共识 vs 指引 Gap** · **对照组策略（vs 被动 ETF）** · SOTP · Kelly 仓位 · 组合相关性 · 对冲建议 · **Track Record 可验证假设**
- **8 步方法论**：事实锚定 → 十倍基因体检 → 合同积压 → 竞品对照 → 双时间轴情景 → 加权期望 → 观察指标 → **Track Record 锁定 ✧**
- **5Y × 10Y 双时间轴**：5 年拿回报节奏，10 年看终局；真 10-bagger 要求 5Y 3-4x + 10Y 10x+
- **Kelly 仓位推导**：期望回报 / 情景方差 × ½ 得到建议仓位区间，杜绝拍脑袋
- **跨市场支持**：美股 🇺🇸 · A 股 🇨🇳 · 港股 🇭🇰 · 未上市 ⚫
- **TypeScript 60+ 字段强类型**：`CompanyDetail` 接口约束所有模块，新增公司漏项直接编译失败
- **Light blueprint 主题**：暖白 + 靛紫 / 亮紫渐变，摒弃赛博朋克
- **Chart.js 9 种可视化**：营收轨迹 · 利润率演进 · 市场份额环 · 双时间轴情景柱 · TAM 对数柱 · 8 维雷达 · 历史估值折线 · Tornado 水平双向柱 · 分析师目标价条

## 已覆盖公司

| Ticker | 公司 | 市场 | 评级 | 5Y 期望 | 10Y 期望 | P(10x · 10Y) |
|---|---|---|---|---|---|---|
| [NBIS](./src/data/nebius.ts) | Nebius Group N.V. | 🇺🇸 NASDAQ | HOLD · 回调加仓 | 3.9x | 9.1x | ~12% |
| [CRCL](./src/data/circle.ts) | Circle Internet Group | 🇺🇸 NYSE | HOLD · 回调加仓 | 1.65x | 4.1x | ~15% |
| [COIN](./src/data/coinbase.ts) | Coinbase Global | 🇺🇸 NASDAQ | HOLD · 逐步加仓 | 1.83x | 4.76x | ~18% |
| [HOOD](./src/data/robinhood.ts) | Robinhood Markets | 🇺🇸 NASDAQ | HOLD · 回调加仓 | 1.37x | 3.10x | ~15% |
| [09992](./src/data/popmart.ts) | 泡泡玛特 Pop Mart | 🇭🇰 HKEX | HOLD · 回调加仓 | 1.50x | 3.56x | ~15% |
| [06160](./src/data/beigene.ts) | 百济神州 / BeOne Medicines | 🇭🇰 HKEX | HOLD · 分批建仓 | 1.56x | 3.09x | ~12% |

路线图（即将覆盖）：CoreWeave · Palantir · 特斯拉 · 台积电 · SpaceX · 宁德时代 · 中芯国际 · 比亚迪 · 腾讯控股 · 小鹏汽车 · 贵州茅台 · 甲骨文。

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

## 分析方法论 · 8 步概览

| # | 步骤 | 说明 |
|---|---|---|
| 01 | 事实锚定 | 严格基于某日期已披露公开事实（财报 / 合同披露 / 主流研报），不使用预测作为输入 |
| 02 | 十倍基因体检 | 五项核心基因（软件边际 / 网络效应 / 数据闭环 / 定价权 / 再投资空间）差距扫描 |
| 03 | 合同积压量化 | 把长期合同 / 战略入股 / 产能路径图转化为"未来 3-5 年收入地板" |
| 04 | 竞品横向对照 | 8 维雷达图 + 头号对手深度对照 + Win-Loss 场景 |
| 05 | 双时间轴情景 | 构建 3-4 档情景，同时推到 5Y 和 10Y 两个时点，显式主观概率 |
| 06 | 加权期望 | `E[Mcap] = Σ Pᵢ × Midᵢ` · 5Y 与 10Y 同步输出 · 加情景标准差与下行概率 |
| 07 | 观察指标 | 5 项季度级跟踪指标判定公司走在哪条轨迹上 |
| 08 | **Track Record 锁定** ✧ | 锁定 4-6 条带目标日期的可验证命题，3/6/12 月后回看建立命中率 |

详见 [/methodology](./src/views/MethodologyView.vue) 或本地 `pnpm dev` 访问。

## 硬规则（13 条必须 + 11 条禁止）

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
| 锁定可验证假设（Track Record） | |
| 对照被动组合定仓位（超额 CAGR > 5% 才值单选） | |

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
│   ├── companies.ts              # registry + summary 列表
│   ├── nebius.ts                 # Nebius (AI Neocloud)
│   ├── circle.ts                 # Circle (USDC)
│   ├── coinbase.ts               # Coinbase
│   ├── robinhood.ts              # Robinhood
│   ├── popmart.ts                # 泡泡玛特
│   └── beigene.ts                # 百济神州 / BeOne
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
