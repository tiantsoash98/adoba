import qs from "qs"

export default defineEventHandler(async (event) => {
    const pageQuery = getQuery(event)
    const runtimeConfig  = useRuntimeConfig()

    const query = qs.stringify(
    {
        publicationState: runtimeConfig.public.strapiPublicationState,
        fields: ["blogTitle", "blogDate", "blogUrl"],
        pagination: {
            pageSize: pageQuery.pageSize,
            page: 1
        },
        sort: ['blogDate:desc'],
        populate: {
            blogImg: {
                fields: ["name", "alternativeText", "url", "mime"],
            },
        },
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
