import { useReCaptcha } from 'vue-recaptcha-v3';

// https://dev.to/elquimeras/integrate-recaptcha-v3-on-nuxt3-app-1gma
export default () => {
    const recaptchaInstance = useReCaptcha();

    const getRecaptchaToken = async (action) => {
        // (optional) Wait until recaptcha has been loaded.
        await recaptchaInstance?.recaptchaLoaded();
    
        // get the token, a custom action could be added as argument to the method
        const token = await recaptchaInstance?.executeRecaptcha(action);
    
        return token;
        // Do stuff with the received token.
    }

    return { 
        getRecaptchaToken
    }
}