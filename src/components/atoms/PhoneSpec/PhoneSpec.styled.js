import styled from 'styled-components';
import Text from '../Text';

const PhoneSpecWrapper = styled.article`
  height: 135px;
  width: 135px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const PhoneSpecIcon = styled.img`
  height: 30px;
  margin-bottom: 8px;
`;

const PhoneSpecMainText = styled(Text)`
  font-weight: 600;
`;

const PhoneSpecSecondaryText = styled(Text)`
  font-size: 14px;
`;

export { PhoneSpecWrapper, PhoneSpecIcon, PhoneSpecMainText, PhoneSpecSecondaryText };
