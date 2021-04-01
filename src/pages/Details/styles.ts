import { Button, CircularProgress } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import styled from 'styled-components'


export const Text = styled.p`
  margin-bottom: 20px;
`;
export const TextArrow = styled.p`
  cursor: pointer;
`;
export const Title = styled.h1`
  font-size: 2rem;
  color: #2d88ff;
  font-weight: 400; 
`;
export const Arrow = styled(ArrowBack)`      
  color: #2d88ff;
  transition: color 0.3s ease-out !important;
`;

export const ButtonBack = styled(Button)`      
 text-transform: none;
`;

export const Loading = styled(CircularProgress)`
     color: #2d88ff;
`;