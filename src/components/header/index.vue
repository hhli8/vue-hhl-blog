<template>
    <div class="header">
        <div class="back" @click="back">返回</div>
        <div class="title">{{title}}</div>
        <div class="right" v-if="isRight">888</div>
    </div>
</template>

<script>
    export default {
        props:{
          title:String,
          isRight:{
            default:false
          }
        },
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
        .back{
          position: absolute;
          top:0;
          left:0;
          display: inline-block;
          height: 100%;
          line-height: 1rem;
          padding: 0 .4rem;
        }
        .title{
          text-align: center;
          height: 1rem;
          line-height: 1rem;
          font-size: .36rem;
        }
        .right{
          position: absolute;
          top:0;
          right:0;
        }
    }
</style>