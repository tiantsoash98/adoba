<template>
    <div>
        <lenis
        :options="lenisOptions"
        >
            <Head>
                <Title>404 Page non trouvée - Adoba</Title>
            </Head>
            <HeaderMain :isExclusionOnStart="false"/>
            <main class="page__wrapper">
                <div class="error-page mt-14 mb-14">
                    <div class="container">
                        <div class="row">
                            <div class="error-page__left-wrapper col-12 col-sm-6 col-md-7">
                                <span class="title-h6">404</span>
                                <h1 class="mt-3">La page demandée n'existe pas</h1>
                            </div>
                            <div class="error-page__right-wrapper col-12 col-sm-6 col-md-5">
                                <Button text="Revenir à l'accueil" @click="handleClearError"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>   
        </lenis>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/' })

    const lenisOptions = useLenis()  
    const headerExclusion = useHeaderExclusion()
    const headerStartHidePosition = useHeaderStartHidePosition()

    onMounted(() => {
        headerExclusion.value = false
        headerStartHidePosition.value = 200
    })
</script>

<style lang="scss" scoped>
.error-page {

    &__right-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }
}
</style>