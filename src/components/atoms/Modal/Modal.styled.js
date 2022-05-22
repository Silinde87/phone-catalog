import styled from 'styled-components';
import { Colors } from '../../../globals/colors';

const ModalWrapper = styled.dialog`
  border: none;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  padding: 24px;
  background-color: ${Colors.gray200};
`;

export { ModalWrapper };
