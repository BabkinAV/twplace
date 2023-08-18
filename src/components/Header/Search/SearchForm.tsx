import React, { FormEvent } from 'react';
import { StyledSearchForm } from './SearchForm.styles';
import SearchButton from '../SearchButton/SearchButton';
import { useRouter } from 'next/router';

const SearchForm = () => {
  const router = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      search: { value: string };
    };

    router.push({ pathname: '/search', query: { q: target.search.value } });
  };
  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <input type="text" id="search" name="search" />
      <SearchButton />
    </StyledSearchForm>
  );
};

export default SearchForm;
