<template>
    <div>
        <section class="section section--margin-top-md article mt-11 mt-md-7">
            <div class="container">
                <div class="row">
                    <div class="article__options-wrapper col-12 col-sm-4 col-md-4">
                        <div class="article__back-wrapper">
                            <NuxtLink to="/blog">
                                <span class="title-h6">Revenir au blog</span>
                            </NuxtLink>
                        </div>

                        <div class="article__date-wrapper">
                            <span class="title-h6">Posté le </span>
                            <span class="article__date title-h6">{{ dateFormat(content.createdAt) }}</span>
                        </div>
                        <div class="article__share-wrapper">
                            <span class="title-h6">Partager l'article</span>
                            <ul class="article__share-options mt-5 mt-sm-3">
                                <li class="article__share article__share--facebook">
                                    <IconFacebook :icon-class="'article__social '" @click="facebookShare"/>
                                </li>
                                <li class="article__share article__share--linkedin ml-5 ml-sm-5 ml-md-3">
                                    <IconLinkedin :icon-class="'article__social'" @click="linkedinShare"/>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="article__content-wrapper col-12 col-sm-7 col-md-8 mt-9 mt-xs-7 mt-sm-0">
                        <div class="article__content rich-text" ref="blogContent" v-html="$mdRenderer.render(content.blogContent)"></div>
                        <div class="article__back-wrapper mt-9">
                            <NuxtLink to="/blog">
                                <span class="title-h6">Revenir au blog</span>
                            </NuxtLink>
                        </div>
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
    const config = useRuntimeConfig()
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
    const headerStartHidePosition = useHeaderStartHidePosition()
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = false
        headerStartHidePosition.value = 200
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

    const facebookShare = () => {
        window.open(`https://www.facebook.com/dialog/share?app_id=${ config.public.facebookAppId }&display=popup&href=${ currentUrl() }&redirect_uri=${ currentUrl() }`, "Facebook", "width=500,height=500");    
    }

    const linkedinShare = () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${ currentUrl() }`, "Linkedin", "width=500,height=500");
    }

    useContentMetadata().generateMetadata(content)
</script>

<style lang="scss" scoped>
.article {
    &__options-wrapper {
        height: fit-content;
        position: sticky;
        top: var(--r-space-lg);
        display: flex;
        flex-direction: column;
        gap: var(--r-space-sm);
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
    }
    &__share {
        width: 2rem;
    }
    &__social {
        cursor: pointer;
        width: 100%;
        fill: currentColor;
    }
    &__back-wrapper {
        transition: opacity 0.6s var(--alias-default-ease);
        
        &:hover {
            opacity: 0.7;
        }
    }
    &__content {
        display: flex;
        flex-direction: column;
        gap: var(--r-space-sm);
    }
}
@media screen and (max-width: 767px){
    
    .article {
        &__options-wrapper {
            position: relative;
            top: 0;
            gap: var(--r-space-sm-2);
        }
    }
}
@media screen and (max-width: 576px){
    
    .article {
        &__share {
            width: 1.75rem;
        }
    }
}
</style>