<template>
    <div>
        <svg :class="'spinner ' + iconClass" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    iconClass: String
})
</script>

<style lang="scss" scoped>
// https://codepen.io/mrrocks/pen/ExLovj
.spinner {
    $offset: 187;
    $duration: 1.4s;

    .spinner {
        animation: rotator $duration linear infinite;
    }

    @keyframes rotator {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(270deg); }
    }

    .path {
        stroke: var(--brand-secondary);
        stroke-dasharray: $offset;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: dash $duration ease-in-out infinite;
    }

    @keyframes dash {
        0% { 
            stroke-dashoffset: $offset; 
        }
        50% {
            stroke-dashoffset: $offset/4;
            transform:rotate(135deg);
        }
        100% {
            stroke-dashoffset: $offset;
            transform:rotate(450deg);
        }
    }
}
</style>