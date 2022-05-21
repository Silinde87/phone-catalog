import { func } from 'prop-types';
import { TextTypes } from '../../../components/atoms/Text';
import { PhoneCard, InputSearch, Spinner } from './../../../components/atoms';
import { useReactContext } from './../../../context/Context';
import { HomeText, HomeWrapper, PhonesWrapper, SpinnerWrapper } from './Home.styled';

function Home({ handleChange, handleClick }) {
  const { phonesState } = useReactContext();
  return (
    <HomeWrapper>
      <HomeText as={TextTypes.H1}>The Phone catalog</HomeText>
      {phonesState.phones.length > 0 ? (
        <>
          <InputSearch placeholder="Search your phone..." onChange={handleChange} />
          <PhonesWrapper>
            {phonesState.phones.map((phone, index) => {
              return (
                <PhoneCard
                  key={index}
                  src={phone.imageFileName}
                  name={phone.name}
                  onClick={handleClick}
                />
              );
            })}
          </PhonesWrapper>
        </>
      ) : (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </HomeWrapper>
  );
}

Home.propTypes = {
  handleChange: func,
  handleClick: func,
};

export default Home;
