import qs from "qs"

export default defineEventHandler(async (event) => {
    const query = qs.stringify(
    {
        populate: {
            contactForm: {
                fields: ["formName", "formLabel", "formPlaceholder", "formType", "formRequired"],
            },
            contactConfig: {
                fields: ["configContactLabel", "configContactEmail", "configContactNumber", "configLocationLabel", "configLocationAdress", "configSubmitLabel", "configSubmitAction"],
            },
            contactFAQ: {
                fields: ["contactFAQTitle", "contactFAQDescription", "contactFAQButtonLabel", "contactFAQButtonSlug"],
                populate: {
                    contactFAQImg: {
                        fields: ["name", "alternativeText", "url"],
                    }
                }
            },
            contactJoinUs: {
                fields: ["infoTitle", "infoDescription", "infoButtonLabel", "infoButtonRedirect"],
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
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/contact-page?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
