import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//using Bootstrap:
//https://bootstrap-vue.js.org/docs
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//using Font Awesome:
//https://www.npmjs.com/package/@fortawesome/vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faGithubSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUserSecret)
library.add(faFontAwesome)
library.add(faGithubSquare)
library.add(faFacebookSquare)
library.add(faEnvelopeSquare)
library.add(faTwitterSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
