import { reqUserInfo } from '@/utils/request'
const state = {
  usreInfo: ''
}
const actions = {
  async getUserInfo ({ commit }) {
    const result = await reqUserInfo()
    console.log(result)
  }
}
const mutations = {}
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters
}
