// https://dev.to/michaelsynan/nuxt3-form-with-feedback-25b9
export default function (email) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email.value)
}