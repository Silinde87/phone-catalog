import styled from 'styled-components';
import { breakPoints } from '../../../globals/breakpoints';
import { Input, Modal, Text } from '../../atoms';

const ModalPhoneWrapper = styled(Modal)`
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    width: 100%;
  }
`;

const InputManufacturer = styled(Input)`
  grid-area: manufacturer;
`;

const InputName = styled(Input)`
  grid-area: name;
`;

const InputColor = styled(Input)`
  grid-area: color;
`;

const InputPrice = styled(Input)`
  grid-area: price;
`;

const InputScreenSize = styled(Input)`
  grid-area: screenSize;
`;

const InputScreenResolution = styled(Input)`
  grid-area: screenResolution;
`;

const InputProcessor = styled(Input)`
  grid-area: processor;
`;

const InputRam = styled(Input)`
  grid-area: ram;
`;

const InputCamera = styled(Input)`
  grid-area: camera;
`;

const InputBattery = styled(Input)`
  grid-area: battery;
`;

const InputStorage = styled(Input)`
  grid-area: storage;
`;

const InputDescription = styled(Input)`
  grid-area: description;
`;

const PhoneForm = styled.form`
  width: 460px;
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    width: 100%;
  }
`;

const InputsWrapper = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'manufacturer name'
    'color price'
    'screenSize screenResolution'
    'processor ram'
    'camera battery'
    'storage storage'
    'description description';

  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'manufacturer manufacturer'
      'name name'
      'color price'
      'screenSize screenResolution'
      'processor processor'
      'ram camera'
      'battery battery'
      'storage storage'
      'description description';
  }
`;

const ModalPhoneButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  justify-content: center;
`;

const TextError = styled(Text)`
  font-size: 16px;
  margin-top: 8px;
`;

export {
  ModalPhoneWrapper,
  PhoneForm,
  InputsWrapper,
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
  TextError,
};
