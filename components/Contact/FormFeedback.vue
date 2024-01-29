<script setup>
const props = defineProps({
    formFeedback: String,
})
</script>

<template>
    <div
        v-if="formFeedback === 'error'"
        class="form-validation form-validation--error mb-5"
    >
        Votre message n'a pas pu être envoyé. Nous vous invitons à nous envoyer directement un mail à contact@adoba.design.
    </div>

    <div
        v-else-if="formFeedback === 'success'"
        class="form-validation form-validation--success mb-5"
    >
        Votre message a bien été envoyé, nous vous remercions.
    </div>

    <div
        v-else-if="formFeedback === 'incomplete'"
        class="form-validation form-validation--error mb-5"
    >
        Veuillez remplir tous les champs.
    </div>

    <div
        v-else-if="formFeedback === 'invalid'"
        class="form-validation form-validation--error mb-5"
    >
        Veuillez spécifier un email valide
    </div>
</template>

<style lang="scss" scoped>
.form-validation {
    
}
</style>
