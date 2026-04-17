<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { companies } from '@/data/companies'
import type { Market } from '@/types/company'

const marketLabel: Record<Market, string> = {
    US: '🇺🇸 美股',
    A: '🇨🇳 A 股',
    HK: '🇭🇰 港股',
    PRIVATE: '⚫ 未上市',
}

const steps = [
    { n: '01', t: '事实锚定', b: '严格基于某日期公开事实，不用预测当输入' },
    { n: '02', t: '十倍基因体检', b: '五项核心基因（软件边际/网络/数据/定价权/再投资空间）差距扫描' },
    { n: '03', t: '合同积压量化', b: '把长期合同、战略入股、产能路径转化为"收入地板"' },
    { n: '04', t: '竞品横向对照', b: '选同赛道最强对手做指标对齐，识别结构性优劣' },
    { n: '05', t: '双档时间推演', b: '5 年与 10 年两个视角下乐观/中性/悲观情景 + 主观概率' },
    { n: '06', t: '加权期望值', b: '概率 × 市值中值 = 期望终局 → 推出倍数与 CAGR' },
    { n: '07', t: '观察指标清单', b: '5 项季度级指标，动态判定公司走在哪条轨迹上' },
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
</script>

<template>
    <div class="container">
        <!-- ========= HERO ========= -->
        <section class="hero">
            <div class="hero-eyebrow">
                <span class="dot"></span>
                <span class="mono">10-BAGGER HUNT · FACT-ANCHORED</span>
            </div>
            <h1>
                下一个 10 倍股，<br />
                不是猜出来的，是 <span class="gradient-text">拆出来的</span>
            </h1>
            <p class="hero-subtitle">
                每份报告回答同一个问题 —— 这家公司 5 年与 10 年后分别值多少钱？有多大概率翻 10 倍？
                <br />
                15 个模块 · 7 步方法论 · 5Y 与 10Y 双时间轴 · 显式概率权重。
            </p>
            <div class="hero-stats">
                <div class="stat-mini">
                    <div class="label">已覆盖公司</div>
                    <div class="value cyan">{{ companies.length }}</div>
                </div>
                <div class="stat-mini">
                    <div class="label">分析模块</div>
                    <div class="value purple">15</div>
                </div>
                <div class="stat-mini">
                    <div class="label">时间轴</div>
                    <div class="value green">5Y · 10Y</div>
                </div>
                <div class="stat-mini">
                    <div class="label">最新更新</div>
                    <div class="value mono" style="font-size: 17px">2026-04</div>
                </div>
            </div>
        </section>

        <!-- ========= 覆盖公司 ========= -->
        <section class="section">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// COMPANY UNIVERSE</div>
                    <h2>覆盖公司</h2>
                </div>
                <p>点击卡片进入完整报告。所有结论、数据、情景都在详情页。</p>
            </div>
            <div class="company-grid">
                <RouterLink v-for="c in companies" :key="c.id" :to="`/company/${c.id}`" class="company-card">
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
                </RouterLink>
            </div>
        </section>

        <!-- ========= Coverage Roadmap ========= -->
        <section class="section">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// ROADMAP</div>
                    <h2>即将覆盖</h2>
                </div>
                <p>跨行业 + 跨市场（美股 🇺🇸 · A 股 🇨🇳 · 港股 🇭🇰）。共同点：在 5-10 年尺度上有 10 倍空间的候选。</p>
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
                    7 步走完，从公开事实推导到 5Y / 10Y 加权期望值。
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
/* ========= Company card market badge ========= */
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
</style>
