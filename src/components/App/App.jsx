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
        contact => contact.name === value
      );
      if (isContain) {
        return alert(`${value} is already in contacts.`);
      }
      const updatedContacts = [...prevState.contacts];
      updatedContacts.push({ name: value, number: number.value, id });
      return { contacts: updatedContacts };
    });
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
    const { contacts, filter } = this.state;
    const { handleSubmit, handleFilterChange, handleDeleteBtnClick } = this;
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit}></ContactForm>
        <h2>Contacts</h2>
        <Filter handleFilterChange={handleFilterChange}></Filter>
        <ContactList
          filter={filter}
          contacts={contacts}
          handleDeleteBtnClick={handleDeleteBtnClick}
        ></ContactList>
      </Wrapper>
    );
  }
}
