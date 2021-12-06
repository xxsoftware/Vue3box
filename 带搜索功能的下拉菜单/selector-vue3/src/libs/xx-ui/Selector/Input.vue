<template>
    <div class="selector-input">
        <label class="placeholder">{{ placeholder }}</label>
        <input
            type="text"
            class="input"
            :value="value"
            ref="inputValue"
            @input="searchOptions($event)"
            @focus="searchOptions($event)"
            @blur="setValue(value)"
        />
        <span class="iconfont icon-xiajiantou"></span>
    </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
    name: 'SelectorInput',
    props: {
        placeholder: {
            type: String,
            default: '请选择',
        },
        value: String,
    },
    setup(props, ctx) {
        const searchOptions = (e) => {
            ctx.emit('searchOptions', e.target.value)
        }
        const instance = getCurrentInstance()
        const setValue = (value) => {
            const _input = instance.refs.inputValue
            if (_input.value.length) {
                _input.value = value
            }
        }
        return {
            searchOptions,
            setValue,
        }
    },
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'iconfont'; /* Project id 2965299 */
    src: url('//at.alicdn.com/t/font_2965299_1c3swxz59ai.woff2?t=1638325240400')
            format('woff2'),
        url('//at.alicdn.com/t/font_2965299_1c3swxz59ai.woff?t=1638325240400')
            format('woff'),
        url('//at.alicdn.com/t/font_2965299_1c3swxz59ai.ttf?t=1638325240400')
            format('truetype');
}

.iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-sousuo:before {
    content: '\e62f';
}

.icon-xiajiantou:before {
    content: '\e61f';
}

.selector-input {
    position: relative;
    width: 100%;
    height: 38px;
    .input {
        width: 100%;
        height: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        background: #fff;
        border: 1px solid #999;
        border-radius: 5px;
        outline: none;
        transition: all 2s linear;
        &:focus {
            border-color: #1890ff;
            box-shadow: 0 0 3px #1890ff;
        }
    }
    .placeholder,
    .iconfont {
        position: absolute;
    }
    .placeholder {
        left: 15px;
        top: 8px;
        color: #999;
    }
    .iconfont {
        right: 15px;
        top: 12px;
        color: #999;
        &.icon-search {
            font-size: 22px;
            top: 8px;
        }
    }
}
</style>
