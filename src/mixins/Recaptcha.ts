import { useReCaptcha } from 'vue-recaptcha-v3'

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha() ?? {};


export const recaptcha = async (action: string) => {
    // (optional) Wait until recaptcha has been loaded.
    if (recaptchaLoaded && executeRecaptcha) {
        await recaptchaLoaded()

        // Execute reCAPTCHA with action "login".
        try {
            const token = await executeRecaptcha(action)
            return token;
        } catch (error) {
            console.error(error)
            return false;
        }

    }
    return false;

}