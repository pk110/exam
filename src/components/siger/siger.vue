<template>
    <div class="siger">
        <!--头部-->
        <div class="siger-head">
            <div class="siger-head-body">
                <div class="siger-head-body-top">
                    <img src="./../../assets/header.png" alt="">
                    <span>背着吉他的蝙蝠侠</span>
                </div>
                <div class="siger-head-body-bottom">
                    <span>金币余额：0.00</span>
                    <div class="siger-head-body-bottom-buy">
                        <img src="./../../assets/recharge.png" alt="">
                        <span>充值</span>
                    </div>
                </div>
            </div>
        </div>
        <!--身体-->
        <div class="siger-body">
            <ul>
                <li>
                    <img src="./../../assets/headImg.png" alt="">
                    <span>个人资料</span>
                </li>
                <li>
                    <img src="./../../assets/orders.png" alt="">
                    <span>订单管理</span>
                </li>
                <li>
                    <img src="./../../assets/collect.png" alt="">
                    <span>收藏</span>
                </li>
                <li>
                    <img src="./../../assets/face.png" alt="">
                    <span>面授课程</span>
                </li>
                <li>
                    <img src="./../../assets/user.png" alt="">
                    <span>学员认证</span>
                </li>
                <li>
                    <img src="./../../assets/lesson.png" alt="">
                    <span>我的课程</span>
                </li>
                <li>
                    <img src="./../../assets/plan.png" alt="">
                    <span>学习计划</span>
                </li>
            </ul>
        </div>
        <!--底部-->
        <div class="siger-foot">
            <div class="siger-foot-left">
                <img src="./../../assets/userset.png" alt="">
                <span>设置</span>
            </div>
            <div class="siger-foot-right">
                <img src="./../../assets/night.png" alt="">
                <span>夜间模式</span>
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
            hideSiger(){
                return this.$store.state.slideBar.showSlider = false;
            }
        }
    }
</script>
<style>
    .siger{
        position:fixed;
        top:0;
        bottom:0;
        width:80%;
        overflow:auto;
        background:#fff;
        z-index: 1;
    } 
    .siger-head{
        width:100%;
        height:150px;
        background:url(http://img.hb.aicdn.com/272fc60687d01fbae4885e02e7babf9054a105531e292-4xdcsM_fw658) no-repeat;
        background-size:container;
        background-position:45% 45%;
        animation: animatedBackground 8s linear infinite alternate;
        position:relative;
        color:#fff;
    }
    @keyframes animatedBackground {
        from { background-position-y: 45% }
        to { background-position-y:  60% }
    }
    .siger-head-body{
        display:flex;
		flex-direction:column;
        position:absolute;
        bottom:0;
        box-sizing:border-box;
        padding:10px 0 10px 15px;
        width:100%;
    }
    .siger-head-body-top{
        display:flex;
		justify-content:flex-start;
		align-items:center;
    }
    .siger-head-body-top img{
        width:30px;
        height:30px;
        border:1px solid #fff;
        border-radius:100%;
        margin-right:5px;
    }
    .siger-head-body-bottom{
        display:flex;
		justify-content:space-between;
		align-items:center;
    }
    .siger-head-body-bottom img{
        width:15px;
        height:15px;
        margin-right:5px;
    }
    .siger-head-body-bottom-buy{
        display:flex;
		justify-content:space-between;
		align-items:center;    
        padding: 2px 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background: rgba(0,0,0,0.5);
    }
    .siger-body ul{
        width:100%;
        box-sizing:border-box;
        padding:20px 15px;
    }
    .siger-body ul li{
        list-style:none;
        display:flex;
		justify-content:flex-start;
		align-items:center; 
        height:40px;
    }
    .siger-body ul li img{
        width:20px;
        height:20px;
        margin-right:10px;
    }
    .siger-foot{
        position:absolute;
        bottom:0;
        width:100%;
        display:flex;
		justify-content:space-between;
		align-items:center; 
        height:50px;
        box-sizing:border-box;
        padding:20px 15px;
    }
    .siger-foot img{
        width:20px;
        height:20px;
        margin-right:5px;
    }
    .siger-foot-left{
        display:flex;
		justify-content:flex-start;
		align-items:center; 
    }
    .siger-foot-right{
        display:flex;
		justify-content:flex-start;
		align-items:center; 
    }
</style>