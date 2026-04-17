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
        title: 'Mag 7 基因体检',
        en: 'DNA Check',
        body: '对照 Mag 7 五项核心基因做差距扫描，识别结构性缺口：',
        dims: [
            { cls: 'cyan', label: '软件边际成本', sub: '复制成本是否趋近 0' },
            { cls: 'purple', label: '网络/平台效应', sub: '用户越多价值越大' },
            { cls: 'green', label: '数据闭环', sub: '数据反哺产品' },
            { cls: 'yellow', label: '定价权', sub: '毛利 60%+ 可持续' },
            { cls: 'red', label: '跨代际转型', sub: '长出第二条 S 曲线' },
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
        title: '三档情景推演',
        en: 'Scenario Projection',
        body: '在 10 年尺度上构建三档情景（可扩展第四档"退出"）：',
        scenarios: [
            { cls: 'green', name: '乐观 Bull', body: '商业模式跃迁成功 → Mag 7 / 巨头级' },
            { cls: 'cyan', name: '中性 Base', body: '赛道第二 / 盈利稳健 → 类 Oracle' },
            { cls: 'red', name: '悲观 Bear', body: '被规模碾压 / 价格战 → 估值回归' },
        ],
    },
    {
        n: '06',
        title: '加权期望值计算',
        en: 'Weighted Expectation',
        body: '核心公式：',
        formula: 'E[Mcap₁₀ᵧ] = Σ Pᵢ × Midᵢ',
        followUp: '再推导出<strong class="cyan">回报倍数</strong>与<strong class="purple">CAGR</strong>，作为仓位判断的锚。',
        example: 'Multiplier = E[Mcap] / Current Mcap\nCAGR = (Multiplier)^(1/10) - 1',
    },
    {
        n: '07',
        title: '观察指标清单',
        en: 'Tracking Signals',
        body: '输出 5 项<strong class="cyan">季度级跟踪指标</strong>，每个指标给出三种信号值（Mag 7 / Oracle / 被压制），用于动态判定公司走在哪条轨迹上，并据此调整仓位。',
        example: '典型指标：CapEx/Rev · 客户集中度 · Gross Margin · 开发者规模 · 商业模式层级',
    },
]

const doItems = [
    { title: '用事实而非故事', body: '每个论点必须能被某个具体数据验证或证伪' },
    { title: '包含反面证据', body: '看多论点必须伴随等量的看空论点' },
    { title: '标注数据时点', body: '老数据会腐烂，所有结论都要标注 anchor date' },
    { title: '情景概率显式化', body: '不说"可能"，只说"概率约 X%"' },
    { title: '区分事实与推断', body: '哪些是公司披露，哪些是本分析的主观判断' },
]

const dontItems = [
    { title: '只讲一面', body: '只看多或只看空都是 research theater' },
    { title: '回避概率', body: '不给出概率的判断无法事后复盘' },
    { title: '堆砌数据', body: '数据只在推出决策时才有意义' },
    { title: '使用 PR 话术', body: '"颠覆性"、"革命性"、"无可替代" 全部禁用' },
    { title: '给单一目标价', body: '必须给情景分布，不是点估计' },
]

const benchmarks = [
    { cls: 'cyan', label: 'MCAP 门槛', value: '$1T+' },
    { cls: 'purple', label: '年营收', value: '$100B+' },
    { cls: 'green', label: 'Operating Margin', value: '25%+' },
    { cls: 'yellow', label: 'FCF', value: '$20B+' },
]
</script>

<template>
    <div class="container">
        <section class="hero" style="padding: 80px 0 40px">
            <div class="hero-eyebrow">
                <span class="dot"></span>
                <span class="mono">RESEARCH FRAMEWORK</span>
            </div>
            <h1>
                分析方法论<br />
                <span class="gradient-text">7 步 · 从事实到终局</span>
            </h1>
            <p class="hero-subtitle">
                一套可复用的分析框架。回答的核心问题是：这家公司有多大概率成为下一个 Mag 7？10 年加权期望回报是多少？
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
                                :style="`padding:16px; background:rgba(${sc.cls === 'green' ? '16,185,129' : sc.cls === 'cyan' ? '59,130,246' : '244,63,94'},0.08); border:1px solid rgba(${sc.cls === 'green' ? '16,185,129' : sc.cls === 'cyan' ? '59,130,246' : '244,63,94'},0.3); border-radius:8px`"
                            >
                                <div
                                    :style="`color:var(--accent-${sc.cls}); font-family:'Space Grotesk',sans-serif; font-weight:700; margin-bottom:4px`"
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
                    <h3 style="color: var(--accent-cyan)">✓ 必须做的</h3>
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
                    <div class="tag">// MAG 7 BENCHMARK</div>
                    <h2>为什么拿 Mag 7 做标尺？</h2>
                </div>
                <p>因为"下一个 Apple/Nvidia/Microsoft"是所有 AI 基础设施投资的终极提问。</p>
            </div>
            <div class="card">
                <div class="bench-grid">
                    <div v-for="b in benchmarks" :key="b.label" class="bench-cell">
                        <div class="el">{{ b.label }}</div>
                        <div class="ev" :class="b.cls">{{ b.value }}</div>
                    </div>
                </div>
                <div style="color: var(--text-secondary); font-size: 14px; line-height: 1.7">
                    Mag 7 的共同点不是"规模大"，而是<strong style="color: var(--accent-cyan)">软件边际 + 网络效应 + 数据闭环</strong>三项全部拥有。这个组合允许收入 scale 不靠堆资本，毛利率维持 60%+，现金流持续滚大雪球。任何一家缺其中两项的公司，即使做到 $500B，也很难跨过 $1T 门槛。
                </div>
            </div>
        </section>

        <div class="footer">
            <div class="mono-line">METHODOLOGY v0.1 · LAST UPDATED 2026-04-17</div>
            <div style="margin-top: 8px">本方法论将随着覆盖公司增多持续迭代。</div>
        </div>
    </div>
</template>

<style scoped>
.dim-grid strong.cyan { color: var(--accent-cyan); }
.dim-grid strong.purple { color: var(--accent-purple); }
.dim-grid strong.green { color: var(--accent-green); }
.dim-grid strong.yellow { color: var(--accent-yellow); }
.dim-grid strong.red { color: var(--accent-red); }
:deep(strong.cyan) { color: var(--accent-cyan); }
:deep(strong.purple) { color: var(--accent-purple); }
</style>
