<template>
    <div>
        <div class="scroll-box">
            555555555555555555555
            <waterfall :line-gap="200" :watch="items">
              <!-- each component is wrapped by a waterfall slot -->
              <waterfall-slot
                v-for="(item, index) in items"
                :width="item.width"
                :height="item.height"
                :order="index"
                :key="item.id"
              >
                <!--
                  your component
                -->
                <div class="item" :style="item.style">{{item.index}}</div>
              </waterfall-slot>
            </waterfall>
        </div>
    </div>
</template>

<script>
    function ItemFactory(count){
        var lastIndex=0;
        function generateRandomItems(count){
            var items=[];
            for(var i=0;i<count;i++){
                items[i]={
                    index:lastIndex++,
                    style:{
                        background:getRandomColor()
                    },
                    width:100+(Math.random()*50),
                    height:100+(Math.random()*50)
                }
            }
            return items;
        }
        function getRandomColor(){
            var colors=[
                'rgba(12,123,123,.5)',
                'rgba(12,163,59,.5)',
                'rgba(12,18,123,.5)',
                'rgba(2,98,123,.5)',
                'rgba(1,123,55,.5)',
                'rgba(12,123,66,.5)'
            ]
            return colors[parseInt(colors.length*Math.random())]
        }
        return generateRandomItems(count);
    }
    import { Waterfall, WaterfallSlot } from 'vue-waterfall'
    export default {
        data(){
            return {
                items:ItemFactory(20)
            }
        },
        components:{
            Waterfall,
            WaterfallSlot
        },
        created(){
            
        }
    }
//  var c=[
//      'rgba(12,123,123,.5)',
//      'rgba(12,163,59,.5)',
//      'rgba(12,18,123,.5)',
//      'rgba(2,98,123,.5)',
//      'rgba(1,123,55,.5)',
//      'rgba(12,123,66,.5)'
//  ]
//  console.log(parseInt(c.length*Math.random()) );
</script>

<style>
    .item{
       height: 100%; 
    }
</style>