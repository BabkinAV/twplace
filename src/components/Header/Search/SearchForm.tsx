import React, { FormEvent } from 'react';
import { StyledSearchForm } from './SearchForm.styles';
import SearchButton from '../SearchButton/SearchButton';
import { useRouter } from 'next/router';

const SearchForm = () => {
  const router = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push('/search');
  };
  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <input type="text" id="searchItem" />
      <SearchButton />
    </StyledSearchForm>
  );
};

export default SearchForm;
