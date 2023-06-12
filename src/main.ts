import { createApp } from 'vue'
import './style.css'
import routes from '@/routes/index.ts'
import App from '@/pages/Root.vue'
// createApp(App).mount('#app')
const app = createApp(App)
app.use(routes)
app.mount('#app')
