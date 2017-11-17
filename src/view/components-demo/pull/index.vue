<template>
	<div class="app">
	    <h-header></h-header>
	    <!--<div class="content">-->
	        
	    
		<h-pull class="" :topMethod="refresh" :bottomMethod="loadmore" ref="pull" :topDistance=40 :bottomDistance=40 :bottomAllLoaded="bottomAllLoaded">
			<ul slot="content" id="lists">
				<li v-for="item in lists">{{item}}</li>
			</ul>
		</h-pull>
		<!--</div>-->
	</div>
</template>

<script>
	export default{
		data(){
			return {
				lists:[123,123,123,123,123,123,123,242,545,4545,45454,123,123,123,123,123,123,123,242,545,4545,45454,123,123,123,123,123,123,123,242,545,4545,45454,123,123,123,123,123,123,123,242,545,4545,45454,'end'],                 
			    bottomAllLoaded: false,
			    n:1, //开始页
			    totalPage:3 //总页数
			}
		},
		methods:{
			refresh(){ 
				console.log('refresh');
				var x=8888;
				for(var i=0;i<x;i++){
					//console.log(i);
				}
				this.$refs.pull.onTopLoaded();
			},
			loadmore(){
			    if(this.n<this.totalPage){
			        console.log('loadmore');
    				var x=8888;
                    for(var i=0;i<x;i++){
                        //console.log(i);
                    }
                    var add=['adas','啊实打实大师的','啊实打实大师的','趣味全顺达','啊实打实大师','啊实打实大师的'];
                    this.lists.push(...add);
                    this.n++;
                    if(this.n==this.totalPage) this.bottomAllLoaded =true;  
                        //子通过prop来的父组件的数据没有实时刷新
                    //console.log('212'+this.bottomAllLoaded);
                    this.$refs.pull.onBottomLoaded();
			    }  
			}
		}
	}
</script>

<style lang="scss" scoped>
    #lists{
        background: #f7f7f7;
        li{
            height: .8rem;
            line-height: .8rem;
            padding-left: .2rem;
            margin-bottom: .12rem;
            background: #fff;
        }
        li:last-child{
            /*margin-bottom: 0;*/
        }
    }
    .app{
        padding-top: 1rem;
    }
</style>