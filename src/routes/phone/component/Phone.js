import { func, object, node } from 'prop-types';
import { forwardRef } from 'react';
import { Button, IconButton, Modal, Text } from '../../../components/atoms';
import { ButtonVariant } from '../../../components/atoms/Button/Button.types';
import { TextTypes } from '../../../components/atoms/Text';
import { PhoneDetails } from '../../../components/molecules';
import {
  PhoneContainer,
  PhoneTitle,
  ButtonIconsWrapper,
  PhoneConfirmModal,
  PhoneConfirmModalButtonsWrapper,
} from './Phone.styled';

const Phone = forwardRef((props, ref) => {
  const {
    selectedPhone,
    handleBackClick,
    handleEditClick,
    handleDeleteClick,
    handleOpenModal,
    handleCloseModal,
  } = props;
  return (
    <PhoneContainer>
      <PhoneTitle as={TextTypes.H1}>The Phone Catalog</PhoneTitle>
      <PhoneDetails selectedPhone={selectedPhone} />
      <ButtonIconsWrapper>
        <IconButton
          dataTestId="back-btn"
          src="/images/back.svg"
          text="Go Back"
          onClick={handleBackClick}
        />
        <IconButton
          dataTestId="edit-btn"
          src="/images/edit.svg"
          text="Edit"
          onClick={handleEditClick}
        />
        <IconButton
          dataTestId="delete-btn"
          src="/images/trash.svg"
          text="Delete"
          onClick={handleOpenModal}
        />
      </ButtonIconsWrapper>
      <PhoneConfirmModal ref={ref}>
        <Text>{`You are deleting ${selectedPhone?.name}.`}</Text>
        <Text>{`Are you sure?`}</Text>
        <PhoneConfirmModalButtonsWrapper>
          <Button variant={ButtonVariant.OUTLINE} dataTestId="yes-btn" onClick={handleDeleteClick}>
            Yes
          </Button>
          <Button dataTestId="no-btn" onClick={handleCloseModal}>
            No
          </Button>
        </PhoneConfirmModalButtonsWrapper>
      </PhoneConfirmModal>
    </PhoneContainer>
  );
});

Phone.propTypes = {
  selectedPhone: object,
  handleBackClick: func,
  handleEditClick: func,
  handleDeleteClick: func,
  handleOpenModal: func,
  handleCloseModal: func,
  modalRef: node,
};

export default Phone;
