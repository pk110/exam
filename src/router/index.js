import Vue from 'vue'
import Router from 'vue-router'
import Senior from './../components/Senior/Senior'
import junior from './../components/junior/junior'
import primary from './../components/primary/primary'
import common from './../components/common/common'
import study from './../components/study/study'
import hot from './../components/hot/hot'
import allSee from './../components/allSee/allSee'
import news from './../components/news/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // +++++++++++++++++++++ 首页
      path: '/',
      redirect: '/index'
    },
    {
      // 底部三个的第一页   相当于首页 也就是显示高中
      path: '/index',
      component: common,
      //  菜单的router
      children: [{
        // Senior   高中第一个
        path: '',
        component: Senior
      },
      {
        // junior   初中第二个
        path: '/index/junior',
        component: junior
      },
      {
        // primary   小学第三个
        path: '/index/primary',
        component: primary
      }]
    },
    {
      // 底部三个的第二页
      path: '/study',
      component: study
    },
    {
      // 底部三个的第三页
      path: '/hot/allSee',
      component: hot,
      //  菜单的router
      children: [{
        // allSee   热点第一个
        path: '',
        component: allSee
      },
      {
        // news   热点第二个
        path: '/hot/news',
        component: news
      }]
    }
  ]
})
