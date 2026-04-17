<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import {
    Chart,
    BarController,
    BarElement,
    LineController,
    LineElement,
    PointElement,
    DoughnutController,
    ArcElement,
    RadarController,
    RadialLinearScale,
    Filler,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    Tooltip,
    Legend,
    type ChartConfiguration,
} from 'chart.js'

Chart.register(
    BarController,
    BarElement,
    LineController,
    LineElement,
    PointElement,
    DoughnutController,
    ArcElement,
    RadarController,
    RadialLinearScale,
    Filler,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    Tooltip,
    Legend,
)

Chart.defaults.color = '#52525b'
Chart.defaults.borderColor = 'rgba(10, 10, 10, 0.06)'
Chart.defaults.font.family = "'Inter', sans-serif"

const props = defineProps<{ config: ChartConfiguration }>()

const canvasEl = ref<HTMLCanvasElement | null>(null)
let instance: Chart | null = null

function render() {
    if (!canvasEl.value) return
    instance?.destroy()
    instance = new Chart(canvasEl.value, props.config)
}

onMounted(render)
watch(() => props.config, render, { deep: true })

onBeforeUnmount(() => instance?.destroy())
</script>

<template>
    <canvas ref="canvasEl"></canvas>
</template>
