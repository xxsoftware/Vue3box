let xxUI = {}
import Selector from './Selector'
xxUI.install = function (Vue) {
    Vue.component(Selector.name, Selector)
}
export default xxUI
