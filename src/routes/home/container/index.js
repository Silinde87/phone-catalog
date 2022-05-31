/* eslint-disable no-console */
import { createRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactContext } from '../../../context/Context';
import { ROUTES } from '../../../globals/constants';
import { isAnyFieldEmpty, isPriceValid } from '../../phone/aux/PhoneValidations';
import Home from '../component/Home';
import PhoneService from '../../../services/PhoneService';

function HomePage({ ...otherProps }) {
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { phonesState, setPhonesState } = useReactContext();
  const navigate = useNavigate();

  const modalPhoneRef = createRef();

  useEffect(() => {
    if (phonesState.phones.length > 0) {
      setIsContentLoaded(true);
      setFilteredPhones(phonesState.phones);
    }
  }, [phonesState.phones]);

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    const newFilteredPhones = phonesState.phones.filter((phone) =>
      phone.name.toLowerCase().includes(value)
    );
    setFilteredPhones(newFilteredPhones);
  };

  const handlePhoneClick = (id) => {
    const selectedPhone = phonesState.phones.find((phone) => phone.id === id);
    setPhonesState((prevState) => ({
      ...prevState,
      selectedPhone,
    }));
    navigate(ROUTES.PHONE_WITH_ID(id));
  };

  const handleAddClick = () => {
    modalPhoneRef.current.showModal();
  };

  const handleCloseModalPhone = () => {
    setHasError(false);
    setIsLoading(false);
    modalPhoneRef.current.close();
  };

  const handleSubmitModalPhone = (event) => {
    event.preventDefault();
    if (isLoading) {
      return;
    }

    setHasError(false);
    setIsLoading(true);

    const data = {
      manufacturer: event.target.manufacturer.value,
      name: event.target.name.value,
      color: event.target.color.value,
      price: Number(event.target.price.value),
      screen: event.target.screen.value,
      screenResolution: event.target.screenResolution.value,
      processor: event.target.processor.value,
      ram: event.target.ram.value,
      camera: event.target.camera.value,
      battery: event.target.battery.value,
      storage: event.target.storage.value,
      description: event.target.description.value,
    };

    if (!isPriceValid(data.price) || isAnyFieldEmpty(data)) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    PhoneService.createPhone(data)
      .then((res) => {
        PhoneService.getAllPhones().then((phones) => {
          setPhonesState((prevState) => ({
            ...prevState,
            phones,
            selectedPhone: res,
          }));
          setIsLoading(false);
          navigate(ROUTES.PHONE_WITH_ID(res.id));
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Home
      handleChange={handleChange}
      handlePhoneClick={handlePhoneClick}
      handleAddClick={handleAddClick}
      filteredPhones={filteredPhones}
      isContentLoaded={isContentLoaded}
      modalPhoneRef={modalPhoneRef}
      handleCloseModalPhone={handleCloseModalPhone}
      handleSubmitModalPhone={handleSubmitModalPhone}
      hasError={hasError}
      isLoading={isLoading}
      {...otherProps}
    />
  );
}

export default HomePage;
