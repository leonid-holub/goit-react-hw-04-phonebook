import Contact from './Contact/Contact';
import Label from 'components/Form/Label/Label';
import styles from '../Form/Label/Label.module.css';

const Contacts = ({ contactsArray, findContacts, deleteContact }) => {
  return (
    <>
      <Label labelName="Find contacts by name">
        <input
          className={styles.label}
          type="text"
          onChange={findContacts}
        ></input>
      </Label>
      <ul>
        {contactsArray.map(contact => (
          <Contact
            key={contact.id}
            contactName={contact.name}
            phoneNumber={contact.number}
            id={contact.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

export default Contacts;
