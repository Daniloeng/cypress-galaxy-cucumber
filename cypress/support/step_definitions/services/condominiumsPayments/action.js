import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Clicks on {string} button in sidebar on condiminium payments`, (action) => {
    cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/assets/assetcondominium/**`, (req) => { }).as('acceptanceCondominiumPay')
    cy.intercept('.p-sidebar').as('sideBar')
    cy.get('.sidebar-footer').should('be.visible').contains(action).click()
});

When(`Filters by {string} in the PayerBankAccout field of the Condominiums Payments table screen`, (payerBankAccout) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByPayerBankAccout');
    cy.get('[datacy="payerBankAccountIban"]', { timeout: 20000 }).should('be.visible').click().type(payerBankAccout);
});

When(`Filters by {string} in the Payer Entity field of the Condominiums Payments table screen`, (payerBankAccout) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByPayerEntity');
    cy.get('[datacy="payerName"]', { timeout: 20000 }).should('be.visible').click().type(payerBankAccout);
}); 

When(`Filters by {string} in the Payer Entity field of the Condominiums Payments table screen`, (payerBankAccout) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByPayerEntity');
    cy.get('[datacy="payerName"]', { timeout: 20000 }).should('be.visible').click().type(payerBankAccout);
}); 

When(`Filters by {string} in the Payment Type field of the Condominiums Payments table screen`, (paymentType) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByPaymentType');
    cy.get('.p-multiselect-items-wrapper', { timeout: 20000 }).should('be.visible').contains(paymentType).click();    
}); 

When(`Clicks on Payment Type`, () => {
    cy.get('.p-datatable-thead > :nth-child(2) > :nth-child(7)', { timeout: 20000 }).should('be.visible').click();    
}); 