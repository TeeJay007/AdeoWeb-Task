import {card} from './Card.module.scss'
import Heading from './Heading'

const Card = ({title, subtitle, children, className}) => {
    return (
        <div className={`${card} ${className}`}>
            <Heading subtitle={subtitle}>{title}</Heading>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card