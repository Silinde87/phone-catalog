// @author  https://10015.io/tools/css-loader-generator
import styled, { keyframes } from 'styled-components';
import { Colors } from '../../../globals/colors';

const spinner = keyframes`
    0% {
      transform: scale(1) rotate(0deg) translateY(calc(var(--radius) * 1%));
    }

    50% {
      transform: scale(0.5) rotate(1440deg) translateY(0);
    }

    100% {
      transform: scale(1) rotate(2920deg) translateY(calc(var(--radius) * 1%));
    }
`;

const SpinnerWrapper = styled.div`
  position: relative;
  width: 22.4px;
  height: 22.4px;

  &::before,
  &::after {
    --radius: 250;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    animation: ${spinner} 2s infinite linear;
    background: ${Colors.brown600};
    border-radius: 50%;
  }

  &::before {
    --radius: -250;
    background: ${Colors.gray700};
  }
`;

export { SpinnerWrapper };
