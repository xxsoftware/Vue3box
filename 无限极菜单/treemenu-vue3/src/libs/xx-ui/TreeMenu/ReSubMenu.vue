<template>
    <sub-menu>
        <template #title>{{ data.title }}</template>
        <template v-for="c of data.children">
            <menu-item :key="c.id" v-if="!c.children">
                {{ c.title }}
            </menu-item>
            <re-sub-menu v-if="c.children" :key="c.id" :data="c"></re-sub-menu>
        </template>
    </sub-menu>
</template>

<script>
export default {
    name: 'ReSubMenu',
    props: {
        data: Object,
    },
}
</script>
