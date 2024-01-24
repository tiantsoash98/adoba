import qs from "qs"

export default defineEventHandler(async (event) => {
    const query = qs.stringify(
    {
        populate: {
            serviceHero: {
                fields: ["serviceHeroLabel", "serviceHeroDescription", "serviceHeroTitle"],
                populate: {
                    serviceHeroImg: {
                        fields: ["name", "alternativeText", "url"],
                    }  
                }
            },
            serviceInfo: {
                fields: ["serviceInfoHeadline", "serviceInfoText", "serviceInfoDescription"],
            },
            serviceVideo: {
                populate: {
                    serviceVideoThumbnail: {
                        fields: ["name", "alternativeText", "url", "mime"],
                    }  
                }
            },
            serviceCTA: {
                fields: ["serviceCTAText", "serviceCTAButtonLabel"],
            },
            serviceOthers: {
                fields: ["serviceTitle", "serviceSlug"],
                populate: {
                    serviceImg: {
                        fields: ["name", "alternativeText", "url"],
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
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/film-architecture-3d-page?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
