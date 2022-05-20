import { string, func } from 'prop-types';
import { PhoneCardImage, PhoneCardWrapper } from './PhoneCard.styled';
import Text from '../Text';

const PhoneCard = ({ src = '', name = '', onClick = () => {}, ...otherProps }) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <PhoneCardWrapper onClick={handleClick} value={name} {...otherProps}>
      <PhoneCardImage src={src} alt={name}></PhoneCardImage>
      <Text>{name}</Text>
    </PhoneCardWrapper>
  );
};

PhoneCard.propTypes = {
  src: string.isRequired,
  name: string.isRequired,
  onClick: func.isRequired,
};

export default PhoneCard;
