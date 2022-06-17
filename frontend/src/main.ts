import './registerServiceWorker'
import './assets/styles/index.scss'
import 'vue3-sfc-transitions/dist/style.css'
import App from './App.vue'
import InitializeAppModules from '@/main/index'
import { createApp } from 'vue'

const app = createApp(App)

new InitializeAppModules(app)

app.mount('#app')
