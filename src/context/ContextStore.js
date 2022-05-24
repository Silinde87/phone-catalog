/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import PhoneService from '../services/PhoneService';
import { ContextProvider } from './Context';

export const initPhonesState = {
  phones: [],
  selectedPhone: null,
};

// eslint-disable-next-line react/prop-types
export default ({ children = null }) => {
  const [phonesState, setPhonesState] = useState(initPhonesState);

  useEffect(() => {
    // Getting all phones on first load
    if (phonesState.phones.length === 0) {
      PhoneService.getAllPhones().then((phones) => {
        setPhonesState((prevState) => ({
          ...prevState,
          phones,
        }));
      });
    }
  }, []);

  return <ContextProvider value={{ phonesState, setPhonesState }}>{children}</ContextProvider>;
};
