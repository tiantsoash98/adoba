export default defineEventHandler(async (event) => {
    const runtimeConfig  = useRuntimeConfig()

    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/footer`;
 
    const data = await $fetch(uri)

    return {
        data,
    }
  })
