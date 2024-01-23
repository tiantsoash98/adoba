<template>
    <div>
        <section class="section section--padding-top-sm featured-articles">
            <div class="container container--wide">
                <BlogFeaturedCard
                    v-for="(article, index) in dataList" 
                    :key="article.blogUrl"
                    :title="article.attributes.blogTitle"
                    :date="article.attributes.createdAt"
                    :url="article.attributes.blogUrl"
                    :img="article.attributes.blogImg"
                    :buttonLabel="buttonLabel"
                    :isInverted="isInverted(index)"
                >
                </BlogFeaturedCard>
            </div>
        </section>
        
    </div>
</template>

<script setup>
const props = defineProps({
    dataList: Array,
    buttonLabel: String
})

const isInverted = (index) => {
    if((index + 1) % 2 == 0) return true
    return false
}
</script>

<style lang="scss" scoped>

</style>