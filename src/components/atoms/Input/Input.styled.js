import styled from 'styled-components';
import { Colors } from '../../../globals/colors';
import { breakPoints } from '../../../globals/breakpoints';

const InputSearchWrapper = styled.input`
  padding: 16px 24px;
  border-radius: 25px;
  border: none;
  outline: 1px solid ${Colors.gray600};
  width: 500px;
  color: ${Colors.gray900};
  font-size: 18px;
  transition: outline 0.1s;
  &::placeholder {
    color: ${Colors.gray800};
  }
  &:focus {
    outline: 2px solid ${Colors.green600};
  }
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    width: 100%;
    font-size: 16px;
  }
`;

const InputDefaultWrapper = styled.input`
  padding: 16px;
  border-radius: 8px;
  border: none;
  outline: 1px solid ${Colors.gray700};
  color: ${Colors.gray900};
  width: 100%;
  font-size: 16px;
  transition: outline 0.1s;
  &::placeholder {
    color: ${Colors.gray800};
  }
  &:focus {
    outline: 1px solid ${Colors.green600};
  }
`;

export { InputSearchWrapper, InputDefaultWrapper };
