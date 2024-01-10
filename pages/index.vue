<template>
    <div>
        <section class="section section--no-padding-top section--no-padding-bottom home-hero">
            <div class="home-hero__wrapper">
                <div class="home-hero__img-wrapper">
                    <div class="home-hero__overlay"></div>
                    <NuxtImg
                        class="home-hero__img" 
                        densities="x1 x2" 
                        sizes="100vw sm:100vw md:100vw" 
                        :src="imgPath(content.homeHeaderImg.data.attributes.url)" 
                        :alt="content.homeHeaderImg.data.attributes.alternativeText"
                        preload
                        />
                </div>
                <div class="container home-hero__content-wrapper">
                    <div class="home-hero__title-wrapper">
                        <h1 class="text-visually-hidden">Avec la 3D dessinons ensemble l'architecture de demain</h1>
                        <div class="home-hero__title home-hero__title--1 title-h1">Avec la 3D</div>
                        <div class="home-hero__title home-hero__title--2 title-h1">dessinons ensemble</div>
                        <div class="home-hero__title home-hero__title--3 title-h1">l'architecture de demain</div>
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
                        <svg class="home-hero__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.4 17.2">
                            <polygon points="6.7 17.2 0 10.5 .7 9.8 6.2 15.3 6.2 0 7.2 0 7.2 15.3 12.7 9.8 13.4 10.5 6.7 17.2"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <section class="section home-presentation">
            <div class="container">
                <div class="home-presentation__content-wrapper">
                    <div class="home-presentation__title-wrapper">
                        <h2 class="home-presentation__title title-h3"> {{ content.homePresentation }}</h2>
                    </div>
                    <div class="home-presentation__button-wrapper">
                        <NuxtLink to="/contact">
                            <Button text="Contactez-nous"></Button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
       <HomeServices :services="content.services.data"></HomeServices>
       <HomeAdvantages 
            :label="content.advantageTitle"
            :advantages="content.avantages.data"
            ></HomeAdvantages>
    </div>
</template>

<script setup>
import SplitType from 'split-type';
    const { gsap } = useGsap();
    const { data: content }  = await useFetch('/api/accueil', {
        transform: (_content) => _content.data.data.attributes
    })

    useHead({
        title: content.value.metadata.metaTitle,
        meta: [
            { name: 'description', content: content.value.metadata.metaDescription }
        ]
    })

    useSeoMeta({
        description: content.value.metadata.metaDescription,
        ogTitle: content.value.metadata.metaTitle,
        ogDescription: content.value.metadata.metaDescription,
        ogImage: imgPath(content.value.metadata.metaImage.data.attributes.url),
        ogUrl: useRoute().fullPath,
        twitterTitle: content.value.metadata.metaTitle,
        twitterDescription: content.value.metadata.metaDescription,
        twitterImage: imgPath(content.value.metadata.metaImage.data.attributes.url),
        twitterCard: 'summary'
    })

    onMounted(() => {
        animatePageEnter()
        presentationEnter()
    });

    const animatePageEnter = () => {
        SplitType.create('.home-hero__title', {types: 'words', wordClass: "home-hero__title--word"});

        gsap.timeline({
            defaults: { ease: "power3.out" }
        })
        .from('.home-hero__title--word', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.05,
            duration: 1.1,
            delay: 0.4
        })
        .from('.home-hero__img', {
            scale: 1.2,
            duration: 1.6,
        }, '<')
        
    }
    const presentationEnter = () => {
        let triggerEl = '.home-presentation';
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
</script>

<style lang="scss" scoped>
.home {
    &-hero {
        &__wrapper {
            position: relative;
            width: 100%;
            height: 100vh;
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
        }
        &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
        }
        &__content-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            color: var(--brand-primary);
            padding-top: var(--r-space-lg);
            padding-bottom: var(--r-space-lg);
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
        &__content-wrapper {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            column-gap: var(--r-space-sm);
        }
        &__title-wrapper {
            grid-column: span 8;
        }
        &__button-wrapper {
            grid-column: 10/-1;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }
    }
    &-works {
        &__content-wrapper {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            column-gap: var(--r-space-sm);
        }
        &__title-wrapper {
            grid-column: span 7;
        }
        &__text-wrapper {
            grid-column: span 5;
        }
        &__grid {
            margin-top: var(--r-space-lg);
        }
        &__button-wrapper {
            margin-top: var(--r-space-md);
            display: flex;
            justify-content: center;
        }
    }
}
</style>