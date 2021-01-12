import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css'
import elementUi from 'element-plus'
// 引入全局样式
import './style/index.scss'
import axios from './plugins/axios'

const app = createApp(App)
// 设置全局变量 vue2.x  Vue.prototype => app.config.globalProperties
app.config.globalProperties.axios = axios

app.use(store).use(router).use(elementUi).mount('#app')
