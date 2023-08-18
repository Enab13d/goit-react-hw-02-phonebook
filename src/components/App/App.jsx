import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const value = name.value;
    let id = nanoid();
    this.setState(prevState => {
      const isContain = prevState.contacts.some(
        contact => contact.name.toLowerCase() === value.toLowerCase()
      );
      if (isContain) {
        return alert(`${value} is already in contacts.`);
      }
      const updatedContacts = [
        ...prevState.contacts,
        { name: value, number: number.value, id },
      ];
      e.target.reset();
      return { contacts: updatedContacts };
    });
  };
  getFoundContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  handleFilterChange = e => this.setState({ filter: e.target.value });
  handleDeleteBtnClick = e => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts].filter(
          contact => contact.id !== e.target.id
        ),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const {
      handleSubmit,
      handleFilterChange,
      handleDeleteBtnClick,
      getFoundContacts,
    } = this;
    const filteredContacts = getFoundContacts();

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          handleFilterChange={handleFilterChange}
          filter={filter}
        ></Filter>
        <ContactList
          contacts={filteredContacts}
          handleDeleteBtnClick={handleDeleteBtnClick}
        ></ContactList>
      </Wrapper>
    );
  }
}
