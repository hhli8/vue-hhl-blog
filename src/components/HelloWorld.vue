<template>
  <div class="hello1">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2 @click="click">Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <a href="section1">跳吧</a>
    <router-link to="section1">pageA</router-link>
    <router-link to="section2">pageA</router-link>
    <transition :name="transitionPage">
      <router-view class="section"/>
    </transition>
  </div>
</template>

<script>
import Login from '@/service/login'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      transitionPage: 'slide-left'
    }
  },
  created () {
    //console.log(Login.login());
    //this.$store.dispath('SS');
//  let params={loginName: "lihaihong2", password: "670b14728ad9902aecba32e22fa4f6bd", isSureLogin: false}
//  let sign = utils.encryptPost(params)
//  let out=Axios.post('/api-user/login/login', params, {headers: {'sign': sign}});
//  console.log(out);
  },
  methods:{
    click(){
      this.$store.dispatch('SS');
      this.$store.commit('SS');
    }
  },
  beforeRouteUpdate (to, from, next) { 
    console.log(333);
    console.log(this.$router);
    let isBack = this.$router.isBack; 
    if (isBack) {
      this.transitionPage = 'slide-right'
    } else {
      this.transitionPage = 'slide-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
