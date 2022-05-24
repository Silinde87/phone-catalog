import '@testing-library/cypress/add-commands';

Cypress.Commands.add('fillNewPhoneDetails', (phone, hasError = false) => {
  const {
    manufacturer,
    name,
    color,
    price,
    screen,
    screenResolution,
    processor,
    ram,
    camera,
    battery,
    storage,
    description,
  } = phone;
  cy.get('#manufacturer').type(manufacturer);
  cy.get('#name').type(name);
  cy.get('#color').type(color);
  cy.get('#price').type(price);
  cy.get('#screen').type(screen);
  cy.get('#screenResolution').type(screenResolution);
  cy.get('#processor').type(processor);
  cy.get('#ram').type(ram);
  cy.get('#camera').type(camera);
  cy.get('#battery').type(battery);
  cy.get('#storage').type(storage);
  if (!hasError) {
    cy.get('#description').type(description);
  }
});
