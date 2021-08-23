import PropTypes from 'prop-types';
import { button } from './Button.module.scss';

const Button = ({ className, children, onClick, type }) => (
  <button
    onClick={onClick}
    type={type ? 'submit' : 'button'}
    className={`${className} ${button}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  children: 'OK',
  type: null,
  onClick: () => {},
};

export default Button;
