<template>
  <div id="app">
      <!--底部选项栏-->
      <bottom></bottom>
  </div>
</template>

<script>
import bottom from './components/bottom/bottom.vue'

export default {
   components: {
    //  底部选项栏
     'bottom':bottom
  }
}
</script>

<style>
     body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, menu, nav, section{
        margin: 0;
        padding: 0;
        font-family: "Helvetica Condensed","微软雅黑","Microsoft Yahei",Helvetica,STHeiTi,sans-serif;
    }
</style>
