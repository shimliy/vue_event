import requests from '@/utils/request'

export const register = (data) => {
  requests({
    url: '/api/reg',
    method: 'post',
    data
  })
}
