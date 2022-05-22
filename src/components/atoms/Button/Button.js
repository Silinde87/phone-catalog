import { func, node, string } from 'prop-types';
import Text from '../Text';
import { ButtonWrapper, ButtonText } from './Button.styled';
import { ButtonVariant } from './Button.types';

const Button = ({
  dataTestId = 'button-component',
  variant = ButtonVariant.FILLED,
  onClick = () => {},
  children,
  ...otherProps
}) => {
  return (
    <ButtonWrapper data-testid={dataTestId} variant={variant} onClick={onClick} {...otherProps}>
      <ButtonText variant={variant}>{children}</ButtonText>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  dataTestId: string,
  variant: string,
  onClick: func,
  children: node,
};

export default Button;
