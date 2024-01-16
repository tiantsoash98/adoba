<template>
    <section class="section join-us">
        <div class="container">
            <div class="row">
                <div class="join-us__title-wrapper">
                    <h3 class="text-visually-hidden">{{ title }}</h3>
                    <div class="join-us____title title-h1">{{ title }}</div>
                </div>
                <div class="join-us__content-wrapper">
                    <h6 class="join-us__description">{{ description }}</h6>
                    <NuxtLink to="/contact">
                        <Button :text="buttonLabel"></Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
    buttonLabel: String
})
</script>

<style lang="scss" scoped>
.join-us {
    background-color: var(--color-neutral-10);

    &__title-wrapper {
        grid-column: span 5;
        padding-right: var(--r-space-md);
    }
    &__content-wrapper  {
        grid-column: 8/span 5;
        display: flex;
        flex-direction: column;
    }
    &__description {
        margin-bottom: var(--r-space-md);
    }
}
</style>