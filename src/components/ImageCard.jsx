import PropTypes from 'prop-types';
import { card } from './ImageCard.module.scss';

const ImageCard = ({ title, img, children, className, alt }) => (
  <div className={`${card} ${className}`}>
    <img src={img} alt={alt} />
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  </div>
);

ImageCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  alt: PropTypes.string,
};

ImageCard.defaultProps = {
  title: '',
  children: null,
  className: '',
  alt: '',
};

export default ImageCard;
