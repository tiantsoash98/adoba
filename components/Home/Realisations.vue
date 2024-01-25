<template>
    <section class="section works" data-header-state="default">
        <div class="container">
            <div class="row works__content-wrapper">
                <div class="works__title-wrapper col-12 col-sm-6 col-md-7">
                    <h2 class="works__title">{{ title }}</h2>
                </div>
                <div class="works__text-wrapper col-12 col-sm-6 col-md-5">
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
        <div class="container container--wide works__gallery-wrapper">
            <ImgGallery
                gallery="home-gallery"
                :images="realisations"
                :start-wide="true"
            ></ImgGallery>
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