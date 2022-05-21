import styled from 'styled-components';
import { breakPoints } from '../../../globals/breakpoints';
import { Colors } from '../../../globals/colors';
import { Text } from '../../atoms';

const PhoneDetailsCard = styled.div`
  width: fit-content;
  border: 1px solid ${Colors.brown600};
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px ${Colors.gray600};
  margin: auto;

  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    width: 100%;
  }
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

  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin: auto;
  }
`;

const PhoneDetailsWrapper = styled.div`
  display: flex;
  padding: 16px 24px 16px 24px;
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    flex-direction: column;
  }
`;

const PhoneDetailsImage = styled.img`
  object-fit: contain;
  max-height: 200px;
  margin-right: 24px;
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    margin-right: 0px;
    margin-bottom: 24px;
  }
`;

export {
  PhoneDetailsCard,
  PhoneDetailsTitleWrapper,
  PhoneDetailsWrapper,
  PhoneDetailsImage,
  PhoneDetailsSpecWrapper,
  PhoneDetailsDescription,
};
