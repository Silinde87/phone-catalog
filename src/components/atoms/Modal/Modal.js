import { node, string } from 'prop-types';
import { forwardRef } from 'react';
import { ModalWrapper } from './Modal.styled';

const Modal = forwardRef(({ dataTestId = 'modal-component', children, ...otherProps }, ref) => {
  return (
    <ModalWrapper data-testid={dataTestId} ref={ref} {...otherProps}>
      {children}
    </ModalWrapper>
  );
});

Modal.propTypes = {
  dataTestId: string,
  children: node,
};

export default Modal;
