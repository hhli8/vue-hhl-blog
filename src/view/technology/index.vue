<template>
    <div>
        <div class="scroll-box" @click="closeTypeAll">
            <h-header :title="title" :isRight="header.isRight" :openTypes="header.openTypes" v-on:openType="openType"></h-header>
            <ul id="typeBox" class="flexBox closeType" :class="openChoseType?'active':''">
              <li v-for="item in typelists"><a @click="closeType(item.id)" class="closeType">{{item.name}}</a></li>
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
    import { Indicator } from 'mint-ui';
    export default {
        name: 'technology',
        data() {
            return {
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
                  {name:'Vue',id:12},
                  {name:'Node.js',id:1231},
                  {name:'Vue'},
                  {name:'Vue'},
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
          closeType(type){ //关闭选择类别//针对选择的操作-ajax
            this.openType();
            console.log(type);
          },
          closeTypeAll(e){
            if(e.target.className.indexOf('closeType')==-1 && this.header.openTypes){
              this.openType();
            }
          },
          load(type,page,a,b){
            console.log(11111111111111111);
            Indicator.open({
              text: 'Loading...',
              spinnerType: 'triple-bounce'
            });
            //ajax
            setTimeout(function(){
              Indicator.close();
            },1000);
          }
        },
        computed:{
          
        },
        created(){
          this.load(); 
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
          position:absolute;
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
    }
    .article-detail{
        z-index:1100;
    }
</style>