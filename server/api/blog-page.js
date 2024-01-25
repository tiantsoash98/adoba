import qs from "qs"

export default defineEventHandler(async (event) => {
    const query = qs.stringify(
    {
        populate: {
            metadata: {
                fields: ["metaTitle", "metaDescription"],
                populate: {
                    metaImage: {
                        fields: ["name", "alternativeText", "url", "width", "height", "formats"],
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
