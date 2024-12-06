import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Clicks on Global Filter button of the table`, () => {
    cy.get('span.fa-filter', { timeout: 30000 }).click();
    cy.get('.p-datatable-thead .p-filter-column').should('be.visible');
})

When(`Clicks on Global Sync button of the table`, () => {
    cy.get("span.fa-sync", { timeout: 30000 }).should('be.visible').click();
    cy.get("span.fa-sync").click();    
})

When(`Selects All columns option in dropdown columns`, () => {
    cy.get('.p-multiselect-label', { timeout: 30000 }).contains('Columns').click();
    cy.get('.p-multiselect-header > .p-checkbox > .p-checkbox-box', { timeout: 30000 }).click({ force: true });
});

When(`Selects {string} in View`, (view) => {
    cy.get('[class^="ViewSelect_viewselect"] > .gx-select__control', { timeout: 15000 }).click();
    cy.get(".gx-select__menu", { timeout: 15000 }).should('contain', view).click({ timeout: 15000 });
});

When(`{string} the {string} column in Columns menu`, (type, option) => {
    cy.wait(1000); // Important to wait to minimize errors
    cy.get('.p-multiselect-label').contains('Columns').click();
    cy.get('.p-multiselect-items .p-multiselect-item').contains(RegExp(`^${option}$`, 'i'), { timeout: 30000 }).should('exist').click({ force: true });
});

When(`Selects by {string} in the Show of the {string} table screen`, (show, table) => {
    cy.get('[class^="PerspectivesFilterDropdown_filter-property"] > .fas').click();
    cy.get('.p-listbox-item').contains(show).click();
    cy.wait(2000);
});

When(`Clicks on the filter option in the {string} column`, (filterColumn) => {
    cy.get(`.p-inputgroup input[name=${filterColumn}]`, { timeout: 30000 })
        .siblings('.dropdown').find('button').scrollIntoView().click({ force: true });
});

When(`Clicks on the filter option in the {string} Date column`, (filterColumn) => {
    cy.get(`span input[name=${filterColumn}]`, { timeout: 30000 })
        .parents('.p-inputgroup').find('div button.dropdown-toggle').scrollIntoView().click({ force: true });
});

When(`Selects the {string} option in the dropdown-menu`, (filterType) => {
    cy.get('.dropdown-item').should('be.visible').then(() => {
        cy.get('.dropdown-item', { timeout: 10000 }).contains(filterType).should('be.visible').click();
    });
});

When(`Selects the first {string} item from the table`, (item) => {
    cy.get(`table tr:first-child td div[datacy=${item}] a`, { timeout: 30000 }).click();
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
    if (dataToSearch == '') {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 100000 })
            .should('be.disabled');
    } else {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 100000 }).type(dataToSearch);
    }
});


When(`Filter by value found in the {string} column of the Proposal table screen`, (column) => {
    cy.get('@elementToFind').then((elementToFind) => {
        cy.get(`input[name=${column}]`, { timeout: 20000 }).should('be.visible').click().type(elementToFind);
    });
});

When(`Writes {string} to be searched in the {string} Date Name column filter`, (dataToSearch, nameColumnFilter) => {
    const dayToSearch = new Date(dataToSearch).getDate().toString();
    if (dataToSearch == '') {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 80000 })
            .should('be.disabled');
    } else {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 80000 })
            .click({ force: true }).type(dataToSearch);
        cy.get(`.p-datepicker-calendar > tbody > tr > td > span`, { timeout: 40000 }).contains(dayToSearch).click({ force: true });
    }
});

When(`Selects {string} to be searched in the {string} Date Name column filter`, (dataToSearch, nameColumnFilter) => {
    const [year, month, day] = dataToSearch.split('-');
    const dayToSelect = parseInt(day).toString();
    const monthToSelect = parseInt(month).toString();
    if (dataToSearch == '') {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 80000 }).should('be.disabled');
    } else {
        cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 80000 }).click({ force: true });
        cy.get('.p-datepicker').should('exist').then((datepicker) => {
            if (!datepicker.is(':visible')) {
                cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`).click({ force: true });
            }
        });        
        cy.get('.p-datepicker-year').should('be.visible').select(year);
        cy.get('.p-datepicker').should('exist').then((datepicker) => {
            if (!datepicker.is(':visible')) {
                cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`).click({ force: true });
            }
        });
        cy.get('.p-datepicker-month').select((parseInt(monthToSelect) - 1).toString());
        cy.get('.p-datepicker').should('exist').then((datepicker) => {
            if (!datepicker.is(':visible')) {
                cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`).click({ force: true });
            }
        });
        cy.get('.p-datepicker-calendar').contains('span', dayToSelect).contains(dayToSelect).click({ force: true });
    }
});

When(`Clicks on Refresh button`, () => {
    cy.get(':nth-child(4) > .p-button-icon', { timeout: 15000 }).click();
});

When(`Aligns the table descending by the {string} column`, (column) => {
    const columnSelector = `th`; 
    cy.wait(2000);
    cy.get(columnSelector).each(($el) => {
        if ($el.text().trim() === column) {
            cy.wrap($el).as('targetColumn');
        }
    });

    cy.get('@targetColumn').then(($column) => {
        cy.ensureColumnSortedDesc($column);
    });
});

When(`Aligns the table ascending by the {string} column`, (column) => {
    const columnSelector = `th`; 
    cy.wait(1000);
    cy.get(columnSelector).each(($el) => {
        if ($el.text().trim() === column) {
            cy.wrap($el).as('targetColumn');
        }
    });

    cy.get('@targetColumn').then(($column) => {
        cy.ensureColumnSortedAsc($column);
    });
});
