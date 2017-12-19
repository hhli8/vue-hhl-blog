<template>
    <div>
        <div class="scroll-box" @click="closeTypeAll">
            <h-header :title="title" :isRight="header.isRight" :openTypes="header.openTypes" v-on:openType="openType"></h-header>
            <ul id="typeBox" class="flexBox closeType" :class="openChoseType?'active':''">
              <li v-for="item in typelists"><a @click="closeType(item.id)" class="closeType">{{item.name}}</a></li>
            </ul>
            <ul class="list-box">
              <li v-for="(item,index) in lists" :data-type="item.kind" :class="'type'+item.kind" @click="toDetail(item)">
                <router-link to="technology/detail">
                  <img  alt="" v-lazy="item.simg.site"/>
                  <!--:src="item.simg.site"-->
                  <div class="description">{{item.stext}}</div>
                </router-link>
              </li>
            </ul>
            <!--<ul class="type-box flexBox">
                <li v-for="item in lists">
                    <router-link :to="item.to">
                        <img :src="item.bg" alt="loading" />
                        <span>{{item.name}}</span>
                    </router-link>
                </li>
            </ul>   -->
            <!--<iframe src="http://mp.weixin.qq.com/s/BqKhLHrcO39RokDloO09EA">
                <img src="http://mmbiz.qpic.cn/mmbiz_jpg/QTNzZR6KeDicrKmBw5nnTngpkCT2QnQcLZbwhCElPicAPoSwgVicG7K24ydO9c2gypBkRuW21zZiaKl800EIlb1sxw/0?wx_fmt=jpeg" alt="" />
            </iframe>-->
        </div>
        <router-view class="section article-detail"></router-view>
    </div>
</template>

<script>
    //import io from 'socket.io';
    import Axios from 'axios';
    import { Indicator } from 'mint-ui';
    export default {
        name: 'technology',
        data() {
            return {
                lists:[
                  
                ],
//              lists: [
//                  {name: 'Vue', to: 'technology/article', bg: 'static/imgs/temp/22.png'},
//                  {name: 'Node.js', to: '', bg: 'static/imgs/technology/node.jpg'},
//                  {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
//                  {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'}
//              ],
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
                openChoseType:false
            }
        },
        methods:{
          openType(isopen){  //传给子的函数//console.log('父的函数'+isopen);
            //this.header.openTypes=!isopen;
            this.header.openTypes=!this.header.openTypes;
            this.openChoseType=!this.openChoseType;
          },
          closeType(id){ //关闭选择类别//针对选择的操作-ajax
            this.openType();
            console.log(id+'选择分类的文章');//此type非那个type
            this.load('',1,'101',id); //a=101 b=id
          },
          closeTypeAll(e){
            if(e.target.className.indexOf('closeType')==-1 && this.header.openTypes){
              this.openType();
            }
          },
          load(type,page,a,b){
            Indicator.open({
              text: 'Loading...',
              spinnerType: 'triple-bounce'
            });
            //ajax
            var params={
              type:type,page:page,level1:a,level2:b
            };
            Axios.get('/article/find',{params:params})
              .then((res)=>{
                let out=res.data; console.log(out);
                if(out.suc){
                  this.lists=out.res;
                }
                Indicator.close();
              });
//          setTimeout(function(){
//            Indicator.close();
//          },1000);
          },
          toDetail(data){
            localStorage.ArticlesUrl=data.swebsite;
          }
        },
        computed:{
          
        },
        created(){  
          this.load('',1,'101',''); 
//        let io=require('socket.io');
//        var socket=io.connect("ws://127.0.0.1:3000");
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
              display: inline-block;
            }
            img{
              vertical-align: bottom;
            }
            .description{
              position: absolute;
              /*line-height: .6rem;*/
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
        .type-box{
            flex-wrap: wrap;
            li{
                width:25%;
                margin-top: .2rem;
                text-align: center;
                a{
                    width:1.5rem;
                    height: 1.5rem;
                    display: inline-block;
                    position: relative;
                    margin-bottom: .4rem;
                    img{
                        width:100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                    span{
                        width:100%;
                        position: absolute;
                        display: inline-block;
                        font-size:.32rem;
                        color:#333;
                        bottom:-.5rem;
                        left:0;
                    }
                }
            }
        }
        /**/
    }
    .article-detail{
        z-index:1100;
    }
</style>