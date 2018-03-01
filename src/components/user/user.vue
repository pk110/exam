<template>
    <div class="user">
        <img src="./../../assets/left.png" alt="" @click="hideUser" class="user-img">
        <div class="clear"></div>
        <div class="user-head">
            <span>密码登录</span>
            <img src="./../../assets/header.png" alt="">
        </div>
        <div class="user-body">
            <div class="user-body-username">
                <p>用户名</p>
                <input type="text" name="username" placeholder="请输入手机号或者邮箱" ref="username">
            </div>
            <div class="user-body-password">
                <p>密码</p>
                <input type="password" name="userpassword" placeholder="请输入密码" ref="password">
            </div>
        </div>
        <div class="user-login">
            <div class="user-login-box" @click="login">登录</div>
        </div>
        <div class="user-register">
            <div class="user-register-box" @click="showRegister">注册领取免费教程</div>
        </div>
        <div class="user-forget">忘记密码?</div>
        <!--注册页面-->
        <transition name="sideUp">
            <register v-if="registerShow"></register>
        </transition>
    </div>
</template>
<script>
    import register from './../register/register.vue'
	import store from './../../store/store'
    import {delCookie,getCookie,setCookie} from './../../util/util'

    export default {
        data () {
            return {

            }
        },
        methods:{
            hideUser(){
                return this.$store.state.slideBar.show = false;
            },
            showRegister(){
                return this.$store.state.slideBar.registerShow = true;
            },
            login(){
                console.log(this.$refs.password.value)
                console.log(this.$refs.username.value)
                if(this.$refs.password.value == 1234567 && this.$refs.username.value == '背着吉他的蝙蝠侠'){
                        alert('登录成功')
                        setCookie('username',this.$refs.username.value,1000)
                }else{
                    alert('输入不正确')
                }
            }
        },
        computed:{
            registerShow(){
                return this.$store.state.slideBar.registerShow
            }
        },
        components:{
            'register':register
        }
    }
</script>
<style>
    .user-img{
        width:20px;
        height:20px;
        float:left;
        margin-left:15px;
        margin-top:20px;
    }
    .user{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        width:100%;
        overflow:auto;
        background:#fff;    
        z-index: 2;
    } 
    .user-head{
		box-sizing:border-box;
		padding:15px;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
        align-items:flex-end;
        margin-bottom: 20px;
    }
    .user-head img{
        width:36px;
        height:36px;
    }
    .user-head span{
        font-size: 14px;
        font-weight: 600;
    }
    .user-body{
        box-sizing:border-box;
        padding:0 15px;
        color:#000;
    }
    .user-body-username{
		display:flex;
        align-items:center;
        width:100%;
        border-bottom:1px solid #8a8a8a;
        margin-bottom:15px;
    }
    .user-body-username p{
        width:20%;
    }
    .user-body-username input{
        flex:1;
        color:#8a8a8a;
        border:0;
        height:50px;
    }
    .user-body-password{
		display:flex;
        align-items:center;
        width:100%;
        border-bottom:1px solid #8a8a8a;
        margin-bottom:15px;
    }
    .user-body-password p{
        width:20%;
    }
    .user-body-password input{
        flex:1;
        color:#8a8a8a;
        border:0;
        height:50px;
    }
    .user-login{
        box-sizing:border-box;
        padding:15px;
    }
    .user-login-box{
        width:100%;
        height:35px;
        background:#FF7F50;
        text-align:center;
        line-height:35px;
        color:#fff;
    }
    .user-register{
        box-sizing:border-box;
        padding:15px;
    }
    .user-register-box{
        width:100%;
        height:35px;
        text-align:center;
        line-height:35px;
        color:#000;
        border:1px solid #8a8a8a;
    }
    .user-forget{
        position:absolute;
        bottom:20px;
        right:15px;
        color:#8a8a8a;
    }
</style>