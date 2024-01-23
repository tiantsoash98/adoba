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
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = false
        initCursor()
    })

    onBeforeUnmount(() => {
        destroyCursor()
    })
</script>

<style lang="scss" scoped>

</style>