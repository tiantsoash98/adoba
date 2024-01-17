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
            serviceBannerOne: {
                populate: {
                    serviceBannerMedia: {
                        fields: ["name", "alternativeText", "url"],
                    }  
                }
            },
            serviceDetails: {
                fields: ["servicePerspectiveIntTitle", "servicePerspectiveIntText", "servicePerspectiveExtTitle", "servicePerspectiveExtText"],
                populate: {
                    servicePerspectiveIntImg: {
                        fields: ["name", "alternativeText", "url"],
                    },
                    servicePerspectiveExtImg: {
                        fields: ["name", "alternativeText", "url"],
                    }
                }
            },
            serviceBannerTwo: {
                populate: {
                    serviceBannerMedia: {
                        fields: ["name", "alternativeText", "url"],
                    }  
                }
            },
            serviceCTA: {
                fields: ["serviceCTAText", "serviceCTAButtonLabel"],
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
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/perspective-page?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
