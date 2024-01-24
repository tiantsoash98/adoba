<template>
    <div>
        <section class="section section--no-padding-top section--no-padding-bottom service-hero" data-cursor="-inverse" ref="hero">
            <div class="service-hero__wrapper">
                <div class="service-hero__img-wrapper">
                    <div class="service-hero__overlay"></div>
                    <div class="service-hero__img-wrapper">
                        <nuxt-img
                            :placeholder="[50, 25, 75, 5]"
                            format="webp"
                            :class="['service-hero__img hero-img img', {'img--loaded': imgIsLoaded}]" 
                            sizes="sm:100vw md:100vw lg:100vw 100vw"
                            :src="imgPath(content.serviceHero.serviceHeroImg.data.attributes.url)" 
                            :alt="content.serviceHero.serviceHeroImg.data.attributes.alternativeText"
                            loading="lazy"
                            @load="imgIsLoaded = true"
                            />
                    </div>
                </div>
                <div class="container">
                    <div class="row service-hero__content-wrapper">
                        <div class="service-hero__title-wrapper">
                            <span class="service-hero__label title-h6">{{ content.serviceHero.serviceHeroLabel }}</span>
                            <h1 class="text-visually-hidden">{{ content.serviceHero.serviceHeroTitle }}</h1>
                            <div class="service-hero__title title-h1 hero-title">{{ content.serviceHero.serviceHeroTitle }}</div>
                        </div>
                        <div class="service-hero__description-wrapper">
                            <h6 class="service-hero__description hero-description">{{ content.serviceHero.serviceHeroDescription }}</h6>
                        </div>
                    </div>
                </div>
                <div class="service-hero__scroll-wrapper">
                    <div class="service-hero__label-wrapper">Scroll</div>
                    <div class="service-hero__icon-wrapper">
                        <IconArrowDown icon-class="service-hero__icon"></IconArrowDown>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const imgIsLoaded = ref(false)
const { animateHero, beforeUnmountHero } = useSectionAnimation()
const hero = ref(null)
const props = defineProps({
    content: Object
})

onMounted(() => {
    animateHero(hero)
})

onBeforeUnmount(() => {
    beforeUnmountHero(hero)
})
</script>

<style lang="scss" scoped>
.service-hero {
    &__wrapper {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-neutral-100);
        opacity: 0.6;
        z-index: 1;
    }
    &__img-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--brand-secondary);
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    &__content-wrapper {
        width: 100%;
        height: 100%;
        color: var(--brand-primary);
        padding-top: var(--r-space-lg);
        padding-bottom: var(--r-space-lg);
    }
    &__title-wrapper {
        grid-column: span 5;
    }
    &__title {
        margin-top: var(--r-space-xs);
        overflow: hidden;
    }
    &__description-wrapper {
        grid-column: 8/span 5;
        margin-top: auto;
    }
    &__scroll-wrapper {
        position: absolute;
        left: var(--r-grid-x-margin);
        bottom: var(--r-space-sm);
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: var(--brand-primary);
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-xs);
        margin-left: var(--r-space-xs);
        transition: transform 1s var(--alias-default-ease) .1s; 
    }
    &__icon{
        width: 100%;
        fill: currentColor;
        animation: bounce 2s linear infinite 2s;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(0.3vw);
        }
    }
}
</style>