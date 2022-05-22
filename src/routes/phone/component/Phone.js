import { func, object, node } from 'prop-types';
import { forwardRef } from 'react';
import { Button, IconButton, Modal, Text } from '../../../components/atoms';
import { TextTypes } from '../../../components/atoms/Text';
import { PhoneDetails } from '../../../components/molecules';
import { PhoneContainer, PhoneTitle, ButtonIconsWrapper } from './Phone.styled';

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
        <IconButton src="/images/back.svg" text="Go Back" onClick={handleBackClick} />
        <IconButton src="/images/edit.svg" text="Edit" onClick={handleEditClick} />
        <IconButton src="/images/trash.svg" text="Delete" onClick={handleOpenModal} />
      </ButtonIconsWrapper>
      <Modal ref={ref}>
        <Text>Are you sure?</Text>
        <Button onClick={handleDeleteClick}>Yes</Button>
        <Button onClick={handleCloseModal}>No</Button>
      </Modal>
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
