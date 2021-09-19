import styled from "styled-components";

export const HomePageContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SearchInput = styled.input`
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
`

export const TrendingAssetsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1.25rem;

  h2 {
    font-size: 1.25rem;
    line-height: 2rem;
    width: 100%;
    text-align: left;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 768px) {
    width: 768px;
  }
`

export const TrendingAssetsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`
