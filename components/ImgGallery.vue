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
            :class="{
                'gallery__img': true,
                'gallery__img--tall': (image.attributes.realisationImg.data.attributes.height > image.attributes.realisationImg.data.attributes.width)
            }"
        >
            <div class="gallery__img-wrapper">
                <NuxtImg
                    class="gallery__img-item imgLoaded"
                    :src="imgPath(image.attributes.realisationImg.data.attributes.url)"
                    sizes="80vw sm:80vw md:80vw" 
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
const imgLoad = ref(null)


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
    if(imgLoad.value == null){
        imgLoad.value = useImgLoaded();
        imgLoad.value.init()
    }
    lightbox.init()
})

onUnmounted(() => {
    lightbox.destroy()
    
    if(imgLoad.value != null){
        imgLoad.value.destroy()
        imgLoad.value = null
    }
})


</script>

<style lang="scss" scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    grid-auto-flow: dense;
    gap: var(--r-space-sm);;

    &__img-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: var(--color-neutral-20);
    }
    &__img {
        &--tall {
            grid-row: span 2;
        }
        &:nth-child(5n-2) {
            grid-row: span 2;
        }
        &:nth-child(5n) {
            grid-column: span 2;
        }
    }
    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 1s cubic-bezier(.43,.195,.02,1);
        
        &:hover {
            transform: scale(1.05);
        }
    }
}
</style>