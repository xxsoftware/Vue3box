<template>
    <transition>
        <div class="car-item" v-if="selfIndex === currentIndex">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import { getCurrentInstance, reactive, toRefs, watch } from 'vue'
// 获取当前实例
export default {
    name: 'CarItem',
    setup() {
        const instance = getCurrentInstance()
        const state = reactive({
            selfIndex: instance.vnode.key,
            currentIndex: instance.parent.ctx.currentIndex,
        })
        watch(
            () => {
                return instance.parent.ctx.currentIndex
            },
            (value) => {
                state.currentIndex = value
            }
        )
        console.log(instance)
        return { ...toRefs(state) }
    },
}
</script>

<style scoped>
.car-item {
    position: absolute;
    width: 100%;
    height: 100%;
}
img {
    width: 100%;
}
.v-enter-active,
.v-leave-active {
    transition: all 0.3s linear;
}
.v-enter-active {
    transform: translateX(100%);
}
.v-enter-to {
    transform: translateX(0);
}
.v-leave-active {
    transform: translateX(0);
}
.v-leave-to {
    transform: translateX(-100%);
}
</style>
