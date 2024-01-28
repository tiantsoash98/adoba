<template>
    <div>
        <div class="container container--wide">
            <BannerImg 
                v-for="(image, index) in content.serviceGallery.serviceImgGallery.data" 
                :key="index"
                class="service-gallery__img"
                imgClass="service-gallery__img-item mb-5" 
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

const getImgClass = (index) => {
    const baseClass = "service-gallery__img"
    if(index % 3 == 0) return `${baseClass} service-gallery__img--wide`
    return baseClass
}
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