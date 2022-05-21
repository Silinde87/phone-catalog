import { func, object } from 'prop-types';
import { IconButton } from '../../../components/atoms';
import { TextTypes } from '../../../components/atoms/Text';
import { PhoneDetails } from '../../../components/molecules';
import { PhoneContainer, PhoneTitle, ButtonIconsWrapper } from './Phone.styled';

const Phone = ({ selectedPhone, handleBackClick, handleEditClick, handleDeleteClick }) => {
  return (
    <PhoneContainer>
      <PhoneTitle as={TextTypes.H1}>The Phone Catalog</PhoneTitle>
      <PhoneDetails selectedPhone={selectedPhone} />
      <ButtonIconsWrapper>
        <IconButton src="/images/back.svg" text="Go Back" onClick={handleBackClick} />
        <IconButton src="/images/edit.svg" text="Edit" onClick={handleEditClick} />
        <IconButton src="/images/trash.svg" text="Delete" onClick={handleDeleteClick} />
      </ButtonIconsWrapper>
    </PhoneContainer>
  );
};

Phone.propTypes = {
  selectedPhone: object,
  handleBackClick: func,
  handleEditClick: func,
  handleDeleteClick: func,
};

export default Phone;
