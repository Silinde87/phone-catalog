import styled from 'styled-components';
import { handleBackgroundColor, handleBorderColor } from '../Button/Button.styled';
import Spinner from '../Spinner';

const LoadingButtonWrapper = styled.button`
  width: 120px;
  height: 48px;
  border: 2px solid ${({ variant }) => handleBorderColor(variant, 'normal')};
  background-color: ${({ variant }) => handleBackgroundColor(variant, 'normal')};
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingButtonSpinner = styled(Spinner)``;

export { LoadingButtonSpinner, LoadingButtonWrapper };
