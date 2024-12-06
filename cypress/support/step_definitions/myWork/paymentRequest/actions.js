import { Step, When } from "@badeball/cypress-cucumber-preprocessor";
const { faker } = require('@faker-js/faker');

const payment = faker.number.int({ min: 1, max: 5 });
const supplier = faker.number.int({ min: 1, max: 4 });
const entity = faker.number.int({ min: 10000, max: 99999 });
const reference = faker.number.int({ min: 100000000, max: 999999999 });

When(`Fills in all Payment Request data with Document`, () => {
    cy.get('#startDate > .p-button').click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Certidão - Legal');
    cy.get('.gx-select__menu').contains('Certidão - Legal', { timeout: 50000 }).should('be.visible').click();
    cy.get('#amount > .p-inputtext').clear().type('1000');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control > .gx-select__indicators > .gx-select__advanced-filter`).click();
    cy.get(`#AdvancedFilterList > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(${payment})`, { timeout: 40000 }).click({ force: true });
    cy.get('.col > .p-button > .p-button-label').should('exist').contains('Confirm selection').click();

    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();
    cy.get('#supplierProvidedServicesId > .gx-select__control > .gx-select__indicators > .gx-select__advanced-filter', { timeout: 40000 }).click();
    cy.get(`#AdvancedFilterList > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(${faker.number.int({ min: 1, max: 14 })})`, { timeout: 40000 }).click();
    cy.get('.col > .p-button > .p-button-label').should('exist').contains('Confirm selection').click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Payment of Service').should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type(entity);
    cy.get('#paymentReference', { timeout: 40000 }).type(reference);

    cy.get('[class^="RequestTaskPaymentDocumentsDataTable_autocomplete-wrapper"]', { timeout: 40000 })
        .find('[class^="QuickAdd_autocomplete"] > .gx-select__control > .gx-select__indicators > .gx-select__advanced-filter').click();
    cy.get(`#AdvancedFilterList > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(${supplier})`, { timeout: 70000 }).click();
    cy.get('.col > .p-button > .p-button-label').contains('Confirm selection').click();
    cy.wait(1000);
    cy.get(`[class^="RequestTaskPaymentDocumentsDataTable_autocomplete-wrapper"]`, { timeout: 40000 })
        .find('[class^="QuickAdd_quick-add-wrapper"] > button').click();
});

When(`Fills in Payment Request data {string} Payment Context and {string} Payment Types without select Document`, (context, type) => {
    cy.get('#startDate > .p-button').click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains(context).should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type(type);
    cy.get('.gx-select__menu').contains(type, { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get('#amount > .p-inputtext').clear().type('1000');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control > .gx-select__indicators > .gx-select__advanced-filter`).click();
    cy.get(`#AdvancedFilterList > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(${payment})`, { timeout: 40000 }).click({ force: true });
    cy.get('.col > .p-button > .p-button-label').should('exist').contains('Confirm selection').click({ force: true });

    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();
    cy.get('#supplierProvidedServicesId > .gx-select__control > .gx-select__indicators > .gx-select__advanced-filter', { timeout: 40000 }).click();
    cy.get(`#AdvancedFilterList > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(${faker.number.int({ min: 2, max: 12 })})`, { timeout: 40000 }).click({ force: true });
    cy.get('.col > .p-button > .p-button-label').should('exist').contains('Confirm selection').click({ force: true });

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type(entity);
    cy.get('#paymentReference', { timeout: 40000 }).type(reference);
});

When(`Fills in Payment Request data {string} Payment Context, {string} Payment Types and {string} Legal Case Instance without select Document`, (context, type, lci) => {
    cy.get('#startDate > .p-button').click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains(context).should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type(type);
    cy.get('.gx-select__menu').contains(type, { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get('#amount > .p-inputtext').clear().type('550');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type(lci);
    cy.wait(2000);
    cy.get('.gx-select__menu', { timeout: 40000 }).contains(lci, { timeout: 30000 }).first().click({ force: true });

    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();
    cy.get('#supplierProvidedServicesId > .gx-select__control > .gx-select__indicators > .gx-select__advanced-filter', { timeout: 40000 }).click();
    cy.get(`#AdvancedFilterList > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(${faker.number.int({ min: 2, max: 12 })})`, { timeout: 40000 }).click({ force: true });
    cy.get('.col > .p-button > .p-button-label').should('exist').contains('Confirm selection').click({ force: true });

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type(entity);
    cy.get('#paymentReference', { timeout: 40000 }).type(reference);
});

When(`Fills in Payment Request data Asset Payment Context {string} Payment Types, {string} item and {string} supplier`, (type, item, supplier) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/contactbook/supplierprovidedservices/*/bankAccounts?first=0&count=1000`).as('bankAccounts');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/autocomplete?search=**`).as('assetSearch');
    cy.get('#startDate > .p-button', { timeout: 60000 }).click();
    cy.get('.p-datepicker-today').click();

    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Asset').should('be.visible').click();
    
    cy.wait(2000);//reduce the possibility of error
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type(type);
    cy.get('.gx-select__menu').contains(type, { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get('#amount > .p-inputtext').clear().type('123.00');
    
    cy.wait(2000);//reduce the possibility of error
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type(item);
    cy.get('.gx-select__menu').contains(item, { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type(supplier);
    cy.wait('@assetSearch', { timeout: 30000 })
    cy.get('.gx-select__menu').contains(supplier, { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Bank Transfer', { timeout: 30000 }).should('be.visible').click();

    cy.wait('@bankAccounts', { timeout: 40000 });
    cy.wait(2000);//reduce the possibility of error
    cy.get('#paymentBankAccountId > .gx-select__control').scrollIntoView().should('be.visible').click();    
    cy.get(`.gx-select__menu`, { timeout: 30000 }).contains('NOVO BANCO, SA', { timeout: 30000 }).should('be.visible').click();
});

When(`Fills in Payment Request data Asset Payment Context Blue Prints Payment Types`, () => {
    cy.get('#startDate > .p-button', { timeout: 50000 }).click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Asset').should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Blue Prints');
    cy.get('.gx-select__menu').contains('Blue Prints', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get('#amount > .p-inputtext').clear().type('123.00');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type('59202');
    cy.get('.gx-select__menu').contains('59202', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(1500);//reduce the possibility of error
    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type('Camara Municipal de Sintra');
    cy.get('.gx-select__menu').contains('Camara Municipal de Sintra', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type('20624');
    cy.get('#paymentReference', { timeout: 40000 }).type('402775971');
});

When(`Fills in Payment Request data Legal Case Instance Payment Context Custas de Parte Payment Types`, () => {
    cy.get('#startDate > .p-button', { timeout: 50000 }).click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Custas de Parte');
    cy.get('.gx-select__menu').contains('Custas de Parte', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();
    cy.get('#amount > .p-inputtext').clear().type('123.00');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type('103743/23.0YIPRT');
    cy.get('.gx-select__menu').contains('103743/23.0YIPRT', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(1500);//reduce the possibility of error
    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type('André Sequeira Costa');
    cy.get('.gx-select__menu').contains('André Sequeira Costa', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type('20624');
    cy.get('#paymentReference', { timeout: 40000 }).type('402775971');
});

When(`Fills in Payment Request data Legal Case Instance Payment Context Custas Judiciais - Taxa de Justiça - Injunção Payment Types`, () => {
    cy.get('#startDate > .p-button', { timeout: 50000 }).click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Custas Judiciais - Taxa de Justiça - Injunção');
    cy.get('.gx-select__menu').contains('Custas Judiciais - Taxa de Justiça - Injunção', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();
    cy.get('#amount > .p-inputtext').clear().type('123.00');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type('28181/24.0YIPRT');
    cy.get('.gx-select__menu').contains('28181/24.0YIPRT', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(1500);//reduce the possibility of error
    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type('Balcão Nacional de Injunções');
    cy.get('.gx-select__menu').contains('Balcão Nacional de Injunções', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type('10641');
    cy.get('#paymentReference', { timeout: 40000 }).type('159062517');
});

When(`Fills in Payment Request data Legal Case Instance Payment Context Tax - Property Transfer Payment Types`, () => {
    cy.get('#startDate > .p-button', { timeout: 100000 }).click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').should('be.visible', { timeout: 60000 }).click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Tax - Property Transfer');
    cy.get('.gx-select__menu').contains('Tax - Property Transfer', { timeout: 50000 }).should('be.visible', { timeout: 60000 }).click();
    cy.get('#amount > .p-inputtext').clear().type('123.00');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type('60160/23.0YIPRT');
    cy.get('.gx-select__menu').contains('60160/23.0YIPRT', { timeout: 80000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(3000);//reduce the possibility of error
    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type('Autoridade Tributária e Aduaneira');
    cy.get('.gx-select__menu').contains('Tax Office - 600084779', { timeout: 80000 }).should('be.visible', { timeout: 30000 }).click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('State Payment', { timeout: 50000 }).should('be.visible').click();
    cy.get('#paymentReference', { timeout: 30000 }).type('163724012041002');
});



When(`Wait for the Payment Request table loaded`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/**`).as('defaultPaymentRequest');
});
  
When(`Wait for filter applied in the Payment Request table`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment?showMode=all&first=0&count=15&filters**`).as('filterApplied');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment?showMode=all&isdraft=true&first=0&count=15&filters**`).as('filterApplied');
    cy.intercept('GET', new RegExp(`${Cypress.env('BASE_URL')}/api/requests/requesttaskpayment\\?showMode=all&first=0&count=15(&orderBy=[^&]*&)?filters.*`)).as('filterApplied');
});

When(`Wait for the Tax Document table loaded on Payment Request screen`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentrequesttaskpayment/*/documents?first=0&count=15&countTotalRecords=true`).as('defaultTaxDocuments');
});
  
When(`Wait for filter applied in the Tax Document table on Payment Request screen`, () => {
    cy.intercept({
        method: 'GET',
        url: new RegExp(`${Cypress.env('BASE_URL')}/api/documentation/documentrequesttaskpayment/.*filters=.*`)
      }).as('filterApplied');
});

When(`Clicks on the {string} button under Current Status on the Payment Request screen`, (label) => {
    cy.get('button.p-button.ml-3', { timeout: 50000 }).should('exist').and('be.enabled');
    cy.get('.p-card-content > .p-toolbar > .p-toolbar-group-right > .p-button', { timeout: 50000 }).should('be.exist').and('be.enabled');
    cy.contains(label, { timeout: 50000 }).scrollIntoView().click({ force: true });
});

When(`Types {string} comments for Validation`, (comment) => {
    cy.get('#comment').click({ force: true }).type(comment);
});

When(`Types {string} in the comment field and sets the field to {string} is Valid in the Provide Validation`, (comment, valid) => {
    cy.get('#isValid > .p-inputswitch-slider').click({ force: true });
    cy.get('#comment').click({ force: true }).type(comment);
});

When(`Selects {string} mode and Submit to Bank`, (mode) => {
    cy.get('#payerBankAccountId').should('be.visible');
    cy.get(`[aria-label="${mode}"] > .p-button-label`, { timeout: 30000 }).contains(mode).should('be.visible').click({ force: true });
});

When(`Selects the Tax Document with the {string} Name on Payment Request screen`, (name) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation//documentstaxinfo/accountingpagereport`).as('accountingReport');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents?domainEntityId=10&entityId=**`).as('documentsTabLoaded');
    cy.get('[datacy="documentName"] a').contains(name).click();
});

When(`Intercepts Accounting report`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment//accountingpagereport`).as('accountingReport');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/finance/accountingrecords/**`).as('documentsAccountingrecords');
});

When(`Clicks and Edits the first Tax Details associated with Payment Request with {string} reason on Document screen`, (reason) => {
    cy.intercept('PUT', Cypress.env('BASE_URL') + `/api/documentation/documents/taxinfo/**`).as('editTaxDetail');
    
    cy.get('[datacy="documentName"] a').first().click();
    cy.wait(3000);
    cy.get('.p-accordion-tab', { timeout: 40000 }).contains('Tax Details', { timeout: 40000 }).should('be.visible').click();
    cy.get('.p-accordion-tab').contains('Tax Details').find('button').contains('span', 'Edit').click();
    cy.wait(1000);
    cy.get('#documentNumber').type('1234-automation');
    cy.wait(1000);
    cy.get('#taxDocumentStatusId > .gx-select__control', { timeout: 30000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).first().contains('Accounting Validation', { timeout: 30000 }).click()
    cy.wait(1000)
    cy.get('#taxDocumentStatusReasonId > .gx-select__control', { timeout: 30000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).first().contains(reason, { timeout: 30000 }).click();
    cy.wait(1000);
    
    cy.contains('Save')
        .scrollIntoView()
        .click({ force: true });
    cy.wait('@editTaxDetail', { timeout: 30000});
    cy.wait(2000);

});

When(`Clicks and Edits the Legal Details {string} associated with Payment Request`, (lci) => {
    cy.intercept('PUT', Cypress.env('BASE_URL') + `/api/documentation/documents/*/legalinfo`).as('editLegalDetail');
    
    cy.get('[datacy="documentName"] a').first().click();
    cy.wait(3000);
    cy.get('.p-accordion-tab', { timeout: 40000 }).contains('Legal Details', { timeout: 40000 })
        .find('button').contains('span', 'Edit').click();
    cy.wait(2000);
    cy.get('[class^="QuickAdd_autocomplete"]', { timeout: 30000 }).type(lci);
    cy.wait(1000);
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').get('.gx-select__option', { timeout: 15000 })
        .contains(lci).click({ force: true });
    cy.get('[class^="QuickAdd_quick-add-wrapper"] > .p-button', { timeout: 15000 }).contains('Add').click({ force: true });
    cy.wait(1000)
    cy.wait(1000);
    
    cy.contains('Save')
        .scrollIntoView()
        .click({ force: true });
    cy.wait('@editLegalDetail', { timeout: 30000});
    cy.wait(2000);
});

When(`Selects {string} decision on Provide Decision`, (mode) => {
    cy.wait(3000);
    cy.get('#paymentDate').click();
    cy.get('.p-datepicker-today').click();
    cy.get(`[aria-label="${mode}"] > .p-button-label`, { timeout: 30000 }).contains(mode).click({ force: true });
});

When(`Selects Reject decision on Provide Decision in Payment Accounting`, () => {
    cy.get(`[aria-label="Reject"] > .p-button-label`, { timeout: 30000 }).contains('Reject').click({ force: true });
    cy.get('#comment').type('Payment Accounting test');
    cy.get('#paymentRequestStatusReasonId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('NOK-Doc Inválido').click();
    cy.get('#destinationRequestId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('LT - Pedido de Retificação Payment Request').click();
});

When(`Selects {string} decision on Provide Decision in Payment Accounting`, (mode) => {
    cy.get(`[aria-label="${mode}"] > .p-button-label`, { timeout: 30000 }).contains(mode).click({ force: true });
    cy.get('#comment').type('Payment Accounting test');
});

When(`Confirm {string} Payment Request`, (sidebarTitle) => {
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/sendtoaccounting`).as('confirmAccounting');    
    cy.get('.p-button-info > .p-button-label').contains('Yes').click();
    cy.wait('@confirmAccounting', { timeout: 80000 });
});

When(`Selects the Payment Request Id`, () => {
    cy.get('strong', { timeout: 40000 }).invoke('text').then((paymentId) => {
        cy.wrap(paymentId).as('paymentId');
    });
});

When(`Filters by Payment Id in table screen`, () => {
    cy.get('@paymentId').then(id => {
        cy.get(`th div[datacy="id"]`, { timeout: 15000 }).click().type(id);
    });
    cy.wait(2000);
});

When(`Selects {string} decision and {string} status on Provide Decision`, (mode, status) => {
    cy.get('#paymentDate').click();
    cy.get('.p-datepicker-today').click();
    cy.get(`[aria-label="${mode}"] > .p-button-label`, { timeout: 30000 }).contains(mode).click({ force: true });
    cy.get('#newStatus > .gx-select__control', { timeout: 30000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains(status).click({ force: true });
});

When(`Selects {string} Accounting Validation selects {string} status and writes {string} comment on Provide Accounting Validation`, (mode, status, comment) => {
    cy.get(`[aria-label="${mode}"] > .p-button-label`, { timeout: 30000 }).contains(mode).click({ force: true });
    cy.get('#comment').type(comment);
    cy.get('#newStatus > .gx-select__control', { timeout: 30000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains(status).click({ force: true });
});

When(`Selects {string} Accounting Validation and writes {string} comment on Provide Accounting Validation`, (decision, comment) => {
    cy.get(`[aria-label="${decision}"] > .p-button-label`, { timeout: 30000 }).contains(decision).click({ force: true });
    cy.get('#comment').type(comment);
});

When(`Delegate to {string} user on Provide Decision`, (user) => {
    cy.get('#paymentDate').click();
    cy.get('.p-datepicker-today').click();
    cy.get(`[aria-label="Delegate"] > .p-button-label`, { timeout: 30000 }).should('contain', 'Delegate').click({ force: true });
    cy.get('#delegatedUserId > .gx-select__control', { timeout: 30000 }).type(user);
    cy.get('.gx-select__menu', { timeout: 30000 }).first().contains(user).click();
});

When(`Selects first Payment Request from datatable`, () => {
    cy.wait('@defaultPaymentRequest', { timeout: 80000 });
    cy.get(`td div[datacy="id"] a`, { timeout: 50000 }).first().click();
});

When(`Selects first Payment Request Id from datatable`, () => {
    cy.wait('@defaultPaymentRequest', { timeout: 80000 });
    cy.get(`td div[datacy="id"] a`, { timeout: 50000 }).first().invoke('text').then((paymentId) => {
        cy.wrap(paymentId).as('paymentId');
    });
});

When(`Clicks on Activity in Payment Request to view the activities`, () => {
    cy.get(`.p-menuitem-text > .instancemenu__item-label`, { timeout: 50000 })
        .first().should('contain', 'Activity').click();
});

When(`Filters by {string} in the AI Integration Status field of the Tax Documents table on Payment Request screen`, (integration) => {
    cy.get(`select[name="aiIntegrationStatus"]`).should('be.visible').select(integration);
});

When(`Clicks on {string} button in Payment Request details`, (label) => {
    cy.get('[class^="Tile_container"] >> .p-button').contains(label).click({ force: true });
});

When(`Types {string} in comment field on Payment Request edition`, (comment) => {
    cy.wait(1500);
    cy.get('.p-sidebar-content').should('be.visible');
    cy.get('#comment').should('be.visible', {timeout: 20000}).type(comment, {delay: 10});
});

When(`Clicks on {string} to filter by ascending Payment Request datatable`, (clumnName) => {
    Step(this, `Wait for filter applied in the Payment Request table`);
    cy.get(".p-datatable-thead").contains(RegExp(`^${clumnName}$`, 'i')).click({ force: true });
    cy.wait('@filterApplied', {timeout: 20000});
});

When(`Clicks on {string} to filter by descending Payment Request datatable`, (clumnName) => {
    cy.get(".p-datatable-thead").contains(RegExp(`^${clumnName}$`, 'i')).click({ force: true });
    cy.get(".p-datatable-thead").contains(RegExp(`^${clumnName}$`, 'i')).click({ force: true });
});

When(`Filters by {string} in the Status field of the Payment Request table screen`, (status) => {
    cy.get(`[datacy="statusId"]`).should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="statusId"]`).click();
});

When(`Filters by {string} in the Service Type field of the Payment Request table screen`, (status) => {
    cy.get(`[datacy="serviceTypeId"]`).should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="serviceTypeId"]`).click();
});

When(`Filters by {string} in the Payment Context field of the Payment Request table screen`, (context) => {
    cy.get('[datacy="domainEntityId"]').should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item').contains(context)
        .should('be.visible').click();
});

When(`Selects {string} tab on the Payment Request table screen`, (title) => {
    cy.contains('h2', title).click();
});

When(`Filters by {string} in the Rejected field of the Payment Request table screen`, (status) => {
    cy.get(`select[name="wasRejected"]`).should('be.visible').select(status);
});

When(`Filters by {string} in the Type field of the Payment Request table screen`, (status) => {
    cy.get(`[datacy="paymentTypeId"]`).should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).scrollIntoView().should('be.visible').click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="paymentTypeId"]`).should('be.visible').click();
});

When(`Filters by {string} in the Portfolio field of the Payment Request table screen`, (status) => {
    cy.get(`[datacy="portfolioIds"]`).should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).scrollIntoView().click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="portfolioIds"]`).should('be.visible').click();
});

When(`Fills in all Payment Request data in LCI screen`, () => {
    cy.get('#priorityId').click();
    cy.get('.gx-select__menu', { timeout: 15000 }).contains('High').should('be.visible').click();
  
    cy.get('#dueDate').click();
    cy.get('.p-datepicker-today').click();
  
    cy.get('#transactionTypeId').click();
    cy.get('.gx-select__menu', { timeout: 15000 }).contains('Tax - Property Transfer').should('be.visible').click();

});

When(`Selects the Payment Request created`, () => {
    cy.wait(2000);
    const currentDate = new Date().toISOString().split('T')[0]; // Format 'YYYY-MM-DD'
  
    cy.get('tr.p-selectable-row').each(($row) => {
        const requester = $row.find('div[datacy="requester"]').text().trim();
        const createdDate = $row.find('div[datacy="created"]').text().trim();
    
        if (requester.includes('galaxy.testmanager3') &&  createdDate === currentDate) {
            cy.wrap($row).find('div.p-checkbox-box').click();
        }
    });
});

When(`Relates the entity {string} to Legal Notifications`, (lci) => {
    cy.get('#selectentities > .gx-select__control').click().type('Legal Case Instance');
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').click();

    cy.get(`[class^="QuickAdd_autocomplete"] > .gx-select__control`, { timeout: 40000 }).click().type(lci);
    cy.wait(1000);
    cy.get('.gx-select__menu', { timeout: 40000 }).contains(lci, { timeout: 30000 }).first().click({ force: true });

    cy.get('[class^="QuickAdd_quick-add-wrapper"] > .p-button', { timeout: 15000 }).contains('Add').click({ force: true });
});

When(`Clicks on the {string} tab in showmore on the Payment Request screen`, (label) => {
    cy.wait(1000);
    cy.get('[aria-haspopup="true"]').first().click();
    cy.get('.p-megamenu-submenu >> .p-menuitem-link > .p-menuitem-text > [class^="Title_title"]')
        .contains(label, { timeout: 40000 }).click();
});

When(`Filters by {string} in the Id field of the Payment Request table screen`, (id) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/waitingaccounting?showMode=all&first=0&count=15&orderBy=id+desc&filters=id**`).as('filterId');  
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/waitingaccounting?showMode=all&first=0&count=15&filters=id**`).as('filterId');  
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/rejectedorwitherros?showMode=all&first=0&count=15&filters=id**`).as('filterId');  
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment//accountingpagereport`).as('accountingReport');
    cy.get('input[name="id"]', { timeout: 40000 }).click().type(id);
    cy.wait('@filterId', { timeout: 30000 });
});

When(`Confirms {string} on sidebar opened`, (label) => {
    cy.get('.sidebar-title').contains(label);
    cy.get('.p-button-info').contains('Yes').click();
    cy.wait(3000);
});

When(`Fills the data to Invalidate the Legal Notification`, () => {
    cy.get('.p-sidebar').should('be.visible');
    cy.get('#invalidComment').type('Invalidate automation test');
    cy.get('#legalNotificationStatusReasonId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contain('Does not belong to this investor.').click();
    cy.wait(2000);
});

When(`Selects the 1st Payment Request from the list`, () => {
    cy.get('tr.p-selectable-row', { timeout: 80000 }).eq(0).find('td div[datacy="id"]').invoke('text').then((idPR) => {
        cy.wrap(idPR.trim()).as('paymentId');
    });
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 40000 })
        .eq(0).click();
});

When(`Filters by Payment Request Id in Payment Request screen`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/rejectedorwitherros?showMode=all&first=0&count=15&filters=id**`).as('filterApplied');
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/rejectedorwitherros/export**`).as('rejectedOrWithErrosReport');
    cy.get('@paymentId').then(id => {
        const paymentId = id.trim();
        cy.get(`th div[datacy="id"] input`, { timeout: 15000 }).type(paymentId);
    });
    cy.wait('@filterApplied', { timeout: 30000 });
});

When(`Filters by Payment Request Id on the Waiting Accounting Validation tab on Payment Request screen`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/waitingaccountingvalidation?showMode=all&first=0&count=15&filters=id**`).as('filterApplied');
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/requests/requesttaskpayment/waitingaccountingvalidation/export?**`).as('waitingaccountingvalidationReport');
    cy.get('@paymentId').then(id => {
        const paymentId = id.trim();
        cy.get(`th div[datacy="id"] input`, { timeout: 15000 }).type(paymentId);
    });
    cy.wait('@filterApplied', { timeout: 30000 });
});


///////// TAX DOCUMENTS /////////
When(`Selects {string} Tax Documents`, (document) => {
    cy.get('#documentId > .gx-select__control', { timeout: 30000 }).click().type(document);
    cy.get('.gx-select__menu', { timeout: 40000 }).contains(document).should('be.visible').click();
    cy.wait(1000);
});

When(`Add one {string} Tax Documents on Payment Request`, (document) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents/autocomplete?search**`).as('autocomplete');    
    cy.get('#documentId > .gx-select__control', { timeout: 30000 }).should('be.visible').type(document);
    cy.wait('@autocomplete', { timeout: 40000 });
    cy.get('.gx-select__menu', { timeout: 40000 }).then($options => {
        const itemCount = $options.length;
        const randomIndex = Math.floor(Math.random() * itemCount);
        cy.wrap($options[randomIndex]).click();
    });
    cy.wait(1000);
});

When(`Clicks on {string} button in Tax Documents`, (label) => {
    cy.get('body').then(($body) => {
        if ($body.find(`.d-block .p-button-label:contains("${label}")`).is(':visible')) {
            cy.get('.d-block .p-button-label')
                .contains(label)
                .should('be.visible')
                .click({ force: true });
        } else {
            cy.get('.gx-toolbar-menu .p-button').should('contain', 'Menu').first().click();
            cy.get('.p-menuitem')
                .contains(label)
                .should('be.visible')
                .click({ force: true });
        }
    });
});

When(`Filters by the Document Type field of the Tax Documents table on Payment Request screen`, () => {
    Step(this, `Wait for filter applied in the Tax Document table on Payment Request screen`);
    cy.get('tbody.p-datatable-tbody tr').first().find(`td div[datacy="documentType"]`).invoke('text').as('firstRow');
    cy.get('@firstRow').then((type) => {    
        cy.wait(500); //reduce the possibility of error
        cy.get(`th div[datacy="taxDocumentTypeId"]`, { timeout: 15000 }).contains('All').click();
        cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
            .should('be.visible').click({ force:true });
        cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
            .should('be.visible').type(type, { force:true });
        cy.wait(2000).get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${type.trim()}$`, 'i')).click();
        
    });
});

When(`Filters by the Reason field of the Tax Documents table on Payment Request screen`, () => {
    Step(this, `Wait for filter applied in the Tax Document table on Payment Request screen`);
    cy.get('tbody.p-datatable-tbody tr').first().find(`td div[datacy="reason"]`).invoke('text').as('firstRow');
    cy.wait(500).get('@firstRow').then((reason) => {    
        cy.wait(500); //reduce the possibility of error
        cy.get(`th div[datacy="taxDocumentStatusreasonId"]`, { timeout: 15000 }).contains('All').click();
        cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
            .should('be.visible').click({ force:true });
        cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
            .should('be.visible').type(reason, { force:true });
        cy.wait(2000).get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${reason.trim()}$`, 'i')).click();
        
    });
});

When(`Filters by the Status field of the Tax Documents table on Payment Request screen`, () => {
    Step(this, `Wait for filter applied in the Tax Document table on Payment Request screen`);
    cy.get('tbody.p-datatable-tbody tr').first().find(`td div[datacy="status"]`).invoke('text').as('firstRow');
    cy.get('@firstRow').then((status) => {    
        cy.wait(500); //reduce the possibility of error
        cy.get(`th div[datacy="taxDocumentStatusId"]`, { timeout: 15000 }).contains('All').click();
        cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
            .should('be.visible').click({ force:true });
        cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
            .should('be.visible').type(status.trim(), { force:true });
        cy.wait(2000).get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${status.trim()}$`, 'i')).click();
        
    });
});
  

/////// FOR LEGAL NOTIFICATIONS ////////

When(`Fills in Payment Request data 871.22.0T8OAZ Legal Case Instance`, () => {
    cy.get('#startDate > .p-button', { timeout: 50000 }).click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Custas');
    cy.get('.gx-select__menu').contains('Custas de Parte', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();
    cy.get('#amount > .p-inputtext').clear().type('325.12');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type('871/22.0T8OAZ');
    cy.get('.gx-select__menu').contains('871/22.0T8OAZ', { timeout: 50000 }).should('exist')
        .parent().contains('EVORA-WS', { timeout: 30000 }).should('exist').click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(1500);//reduce the possibility of error
    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type('219814457');
    cy.get('.gx-select__menu').contains('Carmen Costa', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type(entity);
    cy.get('#paymentReference', { timeout: 40000 }).type(reference);

});

When(`Fills in Payment Request data 10639.19.5T8PRT Legal Case Instance`, () => {
    cy.get('#startDate > .p-button', { timeout: 50000 }).click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Provisão - Conta Final');
    cy.get('.gx-select__menu').contains('Provisão - Conta Final - Honorários', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();
    cy.get('#amount > .p-inputtext').clear().type('1765.32');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type('10639/19.5T8PRT');
    cy.get('.gx-select__menu').contains('10639/19.5T8PRT', { timeout: 50000 })
        .should('exist').click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(1500);//reduce the possibility of error
    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type('130184446');
    cy.get('.gx-select__menu').contains('Maria Jose Ropio', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type(entity);
    cy.get('#paymentReference', { timeout: 40000 }).type(reference);

});

When(`Fills in Payment Request data 39299.23.7YIPRT Legal Case Instance`, () => {
    cy.get('#startDate > .p-button', { timeout: 50000 }).click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Provisão - Conta Final');
    cy.get('.gx-select__menu').contains('Provisão - Conta Final - Honorários', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();
    cy.get('#amount > .p-inputtext').clear().type('104.86');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type('39299/23.7YIPRT');
    cy.get('.gx-select__menu').contains('39299/23.7YIPRT', { timeout: 50000 })
        .should('exist').click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(1500);//reduce the possibility of error
    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type('200699350');
    cy.get('.gx-select__menu').contains('Joana Magalhães Pereira', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type(entity);
    cy.get('#paymentReference', { timeout: 40000 }).type(reference);

});

When(`Fills in Payment Request data 1635.23.9T8SRE Legal Case Instance`, () => {
    cy.get('#startDate > .p-button', { timeout: 50000 }).click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Provisão - Conta Final');
    cy.get('.gx-select__menu').contains('Provisão - Conta Final - Honorários', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();
    cy.get('#amount > .p-inputtext').clear().type('1000.00');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type('1635/23.9T8SRE');
    cy.get('.gx-select__menu').contains('1635/23.9T8SRE', { timeout: 50000 })
        .should('exist').click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(1500);//reduce the possibility of error
    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type('127394559');
    cy.get('.gx-select__menu').contains('JORGE VIEIRA PINTO', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type(entity);
    cy.get('#paymentReference', { timeout: 40000 }).type(reference);

});

When(`Fills in Payment Request data 7219.23.4YLPEP Legal Case Instance`, () => {
    cy.get('#startDate > .p-button', { timeout: 50000 }).click();
    cy.get('.p-datepicker-today').click();
    cy.get('#selectentities > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').should('be.visible').click();
    cy.get('#paymenttype > .gx-select__control', { timeout: 40000 }).click().type('Provisão - Conta Final');
    cy.get('.gx-select__menu').contains('Provisão - Conta Final - Honorários', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();
    cy.get('#amount > .p-inputtext').clear().type('1000.00');
    
    cy.get(`[class^="QuickAdd_autocomplete-with-amount"] > .gx-select__control`).click().type('7219/23.4YLPEP');
    cy.get('.gx-select__menu').contains('7219/23.4YLPEP', { timeout: 50000 })
        .should('exist').click();
    cy.get(`.col-md-12 > [class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();

    cy.get(1500);//reduce the possibility of error
    cy.get(`#supplierProvidedServicesId > .gx-select__control`, { timeout: 40000 }).click().type('500963126');
    cy.get('.gx-select__menu').contains('ORDEM SOLICITADORES E AGENTES EXECUÇÃO', { timeout: 50000 }).should('be.visible', { timeout: 30000 }).first().click();

    cy.get('#paymentMethodId > .gx-select__control', { timeout: 40000 }).click();
    cy.get('.gx-select__menu', { timeout: 30000 }).contains('Payment of Services', { timeout: 30000 }).should('be.visible').click();
    cy.get('#paymentEntity', { timeout: 40000 }).type(entity);
    cy.get('#paymentReference', { timeout: 40000 }).type(reference);

});