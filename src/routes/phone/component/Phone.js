import { bool, func, node } from 'prop-types';
import { forwardRef } from 'react';
import { IconButton } from '../../../components/atoms';
import { TextTypes } from '../../../components/atoms/Text';
import { ModalDelete, ModalPhone, PhoneDetails } from '../../../components/molecules';
import { PhoneContainer, PhoneTitle, ButtonIconsWrapper } from './Phone.styled';

const Phone = forwardRef((props, refs) => {
  const {
    handleBackClick,
    handleDeleteClick,
    handleOpenModalDelete,
    handleCloseModalDelete,
    handleOpenModalPhone,
    handleCloseModalPhone,
    handleSubmitModalPhone,
    hasError,
    isLoading,
  } = props;
  const { modalDeleteRef, modalPhoneRef } = refs;
  return (
    <PhoneContainer>
      <PhoneTitle as={TextTypes.H1}>The Phone Catalog</PhoneTitle>
      <PhoneDetails />
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
          onClick={handleOpenModalPhone}
        />
        <IconButton
          dataTestId="delete-btn"
          src="/images/trash.svg"
          text="Delete"
          onClick={handleOpenModalDelete}
        />
      </ButtonIconsWrapper>
      <ModalDelete
        ref={modalDeleteRef}
        handleConfirmClick={handleDeleteClick}
        handleCloseModal={handleCloseModalDelete}
      />
      <ModalPhone
        ref={modalPhoneRef}
        handleCloseModal={handleCloseModalPhone}
        handleSubmitModalPhone={handleSubmitModalPhone}
        hasError={hasError}
        isLoading={isLoading}
      />
    </PhoneContainer>
  );
});

Phone.propTypes = {
  handleBackClick: func,
  handleDeleteClick: func,
  handleOpenModalDelete: func,
  handleCloseModalDelete: func,
  handleOpenModalPhone: func,
  handleCloseModalPhone: func,
  handleSubmitModalPhone: func,
  modalRef: node,
  hasError: bool,
  isLoading: bool,
};

export default Phone;
