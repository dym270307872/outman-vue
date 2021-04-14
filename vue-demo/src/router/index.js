import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/index/Index';
import TestHttp from '@/views/demo/TestHttp.vue';
import TestCors from '@/views/demo/TestCors.vue';
import TestAes from '@/views/demo/TestAes.vue';


const routes= [
      {
        path: '/',
        name: 'Index',
        component: Index,
        meta:{
          title:'我的收藏'
        }
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
 const router = new createRouter({
  history:createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    // console.log(to.component.name);
    document.title = to.meta.title
  }
  next()
})
export default router;

