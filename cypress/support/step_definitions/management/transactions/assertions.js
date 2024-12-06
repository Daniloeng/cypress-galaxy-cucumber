import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Only Transactions with this {string} Id should displayed in the list`, (id) => {
    cy.get('table').find('td div[datacy="id"]').should('be.visible')
      .should('contain', id);
});
  
Then(`Only Transactions with this {string} Group should displayed in the list`, (group) => {
    cy.get('table').find('td div[datacy="transactionGroupName"]').should('be.visible')
      .each((cell) => {
        cy.wrap(cell).should('contain', group);
      });
  });
  
Then(`Only Transactions with this {string} Type should displayed in the list`, (type) => {
    cy.get('table').find('td div[datacy="transactionTypeName"]').should('be.visible')
      .each((cell) => {
        cy.wrap(cell).should('contain', type);
      });
});
  
Then(`Only Transactions with this {string} Posted By should displayed in the list`, (type) => {
    cy.get('table').find('td div[datacy="createdByName"]').should('be.visible')
      .each((cell) => {
        cy.wrap(cell).should('contain', type);
      });
});
  
Then(`Only Transactions with this {string} Is Interim Transaction should displayed in the list`, (isIterim) => {    
  cy.wait('@filterApplied', { timeout: 50000 });
  cy.get('table').find('td div[datacy="isInterimTransaction"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', isIterim);
    });
});

Then(`Only Transactions with this {string} Effective Allocation should displayed in the list`, (option) => {    
  cy.wait('@filterApplied', { timeout: 50000 });
  cy.get('table').find('td div[datacy="effectiveAllocation"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', option);
    });
});
