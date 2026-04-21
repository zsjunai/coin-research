<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { companies } from '@/data/companies'
import type { Market, Verdict } from '@/types/company'

const marketLabel: Record<Market, string> = {
    US: '🇺🇸 美股',
    A: '🇨🇳 A 股',
    HK: '🇭🇰 港股',
    PRIVATE: '⚫ 未上市',
}

const verdictOrder: Record<Verdict, number> = {
    bullish: 0,
    neutral: 1,
    bearish: 2,
}

const steps = [
    { n: '01', t: '事实锚定', b: '严格基于某日期公开事实，不用预测当输入' },
    { n: '02', t: '十倍基因体检', b: '五项核心基因（软件边际/网络/数据/定价权/再投资空间）差距扫描' },
    { n: '03', t: '合同积压量化', b: '把长期合同、战略入股、产能路径转化为"收入地板"' },
    { n: '04', t: '竞品横向对照', b: '选同赛道最强对手做指标对齐，识别结构性优劣' },
    { n: '05', t: '双档时间推演', b: '5 年与 10 年两个视角下乐观/中性/悲观情景 + 主观概率' },
    { n: '06', t: '加权期望值', b: '概率 × 市值中值 = 期望终局 → 推出倍数与 CAGR' },
    { n: '07', t: '观察指标清单', b: '5 项季度级指标，动态判定公司走在哪条轨迹上' },
    { n: '08', t: 'Track Record 锁定', b: '锁定 4-6 条可验证假设 · 3/6/12 月回看 · 建立命中率（v2 ✧）' },
]

const roadmap = [
    { name: 'CoreWeave', ticker: 'CRWV', sector: 'AI 基建', market: '🇺🇸' },
    { name: 'Palantir', ticker: 'PLTR', sector: '企业软件', market: '🇺🇸' },
    { name: '特斯拉', ticker: 'TSLA', sector: '电动车 · 自驾', market: '🇺🇸' },
    { name: '台积电', ticker: 'TSM', sector: '半导体', market: '🇺🇸' },
    { name: 'SpaceX', ticker: '未上市', sector: '航天', market: '⚫' },
    { name: '宁德时代', ticker: 'SH:300750', sector: '动力电池', market: '🇨🇳' },
    { name: '中芯国际', ticker: 'SH:688981', sector: '半导体代工', market: '🇨🇳' },
    { name: '比亚迪', ticker: 'HK:01211', sector: '新能源车', market: '🇭🇰' },
    { name: '腾讯控股', ticker: 'HK:00700', sector: '互联网平台', market: '🇭🇰' },
    { name: '小鹏汽车', ticker: 'HK:09868', sector: '电动车', market: '🇭🇰' },
    { name: '贵州茅台', ticker: 'SH:600519', sector: '消费白马', market: '🇨🇳' },
    { name: '甲骨文', ticker: 'ORCL', sector: '企业云', market: '🇺🇸' },
]

// ========= 状态 =========
const search = ref('')
const activeMarkets = ref<Set<Market>>(new Set())
const activeTags = ref<Set<string>>(new Set())
type SortKey = 'y10' | 'y5' | 'p10x' | 'default'
const sortBy = ref<SortKey>('default')
const viewMode = ref<'grid' | 'table'>('grid')

// ========= 所有 tag 聚合 =========
const allTags = computed(() => {
    const set = new Set<string>()
    for (const c of companies) c.tags.forEach((t) => set.add(t))
    return Array.from(set)
})

// ========= 辅助：从 metric value "3.9x" / "~18%" 里抽数字 =========
function extractNumber(s: string | undefined): number {
    if (!s) return 0
    const m = s.match(/-?\d+(\.\d+)?/)
    return m ? Number(m[0]) : 0
}

function metricByLabel(c: (typeof companies)[number], kw: string): number {
    const m = c.metrics.find((x) => x.label.includes(kw))
    return m ? extractNumber(m.value) : 0
}

// ========= 过滤 + 排序 =========
const filtered = computed(() => {
    const q = search.value.trim().toLowerCase()
    let list = companies.filter((c) => {
        if (q) {
            const hit =
                c.name.toLowerCase().includes(q) ||
                c.ticker.toLowerCase().includes(q) ||
                c.desc.toLowerCase().includes(q)
            if (!hit) return false
        }
        if (activeMarkets.value.size > 0 && !activeMarkets.value.has(c.market)) return false
        if (activeTags.value.size > 0) {
            const hasTag = c.tags.some((t) => activeTags.value.has(t))
            if (!hasTag) return false
        }
        return true
    })

    const key = sortBy.value
    if (key === 'y10') list = [...list].sort((a, b) => metricByLabel(b, '10Y') - metricByLabel(a, '10Y'))
    else if (key === 'y5') list = [...list].sort((a, b) => metricByLabel(b, '5Y') - metricByLabel(a, '5Y'))
    else if (key === 'p10x') list = [...list].sort((a, b) => metricByLabel(b, 'P(10x') - metricByLabel(a, 'P(10x'))
    else list = [...list].sort((a, b) => verdictOrder[a.verdict] - verdictOrder[b.verdict])

    return list
})

function toggleMarket(m: Market) {
    if (activeMarkets.value.has(m)) activeMarkets.value.delete(m)
    else activeMarkets.value.add(m)
    activeMarkets.value = new Set(activeMarkets.value)
}

function toggleTag(t: string) {
    if (activeTags.value.has(t)) activeTags.value.delete(t)
    else activeTags.value.add(t)
    activeTags.value = new Set(activeTags.value)
}

function resetFilters() {
    search.value = ''
    activeMarkets.value = new Set()
    activeTags.value = new Set()
    sortBy.value = 'default'
}

const hasFilter = computed(
    () => search.value.length > 0 || activeMarkets.value.size > 0 || activeTags.value.size > 0 || sortBy.value !== 'default',
)
</script>

<template>
    <div class="container">
        <!-- ========= HERO 极简 ========= -->
        <section class="hero-compact">
            <div class="hero-eyebrow">
                <span class="dot"></span>
                <span class="mono">10-BAGGER HUNT · FACT-ANCHORED</span>
            </div>
            <h1 class="hero-h1">
                下一个 10 倍股，不是猜出来的，是 <span class="gradient-text">拆出来的</span>
            </h1>
            <div class="hero-line">
                <span><strong>{{ companies.length }}</strong> 家已覆盖</span>
                <span class="sep">·</span>
                <span><strong>29+</strong> 模块</span>
                <span class="sep">·</span>
                <span><strong>5Y × 10Y</strong> 双时间轴</span>
                <span class="sep">·</span>
                <span>Kelly · 对照组 · Track Record</span>
            </div>
        </section>

        <!-- ========= 覆盖公司（主角）========= -->
        <section class="section">
            <div class="section-head section-head-tight">
                <div class="title-group">
                    <div class="tag">// COMPANY UNIVERSE</div>
                    <h2>
                        覆盖公司
                        <span class="count-pill">
                            {{ filtered.length }} / {{ companies.length }}
                        </span>
                    </h2>
                </div>
                <p>筛选、排序或切换视图，快速定位你关心的公司。</p>
            </div>

            <!-- 工具栏 -->
            <div class="toolbar">
                <div class="toolbar-row">
                    <label class="search-box">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input v-model="search" type="text" placeholder="搜索公司名 / ticker / 关键词…" />
                        <button v-if="search" class="clear-btn" @click="search = ''" title="清除">×</button>
                    </label>

                    <div class="segmented">
                        <button
                            v-for="k in (['default', 'y5', 'y10', 'p10x'] as const)"
                            :key="k"
                            class="seg-btn"
                            :class="{ active: sortBy === k }"
                            @click="sortBy = k"
                        >
                            {{ k === 'default' ? '默认' : k === 'y5' ? '按 5Y' : k === 'y10' ? '按 10Y' : '按 P(10x)' }}
                        </button>
                    </div>

                    <div class="segmented">
                        <button class="seg-btn" :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'" title="卡片">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                            卡片
                        </button>
                        <button class="seg-btn" :class="{ active: viewMode === 'table' }" @click="viewMode = 'table'" title="对比">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                            对比
                        </button>
                    </div>
                </div>

                <div class="toolbar-row">
                    <div class="chip-group">
                        <span class="chip-label">市场</span>
                        <button
                            v-for="m in (['US', 'HK', 'A', 'PRIVATE'] as Market[])"
                            :key="m"
                            class="chip"
                            :class="{ active: activeMarkets.has(m) }"
                            @click="toggleMarket(m)"
                        >
                            {{ marketLabel[m] }}
                        </button>
                    </div>
                    <div class="chip-group">
                        <span class="chip-label">赛道</span>
                        <button
                            v-for="t in allTags"
                            :key="t"
                            class="chip tag-chip"
                            :class="{ active: activeTags.has(t) }"
                            @click="toggleTag(t)"
                        >
                            {{ t }}
                        </button>
                    </div>
                    <button v-if="hasFilter" class="reset-btn" @click="resetFilters">清除筛选</button>
                </div>
            </div>

            <!-- 空状态 -->
            <div v-if="filtered.length === 0" class="empty-state">
                <div class="empty-icon">∅</div>
                <div class="empty-title">没有匹配的公司</div>
                <div class="empty-desc">调整搜索词、市场或赛道筛选 · 或 <button class="inline-btn" @click="resetFilters">清除全部</button></div>
            </div>

            <!-- 卡片视图 -->
            <div v-else-if="viewMode === 'grid'" class="company-grid">
                <RouterLink v-for="c in filtered" :key="c.id" :to="`/company/${c.id}`" class="company-card">
                    <span class="verdict" :class="c.verdict">{{ c.verdictText }}</span>
                    <div class="row">
                        <div>
                            <div class="ticker-row">
                                <span class="ticker">{{ c.ticker }}</span>
                                <span class="market-badge">{{ marketLabel[c.market] }}</span>
                            </div>
                            <h3>{{ c.name }}</h3>
                        </div>
                    </div>
                    <div class="desc">{{ c.desc }}</div>
                    <div class="metrics">
                        <div v-for="m in c.metrics" :key="m.label" class="metric">
                            <div class="mlabel">{{ m.label }}</div>
                            <div class="mvalue">{{ m.value }}</div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <span class="price">{{ c.price }}</span>
                        <span class="mcap">市值 {{ c.marketCap }}</span>
                    </div>
                </RouterLink>
            </div>

            <!-- 对比表视图 -->
            <div v-else class="compare-wrap">
                <table class="compare-table">
                    <thead>
                        <tr>
                            <th>公司</th>
                            <th>市场</th>
                            <th style="text-align: right">股价</th>
                            <th style="text-align: right">市值</th>
                            <th style="text-align: right">5Y 期望</th>
                            <th style="text-align: right">10Y 期望</th>
                            <th style="text-align: right">P(10x · 10Y)</th>
                            <th>评级</th>
                            <th>赛道</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="c in filtered" :key="c.id" class="compare-row" @click="$router.push(`/company/${c.id}`)">
                            <td>
                                <div class="cell-company">
                                    <strong>{{ c.name }}</strong>
                                    <span class="cell-ticker">{{ c.ticker }}</span>
                                </div>
                            </td>
                            <td>{{ marketLabel[c.market] }}</td>
                            <td style="text-align: right">{{ c.price }}</td>
                            <td style="text-align: right">{{ c.marketCap }}</td>
                            <td style="text-align: right; color: var(--accent-primary); font-weight: 600">
                                {{ c.metrics.find((m) => m.label.includes('5Y'))?.value ?? '—' }}
                            </td>
                            <td style="text-align: right; color: var(--accent-primary); font-weight: 600">
                                {{ c.metrics.find((m) => m.label.includes('10Y'))?.value ?? '—' }}
                            </td>
                            <td style="text-align: right">
                                {{ c.metrics.find((m) => m.label.includes('P(10x'))?.value ?? '—' }}
                            </td>
                            <td>
                                <span class="verdict-badge" :class="c.verdict">{{ c.verdictText }}</span>
                            </td>
                            <td>
                                <span v-for="t in c.tags" :key="t" class="tag-mini">{{ t }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- ========= Coverage Roadmap ========= -->
        <section class="section">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// ROADMAP</div>
                    <h2>即将覆盖</h2>
                </div>
                <p>跨行业 + 跨市场。共同点：在 5-10 年尺度上有 10 倍空间的候选。</p>
            </div>
            <div class="roadmap-grid">
                <div v-for="r in roadmap" :key="r.ticker + r.name" class="roadmap-card">
                    <div class="roadmap-head">
                        <span class="roadmap-market">{{ r.market }}</span>
                        <span class="roadmap-name">{{ r.name }}</span>
                    </div>
                    <div class="roadmap-meta">
                        <span class="mono roadmap-ticker">{{ r.ticker }}</span>
                        <span class="roadmap-sector">{{ r.sector }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========= 方法论紧凑版 ========= -->
        <section class="section">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// METHODOLOGY</div>
                    <h2>分析方法</h2>
                </div>
                <p>
                    8 步走完，从公开事实推导到 5Y / 10Y 加权期望值 · 再到可追责的 Track Record。
                    <RouterLink to="/methodology" class="methodology-link">完整方法论 →</RouterLink>
                </p>
            </div>
            <div class="step-timeline">
                <div v-for="s in steps" :key="s.n" class="step-tl-item">
                    <div class="step-tl-num">{{ s.n }}</div>
                    <div class="step-tl-body">
                        <div class="step-tl-title">{{ s.t }}</div>
                        <div class="step-tl-desc">{{ s.b }}</div>
                    </div>
                </div>
            </div>
        </section>

        <div class="footer">
            <div class="mono-line">COIN.RESEARCH · 10-BAGGER HUNTING · FACT-ANCHORED</div>
            <div style="margin-top: 8px">本站分析均为基于公开信息的独立研究，不构成投资建议。投资有风险，入市需谨慎。</div>
        </div>
    </div>
</template>

<style scoped>
/* ========= Hero 紧凑版 ========= */
.hero-compact {
    padding: 40px 0 28px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 28px;
}

.hero-h1 {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.2;
    margin: 10px 0 14px;
    color: var(--text-ink);
}

.hero-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 12px;
    font-size: 14px;
    color: var(--text-secondary);
}

.hero-line strong {
    color: var(--text-ink);
    font-family: 'Space Grotesk Variable', sans-serif;
    font-weight: 700;
}

.hero-line .sep {
    color: var(--border-strong);
}

/* ========= Section Head 紧凑 ========= */
.section-head-tight {
    margin-bottom: 16px;
}

.count-pill {
    display: inline-block;
    margin-left: 10px;
    padding: 2px 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--accent-primary);
    background: rgba(67, 56, 202, 0.08);
    border-radius: 100px;
    vertical-align: middle;
    letter-spacing: 0;
}

/* ========= Toolbar ========= */
.toolbar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px 16px;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    margin-bottom: 20px;
}

.toolbar-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}

.search-box {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 1 280px;
    min-width: 240px;
    padding: 8px 12px;
    background: var(--bg-base);
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text-muted);
    transition: border-color 0.15s;
}

.search-box:focus-within {
    border-color: var(--accent-primary);
    color: var(--accent-primary);
}

.search-box input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-family: inherit;
    font-size: 14px;
    color: var(--text-ink);
    min-width: 0;
}

.clear-btn {
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    padding: 0 4px;
}

.clear-btn:hover {
    color: var(--accent-red);
}

/* ========= Segmented ========= */
.segmented {
    display: inline-flex;
    background: var(--bg-base);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 2px;
    gap: 2px;
}

.seg-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    font-size: 12.5px;
    font-weight: 500;
    color: var(--text-secondary);
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
    font-family: inherit;
}

.seg-btn:hover {
    color: var(--text-ink);
}

.seg-btn.active {
    background: var(--bg-surface);
    color: var(--accent-primary);
    box-shadow: var(--shadow-xs);
    font-weight: 600;
}

/* ========= Chips ========= */
.chip-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
}

.chip-label {
    font-size: 11px;
    color: var(--text-muted);
    font-family: 'JetBrains Mono Variable', monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-right: 4px;
}

.chip {
    padding: 4px 11px;
    font-size: 12.5px;
    color: var(--text-secondary);
    background: var(--bg-base);
    border: 1px solid var(--border);
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.15s;
    font-family: inherit;
    font-weight: 500;
    white-space: nowrap;
}

.chip:hover {
    border-color: var(--border-strong);
    color: var(--text-ink);
}

.chip.active {
    color: white;
    background: var(--accent-primary);
    border-color: var(--accent-primary);
}

.chip.tag-chip.active {
    background: var(--accent-purple, #7c3aed);
    border-color: var(--accent-purple, #7c3aed);
}

.reset-btn {
    margin-left: auto;
    padding: 4px 12px;
    font-size: 12px;
    color: var(--accent-red);
    background: transparent;
    border: 1px dashed var(--accent-red);
    border-radius: 100px;
    cursor: pointer;
    font-family: inherit;
}

.reset-btn:hover {
    background: rgba(220, 38, 38, 0.05);
}

/* ========= Empty State ========= */
.empty-state {
    text-align: center;
    padding: 60px 20px;
    background: var(--bg-surface);
    border: 1px dashed var(--border-strong);
    border-radius: 14px;
}

.empty-icon {
    font-size: 40px;
    color: var(--text-muted);
    margin-bottom: 10px;
}

.empty-title {
    font-size: 17px;
    font-weight: 600;
    color: var(--text-ink);
    margin-bottom: 6px;
}

.empty-desc {
    font-size: 13px;
    color: var(--text-secondary);
}

.inline-btn {
    background: transparent;
    border: none;
    color: var(--accent-primary);
    cursor: pointer;
    font: inherit;
    padding: 0;
    text-decoration: underline;
}

/* ========= Company Card 增强 ========= */
.company-card {
    position: relative;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px dashed var(--border);
    font-size: 12px;
}

.card-footer .price {
    font-family: 'JetBrains Mono Variable', monospace;
    font-weight: 600;
    color: var(--text-ink);
}

.card-footer .mcap {
    color: var(--text-muted);
}

/* ========= Ticker Row ========= */
.ticker-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 4px;
}

.market-badge {
    font-size: 11px;
    color: var(--text-muted);
    padding: 2px 8px;
    background: var(--bg-elevated);
    border-radius: 100px;
    font-weight: 500;
    white-space: nowrap;
}

/* ========= Compare Table ========= */
.compare-wrap {
    overflow-x: auto;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    box-shadow: var(--shadow-sm);
}

.compare-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13.5px;
    min-width: 880px;
}

.compare-table thead {
    background: var(--bg-elevated);
}

.compare-table th {
    padding: 12px 14px;
    text-align: left;
    font-weight: 600;
    color: var(--text-muted);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
    border-bottom: 1px solid var(--border);
}

.compare-table td {
    padding: 14px;
    border-bottom: 1px solid var(--border);
    vertical-align: middle;
}

.compare-row {
    cursor: pointer;
    transition: background 0.15s;
}

.compare-row:hover {
    background: rgba(67, 56, 202, 0.04);
}

.cell-company {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.cell-company strong {
    color: var(--text-ink);
    font-size: 14px;
}

.cell-ticker {
    font-size: 11px;
    color: var(--text-muted);
    font-family: 'JetBrains Mono Variable', monospace;
}

.verdict-badge {
    display: inline-block;
    padding: 3px 10px;
    font-size: 11px;
    font-weight: 600;
    border-radius: 100px;
    white-space: nowrap;
}

.verdict-badge.bullish {
    color: #059669;
    background: rgba(5, 150, 105, 0.1);
}

.verdict-badge.neutral {
    color: var(--accent-primary);
    background: rgba(67, 56, 202, 0.08);
}

.verdict-badge.bearish {
    color: #dc2626;
    background: rgba(220, 38, 38, 0.08);
}

.tag-mini {
    display: inline-block;
    margin-right: 4px;
    margin-bottom: 2px;
    padding: 1px 7px;
    font-size: 10.5px;
    color: var(--text-muted);
    background: var(--bg-elevated);
    border-radius: 100px;
    white-space: nowrap;
}

/* ========= Roadmap ========= */
.roadmap-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 12px;
}

.roadmap-card {
    padding: 18px 20px;
    background: var(--bg-surface);
    border: 1px dashed var(--border-strong);
    border-radius: 12px;
    transition: all 0.2s;
}

.roadmap-card:hover {
    border-color: var(--accent-primary);
    border-style: solid;
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
}

.roadmap-head {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
}

.roadmap-market {
    font-size: 16px;
}

.roadmap-name {
    font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: var(--text-ink);
}

.roadmap-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    font-size: 12px;
}

.roadmap-ticker {
    color: var(--accent-primary);
    font-weight: 600;
    font-size: 11px;
    letter-spacing: 0.05em;
}

.roadmap-sector {
    color: var(--text-muted);
    font-size: 11px;
    padding: 2px 8px;
    background: var(--bg-elevated);
    border-radius: 100px;
}

/* ========= 方法论紧凑时间线 ========= */
.methodology-link {
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: 500;
    margin-left: 8px;
    white-space: nowrap;
}

.methodology-link:hover {
    text-decoration: underline;
}

.step-timeline {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 14px;
}

.step-tl-item {
    display: grid;
    grid-template-columns: 44px 1fr;
    gap: 14px;
    align-items: start;
    padding: 16px 18px;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    transition: all 0.2s;
}

.step-tl-item:hover {
    border-color: var(--border-strong);
    box-shadow: var(--shadow-xs);
}

.step-tl-num {
    font-family: 'JetBrains Mono Variable', monospace;
    font-size: 24px;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
    letter-spacing: -0.04em;
}

.step-tl-title {
    font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: var(--text-ink);
    margin-bottom: 4px;
}

.step-tl-desc {
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.55;
}

/* ========= 响应式 ========= */
@media (max-width: 640px) {
    .hero-compact {
        padding: 24px 0 20px;
    }

    .hero-line {
        font-size: 13px;
    }

    .toolbar-row {
        gap: 8px;
    }

    .segmented {
        flex: 1 1 100%;
        justify-content: center;
    }

    .seg-btn {
        flex: 1;
        justify-content: center;
    }
}
</style>
