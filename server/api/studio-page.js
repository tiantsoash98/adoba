import qs from "qs"

export default defineEventHandler(async (event) => {
    const query = qs.stringify(
    {
        populate: {
            studioImgOne: {
                fields: ["name", "alternativeText", "url"],
            },
            studioImgTwo: {
                fields: ["name", "alternativeText", "url"],
            },
            joinUs: {
                fields: ["infoTitle", "infoDescription", "infoButtonLabel", "infoButtonRedirect"],
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
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/studio-page?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
