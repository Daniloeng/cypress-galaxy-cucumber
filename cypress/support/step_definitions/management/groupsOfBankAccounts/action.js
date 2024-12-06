import { Given, When, Step } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker"; 

When('Clicks on Add button in Groups Of Bank Accounts', () => {
  cy.get('.p-toolbar').should('be.visible').contains('Add').click()
});

When('Fill bank account group sidebar', () => {
  cy.get('#name').type('automationGroupTest' + faker.number.int({ min: 44, max: 77 }))
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/finance/bankaccountgroups`, (req) => { }).as('createdBankAccGroup');
});

When('Add a bank account', () => {
  cy.get('.p-toolbar', {timeout:33000}).should('be.visible').contains('Add').click({force: true})
  cy.get('.gx-select__loading-indicator').should('not.exist', { timeout: 15000 })
  cy.get('#id > .gx-select__control', {timeout:15000}).should('be.visible').type('Palavras Colossais, S.A')
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(0).click({ force: true });
});

When(`Filters by {string} in the Name field of the Groups Of Bank Accounts table screen`, (name) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/finance/bankaccountgroups?**`).as('filterByName');
  cy.get('[datacy="name"]', { timeout: 20000 }).should('be.visible').click().type(name);
});

When(`Filters by {string} in the Bank Accounts field of the Groups Of Bank Accounts table screen`, (numberOfBankAccs) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/finance/bankaccountgroups?**`).as('filterByNmberOfBankAcc');
  cy.get('[datacy="numberOfbankAccounts"]', { timeout: 20000 }).should('be.visible').click().type(numberOfBankAccs);
});

When(`Filters by {string} in the Status field of the Groups Of Bank Accounts table screen`, (status) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/finance/bankaccountgroups?**`).as('filterStatus');
  cy.get('[datacy="bankAccountGroupStatusId"]', { timeout: 20000 }).should('be.visible').click()
  cy.get('.p-multiselect-panel').eq(0).click()
});