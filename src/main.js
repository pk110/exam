// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/store'
import {post,fetch,patch,put} from './http/http'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false
// Vue.use(VueAwesomeSwiper)
Vue.use(VueTouch, {name: 'v-touch'})

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
