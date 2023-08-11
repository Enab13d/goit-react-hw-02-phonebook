import { List } from './ContactList.styled';
import { Contact } from '../Contact';
import { Component } from 'react';
import PropTypes from 'prop-types';
export class ContactList extends Component {
  render() {
    const { contacts, handleDeleteBtnClick } = this.props;
    return (
      <List>
        {contacts.map(({ name, number, id }) => {
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
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteBtnClick: PropTypes.func.isRequired,
};
