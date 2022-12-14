import { resetPassword } from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('container-main-password');
  const template = `  
    <div class='box-password'>
      <div class='container-logo-password'>
        <img class='logo-img-password' src='./images/logo_02_blue_081E26.png'alt='logo do título' />
      </div>
      <section class='container-title-password'>
        <h1 class='title'>Insira o e-mail que você usa para acessar o aplicativo.</h1>
      </section>
      <section class='container-subtitle-password'>
        <h2 class='subtitle'>Vamos enviar um e-mail para você recuperar a senha da conta.</h2>
      </section>
      <form>
          <p class='text-email-password'>E-mail:</p>
          <input id='email-password'class='input-email-password' type='email' placeholder='Digite seu e-mail'>
          <button id='btn-enter-password' class='btn-enter-password' type='button'>Enviar</button>
          <button id='btn-back' class='btn-back-password' type='button'>Voltar</button>
      </form>
    </div>`;

  container.innerHTML = template;

  container.querySelector('#btn-enter-password').addEventListener('click', (e) => {
    e.preventDefault();
    const newPassword = container.querySelector('#email-password').value;
    resetPassword(newPassword)
      .then(() => {
        redirect('');
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
        window.alert('Verifique se esse é o e-mail cadastrado no aplicativo.');
      });
  });

  container.querySelector('#btn-back').addEventListener('click', (e) => {
    e.preventDefault();
    redirect('');
  });

  return container;
};
