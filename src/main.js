// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import VueResource from 'vue-resource';


// axios配置
import Axios from 'axios'
import {configAxios} from '@/lib/config-axios'
// axios-自定义配置
configAxios.init(Axios)
Object.defineProperty(Vue.prototype, '$http', {
    value: Axios
})

// Resource
//Vue.use(VueResource);
////Vue.http.options.root = config.basehttpUrl;
//Vue.http.options.emulateJSON = true;

// 移动端ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

// 自定义组件
import hView from '@/components';
Vue.use(hView);

//自定义-懒加载----https://github.com/hilongjw/vue-lazyload#demo
import lazyload from 'vue-lazyload';
Vue.use(lazyload,{
    error: 'static/imgs/pull/t0142816b8a27f1efef.jpg',//这个是请求失败后显示的图片
    loading: 'static/imgs/pull/t0142816b8a27f1efef.jpg',//这个是加载的loading过渡效果
    try: 2, // 这个是加载图片数量
    lazyComponent: true
});

//过滤器
import filter from '@/lib/filter.js'
filter.init(Vue);

// 样式
import './styles';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})