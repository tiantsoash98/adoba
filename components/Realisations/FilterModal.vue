<template>
    <div 
        :class="{
            'realisations-modal': true, 
            'realisations-modal--open': isOpen,
            'realisations-modal--close': !isOpen,
        }">
        <div class="realisations-modal__backdrop" @click="closeMenu"></div>
        <div class="realisations-modal__wrapper pl-7 pr-7 pt-md-5 pb-md-5 pl-md-5 pr-md-5">
            <div class="realisations-modal__top-wrapper">
                <div class="realisations-modal__icon-wrapper pr-0 pr-md-3" @click="closeMenu">
                    <IconXClose icon-class="realisations-modal__icon realisations-modal__close-icon"></IconXClose>
                </div>
            </div>
            <div class="realisations-modal__content-wrapper">
                <span class="realisations-modal__label callout-text mb-7 mb-md-5">Filtres</span>
                <ul class="realisations-modal__options">
                    <li 
                        v-for="(filter) in filters" 
                        :key="filter.key"
                        :data-value="filter.key"
                        :class="{'realisations-modal__option title-h5 mb-7 mb-md-5': true, 'realisations-modal__option--selected': isSelected(filter.key)}"
                        @click="updateSelected({key: filter.key, text: filter.value})"
                    >
                        <div class="realisations-modal__active-icon-wrapper mr-5 mr-mb-3">
                            <IconArrowRight icon-class="realisations-modal__active-icon"></IconArrowRight>
                        </div>
                        {{ filter.value }}
                    </li>
                </ul>
            </div>
            <div class="realisations-modal__bottom-wrapper"></div>
        </div>
    </div>
</template>

<script setup>
    const { gsap } = useGsap();
    const isClickable = ref(true)
    const isOpen = ref(false)

    const props = defineProps({
        toogleState: String,
        selected: String,
        filters: Array,
    })
    const emit = defineEmits([
        'updateFilter', 
        'animationOpenComplete', 
        'animationCloseComplete'
    ])

    watch(() => props.toogleState, (newVal) => {
        if(newVal == "opening"){
            openMenu();
        }
    });

    const updateSelected = (selectedFilter) => {
        emit('updateFilter', selectedFilter)
        closeMenu()
    }
    const isSelected = (key) => {
        return key == props.selected
    }
    
    // Toogle animations
    const openMenu = () => {
        isClickable.value = false

        // start open animation
        gsap.timeline({
            onComplete: () => {
                isClickable.value = true
                isOpen.value = true
                emit('animationOpenComplete')
            },
            defaults: {
                duration: 0.8,
                ease: "power2.inOut"
            },
        })
        .set('.realisations-modal', { display: 'flex'})
        .set('.realisations-modal__backdrop', { display: 'flex', opacity: 0, pointerEvents: 'all'})
        .set('.realisations-modal__wrapper', { xPercent: -100 })
        .to('.realisations-modal__backdrop', { 
            opacity: 0.8,
            duration: 0.6,
        })
        .to('.realisations-modal__wrapper', { 
            xPercent: 0
        }, 0)
    }

    const closeMenu = () => {
        if(isClickable.value == true) {
            isClickable.value = false

            // start close animation
            gsap.timeline({
                onComplete: () => {
                    isClickable.value = true
                    isOpen.value = false
                    emit('animationCloseComplete')
                },
                defaults: {
                    duration: 0.8,
                    ease: "power2.inOut"
                },
            })
            .to('.realisations-modal__wrapper', { 
                xPercent: -100,
                duration: 0.6,
                delay: 0.2
            })
            .to('.realisations-modal__backdrop', { 
                opacity: 0,      
            }, '<')
            .set('.realisations-modal__backdrop', { display: 'none', pointerEvents: 'none'})
            .set('.realisations-modal', { display: 'none'})
        }
    }
</script>

<style lang="scss" scoped>
.realisations-modal{
    $root: &;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: calc(var(--z-index-nav) + 1);
    display: none;

    &__backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: var(--brand-secondary);
        opacity: 0.8;
    }
    &__wrapper {
        height: 100vh;
        width: fit-content;
        background-color: var(--background-color);
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
    }
    &__top-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: max(8vh, var(--r-space-sm));
    }
    &__content-wrapper {
        padding: 0 var(--r-space-md) max(8vh, var(--r-space-sm)) var(--r-space-md);
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    &__label {
        color: var(--color-neutral-50);
    }
    &__options {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    &__option {
        cursor: pointer;
        transition: transform 0.6s var(--alias-default-ease) .1s,
                    color 0.6s var(--alias-default-ease);
        display: flex;
        align-items: center;

        &:hover {
            transform: translateX(1rem);
        }

        &--selected {
            color: var(--color-neutral-50);

            #{$root}__active-icon {
                transform: translateX(0%);
            }
        }
    }
    &__active-icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        width: 1.25rem;
        overflow: hidden;
    }
    &__active-icon{
        width: 100%;
        fill: currentColor;
        transform: translateX(-100%);
        transition: transform 0.3s var(--alias-default-ease);
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 2.75rem;
        cursor: pointer;
    }
    &__close-icon {
        transition: transform 0.3s var(--alias-default-ease);

        &:hover {
            transform: rotate(90deg);
        }
    }
    &__icon{
        width: 100%;
        fill: currentColor;
    }
}
@media screen and (max-width: 1280px){
    .realisations-modal {
        &__icon-wrapper {
            width: 2rem;
        }
        &__active-icon-wrapper {
            width: 1rem;
        }
    }
}
@media screen and (max-width: 991px){
    .realisations-modal {
        &__icon-wrapper {
            width: 1.75rem;
        }
    }
}
@media screen and (max-width: 767px){
    .realisations-modal {
        &__icon-wrapper {
            width: 2rem;
        }
        &__top-wrapper {
            height: max(10vh, var(--r-space-sm));
        }
    }
}
</style>