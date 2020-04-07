import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/Index'
import TestHttp from '@/views/demo/TestHttp.vue'

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
    }
  ]
})
