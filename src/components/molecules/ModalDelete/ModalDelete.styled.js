import styled from 'styled-components';
import { Modal } from '../../atoms';

const ModalDeleteWrapper = styled(Modal)`
  max-width: 400px;
`;

const ModalDeleteButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  justify-content: center;
`;

export { ModalDeleteWrapper, ModalDeleteButtonsWrapper };
