import { bool, func, array } from 'prop-types';
import { useEffect, useState } from 'react';
import { TextTypes } from '../../../components/atoms/Text';
import { PhoneCard, InputSearch, Spinner } from './../../../components/atoms';
import {
  HomeTitle,
  HomeWrapper,
  NoMorePhonesText,
  PhonesWrapper,
  SpinnerWrapper,
} from './Home.styled';

function Home({ handleChange, handleClick, filteredPhones, isContentLoaded, ...otherProps }) {
  const maxPhonesToShow = 30;
  const [phonesToShow, setPhonesToShow] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (filteredPhones.length > 0) {
      setPhonesToShow(filteredPhones.slice(0, maxPhonesToShow));
    } else {
      setPhonesToShow([]);
    }
  }, [filteredPhones]);

  const fetchMorePhones = () => {
    const previowsIndex = phonesToShow.length;
    const nextIndex = phonesToShow.length + maxPhonesToShow;
    const newPhonesToShow = phonesToShow.concat(filteredPhones.slice(previowsIndex, nextIndex));
    setPhonesToShow(newPhonesToShow);

    if (phonesToShow.length >= filteredPhones.length) {
      setHasMore(false);
    }
  };

  return (
    <HomeWrapper {...otherProps}>
      <HomeTitle as={TextTypes.H1}>The Phone Catalog</HomeTitle>
      {isContentLoaded ? (
        <>
          <InputSearch placeholder="Search your phone..." onChange={handleChange} />
          {phonesToShow.length ? (
            <PhonesWrapper
              dataLength={phonesToShow.length}
              next={fetchMorePhones}
              hasMore={hasMore}
              loader={<h4>Loading more phones...</h4>}
            >
              {phonesToShow.map((phone, index) => {
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
          ) : (
            <NoMorePhonesText>I could not find any phone with that name 🥲</NoMorePhonesText>
          )}
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
