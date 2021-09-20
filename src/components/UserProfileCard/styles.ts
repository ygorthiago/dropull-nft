import styled from "styled-components";

export const UserProfileCardContainer = styled.section`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--darkGray);

  border-radius: 2rem;

  cursor: pointer;

  img {
    width: 100%;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }

  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0 0 1pt var(--radioactiveGreen);
  }
`

export const UserProfileCardInfos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -3.125rem;

  img {
    width: 5.75rem;
    height: 5.75rem;
    border-radius: 50%;
    box-shadow: 0 0 0 3pt var(--darkerGrey);
    border: 3px solid var(--radioactiveGreen);
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    color: var(--white);
  }

  legend {
    font-size: 1rem;
    line-height: 1.375rem;
    text-align: center;
    color: var(--white);
    padding: 1rem;
  }
`