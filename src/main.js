import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/global.less'
// 引入element-ui
import '@/elementUI'
// 引入所有api
import * as API from '@/api'

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$API = API
  }
})

window.Vue = vm
export default vm
