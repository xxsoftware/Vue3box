<template>
    <Modal
        :show="true"
        :width="350"
        :borderRadius="10"
        headerColor="#007bff"
        headerText="Hello world"
        headerTextColor="#fff"
        contentText="hello content  hello content   hello content   hello content   hello content"
        contentTextColor="#333"
        position="center"
        :btnGroupShow="true"
        confirmText="是"
        cancelText="否"
        @confirm="modalConfirm"
        @close="modalClose"
    ></Modal>
</template>

<script>
export default {
    name: 'App',
    components: {},
    setup() {
        const modalConfirm = () => {
            console.log('Modal Confirm')
        }
        const modalClose = () => {
            console.log('Modal Close')
        }
        return {
            modalConfirm,
            modalClose,
        }
    },
}
</script>

<style lang="scss"></style>
