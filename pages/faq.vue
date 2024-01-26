<template>
    <div>
        <section class="section section--margin-top-md mt-11 mt-md-7 faq-header">
            <div class="container">
                <div class="row faq-header__header-wrapper">
                    <div class="faq-header__title-wrapper col-3 col-xs-2 col-md-7">
                        <h1 class="faq-header__title title-h6">{{ content.faqTitle}}</h1>
                    </div>
                    <div class="faq-header__description-wrapper col-9 col-xs-8 col-md-5">
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
                <div class="faq-content__main-wrapper mt-5">
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
.faq {

}
</style>