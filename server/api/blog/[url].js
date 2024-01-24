import qs from "qs"

export default defineEventHandler(async (event) => {
    const { url } = event.context.params
    
    const query = qs.stringify(
    {
        filters: {
            blogUrl: {
                $eq: url,
            },
        },
        fields: ["blogTitle", "createdAt", "blogUrl", "blogContent"],
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
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/blogs?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
