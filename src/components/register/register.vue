<template>
    <div class="register">
        <div class="register-head">
            <img src="./../../assets/left.png" alt="" @click="hideRegister">
            <span @click="showPrivateTerm">隐私条款</span>
        </div>
        <p class="register-title">注册</p>
        <div class="register-body">
            <div class="register-body-phone">
                <p>账号</p>
                <input type="text" name="phone" placeholder="请输入手机号">
            </div>
            <div class="register-body-trust">
                <p>验证码</p>
                <input type="text" name="trust" placeholder="请输入验证码">
                <img src="./../../assets/trust.png" alt="">
            </div>
        </div>
        <p class="register-notice">请使用常用手机号码作为注册账号</p>
        <div class="register-next">
            <div class="register-next-box" @click="showRegisterNext">下一步</div>
        </div>
        <!--完成注册页面-->
        <transition name="sideUp">
            <registerNext v-if="registerNextShow"></registerNext>
        </transition>
        <!--隐私条款页面-->
        <transition name="sideUp">
            <privateTerm v-if="privateShow"></privateTerm>
        </transition>
    </div>
</template>
<script>
    import privateTerm from './../private/private.vue'
    import registerNext from './../registerNext/registerNext.vue'
	import store from './../../store/store'

    export default {
        data () {
            return {

            }
        },
        methods:{
            hideRegister(){
                return this.$store.state.slideBar.registerShow = false;
            },
            showRegisterNext(){
                return this.$store.state.slideBar.registerNextShow = true;
            },
            showPrivateTerm(){
                return this.$store.state.slideBar.privateShow = true;
            }
        },
        computed:{
            registerNextShow(){
                return this.$store.state.slideBar.registerNextShow
            },
            privateShow(){
                return this.$store.state.slideBar.privateShow
            }
        },
        components:{
            'privateTerm':privateTerm,
            'registerNext':registerNext
        }
    }
</script>
<style>
    .register{    
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        overflow: auto;
        background:#fff;
        z-index:3;
    }
    .register-head{
        width:100%;
		box-sizing:border-box;
		padding:15px;
		display:flex;
		justify-content:space-between;
        align-items:center;
    }
    .register-head img{
        width:20px;
        height:20px;
    }
    .register-title{
        padding:20px 0 20px 15px;
        font-size:14px;
        font-weight:600;
    }
    .register-notice{
        padding:5px 0 15px 15px;
        color:#8a8a8a;
    }
    .register-body{
        box-sizing:border-box;
        padding:0 15px;
        color:#000;
    }
    .register-body-phone{
		display:flex;
        align-items:center;
        width:100%;
        border-bottom:1px solid #8a8a8a;
        margin-bottom:15px;
    }
    .register-body-phone p{
        width:20%;
    }
    .register-body-phone input{
        flex:1;
        color:#8a8a8a;
        border:0;
        height:50px;
    }
    .register-body-trust{
		display:flex;
        align-items:center;
        width:100%;
        border-bottom:1px solid #8a8a8a;
        margin-bottom:15px;
    }
    .register-body-trust p{
        width:20%;
    }
    .register-body-trust input{
        flex:1;
        color:#8a8a8a;
        border:0;
        height:50px;
    }
    .register-body-trust img{
        width: 50px;
        height: 30px;
    }
    .register-next{
        box-sizing:border-box;
        padding:15px;
    }
    .register-next-box{
        width:100%;
        height:35px;
        background:#FF7F50;
        text-align:center;
        line-height:35px;
        color:#fff;
    }
</style>