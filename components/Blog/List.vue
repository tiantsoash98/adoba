<template>
    <div>
        <section class="section section--no-padding-top blog-content pb-7 pb-sm-7">
            <div class="container">
                <div class="blog-content__title-wrapper">
                    <span class="blog-content__title title-h2">{{ title }}</span>
                </div>
                <div class="blog-content__main-wrapper row pt-7">
                    <BlogCard
                        v-for="article in dataList" 
                        :key="article.blogUrl"
                        :title="article.attributes.blogTitle"
                        :date="article.attributes.blogDate"
                        :url="article.attributes.blogUrl"
                        :img="article.attributes.blogImg"
                        :buttonLabel="buttonLabel"
                    >
                    </BlogCard>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        dataList: Array,
        buttonLabel: String
    })
</script>

<style lang="scss" scoped>

</style>