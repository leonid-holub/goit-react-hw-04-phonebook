import { useState } from 'react';
import Label from './Label/Label';
import Button from './Button/Button';
import css from './Form.module.css';

const phonebookOptions = {
  type: 'text',
  name: 'name',
  pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  title:
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  required: '',
  autoComplete: 'off',
};

const contactsOptions = {
  type: 'tel',
  name: 'number',
  title:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  required: '',
  autoComplete: 'off',
};

export default function Form({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const submitChange = e => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitChange} autoComplete="off">
      <Label labelName="Name">
        <input
          className={css.input}
          onChange={handleChangeName}
          value={name}
          {...phonebookOptions}
        />
      </Label>
      <Label labelName="Number">
        <input
          className={css.input}
          onChange={handleChangeNumber}
          value={number}
          {...contactsOptions}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
      </Label>
      <Button type="submit" textContent="Add contact" />
    </form>
  );
}
