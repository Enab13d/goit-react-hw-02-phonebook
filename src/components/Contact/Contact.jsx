import { DeleteBtn, Item } from './Contact.styled';

export const Contact = ({ name, number, id, handleDeleteBtnClick }) => {

  return (
    <Item key={id}>
      {name}: {number}
      <DeleteBtn type='button' onClick={handleDeleteBtnClick} id={id}>Delete</DeleteBtn>
    </Item>
  );
};
