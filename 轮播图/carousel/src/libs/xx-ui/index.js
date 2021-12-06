import Carousel from './Carousel/index'
import CarItem from './Carousel/item'

let xxUI = {}
xxUI.install = function (Vue) {
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarItem.name, CarItem)
}
export default xxUI
