import { FilterField, FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';
export const Filter = ({ handleFilterChange }) => {
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterField id="filter" onChange={handleFilterChange} />
    </>
  );
};
Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
