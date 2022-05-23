import { func } from 'prop-types';
import { forwardRef } from 'react';
import { useReactContext } from '../../../context/Context';
import { Button, Text } from '../../atoms';
import { ButtonVariant } from '../../atoms/Button/Button.types';
import { ModalDeleteWrapper, ModalDeleteButtonsWrapper } from './ModalDelete.styled';

const ModalDelete = forwardRef(({ handleCloseModal, handleConfirmClick, ...otherProps }, ref) => {
  const { phonesState } = useReactContext();
  const { selectedPhone } = phonesState;
  return (
    <ModalDeleteWrapper ref={ref} {...otherProps}>
      <Text>{`You are deleting ${selectedPhone?.name}.`}</Text>
      <Text>{`Are you sure?`}</Text>
      <ModalDeleteButtonsWrapper>
        <Button variant={ButtonVariant.OUTLINE} dataTestId="yes-btn" onClick={handleConfirmClick}>
          Yes
        </Button>
        <Button dataTestId="no-btn" onClick={handleCloseModal}>
          No
        </Button>
      </ModalDeleteButtonsWrapper>
    </ModalDeleteWrapper>
  );
});

ModalDelete.propTypes = {
  handleCloseModal: func,
  handleConfirmClick: func,
};

export default ModalDelete;
