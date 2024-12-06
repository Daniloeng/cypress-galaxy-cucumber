import { When } from '@badeball/cypress-cucumber-preprocessor';
import {
  createDocument, createDocumentRecent, createDocumentSent,
  createDocumentReceived, createDocumentDebt, createDocumentCashflow,
  createDocumentLegalCase,
  createDocumentCustomer, createDocumentAsset
} from '../../../apiServices/documents/documentsServices';

let createdDocumentName;

When(`Created document by API for merging porpuses in All tab`, () => {
  cy.uploadFile('files', 'docLegalCaseMerge.pdf').then((fileId)=>{
    createDocument('LegalCase', fileId).then((document) => {
    });
  });
  cy.uploadFile('files', 'docLegalCaseMerge2.pdf').then((fileId)=>{
    createDocument('LegalCase', fileId).then((document) => {
    });
  });
});

When(`Created document by API for tab Sent`, () => {
  cy.uploadFile('files', 'docCreationSent.pdf').then((fileId) => {
    createDocumentSent('Sent', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Edit porpuses in Sent tab`, () => {
  cy.uploadFile('files', 'docSentEdit.pdf').then((fileId) => {
    createDocumentSent('Sent', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Split porpuses in Sent tab`, () => {
  cy.uploadFile('files', 'docSentSplit.pdf').then((fileId) => {
    createDocumentSent('Sent', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for tab Received`, () => {
  cy.uploadFile('files', 'docCreationReceived.pdf').then((fileId) => {
    createDocumentReceived('Received', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Edit porpuses in Received tab`, () => {
  cy.uploadFile('files', 'docReceivedEdit.pdf').then((fileId) => {
    createDocumentReceived('Received', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Split porpuses in Received tab`, () => {
  cy.uploadFile('files', 'docReceivedSplit.pdf').then((fileId) => {
    createDocumentReceived('Received', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Edit porpuses in Recent tab`, () => {
  cy.uploadFile('files', 'editRecent.pdf').then((fileId) => {
    createDocumentRecent('Recent', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Split porpuses in Recent tab`, () => {
  cy.uploadFile('files', 'docSplit.pdf').then((fileId) => {
    createDocumentRecent('Recent', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for tab {string}`, (docTab) => {
  cy.uploadFile('files', 'docCreation.pdf').then((fileId) => {
    createDocument(docTab, fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});


When(`Created document by API for Split porpuses in tab {string}`, (docTab) => {
  cy.uploadFile('files', 'docSplit.pdf').then((fileId) => {
    createDocument(docTab, fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Edit porpuses in tab {string}`, (docTab) => {
  cy.uploadFile('files', 'docEdit.pdf').then((fileId) => {
    createDocument(docTab, fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for tab Debts`, () => {
  cy.uploadFile('files', 'docDebts.pdf').then((fileId) => {
    createDocumentDebt('Debts', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Edit porpuses in Debts tab`, () => {
  cy.uploadFile('files', 'docDebtsEdit.pdf').then((fileId) => {
    createDocumentDebt('Debts', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Split porpuses in Debts tab`, () => {
  cy.uploadFile('files', 'docDebtsSplit.pdf').then((fileId) => {
    createDocumentDebt('Debts', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for tab Cashflow`, () => {
  cy.uploadFile('files', 'docCreationCashflow.pdf').then((fileId) => {
    createDocumentCashflow('Cashflow', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Edit porpuses in Cashflow tab`, () => {
  cy.uploadFile('files', 'docCashflowEdit.pdf').then((fileId) => {
    createDocumentCashflow('Cashflow', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Edit porpuses in Customers tab`, () => {
  cy.log('Chegou aqui')
  cy.uploadFile('files', 'docCustomersEdit.pdf').then((fileId) => {
    cy.log('Conseguiu este FileId' + fileId)
    createDocumentCustomer('Customer', fileId).then((document) => {
      createdDocumentName = document.item.title;
      cy.log('Conseguiu este documente ' + createdDocumentName)
    });
  });
});

When(`Created document by API for Split porpuses in Cashflow tab`, () => {
  cy.uploadFile('files', 'docCashflowSplit.pdf').then((fileId) => {
    createDocumentCashflow('Cashflow', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Legal Cases tab`, () => {
  cy.uploadFile('files', 'docCreationLegalCase.pdf').then((fileId) => {
    createDocumentLegalCase('LegalCase', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Edit porpuses in Legal Cases tab`, () => {
  cy.uploadFile('files', 'docLegalCaseEdit.pdf').then((fileId) => {
    createDocumentLegalCase('LegalCase', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Split porpuses in Legal Cases tab`, () => {
  cy.uploadFile('files', 'docLegalCaseSplit.pdf').then((fileId) => {
    createDocumentLegalCase('LegalCase', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Assets tab`, () => {
  cy.uploadFile('files', 'docCreationAsset.pdf').then((fileId)=>{
    createDocumentAsset('Asset', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Edit porpuses in Assets tab`, () => {
  cy.uploadFile('files', 'docAssetEdit.pdf').then((fileId)=>{
    createDocumentAsset('Asset', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Created document by API for Split porpuses in Assets tab`, () => {
  cy.uploadFile('files', 'docAssetSplit.pdf').then((fileId)=>{
    createDocumentAsset('Asset', fileId).then((document) => {
      createdDocumentName = document.item.title;
    });
  });
});

When(`Writes the document name on the search bar`, () => {
  cy.get('#DocumentsList > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).contains('Table').click({ timeout: 30000 });
  cy.get('.gx-datatable__search', { timeout: 30000 }).click().type(createdDocumentName);
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('dataTableSearchedDoc');
  cy.get('span.fa-sync').should('be.visible').click();
  cy.wait('@dataTableSearchedDoc', { timeout: 30000 });
});

When(`Selects the searched item from datatable`, () => {
  cy.wait(4000);
  cy.get('span.fa-sync', { timeout: 30000 }).should('be.visible').click();
  cy.get('.p-selectable-row', { timeout: 30000 }).contains(createdDocumentName, { timeout: 30000 })
    .get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 30000 })
    .eq(0).click({ force: true });
});

When(`Clicks on remove button`, () => {
  cy.get(':nth-child(7) > .p-button-label', { timeout: 30000 }).contains('Remove').click();
});

When(`Clicks on Yes button in sidebar`, () => {
  cy.intercept('DELETE', Cypress.env('BASE_URL') + `/api/documentation/**`).as('deletedItem');
  cy.get('.p-button-danger > .p-button-label', { timeout: 30000 }).contains('Yes').click();
});

When(`Clicks on No button in sidebar`, () => {
  cy.get('.p-sidebar').should('be.visible').as('sideBar');
  cy.get('.p-button-secondary > .p-button-label', { timeout: 30000 }).contains('No').click();
});

When(`Clicks on X button in sidebar`, () => {
  cy.get('.p-sidebar').should('be.visible').as('sideBar');
  cy.get('.p-sidebar-close-icon', { timeout: 30000 }).click();
});

When(`Clicks on Add button`, () => {
  cy.get('#DocumentsList > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).contains('Table').click({ timeout: 30000 });
  cy.get(':nth-child(5) > .p-button-label').contains('Add').click();
});

When(`Clicks on Edit button in Documents`, () => {
  cy.get(':nth-child(6) > .p-button-label').contains('Edit').click();
});

When(`Clicks on {string} button in Documents`, (label) => {
  cy.get('.d-block .p-button-label').contains(label).click();
});

When(`Clicks the first item from the table`, () => {
  cy.get(':nth-child(1) > [style="min-width: 100px;"] > div > a',{ timeout: 30000 }).should('be.visible', { timeout: 30000 }).click();
});

When(`Clicks on Activity button`, () => {
  cy.get(':nth-child(1) > .p-menuitem-link > .p-menuitem-text > .instancemenu__item-label', {timeout:30000}).contains('Activity').click();
});

When(`Clicks on History button`, () => {
  cy.get(':nth-child(2) > .p-menuitem-link > .p-menuitem-text > .instancemenu__item-label', {timeout:30000}).contains('History').click();
});

When(`Clicks on Add Comment button`, () => {  
  cy.get('.d-flex > .button-link > .p-button-label', {timeout:30000}).contains('Add Comment').click({ force: true });
});

When(`Add comment in sidebar`, () => {  
  cy.get(':nth-child(5) > :nth-child(1) > div > .p-button > .far').should('be.visible', {timeout:20000});
  cy.get('#comment', {timeout:30000}).should('be.visible', {timeout:30000}).type('business automation comment',{timeout:15000});
});

When(`Selects the first item from the table`, () => {
  cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 30000 })
        .eq(0).click();
});

When(`Selects multiple items from the table`, () => {
  cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 30000 })
        .eq(0).click();
  cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 30000 })
        .eq(1).click();
});

When(`Selects the second item from the table`, () => {
  cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 30000 })
        .eq(1).click();
});

When(`Selects the {string}º item in the table for full view`, (item) => {
  cy.get('td div[datacy="title"] a').eq(item).click();
});

When(`Selects the {string}º page`, (page) => {
  cy.get(`.p-paginator-pages > :nth-child(${page})`).contains(page).click();
});

When(`Clicks the X button to remove filter from selected documents`, () => {
  cy.get(`[class^='DataTableHeader_gx-datatable__header-info'] div button`, { timeout: 30000 }).should('exist').click();
});

When(`Clicks on the {string} message`, (message) => {
  cy.get(`[class^='DataTableHeader_gx-datatable__header-info'] button`, { timeout: 30000 }).contains(message).should('exist').click();
});

When(`Clicks on {string} button from the selected documents`, (label) => {
  cy.get(`[class^='DataTableHeader_gx-datatable__header-info'] button`, { timeout: 30000 }).contains(label).should('exist').click();
});

When(`Clicks on Split button`, () => {
  cy.get('.d-block > :nth-child(3) > .p-button-label', { timeout: 30000 })
    .contains('Split')
    .click({ force: true }, { timeout: 30000 });
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('be.visible', { timeout: 30000 });
  cy.get('#documentCategoryId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(2).click({ force: true });
  cy.get('#documentCategoryId > .gx-select__control', { timeout: 30000 }).should('have.text', 'Acordo', { timeout: 30000 });
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('have.text', 'Acordo de Pagamento', { timeout: 30000 });
});

When(`Clicks on Merge button`, () => {
  cy.get('.d-block > :nth-child(2) > .p-button-label', { timeout: 30000 })
    .contains('Merge')
    .click({ force: true }, { timeout: 30000 });
});

When(`Selects first Document from datatable`, () => {
  cy.get('#DocumentsList > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).contains('Table').click({ timeout: 30000 });
  cy.wait(4000);
  cy.get('span.fa-sync').click();
  cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 30000 })
        .eq(0).click();
});

When(`Selecting 2 items from datatable`, () => {
  cy.get('#DocumentsList > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).contains('Table').click({ timeout: 30000 });
  cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 30000 })
        .eq(0).click();
  cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 30000 })
        .eq(1).click();
});

When(`Clicks on View button`, () => {
  cy.get('#DocumentsList > .gx-select__control', { timeout: 30000 }).click();
});

When(`Clicks on customer filter button in sidebar`, () => {
  cy.get(':nth-child(5) > :nth-child(1) > div > :nth-child(2) > .far',{timeout:15000}).click();
});

When(`Chooses one of the customers debts`, () => {
  cy.get('#AdvancedFilterList > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(1) > :nth-child(2) > div',{timeout:15000}).click()
  cy.get('.col-3 > .p-button > .p-button-label').should('be.visible').contains('Confirm selection').click();
});

When(`Selects {string} option`, (tableViewOption) => {
  cy.wait(500);
  cy.get('.gx-select__menu', { timeout: 30000 }).contains(tableViewOption).click();
  cy.wait(500);
});

When(`Fills the sidebar form for creating porpuses on tab {string}`, (documentsTab) => {
  cy.get('[type="file"]', { timeout: 30000 })
    .selectFile('cypress/fixtures/files/docCreation.pdf', { force: true });
  cy.get('.p-fileupload-row > :nth-child(3) > .p-button', { timeout: 30000 }).should('be.visible');
  cy.get('#documentCategoryId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').scrollIntoView()
    .get('.gx-select__option', { timeout: 30000 }).eq(2).click({ force: true });
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 })
    .should('have.text', 'Acordo de Pagamento', { timeout: 30000 });
  cy.get('#documentStatusId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').scrollIntoView()
    .get('.gx-select__option', { timeout: 30000 }).eq(1).click({ force: true });
  cy.get('#documentDirectionId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').scrollIntoView()
    .get('.gx-select__option', { timeout: 30000 }).eq(1).click({ force: true });
  cy.get('#title', { timeout: 30000 }).type(`TestAutomationSuccess${documentsTab}`);
});

When(`Searches the created document in the search bar`, () => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('dataTableSearchedDoc');
  cy.wait(2000);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('.gx-datatable__search', { timeout: 30000 }).click().type(`AutomationHistoryBusinessTest`);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.wait('@dataTableSearchedDoc', { timeout: 30000 }).get('.p-selectable-row', { timeout: 30000 }).contains(`AutomationHistoryBusinessTest`);
});

When(`Clicks on the document`, () => {
  cy.get('[style="min-width: 100px;"] > div > a').contains('AutomationHistoryBusinessTest').click();
});

When(`Uploads the file and leaves mandatory fields empty`, () => {
  cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documents/**`, { timeout: 30000 }).as('uploadedFile');
  cy.get('[type="file"]', { timeout: 30000 }).selectFile('cypress/fixtures/files/docCreation.pdf', { force: true });
  cy.get('#title').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('#documentCategoryId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('#documentStatusId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('#documentDirectionId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('#documentTypeId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.wait('@uploadedFile', { timeout: 30000 });
});

When(`Leaves mandatory fields empty`, () => {
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('be.visible');
  cy.get('#title', { timeout: 30000 }).type('{selectall}{backspace}');
  cy.get('#title').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('#documentCategoryId > .gx-select__control', { timeout: 30000 }).click()
    .get('.gx-select__menu-list', { timeout: 30000 })
    .find('.gx-select__option', { timeout: 30000 })
    .first().click({ force: true });
  cy.get('#documentCategoryId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim();
    expect(texto.length).to.equal(0);
  });
  cy.get('.p-sidebar').scrollTo('bottom');
  cy.get('.p-sidebar').scrollTo('top');
  cy.get('#documentStatusId > .gx-select__control', { timeout: 30000 }).click()
    .get('.gx-select__menu-list', { timeout: 30000 })
    .find('.gx-select__option', { timeout: 30000 })
    .first().click({ force: true });
  cy.get('#documentStatusId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim();
    expect(texto.length).to.equal(0);
  });
  cy.get('.p-sidebar').scrollTo('bottom');
  cy.get('.p-sidebar').scrollTo('top');
  cy.get('#documentDirectionId > .gx-select__control', { timeout: 30000 }).click()
    .get('.gx-select__menu-list', { timeout: 30000 })
    .find('.gx-select__option', { timeout: 30000 })
    .first().click({ force: true });
  cy.get('#documentDirectionId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim();
    expect(texto.length).to.equal(0);
  });
});

When(`Leaves mandatory fields empty for merging porpuses`, () => {
  cy.get('#title').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('#documentCategoryId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim();
    expect(texto.length).to.equal(0);
  });
});

When(`Edit the document`, () => {
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('be.visible');
  cy.get('#title', { timeout: 30000 }).type('{selectall}itemEditado');
  cy.get('#documentCategoryId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').scrollIntoView()
    .get('.gx-select__option', { timeout: 30000 }).eq(2).click({ force: true });
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('have.text', 'Acordo de Pagamento', { timeout: 30000 });
  cy.get('#documentStatusId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').scrollIntoView()
    .get('.gx-select__option', { timeout: 30000 }).eq(1).click({ force: true });
});

When(`Edit the document for splitting porpuses`, () => {
  cy.intercept('PUT', Cypress.env('BASE_URL') + `/api/documentation/**`, (req) => { }).as('editDocumentforSplit');
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('be.visible', { timeout: 30000 });
  cy.get('#documentCategoryId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').scrollIntoView()
    .get('.gx-select__option', { timeout: 30000 }).eq(2).click({ force: true });
  cy.get('#documentCategoryId > .gx-select__control', { timeout: 30000 }).should('have.text', 'Acordo');
  cy.get('#documentStatusId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible')
    .scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(1).click({ force: true });
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('have.text', 'Acordo de Pagamento');
  cy.get('[type="file"]', { timeout: 30000 }).selectFile('cypress/fixtures/files/docSplit.pdf', { force: true });
  cy.get('#title', { timeout: 30000 }).type('{selectall}split');
  cy.get('.p-progressbar', { timeout: 30000 }).should('not.be.visible');
  cy.get('#gx-form__submit-button', { timeout: 30000 }).should('be.enabled').contains('Save').click();
  cy.wait('@editDocumentforSplit');
});

When(`Fills the sidebar form with number of stamps {string}`, (valueOfStamps) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation//lookup/documentlabeltype?first=0&count=1000`, (req) => { }).as('documentLabelType');
  cy.wait('@documentLabelType', { timeout: 30000 });
  cy.get('[aria-label="New Document"] > .p-button-label', { timeout: 30000 }).contains('New Document').click();
  cy.get('#numberOfStamps', { timeout: 30000 }).click().type(`{selectall}${valueOfStamps}`);
  cy.get('#documentLabelTypeId > .gx-select__control', { timeout: 30000 }).click().get('.gx-select__menu-list', { timeout: 30000 }).should('contain', 'Boarding Page Separator')
    .scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(1).click({ force: true });
  cy.get('#printerId > .gx-select__control', { timeout: 30000 }).click().get('.gx-select__menu-list', { timeout: 30000 }).should('contain', 'PrinterAccounting')
    .scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(1).click({ force: true });
  cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documents/printstamp`).as('printStamp');
});

When(`Fills the sidebar form with Selected Document`, () => {
  cy.wait(1000); // important for dropdown menus to load content (not possible with intercept)
  cy.get('[aria-label="Selected Documents"] > .p-button-label', { timeout: 30000 }).contains('Selected Documents').click();
  cy.get('#documentLabelTypeId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible')
    .scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(1).click({ force: true });
  cy.get('#printerId > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible')
    .scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(1).click({ force: true });
  cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documents/printstamp`).as('printStamp');
});

When(`Select Selected Documents filled in sidebar`, () => {
  cy.wait(1000); // important for dropdown menus to load content (not possible with intercept)
  cy.get('[aria-label="Selected Documents"] > .p-button-label', { timeout: 30000 }).contains('Selected Documents').click();
});

When(`Fills the form for stamping porpuses`, () => {
  cy.wait(1000); // important for dropdown menus to load content (not possible with intercept)
  cy.get('[aria-label="Selected Documents"] > .p-button-label', { timeout: 30000 }).contains('Selected Documents').click();
  cy.get('#documentLabelTypeId > .gx-select__control', { timeout: 12000 }).click()
    .get('.gx-select__menu-list').should('be.visible').contains('Boarding Page Separator').click();
  cy.get('#printerId > .gx-select__control', { timeout: 12000 }).click().get('.gx-select__menu-list').get('.gx-select__option', { timeout: 30000 }).eq(1).click({ force: true });
  cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documents/sendprintstamp`).as('multipleDocForStamp');
});

When(`Edit the item with mandatory fields empty in splitting screen`, () => {
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('be.visible');
  cy.get('#start', { timeout: 30000 }).click().type('{backspace}');
  cy.get('#end', { timeout: 30000 }).click().type('{backspace}{backspace}');
  cy.get('#documentCategoryId > .gx-select__control', { timeout: 30000 }).click()
    .get('.gx-select__option', { timeout: 30000 }).eq(0).click({ force: true });
  cy.get('#title', { timeout: 30000 }).type('{selectall}{backspace}');
});

When(`Edit the item with mandatory fields filled in splitting sidebar {string}`, (docTab) => {
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('be.visible');
  cy.get('#start', { timeout: 30000 }).click().type('{backspace}2');
  cy.get('#end', { timeout: 30000 }).click().type('{backspace}{backspace}5');
  cy.get('#documentCategoryId > .gx-select__control', { timeout: 30000 }).click().get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').scrollIntoView()
    .get('.gx-select__option', { timeout: 30000 }).eq(2).click({ force: true });
  cy.get('#documentTypeId > .gx-select__control', { timeout: 30000 }).should('have.text', 'Acordo de Pagamento', { timeout: 30000 });
  cy.get('#title', { timeout: 30000 }).type(`{selectall}splitTest${docTab}`);
  cy.intercept('PUT', Cypress.env('BASE_URL') + `/api/documentation/documents/**`).as('splittedItem');
});

When(`Clicks on Save button on Documents sidebar`, () => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents?filters=scope**`, (req) => { }).as('dataTableRefresh');
  cy.intercept('PUT', Cypress.env('BASE_URL') + `/api/documentation/**`, (req) => { }).as('editDocument');
  cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/**`, (req) => { }).as('createdDocument');
  cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documents`, (req) => { }).as('insertDocument');
  cy.wait(1000);
  cy.get('#gx-form__submit-button', { timeout: 30000 }).should('be.enabled').contains('Save').click({ timeout: 80000 });
  cy.wait(3000);
});

When(`Clicks on Save button on Activity sidebar`, () => {
  cy.intercept(Cypress.env('BASE_URL') + `/api/communications/managementcomment`, (req) => { }).as('createComment');
  cy.get('#gx-form__submit-button', { timeout: 30000 }).should('be.enabled').contains('Save').click({ timeout: 80000 });
  cy.wait(1000);
});

When(`Clicks on Save button on Activity sidebar`, () => {
  cy.intercept(Cypress.env('BASE_URL') + `/api/communications/managementcomment`, (req) => { }).as('createComment');
  cy.get('#gx-form__submit-button', { timeout: 30000 }).should('be.enabled').contains('Save').click({ timeout: 80000 });
  cy.wait(1000);
});

When(`Clicks on Cancel button`, () => {
  cy.get('.p-sidebar').should('be.visible').as('sideBar');
  cy.get('.p-toolbar-group-left > :nth-child(2) > .p-button-label', { timeout: 30000 }).contains('Cancel').click();
});

When(`Cancels the uploaded file`, () => {
  cy.get(':nth-child(3) > .p-button > .pi').scrollIntoView().click();
});

When(`Clicks on Columns`, () => {
  cy.get('.p-multiselect-label', { timeout: 30000 }).click();
});

When(`Unselect the {string} column in Column menu`, (clumnName) => {
  cy.get('.p-multiselect-header > .p-checkbox > .p-checkbox-box > .p-checkbox-icon').click({ force: true });
  cy.get('.p-multiselect-items-wrapper').should('be.visible').contains(clumnName, { timeout: 30000 }).click({ force: true });
});

When(`Clicks on {string} to filter by ascending`, (clumnName) => {
  cy.get('#DocumentsList > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).contains('Table').click({ timeout: 30000 });
  cy.get('.p-datatable-thead').contains(clumnName).click({ force: true });
});

When(`Clicks on Filter icon`, () => {
  cy.get('#DocumentsList > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).contains('Table').click({ timeout: 30000 });
  cy.get(':nth-child(3) > .p-button-icon', { timeout: 30000 }).click();
});

When(`Clicks on Print Stamp button`, () => {
  cy.get('#DocumentsList > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).contains('Table').click({ timeout: 30000 });
  cy.get('.d-block > :nth-child(4) > .p-button-label', { timeout: 30000 }).contains('Print Stamp').click();
});

When(`Clicks on filtering option under the {string} Name column`, (filterColumnDescription) => {
  cy.get(`th div[datacy='${filterColumnDescription}']`).click(13, 25);
});

When(`Selects {string}`, (filterType) => {
  cy.get('.dropdown-menu').contains(filterType).click();
});

When(`Click on button to delete the file`, () => {
  cy.get(':nth-child(3) > .p-button > .pi').scrollIntoView().click();
  cy.get('.p-fileupload-row', { timeout: 30000 }).should('not.exist');
});

When(`Delete the created item`, () => {
  cy.get('.p-selectable-row', { timeout: 30000 }).should('have.length', 1, { timeout: 30000 }).contains(createdDocumentName);
  cy.get(':nth-child(7) > .p-button-label', { timeout: 30000 }).contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').contains('Yes').click();
});

When(`Writes {string} to be searched for {string} Name column`, (dataToSearch, filterColumnDescription) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents?first=0&**`).as('dataAfterSearch');
  if (dataToSearch == '') {
    cy.get(`th div[datacy='${filterColumnDescription}']`, { timeout: 30000 });
  }
  else {
    cy.get(`th div[datacy='${filterColumnDescription}']`).type(dataToSearch);
  }
  cy.wait(2000);
});

When(`Selects the day {string} to be searched for {string} Name column`, (dayToSelect, filterColumnDescription) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents?first=0&**`).as('dataAfterSearch');
  if (dayToSelect == '') {
    cy.get(`th div[datacy='${filterColumnDescription}']`, { timeout: 30000 });
  }
  else {
    cy.get(`th div[datacy='${filterColumnDescription}']`).click(93, 15);
    cy.get(`.p-datepicker-calendar > tbody > :nth-child(2) > :nth-child(4)`).contains(dayToSelect).click();
  }
  cy.wait(2000);
});

When(`Wait for filter in the Documents table`, () => {
  cy.intercept('GET', `/api/documentation/documents**`).as('defaultDocuments');
});

When(`Wait for filter applied in the Documents table`, () => {
  cy.intercept('GET', `/api/documentation/documents?filters**`).as('filterApplied');
});

When(`Removes related entities`, () => {
  cy.get('td div button.p-button-icon-only').then(($buttons) => {
    const buttonsArray = Array.from($buttons);
    const reversedButtons = buttonsArray.reverse();
    reversedButtons.forEach(($button) => {
      cy.wrap($button).click();
    });
  });
  cy.wait(500);
  cy.get('#gx-form__submit-button', { timeout: 30000 }).should('be.enabled').contains('Save').click({ timeout: 12000 });
});

When(`Switches to All tab and find the document`, () => {
  cy.get('.p-menuitem-link').contains('All').click();
  cy.get('.gx-datatable__search', { timeout: 30000 }).click().type(`{selectall}{backspace}${createdDocumentName}`);
});

When(`Fills the sidebar form for merging porpuses`, () => {
  cy.wait(1000);
  cy.get('#title', { timeout: 30000 }).type(`TestAutomationMergingSuccess`);
  cy.get('#documentCategoryId', { timeout: 30000 }).click();
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').get('.gx-select__option', { timeout: 30000 }).eq(2).click({ force: true });
  cy.get('[class^="QuickAdd_autocomplete"]', { timeout: 30000 }).type('docLegalCaseMerge');
  cy.wait(500);
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').get('.gx-select__option', { timeout: 30000 }).contains('docLegalCaseMerge').click({ force: true });
  cy.get('[class^="QuickAdd_quick-add-wrapper"]', { timeout: 30000 }).contains('Add').click({ force: true });
  cy.get('[class^="QuickAdd_autocomplete"]', { timeout: 30000 }).type('docLegalCaseMerge2');
  cy.wait(500);
  cy.get('.gx-select__menu-list', { timeout: 30000 }).should('be.visible').get('.gx-select__option', { timeout: 30000 }).contains('docLegalCaseMerge2').click({ force: true });
  cy.get('[class^="QuickAdd_quick-add-wrapper"]', { timeout: 30000 }).contains('Add').click({ force: true });
});

When(`Change to Table option in the filters table view`, () => {
  cy.get('.p-toolbar').then($toolbar => {
    if ($toolbar.text().includes('Cards')) {
      cy.get('#DocumentsList > .gx-select__control').click({ force: true });
      cy.get('.gx-select__menu-list').contains('Table').click();
      cy.log('Changed dropdown from Cards to Table');
    } else {
      cy.log('Dropdown is already set to Table or does not contain Cards option');
    }
  });
});

When(`Selects the first card from the table`, () => {
  cy.get('.p-card-body', { timeout: 30000 }).click();
});

When(`Inserts the document {string} of type {string} and fills out the form in the sidebar for Tax Detail to add it to the Payment Request`, (file, type) => {    
  let category = file.trim();
  const fileName = `${type}-${file}-${Date.now()}`;
  
  cy.wait(1000);// Reduce the possibility of error
  cy.task('generatePDF', fileName).then((filePath) => {
    cy.get('[type="file"]').selectFile(filePath, { force: true });
  });
  cy.get('.p-fileupload-row > :nth-child(3) > .p-button', { timeout: 30000 }).should('be.visible');
  cy.wait(2000);// Reduce the possibility of error
  
  cy.get('#documentCategoryId', { timeout: 30000 }).click().type(category);
  cy.get('.gx-select__menu').contains(category, { timeout: 30000 }).click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#documentTypeId', { timeout: 30000 }).click().type(type);
  cy.wait(500); // Reduce the possibility of error
  cy.get('#documentStatusId', { timeout: 30000 }).click().type('Archived');
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Archived', { timeout: 30000 }).click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#date').click();
  cy.get('.p-datepicker-today').click();
  cy.wait(500); // Reduce the possibility of error
  cy.get('#dueDate').click();
  cy.get('.p-datepicker-today').click();
  cy.wait(500); // Reduce the possibility of error
  cy.get('#documentDirectionId', { timeout: 30000 }).click().type('Received');
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Received').click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#title', { timeout: 30000 }).type(`TestAutomationPR-${type}`);
  cy.wait(2000); // Reduce the possibility of error
});

When(`Adds the {string} document of type {string} and links the Related Entity 871.22.0T8OAZ Legal Case Instance to the Payment Request`, (file, type) => {    
  let category = file.trim();
  // let type = type + '/Receipt';
  const fileName = `871.22.0T8OAZ-${file}-${type}-${Date.now()}`;
  
  cy.wait(1000);// Reduce the possibility of error
  cy.task('generatePDF', fileName).then((filePath) => {
    cy.get('[type="file"]').selectFile(filePath, { force: true });
  });
  cy.get('.p-fileupload-row > :nth-child(3) > .p-button', { timeout: 30000 }).should('be.visible');
  cy.wait(2000);// Reduce the possibility of error
  
  cy.get('#documentCategoryId', { timeout: 30000 }).click().type(category);
  cy.get('.gx-select__menu').contains(category, { timeout: 30000 }).click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#documentStatusId', { timeout: 30000 }).click().type('Archived');
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Archived', { timeout: 30000 }).click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#documentTypeId', { timeout: 30000 }).click().type('Invoice/Receipt');
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible')
    .find('.gx-select__option')
    .filter((index, element) => {
      const text = element.innerText.trim(); 
      return text === 'Invoice/Receipt';
    }).click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#date').click();
  cy.get('.p-datepicker-today').click();
  cy.wait(500); // Reduce the possibility of error
  cy.get('#dueDate').click();
  cy.get('.p-datepicker-today').click();
  cy.wait(500); // Reduce the possibility of error
  cy.get('#documentDirectionId', { timeout: 30000 }).click().type('Received');
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Received').click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#selectentities > .gx-select__control').click();
  cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').click();

  cy.get(`[class^="QuickAdd_autocomplete"] > .gx-select__control`, { timeout: 40000 }).click().type('871/22.0T8OAZ');
  cy.wait(1000);
  // cy.get('.gx-select__menu', { timeout: 40000 }).contains('871/22.0T8OAZ', { timeout: 30000 }).first().click({ force: true });
  cy.get('.gx-select__menu').contains('871/22.0T8OAZ', { timeout: 50000 }).should('exist')
    .parent().contains('EVORA-WS', { timeout: 30000 }).should('exist').click();
  cy.wait(1000);
  cy.get(`[class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();
  cy.wait(1000);
  cy.get('#title', { timeout: 30000 }).type(`TestAutomationPR-871/22.0T8OAZ`);
  cy.wait(2000); // Reduce the possibility of error
});

When(`Adds the {string} document of type {string} and links the Related Entity {string} Legal Case Instance and {string} Porfolio to the Payment Request`, (file, type, lci, portfolio) => {    
  let category = file.trim();
  // let type = type + '/Receipt';
  const fileName = `${portfolio}-${file}-${type}-${Date.now()}`;
  
  cy.wait(1000);// Reduce the possibility of error
  cy.task('generatePDF', fileName).then((filePath) => {
    cy.get('[type="file"]').selectFile(filePath, { force: true });
  });
  cy.get('.p-fileupload-row > :nth-child(3) > .p-button', { timeout: 30000 }).should('be.visible');
  cy.wait(2000);// Reduce the possibility of error
  
  cy.get('#documentCategoryId', { timeout: 30000 }).click().type(category);
  cy.get('.gx-select__menu').contains(category, { timeout: 30000 }).click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#documentStatusId', { timeout: 30000 }).click().type('Archived');
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Archived', { timeout: 30000 }).click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#documentTypeId', { timeout: 30000 }).click().type('Invoice/Receipt');
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible')
    .find('.gx-select__option')
    .filter((index, element) => {
      const text = element.innerText.trim(); 
      return text === 'Invoice/Receipt';
    }).click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#date').click();
  cy.get('.p-datepicker-today').click();
  cy.wait(500); // Reduce the possibility of error
  cy.get('#dueDate').click();
  cy.get('.p-datepicker-today').click();
  cy.wait(500); // Reduce the possibility of error
  cy.get('#documentDirectionId', { timeout: 30000 }).click().type('Received');
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Received').click({ force: true });
  cy.wait(500); // Reduce the possibility of error
  cy.get('#selectentities > .gx-select__control').click();
  cy.get('.gx-select__menu', { timeout: 40000 }).contains('Legal Case Instance').click();

  cy.get(`[class^="QuickAdd_autocomplete"] > .gx-select__control`, { timeout: 40000 }).click().type(lci);
  cy.wait(1000);
  cy.get('.gx-select__menu').contains(lci, { timeout: 50000 }).should('exist')
    .parent().contains(portfolio, { timeout: 30000 }).should('exist').click();
  cy.wait(1000);
  cy.get(`[class^="QuickAdd_quick-add-wrapper"] > button`, { timeout: 40000 }).click();
  cy.wait(1000);
  cy.get('#title', { timeout: 30000 }).type(`TestAutomationPR-${lci}`);
  cy.wait(2000); // Reduce the possibility of error
});

When(`Inserts the document {string} of type {string} and fills out the form in the sidebar to add it to the Payment Request`, (file, type) => {    
  const fileName = `${type}-${file}-${Date.now()}`;

  cy.task('generatePDF', fileName).then((filePath) => {
    cy.get('[type="file"]').selectFile(filePath, { force: true });
  });
  cy.wait(3000);

  cy.get('.p-fileupload-row > :nth-child(3) > .p-button', { timeout: 30000 }).should('be.visible');
  
  cy.get('#date').click();
  cy.get('.p-datepicker-today').click();
  cy.wait(500); // Reduce the possibility of error because 2 datepicker opened
  cy.get('#dueDate').click();
  cy.get('.p-datepicker-today').click();
  
  cy.get('#documentCategoryId', { timeout: 30000 }).click();
  cy.wait(500); // Reduce the possibility of error because 2 datepicker opened
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Pagamentos / Despesas').click({ force: true });
  
  cy.wait(1000); // Reduce the possibility of error because 2 datepicker opened
  cy.get('#documentTypeId', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains(type).click({ force: true });
  
  cy.get('#documentStatusId', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Archived').click({ force: true });
  
  
  
  cy.get('#documentDirectionId', { timeout: 30000 }).click();
  cy.get('.gx-select__menu', { timeout: 30000 }).should('be.visible').contains('Received').click({ force: true });
  
  cy.get('#title', { timeout: 30000 }).type(`TestAutomationPR-${type}`);
});


export { createdDocumentName };
