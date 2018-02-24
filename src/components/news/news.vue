<template>
    <div class="news"> 
        <ul>
            <li>
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2645597901,3299484952&fm=27&gp=0.jpg" alt="">
                <div class="news-bottom"></div>
            </li>
            <li>
                热资讯
            </li>
        </ul>
    </div>
</template>
<script>
    
</script>
<style>
    .news{
        overflow: auto;
        position: absolute;
        width: 100%;
		transition: all .5s linear;
    }
    .news ul li{
        list-style:none;
    }
    .news ul li img{
        width:100%;
        height:200px;
    }
    .news-bottom{
        width:100%;
        height:30px;
        background:red;
    }
</style>