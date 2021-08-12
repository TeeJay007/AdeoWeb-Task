import {card} from './ImageCard.module.scss'

const ImageCard = ({title, img, children, className = '', alt}) => {
    return (
        <div className={`${card} ${className}`}>
          <img src={img} alt={alt} />
          <div>
            <h2>{title}</h2>
            <div>
                {children}
            </div>
          </div>
        </div>
    )
}

export default ImageCard