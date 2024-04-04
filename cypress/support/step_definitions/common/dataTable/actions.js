import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Clicks on Global Filter button of the table`, () => {
    cy.get('span.fa-filter', {timeout: 30000}).click();
    cy.get('.p-datatable-thead .p-filter-column').should('be.visible');
})

When(`Selects All columns option on dropdown columns`, () => {
    cy.get('.p-multiselect-label').contains('Columns').should('be.visible').scrollIntoView().click();
    cy.get('.p-multiselect-header > .p-checkbox > .p-checkbox-box', {timeout: 30000}).should('be.visible').click({force: true});
});

When(`{string} the {string} column on Columns menu`, (type, option) => {
    cy.get('.p-multiselect-label-container').click();
    cy.get('.p-multiselect-items .p-multiselect-item').contains(RegExp(`^${option}$`, 'i')).scrollIntoView().click({force: true});
});

When(`Click on the filter option in the {string} columnn`, (filterColumn) => {
    cy.get(`.p-inputgroup input[name=${filterColumn}]`, {timeout: 10000})
        .siblings('.dropdown').find('button').click({force:true});
});

When(`Click on the filter option in the {string} Date columnn`, (filterColumn) => {
    cy.get(`span input[name=${filterColumn}]`, {timeout: 10000})
    .parents('.p-inputgroup').find('div button.dropdown-toggle').click({force: true})
});

When(`Selects the {string} option in the dropdown-menu`, (filterType) => {
    cy.get('.dropdown-menu').contains(filterType).click({force:true});
});

When(`Selects the first {string} item from the table`, (item) => {
    cy.get(`table tr:first-child td div[datacy=${item}] a`, {timeout: 30000}).click();
});

When(`Find an element in the {string} column of the table`, (column) => {
    cy.get(`td div[datacy=${column}]`).each(($element) => {
        const item = $element.text().trim();
        if (item) {
            cy.wrap(item).as('elementToFind');
            return false;
        }
    });
});

When(`Writes {string} to be searched in the {string} Name column filter`, (dataToSearch, nameColumnFilter) => {
    if(dataToSearch == '') {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, {timeout: 10000})
            .should('be.disabled');
    } else {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, {timeout: 10000})
            .clear().type(dataToSearch);
    }
});


When(`Filter by value found in the {string} column of the Proposal table screen`, (column) => {
    cy.get('@elementToFind').then((elementToFind) => {
        cy.get(`input[name=${column}]`, { timeout: 20000 }).should('be.visible').click().type(elementToFind);
    });
});

When(`Writes {string} to be searched in the {string} Date Name column filter`, (dataToSearch, nameColumnFilter) => {
    const dayToSearch = new Date(dataToSearch).getDate().toString();
    if(dataToSearch == '') {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 10000 })
            .should('be.disabled');
    } else {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 10000 })
            .click({ force:true }).type(dataToSearch);
        cy.get(`.p-datepicker`).should('contain', dayToSearch).click({ force: true });
    }
});
