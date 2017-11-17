<template>
    <div class="header">
        <div class="back" @click="back">返回</div>
    </div>
</template>

<script>
    export default {
        methods:{
            back(){
                history.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        position: fixed;
        width:100%;
        top:0;
        left:0;
        height: 1rem;
        z-index:1000;
        background: #666;
        color:#fff;
    }
</style>