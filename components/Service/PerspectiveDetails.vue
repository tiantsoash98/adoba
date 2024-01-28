<template>
    <div>
        <section class="section section--no-padding-top section--no-padding-bottom section-perspective">
            <div class="container">
                <div class="row section-perspective__main-wrapper">
                    <div class="section-perspective__content-wrapper section-perspective__content-wrapper--1 col-12 col-md-12 col-lg-6 pt-9 pb-9">
                        <div class="section-perspective__title-wrapper mb-5 pr-9 pr-lg-0">
                            <h2 class="text-visually-hidden">{{ content.serviceDetails.servicePerspectiveIntTitle }}</h2>
                            <div class="service-perspective__title title-h1">{{ content.serviceDetails.servicePerspectiveIntTitle }}</div>
                        </div>
                        <div class="section-perspective__text-wrapper">
                            <div class="service-perspective__text rich-text" v-html="$mdRenderer.render(content.serviceDetails.servicePerspectiveIntText)"></div>
                        </div>
                    </div>
                    <div class="section-perspective__canvas-container col-12 col-md-12 col-lg-6 pt-0 pb-0 pb-md-7 pt-md-7">
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
                    <div ref="triggerRef" class="section-perspective__content-wrapper section-perspective__content-wrapper--2 col-12 col-md-12 col-lg-6 pt-9 pb-9">
                        <div class="section-perspective__title-wrapper mb-5 pr-9 pr-lg-0">
                            <h2 class="text-visually-hidden">{{ content.serviceDetails.servicePerspectiveExtTitle }}</h2>
                            <div class="service-perspective__title title-h1">{{ content.serviceDetails.servicePerspectiveExtTitle }}</div>
                        </div>
                        <div class="section-perspective__text-wrapper">
                            <div class="service-perspective__text rich-text" v-html="$mdRenderer.render(content.serviceDetails.servicePerspectiveExtText)"></div>
                        </div>
                    </div>
                    <div class="section-perspective__img-wrapper section-perspective__img-wrapper--mobile-only col-12 pb-7">
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
    let matchMedia = gsap.matchMedia();
    
    matchMedia.add("(min-width: 1281px)", () => {
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
    });
}
</script>

<style lang="scss" scoped>
.section-perspective {
    &__main-wrapper {
        width: 100%;
    }
    &__content-wrapper {
        height: max(700px, 80vh);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        &--2 {
            justify-content: flex-start;
        }
    }
    &__text-wrapper {
        max-width: 40ch;
    }
    &__canvas-container {
        position: sticky;
        top: 0;
        height: 100vh;
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
            height: clamp(300px, 50vh, 500px);
            display: none;
        }
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
@media screen and (max-width: 1280px){
    .section-perspective {
        &__content-wrapper {
            height: auto;
            flex-direction: row;
            justify-content: space-between;
        }
        &__canvas-container {
            position: relative;
            height: clamp(500px, 70vh, 700px);
        }
    }
}
@media screen and (max-width: 767px){
    .section-perspective {
        &__content-wrapper {
            height: auto;
            flex-direction: column;
        }
        &__text-wrapper {
            max-width: none;
        }
        &__img-wrapper {
            &--mobile-only {
                display: flex;
            }
        }
    }
}
</style>