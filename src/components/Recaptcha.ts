

export const recaptcha = async (action: string) => {

  let token = '';
  let recaptcha_key = import.meta.env.VITE_RECAPTCHA_KEY;
  await new Promise<void>((resolve) => {
    grecaptcha.ready(() => {
      
      grecaptcha.execute(recaptcha_key, { action }).then((t) => {
        token = t;
        resolve();
      });
    });
  });

  return token;
}
