import { API } from '../globals/constants';
import http from './http-services/http';

const PhoneService = () => {
  const getAllPhones = (options) => {
    return http
      .get({ path: API.PHONES, ...options })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  };
  return { getAllPhones };
};

export default PhoneService();
