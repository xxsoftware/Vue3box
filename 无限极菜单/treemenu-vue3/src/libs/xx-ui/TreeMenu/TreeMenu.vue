<template>
    <div class="tree-menu"><slot></slot></div>
</template>

<script>
export default {
    name: 'TreeMenu',
}
</script>

<style lang="scss" scoped>
.tree-menu {
    width: 100%;
    background: #000;
    color: #fff;
}
</style>
