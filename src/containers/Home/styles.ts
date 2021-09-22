import styled from "styled-components";

export const HomePageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding-top: 1rem;
  }
`

export const TrendingAssetsContainer = styled.article`
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

export const TrendingAssetsList = styled.section<{isLoading: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  > section {
    margin-bottom: 1.875rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.isLoading ? 'center' : 'space-between'};
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
`
