<template>
    <div class="message-tip" @click="click">
        {{message}}
    </div>
</template>
<script lang="ts" setup>
// 写法1：
// defineProps(['A','B'])
// 写法2：
// defineProps({
//     C:String,
//     D:Number
// })
// 写法3
defineProps({
    message: {
        type: String,
        default: '测试信息'
    }
})

let emit = defineEmits(['goClick'])

let click = () => {
    emit('goClick', 1, 2, 3)
}
</script>
<style lang="scss" scoped>
.message-tip {
    display: inline-block;
    background: green;
    color: #fff;
    cursor: pointer;
}
</style>