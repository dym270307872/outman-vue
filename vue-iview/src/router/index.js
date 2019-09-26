import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/Index'
// import Main from '@/views/main/Main'

import Grid from '@/views/demo/Grid'
import Layout from '@/views/demo/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },{
      path: '/demo/grid',
      name: 'Grid',
      component: Grid
    },{
      path: '/demo/layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
