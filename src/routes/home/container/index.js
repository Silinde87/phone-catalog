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
    modalPhoneRef.current.close();
  };

  const handleSubmitModalPhone = (event) => {
    event.preventDefault();

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
      imageFileName: '/',
    };

    if (!isPriceValid(data.price) || isAnyFieldEmpty(data)) {
      // TODO: Implement message error validation
      return;
    }

    PhoneService.createPhone(data)
      .then((res) => {
        const newPhone = { ...res };
        delete newPhone.createdAt;
        delete newPhone.updatedAt;
        PhoneService.getAllPhones().then((phones) => {
          setPhonesState((prevState) => ({
            ...prevState,
            phones,
            selectedPhone: newPhone,
          }));
          handleCloseModalPhone();
          navigate(ROUTES.PHONE_WITH_ID(newPhone.id));
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
      {...otherProps}
    />
  );
}

export default HomePage;
