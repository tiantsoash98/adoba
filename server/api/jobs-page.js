import qs from "qs"

export default defineEventHandler(async (event) => {
    const query = qs.stringify(
    {
        populate: {
            jobsBannerOne: {
                populate: {
                    serviceBannerMedia: {
                        fields: ["name", "alternativeText", "url", "mime"],
                    }  
                }
            },
            jobsContentList: {
                fields: ["accordionHeader", "accordionContent"],
            },
            jobsBannerTwo: {
                populate: {
                    serviceBannerMedia: {
                        fields: ["name", "alternativeText", "url", "mime"],
                    }  
                }
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
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/jobs-page?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
