/**
 * components
 * 自定义功能组件
 *
 */
export default {
	path: '/components',
    components: {
        comp:resolve => {require(['@/components/index.vue'], resolve);}
        //@/components，这样写在这报错，原电脑ok
    },
  	children:[
  		{
  			path: '/components/pull',
  			components: {
  				compLists:resolve => {require(['@/view/components-demo/pull'], resolve);}
  			}
  		},
  		{
  		    path: '/components/lazyload',
                components: {
                    compLists:resolve => {require(['@/view/components-demo/lazyload/index.vue'], resolve);}
                }
  		},
  		{
  		    path: '/components/filter',
                components: {
                    compLists:resolve => {require(['@/view/components-demo/filter'], resolve);}
                }
  		},
  		{
            path: '/components/waterfall',
                components: {
                    compLists:resolve => {require(['@/view/components-demo/waterfall'], resolve);}
                }
        },
  		{
            path: '/components/vueEvents',
                components: {
                    compLists:resolve => {require(['@/view/components-demo/vueEvents/index.vue'], resolve);}
                }
        }
  	]
}


