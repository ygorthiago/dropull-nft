import styled from 'styled-components';

export const SearchInputSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 80px;
  margin-bottom: 30px;

  input {
    margin: 30px;
    width: 20.438rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background-color: #333333;
    color: var(--white);
    border: none;
    padding: 12px;

    &::placeholder { 
      color: var(--white);
      opacity: 1; 
    }

    &:focus, input:focus{
      outline: none;
    }
  }
`;
