import { useEffect, useState } from 'react';
import { useReactContext } from '../../../context/Context';
import Home from '../component/Home';

function HomePage({ ...otherProps }) {
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  const { phonesState } = useReactContext();

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

  const handleClick = (name) => {
    // console.log('from home', name);
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
