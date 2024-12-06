import { When } from "@badeball/cypress-cucumber-preprocessor";


When(`Wait for Key-sets to Return table loaded`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets/keysetstoreturn?first=0&count=15&countTotalRecords=true`).as('filterDefault');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets/keysetstoreturn?first=0&count=15&filters=**`).as('filterApplied');
});

When(`Filters by {string} in the Status field of the Key-sets to Return table screen`, (status) => {
    cy.get(`th div[datacy="assetStatusId"]`, { timeout: 15000 }).contains('All').should('be.visible').click();
    cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
        .should('be.visible').click({ force:true });
    cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
        .should('be.visible').type(status, { force:true });
    cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${status}$`, 'i')).click();
  });

When(`Filters by {string} in the Delivered to field of the Key-sets to Return table screen`, (status) => {
    cy.get(`th div[datacy="deliveredToId"]`, { timeout: 15000 }).contains('All').should('be.visible').click();
    cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
        .should('be.visible').click({ force:true });
    cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
        .should('be.visible').type(status, { force:true });
    cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${status}$`, 'i')).click();
});
 
When(`Selects the 1st KeySet to Return from the list`, () => {
    cy.get('tr.p-selectable-row').eq(0).find('td div[datacy="keySetId"]').invoke('text').then((keySet) => {
        cy.wrap(keySet.trim()).as('capturedkeySetId');
    });
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(0).click();
});
 
When(`Selects the 1st and 2nd KeySet to Return from the list`, () => {
    cy.get('tr.p-selectable-row').eq(0).find('td div[datacy="keySetId"]').invoke('text').then((keySet) => {
        cy.wrap(keySet.trim()).as('capturedkeySetId1');
    });
    cy.get('tr.p-selectable-row').eq(1).find('td div[datacy="keySetId"]').invoke('text').then((keySet) => {
        cy.wrap(keySet.trim()).as('capturedkeySetId2');
    });
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(0).click();
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(1).click();
});
  
When(`Selects {string} Delivered to in sidebar`, (user) => {
    cy.get('.p-sidebar').should('be.visible').click();
    cy.get('#movementDate > .p-inputtext').should('be.visible').click();
    cy.get('.p-datepicker-today').click();
    cy.wait(500);
    cy.get('#userId > .gx-select__control').click().type(user);
    cy.get('.gx-select__menu', { timeout: 10000 }).contains(user, { timeout: 15000 }).should('be.visible').click();
});
  
When(`Selects the 1st {string} link on Key-sets to Return screen`, (datacy) => {
    cy.get('tr.p-selectable-row', { timeout: 25000 }).eq(0).find(`td div[datacy="${datacy}"] a`)
        .invoke('text').then((link) => {
            cy.wrap(link.trim()).as('capturedLink');
            cy.get(`td div[datacy="${datacy}"] a`).first().click();
    });
});
