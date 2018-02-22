<template>
    <div class="home">  
        <!--广告滚动-->
        <div class="advertisement">
            <div>
                <img src="./../../assets/sounce.png" alt="">
                <p>高中在线观看考试教程，各种优惠等你来哦！</p>    
            </div>
        </div>   
        <!--轮播图--> 
        <div class="swiper-container">
            <swiper :options="swiperOption"  ref="mySwiper">  
                <!-- 这部分放你要渲染的那些内容 -->  
                <swiper-slide v-for="item in items"> 
                    <img :src="item">
                </swiper-slide>   
                <!--轮播图小点-->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!--<div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
            </swiper>  
        </div>
        <!--搜索教程-->
        <div class="search">
            <div class="search-box">
                <img src="./../../assets/search.png" alt="">
                <span style="padding-left:15px;">找教程</span>
            </div>
        </div>
        <!--直播课程-->
        <div class="living">
            <div class="living-top">
                <div class="living-top-commend">
                    <div class="block"></div>
                    <span style="padding-left:10px;">直播推荐</span>
                </div>
                <div class="right">
                    <span>更多</span>
                    <img src="./../../assets/right.png" alt="">
                </div>
            </div>
            <div class="living-bottom">
                <ul>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="living-updata">
                <img src="./../../assets/updata.png" alt="">
                <span style="padding-left:15px;">换一批</span>
            </div>
        </div>
        <!--录播课程-->
        <div class="living" style="margin-top:0;">
            <div class="living-top">
                <div class="living-top-commend">
                    <div class="block"></div>
                    <span style="padding-left:10px;">录播课程</span>
                </div>
                <div class="right">
                    <span>更多</span>
                    <img src="./../../assets/right.png" alt="">
                </div>
            </div>
            <div class="living-bottom">
                <ul>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="living-updata">
                <img src="./../../assets/updata.png" alt="">
                <span style="padding-left:15px;">换一批</span>
            </div>
        </div>
        <!--面授推荐-->
        <div class="living" style="margin-top:0;">
            <div class="living-top">
                <div class="living-top-commend">
                    <div class="block"></div>
                    <span style="padding-left:10px;">面授推荐</span>
                </div>
                <div class="right">
                    <span>更多</span>
                    <img src="./../../assets/right.png" alt="">
                </div>
            </div>
            <div class="living-bottom">
                <ul>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="living-updata">
                <img src="./../../assets/updata.png" alt="">
                <span style="padding-left:15px;">换一批</span>
            </div>
        </div>
        <!--必读资料-->
        <div class="living" style="margin-top:0;">
            <div class="living-top">
                <div class="living-top-commend">
                    <div class="block"></div>
                    <span style="padding-left:10px;">必读资料</span>
                </div>
                <div class="right">
                    <span>更多</span>
                    <img src="./../../assets/right.png" alt="">
                </div>
            </div>
            <div class="living-bottom">
                <ul>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                    <li>
                        <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="" class="product-img">
                        <p class="product-title">标题标题考试考试考试直播直播教程教程</p>
                        <p class="product-people">200人购买</p>
                        <div class="product-bottom">
                            <div class="product-money">
                                <img src="./../../assets/money.png" alt="">
                                <span>12元</span>
                            </div>
                            <p class="product-time">2018-11-12</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="living-updata">
                <img src="./../../assets/updata.png" alt="">
                <span style="padding-left:15px;">换一批</span>
            </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data () {
        return {
            items:['http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658',
            'http://img.hb.aicdn.com/68f1243c4d528bff8bc5916a4caf0dcb988b44db47985-LxOo2a_fw658',
            'http://img.hb.aicdn.com/7ea97310a262acbf48950c51ef1d97c9842a840f17ac3-eTgIHg_fw658'],
            swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                direction : 'horizontal',
                effect:"coverflow",
                grabCursor : true,
                setWrapperSize :true,
                // autoHeight: true,
                // paginationType:"bullets",
                pagination : '.swiper-pagination',
                paginationClickable :true,
                // prevButton:'.swiper-button-prev',
                // nextButton:'.swiper-button-next',
                // scrollbar:'.swiper-scrollbar',
                mousewheelControl : true,
                observeParents:true,
                // if you need use plugins in the swiper, you can config in here like this
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                // debugger: true,
                // swiper callbacks
                // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                onTransitionStart(swiper){
                //   console.log(swiper)
                }
                // more Swiper configs and callbacks...
                // ...
            }
        }
    }, 
    //定义这个sweiper对象  
    computed: {  
        swiper() {  
            return this.$refs.mySwiper.swiper;  
        }  
    },  
    mounted () {  
        //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
        //this.swiper.slideTo(0, 0, false);  
    },  
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style scoped>
    .home{        
        overflow: auto;
        position: absolute;
        width: 100%;
    }
   .swiper-container{
       width:100%;
       box-sizing:border-box;
       padding:0 8px;
   }
   .swiper-container img{
       width:100%;
       height:25vh;
       border-radius:5px;
   }
   .advertisement img{
       width:20px;
       height:20px;
   }
   .advertisement{
        width: 100%;
        height: 30px;
        box-sizing:border-box;
        padding:0 15px;
    }
    .advertisement div{
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        overflow: hidden;
    }
    .advertisement p{
        width: 100%;
        height: 30px;
        font-size:12px;
        line-height:30px;
        color:#ccc;
        overflow: hidden;
        animation: move 8s linear infinite normal;
    }
   @keyframes move{
			0%{transform:translateX(0px);}
			20%{transform:translateX(24%);}
			40%{transform:translateX(44%);}
			60%{transform:translateX(64%);}
			80%{transform:translateX(84%);}
			100%{transform:translateX(104%);}
    }
    .search{
        box-sizing:border-box;
        padding:0 15px;
        margin-top:15px;
    }
    .search-box{
        width:100%;
        height:30px;
        border-radius:5px;
        font-size:12px;
        color:#d4237a;
        box-shadow:0px 0px 3px #ccc;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    }
    .search-box img{
        width:20px;
        height:20px;
    }
    .living{
        width:100%;
        box-sizing:border-box;
        padding:0 15px;
        margin-top:15px;
    }
    .living:nth-child(2n+2){
        background:#F8F8FF;
    }
    .living-top{
        width:100%;
        height:30px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    .living-top-commend{
        display:flex;
        flex-direction:row;
        align-items:center;
    }
    .block{
        width:5px;
        height:14px;
        background:#d4237a;
    }
    .right{
        display:flex;
        flex-direction:row;
        align-items:center;
        color:#ccc;
    }
    .right img{
        width:12px;
        height:12px;
    }
    .living-bottom{
        width:100%;
    }
    .living-bottom ul li{
        width:49%;
        float:left;
        list-style:none;
        margin-top:10px;
    }
    .living-bottom ul li:nth-child(2n+2){
        margin-left:2%;
    }
    .product-img{
        width:100%;
        height:20vh;
    }
    .product-title{
        margin-top:10px;
    }
    .product-people{
        margin-top:10px;
        float: right;
        color:#ccc;
    }
    .product-bottom{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        clear:both;
        margin-top:40px;
        color:#ccc;
    }
    .product-money{
        display:flex;
        flex-direction:row;
        align-items:center;
    }
    .product-money span{
        color:#d4237a;
        padding-left:5px;
    }
    .product-money img{
        width:15px;
        height:15px;
    }
    .living-updata{
        width:100%;
        height:50px;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        color:#cccccc;
    }
    .living-updata img{
        width:15px;
        height:15px;
    }
</style>