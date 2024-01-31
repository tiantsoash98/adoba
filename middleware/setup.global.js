export default defineNuxtRouteMiddleware((to, from) => {
    const transition = usePageTransition()

    if(to.fullPath != from.fullPath){
        transition.value = true
    } 

    // Reset footer newsletter
    const newsletterEmail = useFooterNewsletterEmail()
    const newsletterFeedback = useFooterNewsletterFeedback()
    const success = useFooterNewsletterSuccess()
    newsletterEmail.value = ''
    newsletterFeedback.value = ''
    success.value = false
})
  