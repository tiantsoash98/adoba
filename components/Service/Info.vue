<template>
    <div>
        <section class="section service-info" ref="sectionEl">
            <div class="container">
                <div class="service-info__top-wrapper">
                    <div class="service-info__headline-wrapper">
                        <h2 class="text-visually-hidden">{{ content.serviceInfo.serviceInfoHeadline }}</h2>
                        <div class="service-info__headline title-h2" ref="textEl">{{ content.serviceInfo.serviceInfoHeadline }}</div>
                    </div>
                    <div class="service-info__icon-wrapper">
                        <IconAsterisk :icon-class="iconFullClass"></IconAsterisk>
                    </div>
                    <div class="service-info__border-bottom"></div>
                </div>
                <div class="row service-info__content-wrapper mt-9">
                    <div class="service-info__description-wrapper col-12 col-md-6 mb-7 mb-md-0">
                        <h3 class="text-visually-hidden">{{ content.serviceInfo.serviceInfoDescription }}</h3>
                        <div class="service-info__description title-h5">{{ content.serviceInfo.serviceInfoDescription }}</div>
                    </div>
                    <div class="service-info__text-wrapper col-12 col-md-6">
                        <p class="service-info__tex pl-0 pl-sm-7 pl-md-9">{{ content.serviceInfo.serviceInfoText }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const sectionEl = ref(null)
const textEl = ref(null)
const isScrollingDown = ref(false)
const currentScrollPosition = ref(0)
const { gsap, ScrollTrigger } = useGsap()
import SplitType from 'split-type';
const props = defineProps({
    content: Object
})

onMounted(() => {
    animateOnEnter()
    pageScroll(sectionEl, textEl)
    window.addEventListener("scroll", onScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll)
})

function onScroll(){
    isScrollingDown.value = (currentScrollPosition.value < window.scrollY);
    currentScrollPosition.value = window.scrollY;
}

const animateOnEnter = () => {
    let triggerEl = '.service-info';
    let targetEl = '.hero-img';

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

const pageScroll = (triggerEl, textReveal) => {
    SplitType.create(textReveal.value, 
    {
        types: 'lines', 
        lineClass: 'text-reveal--line-wrapper'
    })

    document.querySelectorAll('.text-reveal--line-wrapper')
        .forEach(function(line){
            var wrapperDiv = document.createElement('div');
            wrapperDiv.classList.add('text-reveal--line')
            wrapperDiv.innerHTML = line.innerHTML
            line.innerHTML = ""
            line.appendChild(wrapperDiv)
        })

    gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
        scrollTrigger: {
            trigger: triggerEl.value,
            //trigger element - viewport
            start: "top 80%",
            end: "top center"
        }
    })
    .from('.text-reveal--line', 
    {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
        delay: 0.4
    })
    .from('.service-info__border-bottom', {
        scaleX: 0,
        duration: 1.5
    }, '<+0.1s')
}

const iconFullClass = computed(() => `service-info__icon ${isScrollingDown.value == true ? 'spin-clockwise' : ''}`)
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
        transform-origin: left;
        background-color: var(--brand-secondary);
    }
    &__text-wrapper {
        margin-top: auto;
    }
    &__icon {
        transition: transform 0.5s linear;
        animation: spin-counter-clockwise 4s linear infinite;
    }

    @keyframes spin-clockwise {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes spin-counter-clockwise {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
}
.spin-clockwise {
    animation: spin-clockwise 4s linear infinite;
}

@media screen and (max-width: 991px){
    .service-info {
        &__headline-wrapper {
            max-width: 40ch;
        }
    }
}
</style>