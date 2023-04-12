import './error.sass';
import errorTemplate from './error.hbs';

const errorContainer = ({errorNumber, errorMessage}) => {
  return errorTemplate({errorNumber, errorMessage});
};

export default errorContainer;
