
import {heading, subHeading, stripe} from './Heading.module.scss'

const Heading = ({children, subtitle, className = ''}) => {
    return(
        <h1 className={`${heading} ${className}`}>
            {children}
            <span className={`${subHeading} ${subtitle ?? stripe}`}>{subtitle}</span>
        </h1>
    )
}

export default Heading