import {card} from './ImgCard.module.scss'

const ImgCard = ({title, img, alt = '', className = ''}) => {
    return (
        <div className={`${card} ${className}`}>
            <h2>{title}</h2>
            <img src={img} alt={alt} />
        </div>
    )
}

export default ImgCard