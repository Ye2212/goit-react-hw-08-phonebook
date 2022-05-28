import { useDispatch } from 'react-redux';
import { filteredContact } from 'redux/contacts/contacts-slice';
import { FilterLabel, FilterText, FilterInput } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  const changeFilterInput = e => {
    console.log(e.currentTarget.value);
    dispatch(filteredContact(e.currentTarget.value));
  };
  return (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput type="text" name="filter" onChange={changeFilterInput} />
    </FilterLabel>
  );
}

export default Filter;
