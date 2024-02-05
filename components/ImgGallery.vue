<!-- https://photoswipe.com/vue-image-gallery/ -->
<template>
    <div :id="gallery" class="gallery">
        <a
            v-for="(image, index) in images"
            :key="index"
            :href="imgPath(image.attributes.realisationImg.data.attributes.url)"
            :data-pswp-width="image.attributes.realisationImg.data.attributes.width"
            :data-pswp-height="image.attributes.realisationImg.data.attributes.height"
            target="_blank"
            rel="noreferrer"
            data-cropped="true"
            :data-index="index"
            :class="getImgClass(index)"
            role="presentation"
        >
            <div class="gallery__img-wrapper">
                <NuxtImg
                    class="gallery__img-item"
                    :width="image.attributes.realisationImg.data.attributes.width"
                    :height="image.attributes.realisationImg.data.attributes.height"
                    :src="imgPath(image.attributes.realisationImg.data.attributes.url)"
                    :sizes="getImgSizes(index)" 
                    :alt="image.attributes.realisationTitle"
                    loading="lazy"
                />
            </div>
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
    images: Array,
    startWide: Boolean
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

const getImgClass = (index) => {
    const baseIndex = props.startWide ? index : index + 1
    const baseClass = "gallery__img"
    if(baseIndex % 3 == 0) return `${baseClass} gallery__img--wide` // Wide
    return baseClass
}

const getImgSizes = (index) => {
    const baseIndex = props.startWide ? index : index + 1
    if(baseIndex % 3 == 0) return '100vw sm:80vw md:80vw lg:1920px'  // Wide
    return '40vw sm:80vw md:45vw'
}

</script>

<style lang="scss" scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--r-space-sm);;

    &__img-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    &__img {
        min-height: 30vh;

        &--tall {
            grid-row: span 2;
        }
        &--wide {
            grid-column: span 2;
        }
    }
    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 
            opacity 1s var(--alias-default-ease),
            transform 1s var(--alias-default-ease);
        
        &:hover {
            transform: scale(1.05);
        }
    }
}
@media screen and (max-width: 767px){
    .gallery {
        &__img {
            min-height: 40vh;
            grid-column: span 2;
        }
    }
}
</style>