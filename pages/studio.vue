<template>
    <div>
        <section class="section section--margin-top-md mt-11 mt-md-7 studio">
            <div class="container">
                <div class="row studio-description__wrapper">
                    <h1 class="title-h6 studio-description__label col-12">{{ content.studioLabel }}</h1>
                    <div class="studio-description__title-wrapper col-12 col-sm-8 col-md-7 mt-5">
                        <h2 class="text-visually-hidden">{{ content.studioDescription }}</h2>
                        <div class="studio-description__title title-h4" ref="textReveal">{{ content.studioDescription }}</div>
                    </div>
                </div>
            </div>
        </section>
        <BannerImg
            imgClass="studio__banner--first" 
            :src="imgPath(content.studioImgOne.data.attributes.url)" 
            :alt="content.studioImgOne.data.attributes.alternativeText"
        />
        <section class="section">
            <div class="container">
                <div class="row studio-solutions__wrapper">
                    <div class="studio-solutions__title-wrapper col-12 col-sm-6 col-md-7 pr-13">
                        <h3 class="text-visually-hidden">{{ content.studioSolutionTitle }}</h3>
                        <div class="studio-solutions__title title-h2">{{ content.studioSolutionTitle }}</div>
                    </div>
                    <div class="studio-solutions__text-wrapper col-12 col-sm-6 col-md-5 mt-5 mt-md-0">
                        <p class="studio-solutions__text">{{ content.studioSolutionText }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--no-padding-top studio__banner-wrapper">
            <div class="container container--no-padding-right">
                <BannerImg
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
    const pageTransition = usePageTransition()
    const { animateTextReveal, beforeUnmountTextReveal } = useTextReveal()
    const headerExclusion = useHeaderExclusion()
    const headerStartHidePosition = useHeaderStartHidePosition()
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = false
        headerStartHidePosition.value = 200
        pageTransition.value = false
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
.studio {
    
}
</style>