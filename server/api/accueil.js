export default defineEventHandler(async (event) => {
    const { cmsBaseUrl } = useRuntimeConfig()

    const uri = `${cmsBaseUrl}/api/accueil-page`;
 
    const data = await $fetch(uri)

    return {
        data,
    }
  })
