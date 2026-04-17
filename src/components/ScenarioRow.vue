<script setup lang="ts">
import type { Scenario } from '@/types/company'

defineProps<{ scenario: Scenario }>()
</script>

<template>
    <div class="scenario-row" :class="scenario.cls">
        <div class="head">
            <span class="name">{{ scenario.name }}</span>
            <span class="prob">P = {{ scenario.prob }}% · 市值 {{ scenario.mcap }}</span>
        </div>
        <div class="desc">{{ scenario.desc }}</div>
        <div class="bar-wrap">
            <div class="bar" :style="{ width: scenario.prob * 2 + '%' }" />
        </div>
    </div>
</template>
