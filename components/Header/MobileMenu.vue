<template>
    <aside :class="{'mobile-menu': true, 'menu--open': isOpen }" aria-expanded="false">
        <div class="mobile-menu__frame"></div>
        <div class="mobile-menu__main-wrapper">
            <div class="container menu__content-wrapper pt-14">
                <ul class="mobile-menu__links-wrapper">
                    
                    <li class="mobile-menu__link title-h4 mt-9" @click="toogleServicesAccordion">
                        <div class="mobile-menu__accordion-header-wrapper">
                            <div class="mobile-menu__sub-link-label">Services</div>
                            <div class="mobile-menu__icon-wrapper ml-7 ml-sm-5">
                                <IconPlus :icon-class="getIconClass(!isServicesOpen)"/>
                                <IconMinus :icon-class="getIconClass(isServicesOpen)"/>
                            </div>
                        </div>
                        <div class="mobile-menu__overflow-wrapper" ref="wrapperEl">
                            <div class="mobile-menu__accordion-content-wrapper  mt-7 pl-5">
                                <ul class="mobile-menu__links-wrapper content-element pb-5">
                                    <li v-for="service in services" :key="service.title" class="mobile-menu__sub-link mb-7">
                                        <NuxtLink :to="`/${service.slug}`" @click="close">
                                            <div class="mobile-menu__link title-h4">
                                                <div class="mobile-menu__label">{{ service.title }}</div>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>                
                        </div>
                        
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/studio" @click="close">Le studio</NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/realisations" @click="close">Réalisations</NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/blog" @click="close">Blog</NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/faq" @click="close">FAQ</NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                    <li class="mobile-menu__link title-h4 mt-7">
                        <NuxtLink to="/jobs" @click="close">Jobs</NuxtLink>
                        <div class="mobile-menu__border mt-7"></div>
                    </li>
                </ul>
                <div class="mobile-menu__button-wrapper mt-9">
                    <NuxtLink to="/contact">
                        <Button text="Contactez-nous"></Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
    const { gsap } = useGsap()
    const isOpen = ref(false)
    const isClickable = ref(true)
    const isServicesOpen = ref(false)
    const isServicesClickable = ref(true)
    const wrapperEl = ref(null)
    const contentEl = ref(null)
    const contentHeight = ref(0)
    const props = defineProps({
        services: Object,
        headerState: String
    })

    watch(() => props.headerState, (newVal) => {
        if(newVal == "opening"){
            open()
        }
        else if(newVal == "closing") {
            close()
        }
    })

    onMounted(() => {
        contentEl.value = wrapperEl.value.querySelector('.content-element')
        if(contentEl.value){
            contentHeight.value = contentEl.value.offsetHeight

            window.addEventListener("resize", function () {
                contentHeight.value = contentEl.value.offsetHeight
            })
        }    
    })

    const open = () => {

    }
    const close = () => {

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

    &__frame {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100dvh;
        width: 100vw;
        background-color: var(--brand-primary);
    }
    &__content-wrapper {
        max-height: 100vh;
    }
    &__border {
        height: 1px;
        width: 100%;
        background-color:  var(--color-neutral-20);
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