import { DeleteBtn, Item, Name } from './Contact.styled';
import PropTypes from 'prop-types';
export const Contact = ({ name, number, id, handleDeleteBtnClick }) => {
  return (
    <Item key={id}>
      <Name>
        {name}: {number}
      </Name>
      <DeleteBtn type="button" onClick={handleDeleteBtnClick} id={id}>
        Delete
      </DeleteBtn>
    </Item>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDeleteBtnClick: PropTypes.func.isRequired,
};
