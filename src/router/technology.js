export default {
    path: '/technology',
    components: {
        personal:resolve => {require(['@/view/technology'], resolve);}
    },
    children: [
        {
            path: 'detail',
            component: resolve => {require(['@/view/technology/detail.vue'], resolve);}
        }
    ]
}