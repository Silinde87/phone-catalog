import { string, func } from 'prop-types';
import { PhoneCardImage, PhoneCardText, PhoneCardWrapper } from './PhoneCard.styled';

const PhoneCard = ({ src = '', name = '', onClick = () => {}, ...otherProps }) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <PhoneCardWrapper onClick={handleClick} value={name} {...otherProps}>
      <PhoneCardImage src={src} alt={name}></PhoneCardImage>
      <PhoneCardText>{name}</PhoneCardText>
    </PhoneCardWrapper>
  );
};

PhoneCard.propTypes = {
  src: string.isRequired,
  name: string.isRequired,
  onClick: func.isRequired,
};

export default PhoneCard;
