<template>
    <div>
        <section class="section section--margin-top-md jobs" ref="hero">
            <div class="container">
                <div class="row jobs__content-wrapper">
                    <div class="col-7 jobs__header-wrapper">
                        <h1 class="text-visually-hidden">{{ content.jobsTitle }}</h1>
                        <div class="jobs__title title-h1 hero-title" >{{ content.jobsTitle }}</div>
                    </div>
                    <div class="col-7 jobs__description-wrapper">
                        <h2 class="jobs__description title-h5 hero-description" >{{ content.jobsDescription }}</h2>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--padding-top-sm">
            <div class="container container--wide">
                <BannerImg
                    imgClass="jobs-banner__first" 
                    :src="imgPath(content.jobsBannerOne.serviceBannerMedia.data.attributes.url)" 
                    :alt="content.jobsBannerOne.serviceBannerMedia.data.attributes.alternativeText"
                />
            </div>
        </section>
        <section class="section jobs-content" data-cursor="-inverse">
            <div class="container">
                <div class="jobs-content__title-wrapper">
                    <span class="jobs-content__title title-h2">{{ content.jobsContentTitle }}</span>
                </div>
                <div class="jobs-content__main-wrapper">
                    <AccordionList
                        :dataList="content.jobsContentList"
                        :content-class="'col-7 offset-5'"
                        theme="dark"
                    ></AccordionList>
                </div>
            </div>
            <MoreInfo
                theme="dark"
                :title="content.jobsMoreTitle"
                :description="content.jobsMoreDescription"
                :button-label="content.jobsMoreLink"
                :button-redirect="content.jobsMoreLink"
                :button-redirect-type="'mail'"
            ></MoreInfo>
        </section>
        <section class="section section--no-padding-top">
            <BannerImg 
                imgClass="jobs-banner__second" 
                :src="imgPath(content.jobsBannerTwo.serviceBannerMedia.data.attributes.url)" 
                :alt="content.jobsBannerTwo.serviceBannerMedia.data.attributes.alternativeText"
            />
        </section>
    </div>
</template>

<script setup>
    const hero = ref(null)
    const { data: content }  = await useFetch('/api/jobs-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const { animateHero, beforeUnmountHero } = useSectionAnimation()
    const headerExclusion = useHeaderExclusion()
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = false
        initCursor()
        animateHero(hero)
    })
    onBeforeUnmount(() => {
        beforeUnmountHero(hero)
        destroyCursor()
    }) 

    useContentMetadata().generateMetadata(content)
</script>

<style lang="scss" scoped>
.jobs {
    &__title {
        overflow: hidden;
    }
    &__description-wrapper {
        margin-top: var(--r-space-md);
    }
    &-content {
        color: var(--brand-primary);
        background-color: var(--brand-secondary);

        &__main-wrapper {
            margin-top: var(--r-space-sm);
        }
    }
}
</style>