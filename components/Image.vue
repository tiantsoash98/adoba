<template>
    <div>
        <nuxt-img
            ref="img"
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
const imgFullClass = computed(() => `img ${props.imgClass}`)
</script>

<style lang="scss" scoped>
.img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>