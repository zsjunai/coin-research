import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

// Self-hosted variable fonts (1 file per family, no Google Fonts)
import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/jetbrains-mono'

import './styles/main.css'

createApp(App).use(router).mount('#app')
