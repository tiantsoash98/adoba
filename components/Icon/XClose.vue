<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.7 24.7">
        <polygon points="22.4 24.7 12.4 14.7 2.4 24.7 0 22.4 10 12.4 0 2.4 2.4 0 12.4 10 22.4 0 24.7 2.4 14.7 12.4 24.7 22.4 22.4 24.7"/>
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