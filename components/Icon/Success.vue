<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.8 13.8">
        <polygon points="6.4 13.8 0 7.4 1.4 6 6.4 11 17.4 0 18.8 1.4 6.4 13.8"/>
    </svg>
</template>

<script setup>
const props = defineProps({
    iconClass: String
})
</script>

<style lang="scss" scoped>
svg {
    width: 100%;
    fill: currentColor;
}
</style>