import { useScriptTag } from '@vueuse/core';


export const recaptcha = async (action: string) => {
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;

  let scriptTag = 'https://www.google.com/recaptcha/api.js?render=' + recaptchaKey;
  // console.log(recaptchaKey);
  useScriptTag(scriptTag);

  let token = '';
  await new Promise<void>((resolve) => {
    grecaptcha.ready(() => {
      
      grecaptcha.execute(recaptchaKey, { action }).then((t) => {
        token = t;
        resolve();
      });
    });
  });

  return token;
}
