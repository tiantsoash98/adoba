<template>
    <div class="footer__section col-12 col-xs-6 col-md-6 col-lg-3 mt-9 mt-lg-0">
        <div class="footer__section-title paragraph-text--medium mb-3 mb-sm-3">Newsletter</div>
        <span class="footer__newsletter-text">{{ text }}</span>
        <div class="footer__newsletter-form-wrapper mt-5 mt-md-0">
            <form class="form footer__newsletter-form" @submit.prevent="onSubmit">
                <FormInput 
                    v-model="newsletterEmail" 
                    :custom-class="'footer__newsletter-input'"
                    :name="'newsletter'"
                    :placeholder="'Adresse email'"
                    :type="'email'"
                    :required="false"
                ></FormInput>
                <Button
                    :text="''"
                    :type="'submit'"
                    class="button--tertiary"
                    :disabled="isLoading"
                ></Button>
            </form>
            <div class="footer__newsletter-validation mt-5" v-show="newsletterFeedback != ''">
                <div v-if="newsletterFeedback === 'error'" class="form-validation form-validation--neutral">
                    Une erreur s'est produite, veuillez réessayer.
                </div>
                <div v-if="newsletterFeedback === 'invalid'" class="form-validation form-validation--neutral">
                    Veuillez spécifier un email valide
                </div>
                <div v-else-if="newsletterFeedback === 'success'" class="form-validation form-validation--neutral">
                    Merci pour l'inscription !
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { getRecaptchaToken } = useRecaptchaInit()
    const props = defineProps({
        text: String,
    })

    const newsletterEmail = useFooterNewsletterEmail()
    const newsletterFeedback = useFooterNewsletterFeedback()
    const success = useFooterNewsletterSuccess()
    const isLoading = ref(false)

    const onSubmit = async(event) => {
        await getRecaptchaToken('newsletter')

        isLoading.value = true
        success.value = false
        newsletterFeedback.value = ''

        // Form validation
        // https://dev.to/michaelsynan/nuxt3-form-with-feedback-25b9
        if(!newsletter.value.trim()) {
            isLoading.value = false
            newsletterFeedback.value = 'error'
            success.value = false
            return
        }

        if (!emailValidator(newsletterEmail.value)) {
            isLoading.value = false
            newsletterFeedback.value = 'invalid'
            success.value = false
            return
        }
        
        // Subscribe to mailChimp
        const { data: response } = await useFetch("/api/newsletter-signup", {
            method: "POST",
            body: {
                "email": newsletterEmail.value,
            }
        })

        // Send mail success
        isLoading.value = false
        newsletterEmail.value = ""
        newsletterFeedback.value = 'success'
        success.value = true
    }
</script>

<style lang="scss" scoped>

</style>