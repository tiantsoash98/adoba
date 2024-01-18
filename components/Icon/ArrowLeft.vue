<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.2 13.4">
        <polygon points="17.2 6.7 10.5 13.4 9.8 12.7 15.3 7.2 0 7.2 0 6.2 15.3 6.2 9.8 .7 10.5 0 17.2 6.7"/>
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