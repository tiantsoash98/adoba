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
    const { data: content }  = await useFetch('/api/faq-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const headerExclusion = useHeaderExclusion()
    const textReveal = ref(null)
    
    onMounted(() => {
        headerExclusion.value = false
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