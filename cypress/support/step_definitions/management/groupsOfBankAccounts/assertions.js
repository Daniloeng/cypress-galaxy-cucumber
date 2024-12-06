
import { Then } from "@badeball/cypress-cucumber-preprocessor";


Then(`Check if the Bank Account Group was created`, () => {
  cy.wait('@createdBankAccGroup', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
  cy.get('.page-header').contains('automationGroupTest').should('be.ok')
});

Then(`Check if Bank Account was added`, () => {
  cy.reload()
  cy.get('.p-datatable-tbody', { timeout: 20000 }).should('contain', 'Palavras Colossais, S.A');
  // remove bank account
  cy.get('.gx-dt-datatable-currency-font').should('be.visible').click();
  cy.get('.p-toolbar').contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').should('be.visible').click()
});

Then(`Only Group Of Bank Account with this {string} Name should displayed in the list`, (type) => {
  cy.wait('@filterByName').get('table').find('td div[datacy="name"]').should('be.visible')
      .should('contain', type);
});

Then(`Only Group Of Bank Account with this {string} number of Bank Accounts should displayed in the list`, (type) => {
  cy.wait('@filterByNmberOfBankAcc').get('table').find('td div[datacy="numberOfbankAccounts"]').should('be.visible')
      .should('contain', type);
});

Then(`Only Groups Of Bank Accounts with this {string} should displayed in the list`, (type) => {
  cy.wait('@filterStatus').get('table').find('td div[datacy="bankAccountGroupStatus"]').should('be.visible')
      .should('contain', type);
});
