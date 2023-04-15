import accountEditPassTpl from './account-edit-pass.hbs';
import ImageIcon from 'static/icons/Union.png';
import button from 'components/button';

const accountEdit = (props) => {
  return accountEditPassTpl({
    ...props,
    icon: ImageIcon,
    saveButton: button({className: 'button', text:'Сохранить'}),
  });
};


export default accountEdit;
