<template>
    <div>
        <div class="container container--wide">
            <BannerImg 
                v-for="(image, index) in content.serviceGallery.serviceImgGallery.data" 
                :key="index"
                class="service-gallery__img mb-5"
                imgClass="service-gallery__img-item" 
                :src="imgPath(image.attributes.url)" 
                :alt="image.attributes.alternativeText"
                />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object
})
</script>

<style lang="scss" scoped>
.service-gallery {
    &__wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: var(--r-space-sm);
    }
    &__img-item {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>