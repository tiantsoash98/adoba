<template>
    <div class="banner-img__wrapper" ref="img">
        <nuxt-img
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
const { gsap, ScrollTrigger } = useGsap();
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

onMounted(() => {
    imgScrollAnimation()
})

const imgScrollAnimation = () => {
    let triggerEl = img.value;
    let targetEl = img.value.children[0];

    gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: triggerEl,
            //trigger element - viewport
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    })
    .to(targetEl, {
        y: '10vh',
        ease: "none"
    })
}

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
        height: 100vh;
        object-fit: cover;
    }
}
</style>