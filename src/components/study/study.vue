<template>
    <div class="study">
        {{title}}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                title:'学习'
            }
        }
    }
</script>
<style>
    .study{
        position:fixed;
        top:0;
        bottom:51px;
        left:0;
        width:100%;
        overflow:auto;
    } 
</style>