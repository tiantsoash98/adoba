import qs from "qs"

export default defineEventHandler(async (event) => {
    const { url } = event.context.params
    const runtimeConfig  = useRuntimeConfig()
    
    const query = qs.stringify(
    {
        publicationState: runtimeConfig.public.strapiPublicationState,
        filters: {
            blogUrl: {
                $eq: url,
            },
        },
        fields: ["blogTitle", "blogUrl", "blogContent", "blogDate", "createdAt"],
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
    
    
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/blogs?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
