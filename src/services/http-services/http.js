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

  /**
   * @name PUT
   * @description make a PUT request
   * @param {Object} options - options to make the PUT resquest.
   * @param {string} options.path - the path for the PUT request.
   * @param {Object} options.data - Object with body values.
   */
  const PUT = (options) => {
    const path = buildPath(options);
    return fetch(path, {
      method: 'PUT',
      body: JSON.stringify(options.data),
      ...configServices,
    })
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  };

  /**
   * @name DELETE
   * @description make a DELETE request
   * @param {Object} options - options to make the DELETE resquest.
   * @param {string} options.path - the path for the DELETE request.
   */
  const DELETE = (options) => {
    const path = buildPath(options);
    return fetch(path, {
      method: 'DELETE',
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
    PUT,
    DELETE,
  };
};

export default httpServices();
