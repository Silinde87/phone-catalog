import { string } from 'prop-types';
import { ButtonVariant } from '../Button/Button.types';
import { LoadingButtonSpinner, LoadingButtonWrapper } from './LoadingButton.styled';

const LoadingButton = ({ variant = ButtonVariant.FILLED, ...otherProps }) => {
  return (
    <LoadingButtonWrapper variant={variant}>
      <LoadingButtonSpinner size="5" />
    </LoadingButtonWrapper>
  );
};

LoadingButton.propTypes = {
  variant: string,
};
export default LoadingButton;
