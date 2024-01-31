<template>
    <div>
        <ServiceHero :content="content"></ServiceHero>
        <ServiceInfo :content="content"></ServiceInfo>
        <ServiceBanner :content="content" index="1"></ServiceBanner>
        <ServicePerspectiveDetails :content="content"></ServicePerspectiveDetails>
        <ServiceBanner :content="content" index="2"></ServiceBanner>
        <ServiceCTA :content="content"></ServiceCTA>
        <ServiceOthers :content="content"></ServiceOthers>
    </div>
</template>

<script setup>
    const { data: content }  = await useFetch('/api/perspective-3d-page', {
        transform: (_content) => _content.data.data.attributes
    })
    const pageTransition = usePageTransition()
    const headerExclusion = useHeaderExclusion()
    const headerStartHidePosition = useHeaderStartHidePosition()
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = true
        headerStartHidePosition.value = window.innerHeight/2
        pageTransition.value = false
        initCursor()
    })

    onBeforeUnmount(() => {
        destroyCursor()
    })
    
    useContentMetadata().generateMetadata(content)
</script>

<style lang="scss" scoped>

</style>