import './account.sass';
import accountTpl from './account.hbs';
import account from './pages/account-page';
import accountEdit from './pages/account-edit';
import accountEditPsss from './pages/account-edit-pass';
import button from 'components/button';
import ArrowIcon from 'static/icons/left1.svg';

const user = {
  email: 'post@gmail.com',
  first_name: 'Test',
  second_name: 'User',
  login: 'TestUser',
  password: 'password1',
  phone: '+7-999-999-99-99',
};

const accountContainer = (pageType) => {
  let content = account(user);
  if (pageType === '/account/edit') {
    content = accountEdit(user);
  }
  if (pageType === '/account/change-password') {
    content = accountEditPsss(user);
  }


  return accountTpl({
    iconButton: button({ icon: ArrowIcon ,className: 'button_iconOnly' }),
    content,
  });
};

export default accountContainer;
