<template>
    <div class="banner-img__wrapper" ref="img">
        <NuxtImg
            :class="imgFullClass" 
            :sizes="sizes"
            :src="src" 
            :alt="alt"
            :loading="loading"
        />
    </div>
</template>

<script setup>
const img = ref(null)
const props = defineProps({
    src: String,
    alt: String,
    sizes: {
        type: String,
        default: "100vw sm:100vw md:100vw lg:100vw"
    },
    imgClass: String,
    loading: {
        type: String,
        default: "lazy"
    },
    scrollAnimation: {
        type: Boolean,
        default: true
    }
})
const { imgScrollAnimation } = useImgScrollAnimation();

onMounted(() => {
    if(props.scrollAnimation){
        imgScrollAnimation(img)
    }
    
})

const imgFullClass = computed(() => `banner-img__img ${props.imgClass} `)
</script>

<style lang="scss" scoped>
.banner-img {
    &__wrapper {
        width: 100%;
        height: clamp(600px, 90vh, 1000px);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

@media screen and (max-width: 991px){
    .banner-img {
        &__wrapper {
            height: clamp(300px, 50vh, 500px);
        }
    }
}
</style>