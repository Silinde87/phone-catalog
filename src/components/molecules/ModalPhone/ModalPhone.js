import { bool, func } from 'prop-types';
import { forwardRef } from 'react';
import { useReactContext } from '../../../context/Context';
import { Colors } from '../../../globals/colors';
import { Button, LoadingButton } from '../../atoms';
import { ButtonVariant } from '../../atoms/Button/Button.types';
import { TextStyles } from '../../atoms/Text';
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
  TextError,
} from './ModalPhone.styled';

const ModalPhone = forwardRef(
  ({ handleCloseModal, handleSubmitModalPhone, hasError, isLoading, ...otherProps }, ref) => {
    const { phonesState } = useReactContext();
    const { selectedPhone } = phonesState;

    return (
      <ModalPhoneWrapper ref={ref} {...otherProps}>
        <PhoneForm onSubmit={handleSubmitModalPhone}>
          <InputsWrapper>
            <InputManufacturer
              placeholder="Manufacturer"
              name="manufacturer"
              id="manufacturer"
              value={selectedPhone?.manufacturer}
            />
            <InputName placeholder="Phone name" name="name" id="name" value={selectedPhone?.name} />
            <InputColor placeholder="Color" name="color" id="color" value={selectedPhone?.color} />
            <InputPrice
              placeholder="Price"
              name="price"
              id="price"
              type="number"
              value={selectedPhone?.price}
            />
            <InputScreenSize
              placeholder="Screen size"
              name="screen"
              id="screen"
              value={selectedPhone?.screen}
            />
            <InputScreenResolution
              placeholder="Screen resolution"
              name="screenResolution"
              id="screenResolution"
              value={selectedPhone?.screenResolution}
            />
            <InputProcessor
              placeholder="Processor"
              name="processor"
              id="processor"
              value={selectedPhone?.processor}
            />
            <InputRam placeholder="RAM Memory" name="ram" id="ram" value={selectedPhone?.ram} />
            <InputCamera
              placeholder="Camera MP"
              name="camera"
              id="camera"
              value={selectedPhone?.camera}
            />
            <InputBattery
              placeholder="Battery capacity"
              name="battery"
              id="battery"
              value={selectedPhone?.battery}
            />
            <InputStorage
              placeholder="Storage"
              name="storage"
              id="storage"
              value={selectedPhone?.storage}
            />
            <InputDescription
              placeholder="Description"
              name="description"
              id="description"
              value={selectedPhone?.description}
            />
          </InputsWrapper>
          {hasError && (
            <TextError color={Colors.brown600} fontStyle={TextStyles.OBLIQUE}>
              You should fill all fields properly
            </TextError>
          )}
          <ModalPhoneButtonsWrapper>
            {isLoading ? (
              <LoadingButton variant={ButtonVariant.OUTLINE} />
            ) : (
              <Button variant={ButtonVariant.OUTLINE} dataTestId="save-btn">
                Confirm
              </Button>
            )}
            <Button dataTestId="cancel-btn" type="button" onClick={handleCloseModal}>
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
  hasError: bool,
  isLoading: bool,
};

export default ModalPhone;
