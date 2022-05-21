import { bool, func, array } from 'prop-types';
import { TextTypes } from '../../../components/atoms/Text';
import { PhoneCard, InputSearch, Spinner } from './../../../components/atoms';
import { HomeText, HomeWrapper, PhonesWrapper, SpinnerWrapper } from './Home.styled';

function Home({ handleChange, handleClick, filteredPhones, isContentLoaded }) {
  return (
    <HomeWrapper>
      <HomeText as={TextTypes.H1}>The Phone Catalog</HomeText>
      {isContentLoaded ? (
        <>
          <InputSearch placeholder="Search your phone..." onChange={handleChange} />
          <PhonesWrapper>
            {filteredPhones.map((phone, index) => {
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
  filteredPhones: array,
  isContentLoaded: bool,
};

export default Home;
