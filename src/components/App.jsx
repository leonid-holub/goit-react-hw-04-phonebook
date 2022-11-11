import React from 'react';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacs';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    name.length !== 0 &&
      (this.state.contacts.find(info => info.name === contact.name)
        ? alert(contact.name + 'is already in contacts')
        : this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts],
          })));
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== id),
    });
  };

  handleFindContacts = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  render() {
    const normilizeFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );

    return (
      <>
        <Section title="Phonebook">
          <Form onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Contacts
            contactsArray={visibleContacts}
            findContacts={this.handleFindContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
