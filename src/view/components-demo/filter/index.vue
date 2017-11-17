<template>
    <div>
        111111111111111<br />
        {{msg | capitalize | dateToString}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg: 'aaaaaa'
            }
        }
    }
</script>

<style>
</style>