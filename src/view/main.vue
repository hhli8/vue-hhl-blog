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
  </div>
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
        ],
        // nav 置顶参数
        navParam:{
          navLike:false,
          fixed:''
        } 
      }
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
    }
  }
</script>

<style lang="scss" scoped>
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
    height: 1rem;
    line-height: 1rem;
    background: #ddd;
    color:#fff;
    transition: all linear .3s;
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