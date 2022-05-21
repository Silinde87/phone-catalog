import styled from 'styled-components';
import { Colors } from '../../../globals/colors';
import { breakPoints } from '../../../globals/breakpoints';

const InputWrapper = styled.input`
  padding: 16px 24px;
  border-radius: 25px;
  border: none;
  outline: 1px solid ${Colors.gray600};
  width: 500px;
  color: ${Colors.gray900};
  font-size: 18px;
  font-family: OpenSans, sans-serif;
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

export { InputWrapper };
