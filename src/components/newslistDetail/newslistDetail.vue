<template>
    <div class="newslistDetail"> 
        <ul>
            <li>
                详情页获取列表页的数据url:
                {{childgetfather}}
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
            childgetfather(){
                console.log(this.$route.params.url)
                return this.$route.params.url
            }
        },
        created:{
            
        }
    }
</script>
<style>
    .newslistDetail{
        overflow: auto;
        position: fixed;
        top:0;
        width: 100%;
		transition: all .5s linear;
    }
    .newslistDetail ul li{
        list-style:none;
    }
    .newslistDetail ul li img{
        width:100%;
        height:200px;
    }
</style>