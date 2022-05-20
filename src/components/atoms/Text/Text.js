import PropTypes from 'prop-types';
import { SCText } from './Text.styled';
import { Colors } from './../../../globals/colors';

function Text({
  color = Colors.gray900,
  as = 'p',
  textAlign = 'center',
  uppercase = false,
  fontStyle = 'normal',
  children,
  ...otherProps
}) {
  return (
    <SCText
      as={as}
      color={color}
      textAlign={textAlign}
      uppercase={uppercase}
      fontStyle={fontStyle}
      {...otherProps}
    >
      {children}
    </SCText>
  );
}

Text.propTypes = {
  color: PropTypes.string,
  as: PropTypes.string,
  textAlign: PropTypes.string,
  uppercase: PropTypes.bool,
  fontStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Text;
