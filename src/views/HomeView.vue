<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { companies } from '@/data/companies'

const steps = [
    { n: '01', title: '事实锚定', detail: 'Anchor Date · Facts Only', body: '所有分析严格基于某一具体日期已披露的公开事实，不使用预测作为输入假设。' },
    { n: '02', title: 'Mag 7 基因体检', detail: 'Mag 7 DNA Check', body: '对照 Mag 7 的五项核心基因（软件边际、网络效应、数据闭环、定价权、跨代际转型）做差距扫描。' },
    { n: '03', title: '合同积压量化', detail: 'Revenue Floor', body: '把已签署的长期合同、战略入股、产能路径图转化为未来 3-5 年的"收入地板"。' },
    { n: '04', title: '竞品横向对照', detail: 'Peer Benchmark', body: '选择同赛道最强对手做指标对齐，识别结构性优势与劣势。' },
    { n: '05', title: '三档情景推演', detail: 'Scenario Projection', body: '在 10 年尺度上构建乐观/中性/悲观情景，每档给出触发条件、终局画像与主观概率。' },
    { n: '06', title: '加权期望值计算', detail: 'Weighted Expectation', body: '用概率加权四档情景的市值中值，得到当前市值到 10 年期望值的回报倍数与 CAGR。' },
    { n: '07', title: '观察指标清单', detail: 'Tracking Signals', body: '输出 5 项季度级跟踪指标，用于动态判定公司走在哪条轨迹上。' },
]
</script>

<template>
    <div class="container">
        <section class="hero">
            <div class="hero-eyebrow">
                <span class="dot"></span>
                <span class="mono">DEEP EQUITY RESEARCH · AI-NATIVE</span>
            </div>
            <h1>
                探测下一个 <span class="gradient-text">AI 巨头</span><br />
                从事实到 10 年终局
            </h1>
            <p class="hero-subtitle">
                基于当前时点公开事实的深度投研。每一份报告回答一个问题：这家公司 10 年后会值多少钱？有多大概率进入 Mag 7？
            </p>
            <div class="hero-stats">
                <div class="stat-mini">
                    <div class="label">已覆盖公司</div>
                    <div class="value cyan">{{ companies.length }}</div>
                </div>
                <div class="stat-mini">
                    <div class="label">分析方法</div>
                    <div class="value purple">7 步</div>
                </div>
                <div class="stat-mini">
                    <div class="label">时间视角</div>
                    <div class="value green">10 年</div>
                </div>
                <div class="stat-mini">
                    <div class="label">数据时点</div>
                    <div class="value mono" style="font-size: 17px">2026-04-17</div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// COMPANY UNIVERSE</div>
                    <h2>覆盖公司</h2>
                </div>
                <p>点击卡片查看完整分析报告，包括 10 年情景推演、Mag 7 潜力评估与风险清单。</p>
            </div>
            <div class="company-grid">
                <RouterLink v-for="c in companies" :key="c.id" :to="`/company/${c.id}`" class="company-card">
                    <span class="verdict" :class="c.verdict">{{ c.verdictText }}</span>
                    <div class="row">
                        <div>
                            <div class="ticker">{{ c.ticker }}</div>
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

        <section class="section">
            <div class="section-head">
                <div class="title-group">
                    <div class="tag">// METHODOLOGY</div>
                    <h2>分析方法概览</h2>
                </div>
                <p>每份报告都走完这 7 步，从事实锚定到 10 年加权期望值。</p>
            </div>
            <div class="step-grid">
                <div v-for="s in steps" :key="s.n" class="step-card">
                    <div class="num">{{ s.n }}</div>
                    <h3>{{ s.title }}</h3>
                    <p>{{ s.body }}</p>
                    <div class="detail">{{ s.detail }}</div>
                </div>
            </div>
        </section>

        <div class="footer">
            <div class="mono-line">COIN.RESEARCH · FACT-ANCHORED EQUITY ANALYSIS</div>
            <div style="margin-top: 8px">本站分析均为基于公开信息的独立研究，不构成投资建议。投资有风险，入市需谨慎。</div>
        </div>
    </div>
</template>
