<template>
    <div>
        <section class="section section--margin-top-md contact">
            <div class="container">
                <div class="row">
                    <div class="contact-options__wrapper col-6">
                        <div class="contact-options__item-wrapper">
                            <span class="contact-options__label title-h6">{{ content.contactConfig.configContactLabel }}</span>
                            <a :href="`mailto:${ content.contactConfig.configContactEmail }`" target="_blank">
                                <Button :text="content.contactConfig.configContactEmail" icon="arrow-up-right" class="contact-options__item contact-options__item--email button--tertiary title-h6"></Button>
                            </a>
                            <span class="contact-options__item contact-options__item--phone title-h6" v-if="content.contactConfig.configContactNumber != ''">{{ content.contactConfig.configContactNumber }}</span>
                        </div>
                        <div class="contact-options__item-wrapper" v-if="content.contactConfig.configLocationAdress != ''">
                            <span class="contact-options__label title-h6">{{ content.contactConfig.configLocationLabel }}</span>
                            <span class="contact-options__item contact-options__item--location title-h6">{{ content.contactConfig.configLocationAdress }}</span>
                        </div>
                    </div>
                    <div class="contact-content__wrapper col-6">
                        <div class="contact-content__title-wrapper">
                            <h1 class="text-visually-hidden">{{ content.contactTitle }}</h1>
                            <div class="contact-content__title title-h1" ref="textReveal">{{ content.contactTitle }}</div>
                        </div>
                        <div class="contact-content__description-wrapper">
                            <h2 class="contact-content__description title-h6">{{ content.contactDescription }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ContactQuestions
            :title="content.contactFAQ.contactFAQTitle"
            :description="content.contactFAQ.contactFAQDescription"
            :button-label="content.contactFAQ.contactFAQButtonLabel"
            :button-redirect="content.contactFAQ.contactFAQButtonSlug"
            :img="content.contactFAQ.contactFAQImg"
        ></ContactQuestions>
        <MoreInfo
            :title="content.contactJoinUs.infoTitle"
            :description="content.contactJoinUs.infoDescription"
            :button-label="content.contactJoinUs.infoButtonLabel"
            :button-redirect="content.contactJoinUs.infoButtonRedirect"
        ></MoreInfo>
    </div>
</template>

<script setup>
    const textReveal = ref(null)
    const { data: content }  = await useFetch('/api/contact-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const headerExclusion = useHeaderExclusion()
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = false
        initCursor()
    })

    onBeforeUnmount(() => {
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
.contact {
    &-options {
        &__wrapper {
            height: fit-content;
            position: sticky;
            top: var(--r-space-lg);
            display: flex;
            flex-direction: column;
            row-gap: var(--r-space-md);
        }
        &__item-wrapper {
            display: flex;
            flex-direction: column;
            row-gap: var(--r-space-xxs);
        }
        &__label {
            opacity: 0.5;
        }
        &__item {
            &--location {
                max-width: 20ch;
            }
        }
    }
    &-content {
        &__description-wrapper {
            margin-top: var(--r-space-sm);
        }
    }
}
</style>