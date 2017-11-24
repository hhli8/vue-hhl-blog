<template>
  <!--理论上，登陆后返回上个界面，除了个别页面需要刷新的才刷新或局部刷新-->
  <div style="background: red;">
    888888888888登录页<br />
    <div class="back" @click="back">返回</div>
    <!--<h-header></h-header>-->
  </div>
</template>

<script>
    import utils from '@/lib/utils'
    export default {
        name:'login',
        props: {
            //pageTran
        },
        methods: {
            back() {
                utils.glodata='fadeout';
                this.$emit('pageTran','fadeout');
                history.go(-1);
            }
        },
        created() {
            //console.log(this.pageTran);
        }
    }
</script>

<style>
</style>