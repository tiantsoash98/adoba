<template>
    <section class="section works">
        <div class="container">
            <div class="row works__content-wrapper">
                <div class="works__title-wrapper col-12 col-sm-6 col-md-7">
                    <h2 class="works__title">{{ title }}</h2>
                </div>
                <div class="works__text-wrapper col-12 col-sm-6 col-md-5 mt-5 mt-sm-0">
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
        <div class="container container--wide works__gallery-wrapper mt-9 mt-sm-9">
            <ImgGallery
                gallery="home-gallery"
                :images="realisations"
                :start-wide="true"
            ></ImgGallery>
            <div class="works__button-wrapper mt-9 mt-sm-7">
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
    &__button-wrapper {
        display: flex;
        justify-content: center;
    }
}
</style>