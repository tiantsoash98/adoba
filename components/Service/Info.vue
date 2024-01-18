<template>
    <div>
        <section class="section service-info">
            <div class="container">
                <div class="service-info__top-wrapper">
                    <div class="service-info__headline-wrapper">
                        <h2 class="text-visually-hidden">{{ content.serviceInfo.serviceInfoHeadline }}</h2>
                        <div class="service-info__headline title-h2">{{ content.serviceInfo.serviceInfoHeadline }}</div>
                    </div>
                    <div class="service-info__icon-wrapper">
                        <IconAsterisk icon-class="service-info__icon"></IconAsterisk>
                    </div>
                    <div class="service-info__border-bottom"></div>
                </div>
                <div class="row service-info__content-wrapper">
                    <div class="service-info__description-wrapper">
                        <h3 class="text-visually-hidden">{{ content.serviceInfo.serviceInfoDescription }}</h3>
                        <div class="service-info__description title-h5">{{ content.serviceInfo.serviceInfoDescription }}</div>
                    </div>
                    <div class="service-info__text-wrapper">
                        <p class="service-info__text">{{ content.serviceInfo.serviceInfoText }}</p>
                    </div>
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
        padding-bottom: var(--r-space-md);
    }
    &__headline-wrapper {
        max-width: 50ch;
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-md);
        margin-top: auto;
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
    &__content-wrapper {
        margin-top: var(--r-space-lg);
    }
    &__description-wrapper {
        grid-column: span 6;
    }
    &__text-wrapper {
        grid-column: 9/span 4;
        margin-top: auto;
    }
}
</style>