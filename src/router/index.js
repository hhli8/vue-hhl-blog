import Vue from 'vue'
import Router from 'vue-router'
import Components from './components' 
import Personal from './personal'

Router.prototype.goBack = function() {
    this.isBack = true
    window.history.go(-1)
}
Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      if(savedPosition) return savedPosition;
      return {
        x: 0,
        y: 0
      };
    },
    //abstract: true,  // 无效
    routes: [{
            path: '/',
            name: 'index',
            component: resolve => {
                require(['@/view/main'], resolve);
            },
            //非定位的跳转，返回页面位置不刷新
            children: [
                Components,
                Personal,
                {
                    path: '/section1',
                    name: 'section1',
                    components: {
                        //section1 : section1
                        //section1: () => import('@/view/section1')
                        section1: resolve => {
                            require(['@/view/section1'], resolve);
                        }
                    },
                    children: [{
                        path: '/section1/detail',
                        name: 'section1-detail',
                        components: {
                            detail: resolve => {
                                require(['@/view/section1/detail'], resolve);
                            }
                            //detail: section1Detail
                        }
                    }]
                }
            ]
        },
        //定位的跳转，同级路由，返回可以刷新
        {
            path: '/part1',
            name: 'part1',
            component: resolve => {
                require(['@/view/part1'], resolve);
            }
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => {
                require(['@/view/login'], resolve);
            }
        }
    ]
})