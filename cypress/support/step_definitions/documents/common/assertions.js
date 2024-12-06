import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then(`The item should be removed from datatable`, () => {
  cy.wait('@deletedItem').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`The sidebar should be closed`, () => {
  cy.get('@sideBar', { timeout: 8000 }).should('not.exist');
});

Then(`The sidebar should be opened`, () => {
  cy.get(`[class^='DocumentPreview_preview-body-wrapper']`, { timeout: 15000 }).should('be.visible');
  cy.wait(1000);
});

Then(`The message {string} must be displayed`, (message) => {
  cy.get(`[class^='DataTableHeader_gx-datatable__header-info']`, { timeout: 15000 }).contains(message).should('exist');
});

Then(`The list must only present selected documents`, () => {
  cy.get('tbody tr').should('have.length', 2).should('be.visible');
});

Then(`The list displays documents without filters`, () => {
  cy.get('tbody tr').should('have.length', 15).should('exist');
});

Then(`The message should no longer be displayed`, () => {
  cy.get(`[class^='DataTableHeader_gx-datatable__header-info']`, { timeout: 15000 }).should('not.exist');
});

Then(`The full document view should open`, () => {
  cy.get('.p-megamenu-root-list', { timeout: 15000 }).should('be.visible');
  cy.get('.dv-document-wrapper').should('be.visible');
  cy.get(`[class^='DocumentDetailInfo_document-info__wrapper']`).should('be.visible');
});

Then(`The document should be created in {string} tab`, (documentsTab) => {
  cy.wait('@createdDocument').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });

  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('dataTableSearchedDoc');
  cy.wait(2000);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('.gx-datatable__search', { timeout: 15000 }).click().type(`TestAutomationSuccess${documentsTab}`);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.wait('@dataTableSearchedDoc', { timeout: 30000 }).get('.p-selectable-row', { timeout: 15000 })
    .contains(`TestAutomationSuccess${documentsTab}`)
    .get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
    .eq(0).click();
  //Deletes the item
  cy.get(':nth-child(7) > .p-button-label', { timeout: 15000 }).contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').contains('Yes').click();
});

Then(`The document should exist in the costumer file`, () => {
  cy.visit(Cypress.env('BASE_URL') + `/customercases/123153/documents`)  
  cy.wait(2000);
  cy.get('.gx-datatable__search', { timeout: 15000 }).click().type(`AutomationBusinessTest`);
  cy.get('.p-datatable-wrapper').should('contain.text','AutomationBusinessTest')
  cy.get('.p-datatable-wrapper').should('contain.text','Acordo')
  cy.get('.p-datatable-wrapper').should('contain.text','Acordo de Pagamento')
  cy.get(`[style='min-width: 100px;'] > div > a`).contains('AutomationBusinessTest').click();
  cy.get('.p-megamenu-root-list > :nth-child(3) > .p-menuitem-link').contains('Relations').click();
  cy.get(`#DocumentEntitiesCustomerCasesDataTable > .p-datatable-wrapper > table > .p-datatable-tbody > .p-selectable-row > [style='min-width: 100px;']`).should('have.text','123153')
  cy.get('#DocumentEntitiesCustomerCasesDataTable > .p-datatable-wrapper > table > .p-datatable-tbody > .p-selectable-row > :nth-child(2)').should('contain','Jose Doria Frade')
  cy.get(`#DocumentPortfoliosRelationsDataTable > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(1) > [style='min-width: 100px;']`).should('have.text','BCP0024');
  cy.get(`:nth-child(2) > [style='min-width: 100px;'] > div > a`).should('have.text','AIP0011');
  //Deletes the item
  cy.visit(Cypress.env('BASE_URL') + `/customercases/123153/documents`);  
  cy.get('.gx-datatable__search', { timeout: 15000 }).click().type(`AutomationBusinessTest`);
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('SearchDocinCustomerCase');
  cy.wait('@SearchDocinCustomerCase');
  cy.get('.p-selectable-row > .p-selection-column > .p-checkbox > .p-checkbox-box').click()
  cy.get('.d-block > :nth-child(6)', { timeout: 15000 }).contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').contains('Yes').click();
});

Then(`The document history should have history`, () => {
  cy.get('.gx-history-group__body', {timeout:30000}).should('contain', 'Data Inserted', {timeout:30000})
  cy.visit(Cypress.env('BASE_URL') + `/documents`)  
  cy.wait(2000);
  //Deletes the item
  cy.get('.gx-datatable__search', { timeout: 15000 }).click().type(`AutomationHistoryBusinessTest`);
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('SearchDocHistory');
  cy.wait('@SearchDocHistory');
  cy.get('.p-selectable-row > .p-selection-column > .p-checkbox > .p-checkbox-box', {timeout:30000}).click()
  cy.get('.d-block > :nth-child(7)', { timeout: 15000 }).contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').contains('Yes').click();
});

Then(`Check if the document is Original`, () => {
  cy.get('.row > :nth-child(4)').should('contain.text', 'Yes')
  cy.visit(Cypress.env('BASE_URL') + `/documents`)
  //Deletes the item
  cy.get('.gx-datatable__search', { timeout: 15000 }).click().type(`AutomationHistoryBusinessTest`);
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('SearchDocHistory');
  cy.wait('@SearchDocHistory');
  cy.get('.p-selectable-row > .p-selection-column > .p-checkbox > .p-checkbox-box').click()
  cy.get('.d-block > :nth-child(7)', { timeout: 15000 }).contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').contains('Yes').click();
});

Then(`The datatable should show the edited item`, () => {
  cy.wait('@editDocument').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });

  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('dataTableSearchedDocEdit');
  cy.wait(2000);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('.gx-datatable__search', { timeout: 15000 }).click().type(`{selectall}{backspace}itemEditado`);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.wait('@dataTableSearchedDocEdit', { timeout: 30000 }).get('.p-selectable-row', { timeout: 15000 })
    .contains('itemEditado')
    .get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
    .eq(0).click();
  //Deletes the item
  cy.get(':nth-child(7) > .p-button-label', { timeout: 15000 }).contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').contains('Yes').click();
});

Then(`The datatable should show the edited {string} document item`, (tabName) => {
  cy.wait('@editDocument').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });

  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('dataTableSearchedDocEdit');
  cy.wait(2000);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('.gx-datatable__search', { timeout: 15000 }).click().type(`{selectall}{backspace}itemEditado`);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.wait('@dataTableSearchedDocEdit', { timeout: 30000 }).get('.p-selectable-row', { timeout: 15000 })
    .contains(`itemEditado`)
    .get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
    .eq(0).click();
});

Then(`The datatable should show the merged document item`, () => {
  cy.wait('@createdDocument').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });

  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('dataTableSearchedDocEdit');
  cy.wait(2000);
  cy.get(':nth-child(1) > .p-menuitem-link').contains('All').click()
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('.gx-datatable__search', { timeout: 15000 }).click().type(`{selectall}{backspace}TestAutomationMergingSuccess`);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.wait('@dataTableSearchedDocEdit', { timeout: 30000 }).get('.p-selectable-row', { timeout: 15000 })
    .contains(`TestAutomationMergingSuccess`)
    .get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
    .eq(0).click();
  //Deletes the item
  cy.get(':nth-child(7) > .p-button-label', { timeout: 15000 }).contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').contains('Yes').click();
});

Then(`The datatable should show the created {string} document item`, (tab) => {
  cy.wait('@createdDocument').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });

  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents**`, (req) => { }).as('dataTableSearchedDoc');
  cy.wait(2000);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.reload();
  cy.get('.gx-datatable__search', { timeout: 15000 }).click().type(`TestAutomationSuccess${tab}`);
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.get('span.fa-sync').should('be.visible').click();
  cy.wait('@dataTableSearchedDoc', { timeout: 30000 }).get('.p-selectable-row', { timeout: 15000 })
    .contains(`TestAutomationSuccess${tab}`)
    .get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
    .eq(0).click();
});

Then(`The New document sidebar should be closed`, () => {
  cy.wait(2000);
  cy.wait('@insertDocument', { timeout: 60000 });
  cy.get('.gx-form-body').should('not.exist', { timeout: 150000 });
});

Then(`The datatable should show the splitted item {string}`, (docTab) => {
  cy.wait('@splittedItem', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });
});

Then(`The document should be cancel and sidebar closes`, () => {
  cy.get('@sideBar', { timeout: 8000 }).should('not.exist');
});

Then(`The comment should be visible`, () => {
  cy.wait('@createComment').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
  cy.get(':nth-child(1) > .gx-timeline-item__container', { timeout: 30000 }).should('contain.text', 'business automation comment')
});

Then(`The document saving should prompt an error message for Create`, () => {
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-progressbar', { timeout: 15000 }).should('not.be.visible', {
    timeout: 15000,
  });
  cy.get('.p-sidebar', { timeout: 15000 }).should('contain', 'O documento não existe ou não tem um file associado ao mesmo tempo que não possui barcodeId registado');
});

Then(`The document saving should prompt an error message for Split`, () => {
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-progressbar', { timeout: 15000 }).should('not.be.visible', {
    timeout: 15000,
  });
  cy.get('.p-sidebar').should('contain', 'Cannot save the form', {
    timeout: 8000,
  });
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-sidebar').should('contain', 'Please correct the errors', {
    timeout: 8000,
  });
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-sidebar').should(
    'contain',
    'The field Document Category is required',
    { timeout: 8000 }
  );
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-sidebar').should(
    'contain',
    'The field Starting at page is required',
    { timeout: 8000 }
  );
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-sidebar').should(
    'contain',
    'The field Ending at page is required',
    { timeout: 8000 }
  );
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-sidebar').should('contain', 'The minimum value is 1', { timeout: 8000 });
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-sidebar').should('contain', 'The field Title is required', { timeout: 8000 });
});

Then(`The document saving should prompt an error message for Edit`, () => {
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-progressbar', { timeout: 15000 }).should('not.be.visible', { timeout: 15000 });
  cy.get('.gx-form-validations', { timeout: 15000 }).scrollIntoView()
    .should('contain', 'Please correct the errors', { timeout: 8000 });
});

Then(`The document saving should prompt an error message for Merge`, () => {
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
  cy.get('.p-progressbar', { timeout: 15000 }).should('not.be.visible', { timeout: 15000 });
  cy.get('.gx-form-validations', { timeout: 15000 }).scrollIntoView()
    .should('contain', 'Please correct the errors', { timeout: 8000 });
});

Then(
  `The document saving should prompt an error message for Print Stamp with the number of stamps 0`, () => {
    cy.get('#numberOfStamps').should('have.value', '0', { timeout: 15000 });
    cy.get('.p-progressbar', { timeout: 15000 }).should('not.be.visible', { timeout: 15000 });
    cy.get('.gx-form-validations', { timeout: 15000 }).scrollIntoView()
      .should('contain', 'You must select a value greater than zero for printing', { timeout: 8000 });
    cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click();
    cy.get('.gx-form-validations', { timeout: 15000 }).scrollIntoView()
      .should('contain', 'Please correct the errors', { timeout: 8000 });
  }
);

Then(`The Number of Stamps Field should be disabled`, () => {
  cy.get('#numberOfStamps', { timeout: 8000 }).should('be.disabled');
});

Then(`The sidebar should show the error message for Split`, () => {
  cy.get('#documentTypeId > .gx-select__control', { timeout: 8000 }).should('be.visible', { timeout: 15000 });
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click({ force: true });
  cy.get('.p-progressbar', { timeout: 15000 }).should('not.be.visible', { timeout: 15000 });
  cy.get('.gx-form-validations', { timeout: 15000 }, { timeout: 8000 })
    .should('contain', 'Specify a page segment and/or a split step.', { timeout: 8000 });
  cy.get('#gx-form__submit-button', { timeout: 8000 }).contains('Save').click({ force: true });
  cy.get('.gx-form-validations', { timeout: 15000 }, { timeout: 8000 })
    .should('contain', 'Please correct the errors', { timeout: 8000 });
});

Then(`The sidebar should show the error message for Print Stamp`, () => {
  cy.get('#documentLabelTypeId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('#printerId  > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim();
    expect(texto.length).to.equal(0);
  });
  cy.get('.p-progressbar', { timeout: 15000 }).should('not.be.visible', { timeout: 15000 });
  cy.get('.gx-form-validations', { timeout: 15000 })
    .should('contain', 'Cannot save the form');
  cy.get('.gx-form-validations', { timeout: 15000 })
    .should('contain', 'Please correct the errors');
  cy.get('.p-sidebar', { timeout: 8000 })
    .should('contain', 'The field Document Label Type is required', { timeout: 8000 });
  cy.get('.p-sidebar', { timeout: 8000 })
    .should('contain', 'The field Printer is required', { timeout: 8000 });
});

Then(`The document saving should prompt an error message for the missing fields`, () => {
  cy.get('.p-progressbar', { timeout: 15000 }).should('not.be.visible', { timeout: 15000 });
  cy.get('#documentCategoryId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('.p-sidebar').should('be.visible').and('contain', 'The field Category is required', { timeout: 15000 });
  cy.get('#documentStatusId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('#documentDirectionId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('.p-sidebar').should('be.visible').and('contain', 'The field Direction is required', { timeout: 15000 });
  cy.get('#documentTypeId > .gx-select__control').should(($campo) => {
    const texto = $campo.text().trim(); // Obtém o texto do campo e remove espaços em branco extras
    expect(texto.length).to.equal(0);
  });
  cy.get('.p-sidebar').should('be.visible').and('contain', 'The field Name is required', { timeout: 15000 });
});

Then(`The Print Stamp should be saved`, () => {
  cy.wait('@printStamp').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`The multiple selection of Print Stamp should be saved`, () => {
  cy.wait('@multipleDocForStamp').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`The Documents items should be shown as {string}`, (wayOfView) => {
  if (wayOfView == 'Cards') {
    cy.get('.p-datascroller-list', { timeout: 15000 }).should('be.visible');
    cy.get('.p-datatable-wrapper').should('not.exist');
  } else if (wayOfView == 'Table') {
    cy.get('.p-datatable-wrapper', { timeout: 15000 }).should('be.visible');
    cy.get('.p-datascroller-list').should('not.exist');
  }
});

Then(`The column items should be shown in ascending order`, () => {
  cy.get(`[datacy='documentCategory']`, { timeout: 15000 }).invoke('text').as('textColumn');
  cy.get('@textColumn').then((text) => {
    const orderText = [...text].sort();
    cy.wrap(orderText).as('orderText');
  });
  cy.get('@textColumn').then((originalText) => {
    cy.get('@orderText').then((orderText) => {
      expect(originalText).to.deep.equal(orderText);
    });
  });
});

Then(`The datatable should show the {string} items according to the filter {string} option on {string} column`, (dataToBeSearched, filterType, column) => {
  cy.wait('@dataAfterSearch');
  if (filterType == 'Different from') {
    cy.get(`td div[datacy='${column}']`, { timeout: 15000 }).should(
      'not.contain',
      dataToBeSearched
    );
  } else if (filterType == 'Is empty') {
    cy.get(`td div[datacy='${column}']`, { timeout: 15000 }).each(($el) => {
      cy.wrap($el)
        .should('contain.text', dataToBeSearched)
        .invoke('text')
        .then((text) => {
          expect(text.length).to.be.equal(dataToBeSearched.length);
        });
    });
  } else if (filterType == 'Starts with') {
    cy.get(`td div[datacy='${column}']`, { timeout: 15000 }).each(($el) => {
      cy.wrap($el)
        .should('contain.text', dataToBeSearched)
        .invoke('text')
        .then((text) => {
          expect(text.startsWith(dataToBeSearched));
        });
    });
  } else if (filterType == 'Ends with') {
    cy.get(`td div[datacy='${column}']`, { timeout: 15000 }).each(($el) => {
      cy.wrap($el)
        .should('contain.text', dataToBeSearched)
        .invoke('text')
        .then((text) => {
          expect(text.endsWith(dataToBeSearched));
        });
    });
  } else {
    cy.get(`td div[datacy='${column}']`, { timeout: 15000 }).should(
      'contain',
      dataToBeSearched
    );
  }
});

Then(`The datatable should show the {string} items according to the filter {string} option on Barcode column`, (dataToBeSearched, filterType) => {
  cy.wait('@dataAfterSearch');
  if (filterType == 'Different from') {
    cy.get(`td div[datacy='barcodeId']`, { timeout: 15000 }).should('not.contain', dataToBeSearched);
  } else if (filterType == 'Is empty') {
    cy.get(`.p-datatable-tbody`, { timeout: 15000 }).should('contain', 'No records found');
  } else if (filterType == 'Less than') {
    cy.get(`td div[datacy='barcodeId']`, { timeout: 15000 }).each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then(parseInt)
        .should('be.lt', parseFloat(dataToBeSearched));
    });
  } else if (filterType == 'Less than or equal') {
    cy.get(`td div[datacy='barcodeId']`, { timeout: 15000 }).each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then(parseFloat)
        .should('be.lte', parseFloat(dataToBeSearched));
    });
  } else if (filterType == 'Greater than') {
    cy.get(`td div[datacy='barcodeId']`, { timeout: 15000 }).each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then(parseFloat)
        .should('be.gt', parseFloat(dataToBeSearched));
    });
  } else if (filterType == 'Greater than or equal') {
    cy.get(`td div[datacy='barcodeId']`, { timeout: 15000 }).each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then(parseFloat)
        .should('be.gte', parseFloat(dataToBeSearched));
    });
  } else {
    cy.get(`td div[datacy='barcodeId']`, { timeout: 15000 }).should('contain', dataToBeSearched);
  }
});

Then(`The datatable should show the filtered date items according to the filter {string} option on {string} column`, (filterType, columnName) => {
  let filterDate;
  cy.wait('@dataAfterSearch')
    .get(`th div[datacy='${columnName}']`)
    .find('input')
    .then(($el) => {
      filterDate = $el.val();
    });

  if (filterType == 'Different from') {
    cy.get(`td div[datacy='${columnName}']`, { timeout: 15000 }).should(
      'not.contain',
      filterDate
    );
  } else if (filterType == 'Is empty') {
    cy.get(`td div[datacy='${columnName}']`, { timeout: 15000 }).each(
      ($el) => {
        cy.wrap($el).should('be.empty');
      }
    );
  } else if (filterType == 'Less than') {
    cy.get(`td div[datacy='${columnName}']`, { timeout: 15000 }).each(
      ($el) => {
        const createDate = $el.text();
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate);
        expect(createDateObj).to.be.lessThan(targetDate);
      }
    );
  } else if (filterType == 'Less than or equal') {
    cy.get(`td div[datacy='${columnName}']`, { timeout: 15000 }).each(
      ($el) => {
        const createDate = $el.text();
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate);
        expect(createDateObj).to.be.lte(targetDate);
      }
    );
  } else if (filterType == 'Greater than') {
    cy.get(`td div[datacy='${columnName}']`, { timeout: 15000 }).each(
      ($el) => {
        const createDate = $el.text();
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate);
        expect(createDateObj).to.be.greaterThan(targetDate);
      }
    );
  } else if (filterType == 'Greater than or equal') {
    cy.get(`td div[datacy='${columnName}']`, { timeout: 15000 }).each(
      ($el) => {
        const createDate = $el.text();
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate);
        expect(createDateObj).to.be.gte(targetDate);
      }
    );
  } else {
    cy.get(`td div[datacy='${columnName}']`, { timeout: 15000 }).each(
      ($el) => {
        const createDate = $el.text();
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate);
        expect(createDateObj.getTime()).to.be.equal(targetDate.getTime());
      }
    );
  }
});

Then(`The datatable should show the filtered date items according to the filter {string} option on Last Modified column.`, (filterType) => {
  let filterDate;
  cy.wait('@dataAfterSearch')
    .get(`th div[datacy='modified']`)
    .find('input')
    .then(($el) => {
      filterDate = $el.val();
    });

  if (filterType == 'Different from') {
    cy.get(`td div[datacy='modified']`, { timeout: 15000 }).should(
      'not.contain',
      filterDate
    );
  } else if (filterType == 'Is empty') {
    cy.get(`.p-datatable-tbody`, { timeout: 15000 }).should(
      'contain',
      'No records found'
    );
  } else if (filterType == 'Less than') {
    cy.get(`td div[datacy='modified']`, { timeout: 15000 }).each(($el) => {
      const [ano, mes, dia] = $el.text().split('-');
      const targetDate = new Date(filterDate);
      const createDateObj = new Date(ano, mes, dia.slice(0, 2));

      expect(createDateObj).to.be.lessThan(targetDate);
    });
  } else if (filterType == 'Less than or equal') {
    cy.get(`td div[datacy='modified']`, { timeout: 15000 }).each(($el) => {
      const [ano, mes, dia] = $el.text().split('-');
      const targetDate = new Date(filterDate);
      const createDateObj = new Date(ano, mes, dia.slice(0, 2));
      expect(createDateObj).to.be.lte(targetDate);
    });
  } else if (filterType == 'Greater than') {
    cy.get(`td div[datacy='modified']`, { timeout: 15000 }).each(($el) => {
      const [ano, mes, dia] = $el.text().split('-');
      const targetDate = new Date(filterDate);
      const createDateObj = new Date(ano, mes, dia.slice(0, 2));
      expect(createDateObj).to.be.greaterThan(targetDate);
    });
  } else if (filterType == 'Greater than or equal') {
    cy.get(`td div[datacy='modified']`, { timeout: 15000 }).each(($el) => {
      const [ano, mes, dia] = $el.text().split('-');
      const targetDate = new Date(filterDate);
      const createDateObj = new Date(ano, mes, dia.slice(0, 2));
      expect(createDateObj).to.be.gte(targetDate);
    });
  } else {
    cy.get(`td div[datacy='modified']`, { timeout: 15000 }).each(($el) => {
      const [ano, mes, dia] = $el.text().split('-');
      const targetDate = new Date(filterDate);
      const createDateObj = new Date(ano, mes, dia.slice(0, 2));
      expect(createDateObj.getDate()).to.be.equal(targetDate.getDate());
    });
  }
});

Then(`Removes Debt Documents {string} from the All tab`, (doc) => {
  cy.get('td div button.p-button-icon-only').then(($buttons) => {
    const buttonsArray = Array.from($buttons);
    const reversedButtons = buttonsArray.reverse();
    reversedButtons.forEach(($button) => {
      cy.wrap($button).click();
    });
  });
  cy.wait(500);
  cy.get('#gx-form__submit-button', { timeout: 20000 }).should('be.enabled').contains('Save').click({ timeout: 12000 });

  // changes tab and find the document
  cy.reload()
  cy.get('.p-menuitem-link').contains('All').click();
  cy.get('.gx-datatable__search', { timeout: 15000 }).should('be.visible').click().type(`{selectall}{backspace}${doc}`);
  
  // selects and remove document
  cy.intercept('DELETE', Cypress.env('BASE_URL') + `/api/documentation/**`).as('deletedItem');
  cy.get('.p-selectable-row', { timeout: 15000 }).contains(doc)
    .closest('.p-selectable-row').find(`.p-selection-column .p-checkbox`).click();
  cy.get(':nth-child(7) > .p-button-label', { timeout: 15000 }).contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').contains('Yes').click();

  cy.wait('@deletedItem').wait(500);
  cy.get('table').then(($table) => {
    if ($table.find(`td div[datacy='fileName']`).length === 0) {
      cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
    } else {
      cy.get('.p-selectable-row', { timeout: 15000 }).should('not.contain', doc)
    }
  });
});

Then(`Verifies that the document has been removed`, () => {
  cy.intercept('DELETE', Cypress.env('BASE_URL') + `/api/documentation/documents/**`).as('deletedItem');
  cy.get('.p-selectable-row', { timeout: 15000 }).contains('automation')
    .closest('.p-selectable-row').find(`.p-selection-column .p-checkbox`).click();
  cy.get('.d-block .p-button-label', { timeout: 15000 }).contains('Remove').click();
  cy.get('.p-button-danger > .p-button-label').contains('Yes').click();
  
  cy.wait('@deletedItem').wait(2000);
  cy.get('table').then(($table) => {
    if ($table.find(`td div[datacy='fileName']`).length === 0) {
      cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
    } else {
      cy.get('.p-selectable-row', { timeout: 15000 }).should('not.contain', 'docDebts.pdf')
    }
  });
});

Then(`The customer name {string} should be visble on table`, (customerName) => {
  cy.get('#PortfolioDebtsDetailCustomersDatatable > .p-datatable-wrapper > table > .p-datatable-tbody', { timeout: 20000 })
      .should('be.visible').should('exist').then(() => {
        cy.contains(customerName)
  })
});

Then(`Sidebar view should be closed`, () => {
  cy.get('.p-sidebar-content', { timeout: 30000 }).should('not.be.visible');
});

Then(`Verifies that the Interest Setting has been removed from debt table`, () => {
  cy.get('.DataScroller_gx-datascroller__emptymessage__ga-j-').should('contain', 'No records found');
});




