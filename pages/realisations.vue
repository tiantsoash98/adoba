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
                    <div class="title-h6">{{ selectedFilter ? selectedFilter : "Toutes les réalisations" }}</div>
                    <div class="realisations__icon-wrapper">
                        <svg class="realisations__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.4 17.2">
                            <polygon points="6.7 17.2 0 10.5 .7 9.8 6.2 15.3 6.2 0 7.2 0 7.2 15.3 12.7 9.8 13.4 10.5 6.7 17.2"/>
                        </svg>
                    </div>
                    <!-- <select v-model="selectedFilter">
                        <option value="" selected>Toutes les réalisations</option>
                        <option 
                            v-for="(filterOption) in content.services.data" 
                            :key="filterOption.attributes.serviceSlug"
                            :value="filterOption.attributes.serviceSlug">
                                {{ filterOption.attributes.serviceTitle }}
                        </option>
                    </select> -->
                    <div class="realisations__bottom-border"></div>
                </div>
                <div class="realisations__gallery-wrapper">
                    <ImgGallery
                        gallery="realisations-gallery"
                        :images="filteredImages"
                    ></ImgGallery>
                </div>
            </div>
        </section>
        <RealisationsFilterModal 
            :selected="selectedFilter"
            :filters="filters"
            @updateFilter="uptadeSelectedFilter"
            ></RealisationsFilterModal>
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
    const filters = content.value.services.data.reduce((res, item) => {
        res.push({ key: item.attributes.serviceSlug, value: item.attributes.serviceTitle });
        return res;
    }, []);
    filters.unshift({ key: "", value: "Tous" })

    const uptadeSelectedFilter = (key) => {
        selectedFilter.value = key
    }

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
    $root: &;
    &__content-wrapper {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        column-gap: var(--r-space-sm);
    }
    &__header-wrapper {
        grid-column: span 7;
    }
    &__filter-wrapper {
        cursor: pointer;
        margin-top: var(--r-space-lg);
        padding-bottom: var(--r-space-xs);
        display: flex;
        justify-content: space-between;
        overflow: hidden;

        &:hover {
            #{$root}__bottom-border  {
                transform: translateX(115%);
            }
            #{$root}__icon-wrapper  {
                transform: translateY(30%);
            }
        }
    }
    &__bottom-border {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--color-neutral-50);
        transform-origin: left;
        transition: transform 1.3s var(--alias-default-ease) .1s;

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--color-neutral-50);
            transition: transform 1.3s var(--alias-default-ease) .1s;
            transform: translateX(-115%);
        }
    }
    &__gallery-wrapper {
        padding-top: var(--r-space-md);
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-xs);
        margin-left: var(--r-space-xs);
        transition: transform 1s var(--alias-default-ease) .1s; 
    }
    &__icon{
        width: 100%;
        fill: currentColor;
        animation: bounce 2s linear infinite 2s;
    }
}
</style>