<template>
    <div>
        {{ name }}<br/>
        <el-button type="danger">我是 ElButton</el-button>
        <router-link to="/b">BB: 前往B_B页面：</router-link> <br/>
        组件：<message-tip :message="message" @goClick="goClick"></message-tip><br/>
        <button @click="jump" class="btn">跳转B</button>
    </div>
</template>
<script lang="ts" setup>
import MessageTip from '@/components/MessageTip.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

let router = useRouter()
let name = ref('测试页面AAAA')
let jump = () => {
    router.push({ path: '/b' })
}

let message = ref('组件信息ZZ')

let goClick = () => { alert('goClick') }

onMounted(() => { console.log('onMounted') })


</script>
<style lang="scss" scoped>
.btn {
    background: red;
    color: #fff;
}
</style>