<template>
	<div>
		<div class="common-menu">
			<img src="./../../assets/user.png" alt="" class="header-user" @click="showUser">
			<div class="header-all">
				<div class="header-all-head">
					<router-link class="menu-list" tag="div" to="/index" exact>
						<div class="menu-list-div">高中</div>
					</router-link>
					<router-link class="menu-list" tag="div" to="/index/junior">
						<div class="menu-list-div">初中</div>
					</router-link>
					<router-link class="menu-list" tag="div" to="/index/primary/primary">
						<div class="menu-list-div">小学</div>
					</router-link>	
				</div>
				<div :class="bottomSlider" :style="left" class="bottom-slider"></div>
			</div>
			<img src="./../../assets/menu.png" alt="" class="header" @click="showExam">
		</div>
		<div class="common">
			<div class="box-loading" :style="loading?'display:inline-flex':'display:none'">
				<img src="./../../assets/loading.gif" alt="">
				<span>内容正在加载...</span>
			</div>
			<v-touch class="touchComponent" :style="loading?'display:none':'display:block'" v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
				  <transition :name="touchSilder">
						<router-view></router-view>	
				</transition>
			</v-touch>
			<transition enter-active-class="animated slideInRight"
		leave-active-class="animated slideOutRight">
				<allExam v-if="show_exam"></allExam>
			</transition>
		</div>
	</div>
</template>
<script>
    import Senior from './../Senior/Senior'
    import junior from './../junior/junior'
    import primary from './../primary/primary'
    import allExam from './../allExam/allExam'
	import store from './../../store/store'

    export default {
		data () {
			return {
				bottomSlider:"",
				left:"",
				touchSilder:"",
				loading:"",
				type:true
			}
		},
		methods: {
			showUser(){
				store.dispatch({
					type: 'showUser'
				})
			},
			showExam(){
				store.dispatch({
					type: 'showExam'
				})
			},
			onSwipeLeft(){
				this.type = false;
				if(this.$route.path.split('/')[2] == undefined){
					this.$router.push({path:'/index/junior'})
				}else if(this.$route.path.split('/')[2] == 'junior'){
					this.$router.push({path:'/index/primary/primary'})
				}else{
					return;
				}
				this.touchSilder = 'slide-left'
			},
			onSwipeRight(){
				this.type = false;
				if(this.$route.path.split('/')[2] == 'primary'){
					this.$router.push({path:'/index/junior'})
				}else if(this.$route.path.split('/')[2] == 'junior'){
					this.$router.push({path:'/index'})
				}else{
					return;
				}
				this.touchSilder = 'slide-right'
			}
		},
		computed:{
			// 绑定vuex中的home里的sign值
			show_exam () {
				// 获取store里的state
				// return this.$store.state.sign
				// 这样获取子模块中的数据
				return this.$store.state.slideBar.showExam
			}
		},
		components: {
			Senior: Senior,
			junior: junior,
			primary: primary,
			allExam:allExam
		},
		watch: {
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
					if(num == 2){
						this.left = 'left:0';
					}else{
						if(fromDepth == 3){
							this.left = 'left:0';
							return false;
						}
						this.left = 'left:33.33%';
					}
				}else{
					this.bottomSlider = 'bottom-slider-right';
					if(num == 2){
						this.left = 'left:66.66%';
					}else{
						if(fromDepth == 3){
							this.left = 'left:66.66%';
							return false;
						}
						this.left = 'left:33.33%';
					}
				}
			}
		}
    }
</script>
<style>
    .common{
		position:fixed;
		top:50px;
		bottom:51px;
		left:0;
		width:100%;
		overflow: auto;
	}
	.common-menu{
		position: fixed;
    	top: 0;
		width:100%;
		height:50px;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		box-sizing:border-box;
		padding:0 15px;
		align-items:center;
		font-size:12px;
		background:#eeeeee;
	}
	.header{
		width:25px;
		height:25px;
	}
	.header-user{
		width:25px;
		height:25px;
        border:1px solid #d4237a;
        border-radius:100%;
	}
	.header-all{
		width:70%;
		margin:0 auto;
		height:50px;
		display:flex;
		flex-direction:column;
	}
	.header-all-head{
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		width:100%;
		height:49px;
	}
	.bottom-slider{
		width:20%;
		height:1px;
		background:#d4237a;
		position:relative;
		left:0;
		margin-left: 7%;
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
	.touchComponent{
		position:fixed;
		top:50px;
		bottom:51px;
		left:0;
		width:100%;    
		overflow-y: auto;
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