import PropTypes from 'prop-types';
import { card } from './Card.module.scss';
import Heading from './Heading';

const Card = ({ title, subtitle, children, className }) => (
  <div className={`${card} ${className}`}>
    {title && <Heading subtitle={subtitle}>{title}</Heading>}
    {children}
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  title: null,
  subtitle: null,
  className: '',
  children: '',
};

export default Card;
