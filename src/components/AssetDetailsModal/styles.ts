import styled from 'styled-components';

export const AssetDetailsContainer = styled.section`
  width: 100%;
  padding: 1.3rem 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 37.5rem;

  overflow-y: scroll;

  background-color: var(--darkerGrey);

  > img, video, iframe {
    width: 21rem;

    border-radius: 1.5rem;
    padding: 0.3rem;
  }

  > svg {
    align-self: flex-end;
    margin: 0 10px 10px 0;
    cursor: pointer;
    color: var(--white);
    font-size: 1.5rem;
    transition: all 0.3s;
    overflow: visible;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const AssetDetailsInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.62rem 1.25rem;
`

export const AssetDetailsTitle = styled.h3`
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0.01em;
  padding: 20px;
`

export const AssetPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    margin-bottom: 0.5rem;
  }
`

export const AssetPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    display: flex;
    margin-right: 20px;

    p {
      align-self: center;
      line-height: 0;
      font-size: 1.2rem;
      color: var(--radioactiveGreen)

    }

    svg {
      margin: 0;
      color: var(--radioactiveGreen)
    }
  }
` 