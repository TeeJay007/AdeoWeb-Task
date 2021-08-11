import {card} from './ImageCard.module.scss'

const ImageCard = ({title, img, children, className}) => {
    return (
        <div className={`${card} ${className}`}>
          <img src={img} alt="coffee mug" />
          <div>
            <h2>{title}</h2>
            <p>
                {children}
            </p>
          </div>
        </div>
    )
}

export default ImageCard