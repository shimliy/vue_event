// 引入vuex-persist
const state = {
  token: window.localStorage.getItem('token')
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

// console.log(vuexLocal.plugin)
export default {
  state,
  actions,
  mutations,
  getters
}
