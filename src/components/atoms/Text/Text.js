import { string, bool, node } from 'prop-types';
import { SCText } from './Text.styled';
import { Colors } from './../../../globals/colors';
import { TextAlignements, TextStyles, TextTypes } from './Text.types';

const Text = ({
  color = Colors.gray900,
  as = TextTypes.P,
  textAlign = TextAlignements.CENTER,
  uppercase = false,
  fontStyle = TextStyles.NORMAL,
  dataTestId = 'text-component',
  children,
  ...otherProps
}) => {
  return (
    <SCText
      as={as}
      color={color}
      textAlign={textAlign}
      uppercase={uppercase}
      fontStyle={fontStyle}
      data-testid={dataTestId}
      {...otherProps}
    >
      {children}
    </SCText>
  );
};

Text.propTypes = {
  color: string,
  as: string,
  textAlign: string,
  uppercase: bool,
  fontStyle: string,
  children: node,
  dataTestId: string,
};

export default Text;
