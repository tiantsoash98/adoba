export default defineNuxtRouteMiddleware((to, from) => {
   
    // Reset footer newsletter
    const newsletterEmail = useFooterNewsletterEmail()
    const newsletterFeedback = useFooterNewsletterFeedback()
    const success = useFooterNewsletterSuccess()
    newsletterEmail.value = ''
    newsletterFeedback.value = ''
    success.value = false
})
  