<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 37.2">
        <path d="M31.5,16c2,1.2,2,4,0,5.2L4.5,36.8C2.5,37.9,0,36.5,0,34.2V3C0,.7,2.5-.7,4.5,.4L31.5,16Z"/>
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