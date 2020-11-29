import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTheMask from 'vue-the-mask'
import vuejquery from 'vue-jquery'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import '../src/assets/app.scss'

Vue.use(VueTheMask)
Vue.use(vuejquery)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
