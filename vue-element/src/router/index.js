import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index/Index'
import Main from '@/views/main/Main'
import Grid from '@/views/demo/Grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/',
      name: 'Main',
      component: Main
    },{
      path: '/demo/Grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
