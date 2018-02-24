<template>
    <div class="hot">
        <div class="header-all">
            <div class="hot-head">
                <img src="./../../assets/user.png" alt=""  @click="showSiger">
                <router-link class="menu-list" tag="div" to="/hot" exact>
                    都在看
                </router-link>			
                <router-link class="menu-list" tag="div" to="/hot/news" style="padding-left:20%;">
                    热资讯
                </router-link>
            </div>
            <div :class="bottomSlider" :style="left" class="bottom-slider-hot"></div>
        </div>
        <div class="box-loading" :style="loading?'display:inline-flex':'display:none'">
            <img src="./../../assets/loading.gif" alt="">
            <span>内容正在加载...</span>
        </div>
		<v-touch class="touchComponentHot" :style="loading?'display:none':'display:block'" v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
            <transition :name="touchSilder">
                <router-view></router-view>
            </transition>
		</v-touch>
    </div>
</template>
<script>
    import allSee from './../allSee/allSee'
    import news from './../news/news'
	import store from './../../store/store'

    export default {
        data () {
            return {
                isRouterAlive: true,
				left:"",
                touchSilder:"",
				type:true,
				loading:"",
				bottomSlider:""
            }
        },
        methods:{  
			showSiger(){
				store.dispatch({
					type: 'showSiger'
				})
			},
			showUser(){
				store.dispatch({
					type: 'showUser'
				})
			},
			fetchAllSeeData(){
				store.dispatch({
					type: 'fetchAllSeeData'
				})
			},
			onSwipeLeft(){
				this.type = false;
				if(this.$route.path.split('/')[2] == undefined){
					this.$router.push({path:'/hot/news'})
				}else{
					return;
				}
				this.touchSilder = 'slide-left'
			},
			onSwipeRight(){
				this.type = false;
				if(this.$route.path.split('/')[2] == 'news'){
					this.$router.push({path:'/hot'})
				}else{
					return;
				}
				this.touchSilder = 'slide-right'
			}
        },
		components: {
			allSee: allSee,
			news: news
		},
        watch: {
          // 如果路由有变化，会再次执行该方法  检测路由变化
        //   "$route": "fetchAllSeeData"
			'$route' (to, from){
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				const num = Math.abs(fromDepth-toDepth)
				// 点击与左右滑动的分类
				if(this.type == true){
					this.loading = true;
					var that = this;
					setTimeout(function(){
						that.loading = false;
					},1000)
				}else{
					this.type = true
				}	
				// 下横线滑动效果
				if(toDepth < fromDepth){
					this.bottomSlider = 'bottom-slider-left';
                    this.left = 'left:0';
				}else{
					this.bottomSlider = 'bottom-slider-right';
                    this.left = 'left:36%';
				}
			}
        }
    }
</script>
<style>
    .hot{
        position:fixed;
        top:0;
        bottom:51px;
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
	.header-all{
		width:70%;
		margin:0 auto;
		height:50px;
		display:flex;
		flex-direction:column;
	}
	.bottom-slider-hot{
		width:30%;
		height:1px;
		background:#d4237a;
		position:relative;
		left:0;
		margin-left: 18%;
	}
	.bottom-slider-left{
		transition:left 0.3s linear;
	}
	.bottom-slider-right{
		transition:left 0.3s linear;
	}
	.box-loading{
		position:fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		text-align:center;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items: center;
	}
	.box-loading img{
		width:20px;
		height:20px;
	}
	.touchComponentHot{
		position:fixed;
		top:50px;
		bottom:51px;
		width:100%;
	}
	.slide-left-enter, .slide-right-leave-active {
		-webkit-transform: translate3d(100%, 0,0);
		transform: translate3d(100%, 0,0);
	}
	.slide-left-leave-active, .slide-right-enter {
		-webkit-transform: translate3d(-100%, 0,0);
		transform: translate3d(-100%, 0,0);
	}
</style>