import { useReCaptcha } from 'vue-recaptcha-v3'

export const recaptcha = async (action: string) => {
    const useRecap = useReCaptcha();
  if(useRecap === undefined) {
    console.error('recaptcha not loaded');
    return false;
  }
    // Wait until recaptcha has been loaded.
    if (await useRecap?.recaptchaLoaded()) {
      console.log('recaptcha loaded');
  
      // Execute reCAPTCHA with action "login".
      try {
        const token = await useRecap?.executeRecaptcha(action);
        console.log('token', token);
        return token;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  
  };

