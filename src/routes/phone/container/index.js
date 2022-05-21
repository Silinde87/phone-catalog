import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactContext } from '../../../context/Context';
import { ROUTES } from '../../../globals/constants';
import Phone from '../component/Phone';
import PhoneService from '../../../services/PhoneService';

const PhonePage = () => {
  const { phonesState, setPhonesState } = useReactContext();
  const { selectedPhone, phones } = phonesState;
  const navigate = useNavigate();

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
    //console.log('edit');
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
        navigate(ROUTES.HOME);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Phone
      selectedPhone={selectedPhone}
      handleBackClick={handleBackClick}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}
    />
  );
};

export default PhonePage;
