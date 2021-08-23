import PropTypes from 'prop-types';
import { heading, subHeading, stripe } from './Heading.module.scss';

const Heading = ({ children, subtitle, className }) => (
  <h1 className={`${heading} ${className}`}>
    {children}
    <span className={`${subHeading} ${subtitle ?? stripe}`}>{subtitle}</span>
  </h1>
);

Heading.propTypes = {
  children: PropTypes.node,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  children: null,
  subtitle: null,
  className: '',
};

export default Heading;
