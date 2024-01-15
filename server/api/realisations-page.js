import qs from "qs"

export default defineEventHandler(async (event) => {
    const query = qs.stringify(
    {
        populate: {
            services: {
                fields: ["serviceSlug", "serviceTitle"]
            },
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
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/realisations-page?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
