<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

interface TocItem {
    id: string
    label: string
}

interface TocGroup {
    title: string
    items: TocItem[]
}

const groups: TocGroup[] = [
    {
        title: 'A · 公司全景',
        items: [
            { id: 'a1', label: '公司沿革 · 商业模式' },
            { id: 'a2', label: '团队 · 股权 · 关键人' },
            { id: 'a3', label: '管理层资本配置评分' },
        ],
    },
    {
        title: 'B · 财务',
        items: [
            { id: 'b1', label: '事实锚点' },
            { id: 'b2', label: '营收与 CapEx' },
            { id: 'b3', label: '盈利能力' },
            { id: 'b4', label: '现金流' },
        ],
    },
    {
        title: 'C · 护城河',
        items: [
            { id: 'c1', label: '核心竞争优势' },
            { id: 'c2', label: '结构性劣势' },
            { id: 'c2b', label: '空头剧本' },
        ],
    },
    {
        title: 'D · 机会',
        items: [
            { id: 'd1', label: '短期催化剂' },
            { id: 'd2', label: '长期增长驱动' },
        ],
    },
    {
        title: 'E · 风险',
        items: [{ id: 'e1', label: '分类风险矩阵' }],
    },
    {
        title: 'F · 竞争',
        items: [
            { id: 'f1', label: '多空简报' },
            { id: 'f1b', label: '赛道规模 · 市占率' },
            { id: 'f2', label: '竞争格局总览' },
            { id: 'f2b', label: 'vs CoreWeave' },
            { id: 'f3', label: '十倍基因扫描' },
        ],
    },
    {
        title: 'G · 情景估值',
        items: [
            { id: 'g1', label: '双时间轴情景' },
            { id: 'g2', label: '加权期望值' },
            { id: 'g2b', label: '下行风险量化' },
            { id: 'g3', label: '估值框架' },
            { id: 'g3b', label: '历史估值分位' },
            { id: 'g4', label: 'Watchlist' },
            { id: 'g5', label: '敏感度 · Tornado' },
            { id: 'g6', label: '共识 vs 指引 Gap' },
            { id: 'g7', label: '对照组 · 机会成本' },
        ],
    },
    {
        title: '附加',
        items: [
            { id: 'subs', label: '子公司' },
            { id: 'analysts', label: '分析师目标价' },
        ],
    },
    {
        title: 'H · 决策',
        items: [
            { id: 'h1', label: '投资建议 · 仓位推导' },
            { id: 'h2', label: '组合相关性 · 对冲' },
            { id: 'h3', label: 'Track Record 机制' },
        ],
    },
]

const STORAGE_KEY = 'coin-toc-open'
const isOpen = ref<boolean>(
    typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) === '1' : false,
)
const activeId = ref<string>('')
let observer: IntersectionObserver | null = null

watch(isOpen, (v) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, v ? '1' : '0')
    }
})

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
            if (visible.length > 0) {
                activeId.value = visible[0].target.id
            }
        },
        { rootMargin: '-100px 0px -60% 0px', threshold: 0 },
    )

    groups.flatMap((g) => g.items).forEach((it) => {
        const el = document.getElementById(it.id)
        if (el) observer!.observe(el)
    })
})

onBeforeUnmount(() => observer?.disconnect())

function jump(id: string) {
    const el = document.getElementById(id)
    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
    }
}

function toggle() {
    isOpen.value = !isOpen.value
}

function currentLabel() {
    for (const g of groups) {
        const found = g.items.find((i) => i.id === activeId.value)
        if (found) return found.label
    }
    return ''
}
</script>

<template>
    <!-- 收起态：圆形按钮 -->
    <button
        v-if="!isOpen"
        class="toc-trigger"
        :title="currentLabel() ? `当前：${currentLabel()}` : '展开目录'"
        @click="toggle"
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <circle cx="4" cy="6" r="1" fill="currentColor"></circle>
            <circle cx="4" cy="12" r="1" fill="currentColor"></circle>
            <circle cx="4" cy="18" r="1" fill="currentColor"></circle>
        </svg>
        <span v-if="currentLabel()" class="toc-trigger-label">{{ currentLabel() }}</span>
    </button>

    <!-- 展开态：完整 TOC -->
    <aside v-else class="toc-sidebar">
        <div class="toc-head">
            <span class="mono toc-title">TABLE OF CONTENTS</span>
            <button class="toc-close" aria-label="收起目录" title="收起" @click="toggle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <nav class="toc-nav">
            <div v-for="g in groups" :key="g.title" class="toc-group">
                <div class="toc-group-title">{{ g.title }}</div>
                <a
                    v-for="it in g.items"
                    :key="it.id"
                    :href="'#' + it.id"
                    :class="['toc-item', { active: activeId === it.id }]"
                    @click.prevent="jump(it.id)"
                >
                    {{ it.label }}
                </a>
            </div>
        </nav>
    </aside>
</template>

<style scoped>
/* ========= 收起态：圆角按钮 ========= */
.toc-trigger {
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 100px;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    color: var(--accent-primary);
    cursor: pointer;
    font-family: inherit;
    font-size: 12px;
    box-shadow: var(--shadow-md);
    transition: all 0.2s;
    max-width: 280px;
}

.toc-trigger:hover {
    border-color: var(--accent-primary);
    transform: translateY(-1px);
    box-shadow: var(--shadow-lg);
}

.toc-trigger-label {
    color: var(--text-primary);
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
    font-size: 12px;
}

/* ========= 展开态：完整侧边栏 ========= */
.toc-sidebar {
    position: fixed;
    top: 88px;
    right: 24px;
    width: 240px;
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    padding: 14px 4px 18px 0;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    z-index: 50;
    scrollbar-width: thin;
    scrollbar-color: var(--border-strong) transparent;
    box-shadow: var(--shadow-lg);
    animation: slide-in 0.2s ease;
}

@keyframes slide-in {
    from { opacity: 0; transform: translateX(8px); }
    to { opacity: 1; transform: translateX(0); }
}

.toc-sidebar::-webkit-scrollbar { width: 6px; }
.toc-sidebar::-webkit-scrollbar-thumb {
    background: var(--border-strong);
    border-radius: 3px;
}

.toc-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px 12px 18px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 14px;
}

.toc-title {
    font-size: 10px;
    color: var(--text-muted);
    letter-spacing: 0.15em;
    font-weight: 600;
}

.toc-close {
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
}

.toc-close:hover {
    background: var(--bg-elevated);
    color: var(--text-ink);
}

.toc-nav {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 0 4px 0 14px;
}

.toc-group {
    display: flex;
    flex-direction: column;
}

.toc-group-title {
    font-family: 'Space Grotesk Variable', 'Space Grotesk', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: var(--accent-primary);
    padding: 0 6px 4px;
    letter-spacing: 0.02em;
    border-bottom: 1px solid var(--border);
    margin-bottom: 4px;
}

.toc-item {
    display: block;
    padding: 5px 10px;
    font-size: 12.5px;
    color: var(--text-secondary);
    text-decoration: none;
    border-left: 2px solid transparent;
    transition: all 0.15s;
    line-height: 1.4;
    border-radius: 0 4px 4px 0;
}

.toc-item:hover {
    color: var(--text-ink);
    background: rgba(67, 56, 202, 0.04);
}

.toc-item.active {
    color: var(--accent-primary);
    border-left-color: var(--accent-primary);
    background: rgba(67, 56, 202, 0.08);
    font-weight: 600;
}

/* 窄屏不显示 */
@media (max-width: 1024px) {
    .toc-sidebar,
    .toc-trigger {
        display: none;
    }
}
</style>
