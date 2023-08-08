import React from 'react';
import { StyledSearchForm } from './SearchForm.styles';
import SearchButton from '../SearchButton/SearchButton';

const SearchForm = () => {
  return (
    <StyledSearchForm>
      <input type="text" id="searchItem"/>
			<SearchButton />
    </StyledSearchForm>
  );
};

export default SearchForm;
