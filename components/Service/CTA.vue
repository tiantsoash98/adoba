<template>
    <div>
        <section class="section section--padding-top-md service-cta">
            <div class="container">
                <div class="row service-cta__content-wrapper">
                    <div class="service-cta__text-wrapper">
                        <div class="service-ctan__text title-h3"> {{ content.serviceCTA.serviceCTAText }}</div>
                    </div>
                    <div class="service-cta__button-wrapper">
                        <NuxtLink to="/contact">
                            <Button :text="content.serviceCTA.serviceCTAButtonLabel"></Button>
                        </NuxtLink>
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
.service-cta {
    &__content-wrapper {
        row-gap: var(--r-space-md);
    }
    &__text-wrapper {
        grid-column: span 8;
    }
    &__button-wrapper {
        margin-left: auto;
        margin-top: auto;
        grid-column: 10/span 3;
    }
}
</style>