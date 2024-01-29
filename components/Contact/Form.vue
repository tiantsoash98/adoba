
<template>
    <div>
        <form class="form" @submit.prevent="onSubmit">
            <FormInput 
                v-model="name" 
                :name="'name'" 
                :label="nameVal.formLabel" 
                :placeholder="nameVal.formPlaceholder"
                :type="nameVal.formType"
                :required="nameVal.formRequired"
            ></FormInput>
            <FormInput 
                v-model="firstName" 
                :name="'firstname'" 
                :label="firstNameVal.formLabel" 
                :placeholder="firstNameVal.formPlaceholder"
                :type="firstNameVal.formType"
                :required="firstNameVal.formRequired"
            ></FormInput>
            <FormInput 
                v-model="email" 
                :name="'email'" 
                :label="emailVal.formLabel" 
                :placeholder="emailVal.formPlaceholder"
                :type="emailVal.formType"
                :required="emailVal.formRequired"
            ></FormInput>
            <FormInput 
                v-model="message" 
                :name="'message'" 
                :label="messageVal.formLabel" 
                :placeholder="messageVal.formPlaceholder"
                :type="messageVal.formType"
                :required="messageVal.formRequired"
            ></FormInput>
            <ContactFormFeedback
                :formFeedback="formFeedback"
            >

            </ContactFormFeedback>
            <Button 
                :text="isLoading ? 'Envoi en cours' : formSubmitLabel" 
                :type="'submit'"
                :disabled="isLoading"
            ></Button>
        </form>
    </div>
</template>

<script setup>
const props = defineProps({
    formInputs: Array,
    formSubmitLabel: String,
    formSubmitAction: String,
})

const { getRecaptchaToken } = useRecaptchaInit()
const formFeedback = ref('')
const isLoading = ref(false)
const name = ref('')
const firstName = ref('')
const email = ref('')
const message = ref('')

const nameVal = computed(() => props.formInputs.find((input) => input.formName == 'name'))
const firstNameVal = computed(() => props.formInputs.find((input) => input.formName == 'firstname'))
const emailVal = computed(() => props.formInputs.find((input) => input.formName == 'email'))
const messageVal = computed(() => props.formInputs.find((input) => input.formName == 'message'))


const onSubmit = async(event) => {
    await getRecaptchaToken('contact')

    isLoading.value = true
    formFeedback.value = ''

    // Form validation
    // https://dev.to/michaelsynan/nuxt3-form-with-feedback-25b9
    if(!name.value.trim() 
        || !firstName.value.trim() 
        || !email.value.trim() 
        || !message.value.trim() ) {
            formFeedback.value = 'incomplete'
            isLoading.value = false
            return
    }

    if (email.value && !emailValidator(email.value)) {
        formFeedback.value = 'invalid'
        isLoading.value = false
        return
    }

    const { data } = await useFetch("/api/send-mail", {
        method: "POST",
        body: {
            "name": name,
            "firstname": firstName,
            "email": email,
            "message": message
        }
    })

    // Send mail success
    if(data.value.status == 200){
        formFeedback.value = 'success'
        isLoading.value = false
        name.val = ""
        firstname.val = ""
        email.val = ""
        message.val = ""
    }
    else { // Send mail error
        formFeedback.value = 'error'
        isLoading.value = false
    }
}
</script>

<style lang="scss" scoped>

</style>