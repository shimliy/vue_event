import { reqUserInfo } from '@/api/index'
const state = {
  userInfo: ''
}
const actions = {
  async getUserInfo ({ commit }) {
    const result = await reqUserInfo()
    console.log(result)
    if (result.code === 0) {
      commit('GETUSERINFO', result.data)
    }
  }
}
const mutations = {
  GETUSERINFO (state, val) {
    state.userInfo = val
  }
}
const getters = {
  nickname: state =>
    state.userInfo.nickname,
  username: state =>
    state.userInfo.username,
  user_pic: state =>
    state.userInfo.user_pic
}
export default {
  state,
  actions,
  mutations,
  getters
}
