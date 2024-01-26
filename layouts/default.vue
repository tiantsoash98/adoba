<template>
    <div>
        <PageLoader :loaded="loaded" ></PageLoader>
        <HeaderMain :isExclusionOnStart="headerExclusion"/>

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