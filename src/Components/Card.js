import {card} from './Card.module.scss'
import Heading from './Heading'

const Card = ({title, subtitle, children, className = ''}) => {
    return (
        <div className={`${card} ${className}`}>
            {title && <Heading subtitle={subtitle}>{title}</Heading>}
            {children}
        </div>
    )
}

export default Card