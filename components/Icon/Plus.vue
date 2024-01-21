<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 26.7">
        <polygon points="15 26.7 11.7 26.7 11.7 15 0 15 0 11.7 11.7 11.7 11.7 0 15 0 15 11.7 26.7 11.7 26.7 15 15 15 15 26.7"/>
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