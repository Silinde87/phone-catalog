import { func, string } from 'prop-types';
import { IconButtonWrapper, IconButtonImage, IconButtonText } from './IconButton.styled';

const IconButton = ({ src, text, onClick, ...otherProps }) => {
  return (
    <IconButtonWrapper onClick={onClick} {...otherProps}>
      <IconButtonImage src={src} alt={`${text} icon`} />
      <IconButtonText>{text}</IconButtonText>
    </IconButtonWrapper>
  );
};

IconButton.propTypes = {
  src: string,
  text: string,
  onClick: func,
};

export default IconButton;
