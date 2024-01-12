<template>
    <div class="page__cursor" data-cursor="-exclusion">
        <PageLoader :loaded="loaded"></PageLoader>
        <Header :isExclusionOnStart="headerExclusion"/>

        <!-- output the page content -->
        <main class="page__wrapper">
            <slot />
        </main>

        <Footer/>
    </div>
</template>

<script setup>
const loaded = ref(false)
const headerExclusion = useHeaderExclusion()

onMounted(() => {
    loaded.value = true
})
</script>

<!-- <style scoped>
    .router-link-exact-active {
        color: green;
    }
</style> -->