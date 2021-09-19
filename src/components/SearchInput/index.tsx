import React, { InputHTMLAttributes } from 'react';

import { SearchInputSection } from './styles';

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...rest}) => {
  return (
    <SearchInputSection className="search-input">
      <input
        type="text"
        id="search"
        autoComplete="off"
        placeholder="Busque um filme por nome ou gênero..."
        {...rest}
      />
    </SearchInputSection>
  );
}

export default SearchInput;