export default {
    mounted(el) {
        console.log(el)
        const oSelectorInput = el.querySelector('.selector-input')
        const oSelectorMenu = el.querySelector('.selector-menu')
        const oInput = oSelectorInput.querySelector('input')
        const oPlaceHolder = oSelectorInput.querySelector('label')
        const oIcon = oSelectorInput.querySelector('span')
        oInput.addEventListener(
            'focus',
            function () {
                oPlaceHolder.style.display = 'none'
                setTimeout(() => {
                    oSelectorMenu.style.display = 'block'
                }, 200)
                oIcon.className = 'iconfont icon-sousuo'
            },
            false
        )
        oInput.addEventListener(
            'blur',
            function () {
                setTimeout(() => {
                    oSelectorMenu.style.display = 'none'
                    if (this.value.length === 0) {
                        oPlaceHolder.style.display = 'block'
                    }
                }, 200)
                oIcon.className = 'iconfont icon-xiajiantou'
            },
            false
        )
    },
}
