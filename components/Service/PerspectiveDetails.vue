<template>
    <div>
        <section class="section section--no-padding-top section--no-padding-bottom section-perspective">
            <div class="container">
                <div class="row section-perspective__main-wrapper">
                    <div class="section-perspective__content-wrapper section-perspective__content-wrapper--1">
                        <div class="section-perspective__title-wrapper">
                            <h2 class="text-visually-hidden">{{ content.serviceDetails.servicePerspectiveIntTitle }}</h2>
                            <div class="service-perspective__title title-h1">{{ content.serviceDetails.servicePerspectiveIntTitle }}</div>
                        </div>
                        <div class="section-perspective__text-wrapper">
                            <p class="service-perspective__text">{{ content.serviceDetails.servicePerspectiveIntText }}</p>
                        </div>
                    </div>
                    <div class="section-perspective__canvas-container">
                        <div class="section-perspective__canvas">
                            <div ref="img1" class="section-perspective__img-wrapper section-perspective__img-wrapper--1 section-perspective__img-wrapper--absolute">
                                <nuxt-img
                                    :src="imgPath(content.serviceDetails.servicePerspectiveIntImg.data.attributes.url)"
                                    class="section-perspective__img" 
                                    sizes="sm:100vw md:50vw 50vw" 
                                    :alt="content.serviceDetails.servicePerspectiveIntTitle"
                                    loading="lazy"
                                    />
                            </div>
                            <div ref="img2" class="section-perspective__img-wrapper section-perspective__img-wrapper--2  section-perspective__img-wrapper--absolute">
                                <nuxt-img
                                    :src="imgPath(content.serviceDetails.servicePerspectiveExtImg.data.attributes.url)"
                                    class="section-perspective__img" 
                                    sizes="sm:100vw md:50vw 50vw" 
                                    :alt="content.serviceDetails.servicePerspectiveExtTitle"
                                    loading="lazy"
                                    />
                            </div>
                        </div>
                    </div>
                    <div ref="triggerRef" class="section-perspective__content-wrapper section-perspective__content-wrapper--2">
                        <div class="section-perspective__title-wrapper">
                            <h2 class="text-visually-hidden">{{ content.serviceDetails.servicePerspectiveExtTitle }}</h2>
                            <div class="service-perspective__title title-h1">{{ content.serviceDetails.servicePerspectiveExtTitle }}</div>
                        </div>
                        <div class="section-perspective__text-wrapper">
                            <p class="service-perspective__text">{{ content.serviceDetails.servicePerspectiveExtText }}</p>
                        </div>
                    </div>
                    <div class="section-perspective__img-wrapper section-perspective__img-wrapper--mobile-only">
                        <nuxt-img
                            :src="imgPath(content.serviceDetails.servicePerspectiveExtImg.data.attributes.url)"
                            class="section-perspective__img" 
                            sizes="sm:100vw md:40vw 40vw" 
                            :alt="content.serviceDetails.servicePerspectiveExtTitle"
                            loading="lazy"
                            />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const { gsap } = useGsap();
const triggerRef = ref(null)
const img1 = ref(null)
const img2 = ref(null)

const props = defineProps({
    content: Object
})

onMounted(() => {
    animateOnScroll()
})

const animateOnScroll = () => {
    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: triggerRef.value,
            //trigger element - viewport
            start: "top 90%",
            end: "top top",
            scrub: true,
        }
    })
    .fromTo(img1.value, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1
    },{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        scale: 1.2
    })
    .from(img2.value, {
        scale: 1.2
    }, '<')
}


</script>

<style lang="scss" scoped>
.section-perspective {
    &__main-wrapper {
        width: 100%;
    }
    &__content-wrapper {
        grid-column: span 4;
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: var(--r-space-lg);
        padding-top: var(--r-space-lg);

        &--2 {
            justify-content: flex-start;
        }
    }
    &__title-wrapper {
        margin-bottom: var(--r-space-sm);
    }
    &__canvas-container {
        grid-column: 7/span 6;
        position: sticky;
        top: 0;
        height: 100vh;
       
        padding-top: var(--r-space-md);
        padding-bottom: var(--r-space-md);
    }
    &__canvas {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    &__img-wrapper {
        width: 100%;
        
        &--absolute {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            z-index: 1;
        }
        &--1 {
            z-index: 2;
        }
        &--mobile-only {
            display: none;
        }
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>