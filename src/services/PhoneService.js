import { API } from '../globals/constants';
import http from './http-services/http';

const PhoneService = () => {
  const getAllPhones = (options) => {
    return http
      .GET({ path: API.PHONES, ...options })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  };

  const createPhone = (data) => {
    return http
      .POST({ path: API.PHONES, data })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  };
  return { getAllPhones, createPhone };
};

export default PhoneService();
