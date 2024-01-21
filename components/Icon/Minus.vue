<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 3.3">
        <rect width="26.7" height="3.3"/>
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