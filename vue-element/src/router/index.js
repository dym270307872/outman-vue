import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/index/Index';
import Container from '@/components/Container';

const routes = [{path: '/',redirect:'/index'},{
  path: '/index',
  name: 'Index',
  component: Index,
  meta: {
    title: '我的收藏'
  }
}, {
  path: '/hello',
  name: 'Container',
  component: Container,
  meta: {
    title: '我的布局'
  }
}]
const router = new createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title 
  if (to.meta.title) {
    // console.log(to.component.name);
    document.title = to.meta.title
  }
  next()
})
export default router;