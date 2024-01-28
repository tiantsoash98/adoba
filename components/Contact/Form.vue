
<template>
    <div>
        <form class="form">
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
            <Button 
                :text="formSubmitLabel" 
                :type="'submit'"
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

const name = ref('')
const firstName = ref('')
const email = ref('')
const message = ref('')
const nameVal = computed(() => props.formInputs.find((input) => input.formName == 'name'))
const firstNameVal = computed(() => props.formInputs.find((input) => input.formName == 'firstname'))
const emailVal = computed(() => props.formInputs.find((input) => input.formName == 'email'))
const messageVal = computed(() => props.formInputs.find((input) => input.formName == 'message'))
</script>

<style lang="scss" scoped>

</style>