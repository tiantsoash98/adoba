<template>
    <div>
        <section class="section section--margin-top-md faq-header">
            <div class="container">
                <div class="row faq-header__header-wrapper">
                    <div class="faq-header__title-wrapper">
                        <h1 class="faq-header__title title-h6">FAQ</h1>
                    </div>
                    <div class="faq-header__description-wrapper">
                        <p class="faq-header__description title-h6" ref="textReveal">Nous créons des solutions personnalisées avec un processus de travail axé sur l'innovation, la créativité et l'excellence. Nous nous engageons à offrir un service client exceptionnel. </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section faq-content">
            <div class="container">
                <div class="faq-content__title-wrapper">
                    <span class="faq-content__title title-h2">Question fréquentes</span>
                </div>
                <div class="faq-content__main-wrapper">
                    <AccordionList
                        :dataList="faqQuestions"
                    ></AccordionList>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const { data: content }  = await useFetch('/api/faq-page', {
        transform: (_content) => _content.data
    })
    const headerExclusion = useHeaderExclusion()
    const textReveal = ref(null)
    const faqQuestions = ref([])
    content.value.forEach(function(item){
        faqQuestions.value.push({header: item.faqQuestion, content: item.faqAnswer })
    })
    
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