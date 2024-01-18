<template>
    <div>
        <section :class="sectionClass" v-if="index == '1'">
            <div class="container container--wide" >
                <BannerImg 
                    imgClass="service-banner__first" 
                    :src="imgPath(content.serviceBannerOne.serviceBannerMedia.data.attributes.url)" 
                    :alt="content.serviceBannerOne.serviceBannerMedia.data.attributes.alternativeText"
                    />
            </div>
        </section>
        <section :class="sectionClass" v-if="index == '2'">
            <BannerImg 
                imgClass="service-banner__first" 
                :src="imgPath(content.serviceBannerTwo.serviceBannerMedia.data.attributes.url)" 
                :alt="content.serviceBannerTwo.serviceBannerMedia.data.attributes.alternativeText"
                />
        </section>
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object,
    index : String,
    paddingTop: {
        type: String,
        default: 'md'
    },
    paddingBottom: {
        type: String,
        default: 'md'
    }
})

const sectionClass = computed(() => `section section--padding-top-${props.paddingTop} section--padding-bottom-${props.paddingBottom}`)
</script>

<style lang="scss" scoped>

</style>