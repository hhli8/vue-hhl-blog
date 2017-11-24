<template>
    <!--<main-content></main-content>-->
    <router-view class="section"/>
</template>

<script>
import main from '@/view/main'
  export default{
    name: 'main',
    components: {
      mainContent: main
    }
  }
</script>

<style>
</style>