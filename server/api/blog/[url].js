import qs from "qs"

export default defineEventHandler(async (event) => {
    const { url } = event.context.params
    
    const query = qs.stringify(
    {
        populate: {
            metadata: {
                fields: ["metaTitle", "metaDescription"],
                populate: {
                    metaImage: {
                        fields: ["name", "alternativeText", "url"],
                    }
                }
            }
        }
    },
    {
        encodeValuesOnly: true, // prettify URL
    }
    );
 
    const runtimeConfig  = useRuntimeConfig()
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/blog-page?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
