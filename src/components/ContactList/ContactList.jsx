import { List } from './ContactList.styled';
import { Contact } from '../Contact';
import { Component } from 'react';
export class ContactList extends Component {
  render() {
    const { filter, contacts, handleDeleteBtnClick } = this.props;
    return filter === '' ? (
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <Contact key={id} id={id} name={name} number={number} handleDeleteBtnClick={handleDeleteBtnClick}></Contact>
          );
        })}
      </List>
    ) : (
      <List>
        {[...contacts]
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ name, number, id }) => {
            return (
              <Contact
                key={id}
                id={id}
                name={name}
                number={number}
                handleDeleteBtnClick={handleDeleteBtnClick}
              ></Contact>
            );
          })}
      </List>
    );
  }
}
