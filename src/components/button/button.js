import './button.sass';
import buttonTmp from './button.hbs';
import iconTmp from './icon.hbs';

const button = ({ className, text, icon, iconClassName = 'button__icon', type }) => {
  let context = { className, text, type };
  if (icon) {
    context = {
      ...context,
      icon: iconTmp({ icon, iconClassName })
    };
  }
  return buttonTmp(context);
};

export default button;
