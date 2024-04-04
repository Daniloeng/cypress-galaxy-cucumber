import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Check if the status was changed successfully`, () => {
    cy.get('@statusChange').then(beResponse =>{
      expect(beResponse.response.statusCode).to.equal(200);      
    });
  
});


Then(`Check if there's any data`, () => {
    cy.get('.p-datatable-tbody > :nth-child(1) > .p-selection-column > .p-checkbox > .p-checkbox-box', {timeout:20000}).click();
    cy.checkIfExists('.p-selectable-row','Initial')
    cy.checkIfExists('.p-selectable-row','Intermediate')
    cy.checkIfExists('.p-selectable-row','Final');
});


Then(`Check if the data doesn't have the finals statuses`, () => {
    cy.get('.p-datatable-wrapper').should('not.contain', 'Answered');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Archived');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Invalidated');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Paid');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Pending LS Invalidation');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Forward');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Closed');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Received');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Reclamation');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Canceled');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Transferred Third Party');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Duplicated');
    cy.get('.p-datatable-wrapper').should('not.contain', 'Final');
});


Then(`Check if the Legal Notifications are grouped by {string} {string}`, (groupByOption, comparedSymbol) => {
    cy.get('.p-datatable-tbody', {timeout:15000}).then((rows) => {
      for(const row of rows) {               
        if(groupByOption == "Document")
        {
          cy.get(row).should('contain', comparedSymbol);
        }
        else if (groupByOption == "Legal Case Number")
        {
          cy.get(row).should('not.contain', comparedSymbol);
        }      
      }
    })
});