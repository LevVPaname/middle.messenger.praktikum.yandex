import './input.sass';
import inputTemplate from './input.hbs';

const inputContainer = ({id, label, name}) => {
  return inputTemplate({id, label, name});
};

export default inputContainer;
