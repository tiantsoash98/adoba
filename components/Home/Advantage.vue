<template>
    <div class="advantage">
        <div class="advantage__border"></div>
        <div class="advantage__content-wrapper">
            <div class="advantage__icon-wrapper">
                <IconClientsFirst v-if="icon === 'icon-clients-first'" icon-class="advantage__icon advantage__icon--clients-first"/>
                <IconQuality v-else-if="icon === 'icon-quality'" icon-class="advantage__icon advantage__icon--quality"/>
                <IconSolution v-else-if="icon === 'icon-solution'" icon-class="advantage__icon advantage__icon--solution"/>
                <IconTime v-else-if="icon === 'icon-time'" icon-class="advantage__icon advantage__icon--time"/>
            </div>
            <div class="advantage__text-wrapper">
                <h6 class="advantage__title title-h5">{{ title }}</h6>
                <p class="advantage__description">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
    icon: String
})
</script>

<style scoped lang="scss">
    .advantage {
        --text-color: var(--color-neutral-50);

        &__border {
            width: 100%;
            height: 1px;
            background-color: var(--color-neutral-60);
            margin-bottom: var(--r-space-md);
            transform-origin: left;
        }
        &__content-wrapper {
            display: grid;
            grid-template-columns: var(--r-base-unit) 1fr;
            column-gap: var(--r-space-sm);
        }
        &__icon-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        &__icon {
            transform: translateY(50%);
            width: 100%;
            fill: currentColor;
        }
        &__text-wrapper {
            margin-left: var(--r-space-sm);
        }
        &__title {
            color: var(--color-neutral-10);
        }
        &__description {
            margin-top: var(--r-space-sm);
            color: var(--color-neutral-20);
        }
    }
</style>
