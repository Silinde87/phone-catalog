import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactContext } from '../../../context/Context';
import { ROUTES } from '../../../globals/constants';
import Phone from '../component/Phone';

function PhonePage() {
  const { phonesState } = useReactContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if detail page is not accessed through home
    if (!phonesState.selectedPhone) {
      navigate(ROUTES.HOME);
    }
  }, [phonesState.selectedPhone]);

  return <Phone selectedPhone={phonesState.selectedPhone} />;
}

export default PhonePage;
