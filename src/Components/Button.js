import {button} from './Button.module.scss'

const Button = ({className = '', children, type}) => {
    return (
        <button type={type} className={`${className} ${button}`}>{children}</button>
    )
}

export default Button