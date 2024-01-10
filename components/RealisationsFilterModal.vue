<template>
    <div class="realisations-modal">
        <div class="realisations-modal__overlay"></div>
        <div class="realisations-modal__wrapper">
            <div class="realisations-modal__top-wrapper"></div>
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
        padding: 0 var(--r-space-lg);
        height: 100vh;
        width: fit-content;
        background-color: var(--background-color);
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: flex-start;
    }
    &__content-wrapper {
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

        &--selected {
            color: var(--color-neutral-50);
        }
    }
}
</style>