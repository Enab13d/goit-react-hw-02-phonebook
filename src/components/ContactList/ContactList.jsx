import { List } from './ContactList.styled';
import { Contact } from '../Contact';
export const ContactList = ({ filter, contacts }) => {
  console.log(contacts);
  return filter === '' ? (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          // Contact
          <Contact key={id} name={name} number={number}></Contact>
        );
      })}
    </List>
  ) : (
    <List>
      {[...contacts]
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ name, number, id }) => {
          return <Contact key={id} name={name} number={number}></Contact>;
        })}
    </List>
  );
};
