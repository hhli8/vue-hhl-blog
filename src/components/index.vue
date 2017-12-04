<template>
    <div>
        <div class="scroll-box">
            <ul>
                <li>
                    <router-link to="components/pull">下拉刷新+上拉加载更多</router-link>
                </li>
                <li>
                    <router-link to="components/lazyload">懒加载</router-link>
                </li>
                <li>
                    <router-link to="components/filter">过滤器-使用</router-link>
                </li>
                <li>
                    <router-link to="components/waterfall">瀑布流</router-link>
                </li>
                <li>
                    <router-link to="components/vueEvents">vue的事件机制</router-link>
                </li>
                <li>
                    分页
                </li>
                <li>
                    懒加载
                </li>
                <li>
                    级联
                </li>
            </ul>
        </div>
        
        <router-view name="compLists" class="section"></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>