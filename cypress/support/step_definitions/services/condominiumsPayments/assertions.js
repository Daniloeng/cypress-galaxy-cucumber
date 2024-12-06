import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Intercepts the all Condominiums Payments are shown`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/condominiumspayments?filters=all+equ+true**`).as('allCondominiumsPayments');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/condominiumspayments?filters=current+equ+true**`).as('currentCondominiumsPayments');
});

Then(`Waits the all Condominiums Payments are shown`, () => {
    cy.wait('@allCondominiumsPayments', { timeout: 40000 });
    cy.wait(500); //just to wait for the data to be presented
});

Then(`Waits the current Condominiums Payments are shown`, () => {
    cy.wait('@currentCondominiumsPayments', { timeout: 40000 });
    cy.wait(500); //just to wait for the data to be presented
});

Then(`Only Condominium Payments with this {string} PayerBankAccout should displayed in the list`, (payerBankAccout) => {
    cy.wait('@filterByPayerBankAccout', { timeout: 30000 }).get('table').find('td div[datacy="payerBankAccountIban"]').should('be.visible')
        .should('contain', payerBankAccout);
});

Then(`Only Condominium Payments with this {string} Payment Type should displayed in the list`, (paymentType) => {
    cy.wait('@filterByPaymentType', { timeout: 30000 }).get('table').find('td div[datacy="paymentType"]').should('be.visible')
        .should('contain', paymentType);
});

Then(`Condiminium Payment should be accepted`, () => { 
    cy.get('.p-toast-message-content').should('be.visible');
    cy.get('.p-toast-detail').should('contain.text', 'The operation succeeded.')       
    cy.wait("@acceptanceCondominiumPay", {timeout:15000}).then((beResponse) => {
      expect(beResponse.response.statusCode).to.equal(200);
    });
});