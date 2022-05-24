import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { Text } from '../../../components/atoms';
import { breakPoints } from '../../../globals/breakpoints';

const HomeWrapper = styled.div`
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

const PhonesWrapper = styled(InfiniteScroll)`
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  max-width: 1440px;
  padding: 24px;
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    justify-content: space-between;
    column-gap: 8px;
    row-gap: 24px;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const SpinnerWrapper = styled.div`
  margin: 200px;
  display: flex;
  justify-content: center;
`;

const HomeTitle = styled(Text)`
  margin-bottom: 24px;
`;

const NoMorePhonesText = styled(Text)`
  margin-top: 24px;
`;

const AddIcon = styled.img`
  height: 56px;
  width: 50px;
  margin-left: 8px;
  cursor: pointer;
`;
const HomeInputSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export {
  HomeWrapper,
  PhonesWrapper,
  SpinnerWrapper,
  HomeTitle,
  NoMorePhonesText,
  HomeInputSearchWrapper,
  AddIcon,
};
