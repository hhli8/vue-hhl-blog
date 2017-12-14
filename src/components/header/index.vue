<template>
    <div class="header">
        <div class="back" @click="back"><span class="icon icon-back"></span>返回</div>
        <div class="title">{{title}}</div>
        <div class="right closeType" v-if="isRight" @click="toggleDiffer"><span class="icon icon-differ closeType" :class="openTypes?'active':''"></span></div>
    </div>
</template>

<script>
    export default {
        props:{
          title:String,
          isRight:{
            default:false
          },
          openTypes:{default:false}
        },
        data() {
          return {
            
          }
        },
        methods:{
            back(){
                history.go(-1);
            },
            toggleDiffer(){
              //this.openTypes=!this.openTypes //原因是在使用组件时，传入的prop，被组件内部又做了一次修改，然后抛的异常
              this.$emit('openType',this.openTypes);
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
          margin-left: .2rem;
          .icon-back{
            display: inline-block;
            vertical-align: bottom;
            width:.4rem;
            height: 100%;
            background: url(../../../static/imgs/icon/back.png) no-repeat center;
            background-size: 100%;
          }
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
          height: 100%;
          padding: 0 .16rem;
          .icon-differ{
            display: inline-block;
            vertical-align: bottom;
            width:.52rem;
            height: 100%;
            background: url(../../../static/imgs/icon/differ.png) no-repeat center;
            background-size: 100%;
            transition: all linear .3s;
          }
          .icon-differ.active{
            transform: rotate(90deg);
          }
        }
    }
</style>