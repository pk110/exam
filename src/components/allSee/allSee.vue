<template>
    <div class="allSee"> 
        <div v-if="downUpdate" class="downUpdata">
            <img src="./../../assets/loading.gif" alt="">
            <span>内容加载中...</span>
        </div>
        <ul>
            <li v-for="item in newslist.newsList">
                <router-link :to="{name:'newslistDetail',params:{ url:item.viewUrl}}">
                    <!--<img :src="['www.qixingyueqi.com/file/'+item.documentDataMap.productSmallImage.dataValue]" alt="">-->
                    <img :src="item.documentDataMap.productSmallImage.dataValue" alt="">
                    <div class="allSee-bottom">{{item.title}}</div>
                    <div class="allSee-left">
                        <span>{{item.documentDataMap.productMarketPrice.dataValue}}元</span>
                        <span>{{item.publishTime}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>	
    import store from './../../store/store'

    export default {
		data () {
			return {
                
			}
		},
		methods: {

        },
        computed: {
            newslist () {
                console.log(this.$store.state.newslist.newslist)
                return this.$store.state.newslist.newslist
            },
            downUpdate(){
                return this.$store.state.slideBar.showUpdata
            }
        },
        created(){
            console.log('加载都在看数据app.vue里的fetchAllSeeData')
            // console.log(this.$root)
            // this.$root.fetchAllSeeData
        }

    }
</script>
<style>
    .downUpdata{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    .downUpdata img{
        margin-left:5px;
        width:20px;
        height:20px;
    }
    .allSee{
        overflow-y: auto;
        /*position: fixed;
        top:50px;
        bottom:51px;
        width: 100%;*/
		transition: all .5s linear;
    }
    .allSee ul{
        position: absolute;
        overflow-y: auto;
        width: 100%;
        height: 100%;
    }
    .allSee ul li{
        list-style:none;
        padding:0 15px;
    }
    .allSee ul li img{
        width:100%;
        height:200px;
        border-radius:5px;
    }
    .allSee-bottom{
        width:100%;
        height:30px;
        /*background:red;*/
        padding-left:15px;
    }
    .allSee ul li a{
        text-decoration:none;
        color:#000;
    }
    .allSee-left{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        padding:0 15px;
        margin-bottom:15px;
    }
</style>