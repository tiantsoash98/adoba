<template>
    <div>
        <section class="section section--margin-top-md studio">
            <div class="container">
                <div class="row studio-description__wrapper">
                    <h1 class="title-h6 studio-description__label">{{ content.studioLabel }}</h1>
                    <div class="studio-description__title-wrapper">
                        <h2 class="text-visually-hidden">{{ content.studioDescription }}</h2>
                        <div class="studio-description__title title-h4" ref="textReveal">{{ content.studioDescription }}</div>
                    </div>
                </div>
            </div>
        </section>
        <BannerImg
            :placeholder="[50, 25, 75, 5]"
            imgClass="studio__banner--first" 
            :src="imgPath(content.studioImgOne.data.attributes.url)" 
            :alt="content.studioImgOne.data.attributes.alternativeText"
            />
        <section class="section">
            <div class="container">
                <div class="row studio-solutions__wrapper">
                    <div class="studio-solutions__title-wrapper">
                        <h3 class="text-visually-hidden">{{ content.studioSolutionTitle }}</h3>
                        <div class="studio-solutions__title title-h2">{{ content.studioSolutionTitle }}</div>
                    </div>
                    <div class="studio-solutions__text-wrapper">
                        <p class="studio-solutions__text">{{ content.studioSolutionText }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--no-padding-top studio__banner-wrapper">
            <div class="container container--no-padding-right">
                <BannerImg
                    :placeholder="[50, 25, 75, 5]"
                    imgClass="studio__banner--second" 
                    :src="imgPath(content.studioImgTwo.data.attributes.url)" 
                    :alt="content.studioImgTwo.data.attributes.alternativeText"
                    />
            </div>
        </section>
        <MoreInfo
            :title="content.joinUs.infoTitle"
            :description="content.joinUs.infoDescription"
            :button-label="content.joinUs.infoButtonLabel"
            :button-redirect="content.joinUs.infoButtonRedirect"
        ></MoreInfo>
    </div>
    
</template>

<script setup>
    const textReveal = ref(null)
    const { data: content }  = await useFetch('/api/studio-page', {
        transform: (_content) => _content.data.data.attributes
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

    useContentMetadata().generateMetadata(content)
</script>

<style lang="scss">
.studio {
    &-description {
        &__wrapper {
            row-gap: var(--r-space-xs);
        }
        &__label {
            grid-column: 1/-1;
        }
        &__title-wrapper {
            grid-column: span 7;
        }
    }
    &-solutions {
        &__title-wrapper {
            grid-column: span 5;
            padding-right: var(--r-space-md);
        }
        &__text-wrapper  {
            grid-column: 8/span 5;
        }
    }
}
.text-reveal {
    &--line-wrapper {
        overflow: hidden;
    }
}
</style>