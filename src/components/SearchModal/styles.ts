import styled from 'styled-components';

export const SearchUserModalContainer = styled.section`
  width: 100%;
  padding: 1.3rem 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--darkerGrey);
  
  svg {
    align-self: flex-end;
    margin: 0 10px 10px 0;
    cursor: pointer;
    color: var(--white);
    font-size: 1.5rem;
    transition: all 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }

  h3 {
    padding: 20px;
  }
`;

export const SeachButton = styled.button`
  width: 12rem;
  height: 3.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  font-size: 1.125rem;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  background-color: #00b712;
  background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);;
  color: var(--darkerGrey);
`