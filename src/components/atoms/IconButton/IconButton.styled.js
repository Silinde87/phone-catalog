import styled from 'styled-components';
import { breakPoints } from '../../../globals/breakpoints';
import { Colors } from '../../../globals/colors';
import Text from '../Text';

const IconButtonWrapper = styled.button`
  background-color: ${Colors.green500};
  border: none;
  border-radius: 8px;
  width: 150px;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  outline: none;
  &:hover,
  &:focus {
    background-color: ${Colors.green600};
  }
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    width: 100%;
    height: 58px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const IconButtonImage = styled.img`
  width: 16px;
  margin-bottom: 8px;
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    width: 16px;
    margin-right: 16px;
    margin-bottom: 0px;
  }
`;

const IconButtonText = styled(Text)`
  font-size: 14px;
  line-height: 20px;
`;

export { IconButtonWrapper, IconButtonImage, IconButtonText };
