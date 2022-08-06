import axios from 'axios'

const requests = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net',
  timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config) => {
  return config
})

// 相应拦截器
requests.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default requests