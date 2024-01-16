<template>
    <div>
        <section class="section section--margin-top-md realisations">
            <div class="container">
                <div class="realisations__content-wrapper">
                    <div class="realisations__header-wrapper">
                        <h1 class="text-visually-hidden">{{ content.realisationTitle }}</h1>
                        <div class="realisations__title title-h1">{{ content.realisationTitle }}</div>
                    </div>
                </div>
                <div class="realisations__filter-wrapper" @click="openFilterModal">
                    <div class="title-h6">{{ selectedFilterValue ? selectedFilterValue : "Toutes les réalisations" }}</div>
                    <div class="realisations__icon-wrapper">
                        <svg class="realisations__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.4 17.2">
                            <polygon points="6.7 17.2 0 10.5 .7 9.8 6.2 15.3 6.2 0 7.2 0 7.2 15.3 12.7 9.8 13.4 10.5 6.7 17.2"/>
                        </svg>
                    </div>
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
            :toogleState="toogleFilterModalState"
            :selected="selectedFilterKey"
            :filters="filters"
            @updateFilter="uptadeSelectedFilter"
            @animation-open-complete="filterModalOpenAnimationComplete"
            @animation-close-complete="filterModalCloseAnimationComplete"
            ></RealisationsFilterModal>
    </div>
</template>

<script setup>
    import SplitType from 'split-type';
    const { gsap } = useGsap();
    const headerExclusion = useHeaderExclusion()
    const { data: content }  = await useFetch('/api/realisations-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const { data: works, pending }  = await useLazyFetch('/api/realisations', {
        transform: (_works) => _works.data.data
    })

    const toogleFilterModalState = ref("")
    const selectedFilterKey = ref("")
    const selectedFilterValue = ref("")
    const filters = content.value.services.data.reduce((res, item) => {
        res.push({ key: item.attributes.serviceSlug, value: item.attributes.serviceTitle });
        return res;
    }, []);
    filters.unshift({ key: "", value: "Toutes les réalisations" })

    const uptadeSelectedFilter = (selectedFilter) => {
        selectedFilterKey.value = selectedFilter.key
        selectedFilterValue.value = selectedFilter.text
    }

    const filteredImages = computed(() => {
        if(selectedFilterKey.value == ""){
            return works.value
        }
        else {
            return works.value.filter((work) => work.attributes.service.data.attributes.serviceSlug == selectedFilterKey.value)
        }
    })   
    
    const openFilterModal = () => {
        toogleFilterModalState.value = "opening"
    }

    const filterModalOpenAnimationComplete = () => {
        // Do something on open
    }

    const filterModalCloseAnimationComplete = () => {
        toogleFilterModalState.value = ""
    }

    onMounted(() => {
        headerExclusion.value = false
        animatePageEnter()
    })

    const animatePageEnter = () => {

        SplitType.create('.realisations__title', 
        {
            types: 'lines', 
            lineClass: 'realisations__title--line-wrapper'
        })

        document.querySelectorAll('.realisations__title--line-wrapper')
            .forEach(function(line){
                var wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add('realisations__title--line')
                wrapperDiv.innerHTML = line.innerHTML
                line.innerHTML = ""
                line.appendChild(wrapperDiv)
            })

        gsap.timeline({
            defaults: { duration: 1.1, ease: "power3.out" },
        })
        .from('.realisations__title--line', 
        {
            opacity: 0,
            yPercent: 100,
            stagger: 0.1,
            delay: 0.4
        })
    }

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

<style lang="scss">
.realisations {
    $root: &;
    &__content-wrapper {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        column-gap: var(--r-space-sm);
    }
    &__title {
        &--line-wrapper {
            overflow: hidden;
        }
    } 
    &__header-wrapper {
        grid-column: span 7;
    }
    &__filter-wrapper {
        cursor: pointer;
        margin-top: var(--r-space-md);
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
        transition: transform 1.3s var(--alias-default-ease);

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--color-neutral-50);
            transition: transform 1.3s var(--alias-default-ease);
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