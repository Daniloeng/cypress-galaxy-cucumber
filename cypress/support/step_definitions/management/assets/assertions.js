
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`A new proposal real estate is successfully created in Draft status`, () => {
  cy.get('span.ent-generic > b').should('include.text', 'Draft');
});

Then(`The page of the proposal shold be showed`, () => {
  cy.get('[class*="Tile_title"] > .text-label').contains('Proposal').should('exist');
});

Then(`Wait for filter is applied in the Asset table`, () => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/managerperspective**`).as('filterAsset');
  cy.wait('@filterAsset');
});

Then(`Only Asset with this {string} Id should displayed in the list`, (type) => {
  cy.wait('@defaultAsset', { timeout: 10000 });
  cy.get('table').find('td div[datacy="id"]').should('be.visible')
    .should('contain', type);
});

Then(`Only Assets with this {string} Type should displayed in the list`, (status) => {
  cy.wait('@defaultAsset', { timeout: 10000 });
  cy.get('table').find('td div[datacy="typeDescription"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', status);
    });
});

Then(`Only Assets with this {string} Status should displayed in the list`, (status) => {
  cy.wait('@defaultAsset', { timeout: 10000 });
  cy.get('table').find('td div[datacy="assetStatusDescription"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', status);
    });
});

Then(`Only Assets with this {string} Portfolio should displayed in the list`, (portfolio) => {
  cy.wait('@defaultAsset', { timeout: 10000 });
  cy.get('table').find('td div[datacy="portfolioNames"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', portfolio);
    });
});

Then(`Only Assets with this {string} Reason should displayed in the list`, (reason) => {
  cy.wait('@defaultAsset', { timeout: 10000 });
  cy.get('table').find('td div[datacy="assetStatusReason"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', reason);
    });
});

Then(`The Assets should presented in Descending order`, () => {
  cy.wait('@defaultAsset', { timeout: 10000 }).verifyNumberColumnOrder('td div[datacy="id"]', 'desc');
});

Then(`The Assets should presented in Ascending order`, () => {
  cy.wait('@defaultAsset').verifyNumberColumnOrder('td div[datacy="id"]', 'asc');
});

Then(`The texts Assets should presented in Descending order`, () => {
  cy.wait('@defaultAsset', { timeout: 10000 }).verifyTextColumnOrder('td div[datacy="typeDescription"]', 'desc');
});

Then(`The texts Assets should presented in Ascending order`, () => {
  cy.wait('@defaultAsset').verifyTextColumnOrder('td div[datacy="typeDescription"]', 'asc');
});

