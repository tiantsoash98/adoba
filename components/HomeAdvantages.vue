<template>
    <section class="section advantages">
            <div class="container">
                <div class="advantages__title-wrapper">
                    <h2 class="text-visually-hidden">Ce qui nous rend différent</h2>
                    <div class="advantages__title title-h1">Ce qui nous</div>
                    <div class="advantages__title title-h1">rend différent</div>
                </div>
                <transition-group 
                    appear
                    tag="ul"
                    class="advantages__list-wrapper"
                    @before-enter="beforeEnter"
                    @enter="enter"
                >
                    <li v-for="(advantage, index) in advantages" :key="advantage.title" :data-index="index">
                        <HomeAdvantage
                            :title="advantage.title"
                            :description="advantage.description"
                            :icon="advantage.icon"
                        ></HomeAdvantage>
                    </li>
                </transition-group>
            </div>
        </section>
</template>

<script setup>
const { gsap } = useGsap();

const props = defineProps({
    advantages: Array
})

const beforeEnter = (el) => {
    el.querySelector('.advantage__border').style.transform = 'scaleX(0)'
}

const enter = (el) => {
    let targetEl = el.querySelector('.advantage__border')

    gsap.to(targetEl, {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: el.dataset.index * 0.3
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
</style>