<template>
    <div class="selector" v-focus>
        <SelectorInput
            :placeholder="placeholder"
            :value="inputValue"
            @searchOptions="searchOptions"
        ></SelectorInput>
        <SelectorMenu
            :data="data"
            @setItemValue="setItemValue"
            :searchValue="searchValue"
        ></SelectorMenu>
    </div>
</template>

<script>
import SelectorInput from './Input'
import SelectorMenu from './Menu'
import focus from '../directives/focus'
import { reactive, toRefs } from 'vue'
export default {
    name: 'Selector',
    props: { placeholder: String, data: Array },
    directives: { focus },
    components: {
        SelectorInput,
        SelectorMenu,
    },
    setup(props, ctx) {
        const state = reactive({
            inputValue: '',
            searchValue: '',
        })
        const setItemValue = (item) => {
            state.inputValue = item.text
            ctx.emit('setItemValue', item.value)
        }
        const searchOptions = (value) => {
            state.searchValue = value
        }
        return { ...toRefs(state), setItemValue, searchOptions }
    },
}
</script>

<style lang="scss" scoped>
.selector {
    width: 300px;
    position: relative;
}
</style>
