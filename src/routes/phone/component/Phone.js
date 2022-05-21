import { object } from 'prop-types';
import { IconButton } from '../../../components/atoms';
import { TextTypes } from '../../../components/atoms/Text';
import { PhoneDetails } from '../../../components/molecules';
import { PhoneContainer, PhoneTitle, ButtonIconsWrapper } from './Phone.styled';

const Phone = ({ selectedPhone }) => {
  return (
    <PhoneContainer>
      <PhoneTitle as={TextTypes.H1}>The Phone Catalog</PhoneTitle>
      <PhoneDetails selectedPhone={selectedPhone} />
      <ButtonIconsWrapper>
        <IconButton src="/images/back.svg" text="Go Back" onClick={() => {}} />
        <IconButton src="/images/edit.svg" text="Edit" onClick={() => {}} />
        <IconButton src="/images/trash.svg" text="Delete" onClick={() => {}} />
      </ButtonIconsWrapper>
    </PhoneContainer>
  );
};

Phone.propTypes = {
  selectedPhone: object,
};

export default Phone;
