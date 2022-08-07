import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录页面路由
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/logAndReg/Login')
  },
  // 注册页面路由
  {
    name: 'register',
    path: '/register',
    component: () => import('@/views/logAndReg/Register')
  },
  // 配置重定向
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
