import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/Index'
import Main from '@/views/main/Main'

import DGrid from '@/views/demo/DGrid'
import DLayout from '@/views/demo/DLayout'
import DMenu from '@/views/demo/DMenu'
import DShow from '@/views/demo/DShow'



import MyMenu from '@/components/menu/MyMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      hidden:true,
      name: '首页',
      redirect:'/index'
    },{
      path: '/index',
      hidden:true,
      name: '首页',
      component: Index
    },{
      path: '/main',
      name: '主页',
      component: Main
    },{
      path: '/demo',
      name: '组件示例',
      children:[{
        path: '/demo/grid',
        name: 'DGrid',
        component: DGrid
      },{
        path: '/demo/layout',
        name: 'DLayout',
        component: DLayout
      },{
        path: '/demo/menu',
        name: 'DMenu',
        component: DMenu
      },{
        path: '/demo/show',
        name: 'DShow',
        component: DShow
      }]
    },{
      path:'/mycompon',
      name: '我的组件',
      children: [{
        path:'/mycompon/menu',
        name: 'MyMenu',
        component: MyMenu
      }]
  }]
})
