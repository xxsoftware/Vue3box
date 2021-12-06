<template>
    <div id="app">
        <div class="container">
            <Carousel
                :autoplay="true"
                :duration="800"
                :initial="0"
                :hasDot="true"
                :hasDirector="true"
                dotBgColor="#000"
            >
                <!-- 自动播放    切换时间间隔    初始图片   是否有下面的小圆点   是否有方向指示器  小圆点颜色-->
                <car-item v-for="(item, index) of carData" :key="index">
                    <img
                        :src="require(`./assets/${item.img_name}`)"
                        alt="" /></car-item
            ></Carousel>
        </div>
    </div>
</template>

<script>
import carData from './data/carousel'
export default {
    name: 'App',
    setup() {
        return {
            carData,
        }
    },
}
</script>

<style scoped>
.container {
    width: 800px;
    height: 800px;
    margin: 0 auto;
}
</style>
