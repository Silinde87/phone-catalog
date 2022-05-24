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

const interceptEditPhone = () => {
  cy.intercept({
    method: 'PUT',
    hostname: 'phone-catalog-dcsl.herokuapp.com',
  }).as('editPhone');
};

const interceptDeletePhone = () => {
  cy.intercept({
    method: 'DELETE',
    hostname: 'phone-catalog-dcsl.herokuapp.com',
  }).as('deletePhone');
};

export default {
  interceptPhonesList,
  interceptCreatePhone,
  interceptEditPhone,
  interceptDeletePhone,
};
