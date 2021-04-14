import { createRouter, createWebHistory } from 'vue-router';

const routes= []
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

