import { ROUTES } from '../../globals/constants';
import {
  interceptPhonesList,
  interceptEditPhone,
  interceptDeletePhone,
} from './../../../cypress/support/intercepts';

const viewportSizes = ['macbook-13'];
let phoneId;

viewportSizes.forEach((viewport) => {
  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop();
    }
  });

  describe('Phone Detail Page', () => {
    beforeEach(() => {
      interceptPhonesList();
      interceptEditPhone();
      interceptDeletePhone();
      cy.viewport(viewport);
    });
    it('should show the details of a phone by clicking his phone card', () => {
      cy.visit(ROUTES.HOME);
      cy.wait(['@phonesList']).then(() => {
        cy.get('[data-testid="search-input"]').type('test');
        cy.wait(1000);
        cy.get('[data-testid="phone-card"]').click();
      });
    });

    it('should be able to edit the phone details', () => {
      cy.get('[data-testid="edit-btn"]').click();
      cy.get('#name').clear().type('test2');
      cy.get('[data-testid="save-btn"]').click();
      cy.wait(['@editPhone']).then(({ response }) => {
        phoneId = response.body.message.split(' ')[2];
      });
      cy.get('[data-testid="phone-name-title"]').should('include.text', 'test2');
    });

    it('should be able delete a phone', () => {
      cy.get('[data-testid="delete-btn"]').click();
      cy.get('[data-testid="yes-btn"]').click();
      cy.wait(['@deletePhone']).then(() => {
        cy.url().should('include', ROUTES.HOME);
      });
    });
  });
});
