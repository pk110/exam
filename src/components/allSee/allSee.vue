<template>
    <div class="allSee"> 
        <ul>
            <li>
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=383438735,1962824552&fm=27&gp=0.jpg" alt="">
                <div class="allSee-bottom"></div>
            </li>
            <li>
                都在看
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
        created(){
            console.log('加载都在看数据app.vue里的fetchAllSeeData')
            console.log(this.$root)
            this.$root.fetchAllSeeData
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