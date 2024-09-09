import { useScriptTag } from '@vueuse/core';


export const recaptcha = async (action: string) => {

  let scriptTag = 'https://www.google.com/recaptcha/api.js?render=6LfMbTMqAAAAAL8lPv_EaNXBdRdguWGFZ6TUFcpc';
  // console.log(recaptchaKey);
  useScriptTag(scriptTag);

  let token = '';
  await new Promise<void>((resolve) => {
    grecaptcha.ready(() => {
      
      grecaptcha.execute('6LfMbTMqAAAAAL8lPv_EaNXBdRdguWGFZ6TUFcpc', { action }).then((t) => {
        token = t;
        resolve();
      });
    });
  });

  return token;
}
