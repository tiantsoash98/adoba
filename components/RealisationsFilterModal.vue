<template>
    <div class="realisations-modal">
        <div class="realisations-modal__overlay"></div>
        <div class="realisations-modal__wrapper">
            <div class="realisations-modal__top-wrapper">
                <div class="realisations-modal__icon-wrapper" @click="closeModal">
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
                        @click="updateSelected(filter.key)"
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
    const props = defineProps({
        selected: String,
        filters: Array,
    })
    const emit = defineEmits([
        'updateFilter', 
    ])
    const updateSelected = (key) => {
        emit('updateFilter', key)
    }

    const isSelected = (key) => {
        return key == props.selected
    }

    const closeModal = () => {
        
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

    &__overlay {
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
        margin-bottom: var(--r-space-md);
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
    }
    &__icon{
        width: 100%;
        fill: currentColor;
    }
}
</style>