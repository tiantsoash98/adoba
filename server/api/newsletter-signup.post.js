import mailchimp from "@mailchimp/mailchimp_marketing"

// https://www.npmjs.com/package/@mailchimp/mailchimp_marketing
// https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/
export default defineEventHandler(async(event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event);
    let response = ""

    mailchimp.setConfig({
        apiKey: config.mailChimpApiKey,
        server: config.mailChimpServerPrefix,
    });

    response = await mailchimp.lists.addListMember(config.mailChimpAudienceKey, {
        email_address: body.email,
        status: "subscribed",
    })

    return {
        response
    }
})
  