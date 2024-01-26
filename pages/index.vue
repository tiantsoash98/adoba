<template>
    <div>
        <section class="section section--no-padding-top section--no-padding-bottom home-hero" data-cursor="-inverse" ref="hero">
            <div class="home-hero__wrapper">
                <div class="home-hero__img-wrapper">
                    <div class="home-hero__overlay"></div>
                    <div class="home-hero__img-wrapper">
                        <NuxtImg
                            format="webp"
                            :class="['home-hero__img hero-img']" 
                            sizes="100vw sm:100vw md:100vw lg:100vw"
                            :src="imgPath(content.homeHeaderImg.data.attributes.url)" 
                            :alt="content.homeHeaderImg.data.attributes.alternativeText"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div class="container home-hero__content-wrapper pt-9 pb-11 pb-md-9">
                    <div class="home-hero__title-wrapper">
                        <h1 class="text-visually-hidden">{{ content.homeHeadline }}</h1>
                        <div class="home-hero__title title-h1 hero-title">{{ content.homeHeadline }}</div>
                    </div>
                    <div class="home-hero__button-wrapper">
                        <NuxtLink to="/contact">
                            <Button text="Contactez-nous" class="button--primary"></Button>
                        </NuxtLink>
                    </div>
                </div>
                <div class="home-hero__scroll-wrapper">
                    <div class="home-hero__label-wrapper">Scroll</div>
                    <div class="home-hero__icon-wrapper">
                        <IconArrowDown icon-class="home-hero__icon"></IconArrowDown>
                    </div>
                </div>
            </div>
        </section>
        <section class="section home-presentation" ref="presentationEl">
            <div class="container">
                <div class="row home-presentation__content-wrapper">
                    <div class="home-presentation__title-wrapper col-12 col-sm-10 col-md-8">
                        <h2 class="text-visually-hidden"> {{ content.homePresentation }}</h2>
                        <div class="home-presentation__title title-h3" ref="presentationTargetEl"> {{ content.homePresentation }}</div>
                    </div>
                    <div class="home-presentation__button-wrapper col-12 col-md-4">
                        <NuxtLink to="/contact">
                            <Button text="Contactez-nous"></Button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
       <HomeServices :services="content.services.data"></HomeServices>
       <HomeRealisations 
            :title="content.realisationTitle"
            :description="content.realisationDescription"
            :realisations="content.realisations.data"
        ></HomeRealisations>
       <HomeAdvantages 
            :label="content.advantageTitle"
            :advantages="content.avantages.data"
            ></HomeAdvantages>
    </div>
</template>

<script setup>
    const hero = ref(null)
    const presentationEl = ref(null)
    const presentationTargetEl = ref(null)
    const { gsap } = useGsap()
    
    const { data: content }  = await useFetch('/api/accueil-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const { animateHero, beforeUnmountHero } = useSectionAnimation()
    const { createTextRevealScroll, revertTextRevealScroll } = useTextRevealScroll()
    const headerExclusion = useHeaderExclusion()
    const headerStartHidePosition = useHeaderStartHidePosition()
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = true
        headerStartHidePosition.value = window.innerHeight/2
        initCursor()
        animateHero(hero)
        pageScroll()
        presentationEnter()
        window.addEventListener("resize", onWindowResizeEvent)
    })

    onBeforeUnmount(() => {
        beforeUnmountHero(hero)
        revertTextRevealScroll(presentationTargetEl)
        destroyCursor()
    })

    const onWindowResizeEvent = () => {
        revertTextRevealScroll(presentationTargetEl)
        createTextRevealScroll(presentationEl, presentationTargetEl, 'presentation-title')
    }

    const pageScroll = () => {
        presentationEnter()
        createTextRevealScroll(presentationEl, presentationTargetEl, 'presentation-title')
    }

    const presentationEnter = () => {
        let triggerEl = presentationEl.value;
        let targetEl = '.home-hero__img';

        gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: triggerEl,
                //trigger element - viewport
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        })
        .to(targetEl, {
            yPercent: 25,
            ease: "none"
        })
    }

    useContentMetadata().generateMetadata(content)
</script>

<style lang="scss">
.home {
    &-hero {    
        &__wrapper {
            position: relative;
            width: 100%;
            height: 100svh;
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
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            color: var(--brand-primary);
        }
        &__title-wrapper {
            max-width: 65ch;
        }
        &__title {
            overflow: hidden;
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
    &-presentation {
        &__title {
            &--line-wrapper {
                overflow: hidden;
            }
        } 
        &__button-wrapper {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }
    }
}
// Large
@media screen and (max-width: 1280px){
.home {
    &-hero {  
        &__title-wrapper {
            max-width: 50ch;
        }
    }
}
}
// Medium
@media screen and (max-width: 991px){
.home {
    &-hero {  
        &__content-wrapper {
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            row-gap: var(--r-space-md);
        }
    }
    &-presentation {
        &__content-wrapper {
            row-gap: var(--r-space-md);
        }
        &__button-wrapper {
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
}
}

</style>