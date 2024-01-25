<template>
    <div>
        <ServiceHero :content="content"></ServiceHero>
        <ServiceInfo :content="content"></ServiceInfo>
        <ServiceVideo :content="content"></ServiceVideo>
        <ServiceCTA :content="content"></ServiceCTA>
        <ServiceOthers :content="content"></ServiceOthers>
    </div>
</template>

<script setup>
    const { data: content }  = await useFetch('/api/film-architecture-3d-page', {
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