<template>
    <div class="banner-img__wrapper" ref="img">
        <nuxt-img
            format="webp"
            :placeholder="[50, 25, 75, 5]"
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
        default: "sm:100vw md:100vw lg:100vw 100vw"
    },
    imgClass: String,
    loading: {
        type: String,
        default: "lazy"
    },
})
const { imgScrollAnimation } = useImgScrollAnimation();

onMounted(() => {
    imgScrollAnimation(img)
})

const imgFullClass = computed(() => `banner-img__img ${props.imgClass}`)
</script>

<style lang="scss" scoped>
.banner-img {
    &__wrapper {
        width: 100%;
        height: 90vh;
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
</style>