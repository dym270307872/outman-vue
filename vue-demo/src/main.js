import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
process.env.VUE_APP_MOCK=='true' && require('../public/mock');

createApp(App).use(router).mount("#app");