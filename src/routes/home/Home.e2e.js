import { ROUTES } from '../../globals/constants';
import { interceptPhonesList, interceptCreatePhone } from './../../../cypress/support/intercepts';
import { phone } from '../../../cypress/support/mocks';
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
      interceptCreatePhone();
      cy.viewport(viewport);
    });
    it('should show a list of phone retrieved from API', () => {
      cy.visit(ROUTES.HOME);
      cy.wait(['@phonesList']).then(() => {
        cy.url().should('include', ROUTES.HOME);
        cy.get('[data-testid="phone-card"]').within((cards) => {
          expect(cards).to.have.length(30);
        });
      });
    });
    it('should be able to type a phone name and see the results of the query', () => {
      cy.get('[data-testid="search-input"]').type('omnia');
      cy.wait(1000);
      cy.get('[data-testid="phone-card"]').within((cards) => {
        expect(cards).to.have.length(2);
      });
    });
    it('should be able to type a non existent phone name and see the results of the query', () => {
      cy.get('[data-testid="search-input"]').clear();
      cy.get('[data-testid="search-input"]').type('non-existent-phone');
      cy.wait(1000);
      cy.get('[data-testid="empty-phones-text"]');
    });
    it('should be able create a phone and get redirect to phone details page', () => {
      cy.get('[data-testid="add-icon"]').click();
      cy.fillNewPhoneDetails(phone);
      cy.findByTestId('save-btn').click();

      cy.wait(['@createPhone']).then(({ response }) => {
        cy.url().should('include', ROUTES.PHONE_WITH_ID(response.body.id));
      });
    });
  });
});
