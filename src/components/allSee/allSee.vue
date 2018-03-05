<template>
    <div class="allSee"> 
        <ul>
            <li v-for="item in newslist.newsList">
                <router-link :to="{name:'newslistDetail',params:{ url:item.viewUrl}}">
                    <img :src="['www.qixingyueqi.com/file/'+item.documentDataMap.productSmallImage.dataValue]" alt="">
                    <div class="allSee-bottom">{{item.title}}</div>
                    <div class="allSee-left">
                        <span>{{item.documentDataMap.productMarketPrice.dataValue}}</span>
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
    .allSee{
        overflow: auto;
        position: absolute;
        width: 100%;
        top:0;
        bottom:0;
		transition: all .5s linear;
    }
    .allSee ul li{
        list-style:none;
        padding:0 15px;
    }
    .allSee ul li img{
        width:100%;
        height:200px;
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