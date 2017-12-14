<template>
  <div>
    <div class="scroll-box" @scroll="scroll">     
      <div class="advertise">
        <mt-swipe :auto="0" :show-indicators="false">
          <mt-swipe-item v-for="(item,index) in advertise" :key="index"><a href="#"><img :src="item.src" alt="loading" /></a></mt-swipe-item>
        </mt-swipe>
      </div>
      <ul class="nav-fixed flexBox flexBetween" ref="scroll" :class="navParam.fixed">
        <li v-for="(item,index) in navFixed" :key="index"><router-link :to="item.to">{{item.text}}</router-link></li>
      </ul>
      <ul class="nav-fixed" v-show="navParam.navLike" ref="scrollLike"></ul>
      <h-footer></h-footer>
      <!--<ul id="bottomFixed" class="flexBox flexBetween">
        <li v-for="(item,index) in bottomFixed" :key="index"><router-link :to="item.to">{{item.text}}</router-link></li>
      </ul>-->
      
      
      
      <router-link to="part1">part1</router-link>
      <p>
        asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>
      </p>
      <router-link to="login">去登录</router-link><br />
      <router-link to="section1">section1</router-link>
      <p>
        asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>
      </p>
      <router-link to="section2">section2</router-link>
      <p>
        asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>
      </p>
      end
      <h3>功能组件列表</h3>
      <router-link to="components">查看功能组件</router-link>
    </div>
    
    <router-view name="section1" class="section"/>
    <router-view name="section2" class="section"/>
    <router-view name="comp" class="section"/>
    <transition></transition>
    <router-view name="personal" class="section"/>
    <!--<div id="modal">
      <div class="modal-bg"></div>
      <div class="modal-wait">
        <div class="isRefreshing">
            <div class="object object_one"></div>
            <div class="object object_two"></div>
            <div class="object object_three"></div>
            <div class="object object_four"></div>
            <div class="object object_five"></div>
            <div class="object object_six"></div>
            <div class="object object_seven"></div>
            <div class="object object_eight"></div>
        </div>
      </div>
    </div>-->
  </div>
  <!--
    官方日记+推荐用户日记，以列表为主，插入编辑广告
   第三方跳转链接
   后台：编辑各大主题，统一模板
   系统机制：积分制，来源任务+充值
   绑定策略：任务实践形式，
   
    
  -->
</template>

<script>
  export default{
    name:'main',
    data(){
      return {
        // 广告图片
        advertise:[
          {src:'static/imgs/temp/22.png'},
          {src:'static/imgs/temp/33.png'},
          {src:'static/imgs/temp/t0142816b8a27f1efef.jpg'}
        ],
        // nav 内容
        navFixed:[
          {text:'技术站',to:'/technology'},
          {text:'生活路',to:''},
          {text:'小厨房',to:''},
          {text:'锻炼吧',to:''}
          // 健身 美食  旅游  技术 杂谈 
        ],
        // nav 置顶参数
        navParam:{
          navLike:false,
          fixed:''
        },
        bottomFixed:[
          {text:'阿达大师',to:''},
          {text:'阿达大师',to:''},
          {text:'阿达大师',to:''},
          {text:'个人中心',to:'personal'}
          //home, 私信，个人中心，生活-个人
        ]
      }
    },
    props: {
        //pageTran
    },
    methods: {
      scroll(){
        let top=this.$refs.scroll.getBoundingClientRect().top; 
        let topLike=this.$refs.scrollLike.getBoundingClientRect().top; 
        if(top<=0){
          this.navParam.navLike= true;
          this.navParam.fixed= 'fixed';
        }
        if(topLike>0){
          this.navParam.navLike= false;
          this.navParam.fixed= '';
        }
      }
    },
    created() {
        //console.log(this.pageTran);
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-box{
    bottom:1.01rem;
    height: auto;
  }
  .advertise{
    height: 3rem;
    .mint-swipe-item{
      a{
        display: block;
        height: 100%;
        img{
          height: 100%;
        }
      }
    }
  }
  .nav-fixed{
    height: 1.02rem;
    line-height: 1.02rem;
    background: #ddd;
    color:#fff;
    transition: all linear .3s;
    border-bottom: .01rem solid #eee;
    li{
      width:25%;
      text-align: center;
      a{
        display: block;
        height: 100%;
      }
    }
  }
  .nav-fixed.fixed{
    position: fixed;
    top:0;
    left:0;
    width:100%;
  }
  
  /*.isRefreshing{
      display: inline-block;
      width:30px;
      height: 30px;
      margin-top: 5px;
      position: relative;
      .object{
          width: 4px;
          height: 4px;
          background-color: #fff;
          position: absolute;
          -moz-border-radius: 50% 50% 50% 50%;
          -webkit-border-radius: 50% 50% 50% 50%;
          border-radius: 50% 50% 50% 50%;
          -webkit-animation: animate 0.8s infinite;
          animation: animate 0.8s infinite;
      }
      .object_one {
          top:4px;
          left:4px;
      }
      
      .object_two {
          top:0;
          left:13px;
          -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
      }
      
      .object_three {
          top:4px;
          right:4px;
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
      }
      
      .object_four {
          left:26px;
          top:13px;
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
      }
      
      .object_five {
          right:4px;
          bottom:4px;
          -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
      }
      
      .object_six {
          top:26px;
          left:13px;
          -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
      }
      
      .object_seven {
          bottom:4px;
          left:4px;
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
      }
      
      .object_eight {
          left: 0px;
          top:13px;
          -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
      }
  }
  @-webkit-keyframes animate {
      25% {
          -ms-transform: scale(1.5);
          -webkit-transform: scale(1.5);
          transform: scale(1.5);
      }
      75% {
          -ms-transform: scale(0);
          -webkit-transform: scale(0);
          transform: scale(0);
      }
  }
  
  @keyframes animate {
      50% {
          -ms-transform: scale(1.5, 1.5);
          -webkit-transform: scale(1.5, 1.5);
          transform: scale(1.5, 1.5);
      }
      100% {
          -ms-transform: scale(0, 0);
          -webkit-transform: scale(0, 0);
          transform: scale(0, 0);
      }
  }
  
  #modal{
    position: absolute;
    top:0;
    left:0;
    z-index: 5000;
    width:100%;
    height: 100%;
    display: none;
    .modal-bg{
      background: rgba(0,0,0,.3);
      height: 100%;
      width: 100%;
    }
    .modal-wait{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
  }*/
 
    
</style>