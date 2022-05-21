import { string } from 'prop-types';
import { TextAlignements } from '../Text';
import {
  PhoneSpecWrapper,
  PhoneSpecIcon,
  PhoneSpecMainText,
  PhoneSpecSecondaryText,
} from './PhoneSpec.styled';

const PhoneSpec = ({ src = '', mainText = '', secondaryText, ...otherProps }) => {
  return (
    <PhoneSpecWrapper {...otherProps}>
      <PhoneSpecIcon src={src} />
      <PhoneSpecMainText textAlign={TextAlignements.LEFT}>{mainText}</PhoneSpecMainText>
      {secondaryText && (
        <PhoneSpecSecondaryText textAlign={TextAlignements.LEFT}>
          {secondaryText}
        </PhoneSpecSecondaryText>
      )}
    </PhoneSpecWrapper>
  );
};

PhoneSpec.propTypes = {
  src: string,
  mainText: string,
  secondaryText: string,
};

export default PhoneSpec;
