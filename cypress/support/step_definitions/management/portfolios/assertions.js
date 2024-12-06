import { Then } from "@badeball/cypress-cucumber-preprocessor";


Then(`Check if the Debt was edited`, () => {
    cy.wait('@debtEdited', { timeout: 20000 }).then((beResponse) => {
      expect(beResponse.response.statusCode).to.equal(200);
    });
    cy.get('.p-datatable-wrapper').contains('Bank guar. and guar. provided to other part. inst.').should('be.ok');
  });