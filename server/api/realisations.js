import qs from "qs"

export default defineEventHandler(async (event) => {
    const query = qs.stringify(
    {
        filters: {
            realisationIsVisible: {
                $eq: true,
            },
        },
        sort: ['realisationIndex:asc'],
        populate: {
            realisationImg: {
                fields: ["name", "alternativeText", "url", "width", "height", "formats"],
            },
            service: {
                fields: ["serviceSlug", "serviceTitle"]
            },
        }
    },
    {
        encodeValuesOnly: true, // prettify URL
    }
    );
 
    const runtimeConfig  = useRuntimeConfig()
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/realisations?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
  })
