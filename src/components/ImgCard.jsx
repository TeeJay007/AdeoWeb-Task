import PropTypes from 'prop-types';
import { card } from './ImgCard.module.scss';

const ImgCard = ({ title, img, alt, className }) => (
  <div className={`${card} ${className}`}>
    <h2>{title}</h2>
    <img src={img} alt={alt} />
  </div>
);

ImgCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

ImgCard.defaultProps = {
  title: '',
  alt: '',
  className: '',
};

export default ImgCard;
