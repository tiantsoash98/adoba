<template>
    <lenis
      :options="lenisOptions"
    >
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </lenis>
</template>
  
<script setup>
    const lenisOptions = {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    }
</script>