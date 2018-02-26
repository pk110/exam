<template>
    <div class="registerNext">
        <div class="registerNext-head">
            <img src="./../../assets/left.png" alt="" @click="hideRegisterNext">
            <span>隐私条款</span>
        </div>
        <p class="registerNext-title">注册</p>
        <div class="registerNext-body">
            <div class="registerNext-body-phone">
                <p>短信验证码</p>
                <input type="text" name="phoneTrust" placeholder="请输入验证码">
                <span>获取验证码</span>
            </div>
            <div class="registerNext-body-trust">
                <p>密码</p>
                <input type="password" name="password" placeholder="请输入密码">
                <img src="./../../assets/trust.png" alt="">
            </div>
        </div>
        <div class="registerNext-next">
            <div class="registerNext-next-box">完成注册，并登陆</div>
        </div>
    </div>
</template>
<script>
	import store from './../../store/store'

    export default {
        data () {
            return {

            }
        },
        methods:{
            hideRegisterNext(){
                return this.$store.state.slideBar.registerNextShow = false;
            }
        }
    }
</script>
<style>
    .registerNext{    
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        overflow: auto;
        background:#fff;
        z-index:3;
    }
    .registerNext-head{
        width:100%;
		box-sizing:border-box;
		padding:15px;
		display:flex;
		justify-content:space-between;
        align-items:center;
    }
    .registerNext-head img{
        width:20px;
        height:20px;
    }
    .registerNext-title{
        padding:20px 0 20px 15px;
        font-size:14px;
        font-weight:600;
    }
    .registerNext-notice{
        padding:5px 0 15px 15px;
        color:#8a8a8a;
    }
    .registerNext-body{
        box-sizing:border-box;
        padding:0 15px;
        color:#000;
        margin-bottom:40px;
    }
    .registerNext-body-phone{
		display:flex;
        align-items:center;
        width:100%;
        border-bottom:1px solid #8a8a8a;
        margin-bottom:15px;
    }
    .registerNext-body-phone p{
        width:25%;
    }
    .registerNext-body-phone input{
        flex:1;
        color:#8a8a8a;
        border:0;
        height:50px;
    }
    .registerNext-body-trust{
		display:flex;
        align-items:center;
        width:100%;
        border-bottom:1px solid #8a8a8a;
        margin-bottom:15px;
    }
    .registerNext-body-trust p{
        width:25%;
    }
    .registerNext-body-trust input{
        flex:1;
        color:#8a8a8a;
        border:0;
        height:50px;
    }
    .registerNext-body-trust img{
        width: 50px;
        height: 30px;
    }
    .registerNext-next{
        box-sizing:border-box;
        padding:15px;
    }
    .registerNext-next-box{
        width:100%;
        height:35px;
        background:#FF7F50;
        text-align:center;
        line-height:35px;
        color:#fff;
    }
</style>