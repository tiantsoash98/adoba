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
            v-if="allArticles.length > 0"
            :dataList="allArticles"
            :title="content.blogListTitle"
            :buttonLabel="content.blogReadArticleButtonLabel"
        ></BlogList>
        <div 
            v-if="allArticles.length >= 4"
            class="blog__button-wrapper mb-7"
        >
            <Button 
                text="Voir plus" 
                @click="fetchMoreArticles"
                v-show="showMoreArticlesButton"
            ></Button>
        </div>
    </div>
</template>

<script setup>
    const textReveal = ref(null)
    const featuredArticles = ref([])
    const allArticles = ref([])
    const blogPageSize = ref(4)
    const showMoreArticlesButton = ref(true)
    const firstDataFetch = ref(true)
    const blogFetchIncrement = ref(4)
    const blogFeaturedCount = ref(2)
    const currentPageSize = ref(0)
    
    const { data: content }  = await useFetch('/api/blog-page', {
        transform: (_content) => _content.data.data.attributes
    })

    blogPageSize.value = content.value.blogPageSize
    blogFetchIncrement.value = content.value.blogFetchIncrement
    blogFeaturedCount.value = content.value.blogFeaturedCount

    const { pending, data: articles }  = await useLazyFetch(`/api/blog`, {
        server: false,
        query: { 
            pageSize: blogPageSize,
        }
    })

    watch(articles, (newArticles) => {
        featuredArticles.value = newArticles.data.data.slice(0, blogFeaturedCount.value )
        allArticles.value = newArticles.data.data.slice(blogFeaturedCount.value )
        currentPageSize.value = blogPageSize.value - blogFetchIncrement.value
        
        if(firstDataFetch.value == false) {
            if(newArticles.data.data.length == currentPageSize.value){
                showMoreArticlesButton.value = false
            }
        }
        firstDataFetch.value = false
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

    const fetchMoreArticles = () => {
        blogPageSize.value += blogFetchIncrement.value
    }

    useContentMetadata().generateMetadata(content)
</script>

<style lang="scss" scoped>
.blog {
    &__button-wrapper {
        display: flex;
        justify-content: center;
    }
}
</style>