<template>
    <div 
        :class="{
            'realisations-modal': true, 
            'realisations-modal--open': isOpen,
            'realisations-modal--close': !isOpen,
        }">
        <div class="realisations-modal__backdrop" @click="closeMenu"></div>
        <div class="realisations-modal__wrapper">
            <div class="realisations-modal__top-wrapper">
                <div class="realisations-modal__icon-wrapper" @click="closeMenu">
                    <svg class="realisations-modal__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.7 24.7">
                        <polygon points="22.4 24.7 12.4 14.7 2.4 24.7 0 22.4 10 12.4 0 2.4 2.4 0 12.4 10 22.4 0 24.7 2.4 14.7 12.4 24.7 22.4 22.4 24.7"/>
                    </svg>
                </div>
            </div>
            <div class="realisations-modal__content-wrapper">
                <span class="realisations-modal__label callout-text">Filtres</span>
                <ul class="realisations-modal__options">
                    <li 
                        v-for="(filter) in filters" 
                        :key="filter.key"
                        :data-value="filter.key"
                        :class="{'realisations-modal__option title-h6': true, 'realisations-modal__option--selected': isSelected(filter.key)}"
                        @click="updateSelected({key: filter.key, text: filter.value})"
                    >
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
            })
            .to('.realisations-modal__backdrop', { 
                opacity: 0,      
            }, 0)
            .set('.realisations-modal__backdrop', { display: 'none', pointerEvents: 'none'})
            .set('.realisations-modal', { display: 'none'})
        }
    }
</script>

<style lang="scss" scoped>
.realisations-modal{
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
        padding: var(--r-space-sm);
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
        margin-bottom: var(--r-space-sm);
    }
    &__options {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    &__option {
        cursor: pointer;
        margin-bottom: var(--r-space-sm);
        transition: transform 0.6s var(--alias-default-ease) .1s,
                    color 0.6s var(--alias-default-ease);

        &:hover {
            transform: translateX(1rem);
        }

        &--selected {
            color: var(--color-neutral-50);
        }
    }
    &__icon-wrapper {
        padding: var(--r-space-xs);
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: var(--r-space-md);
        cursor: pointer;
    }
    &__icon{
        width: 100%;
        fill: currentColor;
    }
}
</style>