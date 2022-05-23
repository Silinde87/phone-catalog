import { createRef, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactContext } from '../../../context/Context';
import { ROUTES } from '../../../globals/constants';
import Phone from '../component/Phone';
import PhoneService from '../../../services/PhoneService';
import { isAnyFieldEmpty, isPriceTypeNumber, isPriceValid } from '../aux/PhoneValidations';

const PhonePage = () => {
  const { phonesState, setPhonesState } = useReactContext();
  const { selectedPhone, phones } = phonesState;

  const navigate = useNavigate();

  const modalDeleteRef = createRef();
  const modalPhoneRef = createRef();
  const refs = { modalDeleteRef, modalPhoneRef };

  useEffect(() => {
    // Redirect to home if detail page is not accessed through home
    if (!selectedPhone) {
      navigate(ROUTES.HOME);
    }
  }, [selectedPhone]);

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleEditClick = () => {
    // console.log('edit');
  };
  const handleDeleteClick = () => {
    PhoneService.deletePhone(selectedPhone.id)
      .then(() => {
        const newPhones = phones.filter((phone) => phone.id !== selectedPhone.id);
        setPhonesState((prevState) => ({
          ...prevState,
          phones: newPhones,
          selectedPhone: null,
        }));
        handleCloseModalDelete();
        navigate(ROUTES.HOME);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        handleCloseModalDelete();
      });
  };
  const handleOpenModalDelete = () => {
    modalDeleteRef.current.showModal();
    document.querySelector('[data-testid="yes-btn"]').blur();
  };

  const handleCloseModalDelete = () => {
    modalDeleteRef.current.close();
    document.querySelector('[data-testid="delete-btn"]').blur();
  };

  const handleOpenModalPhone = () => {
    modalPhoneRef.current.showModal();
  };

  const handleCloseModalPhone = () => {
    modalPhoneRef.current.close();
    document.querySelector('[data-testid="edit-btn"]').blur();
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
    };

    if (!isPriceValid(data.price) || isAnyFieldEmpty(data)) {
      return;
    }
  };

  return (
    <Phone
      handleBackClick={handleBackClick}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}
      handleOpenModalDelete={handleOpenModalDelete}
      handleCloseModalDelete={handleCloseModalDelete}
      handleOpenModalPhone={handleOpenModalPhone}
      handleCloseModalPhone={handleCloseModalPhone}
      handleSubmitModalPhone={handleSubmitModalPhone}
      ref={refs}
    />
  );
};

export default PhonePage;
