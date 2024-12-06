import { When } from "@badeball/cypress-cucumber-preprocessor";

const currentDate = new Date().toISOString().split('T')[0];

When(`Filters by {string} in the Payment Request Id field of the Tax Documents table screen`, (id) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/waitingaccounting/?first=0&count=15&filters=requestTaskPaymentIds**`).as('filterId');  
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/rejectederrors?first=0&count=15&filters=requestTaskPaymentIds**`).as('filterId');  
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/waitingaccounting//export?filename=TaxDocumentsWaitingAccounting**`).as('accoutingReport');
    
    cy.get('input[name="requestTaskPaymentIds"]', { timeout: 20000 }).click().type(id);
    cy.wait(10000);    
});

When(`Selects the {string} checkbox from the Tax Document list`, (numberString) => {
    const number = Number(numberString);
    cy.get('tr.p-selectable-row', { timeout: 30000 }).eq(number-1).find('td div[datacy="requestTaskPaymentIds"]').invoke('text').then((idPR) => {
        cy.wrap(idPR.trim()).as('paymentId');
    });
    cy.get('tr.p-selectable-row').eq(number-1).find('td div[datacy="documentNumber"]').invoke('text').then((idPR) => {
        cy.wrap(idPR.trim()).as('documentNumber');
    });
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(number-1).click();
});

When(`Selects the Tax Document created`, () => {
    cy.wait(2000);

    const [year, month, day] = currentDate.split('-');
    const dayToSelect = parseInt(day).toString();
    const monthToSelect = parseInt(month).toString();
    cy.get(`.p-inputgroup input[name="documentDate"]`, { timeout: 80000 }).click({ force: true });
    cy.get('.p-datepicker').should('exist').then((datepicker) => {
        if (!datepicker.is(':visible')) {
            cy.get(`.p-inputgroup input[name="documentDate"]`).click({ force: true });
        }
    });        
    cy.get('.p-datepicker-year').should('be.visible').select(year);
    cy.get('.p-datepicker').should('exist').then((datepicker) => {
        if (!datepicker.is(':visible')) {
            cy.get(`.p-inputgroup input[name="documentDate"]`).click({ force: true });
        }
    });
    cy.get('.p-datepicker-month').select((parseInt(monthToSelect) - 1).toString());
    cy.get('.p-datepicker').should('exist').then((datepicker) => {
        if (!datepicker.is(':visible')) {
            cy.get(`.p-inputgroup input[name="documentDate"]`).click({ force: true });
        }
    });
    cy.get('.p-datepicker-calendar').contains('span', dayToSelect).contains(dayToSelect).click({ force: true });
});

When(`Filters by Payment Request Id in Rejected With Errors tab on Tax Document table screen`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/rejectederrors?first=0&count=15&orderBy=documentDate+desc&filters**`).as('filterRejectApplied'); 
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/rejectederrors/export**`).as('rejectErrorReport');
    cy.wait(1000);
    cy.get('@paymentId').then(id => {
        const paymentId = id.trim();
        cy.log(`paymentId - ${id}`)
        cy.wait(2000);
        cy.get(`th div[datacy="requestTaskPaymentIds"] input`, { timeout: 15000 }).type(paymentId);
    });
    cy.wait('@filterRejectApplied', { timeout: 30000 });
    cy.wait(1000);
});

When(`Filters by Payment Request Id in Archived tab on Tax Document table screen`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/archived?first=0&count=15&orderBy=documentDate+desc&filters**`).as('filterArchivedApplied'); 
    cy.wait(1000);
    cy.get('@paymentId').then(id => {
        const paymentId = id.trim();
        cy.log(`paymentId - ${id}`)
        cy.wait(2000);
        cy.get(`th div[datacy="requestTaskPaymentIds"] input`, { timeout: 15000 }).type(paymentId);
    });
    cy.wait('@filterArchivedApplied', { timeout: 30000 });
    cy.wait(1000);
});

When(`Filters by Payment Request Id in Waiting Accounting tab on Tax Document table screen`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/waitingaccounting/?first=0&count=15&orderBy=documentDate+desc&filters=**`).as('filterWaitingaccountingApplied'); 
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/waitingaccounting//export**`).as('accoutingReport');
    cy.wait(1000);
    cy.get('@paymentId').then(id => {
        const paymentId = id.trim();
        cy.log(`paymentId - ${id}`)
        cy.wait(2000);
        cy.get(`th div[datacy="requestTaskPaymentIds"] input`, { timeout: 15000 }).type(paymentId);
    });
    cy.wait('@filterWaitingaccountingApplied', { timeout: 30000 });
    cy.wait(2000);
});

When(`Filters by Payment Request Id in Manual Accounting tab on Tax Document table screen`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/manualaccounting?first=0&count=15&orderBy=documentDate+desc&filters=**`).as('filterManualAccountingApplied'); 
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/manualaccounting//export**`).as('accoutingReport');
    cy.wait(1000);
    cy.get('@paymentId').then(id => {
        const paymentId = id.trim();
        cy.log(`paymentId - ${id}`)
        cy.wait(2000);
        cy.get(`th div[datacy="requestTaskPaymentIds"] input`, { timeout: 15000 }).type(paymentId);
    });
    cy.wait('@filterManualAccountingApplied', { timeout: 30000 });
    cy.wait(1000);
});

When(`Opens Payment Request Relations`, () => {
    cy.wait(2000);
    cy.get('.col-md-12 > .p-card > .p-card-body').find('[class*="Title_title"]')
        .contains('Payment Request').should('exist');
    cy.get('@paymentId').then(id => {
        const trimId = id.trim();
        cy.get('td div[datacy="entityId"] a', { timeout: 30000 }).should('contain', trimId).click({ force: true });
    })
    cy.wait(2000);
});

When(`Opens {string} Legal Case Instance Relations`, (lci) => {
    cy.wait(2000);
    cy.log(`Legal Case Instance: ${lci}`);
    cy.get('.col-md-12 > .p-card > .p-card-body').find('[class*="Title_title"]')
        .contains('Legal Case Instances').should('exist');
        cy.get('.col-md-12 > .p-card > .p-card-body')
            .contains('Legal Case Instances')
            .parents('.p-card-body')
            .find('td div[datacy="entityDescription"] a', { timeout: 30000 })
            .contains(lci)
            .should('be.visible')
            .click({ force: true });
    cy.wait(2000);
});

When(`Selects {string} Provide Decision and writes {string} comments on Provide Decision`, (decision, comment) => {
    cy.get(`[aria-label="${decision}"] > .p-button-label`, { timeout: 30000 }).contains(decision).click({ force: true });
    cy.get('#comments').type(comment);
});

When(`Writes {string} comments on Provide Decision`, (comment) => {
    cy.get('#comments').type(comment);
});


When(`Intercepts Accounting report in Tax Documents screen`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation//documentstaxinfo/accountingpagereport`).as('accountingReport');
    cy.wait(2000);
});

When(`Selects the Tax Document with the reprocessed on Tax Document screen`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation//documentstaxinfo/accountingpagereport`).as('accountingReport');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents?domainEntityId=10&entityId=**`).as('documentsTabLoaded');
    cy.get('@paymentId').then(paymentId => {
        cy.get('td div[datacy="requestTaskPaymentIds"]').filter((index, element) => {
            return Cypress.$(element).text().trim() === paymentId;
        }).each(($element) => {
            cy.get('@documentNumber').then(documentNumber => {
                cy.wrap($element).closest('tr')
                    .find('[datacy="documentNumber"] a')
                    .should('contain', documentNumber)
                    .click();
            });
            return false;
        });
    });
    cy.wait(2000);
});

When(`Selects the Tax Document changed on Tax Document screen`, () => {
    cy.wait(3000);
    cy.get('@paymentId').then(paymentId => {
        cy.get('td div[datacy="requestTaskPaymentIds"]').filter((index, element) => {
            return Cypress.$(element).text().trim() === paymentId;
        }).each(($element) => {
            cy.get('@documentNumber').then(documentNumber => {
                cy.wrap($element).closest('tr')
                    .find('[datacy="documentNumber"] a')
                    .should('contain', documentNumber)
                    .click();
            });
            return false;
        });
    });
});

When(`Selects the checkbox of the Document edited on Tax Document screen`, () => {
    cy.wait(3000);
    cy.get('@paymentId').then((paymentId) => {
        cy.log('Payment Id: ', paymentId)
        cy.get('@documentNumber').then((documentNumber) => {
            cy.log('Document Number: ', documentNumber)
            cy.get('tr').each(($row) => {
                const $paymentIdCell = Cypress.$($row).find('div[datacy="requestTaskPaymentIds"]');
                const $documentNumberCell = Cypress.$($row).find('[datacy="documentNumber"] a');
                if (
                    $paymentIdCell.text().trim() === paymentId &&
                    $documentNumberCell.text().trim() === documentNumber
                ) {
                    cy.wrap($row).within(() => {
                        cy.get('.p-selection-column .p-checkbox .p-checkbox-box')
                            .should('be.visible')
                            .click();
                    });
                    return false;
                }
            });
        });
    });
});

When(`Edits the Tax Document with the new Document on Tax Document screen`, () => {    
    cy.get('@paymentId').then(paymentId => {
        cy.get('td div[datacy="requestTaskPaymentIds"]', { timeout: 15000 }).should('exist');
        cy.wait(2000);
        cy.get('td div[datacy="requestTaskPaymentIds"]').each(($cell) => {
            if ($cell.text().trim() === paymentId) {
                cy.wrap($cell)
                .closest('tr')
                .within(() => {
                    cy.get('[datacy="documentNumber"] a')
                    .should('exist')
                    .click();
                });
                return false; 
            }
        });
    });
    const fileName = `NewAutomationDocument-${Date.now()}`;
    cy.wait(1000);
    cy.get('[class^="Tile_container"] >> .p-button > .p-button-label').contains('Edit').click({ force: true });
    cy.get('.p-fileupload-row >> .p-button', { timeout: 30000 }).should('be.visible').click();
    
    cy.task('generatePDF', fileName).then((filePath) => {
        cy.get('[type="file"]').selectFile(filePath, { force: true });
    });
    cy.get('.p-fileupload-row >> .p-button', { timeout: 30000 }).should('be.visible');
    cy.wait(1000);
    cy.get('#documentStatusId', { timeout: 30000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Archived', { timeout: 30000 }).click({ force: true });
    cy.wait(4000);
});

When(`Wait for the accounting report and documents to be presented`, () => {
    cy.wait('@accountingReport', { timeout: 50000 });
    cy.get('.reports-style-class > iframe', { timeout: 40000 }).should('be.visible', { timeout: 40000 })
    cy.wait(5000);
    cy.get('table tr').last().within(() => {
        cy.get('td div[datacy="accountingDate"]').should('have.text', currentDate);
    });
    cy.get('dl').within(() => {
        cy.contains('dt', 'Accounting Status Date')
          .next('dd')
          .invoke('text')
          .then((text) => {
            const statusDate = new Date(text.trim().replace(/-/g, '/'));
            const currentDate = new Date();
            const diffInMs = currentDate - statusDate;
            const diffInMinutes = diffInMs / (1000 * 60);
            
            expect(diffInMinutes).to.be.within(0, 5);
        });
    });
    cy.wait(15000);
});

When(`Wait for the accounting report to be presented`, () => {
    cy.wait('@accountingReport', { timeout: 50000 });
    cy.get('.reports-style-class > iframe', { timeout: 40000 }).should('be.visible', { timeout: 40000 })
    cy.wait(30000);
});

When(`Waits for the Accounting tab report to be displayed on the Payment Request screen`, () => {
    cy.wait('@accountingReport', { timeout: 50000 });
    cy.wait('@documentsAccountingrecords', { timeout: 20000 });

    cy.get('.reports-style-class > iframe', { timeout: 40000 }).should('be.visible', { timeout: 40000 })
    cy.wait(30000);
});

When(`Selects {string} Provide Decision selects {string} status and writes {string} comment on Provide Decision`, (mode, status, comment) => {
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/providedecision/**`).as('destinationQueue');
    cy.get(`[aria-label="${mode}"] > .p-button-label`, { timeout: 30000 }).contains(mode).click({ force: true });
    cy.get('#comments').type(comment);
    cy.get('#taxDocumentStatusReasonId > .gx-select__control', { timeout: 30000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains(status).click({ force: true });
    cy.get('#destinationRequestId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('LT - Pedido de Retificação Tax Documents').click();

    cy.get('.gx-form-header').find('#gx-form__submit-button').contains('Save').click({ force: true });
    cy.wait('@destinationQueue', { timeout: 30000 });
});

When(`Selects {string} Provide Decision selects {string} status 2 and writes {string} comment on Provide Decision`, (mode, status, comment) => {
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/providedecision/**`).as('destinationQueue');
    cy.get(`[aria-label="${mode}"] > .p-button-label`, { timeout: 30000 }).contains(mode).click({ force: true });
    cy.get('#comments').type(comment);
    cy.get('#taxDocumentStatusReasonId > .gx-select__control', { timeout: 30000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains(status).click({ force: true });
    // cy.get('#destinationRequestId > .gx-select__control').click();
    // cy.get('.gx-select__menu', { timeout: 30000 }).contains('LT - Pedido de Retificação Tax Documents').click();

    cy.get('.gx-form-header').find('#gx-form__submit-button').contains('Save').click({ force: true });
    cy.wait('@destinationQueue', { timeout: 30000 });
});

// When(`Filters by the {string} in the Status field of the Tax Documents screen`, (status) => {
//     cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/rejectederrors?**`).as('filterApplied');
//     cy.wait(500); //reduce the possibility of error
//     cy.get(`th div[datacy="taxDocumentStatusId"]`, { timeout: 15000 })
//         .scrollIntoView()
//         .contains('All')
//         .click();
//     cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
//         .should('be.visible')
//         .type(status.trim());
//     cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 })
//         .contains(RegExp(`^${status.trim()}$`, 'i'))
//         .click();
//     cy.wait('@filterApplied');    
// });

When(`Ordination the Tax Documents table by the {string} column in Ascending and Descending order`, (column) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/taxdocuments?showMode=all&first=0&count=15&countTotalRecords=true`).as('taxDocumentsDefault');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/taxdocuments?showMode=all&first=0&count=15&orderBy=*&countTotalRecords=true`).as('taxDocumentsAsc');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/taxdocuments?showMode=all&first=0&count=15&orderBy=*&countTotalRecords=true&desc`).as('taxDocumentsDesc');
    cy.wait('@taxDocumentsDefault');
    cy.get('.p-column-title').contains(column).should('be.visible').click();
    cy.wait('@taxDocumentsAsc', { timeout: 30000 });
    cy.get('.p-column-title').contains(column).should('be.visible').click();
    cy.wait('@taxDocumentsDesc', { timeout: 30000 });
});

When(`Filters by {string} in the Status field of the Tax Documents table screen`, (status) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/rejectederrors?**`).as('filterApplied');
    cy.get(`[datacy="taxDocumentStatusId"]`).scrollIntoView().should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.wait('@filterApplied');
});
  
When(`Filters by {string} in the Status Reason field of the Tax Documents table screen`, (status) => {
    cy.get(`[datacy="taxDocumentStatusReasonId"]`).scrollIntoView().should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
});
  
When(`Filters by {string} in the Document Type field of the Tax Documents table screen`, (type) => {
    cy.get(`[datacy="taxDocumentTypeId"]`).scrollIntoView().should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === type);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${type}' not found.`);
        }
    });
});

When(`Filters by {string} in the Payment Request Status field of the Tax Documents table screen`, (type) => {
    cy.get(`[datacy="requestTaskPaymentStatusId"]`).scrollIntoView().should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === type);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${type}' not found.`);
        }
    });
});

When(`Filters by {string} in the Portfolio Group field of the Tax Documents table screen`, (type) => {
    cy.get(`[datacy="portfolioGroupIds"]`).scrollIntoView().should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === type);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${type}' not found.`);
        }
    });
});

When(`Filters by {string} in the Transaction Type field of the Tax Documents table screen`, (type) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/**`).as('filterApplied');
    
    cy.get(`[datacy="paymentTypeIds"]`).scrollIntoView().should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === type);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${type}' not found.`);
        }
    });
});
