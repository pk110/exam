<template>
	<div class="common">
		<div class="common-menu">
			<img src="./../../assets/user.png" alt="" class="header" @click="showUser">
			<router-link class="menu-list" tag="div" to="/index" exact>
				<div class="menu-list-div">高中</div>
			</router-link>
			<router-link class="menu-list" tag="div" to="/index/junior">
				<div class="menu-list-div">初中</div>
			</router-link>
			<router-link class="menu-list" tag="div" to="/index/primary">
				<div class="menu-list-div">小学</div>
			</router-link>
			<img src="./../../assets/menu.png" alt="" class="header">
		</div>
  		<transition     name="custom-classes-transition"
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideInRight">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
    import Senior from './../Senior/Senior'
    import junior from './../junior/junior'
    import primary from './../primary/primary'
	import store from './../../store/store'

    export default {
		methods: {
			showUser(){
				return this.$store.state.slideBar.show = true;
			}
		},
		components: {
			Senior: Senior,
			junior: junior,
			primary: primary
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
</style>