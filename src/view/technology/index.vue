<template>
    <div>
        <div class="scroll-box">
            <h-header></h-header>
            <ul class="type-box flexBox">
                <li v-for="item in lists">
                    <router-link :to="item.to">
                        <img :src="item.bg" alt="loading" />
                        <span>{{item.name}}</span>
                    </router-link>
                </li>
            </ul>          
        </div>
        <router-view class="section article-detail"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'technology',
        data() {
            return {
                lists: [
                    {name: 'Vue', to: 'technology/article', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Vue', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Vue', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Vue', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Vue', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Vue', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Vue', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Vue', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Vue', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Vue', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'Node.js', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'React', to: '', bg: 'static/imgs/temp/22.png'},
                    {name: 'ES6', to: '', bg: 'static/imgs/temp/22.png'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .scroll-box{
        padding-top:1rem;
        background: #f5f5f5;
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