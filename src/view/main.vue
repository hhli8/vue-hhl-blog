<template>
  <div>
    <div class="scroll-box" @scroll="scroll">     
      <div class="advertise">
        <mt-swipe :auto="0" :show-indicators="false">
          <mt-swipe-item v-for="(item,index) in advertise" :key="index"><a href="#"><img :src="item.src" alt="loading" /></a></mt-swipe-item>
        </mt-swipe>
      </div>
      <ul class="nav-fixed flexBox flexBetween" ref="scroll" :class="navParam.fixed">
        <li v-for="(item,index) in navFixed" :key="index"><router-link to="#">{{item.text}}</router-link></li>
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
    <router-view name="personal" class="section"/>
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
          {text:'阿达大师'},
          {text:'阿达大师'},
          {text:'阿达大师'},
          {text:'阿达大师'}
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
  
  
</style>