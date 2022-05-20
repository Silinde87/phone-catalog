import { useEffect } from 'react';
import { useReactContext } from '../../context/Context';
import PhoneService from './../../services/PhoneService';

function Home() {
  const { phonesState, setPhonesState } = useReactContext();

  useEffect(() => {
    if (phonesState.phones.length === 0) {
      PhoneService.getAllPhones().then((phones) => {
        setPhonesState((prevState) => ({
          ...prevState,
          phones,
        }));
      });
    }
  }, []);

  return (
    <div>
      <div>React App Template</div>
    </div>
  );
}

export default Home;
