<template>
    <div>
        <div class="scroll-box" @click="closeTypeAll">
            <h-header :title="title" :isRight="header.isRight" :openTypes="header.openTypes" v-on:openType="openType"></h-header>
            <ul id="typeBox" class="flexBox closeType" :class="openChoseType?'active':''">
              <li v-for="item in typelists"><a @click="closeType(item.id)" class="closeType">{{item.name}}</a></li>
            </ul>
            <h-pull class="" :topMethod="refresh" :bottomMethod="loadmore" ref="pull" :topDistance=40 :bottomDistance=40 :bottomAllLoaded="pull.bottomAllLoaded" :isInfiniteOver="pull.isInfiniteOver" v-show="hasData">                    
              <!--<ul slot="content" id="lists">
                <li v-for="item in lists">{{item}}</li>
              </ul>-->
              <ul class="list-box" slot="content" ref="listBox">
                <li v-for="(item,index) in lists" :data-type="item.kind" :class="'type'+item.kind" @click="toDetail(item)">
                  <router-link to="technology/detail">
                    <img  alt="" v-lazy="item.simg.site"/>
                    <div class="description">{{item.stext}}</div>
                  </router-link>
                </li>
              </ul>
            </h-pull>
            
            
            <!--<ul class="list-box">
              <li v-for="(item,index) in lists" :data-type="item.kind" :class="'type'+item.kind" @click="toDetail(item)">
                <router-link to="technology/detail">
                  <img  alt="" v-lazy="item.simg.site"/>
                  <div class="description">{{item.stext}}</div>
                </router-link>
              </li>
            </ul>-->
        </div>
        <router-view class="section article-detail"></router-view>
    </div>
</template>


<script>
    import Axios from 'axios';
    import { Indicator } from 'mint-ui';
    export default {
        name: 'technology',
        data() {
            return {
                lists:[],
                hasData:true,
                title:'技术站',
                header:{
                  isRight:true,
                  openTypes:false
                },
                typelists:[
                  {name:'全部',id:''},
                  {name:'Vue',id:1001},
                  {name:'Node.js',id:1002},
                  {name:'H5',id:1003},
                  {name:'Mongodb',id:1004},
                  {name:'Vue'},
                  {name:'Vue'}
                ],
                openChoseType:false,
                pull:{
                  bottomAllLoaded: false,
                  n:1, //开始页
                  totalPage:1, //总页数,
                  level2:'',
                  isInfiniteOver:false
                }
            }
        },
        methods:{
          openType(isopen){  
            this.header.openTypes=!this.header.openTypes;
            this.openChoseType=!this.openChoseType;  
          },
          closeType(id){ 
            this.openType();
            //this.hasData=true;
            this.pull.n=1;
            this.pull.isInfiniteOver = true;
            //this.pull.bottomAllLoaded =false;
            //需要置顶 
            //this.lists=[];
            //this.$refs.listBox.scrollT=0;
            this.load('',1,'101',id,(out)=>{ 
              if(this.pull.n==this.pull.totalPage){
                this.pull.isInfiniteOver = true;
                //this.pull.bottomAllLoaded =true;
              }else{ 
                this.pull.isInfiniteOver = false;
              }
            }); //('',page,a,b) a:一级分类 b:二级分类
            this.pull.level2=id;
          },
          closeTypeAll(e){
            if(e.target.className.indexOf('closeType')==-1 && this.header.openTypes){
              this.openType();
            }
          },
          load(type,page,a,b,fun){
            Indicator.open({
              text: 'Loading...',
              spinnerType: 'triple-bounce'
            });
            var params={
              type:type,page:page,level1:a,level2:b,count:3
            };
            Axios.get('/article/find',{params:params})
              .then((res)=>{
                let out=res.data; console.log(out);
                if(out.suc){
                  if(params.page==1){this.lists=out.res;}
                  this.pull.totalPage=out.totalPage;
                  fun(out);
                }
                Indicator.close();
              });
//          setTimeout(function(){
//            Indicator.close();
//          },1000);
          },
          toDetail(data){
            localStorage.ArticlesUrl=data.swebsite;
          },
          refresh(){
            this.load('',1,'101',this.pull.level2,()=>{}); 
            this.$refs.pull.onTopLoaded();
          },
          loadmore(){ 
            if(this.pull.n<this.pull.totalPage){
              console.log('loadmore');//会产生两次-解决办法？
              this.pull.n++;
              this.load('',this.pull.n,'101',this.pull.level2,(out)=>{
                let add=out.res;
                this.lists=this.lists.concat(add);
                console.log(this.lists);
                if(this.pull.n==this.pull.totalPage) {
                  this.pull.isInfiniteOver = true;
                  this.pull.bottomAllLoaded =true;
                }
                this.$refs.pull.onBottomLoaded(); 
              });
            }
          }
        },
        computed:{
          
        },
        created(){  //数据，有数据加载完时isInfiniteOver=true,无数据时hasData=true
          this.load('',1,'101','',(out)=>{ 
            
//          if(this.pull.n==this.pull.totalPage){ console.log(23456);
//            this.pull.isInfiniteOver =false;
//            this.pull.bottomAllLoaded =true;
//          }
          });
          
          //this.$socket.emit('connect',223);
        },
        sockets:{
          connect(val){}
        }
    }
</script>

<style lang="scss" scoped>
    .scroll-box{
        padding-top:1rem;
        background: #f5f5f5;
        #typeBox{
          flex-wrap:wrap;
          background:#f2f2f2;
          position:fixed;
          width:100%;
          top:-1rem;
          padding-bottom:.15rem;
          transition:all linear .3s;
          z-index:900;
          border-bottom:1px solid #ccc;
          li{
            width:25%;
            text-align: center;
            margin-top: .12rem;
            a{
              display: inline-block;
              padding: .08rem .12rem;
              color:#333;
            }
          }
        }
        #typeBox.active{
          top:1rem;
        }
        .list-box{
          margin-top: .1rem;
          li{
            position: relative;
            margin-top: .12rem;
            a{
              display: block;
              text-align: center;
            }
            img{
              vertical-align: bottom;
              height: 5rem;
            }
            .description{
              text-align: left;
              position: absolute;
              background: rgba(0,0,0,.5);
              color:#fff;
              bottom: 0;
              left: 0;
              overflow: hidden;
              padding: .06rem .14rem;
              text-overflow:ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              display: -webkit-box;
            }
          }
        }
    }
    .article-detail{
        z-index:1100;
    }
</style>


<!--
  问题：
  切换时未置顶
  切换时下面的刷新状态管理问题
  上拉加载会产生2次问题
  上拉加载刷新状态问题
  
-->