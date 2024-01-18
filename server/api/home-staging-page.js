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
            serviceGallery: {
                populate: {
                    serviceImgGallery: {
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
            serviceOthers: {
                fields: ["serviceOthersLabel"],
                populate: {
                    serviceOthersList: {
                        fields: ["serviceTitle", "serviceSlug"],
                        populate: {
                            serviceImg: {
                                fields: ["name", "alternativeText", "url"],
                            }  
                        }
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
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/home-staging-page?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
