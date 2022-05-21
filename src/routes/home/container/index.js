import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactContext } from '../../../context/Context';
import { ROUTES } from '../../../globals/constants';
import Home from '../component/Home';

function HomePage({ ...otherProps }) {
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  const { phonesState, setPhonesState } = useReactContext();
  const navigate = useNavigate();

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

  const handleClick = (id) => {
    const selectedPhone = phonesState.phones.find((phone) => phone.id === id);
    setPhonesState((prevState) => ({
      ...prevState,
      selectedPhone,
    }));
    navigate(ROUTES.PHONE_WITH_ID(id));
  };

  return (
    <Home
      handleChange={handleChange}
      handleClick={handleClick}
      filteredPhones={filteredPhones}
      isContentLoaded={isContentLoaded}
      {...otherProps}
    />
  );
}

export default HomePage;
