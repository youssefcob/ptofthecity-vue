

export const recaptcha = async (action: string) => {

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
