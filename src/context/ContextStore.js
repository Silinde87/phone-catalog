/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { ContextProvider } from './Context';

export const initPhonesState = {
  phones: [],
  selectedPhone: {},
};

// eslint-disable-next-line react/prop-types
export default ({ children = null }) => {
  const [phonesState, setPhonesState] = useState(initPhonesState);
  return <ContextProvider value={{ phonesState, setPhonesState }}>{children}</ContextProvider>;
};
