<template>
    <div>
        <section class="section section--margin-top-md blog-header">
            <div class="container">
                <div class="row blog-header__header-wrapper">
                    <div class="blog-header__title-wrapper">
                        <h1 class="blog-header__title title-h6">{{ content.blogTitle}}</h1>
                    </div>
                    <div class="blog-header__description-wrapper">
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
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = false
        initCursor()
        animateTextReveal(textReveal)
    })

    onBeforeUnmount(() => {
        beforeUnmountTextReveal(textReveal)
        destroyCursor()
    })    

    useHead({
        title: content.value.metadata.metaTitle,
        meta: [
            { name: 'description', content: content.value.metadata.metaDescription }
        ]
    })

    useSeoMeta({
        description: content.value.metadata.metaDescription,
        ogTitle: content.value.metadata.metaTitle,
        ogDescription: content.value.metadata.metaDescription,
        ogImage: imgPath(content.value.metadata?.metaImage?.data.attributes?.url),
        ogUrl: useRoute().fullPath,
        twitterTitle: content.value.metadata.metaTitle,
        twitterDescription: content.value.metadata.metaDescription,
        twitterImage: imgPath(content.value.metadata.metaImage.data.attributes.url),
        twitterCard: 'summary'
    })
</script>

<style lang="scss" scoped>
.blog {
    &-header {
        &__title-wrapper {
            grid-column: span 7;
        }
        &__description-wrapper {
            grid-column: span 5;
        }
    }
    &-content {
        &__spinner-wrapper {
            max-height: var(--r-space-lg);
        }
        &__spinner {
            height: 100%;
        }
        &__main-wrapper {
            margin-top: var(--r-space-sm);
        }
    }
}
</style>