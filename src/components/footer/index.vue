<template>
    <ul class="bottomFixed flexBox flexBetween">
        <li v-for="(item,index) in bottomFixed" :key="index"><router-link :to="item.to">{{item.text}}</router-link></li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                bottomFixed:[
                  {text:'阿达大师',to:'/'},
                  {text:'阿达大师',to:''},
                  {text:'阿达大师',to:''},
                  {text:'个人中心',to:'personal'}
                  //home, 私信，个人中心，生活-个人
                ]
            }
        }
    }
</script>

<style lang="scss">
    .bottomFixed{
        position: fixed;
        bottom: 0;
        border-top: .01rem solid #eee;
        height: 1rem;
        line-height: 1rem;
        width:100%;
        background: #ccc;
        box-sizing: content-box;
        li{
          width:25%;
          text-align: center;
        }
    }
</style>