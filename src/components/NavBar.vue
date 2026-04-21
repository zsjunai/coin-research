<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import LogoMark from './LogoMark.vue'
import { companies } from '@/data/companies'
import type { Market } from '@/types/company'

const route = useRoute()
const dropdownOpen = ref(false)
const dropdownEl = ref<HTMLElement | null>(null)

const marketFlag: Record<Market, string> = {
    US: '🇺🇸',
    A: '🇨🇳',
    HK: '🇭🇰',
    PRIVATE: '⚫',
}

const currentCompanyId = computed(() => {
    const match = route.path.match(/^\/company\/(.+)$/)
    return match ? match[1] : null
})

const currentLabel = computed(() => {
    if (!currentCompanyId.value) return null
    const c = companies.find((x) => x.id === currentCompanyId.value)
    return c ? c.name : null
})

function toggle() {
    dropdownOpen.value = !dropdownOpen.value
}

function close() {
    dropdownOpen.value = false
}

function onClickOutside(e: MouseEvent) {
    if (!dropdownOpen.value) return
    if (dropdownEl.value && !dropdownEl.value.contains(e.target as Node)) {
        dropdownOpen.value = false
    }
}

function onEsc(e: KeyboardEvent) {
    if (e.key === 'Escape') dropdownOpen.value = false
}

onMounted(() => {
    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onEsc)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside)
    document.removeEventListener('keydown', onEsc)
})

function tickerShort(ticker: string): string {
    return ticker.split(':').pop() ?? ticker
}
</script>

<template>
    <nav class="nav">
        <div class="nav-inner">
            <RouterLink to="/" class="logo">
                <LogoMark />
                <span class="logo-text">Coin<span>.research</span></span>
            </RouterLink>
            <div class="nav-links">
                <RouterLink to="/">首页</RouterLink>

                <!-- 公司下拉 -->
                <div ref="dropdownEl" class="dropdown-wrap">
                    <button
                        class="dropdown-trigger"
                        :class="{ active: currentCompanyId || dropdownOpen }"
                        @click.stop="toggle"
                    >
                        <span>{{ currentLabel ? currentLabel.split(' ')[0] : '公司' }}</span>
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            :class="{ flipped: dropdownOpen }"
                            aria-hidden="true"
                        >
                            <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div v-if="dropdownOpen" class="dropdown-menu">
                        <div class="dropdown-header">
                            <span class="mono">COMPANY UNIVERSE</span>
                            <span class="count">{{ companies.length }}</span>
                        </div>
                        <RouterLink
                            v-for="c in companies"
                            :key="c.id"
                            :to="`/company/${c.id}`"
                            class="dropdown-item"
                            :class="{ active: c.id === currentCompanyId }"
                            @click="close"
                        >
                            <span class="flag">{{ marketFlag[c.market] }}</span>
                            <span class="name">{{ c.name }}</span>
                            <span class="mono ticker">{{ tickerShort(c.ticker) }}</span>
                        </RouterLink>
                        <RouterLink to="/" class="dropdown-footer" @click="close">
                            查看全部 · 筛选 · 对比 →
                        </RouterLink>
                    </div>
                </div>

                <RouterLink to="/methodology">方法论</RouterLink>
                <span class="nav-badge">v0.6 · beta</span>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.dropdown-wrap {
    position: relative;
}

.dropdown-trigger {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 10px;
    border: none;
    background: transparent;
    font: inherit;
    font-size: 14px;
    color: var(--text-secondary);
    cursor: pointer;
    border-radius: 8px;
    transition: color 0.15s, background 0.15s;
    font-family: inherit;
}

.dropdown-trigger:hover {
    color: var(--text-ink);
    background: var(--bg-elevated);
}

.dropdown-trigger.active {
    color: var(--accent-primary);
    font-weight: 600;
}

.dropdown-trigger svg {
    transition: transform 0.18s;
}

.dropdown-trigger svg.flipped {
    transform: rotate(180deg);
}

.dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    min-width: 280px;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
    padding: 6px;
    z-index: 60;
    animation: menu-in 0.14s ease-out;
}

@keyframes menu-in {
    from {
        opacity: 0;
        transform: translateX(-50%) translateY(-4px);
    }
    to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}

.dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px 6px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 4px;
}

.dropdown-header .mono {
    font-family: 'JetBrains Mono Variable', monospace;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-muted);
    letter-spacing: 0.12em;
}

.dropdown-header .count {
    font-family: 'JetBrains Mono Variable', monospace;
    font-size: 10px;
    color: var(--accent-primary);
    padding: 2px 7px;
    background: rgba(67, 56, 202, 0.08);
    border-radius: 100px;
    font-weight: 600;
}

.dropdown-item {
    display: grid;
    grid-template-columns: 22px 1fr auto;
    align-items: center;
    gap: 10px;
    padding: 9px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: var(--text-ink);
    font-size: 13.5px;
    transition: background 0.15s;
}

.dropdown-item:hover {
    background: var(--bg-elevated);
}

.dropdown-item.active {
    background: rgba(67, 56, 202, 0.08);
    color: var(--accent-primary);
    font-weight: 600;
}

.dropdown-item .flag {
    font-size: 15px;
    line-height: 1;
}

.dropdown-item .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.dropdown-item .ticker {
    font-family: 'JetBrains Mono Variable', monospace;
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.04em;
}

.dropdown-item.active .ticker {
    color: var(--accent-primary);
}

.dropdown-footer {
    display: block;
    padding: 8px 12px;
    margin-top: 4px;
    border-top: 1px solid var(--border);
    font-size: 12px;
    color: var(--accent-primary);
    text-decoration: none;
    text-align: center;
    border-radius: 0 0 8px 8px;
    font-weight: 500;
}

.dropdown-footer:hover {
    background: rgba(67, 56, 202, 0.04);
}

@media (max-width: 640px) {
    .dropdown-menu {
        left: auto;
        right: 0;
        transform: none;
        min-width: 240px;
    }

    @keyframes menu-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
    }
}
</style>
