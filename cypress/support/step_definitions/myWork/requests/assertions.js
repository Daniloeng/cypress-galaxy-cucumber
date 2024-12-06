import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Only Requests with this {string} work mode should displayed in the list`, (type) => {    
  cy.get('table').then(($table) => {
      if ($table.find('td div[datacy="requestWorkModeDescription"]').length === 0) {
          cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
      } else {
          cy.get('td div[datacy="requestWorkModeDescription"]').should('be.visible').then(($cells) => {
              if ($cells.length === 1) {
                  cy.wrap($cells.eq(0)).should('contain', type);
              } else {
                  $cells.each((index, cell) => {
                      cy.wrap(cell).should('contain', type);
                  });
              }
          });
      }
  });
});

Then(`Check if the status was changed successfully`, () => {
    cy.get('@statusChange').then(beResponse =>{
      expect(beResponse.response.statusCode).to.equal(200);      
    });
  
});
