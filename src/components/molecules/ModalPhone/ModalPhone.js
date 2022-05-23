import { func } from 'prop-types';
import { forwardRef } from 'react';
import { ModalPhoneWrapper, PhoneForm } from './ModalPhone.styled';

const ModalPhone = forwardRef(({ handleConfirmClick, handleCloseModal, ...otherProps }, ref) => {
  return (
    <ModalPhoneWrapper ref={ref} {...otherProps}>
      <PhoneForm>a</PhoneForm>
    </ModalPhoneWrapper>
  );
});

ModalPhone.propTypes = {
  handleConfirmClick: func,
  handleCloseModal: func,
};

export default ModalPhone;
