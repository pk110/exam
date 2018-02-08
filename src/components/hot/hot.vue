<template>
    <div class="hot">
        {{title}}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                title:'热点'
            }
        }
    }
</script>
<style>
    .hot{
        position:fixed;
        top:0;
        bottom:51px;
        left:0;
        width:100%;
        overflow:auto;
    }
</style>