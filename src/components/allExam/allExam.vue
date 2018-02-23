<template>
    <div class="allExam">
        <div class="allExam-head">
            <span>全部考试</span>
            <img src="./../../assets/errorExam.png" alt="" @click="hideExam">
        </div>
        <div class="ExamList">
            <div class="ExamList-title">高中</div>
            <div class="ExamList-box">
                <ul>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
        <div class="ExamList">
            <div class="ExamList-title">初中</div>
            <div class="ExamList-box">
                <ul>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
        <div class="ExamList">
            <div class="ExamList-title">小学</div>
            <div class="ExamList-box">
                <ul>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                    <li>
                        <img src="./../../assets/Exam.png" alt="">
                        <span>期中考试</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>    
	import store from './../../store/store'

    export default {
        methods:{
            hideExam(){
				store.dispatch({
					type: 'resetZindex'
				})
                return this.$store.state.slideBar.showExam = false;
            }
        }
    }
</script>
<style>
    .allExam{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        width:100%;
        /*overflow:auto;*/
        background:#fff;
        z-index: 999;
    }
    .allExam-head{
        width:100%;
        height:50px;
        background:#efefef;
        text-align:center;
        line-height:50px;
        font-size:15px;
        box-sizing:border-box;
        padding:0 15px;
    }
    .allExam-head img{
        width:20px;
        height:20px;
        float:right;
        margin-top:15px;
    }
    .ExamList{
        border-top:1px solid #efefef;
        box-sizing:border-box;
        padding:0 15px;
    }
    .ExamList-title{
        font-size:15px;
        font-weight:bold;
        width:100%;
        height:30px;
        line-height:30px;
        text-align:left;
    }
    .ExamList-box ul li{
        width:25%;
        float:left;
        display:flex;
		flex-direction:column;
		justify-content:center;
        align-items: center;
        margin:10px 0;
    }
    .ExamList-box ul li img{
        width:30px;
        height:30px;
    }
</style>