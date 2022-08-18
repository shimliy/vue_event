import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

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
  // {
  //   name: 'home',
  //   path: '/home',
  //   component: () => import('@/views/Home/index.vue')
  // },
  {
    path: '/',
    component: () => import('@/views/Layout')
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
console.log(store)
// 在全局前置路由守去获取用户信息
router.beforeEach((to, from, next) => {
  const token = store.state.login.token
  // 有token且没有用户信息才回去请求用户信息
  if (token && !store.state.user.userInfo) {
    store.dispatch('getUserInfo')
  }
  next()
})

export default router
