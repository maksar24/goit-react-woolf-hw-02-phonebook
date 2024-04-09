import { Component } from 'react';
import Wrapper from './Wrapper/Wrapper';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { SecondaryTitle, Title } from './App.styles';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = newContact => {
    const checkName = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkName) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  searchContact = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addNewContact} />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter onSearch={this.searchContact} />
        <ContactList
          data={contacts}
          searchName={filter}
          handleDelete={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
