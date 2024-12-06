import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Verifies that Relations with Legal Case Instances e Legal Notificaions`, () => {
    cy.wait(3000);

    cy.get('.col-md-12 > .p-card > .p-card-body').find('[class*="Title_title"]').contains('Legal Case Instances').should('exist');
    cy.get('.col-md-12 > .p-card > .p-card-body').find('[class*="Title_title"]').contains('Legal Notifications').should('exist');
});

Then(`Verifies if Toolbar is showing`, () => {
    cy.wait(8000);

    cy.get('[role="toolbar"]').then(($toolbar) => {
      if ($toolbar.find(':contains("Legal Support - Limpeza All")').length > 0) {
          cy.wait(1000);
          cy.wrap($toolbar)
            .find(`:contains("Legal Support - Limpeza All")`)
            .parent().parent().parent().parent()
            .find(`.p-toolbar [class*="TasksBar_close"]`, { timeout: 20000 })
            .click();
          cy.wait(1000);
          cy.log('Toolbar contains "Legal Support - Limpeza All", closing it.');
          cy.visit('queues/all');
          cy.reload();  
      } else {
          cy.log('Toolbar does not contain "Legal Support - Limpeza All", continuing with other steps.');
      }
    });
      
});
