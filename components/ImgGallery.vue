<!-- https://photoswipe.com/vue-image-gallery/ -->
<template>
    <div :id="gallery" class="gallery">
        <a
            v-for="(image, key) in images"
            :key="key"
            :href="imgPath(image.attributes.realisationImg.data.attributes.url)"
            :data-pswp-width="image.attributes.realisationImg.data.attributes.width"
            :data-pswp-height="image.attributes.realisationImg.data.attributes.height"
            target="_blank"
            rel="noreferrer"
        >
            <NuxtImg 
                :src="imgPath(image.attributes.realisationImg.data.attributes.url)"
                sizes="80vw sm:80vw md:80vw" 
                :alt="image.attributes.realisationTitle"
                loading="lazy"
            />
      </a>
    </div>
</template>

<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';

const props = defineProps({
    gallery: String,
    filter: String,
    images: Array
})

const lightbox = new PhotoSwipeLightbox({
    gallery: '#' + props.gallery,
    children: 'a',
    arrowPrev: false,
    arrowNext: false,
    zoom: false,
    pswpModule: PhotoSwipe
});

onMounted(() => {
    lightbox.init()
})

onUnmounted(() => {
    lightbox.destroy()
})



</script>

<style lang="scss" scoped>

</style>