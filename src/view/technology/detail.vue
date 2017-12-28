<template>
  <div>
    <div class="scroll-box">
      <h-header></h-header>
      <iframe :src="iframe.src" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        iframe:{
          src:''
        }
      }
    },
    created(){
      this.iframe.src=localStorage.ArticlesUrl;
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-box{
    padding-top: 1rem;
    iframe{
      width:100%;
      height: 100%;
    }
  }
</style>