<template>
        <!--<h-lazyload>-->
            <div>
                <div class="scroll-box">
                    <ul id="container">
                      <li v-for="img in arr">
                        <img v-lazy="img.thumbnail_pic_s">
                      </li>
                    </ul>
                </div>
                <!--<lazy-component >
                  <img class="mini-cover" :src="arr[1].thumbnail_pic_s" width="100%" height="400">
                </lazy-component>-->
            </div>
        <!--</h-lazyload>-->
</template>

<script>
    
    
    export default {
        name: 'lazyload',
        data(){
            return {
                arr:[
                    {thumbnail_pic_s:'static/imgs/pull/top-down.png'},
                    {thumbnail_pic_s:'static/imgs/pull/top-loading.gif'},
                    {thumbnail_pic_s:'static/imgs/pull/top-up.png'},
                    {thumbnail_pic_s:'static/imgs/pull/22.png'},
                    {thumbnail_pic_s:'static/imgs/pull/33.png'}
                ]
            }
        },
        methods:{
            handler(){
                console.log(12);
            }
        }
    }
</script>

<style>
</style>