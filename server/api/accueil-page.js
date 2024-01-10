export default defineEventHandler(async (event) => {
    const runtimeConfig  = useRuntimeConfig()

    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/accueil-page`;
 
    const data = await $fetch(uri)

    return {
        data,
    }
  })
