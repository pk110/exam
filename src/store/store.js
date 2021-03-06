import Vue from 'vue'
import Vuex from 'vuex'
import slideBar from './modules/slidebar'
import hot from './modules/hot'
import newslist from './modules/newslist'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  getters: {
      
  },
  mutations: {
      
  },
  actions: {

  },
  modules: {
    slideBar: slideBar,
    hot:hot,
    newslist:newslist
  }
})

export default store