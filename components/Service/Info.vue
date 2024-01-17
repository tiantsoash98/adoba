<template>
    <div>
        <section class="section service-info">
            <div class="container">
                <div class="service-info__top-wrapper">
                    <div class="service-info__headline-wrapper">
                        <h1 class="text-visually-hidden">{{ content.serviceInfo.serviceInfoHeadline }}</h1>
                        <div class="service-info__headline title-h2">{{ content.serviceInfo.serviceInfoHeadline }}</div>
                    </div>
                    <div class="service-info__icon-wrapper">
                        <IconAsterisk icon-class="service-info__icon"></IconAsterisk>
                    </div>
                    <div class="service-info__border-bottom"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object
})
</script>

<style lang="scss" scoped>
.service-info {
    &__top-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: var(--r-space-sm);
    }
    &__border-bottom {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: var(--brand-secondary);
    }
}
</style>