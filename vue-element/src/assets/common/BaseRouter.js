import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/index/Index';
import HelloWorld from '@/components/HelloWorld';
import Http from '@/views/demo/Http';
import Image from '@/views/demo/image';
const routes = [{ path: '/', redirect: '/index' }, {
  path: '/index',
  name: 'Index',
  component: Index,
  meta: {
    title: '我的收藏'
  }
}, {
  path: '/hello',
  name: 'HelloWorld',
  component: HelloWorld,
  meta: {
    title: '我的HelloWorld'
  }
}, {
  path: '/http',
  name: 'Http',
  component: Http,
  meta: {
    title: 'Http'
  }
}, {
  path: '/image',
  name: 'Image',
  component: Image,
  meta: {
    title: 'Image'
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