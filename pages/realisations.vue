<template>
    <div>
        <h1>{{ content.realisationTitle }}</h1>
    </div>
</template>

<script setup>
    const { data: content }  = await useFetch('/api/realisations-page', {
        transform: (_content) => _content.data.data.attributes
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
        ogImage: imgPath(content.value.metadata.metaImage.data.attributes.url),
        ogUrl: useRoute().fullPath,
        twitterTitle: content.value.metadata.metaTitle,
        twitterDescription: content.value.metadata.metaDescription,
        twitterImage: imgPath(content.value.metadata.metaImage.data.attributes.url),
        twitterCard: 'summary'
    })
</script>

<style lang="scss" scoped>

</style>