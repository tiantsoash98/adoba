<template>
    <div>
        <section class="section section--margin-top-md article">
            <div class="container">
                <div class="row">
                    <div class="article__options-wrapper col-4">
                        <div class="article__date-wrapper">
                            <span class="title-h6">Posté le </span>
                            <span class="article__date title-h6">{{ dateFormat(content.createdAt) }}</span>
                        </div>
                        <div class="article__share-wrapper">
                            <span class="title-h6">Partager l'article</span>
                            <ul class="article__share-options">
                                <li class="article__share article__share--facebook">
                                    <a :href="`https://www.facebook.com/dialog/share?app_id=362226786555137&display=popup&href=${ currentUrl()}&redirect_uri=${ currentUrl()}`">
                                        <IconFacebook :icon-class="'article__social'"/>
                                    </a>
                                </li>
                                <li class="article__share article__share--linkedin">
                                    <a href="#">
                                        <IconLinkedin :icon-class="'article__social'"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="article__back-wrapper">
                            <NuxtLink to="/blog">
                                <span class="title-h6">Revenir au blog</span>
                            </NuxtLink>
                            
                        </div>
                    </div>
                    <div class="article__content-wrapper col-7">
                        <div class="article__content rich-text col-7" ref="blogContent" v-html="$mdRenderer.render(content.blogContent)"></div>
                    </div>
                </div>     
            </div>
        </section>
    </div>
</template>

<script setup>
    const blogContent = ref(null)
    const textReveal = ref(null)
    const { url } = useRoute().params
    const content = ref(null)
    const { data: article }  = await useFetch(`/api/blog/${ url }`, {
        transform: (_article) => _article.data.data
    })

    if(article.value.length == 0){
        throw createError({
            statusCode: 404,
            fatal: true
        })
    }
    content.value = article.value[0].attributes

    const { animateTextReveal, beforeUnmountTextReveal } = useTextReveal()
    const headerExclusion = useHeaderExclusion()
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = false
        initCursor()

        textReveal.value = blogContent.value.querySelector('h1')
        if(textReveal.value){
            animateTextReveal(textReveal)
        }
    })

    onBeforeUnmount(() => {
        if(textReveal.value){
            beforeUnmountTextReveal(textReveal)
        }
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
        ogImage: imgPath(content.value.metadata.metaImage.data.attributes.formats.thumbnail.url),
        ogUrl: currentUrl(),
        twitterTitle: content.value.metadata.metaTitle,
        twitterDescription: content.value.metadata.metaDescription,
        twitterImage: imgPath(content.value.metadata.metaImage.data.attributes.formats.thumbnail.url),
        twitterCard: 'summary'
    })
</script>

<style lang="scss" scoped>
.article {
    &__options-wrapper {
        height: fit-content;
        position: sticky;
        top: var(--r-space-lg);
        display: flex;
        flex-direction: column;
    }
    &__date-wrapper {
        display: flex;
        flex-direction: column;
    }
    &__date {
        opacity: 0.5;
    }
    &__share-wrapper {
        display: flex;
        flex-direction: column;
    }
    &__share-options {
        display: flex;
        flex-direction: row;
        margin-top: var(--r-space-xs);
    }
    &__social {
        width: 100%;
        fill: currentColor;
        max-width: var(--r-space-sm);
        margin-right: var(--r-space-xs-2);
    }
    &__back-wrapper {
        margin-top: var(--r-space-sm);
        transition: opacity 0.6s var(--alias-default-ease);
        
        &:hover {
            opacity: 0.7;
        }
    }
}
</style>