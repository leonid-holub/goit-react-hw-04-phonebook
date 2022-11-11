import Button from 'components/Form/Button/Button';
import css from './Contact.module.css';

const Contact = ({ contactName, phoneNumber, id, deleteContact }) => {
  return (
    <li className={css.contacts__item}>
      {contactName}: {phoneNumber}{' '}
      <Button
        type="button"
        textContent="Delete"
        onClick={() => deleteContact(id)}
      />
    </li>
  );
};

export default Contact;
