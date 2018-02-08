<template>
    <div class="user">
        <div class="user-head">
            <div class="user-top">
                <img src="./../../assets/set.png" alt="">
                <img src="./../../assets/error.png" alt="" @click="hideUser">
            </div>
            <img src="./../../assets/header.png" alt=""  class="user-img">
            <p class="user-name">背着吉他的蝙蝠侠</p>
            <p class="user-money">金币余额：0.00</p>
            <div class="user-recharge">
                <img src="./../../assets/recharge.png" alt="">
                <span>充值</span>
            </div>
        </div>
        <div class="user-message">
            <div class="user-message-bar">
                <img src="./../../assets/headImg.png" alt="">
                <span>个人资料</span>
            </div>
            <div class="user-message-bar">
                <img src="./../../assets/orders.png" alt="">
                <span>订单管理</span>
            </div>
            <div class="user-message-bar">
                <img src="./../../assets/collect.png" alt="">
                <span>收藏</span>
            </div>
        </div>
        <div class="user-face">
            <div class="user-lesson-title">面授服务</div>
            <div class="user-face-container">
                <div class="user-face-left">
                    <img src="./../../assets/face.png" alt="">
                    <div class="user-face-lesson">面授课程></div>
                </div>
                <div class="user-face-right">
                    <img src="./../../assets/user.png" alt="">
                    <span>学员认证</span>
                </div>
            </div>
        </div>
        <div class="user-lesson">
            <div class="user-lesson-title">课程管理</div>
            <div class="user-lesson-container">
                <div class="user-lesson-box">
                    <img src="./../../assets/lesson.png" alt="">
                    <span>我的课程</span>
                </div>
                <div class="user-lesson-box" style="margin-left:20px;">
                    <img src="./../../assets/plan.png" alt="">
                    <span>学习计划</span>
                </div>
            </div>
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
            hideUser(){
                return this.$store.state.slideBar.show = false;
            }
        }
    }
</script>
<style>
    .user{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        width:100%;
        overflow:auto;
        background:#efefef;
    } 
    .user-head{
        position:relative;
        width:100%;
        height:30vh;
        background:url(./../../assets/background.jpg) no-repeat;
        background-size:cover;
        color:#fff;
        text-align:center;
    }
    .user-top{
        width:100%;
		box-sizing:border-box;
		padding:15px;
		display:flex;
		flex-direction:row;
		justify-content:space-between;

    }
    .user-top img{
        width:20px;
        height:20px;
    }
    .user-img{
        width:50px;
        height:50px;
        border:1px solid #fff;
        border-radius:100%;
        padding: 1px;
    }
    .user-message{
        width:100%;
        height:60px;
        margin-bottom:15px;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
        background:#fff;
    }
    .user-message-bar{
        width:30%;
        height:60px;
		display:flex;
		flex-direction:column;
		justify-content:center;
        align-items:center;
    }
    .user-message-bar img{
        width:20px;
        height:20px;
        padding-bottom:5px;
    }
    .user-lesson{
        background:#fff;
        box-sizing:border-box;
        padding:0 15px 15px 15px;
    }
    .user-lesson-container{
		display:flex;
		flex-direction:row;
		justify-content:flex-start;
        align-items:center;
    }
    .user-lesson-title{
        width:100%;
        height:40px;
        line-height:40px;
        font-size:15px;
        color:gray;
    }
    .user-lesson-box{
		display:flex;
		flex-direction:column;
		justify-content:center;
        align-items:center;
    }
    .user-lesson-box img{
        width:20px;
        height:20px;
        padding-bottom:5px;
    }
    .user-face{
        background:#fff;
        box-sizing:border-box;
        padding:0 15px 15px 15px;
        margin-bottom:15px;
    }
    .user-face-container{
		display:flex;
		flex-direction:row;
		justify-content:space-between;
        align-items:center;
    }
    .user-face-left{
		display:flex;
		flex-direction:row;
		justify-content:flex-start;
        align-items:center;
    }
    .user-face-left img{
        width:50px;
        height:50px;
    }
    .user-face-lesson{
        color:#d4237a;
        border:1px solid #d4237a;
        padding:1px 3px;
        border-radius:5px;
    }
    .user-face-right{
		display:flex;
		flex-direction:column;
		justify-content:center;
        align-items:center;
    }
    .user-face-right img{
        width:30px;
        height:30px;
    }
    .user-recharge{
        position:absolute;
        bottom:10px;
        right:0;
		display:flex;
		flex-direction:row;
		justify-content:center;
        align-items:center;
        padding:2px 10px;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
        background:rgba(0,0,0,0.5);
    }
    .user-recharge img{
        width:15px;
        height:15px;
        margin-right:3px;
    }
</style>