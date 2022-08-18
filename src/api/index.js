import requests from '@/utils/request'
import store from '@/store'
// 注册请求
export const reqRegister = (data) => {
  return requests({
    url: '/api/reg',
    method: 'post',
    data
  })
}

// 登录
export const reqLogin = (data) => {
  return requests({
    url: '/api/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export const reqUserInfo = () => {
  return requests({
    url: '/my/userinfo',
    headers: {
      Authorization: store.state.login.token
    }
  })
}

// 获取侧边栏信息
export const getMenuList = () => {
  return requests({
    url: '/my/menus',
    headers: {
      Authorization: store.state.login.token
    }
  })
}
