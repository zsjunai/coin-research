<script setup lang="ts">
const bigSteps = [
    {
        n: '01',
        title: '事实锚定',
        en: 'Fact Anchor',
        body: '所有分析严格基于<strong class="cyan">某一具体日期已披露的公开事实</strong>。包括最新财报、官方指引、合同披露、战略入股公告。不使用预测或传闻作为输入假设。',
        example: '输入：财报 + 官方 press release + 合同 SEC 文件 + 券商研报\n输出：一份 "事实清单" 作为所有后续推演的基线',
    },
    {
        n: '02',
        title: '十倍基因体检',
        en: '10x DNA Check',
        body: '对照十倍股共同基因做差距扫描，识别结构性缺口：',
        dims: [
            { cls: 'cyan', label: '规模化杠杆', sub: '软件边际成本 ≈ 0' },
            { cls: 'purple', label: '网络/平台效应', sub: '用户/合作方越多越值钱' },
            { cls: 'green', label: '数据/资产壁垒', sub: '独占数据、IP、规模' },
            { cls: 'yellow', label: '定价权', sub: '毛利 60%+ 可持续' },
            { cls: 'red', label: '再投资空间', sub: '高 ROIC × TAM 足够大' },
        ],
    },
    {
        n: '03',
        title: '合同积压量化',
        en: 'Revenue Floor',
        body: '把已签署的长期合同、战略入股、产能路径图转化为<strong class="cyan">未来 3-5 年收入地板</strong>。这是把"故事"压缩为"数字"的关键一步。',
        example: '例：Nebius = MSFT $19.4B + Meta $27B = $46B / 5Y → 年均地板 $9B',
    },
    {
        n: '04',
        title: '竞品横向对照',
        en: 'Peer Benchmark',
        body: '选择同赛道最强对手做指标对齐，识别结构性优势与劣势。对照维度包括营收规模、毛利、现金流、估值倍数、客户结构、资本结构。',
        example: '例：Nebius vs CoreWeave → 前者赢资产负债表，后者赢规模与盈利',
    },
    {
        n: '05',
        title: '双时间轴情景推演',
        en: '5Y + 10Y Scenarios',
        body: '每档情景同时推到 <strong class="cyan">5 年</strong> 和 <strong class="purple">10 年</strong> 两个时点。5Y 判断回报节奏（什么时候能兑现），10Y 判断终局（是不是真的 10-bagger）：',
        scenarios: [
            { cls: 'green', name: '乐观 Bull', body: '商业模式跃迁 → 10x+ 回报' },
            { cls: 'cyan', name: '中性 Base', body: '稳态增长 → 3-5x 回报' },
            { cls: 'red', name: '悲观 Bear', body: '被压制 / 价格战 → 1-2x 或下跌' },
        ],
    },
    {
        n: '06',
        title: '双时间轴加权期望',
        en: 'Weighted Expectation',
        body: '核心公式（分别算 5Y 与 10Y）：',
        formula: 'E[Mcap] = Σ Pᵢ × Midᵢ  →  两个时间点各一个数',
        followUp: '再推导出<strong class="cyan">回报倍数</strong>（Multiplier）与<strong class="purple">CAGR</strong>。5Y 决定何时加仓，10Y 决定持有几年。',
        example: 'Multiplier_5Y = E[Mcap_5Y] / Current\nCAGR_5Y = Multiplier_5Y^(1/5) - 1\n\nMultiplier_10Y = E[Mcap_10Y] / Current\nCAGR_10Y = Multiplier_10Y^(1/10) - 1',
    },
    {
        n: '07',
        title: '观察指标清单',
        en: 'Tracking Signals',
        body: '输出 5 项<strong class="cyan">季度级跟踪指标</strong>，每个指标给出三种信号值（10x 轨迹 / 基线 / 落后），用于动态判定公司走在哪条轨迹上，并据此调整仓位。',
        example: '典型指标：CapEx/Rev · 客户集中度 · Gross Margin · 开发者规模 · 商业模式层级',
    },
    {
        n: '08',
        title: 'Track Record 锁定',
        en: 'Forward Assumptions · v2 ✧',
        body: '写完报告不是结束，而是 <strong class="cyan">校准循环的开始</strong>。每份报告锁定 <strong class="purple">4-6 条带目标日期的可验证命题</strong>，3 / 6 / 12 月后回看，建立分析师自我命中率。连续 3 份 <strong class="red">命中率 &lt; 40%</strong> → 系统性校准问题，暂停新报告。',
        example: '例：Nebius 2026 Q2 EBITDA margin ≥30% · 设定日期 2026-04-17 · 目标日期 2026-08-31 · 当前 pending',
    },
]

const doItems = [
    { title: '用事实而非故事', body: '每个论点必须能被某个具体数据验证或证伪' },
    { title: '包含反面证据', body: '看多论点必须伴随等量的看空论点' },
    { title: '标注数据时点', body: '老数据会腐烂，所有结论都要标注 anchor date' },
    { title: '情景概率显式化', body: '不说"可能"，只说"概率约 X%"' },
    { title: '区分事实与推断', body: '哪些是公司披露，哪些是本分析的主观判断' },
    { title: '双时间轴并列', body: '5Y 与 10Y 两个数字一起给，回报节奏 + 终局分开看' },
    { title: '量化下行风险', body: '情景标准差 + P(亏 30%+) + 最大回撤估计，期望值不够' },
    { title: '敏感度排序', body: '找出最敏感 3 个变量，每季度跟踪它们而不是股价' },
    { title: '仓位用公式推', body: 'Kelly / Vol-targeting 任一，输入参数显式列出' },
    { title: '评估资本配置能力', body: '不止看团队履历，还要看 ROIIC / 回购 / 股息 / M&A 命中率' },
    { title: '对比共识与指引', body: '管理层 +20% vs 市场 +40% 的 gap = 业绩爆雷先行指标' },
    { title: '锁定可验证假设', body: '每份报告输出 4-6 条带目标日期的命题，建立 Track Record' },
    { title: '对照被动组合定仓位', body: '超额 CAGR <5% 就直接买 ETF，不值得单选' },
]

const dontItems = [
    { title: '只讲一面', body: '只看多或只看空都是 research theater' },
    { title: '回避概率', body: '不给出概率的判断无法事后复盘' },
    { title: '堆砌数据', body: '数据只在推出决策时才有意义' },
    { title: '使用 PR 话术', body: '"颠覆性"、"革命性"、"无可替代" 全部禁用' },
    { title: '给单一目标价', body: '必须给情景分布，不是点估计' },
    { title: '只看 10Y 终局', body: '10Y 翻 10 倍，但 5Y 只 1.5x 也是差投资' },
    { title: '只报期望不报方差', body: '平均赢多少 ≠ 最坏输多少' },
    { title: '忽略组合视角', body: '单股分析不够，要给相关性 + 对冲建议' },
    { title: '只看履历不看资本配置', body: '好管理层 ≠ 好资本配置，两件事' },
    { title: '默认"vs 现金"', body: '真正的机会成本是"vs 被动 ETF"，不是现金' },
    { title: '不留可验证假设', body: '没有 Track Record 记录的预测，事后无法追责' },
]

const newModules = [
    {
        code: 'A3',
        title: '管理层资本配置评分',
        body: 'ROIIC / 回购 / 股息 / M&A 四维 × 1-5 分 + 综合 A-D 等级。好管理层 ≠ 好资本配置，分开评。',
        cls: 'cyan',
    },
    {
        code: 'G6',
        title: '共识 vs 指引 Gap',
        body: '管理层指引 / 卖方共识 / 本分析假设三列对比。gap >15% 时红标——业绩爆雷先行指标。',
        cls: 'purple',
    },
    {
        code: 'G7',
        title: '对照组策略',
        body: 'vs SPY / QQQ / 60-40 / 10Y 国债 对比超额 CAGR。超额 <5% 直接买 ETF，不值得单选。',
        cls: 'green',
    },
    {
        code: 'H3',
        title: 'Track Record 机制',
        body: '每份报告锁定 4-6 条带目标日期的命题。3/6/12 月后回看，建立自我校准数据。',
        cls: 'yellow',
    },
]

const benchmarks = [
    { cls: 'cyan', label: '目标回报', value: '10x+' },
    { cls: 'purple', label: '时间跨度', value: '5Y + 10Y' },
    { cls: 'green', label: '情景档位', value: '3 - 4 档' },
    { cls: 'yellow', label: '概率显式', value: '必须 %' },
]
</script>

<template>
    <div class="container">
        <section class="hero" style="padding: 80px 0 40px">
            <div class="hero-eyebrow">
                <span class="dot"></span>
                <span class="mono">RESEARCH FRAMEWORK · 10-BAGGER HUNT</span>
            </div>
            <h1>
                分析方法论<br />
                <span class="gradient-text">8 步 · 5Y 与 10Y 双时间轴</span>
            </h1>
            <p class="hero-subtitle">
                一套可复用的选股框架。回答同一个核心问题 —— 这家公司 5 年和 10 年后分别值多少钱？有多大概率翻 10 倍？
                <br />
                <span style="font-size: 14px; color: var(--text-muted)">8 步流程 · 29+ 模块 · 13+11 硬规则 · 6 量化公式</span>
            </p>
        </section>

        <section class="section" style="padding-top: 40px">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// THE 8 STEPS</div>
                    <h2>分析流程</h2>
                </div>
                <p>每家公司都走完这 8 步，可对照、可复现、可迭代。v2 新增 Step 08 · Track Record 锁定。</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 20px">
                <div v-for="s in bigSteps" :key="s.n" class="card step-long">
                    <div class="bignum">{{ s.n }}</div>
                    <div>
                        <h3>
                            {{ s.title }}
                            <small>{{ s.en }}</small>
                        </h3>
                        <p v-html="s.body"></p>

                        <div v-if="s.dims" class="dim-grid">
                            <div v-for="d in s.dims" :key="d.label" :class="d.cls">
                                <strong>{{ d.label }}</strong>
                                <small>{{ d.sub }}</small>
                            </div>
                        </div>

                        <div v-if="s.scenarios" class="grid-3">
                            <div
                                v-for="sc in s.scenarios"
                                :key="sc.name"
                                :style="`padding:16px; background:rgba(${sc.cls === 'green' ? '5,150,105' : sc.cls === 'cyan' ? '67,56,202' : '220,38,38'},0.06); border:1px solid rgba(${sc.cls === 'green' ? '5,150,105' : sc.cls === 'cyan' ? '67,56,202' : '220,38,38'},0.25); border-radius:8px`"
                            >
                                <div
                                    :style="`color:var(--accent-${sc.cls}); font-family:'Space Grotesk Variable','Space Grotesk',sans-serif; font-weight:700; margin-bottom:4px`"
                                >
                                    {{ sc.name }}
                                </div>
                                <div style="font-size: 12px; color: var(--text-muted)">{{ sc.body }}</div>
                            </div>
                        </div>

                        <div v-if="s.formula" class="formula">{{ s.formula }}</div>
                        <p v-if="s.followUp" v-html="s.followUp"></p>
                        <div v-if="s.example" class="step-example">{{ s.example }}</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// v2 · DIAGNOSTIC MODULES</div>
                    <h2>诊断工具集 · v2 升级</h2>
                </div>
                <p>除了 7 步流程，v2 新加 4 个诊断模块，专治"research theater"的四种典型盲点。</p>
            </div>
            <div class="grid-2" style="gap: 16px">
                <div v-for="m in newModules" :key="m.code" class="card module-card" :class="'accent-' + m.cls">
                    <div class="module-head">
                        <div class="module-code" :class="m.cls">{{ m.code }}</div>
                        <h3 style="margin: 0">{{ m.title }}</h3>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.7; margin-top: 10px">{{ m.body }}</p>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// PHILOSOPHY</div>
                    <h2>硬规则 · 13 必须 + 11 禁止</h2>
                </div>
                <p>做投研最常犯的错，这里直接用规则绕开。v2 新增 4+3 条。</p>
            </div>
            <div class="grid-2">
                <div class="card accent-cyan">
                    <h3 style="color: var(--accent-primary)">✓ 必须做的</h3>
                    <ul class="list-plain">
                        <li v-for="i in doItems" :key="i.title">
                            <strong>{{ i.title }}</strong> — {{ i.body }}
                        </li>
                    </ul>
                </div>
                <div class="card accent-purple">
                    <h3 style="color: var(--accent-red)">✗ 不能做的</h3>
                    <ul class="list-plain red">
                        <li v-for="i in dontItems" :key="i.title">
                            <strong>{{ i.title }}</strong> — {{ i.body }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// 10-BAGGER STANDARD</div>
                    <h2>为什么是"10 倍 + 5Y/10Y"？</h2>
                </div>
                <p>Peter Lynch 的 10-bagger 是普通人能复盘、能检验、能下注的最小有意义单位。</p>
            </div>
            <div class="card">
                <div class="bench-grid">
                    <div v-for="b in benchmarks" :key="b.label" class="bench-cell">
                        <div class="el">{{ b.label }}</div>
                        <div class="ev" :class="b.cls">{{ b.value }}</div>
                    </div>
                </div>
                <div style="color: var(--text-secondary); font-size: 14px; line-height: 1.8">
                    <p style="margin-bottom: 12px">
                        <strong style="color: var(--accent-primary)">为什么 10x？</strong>
                        因为"2-3x"是市场 beta + 运气能给出的基准回报，不需要特殊研究。能在 5-10 年做到 10x 的公司，必然存在可被识别的结构性因子（商业模式杠杆、护城河、再投资空间）——这些因子可以前置分析出来。
                    </p>
                    <p style="margin-bottom: 12px">
                        <strong style="color: var(--accent-primary)">为什么 5Y 与 10Y 同时看？</strong>
                        单看 10Y 的问题：一个 10Y 翻 10 倍的公司，前 5 年可能只涨 20%，最后 5 年才爆发。如果中途股价横盘你很可能割肉离场。<br />
                        单看 5Y 的问题：5Y 5x 听起来很猛，但如果 10Y 也只有 5x，说明增长是一次性的，后半程没有空间——不是真 10-bagger，是估值修复。
                    </p>
                    <p>
                        <strong style="color: var(--accent-primary)">两个数字一起看</strong>，
                        能区分"真 10-bagger"（5Y 3x + 10Y 10x）vs "假命中"（5Y 8x + 10Y 9x，增长已耗尽）vs "估值陷阱"（5Y 2x + 10Y 3x，跑不赢大盘）。
                    </p>
                </div>
            </div>
        </section>

        <div class="footer">
            <div class="mono-line">METHODOLOGY v2.0 · 10-BAGGER HUNTING · LAST UPDATED 2026-04-21</div>
            <div style="margin-top: 8px">本方法论将随着覆盖公司增多持续迭代。</div>
            <div style="margin-top: 8px">
                <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="color: var(--text-muted); text-decoration: none; font-size: 12px">浙ICP备18033627号-1</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dim-grid strong.cyan { color: var(--accent-primary); }
.dim-grid strong.purple { color: var(--accent-secondary); }
.dim-grid strong.green { color: var(--accent-green); }
.dim-grid strong.yellow { color: var(--accent-yellow); }
.dim-grid strong.red { color: var(--accent-red); }
:deep(strong.cyan) { color: var(--accent-primary); }
:deep(strong.purple) { color: var(--accent-secondary); }

/* ========= v2 新模块卡片 ========= */
.module-card {
    padding: 20px 22px;
}

.module-head {
    display: flex;
    align-items: center;
    gap: 12px;
}

.module-code {
    font-family: 'JetBrains Mono Variable', 'JetBrains Mono', monospace;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.1em;
    padding: 4px 10px;
    border-radius: 100px;
}

.module-code.cyan { color: var(--accent-primary); background: rgba(67, 56, 202, 0.08); }
.module-code.purple { color: var(--accent-secondary); background: rgba(124, 58, 237, 0.08); }
.module-code.green { color: var(--accent-green); background: rgba(5, 150, 105, 0.08); }
.module-code.yellow { color: var(--accent-yellow); background: rgba(234, 179, 8, 0.1); }
</style>
