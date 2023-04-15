import accountPageTpl from './account-page.hbs';
import ImageIcon from 'static/icons/Union.png';
import button from 'components/button';

const account = (props) => {
  return accountPageTpl({
    ...props,
    icon: ImageIcon,
    editInfoButton: button({className: 'button_primary_invisible', text:'Изменить данные'}),
    editPassButton: button({className: 'button_primary_invisible', text:'Изменить пароль'}),
    exitButton: button({className: 'button_error_invisible', text:'Выйти'}),
  });
};


export default account;
