<template>
    <div id="app">
        <div class="side-bar">
            <tree-menu>
                <template v-for="item of menuData">
                    <menu-item v-if="!item.children" :key="item.id">
                        <a href="">{{ item.title }}</a></menu-item
                    >
                    <re-sub-menu
                        v-if="item.children"
                        :data="item"
                        :key="item.id"
                    ></re-sub-menu>
                </template>
            </tree-menu>
        </div>
    </div>
</template>

<script>
import menuData from '@/data/menuData'
import ReSubMenu from './libs/xx-ui/TreeMenu/ReSubMenu.vue'
export default {
    components: { ReSubMenu },
    name: 'App',
    setup() {
        return {
            menuData,
        }
    },
}
</script>

<style lang="scss">
.side-bar {
    width: 300px;
}
a {
    text-decoration: none;
    color: #fff;
}
</style>
