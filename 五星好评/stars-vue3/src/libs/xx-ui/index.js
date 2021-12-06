import Stars from './Stars/Stars'
let xxUI = {}
xxUI.install = function (Vue) {
    Vue.component(Stars.name, Stars)
}
export default xxUI
