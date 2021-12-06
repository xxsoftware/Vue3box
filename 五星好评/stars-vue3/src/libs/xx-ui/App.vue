<template>
    <div class="wrapper">
        <Stars :num="num" :size="size" @getStarNum="getStarNum">
            <!-- 默认星星数量  星星大小 -->
        </Stars>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'App',
    setup() {
        const state = reactive({
            num: 2,
            size: 80,
        })
        const getStarNum = (num) => {
            console.log(num)
        }
        return {
            ...toRefs(state),
            getStarNum,
        }
    },
}
</script>

<style lang="scss">
.wrapper {
    width: 300px;
    margin: 300px auto;
}
</style>
