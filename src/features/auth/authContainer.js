import './auth.sass';
import authTemplate from './auth.hbs';

import login from './login/login';
import signIn from './sign-in/signIn';

const authContainer = (pageType) => {
  let component = login();
  if (pageType === 'signIn') {
    component = signIn();
  }

  return authTemplate({
    content: component,
  });
};

export default authContainer;
