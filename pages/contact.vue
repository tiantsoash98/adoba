<template>
    <div>
        <section class="section section--margin-top-md">
            <div class="container">
                <h1>Contact</h1>
            </div>
        </section>
    </div>
</template>

<script setup>
    const headerExclusion = useHeaderExclusion()

    onMounted(() => {
        headerExclusion.value = false
    })
</script>

<style lang="scss" scoped>

</style>