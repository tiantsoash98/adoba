<template>
    <div :class="customClass">
        <label :for="name" v-if="label != ''" >{{ fullLabel }}</label>
        <textarea 
            v-if="type == 'textarea'" 
            v-model="modelBind"
            :type="type" 
            :id="name" 
            :name="name" 
            :placeholder="placeholder"
            :required="required" 
            rows="3"
        ></textarea>
        <input 
            v-else 
            :type="type" 
            v-model="modelBind"
            :id="name" 
            :name="name"
            :placeholder="placeholder"
        />
    </div>
</template>

<script setup>
const props = defineProps({
    model: {
        type: String,
        default: "name"
    },
    name: {
        type: String,
        default: "name"
    },
    label: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "text"
    },
    required: {
        type: Boolean,
        default: false
    },
    customClass: {
        type: String,
        default: "form__fieldset"
    },
})
const modelBind = defineModel({ required: true })

const fullLabel = computed(() => `${ props.label } ${ props.required ? '*' : ''}`)
</script>

<style lang="scss" scoped>

</style>