import { When } from "@badeball/cypress-cucumber-preprocessor";
  
When('Fill debt sidebar for editing porpuses', () => {
    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/debts/lookup/debttype**`, (req) => { }).as('debtTypeLookupLoad');
    cy.intercept('PUT', `${Cypress.env('BASE_URL')}/api/portfolios/**`, (req) => { }).as('debtEdited');  
    cy.wait('@debtTypeLookupLoad').get('#typeId > .gx-select__control > .gx-select__indicators > .gx-select__loading-indicator').should('not.exist', { timeout: 15000 })
    cy.get('#typeId').click();
    cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
      .get(".gx-select__option", { timeout: 15000 }).eq(2).click({ force: true });
    cy.get('.gx-select__loading-indicator').should('not.exist', { timeout: 15000 })
    cy.get('#productId').click();
    cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
        .get(".gx-select__option", { timeout: 15000 }).eq(2).click({ force: true });    
  });