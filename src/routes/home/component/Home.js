import { bool, func, array, any } from 'prop-types';
import { useEffect, useState } from 'react';
import { InputVariant } from '../../../components/atoms/Input/Input.types';
import { TextTypes } from '../../../components/atoms/Text';
import { ModalPhone } from '../../../components/molecules';
import { PhoneCard, Input, Spinner } from './../../../components/atoms';
import {
  AddIcon,
  HomeInputSearchWrapper,
  HomeTitle,
  HomeWrapper,
  NoMorePhonesText,
  PhonesWrapper,
  SpinnerWrapper,
} from './Home.styled';

function Home({
  handleChange,
  handlePhoneClick,
  handleAddClick,
  filteredPhones,
  isContentLoaded,
  modalPhoneRef,
  handleCloseModalPhone,
  handleSubmitModalPhone,
  hasError,
  ...otherProps
}) {
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
          <HomeInputSearchWrapper>
            <Input
              dataTestId="search-input"
              placeholder="Search your phone..."
              onChange={handleChange}
              variant={InputVariant.SEARCH}
            />
            <AddIcon src="/images/add.svg" data-testid="add-icon" onClick={handleAddClick} />
          </HomeInputSearchWrapper>
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
                    id={phone.id}
                    onClick={handlePhoneClick}
                  />
                );
              })}
            </PhonesWrapper>
          ) : (
            <NoMorePhonesText data-testid="empty-phones-text">
              I could not find any phone with that name 🥲
            </NoMorePhonesText>
          )}
        </>
      ) : (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      <ModalPhone
        ref={modalPhoneRef}
        handleCloseModal={handleCloseModalPhone}
        handleSubmitModalPhone={handleSubmitModalPhone}
        hasError={hasError}
      />
    </HomeWrapper>
  );
}

Home.propTypes = {
  handleChange: func,
  handlePhoneClick: func,
  handleAddClick: func,
  filteredPhones: array,
  isContentLoaded: bool,
  modalPhoneRef: any,
  handleCloseModalPhone: func,
  handleSubmitModalPhone: func,
  hasError: bool,
};

export default Home;
