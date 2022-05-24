import { ROUTES } from '../../globals/constants';
import { interceptPhonesList, interceptCreatePhone } from './../../../cypress/support/intercepts';
const viewportSizes = ['macbook-13'];

const phone = {
  manufacturer: 'test',
  name: 'test',
  color: 'test',
  price: 123,
  screen: 'test',
  screenResolution: 'test',
  processor: 'test',
  ram: 'test',
  camera: 'test',
  battery: 'test',
  storage: 'test',
  description: 'test',
};
const hasError = true;

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
      cy.wait(['@phonesList']);
      cy.url().should('include', ROUTES.HOME);
      cy.get('[data-testid="phone-card"]').within((cards) => {
        expect(cards).to.have.length(30);
      });
    });
    it('should be able to type a phone name and see the results of the query', () => {
      cy.get('[data-testid="search-input"]').type('omnia');
      cy.get('[data-testid="phone-card"]').within((cards) => {
        expect(cards).to.have.length(2);
      });
    });
    it('should be able to type a non existent phone name and see the results of the query', () => {
      cy.get('[data-testid="search-input"]').clear();
      cy.get('[data-testid="search-input"]').type('non-existent-phone');
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
