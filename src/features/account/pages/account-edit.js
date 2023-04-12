import accountEditPageTpl from './account-edit.hbs';
import ImageIcon from 'static/icons/Union.png';
import button from 'components/button';

const accountEdit = (props) => {
  return accountEditPageTpl({
    ...props,
    icon: ImageIcon,
    saveButton: button({className: 'button', text:'Сохранить'}),
  });
};


export default accountEdit;
