<template>
    <div class="bottom">
		<router-view></router-view>		
        <div class="bottom-menu">
			<router-link class="menu-list" tag="div" to="/index">
				<div class="menu-list-div">
					<img src="./../../assets/index.png" alt="" class="bottom-img">
					<span>首页</span>
				</div>
			</router-link>
			<router-link class="menu-list" tag="div" to="/study">
				<div class="menu-list-div">
				 	<img src="./../../assets/study.png" alt="" class="bottom-mid">
				</div>
			</router-link>
			<router-link class="menu-list" tag="div" to="/hot">
				<div class="menu-list-div">
					<img src="./../../assets/hot.png" alt="" class="bottom-img">
					<span>热点</span>
				</div>
			</router-link>
		</div>
    </div>
</template>
<script>
	export default {

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
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		font-size:12px;
		box-sizing:border-box;
		padding:0 50px;
		line-height:50px;
		color:#2c2c2c;
	}
	.menu-list-div{
		display:flex;
		flex-direction:column;
		justify-content:center;
		line-height:100%;
		padding-top:5px;
	}
	.bottom-img{
		width:25px;
		height:25px;
	}
	.bottom-mid{
		width:30px;
		height:30px;
	}
	.router-link-active{
		color:#d4237a;
	}
</style>