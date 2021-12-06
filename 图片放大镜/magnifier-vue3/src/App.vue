<template>
    <div class="wrapper">
        <Magnifier
            :imgUrl="imgUrl"
            :imgWidth="imgWidth"
            :imgHeight="imgHeight"
            :magWidth="magWidth"
            :magHeight="magHeight"
        ></Magnifier>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'App',
    setup() {
        const state = reactive({
            imgUrl: 'https://img2.baidu.com/it/u=4229811988,2995820132&fm=26&fmt=auto',
            imgWidth: 375,
            imgHeight: 375,
            magWidth: 100,
            magHeight: 100,
        })
        return {
            ...toRefs(state),
        }
    },
}
</script>
<style lang="scss">
.wrapper {
    width: 375px;
    margin: 100px auto;
}
</style>
