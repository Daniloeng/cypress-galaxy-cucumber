import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Legal Case Proposals created is showed`, () => {
    cy.get('.page-header').should('be.visible');
    cy.get('[class^="Tile_title-items__"]').should('exist').should('contain', 'Legal');
});

Then(`Only Legal Cases with this {string} Type should displayed in the list`, (type) => {
    cy.wait('@defaultLegalCases', { timeout: 20000 });
    cy.get('table').find('td div[datacy="legalCaseTypeDescription"]').should('be.visible')
      .each((cell) => {
        cy.wrap(cell).should('contain', type);
      });
});
  
Then(`The texts Legal Case Type should presented in Descending order`, () => {
    cy.wait('@defaultLegalCases', { timeout: 20000 }).verifyTextColumnOrder('legalCaseTypeDescription', 'desc');
});
  
Then(`The texts Legal Case Type should presented in Ascending order`, () => {
    cy.wait('@defaultLegalCases').verifyTextColumnOrder('legalCaseTypeDescription', 'asc');
});

Then(`The texts Number should presented in Descending order`, () => {
    cy.wait('@defaultLegalCases', { timeout: 20000 }).verifyTextColumnOrder('number', 'desc');
});
  
Then(`The texts Number should presented in Ascending order`, () => {
    cy.wait('@defaultLegalCases').verifyTextColumnOrder('number', 'asc');
});
