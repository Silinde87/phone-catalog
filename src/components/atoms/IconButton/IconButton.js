import { func, string } from 'prop-types';
import { IconButtonWrapper, IconButtonImage, IconButtonText } from './IconButton.styled';

const IconButton = ({ dataTestId = 'iconbutton-component', src, text, onClick, ...otherProps }) => {
  return (
    <IconButtonWrapper data-testid={dataTestId} onClick={onClick} {...otherProps}>
      <IconButtonImage src={src} alt={`${text} icon`} />
      <IconButtonText>{text}</IconButtonText>
    </IconButtonWrapper>
  );
};

IconButton.propTypes = {
  dataTestId: string,
  src: string,
  text: string,
  onClick: func,
};

export default IconButton;
