<template>
  <div id="app">
      <!--底部选项栏-->
      <bottom></bottom>
      <!--个人用户页面-->
      <transition     name="custom-classes-transition"
    :enter-active-class="show == true?'animated slideInUp':'animated slideInDown'">
        <user v-if="show"></user>
      </transition>
  </div>
</template>

<script>
import bottom from './components/bottom/bottom.vue'
import user from './components/user/user.vue'
import store from './store/store'

export default {
    // animated slideInUp
    computed: {
        // 绑定vuex中的home里的sign值
        show () {
            // 获取store里的state
            // return this.$store.state.sign
            // 这样获取子模块中的数据
            return this.$store.state.slideBar.show
        }
    },
   components: {
    //  底部选项栏
     'bottom':bottom,
     'user':user
  }
}
</script>

<style>
     body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, menu, nav, section{
        margin: 0;
        padding: 0;
        font-size:12px;
        font-family: "Helvetica Condensed","微软雅黑","Microsoft Yahei",Helvetica,STHeiTi,sans-serif;
    }
</style>
