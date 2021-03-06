import { API } from '../globals/constants';
import http from './http-services/http';

const PhoneService = () => {
  const getAllPhones = () => {
    return http
      .GET({ path: API.PHONES })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  };

  const createPhone = (data) => {
    data.imageFileName = '/images/defaultPhone.svg';
    return http
      .POST({ path: API.PHONES, data })
      .then((response) => {
        delete response.createdAt;
        delete response.updatedAt;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };

  const updatePhone = (phoneId, data) => {
    return http
      .PUT({ path: API.UPDATE_PHONE(phoneId), data })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  };

  const deletePhone = (phoneId) => {
    return http
      .DELETE({ path: API.DELETE_PHONE(phoneId) })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  };

  return { getAllPhones, createPhone, updatePhone, deletePhone };
};

export default PhoneService();
