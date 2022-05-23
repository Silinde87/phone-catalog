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
            <InputManufacturer
              placeholder="Manufacturer"
              name="manufacturer"
              value={selectedPhone?.manufacturer}
            />
            <InputName placeholder="Phone name" name="name" value={selectedPhone?.name} />
            <InputColor placeholder="Color" name="color" value={selectedPhone?.color} />
            <InputPrice
              placeholder="Price"
              name="price"
              type="number"
              value={selectedPhone?.price}
            />
            <InputScreenSize
              placeholder="Screen size"
              name="screen"
              value={selectedPhone?.screen}
            />
            <InputScreenResolution
              placeholder="Screen resolution"
              name="screenResolution"
              value={selectedPhone?.screenResolution}
            />
            <InputProcessor
              placeholder="Processor"
              name="processor"
              value={selectedPhone?.processor}
            />
            <InputRam placeholder="RAM Memory" name="ram" value={selectedPhone?.ram} />
            <InputCamera placeholder="Camera MP" name="camera" value={selectedPhone?.camera} />
            <InputBattery
              placeholder="Battery capacity"
              name="battery"
              value={selectedPhone?.battery}
            />
            <InputStorage placeholder="Storage" name="storage" value={selectedPhone?.storage} />
            <InputDescription
              placeholder="Description"
              name="description"
              value={selectedPhone?.description}
            />
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
