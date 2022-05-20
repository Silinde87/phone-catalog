import { string, func } from 'prop-types';
import { PhoneCardImage, PhoneCardWrapper } from './PhoneCard.styled';
import Text from '../Text';

const PhoneCard = ({ src = '', name = '', onClick = () => {}, ...otherProps }) => {
  return (
    <PhoneCardWrapper onClick={onClick} {...otherProps}>
      <PhoneCardImage src={src}></PhoneCardImage>
      <Text>{name}</Text>
    </PhoneCardWrapper>
  );
};

PhoneCard.propTypes = {
  src: string,
  name: string,
  onClick: func,
};

export default PhoneCard;
