import { useState } from "react";
import styled from "styled-components";

const SearchComponent = styled.input`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  background-color: #f2f2fc;
  color: #505050;
  font-size: 16px;
  outline: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b4b9e1;
  }
`

export const SearchBar = ({ onChange }) => {
  const [search, setSearch] = useState('')

  const onSearchChange = (value) => {
    setSearch(value);
    onChange(value);
  }

  return (
    <SearchComponent 
      placeholder="Pesquisar" 
      onChange={e => onSearchChange(e.target.value)}
      value={search}
      data-testid="search-bar"
    />
  );
}