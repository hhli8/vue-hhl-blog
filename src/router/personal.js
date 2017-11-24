/**
 * components
 * 自定义功能组件
 *
 */
export default {
    path: '/personal',
    components: {
        personal:resolve => {require(['@/view/personal'], resolve);}
    }
}