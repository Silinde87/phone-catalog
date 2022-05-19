const apiUrl = 'https://phone-catalog-dcsl.herokuapp.com/api';

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type',
};

/**
 * @name buildPath
 * @description create the api path
 */
function buildPath({ path }) {
  return apiUrl + path;
}

export { defaultHeaders, buildPath };
