<template>
    <div>
        <section class="section section--margin-top-md blog-header mt-11 mt-md-7">
            <div class="container">
                <div class="row blog-header__header-wrapper">
                    <div class="blog-header__title-wrapper col-3  col-sm-7">
                        <h1 class="blog-header__title title-h6">{{ content.blogTitle}}</h1>
                    </div>
                    <div class="blog-header__description-wrapper col-9 col-sm-5">
                        <h2 class="text-visually-hidden">{{ content.blogDescription }}</h2>
                        <div class="blog__title title-h1" ref="textReveal">{{ content.blogDescription }}</div>
                    </div>
                </div>
            </div>
        </section>
        <BlogFeaturedList 
            :dataList="featuredArticles"
            :buttonLabel="content.blogReadArticleButtonLabel"
        ></BlogFeaturedList>
        <BlogList
            v-if="allArticles.length"
            :dataList="allArticles"
            :title="content.allArticles"
            :buttonLabel="content.blogReadArticleButtonLabel"
        ></BlogList>
    </div>
</template>

<script setup>
    const textReveal = ref(null)
    const featuredArticles = ref([])
    const allArticles = ref([])
    
    const { data: content }  = await useFetch('/api/blog-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const { pending, data: articles }  = await useLazyFetch('/api/blog', {server: false})

    watch(articles, (newArticles) => {
        featuredArticles.value = newArticles.data.data.slice(0, 2)
        allArticles.value = newArticles.data.data.slice(2)
    })
    
    const { animateTextReveal, beforeUnmountTextReveal } = useTextReveal()
    const headerExclusion = useHeaderExclusion()
    const headerStartHidePosition = useHeaderStartHidePosition()
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = false
        headerStartHidePosition.value = 200
        initCursor()
        animateTextReveal(textReveal)
    })

    onBeforeUnmount(() => {
        beforeUnmountTextReveal(textReveal)
        destroyCursor()
    })    

    useContentMetadata().generateMetadata(content)
</script>

<style lang="scss" scoped>
.blog {
    &-content {
        &__spinner-wrapper {
            max-height: var(--r-space-lg);
        }
        &__spinner {
            height: 100%;
        }
    }
}
</style>