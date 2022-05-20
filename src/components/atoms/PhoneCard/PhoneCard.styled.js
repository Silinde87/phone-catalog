import styled from 'styled-components';
import { Colors } from '../../../globals/colors';

const PhoneCardWrapper = styled.button`
  width: 180px;
  height: 238px;
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
`;

const PhoneCardImage = styled.img`
  height: 184px;
  width: 139px;
  object-fit: cover;
  margin-bottom: 16px;
`;

export { PhoneCardWrapper, PhoneCardImage };
