import Vue from 'vue'
import Vuex from 'vuex'
import register from '@/store/register/index.js'
import login from '@/store/login/index.js'
import user from '@/store/user/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    register,
    login,
    user
  }
})
