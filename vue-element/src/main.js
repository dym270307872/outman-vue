import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { ElMessage, ElLoading } from 'element-plus';

//自定义js组件
import RestFul from "@/assets/util/RestFulUtils";
process.env.VUE_APP_MOCK=='true' && require('../public/mock');

const app = createApp(App);
//注册全局变量
app.config.globalProperties.$rest = RestFul;
app.provide("$message",ElMessage);
app.provide("$loading",ElLoading);
//全局使用组件
app.use(ElementPlus);
app.use(router);
app.mount("#app");