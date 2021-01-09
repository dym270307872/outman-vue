import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index/Index';
import TestHttp from '@/views/demo/TestHttp.vue';
import TestCors from '@/views/demo/TestCors.vue';
import TestAes from '@/views/demo/TestAes.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/http',
      name: 'TestHttp',
      component: TestHttp
    },
    {
      path: '/httpCors',
      name: 'TestCors',
      component: TestCors
    },
    {
      path: '/httpAes',
      name: 'TestAes',
      component: TestAes
    }
  ]
})
