export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:finish', () => {
        const loaded = useSiteLoaded()
        loaded.value = true

        console.log('Site loaded', useSiteLoaded().value)
    })
})