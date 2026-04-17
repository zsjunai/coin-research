<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LogoMark from './LogoMark.vue'
</script>

<template>
    <nav class="nav">
        <div class="nav-inner">
            <RouterLink to="/" class="logo">
                <LogoMark />
                <span class="logo-text">Coin<span>.research</span></span>
            </RouterLink>
            <div class="nav-links">
                <RouterLink to="/">公司</RouterLink>
                <RouterLink to="/methodology">方法论</RouterLink>
                <span class="nav-badge">v0.1 · alpha</span>
            </div>
        </div>
    </nav>
</template>
