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
    min-height: 5rem;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    background-color: var(--darkGray);
  }

  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0 0 1pt var(--radioactiveGreen);
  }
`

export const UserProfileCardInfos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -3.125rem;
  padding: 0.8rem 1.25rem;

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
    width: 100%;
    font-size: 1rem;
    line-height: 1.375rem;
    text-align: center;
    color: var(--white);
    padding: 1rem;
    height: 75px;
    line-height: 1.25;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`