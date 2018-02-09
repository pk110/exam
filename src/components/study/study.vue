<template>
    <div class="study">
        <div class="study-head">
            <span>学习</span>
            <img src="./../../assets/user.png" alt="" @click="showUser">
        </div>
        <div class="study-training">
            <div class="study-training-box">
                <div class="study-training-box-left">
                    <div class="study-training-box-left-top">
                        <img src="./../../assets/menu.png" alt="">
                        <span>真题考试</span>
                    </div>
                    <div class="study-training-box-left-bottom">
                        <div class="study-training-box-left-bottom-left">
                            <img src="./../../assets/menu.png" alt="">
                            <span>真题考试</span>
                        </div>
                        <div class="study-training-box-left-bottom-right">
                            <img src="./../../assets/menu.png" alt="">
                            <span>真题考试</span>
                        </div>
                    </div>
                </div>
                <div class="study-training-box-right">
                    <div class="study-training-box-right-box">
                        <img src="./../../assets/menu.png" alt="">
                        <span>真题考试</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="study-face">
            <div class="study-face-head">
                <div class="block"></div>
                <span>面授课服务</span>
            </div>
            <div class="study-face-box">
                <img src="./../../assets/face.png" alt="">
                <div class="study-face-lesson">面授课程></div>
            </div>
        </div>
        <div class="study-mylesson">
            <div class="study-mylesson-head">
                <div class="study-mylesson-head-left">
                    <div class="block"></div>
                    <span>我的课程</span>
                </div>
                <div class="study-mylesson-head-right"  @click="showUser">
                    <span>查看更多</span>
                    <img src="./../../assets/right.png" alt="">
                </div>
            </div>
            <div class="study-mylesson-body">
                <ul>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="">
                        <p>高中期末考试讲解考试讲解完美解答各种问题</p>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="">
                        <p>高中期末考试讲解考试讲解完美解答各种问题</p>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="">
                        <p>高中期末考试讲解考试讲解完美解答各种问题</p>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="">
                        <p>高中期末考试讲解考试讲解完美解答各种问题</p>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="">
                        <p>高中期末考试讲解考试讲解完美解答各种问题</p>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="">
                        <p>高中期末考试讲解考试讲解完美解答各种问题</p>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <div class="study-plan">
                <div class="study-face-head">
                    <div class="block"></div>
                    <span>学习计划</span>
                </div>
                <div class="study-plan-add">
                    <img src="./../../assets/pen.png" alt="">
                    <span>自定义计划</span>
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
			showUser(){
				store.dispatch({
					type: 'showUser'
				})
			}
        }
    }
</script>
<style>
    .study{
        position:fixed;
        top:0;
        bottom:51px;
        left:0;
        width:100%;
        overflow:auto;
        background:#d4237a;
    } 
    .study-head{
        width:100%;
        height:50px;
        box-sizing:border-box;
        padding:0 15px;
        color:#fff;
        text-align:center;
        line-height:50px;
        font-size:14px;
    }
    .study-head img{
        width:25px;
        height:25px;
        position:absolute;
        left:15px;
        margin-top:12.5px;
        border:1px solid #fff;
        border-radius:100%;
    }
    .study-training{
        width:100%;
        height:80px;
        background:#eeeeee;
        margin-top:70px;
        box-sizing:border-box;
        padding:0 15px;
    }
    .study-training-box{
        width:92%;
        height:130px;
        background:#fff;
        border-radius:5px;      
        position: absolute;
        top: 55px;
        /* right: 7.5px; */
        right: 4%;
        color:gray;
    }
    .study-training-box img{
        width:25px;
        height:25px;
    }
    .study-training-box-left{
        width:49.5%;
        height:130px;
        float:left;
        box-sizing:border-box;
        padding:0 15px;
    }
    .study-training-box-left-top{
        width:100%;
        height:64.5px;
        border-bottom:1px solid #efefef;
        display:flex;
		flex-direction:row;
		justify-content:center;
        align-items:center;
    }
    .study-training-box-left-top img{
        margin-right:5px;
    }
    .study-training-box-left-bottom{
        width:100%;
        height:64.5px;
        display:flex;
		flex-direction:row;
        box-sizing:border-box;
        padding:15px 0;
    }
    .study-training-box-left-bottom-left{
        width:49.5%;
        height:100%;
        border-right:1px solid #efefef;
        display:flex;
		flex-direction:column;
		justify-content:center;
        align-items:center;
    }
    .study-training-box-left-bottom-right{
        width:49.5%;
        height:100%;
        display:flex;
		flex-direction:column;
		justify-content:center;
        align-items:center;
    }
    .study-training-box-right{
        width:49.5%;
        height:130px;
        float:left;
        box-sizing:border-box;
        padding:15px 0;
    }
    .study-training-box-right-box{
        height:100px;
        display:flex;
		flex-direction:column;
		justify-content:center;
        align-items:center;
        border-left:1px solid #efefef;
    }
    .study-face{
        box-sizing:border-box;
        padding:0 15px;
        background:#fff;
    }
    .block{
        width: 5px;
        height: 14px;
        background: #d4237a;
        margin-right:5px;
    }
    .study-face-head{
        width:100%;
        height:30px;
        display:flex;
		justify-content:flex-start;
        align-items:center;
    }
    .study-face-box{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding:15px 0;
    }
    .study-face-box img{
        width: 50px;
        height: 50px;
    }
    .study-face-lesson{
        color: #d4237a;
        border: 1px solid #d4237a;
        padding: 1px 3px;
        border-radius: 5px;
    }
    .study-mylesson{
        box-sizing:border-box;
        padding:0 15px;
        background:#fff;
    }
    .study-mylesson-head{
        width:100%;
        height:30px;
        display:flex;
		justify-content:space-between;
        align-items:center;
    }
    .study-mylesson-head-left{
        display:flex;
        flex-direction: row;
		justify-content:flex-start;
        align-items:center;
    }
    .study-mylesson-head-right{
        display:flex;
        flex-direction: row;
		justify-content:flex-end;
        align-items:center;
        color:gray;
    }
    .study-mylesson-head-right img{
        width:15px;
        height:15px;
    }
    .study-mylesson-body ul{
        width:100%;
        overflow-y: hidden;
        overflow-x: auto;
        white-space: nowrap;
    }
    .study-mylesson-body ul li{
        width:30%;
        float:left;
        margin-right:5%;
        position: relative;
        display: inline-block;
        list-style:none;
        margin-top:10px;
    }
    .study-mylesson-body ul li:nth-child(3n+3){
        margin-right:0;
    }
    .study-mylesson-body ul li img{
        width:100%;
        height:10vh;
    }
    .study-mylesson-body ul li p{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .study-plan{
        margin-top:10px;
    }
    .study-plan-add{
        width:100%;
        background:#fff;
        padding-bottom:75px;
        color:gray;
        display:flex;
		justify-content:flex-start;
        align-items:center;
    }
    .study-plan-add img{
        width:25px;
        height:25px;
    }
</style>