import { ROUTES } from '../../globals/constants';
import { interceptPhonesList } from './../../../cypress/support/intercepts';
const viewportSizes = ['macbook-13'];

viewportSizes.forEach((viewport) => {
  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop();
    }
  });

  describe('Home Page', () => {
    beforeEach(() => {
      interceptPhonesList();
      cy.viewport(viewport);
    });
    it('should show a list of phone retrieved from API', () => {
      cy.visit(ROUTES.HOME);
      cy.wait(['@phonesList']);
      cy.url().should('include', ROUTES.HOME);
    });
  });
});
