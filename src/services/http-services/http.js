import { defaultHeaders, buildPath } from './helpers';

const httpServices = () => {
  const options = {
    headers: defaultHeaders,
  };

  /**
   * @name get
   * @description make a GET request
   * @param {Object} options - options to make the GET resquest.
   */
  const get = (options) => {
    const path = buildPath(options);
    return fetch(path, {
      method: 'GET',
      ...options,
    })
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  };

  return {
    get,
  };
};

export default httpServices();
