<template>
    <div class="bottom" :style="sliderBox">
		<router-view></router-view>		
        <div class="bottom-menu">
			<router-link class="menu-list" tag="div" to="/index">
				<div class="menu-list-div">
					<i class="iconfont icon-shouye bottom-img"></i>
					<span>首页</span>
				</div>
			</router-link>
			<router-link class="menu-list" tag="div" to="/study">
				<div class="menu-list-div">
				 	<img src="./../../assets/study.png" alt="" :style="zIndex" class="bottom-mid">
				</div>
			</router-link>
			<router-link class="menu-list" tag="div" to="/hot">
				<div class="menu-list-div">
					<i class="iconfont icon-redianshijian bottom-img"></i>
					<span>热点</span>
				</div>
			</router-link>
		</div>
    </div>
</template>
<script>
	export default {	
		data () {
			return {
				selectIndex: this.index
			}
		},
		computed:{
			zIndex(){
				return this.$store.state.slideBar.zIndex
			},
			sliderBox(){
				return this.$store.state.slideBar.bottomLeft
			}
		}
	}
</script>
<style>
	.bottom{
	    position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 50px;
		border-top:1px solid #eeeeee;
	}
	.bottom-menu{
		position: fixed;
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 50px;
		align-items: center;
		font-size: 12px;
	}
	.menu-list-div{
		display:flex;
		flex-direction:column;
		justify-content:center;
		text-align: center;
		line-height: 49px;
	}
	.bottom-img{
		width:25px;
		height:17px;
	}
	.bottom-mid{    
		width: 50px;
		height: 50px;
		position: relative;
		bottom: 20px;
	}
	.router-link-active{
		color:#d4237a;
    	transition: all 1s ease;
	}
</style>