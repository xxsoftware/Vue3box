<template>
    <div id="app">
        <div class="container">
            <Selector
                :data = SelectorData
                placeholder="请选择框架"
                @setItemValue="setItemValue"
            ></Selector>
        </div>
    </div>
</template>

<script>
import SelectorData from '@/data/selector'
export default {
    name: 'App',
    setup() {
        const setItemValue = (value) => {
            console.log(value)
        }
        return { SelectorData, setItemValue }
    },
}
</script>

<style lang="scss">
.container {
    width: 500px;
    height: 1000px;
    margin: 300px auto;
}
</style>
