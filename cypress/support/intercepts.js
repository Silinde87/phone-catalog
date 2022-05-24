import { API } from '../../src/globals/constants';

const interceptPhonesList = () => {
  cy.intercept({
    method: 'GET',
    url: `/api${API.PHONES}`,
    hostname: 'phone-catalog-dcsl.herokuapp.com',
  }).as('phonesList');
};

const interceptCreatePhone = () => {
  cy.intercept({
    method: 'POST',
    url: `/api${API.PHONES}`,
    hostname: 'phone-catalog-dcsl.herokuapp.com',
  }).as('createPhone');
};

export default { interceptPhonesList, interceptCreatePhone };
