<template>
    <div>
        <PageLoader :loaded="loaded" ></PageLoader>
        <PageTransition></PageTransition>
        <HeaderMain :isExclusionOnStart="headerExclusion"/>

        <!-- output the page content -->
        <main class="page__wrapper">
            <slot />
        </main>

        <FooterMain/>
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