import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Wait for the Queue table loaded`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/myrequeststoworkon?workModeId=2&first=0&count=15&countTotalRecords=true`).as('defaultQueue');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/myrequeststoworkon?workModeId=2&first=0&count=15&filters=**`).as('filterApplied');
});

When(`Clicks on {string} in Legal Details`, (label) => {
    cy.get('.p-accordion-header').contains('h2', 'Legal Details')
        .parent().find(`button:contains("${label}")`).click();

});

When(`Cancels all Tasks Opened before add new task`, () => {
    cy.wait(500);
    cy.get('.p-datatable-thead > tr > .p-selection-column > .p-checkbox > .p-checkbox-box').click();
    cy.get('.p-toolbar', { timeout: 30000 }).contains('Cancel').click()
    cy.wait(2000);
    cy.get('#taskStatusReasonId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Archived').click();
    cy.wait(500);

});

When(`Fills in the fields to Add a Task in the Queue screen`, () => {
    cy.get('#comment').type('Queue automation testing');
    cy.get('.col-xs-12 > [class*="autocomplete-wrapper"] > [class*="quick-add-wrapper"] > .gx-select > [class*="autocomplete"] > .gx-select__control')
        .click().type('Proof');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Proof').first().click();
    cy.get('.col-xs-12 > [class*="autocomplete-wrapper"] > [class*="quick-add-wrapper"] > .p-button').click();
});

When(`Fills in the fields to Edit the Legal Details`, () => {
    cy.wait(5000);
    cy.get('#documentCategoryId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Notificação').click();
    
    cy.wait(1000);
    cy.get('#documentTypeId > .gx-select__control').click().type('Agendamento');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Agendamento').click();
    
    cy.get('#eventTypeId > .gx-select__control', { timeout: 30000 }).click().type('Date - Quote');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Date - Quote').click();
    
    cy.get('#contactReasonId > .gx-select__control', { timeout: 20000 }).type('Others')
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Others').click();
    cy.get('.p-message-wrapper').find('.p-message-close-icon').first().click();

    cy.get('#startHour').type('10:00');
    
    cy.get('#legalCase').type('12639/07.9TBMAI');
    cy.get('#nif').type('101045301');
    cy.get('#btnAdd').click();
    cy.wait(5000);
    cy.get('.transitionCardsExpand-enter-done').find('.gx-form-header').scrollIntoView();
});

When(`Selects the Queue added`, () => {
    cy.wait(2000);
    const currentDate = new Date().toISOString().split('T')[0]; // Format 'YYYY-MM-DD'
  
    cy.get('tr.p-selectable-row').each(($row) => {
        const byName = $row.find('div[datacy="createdByName"]').text().trim();
        const createdDate = $row.find('div[datacy="created"]').text().trim();
        cy.log('byName: ', byName)
        cy.log('createdDate: ', byName)
        if (byName.includes('galaxy.test') &&  createdDate.includes(currentDate)) {
            cy.wrap($row).find('div.p-checkbox-box').click();
        }
    });
    cy.get('.p-sidebar', { timeout: 15000 }).should('not.exist', { timeout: 60000 });
});
