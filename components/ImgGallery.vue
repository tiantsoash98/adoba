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
            data-cropped="true"
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
    easing: 'cubic-bezier(.43,.195,.02,1)',
    showAnimationDuration: 1100,
    hideAnimationDuration: 1000,
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
.gallery {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 20px;

    &__img-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 1s cubic-bezier(.43,.195,.02,1);

        &:hover {
            transform: scale(1.1);
            transform: scale(1);
        }
    }
}
// .container {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
//   background: teal;
//   padding: 15px;
// }
// .container img {
//   width: 100%;
//   display: block;
//   -webkit-filter: grayscale(1);
//   filter: grayscale(1);
//   transition: all 100ms ease-out;
// }
</style>