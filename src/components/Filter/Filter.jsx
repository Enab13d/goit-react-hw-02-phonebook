import { FilterField, FilterLabel } from './Filter.styled';

export const Filter = ({ handleFilterChange }) => {
  return (
    <FilterLabel>
      <FilterField onChange={handleFilterChange} />
    </FilterLabel>
  );
};
