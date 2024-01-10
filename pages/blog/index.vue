<template>
    <div>
        <section class="section section--margin-top-md">
            <div class="container">
                <h1>Blog</h1>
            </div>
        </section>
    </div>
</template>

<script setup>
    const headerExclusion = useHeaderExclusion()

    onMounted(() => {
        headerExclusion.value = true
    })
</script>

<style lang="scss" scoped>

</style>