# Coin.research

> **AI 巨头投资研究 · 从事实到 10 年终局**
>
> 一套可复用的深度投研框架。每一份报告回答一个问题：**这家公司 10 年后会值多少钱？有多大概率进入 Mag 7？**

🌐 **在线访问**：[coin.puliot.com](https://coin.puliot.com)

![Vue](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.4-646cff?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)
![ChartJS](https://img.shields.io/badge/Chart.js-4.5-ff6384?logo=chart.js&logoColor=white)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-deployed-000?logo=vercel&logoColor=white)](https://coin.puliot.com)

---

## 特色

- **15 个分析模块**：从公司全景、创始人团队、股权结构，到盈利能力、竞争格局、10 年情景推演、加权期望值、结构化投资建议
- **7 步分析方法论**：事实锚定 → Mag 7 基因体检 → 合同积压 → 竞品对照 → 情景推演 → 加权期望 → 观察指标
- **TypeScript 强类型**：`CompanyDetail` 接口约束 40+ 字段，新增公司漏项直接编译失败
- **科技感 Light 主题**：暖白 blueprint 风格 + 靛紫渐变强调
- **Chart.js 可视化**：营收轨迹、利润率演进、市场份额、情景概率、分析师目标价

## 已覆盖公司

| 代号 | 公司 | 评级 | 10Y P(Mag 7) |
|---|---|---|---|
| [NBIS](./src/data/nebius.ts) | Nebius Group N.V. | HOLD · 分批建仓 | ~12% |

## 快速开始

```bash
# 安装依赖
pnpm install

# 本地开发（端口 10000）
pnpm dev

# 生产构建
pnpm build

# 预览构建产物
pnpm preview
```

访问 **http://localhost:10000**。

## 添加新公司（3 步）

1. 复制 `src/data/nebius.ts` → `src/data/<id>.ts`，按 `CompanyDetail` 接口填数据
2. 在 `src/data/companies.ts` 的 `companyRegistry` 与 `companies` 里各加一行
3. 完成 —— 路由 `/company/<id>` 自动可用

TypeScript 会校验所有必填字段，任何遗漏都会在编译阶段暴露。

## 分析方法论 · 7 步概览

| # | 步骤 | 说明 |
|---|---|---|
| 01 | 事实锚定 | 严格基于某日期已披露的公开事实，不使用预测作为输入 |
| 02 | Mag 7 基因体检 | 五项核心基因（软件边际 / 网络效应 / 数据闭环 / 定价权 / 跨代际转型）差距扫描 |
| 03 | 合同积压量化 | 把长期合同 / 战略入股 / 产能路径图转化为"收入地板" |
| 04 | 竞品横向对照 | 选择同赛道最强对手做指标对齐 |
| 05 | 三档情景推演 | 10 年尺度上构建乐观/中性/悲观情景 |
| 06 | 加权期望值 | `E[Mcap₁₀ᵧ] = Σ Pᵢ × Midᵢ` 推导回报倍数与 CAGR |
| 07 | 观察指标清单 | 5 项季度级跟踪指标判定公司走在哪条轨迹 |

详见 [/methodology](./src/views/MethodologyView.vue)。

## 技术栈

```
├── Vue 3 (Composition API)
├── vue-router 4
├── Vite 6
├── TypeScript 5.7 严格模式
├── Chart.js 4 (按需 register)
└── pnpm (包管理)
```

## 项目结构

```
src/
├── main.ts                     # 应用入口
├── App.vue                     # 根组件
├── router.ts                   # vue-router
├── types/company.ts            # CompanyDetail 接口（40+ 字段）
├── data/
│   ├── companies.ts            # 注册表
│   └── nebius.ts               # 单公司数据
├── components/
│   ├── NavBar.vue
│   ├── LogoMark.vue
│   ├── PriceCard.vue
│   ├── ScenarioRow.vue
│   └── ChartView.vue           # Chart.js 响应式封装
├── views/
│   ├── HomeView.vue            # 公司列表 + 方法论概览
│   ├── CompanyView.vue         # 详情页（15 个模块）
│   └── MethodologyView.vue     # 方法论详解
└── styles/main.css
```

## 硬规则

| ✓ 必须做 | ✗ 不能做 |
|---|---|
| 用事实而非故事 | 只讲一面 |
| 包含反面证据 | 回避概率 |
| 标注数据时点 | 堆砌数据 |
| 情景概率显式化 | 使用 PR 话术 |
| 区分事实与推断 | 给单一目标价 |

## License

MIT

## 声明

本站所有分析为基于公开信息的独立研究，**不构成投资建议**。投资有风险，入市需谨慎。
