<template>
    <div class="pull-load">
        <div class="pull-load-refresh">
            <div class="arrow-refresh" v-show="!isRefreshing" :style="{ 'transform': 'rotate(' + deg + 'deg)'}">
                <div class="arrow-top"></div>
                <div class="arrow-bottom"></div>
            </div>
            <div v-show="isRefreshing" class="isRefreshing">
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
        <div @scroll="infiniteScroll" class="pull-load-content scroll-box" :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)', 'transition':'all linear .'+time+'s'}" ref="content">
            <div ref="scroll">
                <slot name="content"></slot>
                <div v-show="isInfiniteOver_" class="infiniteScrolling">没有更多数据了...</div> 
                <div class="isRefreshing-box" v-show="!isInfiniteOver_">                   
                    <div  class="isRefreshing">
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
            </div>
        </div>
        <!--<div class="pull-load-more">
            <div v-show="!isLoading" class="loading-text">{{loadingText}}</div>
            <div v-show="isLoading" class="isRefreshing">
                <div class="object object_one"></div>
                <div class="object object_two"></div>
                <div class="object object_three"></div>
                <div class="object object_four"></div>
                <div class="object object_five"></div>
                <div class="object object_six"></div>
                <div class="object object_seven"></div>
                <div class="object object_eight"></div>
            </div>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                translate: 0,                   // css参数
                time: 0,                        // css参数
                scrollEventTarget: null,        //滚动目标
                startScrollTop: 0,              //若目标元素不是初始置顶时
                bottomReached:false,            //是否已达底部
                startY: 0,                      //起点
                currentY: 0,                    //当前点
                topStatus: '',                  //下拉标记——状态
                bottomStatus:'',                //上拉标记——状态
                direction: '',                  //拉取方向    
                isRefreshing: false,            //刷新箭头转化为等待状态
                deg: 0,                         //箭头旋转角度
                isLoading: false,               //加载转化为等待状态
                loadingText: '获取更多数据',        //加载显示文字内容
                isInfiniteOver_: this.isInfiniteOver         //是否在无限加载中
            }
        },
        props: {
            topMethod: {
                type: Function
            },
            bottomMethod: {
                type: Function
            },
            bottomAllLoaded: { //是否都加载完
                type: Boolean,
                default: false
            },
            distanceIndex: { //阻力系数
                type: Number,
                default: 5
            },
            topDistance: { //下拉多长时触发
                type: Number,
                default: 30
            },
            bottomDistance: { //上拉多长时触发
                type: Number,
                default: 30
            },
            isInfiniteOver: { //是否在无限加载中
                type: Boolean,
                default: false
            }
        },
        watch:{
            topStatus(val){
                //console.log('变化啦'+val);
            }
        },
        methods: {
            init() {
                this.scrollEventTarget = this.getScrollEventTarget(this.$refs.content);
                if(typeof this.bottomMethod === 'function') {
                    this.bindTouchEvents();
                }
                if(typeof this.topMethod === 'function') {
                    this.bindTouchEvents();
                }
            },

            getScrollEventTarget(element) {
                let currentNode = element;
                while(currentNode && currentNode.tagName !== 'HTML' &&
                    currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
                    let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
                    if(overflowY === 'scroll' || overflowY === 'auto') {
                        return currentNode;
                    }
                    currentNode = currentNode.parentNode;
                }
                return window;
            },

            getScrollTop(element) {
                if(element === window) {
                    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
                } else {
                    return element.scrollTop;
                }
            },

            bindTouchEvents() {
                this.$refs.content.addEventListener('touchstart', this.handleTouchStart);
                this.$refs.content.addEventListener('touchmove', this.handleTouchMove);
                this.$refs.content.addEventListener('touchend', this.handleTouchEnd);
            },
            
            checkBottomReached() {
                if (this.scrollEventTarget === window) {
                  return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
                } else {
                    return this.$refs.scroll.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom+1
                }
            },
      
            handleTouchStart(event) {
                this.time = 0;
                this.isRefreshing = false;
                this.isLoading = false;
                this.startY = event.touches[0].clientY;
                this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
                if(this.bottomAllLoaded) this.loadingText = '没有更多内容了...';
            },
            handleTouchMove(e) {
                if(this.startY < this.$refs.content.getBoundingClientRect().top && this.startY > this.$refs.content.getBoundingClientRect().bottom) {
                    return;
                }
                this.currentY = event.touches[0].clientY;
                let distance = (this.currentY - this.startY) / this.distanceIndex;
                this.direction = distance > 0 ? 'down' : 'up';
                if(typeof this.topMethod === 'function' && this.direction === 'down' &&
                    this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
                    event.preventDefault();
                    event.stopPropagation();
                    this.translate = distance - this.startScrollTop;
                    if(this.translate < 0) {
                        this.translate = 0;
                    }
                    this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull'; //超过则出发请求事件                   
                    this.deg = this.translate >= this.topDistance ? 180 : 0;
                }
                if(this.topStatus == 'loading' || this.bottomStatus == 'loading'){
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (this.direction === 'up') {
                  this.bottomReached = this.bottomReached || this.checkBottomReached();
                } 
                if (typeof this.bottomMethod === 'function' && this.direction === 'up' &&
                    this.bottomReached && this.bottomStatus !== 'loading') {
                    return;
                    event.preventDefault();
                    event.stopPropagation();
                    //如果不是从底部开始上拉，则this.getScrollTop(this.scrollEventTarget) - this.startScrollTop>0
                    this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance;      
                    if (this.translate > 0) {
                        this.translate = 0;
                    }
                    this.bottomStatus = (-this.translate >= this.bottomDistance  && !this.bottomAllLoaded) ? 'drop' : 'pull';                   
                }                                  
            },
            handleTouchEnd(e) {
                if(this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0 && this.topStatus != 'loading') {
                    this.time = 1;
                    if(this.topStatus === 'drop') {
                        this.translate = this.topDistance;
                        this.topStatus = 'loading';
                        //等待动画
                        this.deg = 0;
                        this.isRefreshing = true;
                        setTimeout(() => {
                            this.topMethod();
                        }, 100);
                    } else {
                        this.translate = '0';
                        this.topStatus = 'pull';
                    }
                }
                if (this.direction === 'up' && this.bottomReached && this.translate < 0 && this.bottomStatus != 'loading') {
                    this.time = 1;
                    this.bottomReached = false;
                    if (this.bottomStatus === 'drop') {
                        this.translate = -this.bottomDistance;
                        this.bottomStatus = 'loading';
                        //等待动画
                        this.isLoading = true;
                        setTimeout(() => {
                            this.bottomMethod();
                            // setTimeout( () => {console.log(this.bottomAllLoaded);},100);
                            //console.log(this.bottomAllLoaded);
                        }, 100);   
                    } else {
                        this.translate = '0';
                        this.bottomStatus = 'pull';
                    }
                }
                this.direction = '';   
            },

            onTopLoaded() {
                this.translate = 0;
                setTimeout(() => {
                    this.topStatus = 'pull';
                }, 200);
            },
            
            onBottomLoaded() {
                this.bottomStatus = 'pull';
                this.$nextTick(() => { 
                  if (this.scrollEventTarget === window) {
                    document.body.scrollTop += 50;
                  } else {
                    this.scrollEventTarget.scrollTop += 50;
                  }
                  this.translate = 0;
                }); 
            },
            
            infiniteScroll(){  
                if(this.checkBottomReached() && !this.bottomAllLoaded){
                    this.bottomMethod();
                }else if(this.bottomAllLoaded){ 
                    this.isInfiniteOver_ = true;
                }
            }

        },
        mounted() {
            this.init();
        }
    }
</script>

<style lang="scss" scoped>
    .pull-load{
        background: #f7f7f7;  
        height: 100%;
        position: relative;
        .pull-load-refresh,.pull-load-more{ 
            height: 40px;
            position: absolute;   
            left:0;
            width:100%;
            text-align: center;
        }
        .pull-load-more{
            bottom: 0;
            .loading-text{
                height: 100%;
                line-height: 40px;
            }
        }
        .pull-load-refresh{
            top:0;
            .arrow-refresh{
                display: inline-block;
                height: 40px;
                position: relative;
                transition:all linear .2s;
                .arrow-top{
                    display: inline-block;
                    height: 20px;
                    width: 2px;
                    background: #888;
                    position: relative;
                    top:8px;
                }
                .arrow-bottom{
                    width:0;
                    height: 0;
                    border:4px solid transparent;
                    border-top:4px solid #888;
                    position: absolute;
                    left:-3px;
                    top:28px;
                }
            }
        }
        
        .pull-load-content{
            /*background: #fff;*/
            z-index:100;
            .infiniteScrolling{
                height: 40px;
                line-height: 40px;
                background: #f7f7f7;
                text-align: center;
            }
            .isRefreshing-box{
                text-align: center;
                background: #f7f7f7;
            }
        }
        
        .isRefreshing{
            display: inline-block;
            width:30px;
            height: 30px;
            margin-top: 5px;
            position: relative;
            .object{
                width: 4px;
                height: 4px;
                background-color: #999;
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
    
</style>