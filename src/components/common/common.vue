<template>
	<div class="common">
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
		<v-touch class="touchComponent" v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
			<!--<transition v-bind:enter-active-class="componentAnimated"
		v-bind:leave-active-class="componentAnimated">-->
			<transition :enter-active-class="transitionNameLeft" :leave-active-class="transitionNameRight">
					<router-view></router-view>	
			</transition>
		</v-touch>
		<transition enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight">
			<allExam v-if="show_exam"></allExam>
		</transition>
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
				componentAnimated:'animated slideInRight',
            	transitionNameLeft:"", //绑定在组件上面的动效class
				transitionNameRight:"",
				bottomSlider:"",
				left:""
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
				if(this.$route.path.split('/')[2] == undefined){
					this.$router.push({path:'/index/junior'})
				}else if(this.$route.path.split('/')[2] == 'junior'){
					this.$router.push({path:'/index/primary'})
				}else{
					return;
				}
				this.componentAnimated = 'animated slideInRight'
			},
			onSwipeRight(){
				if(this.$route.path.split('/')[2] == 'primary'){
					this.$router.push({path:'/index/junior'})
				}else if(this.$route.path.split('/')[2] == 'junior'){
					this.$router.push({path:'/index'})
				}else{
					return;
				}
				this.componentAnimated = 'animated slideInLeft'
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
				this.transitionNameLeft = toDepth < fromDepth ? 'slide-left' : 'slide-right'
				this.transitionNameRight = toDepth < fromDepth ? 'slide-right' : 'slide-left'
				const num = Math.abs(fromDepth-toDepth)
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
		top:0;
		bottom:51px;
		left:0;
		width:100%;
	}
	.common-menu{
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
		margin-left: 6%;
	}
	.bottom-slider-left{
		transition:left 0.3s linear;
	}
	.bottom-slider-right{
		transition:left 0.3s linear;
	}
	.touchComponent{
		position:fixed;
		top:50px;
		bottom:51px;
		left:0;
		width:100%;    
		overflow-y: auto;
	}
	.slide-left{
		left:-100px;
    	transition: all .3s ease;
	}
	.slide-right{
		left:-100px;
    	transition: all .3s ease;
	}
</style>