import qs from "qs"

export default defineEventHandler(async (event) => {
    const query = qs.stringify(
    {
        populate: {
            homeHeaderImg: {
                fields: ["name", "alternativeText", "url"],
            },
            services: {
                fields: ["serviceSlug", "serviceTitle", "serviceDescription"],
                populate: {
                    serviceImg: {
                        fields: ["name", "alternativeText", "url", "width", "height"],
                    }  
                }
            },
            realisations: {
                fields: ["realisationTitle", "realisationDescription"],
                populate: {
                    realisationImg: {
                        fields: ["name", "alternativeText", "url", "width", "height", "formats"],
                    }  
                }
            },
            avantages: {
                fields: ["avantageTitle", "avantageDescription", "avantageIcon"],
            },
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
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/accueil-page?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
