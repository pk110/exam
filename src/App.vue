<template>
  <div id="app">
      <!--底部选项栏-->
      <bottom></bottom>
      <!--个人用户页面-->
      <!--<transition enter-active-class="animated slideInLeft"
leave-active-class="animated slideOutLeft">-->
      <transition :name="sliderSiger">
        <siger v-if="showSlider"></siger>
      </transition>
      <!--登录页面-->
      <transition  name="sideUp">
        <user v-if="show"></user>
      </transition>
      <!--遮罩-->
      <div class="box"  v-if="showBox" @click="hiddenSiger"></div>
  </div>
</template>

<script>
import bottom from './components/bottom/bottom.vue'
import user from './components/user/user.vue'
import siger from './components/siger/siger.vue'
import store from './store/store'

export default {
    data () {
        return {

        }
    },
    methods:{
        // 按需加载数据
        // 1.加载都在看路由列表页
        fetchAllSeeData(){
            // console.log(this) 
            // axios.get('./../static/data.json')
            //     .then(function (response) {
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            // });
        },
        hiddenSiger(){
            store.dispatch({
                type: 'hiddenSiger'
            })
        }

    },
    // animated slideInUp
    computed: {
        // 绑定vuex中的home里的sign值
        show () {
            // 获取store里的state
            // return this.$store.state.sign
            // 这样获取子模块中的数据
            return this.$store.state.slideBar.show
        },
        showSlider () {
            return this.$store.state.slideBar.showSlider
        },
        showBox(){
            return this.$store.state.slideBar.box
        },
        sliderSiger(){
            return this.$store.state.slideBar.sliderSiger
        }
    },
    components: {
        //  底部选项栏
        'bottom':bottom,
        'user':user,
        'siger':siger
    },
    created(){
        var that = this;
        //   共有数据写在这里直接加载
        console.log('共有数据之间加载');
        // 全局变量引用
        console.log(that.$fetch)
        const data = {
            'stuId': 1,
            'begin': '1'
        }
        that.$fetch('./../static/data.json',data)
            .then(function (res) {  
                console.log(res);
                // that.$store.state.newslist.newslist  = res  
            }); 
    }
}
</script>

<style>
     body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, menu, nav, section{
        margin: 0;
        padding: 0;
        font-size:12px;
        font-family: "微软雅黑","Microsoft Yahei",Helvetica,STHeiTi,sans-serif;
    }
    .clear{
        clear:both;
    }
    .box{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:rgba(0,0,0,0.5);
    }
	.slider-right-enter {
		left:-80%;
        transition:left .5s ease;
	}
	.slider-right-enter-to {
		left:0;
        transition:left .5s ease;
	}
	.slider-right-leave {
		left:0;
        transition:left .4s ease;
	}
	.slider-right-leave-to {
		left:-80%;
        transition:left .4s ease;
	}
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .sideUp-enter-to, .sideUp-leave-to{
        transition: transform 0.3s
    }
    .sideUp-enter, .sideUp-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform:translate3d(0,100%,0)
    }
</style>
