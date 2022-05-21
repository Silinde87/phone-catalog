import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { Text } from '../../../components/atoms';

const HomeWrapper = styled.div`
  padding: 40px 24px 24px 24px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PhonesWrapper = styled(InfiniteScroll)`
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  max-width: 1440px;
`;

const SpinnerWrapper = styled.div`
  margin: 200px;
  display: flex;
  justify-content: center;
`;

const HomeText = styled(Text)`
  margin-bottom: 24px;
`;

export { HomeWrapper, PhonesWrapper, SpinnerWrapper, HomeText };
