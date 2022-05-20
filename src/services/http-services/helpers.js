const apiUrl = 'https://phone-catalog-dcsl.herokuapp.com/api';

const defaultHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
});

/**
 * @name buildPath
 * @description create the api path
 */
function buildPath({ path }) {
  return apiUrl + path;
}

export { defaultHeaders, buildPath };
