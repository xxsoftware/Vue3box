<template>
    <div class="ui-stars">
        <span
            v-for="num in 5"
            :key="num"
            :class="['iconfont icon-star', num <= starNum ? 'active' : '']"
            :style="{ fontSize: size + 'px' }"
            @click="setStarNum(num)"
        ></span>
    </div>
</template>

<script>
import { useStars } from '../hooks'
export default {
    name: 'Stars',
    props: {
        num: {
            type: Number,
            default: 0,
        },
        size: {
            type: Number,
            default: 16,
        },
    },
    setup(props, ctx) {
        const [starNum, setStarNum] = useStars(props.num, () => {
            ctx.emit('getStarNum', starNum.value)
        })
        return {
            starNum,
            setStarNum,
        }
    },
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'iconfont'; /* Project id 2965299 */
    src: url('//at.alicdn.com/t/font_2965299_p4ax7ioh4m.woff2?t=1637827402068')
            format('woff2'),
        url('//at.alicdn.com/t/font_2965299_p4ax7ioh4m.woff?t=1637827402068')
            format('woff'),
        url('//at.alicdn.com/t/font_2965299_p4ax7ioh4m.ttf?t=1637827402068')
            format('truetype');
}

.iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #999;
    &.icon-star {
        transtion: color 0.3s;
    }
    &.icon-star:before {
        content: '\e606';
    }
    &.active {
        color: #fbab06;
    }
}
</style>
