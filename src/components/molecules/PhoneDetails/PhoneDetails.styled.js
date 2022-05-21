import styled from 'styled-components';
import { breakPoints } from '../../../globals/breakpoints';
import { Colors } from '../../../globals/colors';
import { Text } from '../../atoms';

const PhoneDetailsContainer = styled.div`
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

const PhoneDetailsCard = styled.div`
  width: fit-content;
  border: 1px solid ${Colors.brown600};
  border-radius: 8px;
  margin-top: 24px;
`;

const PhoneDetailsTitleWrapper = styled.div`
  width: 100%;
  background: ${Colors.brown600};
  background: -webkit-linear-gradient(144deg, ${Colors.brown600} 0%, ${Colors.brown500} 100%);
  background: linear-gradient(144deg, ${Colors.brown600} 0%, ${Colors.brown500} 100%);
  padding: 8px;
  padding-left: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const PhoneDetailsDescription = styled(Text)`
  font-size: 14px;
  margin-bottom: 16px;
  max-width: 400px;
`;

const PhoneDetailsSpecWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: fit-content;
  width: fit-content;
`;

const PhoneDetailsWrapper = styled.div`
  display: flex;
  padding: 16px 24px 16px 24px;
`;

const PhoneDetailsImage = styled.img`
  object-fit: contain;
  max-height: 200px;
  margin-right: 24px;
`;

export {
  PhoneDetailsContainer,
  PhoneDetailsCard,
  PhoneDetailsTitleWrapper,
  PhoneDetailsWrapper,
  PhoneDetailsImage,
  PhoneDetailsSpecWrapper,
  PhoneDetailsDescription,
};
