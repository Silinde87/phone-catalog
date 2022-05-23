import { createRef, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactContext } from '../../../context/Context';
import { ROUTES } from '../../../globals/constants';
import Phone from '../component/Phone';
import PhoneService from '../../../services/PhoneService';

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
