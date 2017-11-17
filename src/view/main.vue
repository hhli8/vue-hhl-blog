<template>
  <div>
    <div class="scroll-box">
      <router-link to="login">去登录</router-link>
      <router-link to="part1">part1</router-link>
      <p>
        asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>
      </p>
      <router-link to="section1">section1</router-link>
      <p>
        asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>
      </p>
      <router-link to="section2">section2</router-link>
      <p>
        asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>
      </p>
      end
      <h3>功能组件列表</h3>
      <router-link to="components">查看功能组件</router-link>
    </div>
    
    <router-view name="section1" class="section"/>
    <router-view name="section2" class="section"/>
    <router-view name="comp" class="section"/>
  </div>
</template>

<script>
  export default{
    name:'main',
    data(){
      return {
        
      }
    }
  }
</script>

<style>
</style>