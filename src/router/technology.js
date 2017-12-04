export default {
    path: '/technology',
    components: {
        personal:resolve => {require(['@/view/technology'], resolve);}
    },
    children: [
        {
            path: 'article',
            component: resolve => {require(['@/view/technology/article1.vue'], resolve);}
        }
    ]
}