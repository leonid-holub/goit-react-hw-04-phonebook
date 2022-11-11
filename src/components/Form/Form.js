import React from 'react';
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
};

const contactsOptions = {
  type: 'tel',
  name: 'number',
  title:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  required: '',
};

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  handleChangeNumber = e => {
    const { value } = e.target;
    this.setState({
      number: value,
    });
  };

  submitChange = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.submitChange}>
        <Label labelName="Name">
          <input
            className={css.input}
            onChange={this.handleChangeName}
            value={this.state.name}
            {...phonebookOptions}
          />
        </Label>
        <Label labelName="Number">
          <input
            className={css.input}
            onChange={this.handleChangeNumber}
            value={this.state.number}
            {...contactsOptions}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
        </Label>
        <Button type="submit" textContent="Add contact" />
      </form>
    );
  }
}

export default Form;
