export const ROUTES = {
  HOME: '/',
  PHONE: '/phone/:id',
  PHONE_WITH_ID: (phoneId) => `/phone/${phoneId}`,
};

export const API = {
  PHONES: '/phones',
  UPDATE_PHONE: (phoneId) => `/phones/${phoneId}`,
  DELETE_PHONE: (phoneId) => `/phones/${phoneId}`,
};
