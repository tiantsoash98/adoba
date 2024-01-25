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
        >
            <div class="gallery__img-wrapper">
                <NuxtImg
                    class="gallery__img-item"
                    format="webp"
                    :width="image.attributes.realisationImg.data.attributes.width"
                    :height="image.attributes.realisationImg.data.attributes.height"
                    :src="imgPath(image.attributes.realisationImg.data.attributes.url)"
                    sizes="sm:80vw md:80vw 50vw" 
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
    if(baseIndex % 3 == 0) return `${baseClass} gallery__img--wide`
    return baseClass
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
</style>