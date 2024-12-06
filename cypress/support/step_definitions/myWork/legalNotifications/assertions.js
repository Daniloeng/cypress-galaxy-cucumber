import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Check if the status was changed successfully`, () => {
    cy.get('@statusChange').then(beResponse =>{
      expect(beResponse.response.statusCode).to.equal(200);
    });
  
});

Then(`Check if there's any data`, () => {
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(0).click();
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
    cy.get('.p-datatable-tbody', { timeout: 15000 }).then((rows) => {
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

Then(`Clicks on {string} Legal Notifications`, (button) => {
  cy.get('.button-link').contains('span', button).click({ force: true });
});

Then(`Check that in Legal Notification the {string} is {string}`, (detail, answer) => {
  cy.get('dt').contains(detail).next('dd').should('contain.text', answer)
});

Then(`{string} sidebar is closed`, (title) => {
  cy.get('.p-sidebar-content').should('not.be.visible');
});

Then(`Column {string} contains {string} manager`, (column, user) => {
  cy.get("td div[datacy='assigneesUserName'] a").should('contain', user);
});

Then(`{string} sidebar is open`, (title) => {
  cy.get('.dv-document-wrapper', { timeout: 15000 }).should('be.visible');
  cy.get(`[class^='Title_title'] .p-button > .p-button-label`).should('contain', title);
});

Then(`Full Preview Legal Notifications is open`, () => {
  cy.wait(1000);
  cy.get('.dv-document-wrapper', { timeout: 30000 }).should('be.visible');
  cy.get(`[class^='Tile_container'] > :nth-child(1) > .p-button`).should('contain', 'View');
});

Then(`Only Legal Notifications with this {string} Status should displayed in the list`, (status) => {
  cy.wait('@filterApplied', { timeout: 20000 });
  cy.get('table').find('td div[datacy="statusDescription"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', status);
    });
});

Then(`Only Legal Notifications with this {string} Status Reason should displayed in the list`, (status) => {
  cy.wait('@filterApplied', { timeout: 20000 });
  cy.get('table').find('td div[datacy="taxDocumentStatusReasonDescription"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', status);
    });
});

Then(`Only Legal Notifications with this {string} Document Type should displayed in the list`, (type) => {
  cy.wait('@filterApplied', { timeout: 20000 });
  cy.get('table').find('td div[datacy="documentTypeDescription"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', type);
    });
});

Then(`Only Legal Notifications with this {string} Portfolio Group should displayed in the list`, (type) => {
  cy.wait('@filterApplied', { timeout: 20000 });
  cy.get('table').find('td div[datacy="portfolioGroupName"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', type);
    });
});

Then(`Only Legal Notifications with this {string} Priority should displayed in the list`, (priority) => {
  cy.wait('@filterApplied', { timeout: 20000 });
  cy.get('table').find('td div[datacy="priorityDescription"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', priority);
    });
});

Then(`Only Legal Notifications with this {string} Assignees should displayed in the list`, (type) => {
  cy.wait('@filterApplied', { timeout: 20000 });
  cy.get('table').find('td div[datacy="legalNotificationAssignees"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', type);
    });
});
