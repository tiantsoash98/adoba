import qs from "qs"

export default defineEventHandler(async (event) => {
    const query = qs.stringify(
    {
        populate: {
            socials: {
                fields: ["socialTitle", "socialLink", "socialIcon"]
            }
        }
    },
    {
        encodeValuesOnly: true, // prettify URL
    }
    );
 
    const runtimeConfig  = useRuntimeConfig()
    const uri = `${ runtimeConfig.public.cmsBaseUrl }/api/footer?${query}`;
    const data = await $fetch(uri)

    return {
        data,
    }
})
