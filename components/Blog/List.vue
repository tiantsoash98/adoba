<template>
    <div>
        <section class="section section--no-padding-top blog-content">
            <div class="container">
                <div class="blog-content__title-wrapper">
                    <span class="blog-content__title title-h2">{{ title }}</span>
                </div>
                <div class="blog-content__main-wrapper">

                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String
    })
</script>

<style lang="scss" scoped>

</style>