import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import { companies } from './data/companies'

// Self-hosted variable fonts (1 file per family, no Google Fonts)
import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/jetbrains-mono'

import './styles/main.css'

export const createApp = ViteSSG(App, { routes, scrollBehavior }, () => {})

// 预渲染路径列表：vite-ssg 读取此 named export 生成静态 HTML
export async function includedRoutes(): Promise<string[]> {
    const companyPaths = companies.map((c) => `/company/${c.id}`)
    return ['/', '/methodology', ...companyPaths]
}
