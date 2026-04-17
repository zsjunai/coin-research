<script setup lang="ts">
import type { PriceCard } from '@/types/company'

defineProps<{ card: PriceCard }>()
</script>

<template>
    <div class="price-card">
        <div class="l">{{ card.label }}</div>
        <div class="v" :class="card.cls">{{ card.value }}</div>
        <div class="s">{{ card.sub }}</div>
    </div>
</template>
