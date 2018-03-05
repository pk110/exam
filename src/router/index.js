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
import newslistDetail from './../components/newslistDetail/newslistDetail'
import {delCookie,getCookie,setCookie} from './../util/util'
import store from './../store/store'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      // +++++++++++++++++++++ 首页
      path: '/',
      redirect: '/index'
    },
    {
      // 底部三个的第一页   相当于首页 也就是显示高中
      path: '/index',
      name:'index',
      component: common,
      //  菜单的router
      children: [{
        // Senior   高中第一个
        path: '',
        name:'Senior',
        component: Senior
      },
      {
        // junior   初中第二个
        path: '/index/junior',
        name:'junior',
        component: junior
      },
      {
        // primary   小学第三个
        path: '/index/primary/primary',
        name:'primary',
        component: primary
      }]
    },
    {
      // 底部三个的第二页
      path: '/study',
      name:'study',
      component: study
    },
    {
      // 底部三个的第三页
      path: '',
      component: hot,
      // 注意这里如果想换不同路由底部选项栏想一样 得保证在同一个根命下
      //  菜单的router
      children: [{
        // allSee   热点第一个
        path: '/hot',
        name:'hot',
        component: allSee
      },
      {
        // news   热点第二个
        path: '/hot/news',
        name:'news',
        component: news
      }]
    },
    {
      // 底部三个的第三页里的列表详情页
      path: '/newslistDetail',
      name:'newslistDetail',
      component: newslistDetail
    }
  ]
})



// 全局路由守卫
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  //读取cookie，需要注意的是cookie是不能存中文的，如果需要存中文，解决方法是后端先进行编码encode()，前端取出来之后用decodeURI('string')解码。（安卓可以取中文cookie，IOS不行）
  console.log(getCookie('username'))
  const nextRoute = ['newslistDetail'];
  if(getCookie('username') == null){
    if(nextRoute.indexOf(to.name) > -1){
      console.log('需要拉起登录页面');
      store.dispatch({
        type: 'showUser'
      })
      next(false);
      // router.push({path:'/login'})
    }else{
      console.log('不需要拉去登录页面')
      next();
    }
  }
  // router.push({name:'hot'});

  // const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
  // let isLogin = global.isLogin;  // 是否登录
  // // 未登录状态；当路由到nextRoute指定页时，跳转至login
  // if (nextRoute.indexOf(to.name) >= 0) {  
  //   if (!isLogin) {
  //     console.log('what fuck');
  //     router.push({ name: 'login' })
  //   }
  // }
  // // 已登录状态；当路由到login时，跳转至home 
  // if (to.name === 'login') {
  //   if (isLogin) {
  //     router.push({ name: 'home' });
  //   }
  // }
});

export default router;

