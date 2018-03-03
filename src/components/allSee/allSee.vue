<template>
    <div class="allSee"> 
        <ul>
            <li v-for="item in newslist.finger">
                <router-link :to="{name:'newslistDetail',params:{ url:item.document.viewUrl}}">
                    <img :src="['www.qixingyueqi.com'+item.document.productSmallImage]" alt="">
                    <div class="allSee-bottom">{{item.document.title}}</div>
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
		transition: all .5s linear;
    }
    .allSee ul li{
        list-style:none;
    }
    .allSee ul li img{
        width:100%;
        height:200px;
    }
    .allSee-bottom{
        width:100%;
        height:30px;
        background:red;
    }
</style>