<template>
    <div>
        <div class="accordion-item__main-wrapper" @click="toogleItem">
            <div class="accordion-item__border"></div>
            <div class="accordion-item__header-wrapper">
                <p class="accordion-item__header title-h6">{{ header }}</p>
                <div class="accordion-item__icon-wrapper">
                    <IconMinus v-if="isActive" icon-class="accordion-item__icon accordion-item__icon accordion-item--open"/>
                    <IconPlus v-else icon-class="accordion-item__icon"/>
                </div>
            </div>
            <div class="accordion-item__overflow-wrapper">
                <div class="accordion-item__content-wrapper" v-if="isActive">
                    <p class="accordion-item__content">{{ content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    id: Number,
    header: String,
    content: String,
    isActive: Boolean
})

const emit = defineEmits([
    'toogleItem', 
])

const toogleItem = () => {
    emit('toogleItem', props.id)
}
</script>

<style lang="scss" scoped>
.accordion-item {
    &__main-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: var(--r-space-sm);
    }
    &__border {
        width: 100%;
        height: 1px;
        background-color: var(--color-neutral-30);
    }
    &__header-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: var(--r-space-sm);
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-xs-2);
        margin-top: auto;
    }
    &__icon {
        transition: transform .6s var(--alias-default-ease) .1s; 
    }
    &__content-wrapper {
        padding-top: var(--r-space-sm);
    }
}
</style>