import { mainForm, formField } from './Form.module.scss'
import Button from './Button'

const Form = () => {
    const FormField = ({ type = 'text', label, name }) => {
        return (
            <div className={formField}>
                {label && <label>{label}</label>}
                {type === 'textarea' ?
                    <textarea name={name}></textarea>
                    :
                    <input type={type} name={name} />
                }
            </div>
        )
    }


    return (
        <form className={mainForm}>
            <FormField label='Name' name='name' />
            <FormField label='Email' type='email' name='email' />
            <FormField label='Message' type='textarea' name='message' />
            <Button type="submit">Learn More</Button>
        </form>
    )
}

export default Form;