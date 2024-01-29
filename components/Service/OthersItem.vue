<template>
    <div>
        <NuxtLink :to="slug">
            <div class="service-others-item pt-8 pt-sm-5 pb-8 pb-sm-5">
                <div class="service-others-item__content-wrapper">
                    <div class="service-others-item__title title-h5">{{ title }}</div>
                    <div class="service-others-item__icon-wrapper">
                        <IconArrowUpRight icon-class="service-others-item__icon"></IconArrowUpRight>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
    
</template>

<script setup>
const props = defineProps({
    title: String,
    slug: String,
    img: Object
})
</script>

<style lang="scss" scoped>
.service-others-item {
    $root:&;
    border-top: 1px solid var(--color-neutral-70);
    color: var(--color-neutral-30);
    
    &__content-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    &__title {
        transition: color .6s var(--alias-default-ease) .1s,
                    transform .6s var(--alias-default-ease) .1s; 
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-xs-2);
        margin-top: auto;
    }
    &__icon {
        transition: transform .6s var(--alias-default-ease) .1s; 
    }
}
@media screen and (min-width: 768px){
    .service-others-item {
        $root:&;
        &:hover {
            #{$root}__title {
                color: var(--color-neutral-10);
                transform: translateX(8%);
            }
            #{$root}__icon {
                transform: translate(25%, -25%);
            }
        }
    }
}
@media screen and (max-width: 767px){
    .service-others-item {
        &__icon-wrapper {
            max-width: var(--r-space-sm-2);
        }
    }
}
</style>