import styled from 'styled-components'

export const AssetCardContainer = styled.section`
  height: 25rem;
  width: 21.438rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #333333;

  border-radius: 2rem;

  cursor: pointer;
  margin-bottom: 1.875rem;


  > img {
    width: 16rem;
    height: 16rem;

    border-radius: 1.5rem;
    padding: 0.3rem;
  }

  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0 0 1pt #13ff00;
  }
`

export const AssetCardInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.62rem 1.25rem;

`

export const AssetCardTitle = styled.h3`
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0.01em;
  height:50px;
  line-height: 1.25;
  display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
  overflow: hidden;
`