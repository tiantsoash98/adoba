<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.5 113.5">
        <polygon points="5.8 113.5 0 107.6 99.4 8.2 36.2 8.2 36.2 0 113.5 0 113.5 77.2 105.2 77.2 105.2 14.1 5.8 113.5"/>
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