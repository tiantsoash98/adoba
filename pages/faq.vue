<template>
    <div>
        <section class="section section--margin-top-md faq-header">
            <div class="container">
                <div class="row faq-header__header-wrapper">
                    <div class="faq-header__title-wrapper">
                        <h1 class="faq-header__title title-h6">{{ content.faqTitle}}</h1>
                    </div>
                    <div class="faq-header__description-wrapper">
                        <p class="faq-header__description title-h6" ref="textReveal">{{ content.faqDescription }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section faq-content">
            <div class="container">
                <div class="faq-content__title-wrapper">
                    <span class="faq-content__title title-h2">{{ content.faqContentTitle }}</span>
                </div>
                <div class="faq-content__main-wrapper">
                    <AccordionList
                        :dataList="content.faqQuestions"
                    ></AccordionList>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const textReveal = ref(null)
    const { data: content }  = await useFetch('/api/faq-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const { animateTextReveal, beforeUnmountTextReveal } = useTextReveal()
    const headerExclusion = useHeaderExclusion()

    onMounted(() => {
        headerExclusion.value = false
        animateTextReveal(textReveal)
    })

    onBeforeUnmount(() => {
        beforeUnmountTextReveal(textReveal)
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
.faq {
    &-header {
        &__title-wrapper {
            grid-column: span 7;
        }
        &__description-wrapper {
            grid-column: span 5;
        }
    }
    &-content {
        &__main-wrapper {
            margin-top: var(--r-space-sm);
        }
    }
}
</style>