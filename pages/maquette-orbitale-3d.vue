<template>
    <div>
        <ServiceHero :content="content"></ServiceHero>
    </div>
</template>

<script setup>
    const { data: content }  = await useFetch('/api/maquette-orbitale-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const headerExclusion = useHeaderExclusion()

    onMounted(() => {
        headerExclusion.value = true
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

</style>