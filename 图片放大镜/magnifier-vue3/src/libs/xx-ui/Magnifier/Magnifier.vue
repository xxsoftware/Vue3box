<template>
    <div
        v-magnifier
        class="img-wrap"
        :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
    >
        <a
            :href="link"
            class="mag-wrap"
            :style="{
                width: magWidth + 'px',
                height: magHeight + 'px',
            }"
        >
            <img
                :src="imgUrl"
                class="mag-img"
                :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
            />
        </a>
        <a :href="link" class="img-link">
            <img :src="imgUrl" class="static-img" />
        </a>
    </div>
</template>

<script>
import { magnifier } from '../directives'
export default {
    name: 'Magnifier',
    directives: {
        magnifier,
    },
    props: {
        imgWidth: {
            type: Number,
            default: 375,
        },
        imgHeight: {
            type: Number,
            default: 375,
        },
        magWidth: {
            type: Number,
            default: 150,
        },
        magHeight: {
            type: Number,
            default: 150,
        },
        link: String,
        imgUrl: String,
    },
}
</script>
<style lang="scss" scoped>
.img-wrap {
    position: relative;
    border: 1px solid #ddd;
    box-shadow: 0 0 5px #999;
    .static-img {
        width: 100%;
    }
    .mag-wrap {
        display: none;
        //默认是none
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        background: #fff;
        box-shadow: 0 0 10px #00c;
        border-radius: 50%;
        cursor: move;
        overflow: hidden;

        &.show {
            display: block;
            //鼠标移入class变成show   这两个属性生效
            transform: scale(1.6657);
        }
        .mag-img {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>
