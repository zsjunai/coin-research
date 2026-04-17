<script setup lang="ts">
import type { Scenario } from '@/types/company'

defineProps<{ scenario: Scenario }>()
</script>

<template>
    <div class="scenario-row" :class="scenario.cls">
        <div class="head">
            <span class="name">{{ scenario.name }}</span>
            <span class="prob">P = {{ scenario.prob }}%</span>
        </div>
        <div class="horizons">
            <div class="horizon">
                <span class="label">5Y</span>
                <span class="mcap">{{ scenario.y5Mcap }}</span>
            </div>
            <span class="arrow">→</span>
            <div class="horizon">
                <span class="label">10Y</span>
                <span class="mcap">{{ scenario.y10Mcap }}</span>
            </div>
        </div>
        <div class="desc">{{ scenario.desc }}</div>
        <div class="bar-wrap">
            <div class="bar" :style="{ width: scenario.prob * 2 + '%' }" />
        </div>
    </div>
</template>

<style scoped>
.horizons {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
    font-family: 'JetBrains Mono Variable', monospace;
    font-size: 12px;
}

.horizon {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: var(--bg-elevated);
    border-radius: 6px;
}

.horizon .label {
    color: var(--text-muted);
    font-weight: 600;
    letter-spacing: 0.05em;
}

.horizon .mcap {
    color: var(--text-ink);
    font-weight: 700;
}

.arrow {
    color: var(--text-muted);
    font-size: 14px;
}
</style>
