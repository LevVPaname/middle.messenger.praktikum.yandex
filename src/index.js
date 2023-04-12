import errorContainer from 'features/errors';
import authContainer from 'features/auth';
import accountContainer from 'features/account';
import chatContainer from 'features/chat';

const router = () => {
  const root = document.getElementById('root');

  const render = (path) => {
    switch (path) {
      case '/':
        root.innerHTML = authContainer();
        break;
      case '/login-page':
        root.innerHTML = authContainer();
        break;
      case '/sign-in':
        root.innerHTML = authContainer('signIn');
        break;
      case '/account':
        root.innerHTML = accountContainer();
        break;
      case '/account/edit':
        root.innerHTML = accountContainer('/account/edit');
        break;
      case '/account/change-password':
        root.innerHTML = accountContainer('/account/change-password');
        break;
      case '/chat':
        root.innerHTML = chatContainer();
        break;
      case '/error404':
        root.innerHTML = errorContainer({errorNumber: '404', errorMessage:'Не туда попали'});
        break;
      case '/error500':
        root.innerHTML = errorContainer({errorNumber: '500', errorMessage:'Мы уже фиксим'});
        break;
      default:
        root.innerHTML = errorContainer({errorNumber: '404', errorMessage:'Не туда попали'});
    }
  };

  window.addEventListener('popstate', function () {
    render(window.location.pathname);
  });

  window.addEventListener('DOMContentLoaded', function () {
    render(window.location.pathname);
  });
};

router();
export default router;
