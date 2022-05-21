import styled from 'styled-components';
import { breakPoints } from '../../../globals/breakpoints';
import { Colors } from '../../../globals/colors';
import Text from '../Text';

const PhoneCardWrapper = styled.button`
  width: 225px;
  height: 280px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${Colors.gray600};
  background-color: ${Colors.gray200};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px 0px ${Colors.gray600};
  transition: transform 0.2s ease-out;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
    outline: none;
  }

  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    width: 180px;
  }
`;

const PhoneCardImage = styled.img`
  height: 184px;
  width: 139px;
  object-fit: cover;
  margin-bottom: 16px;
`;

const PhoneCardText = styled(Text)`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export { PhoneCardWrapper, PhoneCardImage, PhoneCardText };
