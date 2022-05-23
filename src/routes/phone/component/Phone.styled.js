import styled from 'styled-components';
import { Modal, Text } from '../../../components/atoms';
import { breakPoints } from '../../../globals/breakpoints';

const PhoneContainer = styled.div`
  padding: 40px 24px 24px 24px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    padding: 40px 16px 24px 16px;
  }
`;

const PhoneTitle = styled(Text)`
  margin-bottom: 24px;
`;

const ButtonIconsWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 24px;
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    flex-direction: column;
    margin-top: 32px;
    gap: 16px;
    width: 100%;
  }
`;

export { PhoneContainer, PhoneTitle, ButtonIconsWrapper };
