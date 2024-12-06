import { When } from "@badeball/cypress-cucumber-preprocessor";

function getRandomUniqueNumbers(n, max) {
    const numbers = new Set();
    while (numbers.size < n) {
        const randomNum = Math.floor(Math.random() * max);
        numbers.add(randomNum);
    }
    return Array.from(numbers);
}

When(`Wait for the Missing Tax Documents table loaded`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/missingtaxdocuments?**`).as('defaultMissingTax');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/contactbook/lookup/followupstatus?first=0&count=1000`).as('followUp');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests//requesttaskstatusreasons/bystatus/**`).as('reasons');
    cy.wait(2000);
    cy.wait('@defaultMissingTax', { timeout: 30000 });
});

When(`Wait for filter applied in the Missing Tax Documents table`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/missingtaxdocuments?first=0&count=15&filters**`).as('filterApplied');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/missingtaxdocuments?first=0&count=15&**`).as('filterApplied');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/missingtaxdocuments?first=0&count=15&orderBy=id+desc&filters=id+equ+12621167&countTotalRecords=true`).as('filterAppliedId');
});

When(`Selects first Missing Tax Documents from datatable`, () => {
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(0).should('be.visible').click()
        .closest('tr')
        .within(() => {
            cy.get('td div[datacy="id"]').invoke('text').as('firstRowId'); 
        });
});

When(`Selects {string} Missing Tax Documents from datatable`, (number) => {
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 }).then(($items) => {
        const itemCount = $items.length;
        const randomIndexes = getRandomUniqueNumbers(parseInt(number), itemCount);
        const selectedIds = [];

        randomIndexes.forEach((index) => {
            cy.wrap($items).eq(index).click()
                .closest('tr') 
                .within(() => {                    
                    cy.get('td div[datacy="id"]').invoke('text').then((id) => {
                        selectedIds.push(id);
                    });
                });
        });
        
        cy.wrap(selectedIds).as('selectedRowIds');
    });
});


When(`Reads and selects all the missing tax documents from the table`, () => {
    cy.wait(2000);
    const tableData = [];
    cy.get('table', { timeout: 30000 }).find('tr.p-selectable-row').each(($row) => {
        const rowData = [];
        cy.wrap($row).find('th, td').each(($cell, index) => {
            if (index > 0) { // Ignore the first column (checkbox)
                let cellText = $cell.text().trim();
                if (cellText.startsWith('€')) { // Remove euro symbol
                    cellText = cellText.replace('€', '').trim();
                }
                rowData.push(cellText);
            }
        });
        tableData.push(rowData);
    }).then(() => {
        cy.wrap(tableData).as('tableData');
    });
    cy.wait(1000);
});

When(`Filters by {string} in the Pop Sent Error field of the Missing Tax Documents table screen`, (status) => {
    cy.get(`select[name="hasSendPopError"]`).should('be.visible').select(status);
});

When(`Filters by {string} in the Portfolio field of the Missing Tax Documents table screen`, (status) => {
    cy.get(`[datacy="portfolioIds"]`).should('exist').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).scrollIntoView().click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="portfolioIds"]`).should('exist').click();
});

When(`Filters by {string} in the Service Type field of the Missing Tax Documents table screen`, (status) => {
    cy.get(`[datacy="serviceTypeId"]`).should('exist').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="serviceTypeId"]`).should('exist').click();
});

When(`Filters by {string} in the Payment Type field of the Missing Tax Documents table screen`, (status) => {
    cy.get(`[datacy="paymentTypeIds"]`).should('exist').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="paymentTypeIds"]`).should('exist').click();
});

When(`Filters by {string} in the LAPR Status field of the Missing Tax Documents table screen`, (status) => {
    cy.get(`[datacy="laprStatusIds"]`).should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="laprStatusIds"]`).click();
});

When(`Filters by {string} in the Follow-Up Status field of the Missing Tax Documents table screen`, (status) => {
    cy.get(`[datacy="followUpStatusIds"]`).should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="followUpStatusIds"]`).click();
});

When(`Selects {string} Follow-Up Status on sidebar`, (option) => {
    cy.wait('@followUp');
    cy.get('#followUpStatusId > .gx-select__control').should('be.visible').click();
    cy.get(".gx-select__menu", { timeout: 15000 }).contains(option).click({ timeout: 15000 });
});

When(`Selects {string} Status Reason and destination for {string} on sidebar`, (option, person) => {
    cy.wait('@reasons', { timeout: 30000 }).wait(1000);
    cy.get('#taskStatusReasonId > .gx-select__control').should('be.visible').click({ force: true });
    cy.get(".gx-select__menu").contains(option).click({ timeout: 15000 });
    cy.get('#destinationRequestId > .gx-select__control').should('be.visible').click();
    cy.get(".gx-select__menu").contains(person).click({ timeout: 15000 });
});
