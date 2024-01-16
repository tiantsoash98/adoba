<template>
    <section class="section works" data-header-state="default">
        <div class="container">
            <div class="row works__content-wrapper">
                <div class="works__title-wrapper">
                    <h2 class="works__title">{{ title }}</h2>
                </div>
                <div class="works__text-wrapper">
                    <p>{{ description }}</p>
                </div>
            </div>
            <div class="works__gallery-wrapper">
                <ImgGallery
                    gallery="home-gallery"
                    :images="realisations"
                    :start-wide="true"
                ></ImgGallery>
            </div>
            <div class="works__button-wrapper">
                <NuxtLink to="/realisations">
                    <Button text="Voir toutes nos réalisations"></Button>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
    const props = defineProps({
        title: String,
        description: String,
        realisations: Array
    })
</script>

<style lang="scss" scoped>
.works {
    &__title-wrapper {
        grid-column: span 7;
    }
    &__text-wrapper {
        grid-column: span 5;
    }
    &__gallery-wrapper {
        padding-top: var(--r-space-lg);
    }
    &__button-wrapper {
        margin-top: var(--r-space-md);
        display: flex;
        justify-content: center;
    }
}
</style>