<template>
    <div>
        <section class="section" v-if="index == 1">
            <div class="container" >
                <BannerImg 
                    :placeholder="[50, 25, 75, 5]"
                    imgClass="service-banner__first" 
                    :src="imgPath(content.serviceBannerOne.serviceBannerMedia.data.attributes.url)" 
                    :alt="content.serviceBannerOne.serviceBannerMedia.data.attributes.alternativeText"
                    />
            </div>
        </section>
        <section class="section" v-if="index == 2">
            <BannerImg 
                :placeholder="[50, 25, 75, 5]"
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
    index : Number
})
</script>

<style lang="scss" scoped>

</style>