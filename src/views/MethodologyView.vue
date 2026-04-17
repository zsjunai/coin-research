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
]

const doItems = [
    { title: '用事实而非故事', body: '每个论点必须能被某个具体数据验证或证伪' },
    { title: '包含反面证据', body: '看多论点必须伴随等量的看空论点' },
    { title: '标注数据时点', body: '老数据会腐烂，所有结论都要标注 anchor date' },
    { title: '情景概率显式化', body: '不说"可能"，只说"概率约 X%"' },
    { title: '区分事实与推断', body: '哪些是公司披露，哪些是本分析的主观判断' },
    { title: '双时间轴并列', body: '5Y 与 10Y 两个数字一起给，回报节奏 + 终局分开看' },
]

const dontItems = [
    { title: '只讲一面', body: '只看多或只看空都是 research theater' },
    { title: '回避概率', body: '不给出概率的判断无法事后复盘' },
    { title: '堆砌数据', body: '数据只在推出决策时才有意义' },
    { title: '使用 PR 话术', body: '"颠覆性"、"革命性"、"无可替代" 全部禁用' },
    { title: '给单一目标价', body: '必须给情景分布，不是点估计' },
    { title: '只看 10Y 终局', body: '10Y 翻 10 倍，但 5Y 只 1.5x 也是差投资' },
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
                <span class="gradient-text">7 步 · 5Y 与 10Y 双时间轴</span>
            </h1>
            <p class="hero-subtitle">
                一套可复用的选股框架。回答同一个核心问题 —— 这家公司 5 年和 10 年后分别值多少钱？有多大概率翻 10 倍？
            </p>
        </section>

        <section class="section" style="padding-top: 40px">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// THE 7 STEPS</div>
                    <h2>分析流程</h2>
                </div>
                <p>每家公司都走完这 7 步，可对照、可复现、可迭代。</p>
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
                    <div class="tag">// PHILOSOPHY</div>
                    <h2>几条硬规则</h2>
                </div>
                <p>做投研最常犯的错，这里直接用规则绕开。</p>
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
            <div class="mono-line">METHODOLOGY v0.2 · 10-BAGGER HUNTING · LAST UPDATED 2026-04-17</div>
            <div style="margin-top: 8px">本方法论将随着覆盖公司增多持续迭代。</div>
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
</style>
