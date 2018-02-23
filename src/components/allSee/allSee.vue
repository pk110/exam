<template>
    <div class="allSee"> 
        <ul>
            <li>
                <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="">
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