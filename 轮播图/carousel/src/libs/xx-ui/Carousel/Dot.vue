<template>
    <div class="dot-wrapper" v-if="hasDot">
        <div class="dot-item" v-for="item in itemLen" :key="item">
            <a
                href="javascript:;"
                class="dot-link"
                :style="{
                    backgroundColor:
                        item - 1 === currentIndex ? dotBgColor : '#fff',
                }"
                @click="DotClick(item - 1)"
            ></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarDot',
    props: {
        itemLen: Number,
        currentIndex: Number,
        hasDot: {
            type: Boolean,
            default: true,
        },
        dotBgColor: {
            type: String,
            default: '#ff5000',
        },
    },
    setup(props, ctx) {
        const DotClick = (index) => {
            ctx.emit('DotClick', index)
        }
        return {
            DotClick,
        }
    },
}
</script>

<style scoped>
.dot-wrapper {
    width: 70px;
    height: 13px;
    border-radius: 10px;
    position: absolute;
    bottom: 15px;
    text-align: center;
    font-size: 0;
    left: 50%;
    z-index: 1;
    margin-left: -39px;
    background-color: rgba(255, 255, 255, 0.3);
}
.dot-item {
    display: inline-block;
    margin: 3px;
}
.dot-link {
    display: block;
    padding-top: 8px;
    width: 8px;
    height: 0;
    border-radius: 50%;
    background: #fff;
}
</style>
