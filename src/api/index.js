import requests from '@/utils/request'

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
