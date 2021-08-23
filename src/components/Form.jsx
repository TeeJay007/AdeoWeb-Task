import PropTypes from 'prop-types';
import { mainForm, formField } from './Form.module.scss';
import Button from './Button';

const Form = () => {
  const FormField = ({ type, label, name, id }) => (
    <div className={formField}>
      {label && <label htmlFor={id}>{label}</label>}
      {type === 'textarea' ? (
        <textarea id={id} name={name} />
      ) : (
        <input id={id} type={type} name={name} />
      )}
    </div>
  );

  FormField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
  };

  FormField.defaultProps = {
    type: 'text',
    label: null,
    name: null,
  };

  return (
    <form className={mainForm}>
      <FormField id="name" label="Name" name="name" />
      <FormField id="email" label="Email" type="email" name="email" />
      <FormField id="message" label="Message" type="textarea" name="message" />
      <Button type="submit">Learn More</Button>
    </form>
  );
};

export default Form;
