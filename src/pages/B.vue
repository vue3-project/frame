<template>
    <div class="page-b">
        {{name}} <br/>
        手动更改值：<input v-model="name"/> <br/>
        <router-link to="/a">AA: 前往A_A页面：</router-link> <br/>
        <button @click="jump">跳转A</button>
        <br/>
        -------------------------------
        <br/>
        用户信息(计算属性): {{info}}<br/>
        姓名<input v-model="user.name"/> <br/>
        年龄<input v-model="user.age"/> <br/>

    </div>
</template>
<script lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup () {
        // 模块1
        let name = ref('测试页面BBBB')
        let router = useRouter()
        let jump = function () {
            router.push({ path: '/a' })
        }
        // console.log('使用ref的变量在这里使用时需要添加.value:---', name.value)
        // watch：监听基础数据类型
        watch(name, (newVal:string, oldVal:string) => {
            console.log(`name值修改,从${oldVal}修改为${newVal}`)
        })


        // 模块2
        interface User {
            name: string,
            age: number
        }
        let user: User = reactive({
            name: '小明',
            age: 34
        })
        // 计算属性
        let info = computed(() => {
            return user.name + '  ' + user.age
        })
        // watch监听
        watch(user, (newVal, oldVal) => {
            console.log(`检查user用户对象:${oldVal}修改为${newVal}`)
        }, {
            immediate: true, // 立即触发
            deep: true, // 多层数据下的属性变换时有效，单层的属性下true/false没作用
        })
        // watch监听对象的属性时，需要使用函数
        watch(() => user.name, (newVal, oldVal) => {
            console.log(`检查user的name:${oldVal}修改为${newVal}`)
        })
        return {
            name,
            user,
            info, // 计算属性
            jump,
        }
    }
}
</script>
<style lang="scss" scoped>
.page-b {
    $bg: red;
    button {
        background: $bg;
        color: #fff;
    }
}

</style>