import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const AssetOwnerCardContainer = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;
  background-color: var(--darkGray);
  border-radius: 52px;
  padding: 0 10px 0 1px;
  height: 2.5rem;

  img{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  h4 {
    margin-left: 0.3rem;
    font-size: 0.7rem;
    line-height: 1.75rem;
    letter-spacing: 0.75px;
    line-height: 1.25;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0 0 1pt var(--radioactiveGreen);
  }
`