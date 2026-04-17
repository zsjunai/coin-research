<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getCompany } from '@/data/companies'
import type { GapStatus, RiskLevel, CatalystImpact, ThreatLevel, CompetitorType } from '@/types/company'
import PriceCard from '@/components/PriceCard.vue'
import ScenarioRow from '@/components/ScenarioRow.vue'
import ChartView from '@/components/ChartView.vue'
import TocSidebar from '@/components/TocSidebar.vue'
import type { ChartConfiguration } from 'chart.js'

const route = useRoute()

const data = computed(() => {
    const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
    return getCompany(id)
})

watchEffect(() => {
    if (data.value) document.title = `${data.value.name} · Coin Research`
})

const facts = computed(() => {
    if (!data.value) return []
    return Object.entries(data.value.keyFacts).map(([k, v]) => ({ k, v }))
})

const gapLabel: Record<GapStatus, string> = {
    red: '结构性差距',
    yellow: '偏弱',
    green: '可能正向',
}

const riskClass: Record<RiskLevel, string> = {
    low: 'green',
    medium: 'yellow',
    high: 'red',
    critical: 'red',
}

const riskLabel: Record<RiskLevel, string> = {
    low: '低',
    medium: '中',
    high: '高',
    critical: '极高',
}

const impactClass: Record<CatalystImpact, string> = {
    positive: 'green',
    negative: 'red',
    mixed: 'yellow',
}

const impactLabel: Record<CatalystImpact, string> = {
    positive: '↑ 正面',
    negative: '↓ 负面',
    mixed: '↔ 中性',
}

const threatClass: Record<ThreatLevel, string> = {
    high: 'red',
    medium: 'yellow',
    low: 'green',
}

const threatLabel: Record<ThreatLevel, string> = {
    high: '高威胁',
    medium: '中威胁',
    low: '低威胁',
}

const competitorTypeLabel: Record<CompetitorType, string> = {
    neocloud: 'Neocloud',
    hyperscaler: '超大规模云',
    specialist: '专家型',
}

const competitorTypeClass: Record<CompetitorType, string> = {
    neocloud: 'cyan',
    hyperscaler: 'purple',
    specialist: 'yellow',
}

const revenueConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    return {
        type: 'bar',
        data: {
            labels: d.revenueChart.labels,
            datasets: [
                {
                    data: d.revenueChart.values,
                    backgroundColor: d.revenueChart.kinds.map((k) =>
                        k === 'revenue' ? 'rgba(67, 56, 202, 0.82)' : 'rgba(124, 58, 237, 0.82)',
                    ),
                    borderColor: d.revenueChart.kinds.map((k) => (k === 'revenue' ? '#4338ca' : '#7c3aed')),
                    borderWidth: 1,
                    borderRadius: 6,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: { label: (ctx) => '$' + ctx.parsed.y + 'M' },
                },
            },
            scales: {
                y: {
                    type: 'logarithmic',
                    grid: { color: 'rgba(10, 10, 10, 0.05)' },
                    ticks: {
                        callback: (v) => '$' + (Number(v) >= 1000 ? Number(v) / 1000 + 'B' : v + 'M'),
                    },
                },
                x: { grid: { display: false } },
            },
        },
    }
})

const horizonCompareConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    return {
        type: 'bar',
        data: {
            labels: d.scenarios.map((s) => s.name.replace(/^.+?: /, '')),
            datasets: [
                {
                    label: '5Y 市值 ($B)',
                    data: d.scenarios.map((s) => s.y5Value),
                    backgroundColor: 'rgba(5, 150, 105, 0.75)',
                    borderColor: '#059669',
                    borderWidth: 1,
                    borderRadius: 6,
                },
                {
                    label: '10Y 市值 ($B)',
                    data: d.scenarios.map((s) => s.y10Value),
                    backgroundColor: 'rgba(67, 56, 202, 0.75)',
                    borderColor: '#4338ca',
                    borderWidth: 1,
                    borderRadius: 6,
                },
                {
                    label: '当前市值 $40B',
                    data: d.scenarios.map(() => d.weightedExpectation.currentMcap),
                    type: 'line',
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.08)',
                    borderWidth: 2,
                    pointRadius: 0,
                    borderDash: [6, 4],
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { padding: 14, boxWidth: 12 } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: { label: (ctx) => ctx.dataset.label + ': $' + ctx.parsed.y + 'B' },
                },
            },
            scales: {
                y: {
                    type: 'logarithmic',
                    grid: { color: 'rgba(10, 10, 10, 0.05)' },
                    ticks: {
                        callback: (v) => '$' + (Number(v) >= 1000 ? Number(v) / 1000 + 'T' : v + 'B'),
                    },
                },
                x: { grid: { display: false }, ticks: { font: { size: 11 } } },
            },
        },
    }
})

const scenarioConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    return {
        type: 'doughnut',
        data: {
            labels: d.scenarios.map((s) => s.name),
            datasets: [
                {
                    data: d.scenarios.map((s) => s.prob),
                    backgroundColor: [
                        'rgba(5, 150, 105, 0.85)',
                        'rgba(67, 56, 202, 0.85)',
                        'rgba(220, 38, 38, 0.85)',
                        'rgba(180, 83, 9, 0.85)',
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { padding: 16, font: { size: 12 }, boxWidth: 12 },
                },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: { label: (ctx) => ctx.label + ': ' + ctx.parsed + '%' },
                },
            },
        },
    }
})

const revenueMixConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    return {
        type: 'doughnut',
        data: {
            labels: d.overview.revenueMix.map((r) => r.name),
            datasets: [
                {
                    data: d.overview.revenueMix.map((r) => r.pct),
                    backgroundColor: ['rgba(67, 56, 202, 0.85)', 'rgba(124, 58, 237, 0.7)', 'rgba(180, 83, 9, 0.7)'],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { padding: 14, boxWidth: 12 } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: { label: (ctx) => ctx.label + ': ' + ctx.parsed + '%' },
                },
            },
        },
    }
})

const marginConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    const m = d.profitability.marginEvolution
    return {
        type: 'line',
        data: {
            labels: m.map((x) => x.year),
            datasets: [
                {
                    label: 'Gross Margin %',
                    data: m.map((x) => x.gross),
                    borderColor: '#059669',
                    backgroundColor: 'rgba(5, 150, 105, 0.08)',
                    borderWidth: 2,
                    tension: 0.3,
                    pointRadius: 4,
                    fill: false,
                },
                {
                    label: 'EBITDA Margin %',
                    data: m.map((x) => x.ebitda),
                    borderColor: '#4338ca',
                    backgroundColor: 'rgba(67, 56, 202, 0.08)',
                    borderWidth: 2,
                    tension: 0.3,
                    pointRadius: 4,
                    fill: false,
                },
                {
                    label: 'Operating Margin %',
                    data: m.map((x) => x.operating),
                    borderColor: '#7c3aed',
                    backgroundColor: 'rgba(124, 58, 237, 0.08)',
                    borderWidth: 2,
                    borderDash: [4, 4],
                    tension: 0.3,
                    pointRadius: 4,
                    fill: false,
                },
                {
                    label: 'Net Margin %',
                    data: m.map((x) => x.net),
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.08)',
                    borderWidth: 2,
                    borderDash: [2, 3],
                    tension: 0.3,
                    pointRadius: 4,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { padding: 14, boxWidth: 10 } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: { label: (ctx) => ctx.dataset.label + ': ' + (ctx.parsed.y ?? 'N/A') + '%' },
                },
            },
            scales: {
                y: {
                    grid: { color: 'rgba(10, 10, 10, 0.05)' },
                    ticks: { callback: (v) => v + '%' },
                },
                x: { grid: { display: false } },
            },
        },
    }
})

const historicalValConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    const h = d.historicalValuation.history
    return {
        type: 'line',
        data: {
            labels: h.map((x) => x.period),
            datasets: [
                {
                    label: 'EV/Sales (TTM)',
                    data: h.map((x) => x.evSales),
                    borderColor: '#4338ca',
                    backgroundColor: 'rgba(67, 56, 202, 0.12)',
                    borderWidth: 2.5,
                    tension: 0.35,
                    pointRadius: 5,
                    pointBackgroundColor: '#4338ca',
                    fill: true,
                },
                {
                    label: '行业中位 (参考 CoreWeave 历史均值)',
                    data: h.map(() => 35),
                    borderColor: '#94a3b8',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [6, 4],
                    pointRadius: 0,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { padding: 14, boxWidth: 12 } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: {
                        afterLabel: (ctx) => {
                            const h = data.value!.historicalValuation.history[ctx.dataIndex]
                            return h?.note ? h.note : ''
                        },
                    },
                },
            },
            scales: {
                y: {
                    grid: { color: 'rgba(10, 10, 10, 0.05)' },
                    ticks: { callback: (v) => v + 'x' },
                },
                x: { grid: { display: false } },
            },
        },
    }
})

const sensitivityConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    const vars = [...d.sensitivity.variables].sort(
        (a, b) => Math.max(Math.abs(b.downImpact), Math.abs(b.upImpact)) - Math.max(Math.abs(a.downImpact), Math.abs(a.upImpact)),
    )
    return {
        type: 'bar',
        data: {
            labels: vars.map((x) => x.variable),
            datasets: [
                {
                    label: '负向扰动 ($B)',
                    data: vars.map((x) => x.downImpact),
                    backgroundColor: 'rgba(220, 38, 38, 0.75)',
                    borderColor: '#dc2626',
                    borderWidth: 1,
                    borderRadius: 4,
                },
                {
                    label: '正向扰动 ($B)',
                    data: vars.map((x) => x.upImpact),
                    backgroundColor: 'rgba(5, 150, 105, 0.75)',
                    borderColor: '#059669',
                    borderWidth: 1,
                    borderRadius: 4,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { position: 'top', labels: { padding: 14, boxWidth: 12 } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: {
                        label: (ctx) => {
                            const x = Number(ctx.parsed.x ?? 0)
                            return ctx.dataset.label + ': ' + (x > 0 ? '+' : '') + '$' + x + 'B'
                        },
                        afterLabel: (ctx) => {
                            const v = vars[ctx.dataIndex]
                            return v?.description ? v.description : ''
                        },
                    },
                },
            },
            scales: {
                x: {
                    stacked: false,
                    grid: { color: 'rgba(10, 10, 10, 0.05)' },
                    ticks: { callback: (v) => (Number(v) > 0 ? '+' : '') + '$' + v + 'B' },
                },
                y: {
                    stacked: true,
                    grid: { display: false },
                    ticks: { font: { size: 11 } },
                },
            },
        },
    }
})

const tamConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    const t = d.competitiveLandscape.tam.points
    return {
        type: 'bar',
        data: {
            labels: t.map((x) => x.year),
            datasets: [
                {
                    label: 'AI 基建总 TAM ($B)',
                    data: t.map((x) => x.totalTam),
                    backgroundColor: 'rgba(100, 116, 139, 0.35)',
                    borderColor: '#64748b',
                    borderWidth: 1,
                    borderRadius: 4,
                    order: 3,
                },
                {
                    label: 'Neocloud 子赛道 ($B)',
                    data: t.map((x) => x.neocloudTam),
                    backgroundColor: 'rgba(124, 58, 237, 0.75)',
                    borderColor: '#7c3aed',
                    borderWidth: 1,
                    borderRadius: 4,
                    order: 2,
                },
                {
                    label: 'Nebius 营收 ($B)',
                    data: t.map((x) => x.selfRevenue),
                    backgroundColor: 'rgba(67, 56, 202, 0.95)',
                    borderColor: '#4338ca',
                    borderWidth: 1,
                    borderRadius: 4,
                    order: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { padding: 14, boxWidth: 14 } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: {
                        label: (ctx) => {
                            const v = Number(ctx.parsed.y ?? 0)
                            const label = ctx.dataset.label + ': '
                            return label + (v >= 1000 ? '$' + (v / 1000).toFixed(1) + 'T' : '$' + v + 'B')
                        },
                    },
                },
            },
            scales: {
                y: {
                    type: 'logarithmic',
                    grid: { color: 'rgba(10, 10, 10, 0.05)' },
                    ticks: {
                        callback: (v) => {
                            const n = Number(v)
                            return n >= 1000 ? '$' + n / 1000 + 'T' : '$' + n + 'B'
                        },
                    },
                },
                x: { grid: { display: false } },
            },
        },
    }
})

const shareConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    const t = d.competitiveLandscape.tam.points
    return {
        type: 'line',
        data: {
            labels: t.map((x) => x.year),
            datasets: [
                {
                    label: 'Nebius 在 Neocloud 的市占 (%)',
                    data: t.map((x) => Number(((x.selfRevenue / x.neocloudTam) * 100).toFixed(1))),
                    borderColor: '#4338ca',
                    backgroundColor: 'rgba(67, 56, 202, 0.15)',
                    borderWidth: 2.5,
                    tension: 0.35,
                    pointRadius: 5,
                    pointBackgroundColor: '#4338ca',
                    fill: true,
                },
                {
                    label: '10x 回报所需市占（15%）',
                    data: t.map(() => 15),
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.05)',
                    borderWidth: 2,
                    borderDash: [6, 4],
                    pointRadius: 0,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { padding: 14, boxWidth: 12 } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: { label: (ctx) => ctx.dataset.label + ': ' + ctx.parsed.y + '%' },
                },
            },
            scales: {
                y: {
                    min: 0,
                    max: 25,
                    grid: { color: 'rgba(10, 10, 10, 0.05)' },
                    ticks: { callback: (v) => v + '%' },
                },
                x: { grid: { display: false } },
            },
        },
    }
})

const radarConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    const r = d.competitiveLandscape.radar
    return {
        type: 'radar',
        data: {
            labels: r.dimensions.map((x) => x.dim),
            datasets: [
                {
                    label: 'Nebius',
                    data: r.dimensions.map((x) => x.self),
                    borderColor: '#4338ca',
                    backgroundColor: 'rgba(67, 56, 202, 0.25)',
                    borderWidth: 2,
                    pointBackgroundColor: '#4338ca',
                    pointRadius: 4,
                },
                {
                    label: r.peer1Name,
                    data: r.dimensions.map((x) => x.peer1),
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.12)',
                    borderWidth: 2,
                    pointBackgroundColor: '#dc2626',
                    pointRadius: 4,
                },
                {
                    label: r.peer2Name,
                    data: r.dimensions.map((x) => x.peer2),
                    borderColor: '#059669',
                    backgroundColor: 'rgba(5, 150, 105, 0.1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#059669',
                    pointRadius: 4,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { padding: 14, boxWidth: 14, font: { size: 12 } } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: { label: (ctx) => ctx.dataset.label + ': ' + ctx.parsed.r + '/10' },
                },
            },
            scales: {
                r: {
                    min: 0,
                    max: 10,
                    ticks: { stepSize: 2, color: '#a1a1aa', backdropColor: 'transparent' },
                    grid: { color: 'rgba(10, 10, 10, 0.08)' },
                    angleLines: { color: 'rgba(10, 10, 10, 0.08)' },
                    pointLabels: { color: '#0a0a0a', font: { size: 12, weight: 600 } },
                },
            },
        },
    }
})

const marketShareConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    const m = d.competitiveLandscape.marketShare2026
    return {
        type: 'doughnut',
        data: {
            labels: m.map((x) => x.name),
            datasets: [
                {
                    data: m.map((x) => x.pct),
                    backgroundColor: [
                        'rgba(180, 83, 9, 0.82)',
                        'rgba(67, 56, 202, 0.82)',
                        'rgba(5, 150, 105, 0.82)',
                        'rgba(124, 58, 237, 0.82)',
                        'rgba(220, 38, 38, 0.82)',
                        'rgba(14, 165, 233, 1)',
                        'rgba(100, 116, 139, 0.6)',
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { padding: 10, boxWidth: 12, font: { size: 11 } } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: { label: (ctx) => ctx.label + ': ' + ctx.parsed + '%' },
                },
            },
        },
    }
})

const analystConfig = computed<ChartConfiguration>(() => {
    const d = data.value!
    return {
        type: 'bar',
        data: {
            labels: d.analysts.map((a) => a.firm),
            datasets: [
                {
                    label: '目标价',
                    data: d.analysts.map((a) => a.target),
                    backgroundColor: 'rgba(67, 56, 202, 0.7)',
                    borderColor: '#4338ca',
                    borderWidth: 1,
                    borderRadius: 6,
                },
                {
                    label: '当前股价 $167',
                    data: d.analysts.map(() => 167),
                    type: 'line',
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    borderDash: [6, 4],
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { position: 'top', labels: { padding: 16, boxWidth: 12 } },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#0a0a0a',
                    bodyColor: '#52525b',
                    borderColor: '#e7e5e0',
                    borderWidth: 1,
                    callbacks: { label: (ctx) => ctx.dataset.label + ': $' + ctx.parsed.x },
                },
            },
            scales: {
                x: {
                    grid: { color: 'rgba(10, 10, 10, 0.05)' },
                    ticks: { callback: (v) => '$' + v },
                },
                y: { grid: { display: false } },
            },
        },
    }
})
</script>

<template>
    <div v-if="!data" class="container">
        <section class="hero">
            <h1>404 · 未覆盖公司</h1>
            <p class="hero-subtitle">
                此 ID 尚未被收录。返回 <RouterLink to="/" style="color: var(--accent-primary)">公司列表</RouterLink>。
            </p>
        </section>
    </div>
    <div v-else class="container">
        <TocSidebar />

        <!-- ================= HERO ================= -->
        <section class="detail-hero">
            <div class="detail-title-row">
                <h1>{{ data.name }}</h1>
                <span class="ticker-pill">{{ data.ticker }}</span>
            </div>
            <div class="detail-tagline">{{ data.tagline }}</div>
            <div class="price-row">
                <PriceCard v-for="c in data.priceCards" :key="c.label" :card="c" />
            </div>
        </section>

        <!-- ============= A1. 公司全景 ============= -->
        <section class="section" id="a1">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// A1 · COMPANY OVERVIEW</div>
                    <h2>公司全景</h2>
                </div>
                <p>从 Yandex 遗产到西方 Neocloud 龙头的重组路径。</p>
            </div>
            <div class="grid-2">
                <div class="card">
                    <h3>基本信息</h3>
                    <table class="table">
                        <tbody>
                            <tr><td>成立</td><td>{{ data.overview.founded }}</td></tr>
                            <tr><td>总部</td><td>{{ data.overview.headquarters }}</td></tr>
                            <tr><td>注册地</td><td>{{ data.overview.incorporation }}</td></tr>
                            <tr><td>员工规模</td><td>{{ data.overview.employees }}</td></tr>
                            <tr><td>上市</td><td>{{ data.overview.listing }}</td></tr>
                        </tbody>
                    </table>
                    <h3 style="margin-top: 28px">商业模式</h3>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.7">
                        {{ data.overview.businessModel }}
                    </p>
                </div>
                <div class="card">
                    <h3>营收构成（估算）</h3>
                    <div class="chart-container" style="height: 240px">
                        <ChartView :config="revenueMixConfig" />
                    </div>
                    <div class="hint-box" style="margin-top: 16px">
                        专属产能合同占比接近 85%，是收入可见性的核心来源，也是客户集中度风险的同一枚硬币。
                    </div>
                </div>
            </div>

            <div class="card" style="margin-top: 20px">
                <h3>关键沿革 · Timeline</h3>
                <div class="timeline">
                    <div v-for="h in data.overview.history" :key="h.year + h.event" class="timeline-row">
                        <div class="timeline-year">{{ h.year }}</div>
                        <div class="timeline-dot"></div>
                        <div class="timeline-body">
                            <span v-if="h.tag" class="badge cyan" style="margin-right: 8px">{{ h.tag }}</span>
                            {{ h.event }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ============= A2. 团队与股权 ============= -->
        <section class="section" id="a2">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// A2 · FOUNDER &amp; GOVERNANCE</div>
                    <h2>创始人 · 团队 · 股权结构</h2>
                </div>
                <p>AI 基础设施这条赛道，创始人兑现能力权重极高。</p>
            </div>

            <div class="grid-2" style="grid-template-columns: 1.5fr 1fr">
                <div class="card">
                    <h3>核心团队</h3>
                    <div class="team-list">
                        <div v-for="m in data.team" :key="m.name" class="team-row">
                            <div class="team-head">
                                <div>
                                    <div class="team-name">{{ m.name }}</div>
                                    <div class="team-role">{{ m.role }}<span v-if="m.since"> · 自 {{ m.since }}</span></div>
                                </div>
                                <div class="team-rating">
                                    <span v-for="n in 5" :key="n" :class="n <= m.rating ? 'on' : ''">★</span>
                                </div>
                            </div>
                            <div class="team-bio">{{ m.background }}</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>股东结构（估算）</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>股东</th>
                                <th style="text-align: left">持股</th>
                                <th>类型</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="s in data.shareholders" :key="s.name">
                                <td>
                                    <strong>{{ s.name }}</strong>
                                    <div v-if="s.note" style="font-size: 12px; color: var(--text-muted); margin-top: 4px">
                                        {{ s.note }}
                                    </div>
                                </td>
                                <td style="text-align: left">{{ s.pct }}</td>
                                <td>{{ s.type }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 关键人风险 -->
            <div class="card" style="margin-top: 20px">
                <h3>关键人风险 · Key Person Risk</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>姓名 / 角色</th>
                            <th style="text-align: left">职责</th>
                            <th style="text-align: left">离职概率</th>
                            <th style="text-align: left">离职影响</th>
                            <th style="text-align: left">缓释措施</th>
                            <th>严重度</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="k in data.keyPersonRisks" :key="k.name">
                            <td>
                                <strong>{{ k.name }}</strong>
                                <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono Variable', monospace; margin-top: 3px">
                                    {{ k.role }}
                                </div>
                            </td>
                            <td style="text-align: left">{{ k.role }}</td>
                            <td style="text-align: left">{{ k.departProb }}</td>
                            <td style="text-align: left; font-size: 12px">{{ k.departImpact }}</td>
                            <td style="text-align: left; font-size: 12px">{{ k.mitigation }}</td>
                            <td>
                                <span class="badge" :class="k.criticality === 'critical' || k.criticality === 'high' ? 'red' : k.criticality === 'medium' ? 'yellow' : 'green'">
                                    {{ k.criticality === 'critical' ? '极高' : k.criticality === 'high' ? '高' : k.criticality === 'medium' ? '中' : '低' }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- ============= B1. 事实锚点 ============= -->
        <section class="section" id="b1">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// B1 · FACT ANCHOR</div>
                    <h2>关键事实锚点</h2>
                </div>
                <p>基于 {{ data.date }} 已披露公开数据，是所有情景推演的基础。</p>
            </div>
            <div class="grid-2">
                <div class="card">
                    <h3><span class="num">A</span>财务与指引</h3>
                    <table class="table">
                        <tbody>
                            <tr v-for="f in facts" :key="f.k">
                                <td>{{ f.k }}</td>
                                <td>{{ f.v }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card">
                    <h3><span class="num">B</span>合同积压 · ~$46B</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>客户</th>
                                <th style="text-align: left">金额</th>
                                <th>年限</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="c in data.contracts" :key="c.customer">
                                <td>
                                    <strong>{{ c.customer }}</strong>
                                    <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px">
                                        {{ c.detail }}
                                    </div>
                                </td>
                                <td style="text-align: left">{{ c.amount }}</td>
                                <td>{{ typeof c.years === 'number' ? c.years + ' 年' : c.years }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="hint-box">
                        这是 Neocloud 行业最厚的收入可见性，也是最高的客户集中度 —— 硬币的两面。
                    </div>
                </div>
            </div>
        </section>

        <!-- ============= B2. 营收 vs CapEx ============= -->
        <section class="section" id="b2">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// B2 · GROWTH TRAJECTORY</div>
                    <h2>营收与 CapEx 轨迹</h2>
                </div>
                <p>2025 实际 vs 2026 指引：营收 6x，CapEx 9x，资本强度是核心观察点。</p>
            </div>
            <div class="card">
                <div class="chart-container tall">
                    <ChartView :config="revenueConfig" />
                </div>
            </div>
        </section>

        <!-- ============= B3. 盈利能力分析 ============= -->
        <section class="section" id="b3">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// B3 · PROFITABILITY</div>
                    <h2>盈利能力分析</h2>
                </div>
                <p>从重亏损到 EBITDA 转正的关键跃迁窗口。</p>
            </div>

            <div class="card" style="margin-bottom: 20px">
                <h3>核心叙事</h3>
                <p style="color: var(--text-primary); font-size: 15px; line-height: 1.7" v-html="data.profitability.narrative.replace(/\\*\\*(.+?)\\*\\*/g, '<strong style=&quot;color:var(--accent-primary)&quot;>$1</strong>')"></p>
            </div>

            <div class="card" style="margin-bottom: 20px">
                <h3>损益表 (Income Statement) · 2023 - 2028E</h3>
                <div style="overflow-x: auto">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>年份</th>
                                <th style="text-align: left">营收</th>
                                <th style="text-align: left">毛利率</th>
                                <th style="text-align: left">运营利润</th>
                                <th style="text-align: left">EBITDA</th>
                                <th style="text-align: left">EBITDA %</th>
                                <th style="text-align: left">净利润</th>
                                <th>EPS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="r in data.profitability.incomeStatement" :key="r.year">
                                <td>
                                    <strong>{{ r.year }}</strong>
                                    <span
                                        class="badge"
                                        :class="r.status === 'actual' ? 'green' : r.status === 'guidance' ? 'cyan' : 'yellow'"
                                        style="margin-left: 6px; font-size: 9px"
                                    >
                                        {{ r.status === 'actual' ? '实际' : r.status === 'guidance' ? '指引' : '预测' }}
                                    </span>
                                </td>
                                <td style="text-align: left">{{ r.revenue }}</td>
                                <td style="text-align: left">{{ r.grossMargin }}</td>
                                <td style="text-align: left">{{ r.opIncome }}</td>
                                <td style="text-align: left">{{ r.ebitda }}</td>
                                <td style="text-align: left">{{ r.ebitdaMargin }}</td>
                                <td style="text-align: left">{{ r.netIncome }}</td>
                                <td>{{ r.eps }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="grid-2" style="margin-bottom: 20px">
                <div class="card">
                    <h3>毛利率 · EBITDA · 运营 · 净利率演进</h3>
                    <div class="chart-container tall">
                        <ChartView :config="marginConfig" />
                    </div>
                </div>
                <div class="card">
                    <h3>盈利里程碑</h3>
                    <div class="timeline">
                        <div v-for="m in data.profitability.milestones" :key="m.year + m.milestone" class="timeline-row">
                            <div class="timeline-year">{{ m.year }}</div>
                            <div class="timeline-dot" :style="m.hit ? 'background: linear-gradient(135deg,#059669,#10b981); box-shadow: 0 0 0 4px var(--bg-surface), 0 0 0 5px rgba(5,150,105,0.25)' : ''"></div>
                            <div class="timeline-body">
                                <span class="badge" :class="m.hit ? 'green' : 'yellow'" style="margin-right: 8px">
                                    {{ m.hit ? '✓ 已达成' : '○ 未达成' }}
                                </span>
                                {{ m.milestone }}
                                <div v-if="m.note" style="font-size: 12px; color: var(--text-muted); margin-top: 4px">{{ m.note }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3>单位经济 (Unit Economics)</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>指标</th>
                                <th style="text-align: left">估算值</th>
                                <th>来源 / 备注</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="u in data.profitability.unitEconomics" :key="u.metric">
                                <td>{{ u.metric }}</td>
                                <td style="text-align: left"><strong style="color: var(--accent-primary)">{{ u.value }}</strong></td>
                                <td>{{ u.source }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card">
                    <h3>自由现金流路径</h3>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.7">{{ data.profitability.fcfPath }}</p>

                    <h4 style="font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif; font-size: 15px; margin-top: 20px; margin-bottom: 12px; color: var(--accent-red)">盈利兑现关键风险</h4>
                    <ul class="list-plain red">
                        <li v-for="k in data.profitability.keyRisks" :key="k">{{ k }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ============= B4. 现金流分析 ============= -->
        <section class="section" id="b4">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// B4 · CASH FLOW</div>
                    <h2>现金流三张表 · 烧钱与回血节奏</h2>
                </div>
                <p>利润能造假，现金流不能。Nebius 2025-2027 深度烧钱 → 2029-2030 回血。</p>
            </div>

            <div class="card" style="margin-bottom: 20px">
                <h3>核心叙事</h3>
                <p style="color: var(--text-primary); font-size: 15px; line-height: 1.7" v-html="data.cashFlow.narrative.replace(/\\*\\*(.+?)\\*\\*/g, '<strong style=&quot;color:var(--accent-primary)&quot;>$1</strong>')"></p>
            </div>

            <div class="card" style="margin-bottom: 20px">
                <h3>现金流时间线 ($M)</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>年份</th>
                            <th style="text-align: left">经营性现金流 OCF</th>
                            <th style="text-align: left">投资性现金流 ICF</th>
                            <th style="text-align: left">筹资性现金流 FCF</th>
                            <th>自由现金流 (OCF − CapEx)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="r in data.cashFlow.rows" :key="r.year">
                            <td>
                                <strong>{{ r.year }}</strong>
                                <span
                                    class="badge"
                                    :class="r.status === 'actual' ? 'green' : r.status === 'guidance' ? 'cyan' : 'yellow'"
                                    style="margin-left: 6px; font-size: 9px"
                                >
                                    {{ r.status === 'actual' ? '实际' : r.status === 'guidance' ? '指引' : '预测' }}
                                </span>
                            </td>
                            <td :style="{ textAlign: 'left', color: r.ocf < 0 ? 'var(--accent-red)' : 'var(--accent-green)' }">
                                {{ r.ocf > 0 ? '+' : '' }}${{ r.ocf }}M
                            </td>
                            <td :style="{ textAlign: 'left', color: r.icf < 0 ? 'var(--accent-red)' : 'var(--accent-green)' }">
                                ${{ r.icf }}M
                            </td>
                            <td :style="{ textAlign: 'left', color: r.fcf < 0 ? 'var(--accent-red)' : 'var(--accent-green)' }">
                                {{ r.fcf > 0 ? '+' : '' }}${{ r.fcf }}M
                            </td>
                            <td :style="{ color: r.freeCashFlow < 0 ? 'var(--accent-red)' : 'var(--accent-green)', fontWeight: 600 }">
                                {{ r.freeCashFlow > 0 ? '+' : '' }}${{ r.freeCashFlow }}M
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="hint-box" style="margin-top: 16px">{{ data.cashFlow.conversionNote }}</div>
            </div>

            <div class="card">
                <h3 style="color: var(--accent-red)">现金流关键风险</h3>
                <ul class="list-plain red">
                    <li v-for="k in data.cashFlow.keyRisks" :key="k">{{ k }}</li>
                </ul>
            </div>
        </section>

        <!-- ============= C1. 核心竞争优势 ============= -->
        <section class="section" id="c1">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// C1 · COMPETITIVE ADVANTAGES</div>
                    <h2>核心竞争优势</h2>
                </div>
                <p>每条优势附带强度评级与外部证据。</p>
            </div>
            <div class="grid-2">
                <div v-for="a in data.advantages" :key="a.title" class="card advantage-card">
                    <h3 style="color: var(--accent-green)">
                        <span class="num">✓</span>{{ a.title }}
                    </h3>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.7">{{ a.body }}</p>
                    <div v-if="a.evidence" class="hint-box" style="margin-top: 14px">
                        <strong style="color: var(--accent-primary); font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif">证据：</strong>{{ a.evidence }}
                    </div>
                </div>
            </div>
        </section>

        <!-- ============= C2. 结构性劣势 ============= -->
        <section class="section" id="c2">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// C2 · STRUCTURAL DISADVANTAGES</div>
                    <h2>结构性劣势</h2>
                </div>
                <p>与可解决的"风险"不同，这些是公司模式本身的约束。</p>
            </div>
            <div class="grid-2">
                <div v-for="d in data.disadvantages" :key="d.title" class="card disadvantage-card">
                    <h3 style="color: var(--accent-red)"><span class="num">✗</span>{{ d.title }}</h3>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.7">{{ d.body }}</p>
                    <div v-if="d.evidence" class="hint-box" style="margin-top: 14px">
                        <strong style="color: var(--accent-red); font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif">证据：</strong>{{ d.evidence }}
                    </div>
                </div>
            </div>
        </section>

        <!-- ============= C2b. Bear Playbook ============= -->
        <section class="section" id="c2b">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// C2b · BEAR PLAYBOOK</div>
                    <h2>空头剧本 · 悲观情景如何逐步兑现</h2>
                </div>
                <p>如果 bears 是对的，ruin 会怎么一步一步发生？提前识别就能提前离场。</p>
            </div>
            <div class="card">
                <h3>{{ data.bearPlaybook.scenario }}</h3>
                <div class="bear-timeline">
                    <div v-for="(step, idx) in data.bearPlaybook.steps" :key="idx" class="bear-step">
                        <div class="bear-step-marker">{{ idx + 1 }}</div>
                        <div class="bear-step-body">
                            <div class="bear-step-when">{{ step.when }}</div>
                            <div class="bear-step-event">{{ step.event }}</div>
                            <div class="bear-step-signal">
                                <strong style="color: var(--accent-primary)">识别信号：</strong>{{ step.signal }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hint-box" style="margin-top: 20px; border-left-color: var(--accent-red); border-left-width: 3px">
                    <strong style="color: var(--accent-red); font-family: 'Space Grotesk Variable', sans-serif">退出触发器：</strong>
                    {{ data.bearPlaybook.exitTrigger }}
                </div>
            </div>
        </section>

        <!-- ============= D1. 短期催化剂 ============= -->
        <section class="section" id="d1">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// D1 · SHORT-TERM CATALYSTS</div>
                    <h2>短期催化剂日历 · 3-18 个月</h2>
                </div>
                <p>影响股价的具体事件及概率、方向、幅度。</p>
            </div>
            <div class="card">
                <table class="table">
                    <thead>
                        <tr>
                            <th>时点</th>
                            <th style="text-align: left">事件</th>
                            <th style="text-align: left">方向</th>
                            <th style="text-align: left">概率</th>
                            <th>预期幅度</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="c in data.shortTermCatalysts" :key="c.event">
                            <td><strong>{{ c.when }}</strong></td>
                            <td style="text-align: left">{{ c.event }}</td>
                            <td style="text-align: left">
                                <span class="badge" :class="impactClass[c.impact]">{{ impactLabel[c.impact] }}</span>
                            </td>
                            <td style="text-align: left">{{ c.probability }}</td>
                            <td>{{ c.magnitude }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- ============= D2. 长期增长驱动 ============= -->
        <section class="section" id="d2">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// D2 · LONG-TERM DRIVERS</div>
                    <h2>长期增长驱动 · 3-10 年</h2>
                </div>
                <p>决定 10 年终局的结构性力量。</p>
            </div>
            <div class="grid-2">
                <div v-for="d in data.longTermDrivers" :key="d.name" class="card driver-card">
                    <div class="driver-head">
                        <h3 style="margin-bottom: 0">{{ d.name }}</h3>
                        <span class="badge purple">{{ d.horizon }}</span>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.7; margin-top: 12px">
                        {{ d.body }}
                    </p>
                    <div class="hint-box" style="margin-top: 14px">
                        <strong style="color: var(--accent-primary); font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif">使能条件：</strong>{{ d.enabling }}
                    </div>
                </div>
            </div>
        </section>

        <!-- ============= E1. 风险矩阵 ============= -->
        <section class="section" id="e1">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// E1 · RISK MATRIX</div>
                    <h2>分类风险矩阵</h2>
                </div>
                <p>按类别与严重度分组，每条给出缓释措施（若有）。</p>
            </div>
            <div class="risk-grid">
                <div v-for="r in data.riskMatrix" :key="r.category" class="card risk-card" :class="'risk-' + r.level">
                    <div class="risk-head">
                        <h3 style="margin-bottom: 4px">{{ r.category }}</h3>
                        <span class="badge" :class="riskClass[r.level]">{{ riskLabel[r.level] }}</span>
                    </div>
                    <div class="risk-summary">{{ r.summary }}</div>
                    <ul class="risk-list">
                        <li v-for="it in r.items" :key="it.name">
                            <div class="risk-name">{{ it.name }}</div>
                            <div class="risk-body">{{ it.body }}</div>
                            <div v-if="it.mitigation" class="risk-mit">
                                <span class="mit-label">缓释：</span>{{ it.mitigation }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ============= F1. 多空简报 ============= -->
        <section class="section" id="f1">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// F1 · BULL &amp; BEAR SHORT</div>
                    <h2>多空快速简报</h2>
                </div>
                <p>给时间紧张的读者的浓缩版。完整论证见 C1 / C2。</p>
            </div>
            <div class="grid-2">
                <div class="card accent-cyan">
                    <h3 style="color: var(--accent-green)"><span class="num">▲</span>看多 Bull Case</h3>
                    <ul class="list-plain green">
                        <li v-for="p in data.bullPoints" :key="p.title">
                            <strong>{{ p.title }}</strong> — {{ p.body }}
                        </li>
                    </ul>
                </div>
                <div class="card accent-purple">
                    <h3 style="color: var(--accent-red)"><span class="num">▼</span>看空 Bear Case</h3>
                    <ul class="list-plain red">
                        <li v-for="p in data.bearPoints" :key="p.title">
                            <strong>{{ p.title }}</strong> — {{ p.body }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ============= F1b. 市场 TAM + 市占率演进 ============= -->
        <section class="section" id="f1b">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// F1b · MARKET TAM &amp; SHARE</div>
                    <h2>赛道规模 · 现在 vs 未来 · 市占率轨迹</h2>
                </div>
                <p>回答三个问题：赛道现在多大？未来会多大？这家公司能吃下多少？</p>
            </div>

            <div class="card" style="margin-bottom: 20px">
                <h3>核心叙事</h3>
                <p style="color: var(--text-primary); font-size: 15px; line-height: 1.7" v-html="data.competitiveLandscape.tam.narrative.replace(/\\*\\*(.+?)\\*\\*/g, '<strong style=&quot;color:var(--accent-primary)&quot;>$1</strong>')"></p>
            </div>

            <div class="grid-4" style="margin-bottom: 20px">
                <div v-for="n in data.competitiveLandscape.tam.keyNumbers" :key="n.label" class="price-card">
                    <div class="l">{{ n.label }}</div>
                    <div class="v" :class="n.cls">{{ n.value }}</div>
                    <div class="s">{{ n.sub }}</div>
                </div>
            </div>

            <div class="grid-2" style="margin-bottom: 20px">
                <div class="card">
                    <h3>TAM 三层规模（对数坐标）</h3>
                    <div class="chart-container tall">
                        <ChartView :config="tamConfig" />
                    </div>
                    <div class="hint-box" style="margin-top: 12px">
                        对数坐标下能同时看清 **$90B Nebius 营收** 和 **$4T 总 TAM**。三条柱的比例反映赛道集中度 —— Neocloud 占总 AI 基建从 4%（2024）涨到 ~15%（2030），结构性红利。
                    </div>
                </div>
                <div class="card">
                    <h3>Nebius 在 Neocloud 的市占率轨迹</h3>
                    <div class="chart-container tall">
                        <ChartView :config="shareConfig" />
                    </div>
                    <div class="hint-box" style="margin-top: 12px">
                        红色虚线 = 要实现 **10 倍回报**对应的 Neocloud 市占（15%）。Nebius 2026 跳到 ~10%，2028-2030 能否守住 10-15% 决定是否真的 10-bagger。
                    </div>
                </div>
            </div>

            <div class="card">
                <h3>赛道规模 · 历年数据表</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>年份</th>
                            <th style="text-align: left">AI 基建总 TAM</th>
                            <th style="text-align: left">Neocloud 子赛道</th>
                            <th style="text-align: left">Neocloud 占总 TAM</th>
                            <th style="text-align: left">Nebius 营收</th>
                            <th>Nebius / Neocloud 市占</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="p in data.competitiveLandscape.tam.points" :key="p.year">
                            <td>
                                <strong>{{ p.year }}</strong>
                                <span
                                    class="badge"
                                    :class="p.status === 'actual' ? 'green' : 'yellow'"
                                    style="margin-left: 6px; font-size: 9px"
                                >
                                    {{ p.status === 'actual' ? '实际' : '预测' }}
                                </span>
                            </td>
                            <td style="text-align: left">${{ p.totalTam >= 1000 ? (p.totalTam / 1000).toFixed(1) + 'T' : p.totalTam + 'B' }}</td>
                            <td style="text-align: left">${{ p.neocloudTam }}B</td>
                            <td style="text-align: left">{{ ((p.neocloudTam / p.totalTam) * 100).toFixed(1) }}%</td>
                            <td style="text-align: left">${{ p.selfRevenue < 1 ? (p.selfRevenue * 1000).toFixed(0) + 'M' : p.selfRevenue + 'B' }}</td>
                            <td>{{ ((p.selfRevenue / p.neocloudTam) * 100).toFixed(1) }}%</td>
                        </tr>
                    </tbody>
                </table>
                <div class="hint-box" style="margin-top: 16px">
                    <strong style="color: var(--text-ink); font-family: 'Space Grotesk Variable', sans-serif">数据来源：</strong>
                    {{ data.competitiveLandscape.tam.sourcesNote }}
                </div>
            </div>
        </section>

        <!-- ============= F2. 竞争格局总览 ============= -->
        <section class="section" id="f2">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// F2 · COMPETITIVE LANDSCAPE</div>
                    <h2>竞争格局总览</h2>
                </div>
                <p>三层市场：超大规模云 · Neocloud · 垂直专家。</p>
            </div>

            <div class="grid-2" style="grid-template-columns: 1fr 1.2fr; margin-bottom: 20px">
                <div class="card">
                    <h3>行业格局判断</h3>
                    <p style="color: var(--text-primary); font-size: 15px; line-height: 1.7">{{ data.competitiveLandscape.summary }}</p>

                    <h4 style="font-family: 'Space Grotesk Variable', sans-serif; font-size: 15px; margin-top: 20px; margin-bottom: 12px; color: var(--text-ink)">
                        {{ data.name.split(' ')[0] }} 的"形状"
                    </h4>
                    <ul class="list-plain" style="gap: 6px">
                        <li style="padding: 8px 12px; font-size: 13px">
                            <strong style="color: var(--accent-green)">✓ 尖刺 (结构性优势)：</strong>
                            英伟达绑定、欧洲/主权定位、资产负债表、增速
                        </li>
                        <li style="padding: 8px 12px; font-size: 13px; border-left-color: var(--accent-red)">
                            <strong style="color: var(--accent-red)">✗ 凹陷 (结构性短板)：</strong>
                            收入规模、盈利能力、客户集中度
                        </li>
                    </ul>
                </div>

                <div class="card">
                    <h3>8 维能力雷达图 · vs {{ data.competitiveLandscape.radar.peer1Name }} · {{ data.competitiveLandscape.radar.peer2Name }}</h3>
                    <div class="chart-container tall">
                        <ChartView :config="radarConfig" />
                    </div>
                    <div class="hint-box" style="margin-top: 12px">
                        {{ data.competitiveLandscape.radar.note }}
                    </div>
                </div>
            </div>

            <div class="card" style="margin-bottom: 20px">
                <h3>八家主要对手全景对照</h3>
                <div style="overflow-x: auto">
                    <table class="table comp-table">
                        <thead>
                            <tr>
                                <th>公司</th>
                                <th style="text-align: left">类型</th>
                                <th style="text-align: left">2026E 营收</th>
                                <th style="text-align: left">AI 营收</th>
                                <th style="text-align: left">GPU 队列</th>
                                <th style="text-align: left">合同积压</th>
                                <th style="text-align: left">EBITDA %</th>
                                <th style="text-align: left">市值</th>
                                <th style="text-align: left">英伟达绑定</th>
                                <th>对 NBIS 威胁</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="c in data.competitiveLandscape.competitors" :key="c.name" :class="c.name.includes('自身') ? 'self-row' : ''">
                                <td>
                                    <strong>{{ c.name }}</strong>
                                    <div v-if="c.ticker" style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono Variable', 'JetBrains Mono', monospace; margin-top: 2px">{{ c.ticker }}</div>
                                </td>
                                <td style="text-align: left">
                                    <span class="badge" :class="competitorTypeClass[c.type]">{{ competitorTypeLabel[c.type] }}</span>
                                </td>
                                <td style="text-align: left">{{ c.revenue2026E }}</td>
                                <td style="text-align: left">{{ c.aiRevenue }}</td>
                                <td style="text-align: left">{{ c.gpuFleet }}</td>
                                <td style="text-align: left">{{ c.backlog }}</td>
                                <td style="text-align: left">{{ c.ebitdaMargin }}</td>
                                <td style="text-align: left">{{ c.marketCap }}</td>
                                <td style="text-align: left">
                                    <span class="nvidia-stars">
                                        <span v-for="n in 5" :key="n" :class="n <= c.nvidiaLevel ? 'on' : ''">★</span>
                                    </span>
                                </td>
                                <td>
                                    <span v-if="!c.name.includes('自身')" class="badge" :class="threatClass[c.threat]">{{ threatLabel[c.threat] }}</span>
                                    <span v-else class="badge cyan">—</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="grid-2" style="margin-top: 24px; gap: 12px">
                    <div v-for="c in data.competitiveLandscape.competitors.slice(1)" :key="c.name" class="comp-detail">
                        <div class="comp-detail-head">
                            <strong>{{ c.name }}</strong>
                            <span class="badge" :class="threatClass[c.threat]">{{ threatLabel[c.threat] }}</span>
                        </div>
                        <div class="comp-detail-body">
                            <div><strong style="color: var(--accent-green); font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif">优势：</strong>{{ c.strength }}</div>
                            <div style="margin-top: 6px"><strong style="color: var(--accent-red); font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif">短板：</strong>{{ c.weakness }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid-2" style="margin-bottom: 20px">
                <div class="card">
                    <h3>2026E Neocloud + AI 云市场份额（估算）</h3>
                    <div class="chart-container tall">
                        <ChartView :config="marketShareConfig" />
                    </div>
                    <div class="hint-box" style="margin-top: 12px">
                        Nebius 约占 ~2%，与 Lambda/Crusoe 同属第二梯队。CoreWeave 7%、甲骨文 8% 是 Neocloud/新云第一梯队。要做到 10x ($400B+)，市占至少需爬到 10-15%。
                    </div>
                </div>
                <div class="card">
                    <h3>十维定位矩阵</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>维度</th>
                                <th style="text-align: left">Nebius</th>
                                <th style="text-align: left">行业均值</th>
                                <th style="text-align: left">领先方</th>
                                <th>评分</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="p in data.competitiveLandscape.positioning" :key="p.dimension">
                                <td>{{ p.dimension }}</td>
                                <td style="text-align: left">{{ p.nebius }}</td>
                                <td style="text-align: left">{{ p.industryAvg }}</td>
                                <td style="text-align: left">{{ p.leader }}</td>
                                <td>
                                    <span class="badge" :class="p.nebiusStrong ? 'green' : 'red'">
                                        {{ p.nebiusStrong ? '✓ 强' : '✗ 弱' }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card" style="margin-bottom: 20px">
                <h3>Win-Loss 分析 · 不同客户场景下谁赢</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>场景</th>
                            <th style="text-align: left; color: var(--accent-green)">赢家</th>
                            <th style="text-align: left; color: var(--accent-red)">输家</th>
                            <th>原因</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="w in data.competitiveLandscape.winLoss" :key="w.scenario">
                            <td><strong>{{ w.scenario }}</strong></td>
                            <td style="text-align: left">{{ w.winners }}</td>
                            <td style="text-align: left">{{ w.losers }}</td>
                            <td style="text-align: left; font-size: 13px">{{ w.reasoning }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card">
                <h3>结构性趋势 · 2026-2029</h3>
                <p style="color: var(--text-primary); font-size: 15px; line-height: 1.8">{{ data.competitiveLandscape.structuralTrend }}</p>
            </div>
        </section>

        <!-- ============= F2b. vs CoreWeave 深度对照 ============= -->
        <section class="section" id="f2b">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// F2b · DEEP DIVE: vs COREWEAVE</div>
                    <h2>vs {{ data.peerName }} · 头号对手深度对照</h2>
                </div>
                <p>CoreWeave 是唯一规模可比、商业模式几乎一致的对手。</p>
            </div>
            <div class="card">
                <table class="table">
                    <thead>
                        <tr>
                            <th>指标</th>
                            <th style="text-align: left">Nebius</th>
                            <th style="text-align: left">{{ data.peerName }}</th>
                            <th>领先方</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="r in data.coreWeaveCompare" :key="r.metric">
                            <td>{{ r.metric }}</td>
                            <td style="text-align: left">{{ r.nbis }}</td>
                            <td style="text-align: left">{{ r.cwv }}</td>
                            <td>
                                <span class="badge" :class="r.winner === 'nbis' ? 'cyan' : 'purple'">
                                    {{ r.winner === 'nbis' ? 'NBIS' : 'CWV' }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- ============= F3. 十倍基因 ============= -->
        <section class="section" id="f3">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// F3 · 10X GENE</div>
                    <h2>十倍基因差距扫描</h2>
                </div>
                <p>十倍股共同点：<strong style="color: var(--accent-primary)">规模化杠杆 + 护城河 + 再投资空间</strong>三项缺一不可。</p>
            </div>
            <div class="card">
                <table class="table">
                    <thead>
                        <tr>
                            <th>维度</th>
                            <th style="text-align: left">十倍股该有的表现</th>
                            <th style="text-align: left">Nebius 现状</th>
                            <th>差距</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="g in data.tenXGene" :key="g.dim">
                            <td>{{ g.dim }}</td>
                            <td style="text-align: left">{{ g.tenBagger }}</td>
                            <td style="text-align: left">{{ g.nebius }}</td>
                            <td><span class="badge" :class="g.status">{{ gapLabel[g.status] }}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- ============= G1. 情景推演 (5Y + 10Y) ============= -->
        <section class="section" id="g1">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// G1 · 5Y &amp; 10Y SCENARIOS</div>
                    <h2>双时间轴情景推演</h2>
                </div>
                <p>四档情景同一概率，分别落在 5 年和 10 年两个时间点。概率为本分析主观判断。</p>
            </div>
            <div class="grid-scenario">
                <div class="scenario-list">
                    <ScenarioRow v-for="s in data.scenarios" :key="s.name" :scenario="s" />
                </div>
                <div class="card">
                    <h3>概率加权分布</h3>
                    <div class="chart-container">
                        <ChartView :config="scenarioConfig" />
                    </div>
                </div>
            </div>

            <div class="card" style="margin-top: 20px">
                <h3>5Y vs 10Y 市值中值对比</h3>
                <div class="chart-container tall">
                    <ChartView :config="horizonCompareConfig" />
                </div>
                <div class="hint-box" style="margin-top: 12px">
                    对数坐标 —— 读法：红色虚线是当前 $40B，各情景 5Y（绿）和 10Y（蓝）达到的位置。
                    10Y 与 5Y 的差值体现"后半程能否继续放大"。乐观情景 10Y / 5Y 比值最大（$1.2T / $360B ≈ 3.3x），说明这档是真正的"后半段加速"。
                </div>
            </div>
        </section>

        <!-- ============= G2. 加权期望 5Y + 10Y ============= -->
        <section class="section" id="g2">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// G2 · WEIGHTED EXPECTATION (5Y + 10Y)</div>
                    <h2>双时间轴加权期望</h2>
                </div>
                <p>5 年视角拿回报节奏，10 年视角看终局 —— 两个数字一起看才能判断买入时点。</p>
            </div>
            <div class="card" style="margin-bottom: 20px">
                <h3>计算过程</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>情景</th>
                            <th style="text-align: left">概率</th>
                            <th style="text-align: left">5Y 中值 ($B)</th>
                            <th style="text-align: left">10Y 中值 ($B)</th>
                            <th style="text-align: left">5Y 贡献</th>
                            <th>10Y 贡献</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="b in data.weightedExpectation.breakdown" :key="b.scenario">
                            <td>{{ b.scenario }}</td>
                            <td style="text-align: left">{{ b.prob }}%</td>
                            <td style="text-align: left">${{ b.y5Mid }}B</td>
                            <td style="text-align: left">${{ b.y10Mid }}B</td>
                            <td style="text-align: left">${{ b.y5Contrib }}B</td>
                            <td>${{ b.y10Contrib }}B</td>
                        </tr>
                        <tr style="background: var(--bg-elevated)">
                            <td><strong>合计期望</strong></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style="text-align: left">
                                <strong style="color: var(--accent-green)">${{ data.weightedExpectation.y5.expectedMcap }}B</strong>
                            </td>
                            <td>
                                <strong style="color: var(--accent-primary)">${{ data.weightedExpectation.y10.expectedMcap }}B</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="grid-2">
                <div class="card accent-cyan exp-card">
                    <div class="exp-inner">
                        <div class="exp-tag">WEIGHTED 5Y EXPECTATION</div>
                        <div class="exp-big">${{ data.weightedExpectation.y5.expectedMcap }}B</div>
                        <div class="exp-caption">5 年期望市值</div>
                        <div class="exp-foot">
                            <div class="exp-stat">
                                <div class="el">MULTIPLIER</div>
                                <div class="ev cyan">{{ data.weightedExpectation.y5.multiplier }}x</div>
                            </div>
                            <div class="exp-stat">
                                <div class="el">CAGR</div>
                                <div class="ev purple">{{ data.weightedExpectation.y5.cagr }}%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card accent-purple exp-card">
                    <div class="exp-inner">
                        <div class="exp-tag">WEIGHTED 10Y EXPECTATION</div>
                        <div class="exp-big">${{ data.weightedExpectation.y10.expectedMcap }}B</div>
                        <div class="exp-caption">10 年期望市值</div>
                        <div class="exp-foot">
                            <div class="exp-stat">
                                <div class="el">MULTIPLIER</div>
                                <div class="ev cyan">{{ data.weightedExpectation.y10.multiplier }}x</div>
                            </div>
                            <div class="exp-stat">
                                <div class="el">CAGR</div>
                                <div class="ev purple">{{ data.weightedExpectation.y10.cagr }}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 下行风险面板 -->
        <section class="section" id="g2b">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// G2b · DOWNSIDE METRICS</div>
                    <h2>下行风险量化</h2>
                </div>
                <p>期望值告诉你"平均能赢多少"，下行告诉你"最坏能输多少"。两个都看才算完整。</p>
            </div>
            <div class="card">
                <p style="color: var(--text-primary); font-size: 15px; line-height: 1.7" v-html="data.downsideMetrics.narrative.replace(/\\*\\*(.+?)\\*\\*/g, '<strong style=&quot;color:var(--accent-red)&quot;>$1</strong>')"></p>
                <div class="grid-4" style="margin-top: 20px">
                    <div class="bench-cell">
                        <div class="el">情景标准差</div>
                        <div class="ev" style="color: var(--accent-red)">±${{ data.downsideMetrics.scenarioStdDev }}B</div>
                    </div>
                    <div class="bench-cell">
                        <div class="el">Sharpe-like</div>
                        <div class="ev" style="color: var(--accent-primary)">{{ data.downsideMetrics.sharpeLike }}</div>
                    </div>
                    <div class="bench-cell">
                        <div class="el">P(5Y 亏损 30%+)</div>
                        <div class="ev" style="color: var(--accent-red)">{{ data.downsideMetrics.probLoss30Pct5Y }}%</div>
                    </div>
                    <div class="bench-cell">
                        <div class="el">最大回撤估计</div>
                        <div class="ev" style="color: var(--accent-red); font-size: 20px">{{ data.downsideMetrics.maxDrawdownEstimate }}</div>
                    </div>
                </div>
                <div class="hint-box" style="margin-top: 16px; border-left-color: var(--accent-red)">
                    <strong style="color: var(--accent-red); font-family: 'Space Grotesk Variable', sans-serif">下行 vs 上行：</strong>
                    {{ data.downsideMetrics.downsideToUpsideRatio }}
                </div>
            </div>
        </section>

        <!-- ============= G3. 估值框架 ============= -->
        <section class="section" id="g3">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// G3 · VALUATION FRAMEWORK</div>
                    <h2>估值框架</h2>
                </div>
                <p>多口径估值 + Sum-of-the-Parts 校验。</p>
            </div>
            <div class="grid-2">
                <div class="card">
                    <h3>估值倍数</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>指标</th>
                                <th style="text-align: left">Nebius</th>
                                <th style="text-align: left">对标</th>
                                <th>判定</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="m in data.valuation.metrics" :key="m.metric">
                                <td>{{ m.metric }}</td>
                                <td style="text-align: left">{{ m.value }}</td>
                                <td style="text-align: left">{{ m.benchmark }}</td>
                                <td>
                                    <span class="badge" :class="m.read === 'cheap' ? 'green' : m.read === 'rich' ? 'red' : 'yellow'">
                                        {{ m.read === 'cheap' ? '偏低' : m.read === 'rich' ? '偏高' : '合理' }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card">
                    <h3>Sum-of-the-Parts</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>组成</th>
                                <th style="text-align: left">估值</th>
                                <th>方法 / 备注</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="s in data.valuation.sotp" :key="s.item">
                                <td>
                                    <strong>{{ s.item }}</strong>
                                    <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px">{{ s.note }}</div>
                                </td>
                                <td style="text-align: left">{{ s.valuation }}</td>
                                <td>{{ s.method }}</td>
                            </tr>
                            <tr style="background: var(--bg-elevated)">
                                <td><strong>合计 SOTP</strong></td>
                                <td style="text-align: left">
                                    <strong style="color: var(--accent-primary)">{{ data.valuation.sotpTotal }}</strong>
                                </td>
                                <td>—</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="hint-box" style="margin-top: 16px">{{ data.valuation.sotpPerShare }}</div>
                </div>
            </div>
        </section>

        <!-- ============= G3b. 历史估值分位 ============= -->
        <section class="section" id="g3b">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// G3b · HISTORICAL VALUATION</div>
                    <h2>历史估值分位</h2>
                </div>
                <p>当前估值在自己历史中是什么位置？贵还是便宜？</p>
            </div>
            <div class="card">
                <p style="color: var(--text-primary); font-size: 15px; line-height: 1.7" v-html="data.historicalValuation.narrative.replace(/\\*\\*(.+?)\\*\\*/g, '<strong style=&quot;color:var(--accent-primary)&quot;>$1</strong>')"></p>
                <div class="chart-container tall" style="margin-top: 16px">
                    <ChartView :config="historicalValConfig" />
                </div>
                <div class="hint-box" style="margin-top: 12px">
                    当前位于 <strong style="color: var(--accent-red); font-family: 'Space Grotesk Variable', sans-serif">{{ data.historicalValuation.currentPercentile }} 分位</strong>
                    ——
                    <span v-if="data.historicalValuation.verdict === 'cheap'" style="color: var(--accent-green)">便宜（历史低位）</span>
                    <span v-else-if="data.historicalValuation.verdict === 'fair'" style="color: var(--accent-yellow)">合理</span>
                    <span v-else style="color: var(--accent-red)">偏贵（历史高位）</span>
                </div>
            </div>
        </section>

        <!-- ============= G4. Watchlist ============= -->
        <section class="section" id="g4">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// G4 · WATCHLIST</div>
                    <h2>命运分岔点 · 季度跟踪</h2>
                </div>
                <p>每季度刷新这 5 项指标，判定走在哪条轨迹上。</p>
            </div>
            <div class="card">
                <table class="table">
                    <thead>
                        <tr>
                            <th>指标</th>
                            <th style="text-align: left; color: var(--accent-green)">10x 轨迹信号</th>
                            <th style="text-align: left; color: var(--accent-yellow)">基线信号</th>
                            <th style="text-align: right; color: var(--accent-red)">落后信号</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="w in data.watchlist" :key="w.indicator">
                            <td><strong>{{ w.indicator }}</strong></td>
                            <td style="text-align: left">{{ w.strongSignal }}</td>
                            <td style="text-align: left">{{ w.baseSignal }}</td>
                            <td style="text-align: right">{{ w.weakSignal }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- ============= G5. 敏感度 · Tornado ============= -->
        <section class="section" id="g5">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// G5 · SENSITIVITY</div>
                    <h2>敏感度 · Tornado 图</h2>
                </div>
                <p>哪个变量对 10Y 期望市值影响最大？排序后盯住最敏感的 3 个。</p>
            </div>
            <div class="card">
                <p style="color: var(--text-primary); font-size: 15px; line-height: 1.7">{{ data.sensitivity.narrative }}</p>
                <div class="chart-container tall" style="margin-top: 16px; height: 420px">
                    <ChartView :config="sensitivityConfig" />
                </div>
                <div class="hint-box" style="margin-top: 16px; border-left-color: var(--accent-primary)" v-html="data.sensitivity.takeaway.replace(/\\*\\*(.+?)\\*\\*/g, '<strong style=&quot;color:var(--accent-primary)&quot;>$1</strong>')"></div>
            </div>
        </section>

        <!-- ============= 子公司 ============= -->
        <section class="section" id="subs">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// SUBSIDIARY OPTIONALITY</div>
                    <h2>子公司期权价值</h2>
                </div>
                <p>非核心资产合计 ~$5B，悲观情景下提供下行垫。</p>
            </div>
            <div class="grid-4">
                <div v-for="s in data.subsidiaries" :key="s.name" class="sub-card">
                    <h4>{{ s.name }}</h4>
                    <div class="sub-desc">{{ s.desc }}</div>
                    <div class="sub-foot">
                        <div>
                            <div class="el">持股</div>
                            <div class="ev">{{ s.stake }}</div>
                        </div>
                        <div style="text-align: right">
                            <div class="el">价值</div>
                            <div class="ev cyan">{{ s.value }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ============= 华尔街 ============= -->
        <section class="section" id="analysts">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// ANALYST TARGETS</div>
                    <h2>华尔街目标价</h2>
                </div>
                <p>当前股价 $166.77 已接近共识 $163，风险收益比不再对称。</p>
            </div>
            <div class="card">
                <div class="chart-container">
                    <ChartView :config="analystConfig" />
                </div>
            </div>
        </section>

        <!-- ============= H1. 投资建议 ============= -->
        <section class="section" id="h1">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// H1 · RECOMMENDATION</div>
                    <h2>投资建议</h2>
                </div>
                <p>结构化输出：评级、仓位、加仓区、止损条件。</p>
            </div>
            <div class="card rec-card">
                <div class="rec-head">
                    <div>
                        <div class="rec-label">最终评级</div>
                        <div class="rec-rating">{{ data.recommendation.rating }}</div>
                    </div>
                    <div class="rec-badge" :class="data.recommendation.ratingCls">
                        {{ data.recommendation.ratingCls === 'bullish' ? 'BUY' : data.recommendation.ratingCls === 'neutral' ? 'HOLD' : 'SELL' }}
                    </div>
                </div>

                <p class="rec-thesis">{{ data.recommendation.thesis }}</p>

                <div class="rec-grid">
                    <div class="rec-cell">
                        <div class="el">时间跨度</div>
                        <div class="ev">{{ data.recommendation.timeHorizon }}</div>
                    </div>
                    <div class="rec-cell">
                        <div class="el">建议仓位</div>
                        <div class="ev">{{ data.recommendation.positionSize }}</div>
                    </div>
                    <div class="rec-cell">
                        <div class="el">加仓区间</div>
                        <div class="ev" style="color: var(--accent-green)">{{ data.recommendation.addingZone }}</div>
                    </div>
                    <div class="rec-cell">
                        <div class="el">重新评估触发</div>
                        <div class="ev" style="color: var(--accent-red); font-size: 14px">{{ data.recommendation.stopLoss }}</div>
                    </div>
                </div>

                <h4 style="font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif; font-size: 16px; margin-top: 24px; margin-bottom: 12px">
                    关键假设（任一被证伪 → 重新评估）
                </h4>
                <ul class="list-plain">
                    <li v-for="a in data.recommendation.keyAssumptions" :key="a">{{ a }}</li>
                </ul>
            </div>

            <!-- 持仓规模推导 -->
            <div class="card" style="margin-top: 20px">
                <h3>仓位大小推导 · {{ data.recommendation.sizingFormula.method }}</h3>
                <div class="formula" style="margin-bottom: 16px">
                    {{ data.recommendation.sizingFormula.formula }}
                </div>
                <div class="grid-4" style="margin-bottom: 16px">
                    <div v-for="i in data.recommendation.sizingFormula.inputs" :key="i.label" class="bench-cell">
                        <div class="el">{{ i.label }}</div>
                        <div class="ev" :style="{ fontSize: '20px', color: i.label.includes('Kelly') ? 'var(--accent-primary)' : 'var(--text-ink)' }">
                            {{ i.value }}
                        </div>
                    </div>
                </div>
                <div style="padding: 16px; background: var(--bg-elevated); border-radius: 8px; border-left: 3px solid var(--accent-primary); font-size: 14px; line-height: 1.7; color: var(--text-secondary)">
                    <strong style="color: var(--accent-primary); font-family: 'Space Grotesk Variable', sans-serif">推导：</strong>
                    {{ data.recommendation.sizingFormula.reasoning }}
                </div>
                <div style="text-align: center; margin-top: 20px">
                    <div style="font-family: 'JetBrains Mono Variable', monospace; font-size: 11px; color: var(--text-muted); letter-spacing: 0.15em">FINAL POSITION SIZE</div>
                    <div style="font-family: 'Space Grotesk Variable', sans-serif; font-size: 36px; font-weight: 700; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-top: 8px">
                        {{ data.recommendation.sizingFormula.computedSize }}
                    </div>
                </div>
            </div>
        </section>

        <!-- ============= H2. 组合相关性 ============= -->
        <section class="section" id="h2">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// H2 · PORTFOLIO CORRELATION</div>
                    <h2>组合相关性 · 对冲建议</h2>
                </div>
                <p>Nebius 与组合内其他资产的 beta / correlation。单股分析不够，还得放到组合视角。</p>
            </div>
            <div class="card">
                <p style="color: var(--text-primary); font-size: 15px; line-height: 1.7" v-html="data.correlation.narrative.replace(/\\*\\*(.+?)\\*\\*/g, '<strong style=&quot;color:var(--accent-primary)&quot;>$1</strong>')"></p>
                <table class="table" style="margin-top: 20px">
                    <thead>
                        <tr>
                            <th>资产</th>
                            <th style="text-align: left">Beta (vs NBIS)</th>
                            <th style="text-align: left">相关系数</th>
                            <th style="text-align: left">对冲价值</th>
                            <th>备注</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="r in data.correlation.rows" :key="r.asset">
                            <td><strong>{{ r.asset }}</strong></td>
                            <td style="text-align: left">{{ r.beta }}</td>
                            <td :style="{ textAlign: 'left', color: r.correlation < 0 ? 'var(--accent-green)' : r.correlation > 0.6 ? 'var(--accent-red)' : 'var(--accent-yellow)', fontWeight: 600 }">
                                {{ r.correlation > 0 ? '+' : '' }}{{ r.correlation.toFixed(2) }}
                            </td>
                            <td style="text-align: left">
                                <span class="badge" :class="r.hedgeValue === 'high' ? 'green' : r.hedgeValue === 'medium' ? 'yellow' : 'red'">
                                    {{ r.hedgeValue === 'high' ? '高' : r.hedgeValue === 'medium' ? '中' : '低' }}
                                </span>
                            </td>
                            <td style="text-align: right; font-size: 12px">{{ r.note }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="hint-box" style="margin-top: 20px; border-left-color: var(--accent-green); border-left-width: 3px">
                    <strong style="color: var(--accent-green); font-family: 'Space Grotesk Variable', sans-serif">建议对冲：</strong>
                    {{ data.correlation.suggestedHedge }}
                </div>
            </div>
        </section>

        <!-- ============= 总结 quote ============= -->
        <section class="section">
            <div class="quote-block">
                <blockquote v-html="data.finalQuote"></blockquote>
            </div>
        </section>

        <div class="footer">
            <div class="mono-line">DATA ANCHORED AT {{ data.date }} · COIN.RESEARCH</div>
            <div style="margin-top: 8px">本分析基于公开信息整理，不构成投资建议。投资有风险，入市需谨慎。</div>
        </div>
    </div>
</template>

<style scoped>
/* ========= Bear Playbook Timeline ========= */
.bear-timeline {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 20px;
}

.bear-step {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 14px;
    align-items: start;
    padding: 14px 16px;
    background: rgba(244, 63, 94, 0.04);
    border: 1px solid rgba(244, 63, 94, 0.18);
    border-radius: 10px;
}

.bear-step-marker {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(220, 38, 38, 0.12);
    color: var(--accent-red);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Space Grotesk Variable', sans-serif;
    font-weight: 700;
    font-size: 16px;
}

.bear-step-when {
    font-family: 'JetBrains Mono Variable', monospace;
    font-size: 12px;
    color: var(--accent-red);
    font-weight: 600;
    margin-bottom: 4px;
}

.bear-step-event {
    font-family: 'Space Grotesk Variable', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: var(--text-ink);
    margin-bottom: 6px;
}

.bear-step-signal {
    font-size: 12px;
    color: var(--text-secondary);
    line-height: 1.6;
}

/* ========= Timeline ========= */
.timeline {
    position: relative;
    padding-left: 0;
}

.timeline-row {
    display: grid;
    grid-template-columns: 90px 20px 1fr;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
    position: relative;
}

.timeline-row:last-child { border-bottom: none; }

.timeline-year {
    font-family: 'JetBrains Mono Variable', 'JetBrains Mono', monospace;
    font-weight: 600;
    color: var(--accent-primary);
    font-size: 13px;
}

.timeline-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--gradient-primary);
    margin-top: 6px;
    position: relative;
    box-shadow: 0 0 0 4px var(--bg-surface), 0 0 0 5px rgba(67, 56, 202, 0.2);
}

.timeline-body {
    color: var(--text-primary);
    font-size: 14px;
    line-height: 1.6;
}

/* ========= Team ========= */
.team-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.team-row {
    padding: 16px;
    background: var(--bg-elevated);
    border-radius: 10px;
    border-left: 3px solid var(--accent-primary);
}

.team-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
    gap: 12px;
}

.team-name {
    font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: var(--text-ink);
}

.team-role {
    font-size: 13px;
    color: var(--accent-primary);
    font-family: 'JetBrains Mono Variable', 'JetBrains Mono', monospace;
    margin-top: 2px;
}

.team-rating {
    font-size: 14px;
    letter-spacing: 2px;
    color: var(--text-muted);
    white-space: nowrap;
}

.team-rating .on { color: #f59e0b; }

.team-bio {
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.7;
}

/* ========= Advantage / Disadvantage ========= */
.advantage-card {
    border-left: 3px solid var(--accent-green);
}

.disadvantage-card {
    border-left: 3px solid var(--accent-red);
}

/* ========= Driver card ========= */
.driver-card {
    background: linear-gradient(135deg, var(--bg-surface), rgba(67, 56, 202, 0.03));
}

.driver-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 4px;
}

/* ========= Risk grid ========= */
.risk-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 16px;
}

.risk-card.risk-critical { border-left: 4px solid var(--accent-red); }
.risk-card.risk-high { border-left: 4px solid var(--accent-red); }
.risk-card.risk-medium { border-left: 4px solid var(--accent-yellow); }
.risk-card.risk-low { border-left: 4px solid var(--accent-green); }

.risk-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
}

.risk-summary {
    color: var(--text-secondary);
    font-size: 13px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
    font-style: italic;
}

.risk-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.risk-name {
    font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--text-ink);
    margin-bottom: 4px;
}

.risk-body {
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.6;
}

.risk-mit {
    margin-top: 8px;
    padding: 8px 12px;
    background: rgba(5, 150, 105, 0.06);
    border-radius: 6px;
    font-size: 12px;
    color: var(--text-secondary);
    border-left: 2px solid var(--accent-green);
}

.mit-label {
    color: var(--accent-green);
    font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif;
    font-weight: 700;
}

/* ========= Recommendation ========= */
.rec-card {
    background: linear-gradient(135deg, rgba(67, 56, 202, 0.04), rgba(124, 58, 237, 0.04));
    border: 1px solid rgba(67, 56, 202, 0.2);
}

.rec-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 20px;
}

.rec-label {
    font-family: 'JetBrains Mono Variable', 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.15em;
    margin-bottom: 4px;
    font-weight: 500;
}

.rec-rating {
    font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif;
    font-size: 32px;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
}

.rec-badge {
    padding: 10px 18px;
    border-radius: 10px;
    font-family: 'JetBrains Mono Variable', 'JetBrains Mono', monospace;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.1em;
}

.rec-badge.bullish { background: rgba(5, 150, 105, 0.12); color: var(--accent-green); border: 1px solid rgba(5, 150, 105, 0.3); }
.rec-badge.neutral { background: rgba(180, 83, 9, 0.12); color: var(--accent-yellow); border: 1px solid rgba(180, 83, 9, 0.3); }
.rec-badge.bearish { background: rgba(220, 38, 38, 0.12); color: var(--accent-red); border: 1px solid rgba(220, 38, 38, 0.3); }

.rec-thesis {
    color: var(--text-primary);
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 24px;
}

.rec-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
}

.rec-cell {
    padding: 16px;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 10px;
}

.rec-cell .el {
    font-family: 'JetBrains Mono Variable', 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.1em;
    margin-bottom: 6px;
    font-weight: 500;
}

.rec-cell .ev {
    font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: var(--text-ink);
    letter-spacing: -0.01em;
}

/* ========= Competitor Table ========= */
.comp-table {
    font-size: 12px;
}

.comp-table th,
.comp-table td {
    padding: 10px 10px;
}

.comp-table tr.self-row td {
    background: linear-gradient(90deg, rgba(67, 56, 202, 0.07), rgba(124, 58, 237, 0.04));
    font-weight: 600;
}

.comp-table tr.self-row strong {
    color: var(--accent-primary);
}

.nvidia-stars {
    letter-spacing: 1px;
    color: var(--text-muted);
    font-size: 13px;
    white-space: nowrap;
}

.nvidia-stars .on {
    color: #76b900;
}

.comp-detail {
    padding: 14px 16px;
    background: var(--bg-elevated);
    border-radius: 10px;
    border-left: 3px solid var(--border-strong);
}

.comp-detail-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    gap: 12px;
    font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif;
}

.comp-detail-body {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.6;
}
</style>
