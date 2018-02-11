<template>
    <div class="hot">
        <div class="hot-head">
            <img src="./../../assets/user.png" alt=""  @click="showUser">
            <router-link class="menu-list" tag="div" to="/hot/allSee" exact @click="showHot=!showHot">
                都在看
            </router-link>			
            <router-link class="menu-list" tag="div" to="/hot/news" style="padding-left:20%;" @click="showHot=!showHot">
                热资讯
            </router-link>
        </div>
  		<transition enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutLeft">
			<router-view  v-show="showHot"></router-view>
		</transition>
    </div>
</template>
<script>
    import allSee from './../allSee/allSee'
    import news from './../news/news'
	import store from './../../store/store'

    export default {
        data () {
            return {
                showHot:true,
                isRouterAlive: true
            }
        },
        methods:{  
			showUser(){
				store.dispatch({
					type: 'showUser'
				})
			},
			fetchAllSeeData(){
				store.dispatch({
					type: 'fetchAllSeeData'
				})
			}  
        },
		components: {
			allSee: allSee,
			news: news
		},
        watch: {
          // 如果路由有变化，会再次执行该方法  检测路由变化
        //   "$route": "fetchAllSeeData"
        }
    }
</script>
<style>
    .hot{
        position:fixed;
        top:0;
        bottom:51px;
        left:0;
        width:100%;
        overflow:auto;
        background:#fff;
    }
    .hot-head{
        width:100%;
        height:50px;
        display:flex;
		justify-content:center;
        align-items:center;
        color:gray;
        border-bottom:1px solid #efefef;
    }
    .hot-head img{
        width:25px;
        height:25px;
        border: 1px solid #d4237a;
        border-radius: 100%;
        position:absolute;
        left:15px;
    }
</style>