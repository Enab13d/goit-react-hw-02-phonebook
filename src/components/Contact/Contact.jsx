import { Item } from './Contact.styled';

export const Contact = ({ name, number, id }) => {
  return (
    <Item key={id}>
      {name}: {number}
    </Item>
  );
};
