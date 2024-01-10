<template>
    <div>
        <section class="section section--margin-top-md realisations">
            <div class="container">
                <div class="realisations__content-wrapper">
                    <div class="realisations__header-wrapper">
                        <h1>{{ content.realisationTitle }}</h1>
                    </div>
                </div>
                <div class="realisations__filter-wrapper">
                    <select v-model="selectedFilter">
                        <option value="" selected>Toutes les réalisations</option>
                        <option 
                            v-for="(filterOption) in content.services.data" 
                            :key="filterOption.attributes.serviceSlug"
                            :value="filterOption.attributes.serviceSlug">
                                {{ filterOption.attributes.serviceTitle }}
                        </option>
                    </select>
                </div>
                <div class="realisations__gallery-wrapper">
                    <ImgGallery
                        gallery="realisations-gallery"
                        :images="filteredImages"
                    ></ImgGallery>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const headerExclusion = useHeaderExclusion()
    const { data: content }  = await useFetch('/api/realisations-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const { data: works }  = await useFetch('/api/realisations', {
        transform: (_works) => _works.data.data
    })
    const selectedFilter = ref("")
    const filteredImages = computed(() => {
        if(selectedFilter.value == ""){
            return works.value
        }
        else {
            return works.value.filter((work) => work.attributes.service.data.attributes.serviceSlug == selectedFilter.value)
        }
    })
    

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
        ogImage: imgPath(content.value.metadata.metaImage.data.attributes.url),
        ogUrl: useRoute().fullPath,
        twitterTitle: content.value.metadata.metaTitle,
        twitterDescription: content.value.metadata.metaDescription,
        twitterImage: imgPath(content.value.metadata.metaImage.data.attributes.url),
        twitterCard: 'summary'
    })
</script>

<style lang="scss" scoped>
.realisations {
    &__content-wrapper {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        column-gap: var(--r-space-sm);
    }
    &__header-wrapper {
        grid-column: span 7;
    }
    &__filter-wrapper {
        margin-top: var(--r-space-md);
    }
}
</style>