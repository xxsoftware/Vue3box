export function getStyle(ele, prop) {
    return parseInt(window.getComputedStyle(ele, null)[prop])
}
