import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/font_3604254_rn0otuj39oo/iconfont.css'
import axios from './http'
import { store } from './store/store'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')
