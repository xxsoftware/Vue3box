<template>
    <div class="carousel" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <div class="inner">
            <CarDirector dir="prev" @dirClick="dirClick"></CarDirector>
            <CarDirector dir="next" @dirClick="dirClick"></CarDirector>
            <CarDot
                :hasDot="hasDot"
                :itemLen="itemLen"
                :currentIndex="currentIndex"
                :dotBgColor="dotBgColor"
                @DotClick="dotClick"
            ></CarDot>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {
    reactive,
    toRefs,
    onMounted,
    onBeforeUnmount,
    getCurrentInstance,
} from 'vue'
import CarDot from './Dot.vue'
import CarDirector from './Director.vue'
export default {
    name: 'Carousel',
    components: {
        CarDot,
        CarDirector,
    },
    props: {
        autoplay: {
            type: Boolean,
            default: true,
        },
        duration: {
            type: Number,
            default: 3000,
        },
        initial: {
            type: Number,
            default: 0,
        },
        hasDot: {
            type: Boolean,
            default: true,
        },
        hasDirector: {
            type: Boolean,
            default: true,
        },
        dotBgColor: String,
    },
    setup(props) {
        const instance = getCurrentInstance()
        const state = reactive({
            currentIndex: props.initial,
            itemLen: 0,
        })
        let t = null
        const autoPlay = () => {
            if (props.autoplay) {
                t = setInterval(() => {
                    setIndex('next')
                }, props.duration)
            }
        }
        const setIndex = (dir) => {
            switch (dir) {
                case 'next':
                    state.currentIndex++
                    if (state.currentIndex === state.itemLen) {
                        state.currentIndex = 0
                    }
                    break
                case 'prev':
                    state.currentIndex--
                    if (state.currentIndex === -1) {
                        state.currentIndex = state.itemLen - 1
                    }
                    break
                default:
                    break
            }
        }
        const dotClick = (index) => {
            state.currentIndex = index
        }
        const dirClick = (dir) => {
            setIndex(dir)
        }
        const _clearIntervalFn = () => {
            clearInterval(t)
            t = null
        }
        const mouseenter = () => {
            _clearIntervalFn()
        }
        const mouseleave = () => {
            autoPlay()
        }
        onMounted(() => {
            state.itemLen = instance.slots.default()[1].children.length
            autoPlay()
        })
        onBeforeUnmount(() => {
            _clearIntervalFn()
        })
        return {
            ...toRefs(state),
            dotClick,
            mouseenter,
            mouseleave,
            dirClick,
        }
    },
}
</script>

<style scoped>
.carousel {
    width: 100%;
    height: 100%;
}
.inner {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
</style>
