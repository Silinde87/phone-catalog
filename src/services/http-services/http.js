import { defaultHeaders, buildPath } from './helpers';

const httpServices = () => {
  const configServices = {
    headers: defaultHeaders,
  };

  /**
   * @name GET
   * @description make a GET request
   * @param {Object} options - options to make the GET resquest.
   * @param {string} options.path - the path for the GET request.
   */
  const GET = (options) => {
    const path = buildPath(options);
    return fetch(path, {
      method: 'GET',
      ...configServices,
    })
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  };

  /**
   * @name POST
   * @description make a POST request
   * @param {Object} options - options to make the POST resquest.
   * @param {string} options.path - the path for the POST request.
   * @param {Object} options.data - Object with body values.
   */
  const POST = (options) => {
    const path = buildPath(options);
    return fetch(path, {
      method: 'POST',
      body: JSON.stringify(options.data),
      ...configServices,
    })
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  };

  return {
    GET,
    POST,
  };
};

export default httpServices();
