import qs from "qs"

export default defineEventHandler(async (event) => {
    const pageQuery = getQuery(event)

    const query = qs.stringify(
    {
        fields: ["blogTitle", "createdAt", "blogUrl"],
        pagination: {
            pageSize: pageQuery.pageSize,
            page: 1
        },
        sort: ['createdAt:desc'],
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
 
    const runtimeConfig  = useRuntimeConfig()
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/blogs?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
  })
