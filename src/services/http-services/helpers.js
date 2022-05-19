const apiUrl = 'https://phone-catalog-dcsl.herokuapp.com/api';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

/**
 * @name buildPath
 * @description create the api path
 */
function buildPath({ path }) {
  return apiUrl + path;
}

export { defaultHeaders, buildPath };
