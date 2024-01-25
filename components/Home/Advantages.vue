<template>
    <section class="section advantages" data-cursor="-inverse" data-header-state="white">
            <div class="container">
                <div class="advantages__title-wrapper">
                    <h2 class="text-visually-hidden"> {{ label }}</h2>
                    <div class="advantages__title title-h1">Ce qui nous</div>
                    <div class="advantages__title title-h1">rend différent</div>
                </div>
                <ul class="advantages__list-wrapper" ref="triggerEl">
                    <li v-for="(advantage, index) in advantages" :key="advantage.attributes.avantageTitle" :data-index="index">
                        <HomeAdvantage
                            :title="advantage.attributes.avantageTitle"
                            :description="advantage.attributes.avantageDescription"
                            :icon="advantage.attributes.avantageIcon"
                        ></HomeAdvantage>
                    </li>
                </ul>
            </div>
        </section>
</template>

<script setup>
const triggerEl = ref(null)
const { gsap } = useGsap();

const props = defineProps({
    label: String,
    advantages: Array
})

onMounted(() => {
    pageScroll()
})

const pageScroll = () => {
    let items = gsap.utils.toArray('.advantage__border')
    let delay = 0

    let tL = gsap.timeline({
        defaults: { duration: 1.5 },
        scrollTrigger: {
            trigger: triggerEl.value,
            //trigger element - viewport
            start: "top 80%",
            end: "top top"
        }
    })
    items.forEach((item) => {
        tL.from(item, {
            scaleX: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: delay
        }, 0)
        delay += 0.3
    })

    
}
</script>

<style lang="scss" scoped>
.advantages {
    background-color: var(--color-neutral-80);
    color: var(--color-neutral-0);

    &__list-wrapper {
        margin-top: var(--r-space-md);
        padding-bottom: var(--r-space-md);
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: var(--r-space-md);
        row-gap: var(--r-space-md);
    }
}
@media screen and (max-width: 768px) {
.advantages {
    &__list-wrapper {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
}
</style>