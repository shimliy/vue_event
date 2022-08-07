const state = {
  token: ''
}
const actions = {

}
const mutations = {
  // 获取登录时的token
  GETNEWTOKEN (state, value) {
    state.token = value
  }
}
const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}
