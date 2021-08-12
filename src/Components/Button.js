import {button} from './Button.module.scss'

const Button = ({className = '', children, type, onClick = () => {}}) => {
    return (
        <button onClick={onClick} type={type} className={`${className} ${button}`}>{children}</button>
    )
}

export default Button