<template>
    <div 
        :class="['page-transition', {'page-transition--is-transitioning': showPageTransition}]">
        <div class="page-transition__frame"></div>
    </div>
</template>

<script setup>
const { gsap } = useGsap()
const showPageTransition = usePageTransition()

watch(showPageTransition, (newVal) => {
    if(newVal == true){
        animateLoaderIn()
    }
    else {
        animateLoaderOut()
    }
});

function animateLoaderIn(){
    return gsap.timeline({
        defaults: {
            duration: 1,
            ease: "power2.inOut"
        },
    })
    .set('.page-transition', { display: 'block', opacity: 0, pointerEvents: 'all' })
    .to('.page-transition', { opacity: 1 })
}

function animateLoaderOut(){
    return gsap.timeline({
        defaults: {
            duration: 1,
            ease: "power2.inOut"
        },
    })
    .to('.page-transition', { opacity: 0 })
    .set('.page-transition', { display: 'none', pointerEvents: 'none' })
    
}
</script>

<style lang="scss" scoped>
.page-transition {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: calc(var(--z-index-loader) - 1);
    display: none;
    opacity: 0;
    pointer-events: none;
    
    &__frame {
        width: 100dvw;
        height: 100dvh;
        background-color: var(--brand-primary);
    }
}
</style>