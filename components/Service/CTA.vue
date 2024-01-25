<template>
    <div>
        <section class="section section--padding-top-md service-cta">
            <div class="container">
                <div class="row service-cta__content-wrapper">
                    <div class="service-cta__text-wrapper col-12 col-md-8">
                        <div class="service-ctan__text title-h3"> {{ content.serviceCTA.serviceCTAText }}</div>
                    </div>
                    <div class="service-cta__button-wrapper col-12 col-md-4 mt-9 mt-xs-7 mt-md-0">
                        <NuxtLink to="/contact" class="service-cta__button">
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
    &__button-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
}
@media screen and (max-width: 991px){
    .service-cta {
        &__button-wrapper {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
}
</style>