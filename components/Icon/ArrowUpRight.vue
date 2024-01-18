<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <polygon points="2.4 24 0 21.7 18.3 3.3 7.4 3.3 7.4 0 24 0 24 16.7 20.7 16.7 20.7 5.7 2.4 24"/>
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