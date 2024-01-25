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
    const headerExclusion = useHeaderExclusion()
    const { initCursor, destroyCursor } = useCursor()

    onMounted(() => {
        headerExclusion.value = true
        initCursor()
    })

    onBeforeUnmount(() => {
        destroyCursor()
    })
    
    useContentMetadata().generateMetadata(content)
</script>

<style lang="scss" scoped>

</style>