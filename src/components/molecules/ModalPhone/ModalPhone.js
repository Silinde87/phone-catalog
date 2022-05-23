import { func } from 'prop-types';
import { forwardRef } from 'react';
import { useReactContext } from '../../../context/Context';
import { Button } from '../../atoms';
import { ButtonVariant } from '../../atoms/Button/Button.types';
import {
  ModalPhoneWrapper,
  PhoneForm,
  ModalPhoneButtonsWrapper,
  InputManufacturer,
  InputName,
  InputColor,
  InputPrice,
  InputScreenSize,
  InputScreenResolution,
  InputProcessor,
  InputRam,
  InputCamera,
  InputBattery,
  InputStorage,
  InputDescription,
  InputsWrapper,
} from './ModalPhone.styled';

const ModalPhone = forwardRef(
  ({ handleConfirmClick, handleCloseModal, handleSubmitModalPhone, ...otherProps }, ref) => {
    const { phonesState } = useReactContext();
    const { selectedPhone } = phonesState;

    return (
      <ModalPhoneWrapper ref={ref} {...otherProps}>
        <PhoneForm onSubmit={handleSubmitModalPhone}>
          <InputsWrapper>
            <InputManufacturer placeholder="Manufacturer" value={selectedPhone?.manufacturer} />
            <InputName placeholder="Phone name" value={selectedPhone?.name} />
            <InputColor placeholder="Color" value={selectedPhone?.color} />
            <InputPrice placeholder="Price" type="number" value={selectedPhone?.price} />
            <InputScreenSize placeholder="Screen size" value={selectedPhone?.screen} />
            <InputScreenResolution
              placeholder="Screen resolution"
              value={selectedPhone?.screenResolution}
            />
            <InputProcessor placeholder="Processor" value={selectedPhone?.processor} />
            <InputRam placeholder="RAM Memory" value={selectedPhone?.ram} />
            <InputCamera placeholder="Camera MP" value={selectedPhone?.camera} />
            <InputBattery placeholder="Battery capacity" value={selectedPhone?.battery} />
            <InputStorage placeholder="Storage" value={selectedPhone?.storage} />
            <InputDescription placeholder="Description" value={selectedPhone?.description} />
          </InputsWrapper>
          <ModalPhoneButtonsWrapper>
            <Button
              variant={ButtonVariant.OUTLINE}
              dataTestId="save-btn"
              onClick={handleConfirmClick}
            >
              Confirm
            </Button>
            <Button dataTestId="cancel-btn" onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalPhoneButtonsWrapper>
        </PhoneForm>
      </ModalPhoneWrapper>
    );
  }
);

ModalPhone.propTypes = {
  handleConfirmClick: func,
  handleCloseModal: func,
  handleSubmitModalPhone: func,
};

export default ModalPhone;
