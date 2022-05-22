import styled from 'styled-components';
import { Colors } from '../../../globals/colors';
import Text from '../Text';
import { ButtonVariant } from './Button.types';

const handleBackgroundColor = (variant, status) => {
  const variants = {
    [ButtonVariant.FILLED]: { normal: Colors.green500, hover: Colors.green600 },
    [ButtonVariant.OUTLINE]: { normal: Colors.gray200, hover: Colors.gray200 },
  };
  return variants[variant][status];
};

const handleBorderColor = (variant, status) => {
  const variants = {
    [ButtonVariant.FILLED]: { normal: Colors.green500, hover: Colors.green600 },
    [ButtonVariant.OUTLINE]: { normal: Colors.green500, hover: Colors.green600 },
  };
  return variants[variant][status];
};

const ButtonWrapper = styled.button`
  width: 120px;
  height: 48px;
  border: 2px solid ${({ variant }) => handleBorderColor(variant, 'normal')};
  background-color: ${({ variant }) => handleBackgroundColor(variant, 'normal')};
  transition: all 0.2s;
  border-radius: 8px;
  outline: none;

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ variant }) => handleBackgroundColor(variant, 'hover')};
    border: 3px solid ${({ variant }) => handleBorderColor(variant, 'hover')};
  }
`;

const ButtonText = styled(Text)`
  letter-spacing: 0.6px;
`;

export { ButtonWrapper, ButtonText };
