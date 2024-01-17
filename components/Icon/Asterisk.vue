<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66">
        <polygon points="36 66 30 66 30 40.2 11.8 58.5 7.5 54.2 25.8 36 0 36 0 30 25.8 30 7.5 11.8 11.8 7.5 30 25.8 30 0 36 0 36 25.8 54.2 7.5 58.5 11.8 40.2 30 66 30 66 36 40.2 36 58.5 54.2 54.2 58.5 36 40.2 36 66"/>
    </svg>
</template>

<script setup>
const props = defineProps({
    iconClass: String
})
</script>

<style lang="scss" scoped>

</style>