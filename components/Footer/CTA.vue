<template>
    <div>
        <section class="section pre-footer">
        <div class="container pre-footer__main-wrapper">
            <NuxtLink to="/contact">
                <div class="pre-footer__label title-h6">{{ content.footerCtaLabel }}</div>
                <div class="pre-footer__content-wrapper" data-cursor-text="Nous contacter">
                    <div class="pre-footer__title-wrapper mt-5 mt-sm-5">
                        <span class="pre-footer__title title-h1">{{ content.footerCtaText }}</span>
                    </div>
                    <div class="pre-footer__icon-wrapper">
                        <IconArrowNarrowUpRight icon-class="pre-footer__icon"/>
                    </div>
                </div>
            </NuxtLink>
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
.pre-footer {
    $root: &;

    &__content-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        &:hover {
            #{$root}__icon {
                transform: translate(1vw, -1vw);
            }
        }
    }
    &__title-wrapper {
        max-width: 75ch;
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-lg);
    }
    &__icon {
        width: 100%;
        fill: currentColor;
        transition: transform .8s var(--alias-default-ease); 
    }
}
</style>