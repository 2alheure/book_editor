import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

if (localStorage.getItem("token")) {
  window.axios.defaults.headers.common = {
    'Authorization': localStorage.getItem("token")
  }
}

Vue.prototype.$axios = window.axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
