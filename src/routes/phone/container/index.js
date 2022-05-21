import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactContext } from '../../../context/Context';
import { ROUTES } from '../../../globals/constants';
import Phone from '../component/Phone';

const PhonePage = () => {
  const { phonesState } = useReactContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if detail page is not accessed through home
    if (!phonesState.selectedPhone) {
      navigate(ROUTES.HOME);
    }
  }, [phonesState.selectedPhone]);

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleEditClick = () => {
    //console.log('edit');
  };
  const handleDeleteClick = () => {
    //console.log('remove');
  };

  return (
    <Phone
      selectedPhone={phonesState.selectedPhone}
      handleBackClick={handleBackClick}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}
    />
  );
};

export default PhonePage;
