<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.3 27.3">
        <path d="M7,27.3h-1.3l-1-2.1c-.3-.7-.5-1-.7-1.2-.2-.2-.4-.4-.6-.6-.2-.2-.6-.4-1.2-.7l-2.1-1v-1.3l2.1-1c.7-.3,1-.5,1.2-.7,.2-.2,.4-.4,.6-.6,.2-.2,.4-.6,.7-1.2l1-2.1h1.3l1,2.1c.3,.7,.5,1,.7,1.2,.2,.2,.4,.4,.6,.6,.2,.2,.6,.4,1.2,.7l2.1,1v1.3l-2.1,1c-.7,.3-1,.5-1.2,.7-.2,.2-.4,.4-.6,.6-.2,.2-.4,.6-.7,1.2l-1,2.1Zm-5-6.3l.8,.4c.7,.4,1.1,.6,1.5,.8,.3,.2,.6,.5,.9,.9,.3,.4,.5,.8,.8,1.5l.4,.8,.4-.8c.4-.7,.6-1.1,.8-1.5,.2-.3,.5-.6,.9-.9,.4-.3,.8-.5,1.5-.8l.8-.4-.8-.4c-.7-.4-1.1-.6-1.5-.8-.3-.3-.6-.5-.9-.9-.3-.4-.5-.8-.8-1.5l-.4-.8-.4,.8c-.4,.7-.6,1.1-.8,1.5-.2,.3-.5,.6-.9,.9-.4,.3-.8,.5-1.5,.8l-.8,.4Zm15-1.7l-1.6-4.1c-.4-.9-.5-1.4-.8-1.7-.2-.3-.5-.6-.8-.8-.3-.2-.8-.4-1.7-.8l-4.1-1.6v-1.4l4.1-1.6c.9-.4,1.4-.5,1.7-.8,.3-.2,.6-.5,.8-.8,.2-.3,.4-.8,.8-1.7l1.6-4.1h1.4s1.6,4.1,1.6,4.1c.4,.9,.5,1.4,.8,1.7,.2,.3,.5,.6,.8,.8,.3,.2,.8,.4,1.7,.8l4.1,1.6v1.4l-4.1,1.6c-.9,.4-1.4,.5-1.7,.8-.3,.2-.6,.5-.8,.8-.2,.3-.4,.8-.8,1.7l-1.6,4.1h-1.4Zm-6.5-9.6l2.3,.9c1,.4,1.6,.6,2,.9,.4,.3,.8,.7,1.1,1.1,.3,.5,.5,1,.9,2l.9,2.3,.9-2.3c.4-1,.6-1.6,.9-2,.3-.4,.7-.8,1.1-1.1,.5-.3,1-.5,2-.9l2.3-.9-2.3-.9c-1-.4-1.6-.6-2-.9-.4-.3-.8-.7-1.1-1.1-.3-.5-.5-1-.9-2l-.9-2.3-.9,2.3c-.4,1-.6,1.6-.9,2-.3,.4-.7,.8-1.1,1.1-.5,.3-1,.5-2,.9l-2.3,.9Z"/>
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