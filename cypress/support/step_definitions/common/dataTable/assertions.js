import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`{string} table is loaded`, (table) => {
    cy.get('table', { timeout: 30000 }).should('be.visible');
    cy.get('.gx-datatable__title').get('[class^="Title_title-annotation__"]').should('exist');
    cy.get('.gx-datatable__title').contains(table);
});

Then(`Check if the {string} column was removed from view`, (columnName) => {
    cy.get('.p-datatable-thead > tr >').should('not.contain', RegExp(`^${columnName}$`, 'i'));
    cy.get('thead tr[class="p-datatable-thead"]').should('not.exist', RegExp(`^${columnName}$`, 'i'));
});

Then(`The {string} column is showed`, (column) => {
    cy.get('.p-datatable-thead > tr >').should('exist', column);
});

Then(`The datatable should show the currency items according to the filter {string} option and {string} data in the {string} column applied`,
    (filterType, dataToBeSearched, column) => {
        cy.wait('@filterApplied', { timeout: 70000 }).applyCurrencyFilterDatatable(filterType, column, dataToBeSearched);
});

Then(`The datatable should show the string items according to the filter {string} option and {string} data in the {string} column applied`,
    (filterType, dataToBeSearched, column) => {
        cy.wait('@filterApplied', { timeout: 70000 }).applyStringFilterDatatable(filterType, column, dataToBeSearched);
});

Then(`The datatable should show the date items according to the filter {string} option and {string} data in the {string} column applied`,
    (filterType, dataToBeSearched, column) => {
        cy.wait('@filterApplied', { timeout: 70000 }).applyDateFilterDatatable(filterType, column, dataToBeSearched);
});

Then(`Only the proposal matching the {string} column filter should be visible in the list`, (filter) => {
    cy.get('@elementToFind').then((elementToFind) => {
        cy.get('table').find(`td div[datacy=${filter}]`).should('be.visible')
            .should('contain', elementToFind);
    });
});
