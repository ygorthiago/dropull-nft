import styled from 'styled-components';

export const LoaderComponent = styled.span`
  border: 4px solid var(--radioactiveGreen);
  border-radius: 50%;
  border-top: 4px solid var(--darkGray);
  width: 40px;
  height: 40px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`