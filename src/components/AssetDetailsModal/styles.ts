import styled from 'styled-components';

export const AssetDetailsContainer = styled.section`
  width: 100%;
  padding: 1.3rem 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #2A2A2E;


  img {
    width: 21rem;
    height: 21rem;

    border-radius: 1.5rem;
    padding: 0.3rem;
  }

  
  p {
    align-self: flex-end;
    margin: 0 10px 10px 0;
    cursor: pointer;
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
`

export const AssetDetailsOwner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.3rem 0;
  background-color: #333333;
  border-radius: 52px;
  padding: 0 10px 0 1px;

  img{
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  h4 {
    margin-left: 0.3rem;
    font-size: 1rem;
    line-height: 1.75rem;
    letter-spacing: 0.75px;
  }
`