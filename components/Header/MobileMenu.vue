<template>
    <aside :class="{'mobile-menu': true, 'menu--open': isOpen }" aria-expanded="false">
        <div class="mobile-menu__frame"></div>
        <div class="mobile-menu__main-wrapper">
            <div class="container mobile-menu__content-wrapper pt-14">
                <ul class="mobile-menu__links-wrapper">
                    <li class="mobile-menu__link title-h4 mt-9" @click="toogleServicesAccordion">
                        <div class="mobile-menu__accordion-header-wrapper">
                            <div class="mobile-menu__label-wrapper">
                                <div class="mobile-menu__label">Services</div>
                            </div>
                            <div class="mobile-menu__icon-wrapper ml-7 ml-sm-5">
                                <IconPlus :icon-class="getIconClass(!isServicesOpen)"/>
                                <IconMinus :icon-class="getIconClass(isServicesOpen)"/>
                            </div>
                        </div>
                        <div class="mobile-menu__overflow-wrapper" ref="wrapperEl">
                            <div class="mobile-menu__accordion-content-wrapper  mt-7 pl-5">
                                <ul class="mobile-menu__links-wrapper content-element pb-5 pt-5">
                                    <li v-for="service in services" :key="service.title" class="mobile-menu__sub-link mb-7">
                                        <NuxtLink :to="`/${service.slug}`" @click="close">
                                            <div class="mobile-menu__link title-h4">
                                                <div class="mobile-menu__sub-label">{{ service.title }}</div>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>                
                        </div>
                        
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/studio" @click="close">
                            <div class="mobile-menu__label-wrapper">
                                <div class="mobile-menu__label">Studio</div>
                            </div>
                        </NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/realisations" @click="close">
                            <div class="mobile-menu__label-wrapper">
                                <div class="mobile-menu__label">Réalisations</div>
                            </div>
                        </NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/blog" @click="close">
                            <div class="mobile-menu__label-wrapper">
                                <div class="mobile-menu__label">Blog</div>
                            </div>
                        </NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/faq" @click="close">
                            <div class="mobile-menu__label-wrapper">
                                <div class="mobile-menu__label">FAQ</div>
                            </div>
                        </NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/jobs" @click="close">
                            <div class="mobile-menu__label-wrapper">
                                <div class="mobile-menu__label">Jobs</div>
                            </div>
                        </NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                </ul>
                <div class="mobile-menu__button-wrapper mt-9">
                    <NuxtLink to="/contact">
                        <Button text="Contactez-nous" class="mobile-menu__button mobile-menu__button--contact"></Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
    const { gsap } = useGsap()
    const isOpen = ref(false)
    const isServicesOpen = ref(false)
    const isServicesClickable = ref(true)
    const wrapperEl = ref(null)
    const contentEl = ref(null)
    const contentHeight = ref(0)
    const props = defineProps({
        services: Object,
        headerState: String
    })
    const emit = defineEmits([
        'animationOpenComplete', 
        'animationCloseComplete'
    ])

    watch(() => props.headerState, (newVal) => {
        if(newVal == "opening"){
            open()
        }
        else if(newVal == "closing") {
            close()
        }
    })

    onMounted(() => {
        updateServicesAccordionHeight()
    })

    const updateServicesAccordionHeight = () => {
        window.removeEventListener("resize", onWindowResizeEvent)
        contentEl.value = wrapperEl.value.querySelector('.content-element')

        if(contentEl.value){
            contentHeight.value = contentEl.value.offsetHeight
            window.addEventListener("resize", onWindowResizeEvent)
        }  
    }

    const onWindowResizeEvent = () => {
        contentHeight.value = contentEl.value.offsetHeight
    }

    const open = () => {
        return new Promise((resolve) => {
            gsap.timeline({
                onComplete: () => {
                    isOpen.value = true
                    emit('animationOpenComplete')
                    updateServicesAccordionHeight()
                    resolve()
                },
                defaults: {
                    duration: 1,
                    ease: "power2.inOut"
                },
            })
            .set('.mobile-menu', { display: 'block'})
            .set('.mobile-menu__content-wrapper', { opacity: 1 })
            .set('.mobile-menu__label', { yPercent: 100, opacity: 0 })
            .set('.mobile-menu__icon-wrapper', { opacity: 0 })
            .set('.mobile-menu__border', { scaleX: 0 })
            .set('.mobile-menu__button--contact', { opacity: 0 })
            .to('.header-mobile__toogle-label--menu', { yPercent: -100, duration: 0.8 }, 0)
            .to('.header-mobile__toogle-label--close', { yPercent: -100, duration: 0.8 }, 0)
            .to('.mobile-menu__frame', { scaleY: 1, duration: 0.8 }, 0)
            .to('.mobile-menu__label', { yPercent: 0, opacity: 1, stagger: 0.1 }, 0)
            .to('.mobile-menu__icon-wrapper', { opacity: 1 }, 0.6)
            .to('.mobile-menu__button--contact', { opacity: 1 }, 1)
            .to('.mobile-menu__border', { scaleX: 1, stagger: 0.1, duration: 1.3 }, 0)
        })
    }
    const close = () => {
        return new Promise((resolve) => {
            gsap.timeline({
                onComplete: () => {
                    isOpen.value = false
                    emit('animationCloseComplete')
                    resolve()
                },
                defaults: {
                    duration: 1,
                    ease: "power2.inOut"
                },
            })
            .to('.header-mobile__toogle-label--menu', { yPercent: 0, duration: 0.8 }, 0)
            .to('.header-mobile__toogle-label--close', { yPercent: 0, duration: 0.8 }, 0)
            .to('.mobile-menu__content-wrapper', { opacity: 0, duration: 0.8}, 0)
            .to('.mobile-menu__frame', { scaleY: 0 }, 0)
            .set('.mobile-menu', { display: 'none'})     
        })
    }

    const toogleServicesAccordion = () => {
        if(isServicesClickable.value == true) {
            if(isServicesOpen.value == false){
                openServices()
            }
            else {
                closeServices()
            }
        }
        
    }

    // Open services accordion
    const openServices = () => {
        isServicesClickable.value = false
        isServicesOpen.value = true

        gsap.timeline({
            defaults: {
                duration: 0.6,
                ease: "power2.inOut"
            },
            onComplete: () => {
                isServicesClickable.value = true
            }
        })
        .to(wrapperEl.value, { 
            height: contentHeight.value 
        })
        .from(contentEl.value, { 
            opacity: 0
        }, '<+0.2')
    }

    // close services accordion
    const closeServices = () => {
        isServicesClickable.value = false
        isServicesOpen.value = false


        gsap.timeline({
            defaults: {
                duration: 0.6,
                ease: "power2.inOut"
            },
            onComplete: () => {
                isServicesClickable.value = true
            }
        })
        .to(wrapperEl.value, { 
            height: 0 
        })
    }

    const getIconClass = (isActive) => {
        const baseClass = 'mobile-menu__icon';
        if(isActive) return `${baseClass} mobile-menu__icon--active`
        else return baseClass
    }
</script>

<style lang="scss" scoped>
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100vw;
    z-index: calc(var( --z-index-nav) - 1);
    display: none;

    &__frame {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100dvh;
        width: 100vw;
        background-color: var(--brand-primary);
        transform: scaleY(0);
        transform-origin: top;
    }
    &__content-wrapper {
        max-height: 100vh;
    }
    &__label-wrapper {
        overflow: hidden;
    }
    &__border {
        height: 1px;
        width: 100%;
        background-color:  var(--color-neutral-20);
        transform-origin: left;
    }
    &__button-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    &__accordion-header-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1.25rem;
    }
    &__icon {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        opacity: 0;
        transition: opacity .6s var(--alias-default-ease) .1s;
                    
        &--active {
            opacity: 1;
        }
    }
    &__overflow-wrapper {
        overflow: hidden;
        height: 0;
    }
    &__sub-link {
        opacity: 0.7;
    }
}
</style>