import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
process.env.VUE_APP_MOCK=='true' && require('../public/mock');
const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(ElementPlus).use(router).mount("#app");