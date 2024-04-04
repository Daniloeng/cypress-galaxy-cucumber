import { When } from "@badeball/cypress-cucumber-preprocessor";
import { createDocument } from "../../../apiServices/Documents/documentsServices";

let createdDocumentName;


When(`Created document by API`, () => {

    createDocument().then((document) => {

        createdDocumentName = document.item.title
    });
});

When(`Writes the document name on the search bar`, () => {
    cy.get('#DocumentsList > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu', { timeout: 8000 }).contains('Table').click();
    cy.get('.gx-datatable__search', { timeout: 8000 }).click().type(createdDocumentName);
});


When(`Selects the searched item from datatable`, () => {
    cy.get('.p-selectable-row', { timeout: 15000 }).contains(createdDocumentName);
    cy.get('.p-selectable-row > .p-selection-column > .p-checkbox > .p-checkbox-box').click();
});


When(`Clicks on remove button`, () => {
    cy.get(':nth-child(7) > .p-button-label', { timeout: 8000 }).contains('Remove').click();

});


When(`Clicks on Yes button in sidebar`, () => {

    cy.intercept('DELETE', `${Cypress.env('BASE_URL')}/api/documentation/**`).as('deletedItem');
    cy.get('.p-button-danger > .p-button-label', { timeout: 8000 }).contains('Yes').click();
});

When(`Clicks on No button in sidebar`, () => {

    cy.get('.p-button-secondary > .p-button-label', { timeout: 8000 }).contains('No').click();
    cy.get('.p-sidebar').as('sideBar');
});

When(`Clicks on X button in sidebar`, () => {

    cy.get('.p-sidebar-close-icon', { timeout: 8000 }).click();
    cy.get('.p-sidebar').as('sideBar');
});

When(`Clicks on Add button`, () => {

    cy.get('#DocumentsList > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu', { timeout: 8000 }).contains('Table').click();
    cy.get(':nth-child(5) > .p-button-label').contains('Add').click();
});

When(`Clicks on Edit button`, () => {

    cy.get(':nth-child(6) > .p-button-label').contains('Edit').click();
});


When(`Clicks on Split button`, () => {

    cy.get('.d-block > :nth-child(3) > .p-button-label').contains('Split').click();
});

When(`Selects first item from datatable`, () => {

    cy.get('#DocumentsList > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu', { timeout: 8000 }).contains('Table').click();
    cy.get('.p-datatable-tbody > :nth-child(1) > .p-selection-column > .p-checkbox > .p-checkbox-box').click();
});

When(`Selecting 2 items from datatable`, () => {

    cy.get('#DocumentsList > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu', { timeout: 8000 }).contains('Table').click();
    cy.get('.p-datatable-tbody > :nth-child(1) > .p-selection-column > .p-checkbox > .p-checkbox-box').click();
    cy.get(':nth-child(2) > .p-selection-column > .p-checkbox > .p-checkbox-box').click();
});

When(`Clicks on View button`, () => {

    cy.get('#DocumentsList > .gx-select__control', { timeout: 15000 }).click()
});

When(`Selects {string} option`, (tableViewOption) => {

    cy.get('.gx-select__menu', { timeout: 8000 }).contains(tableViewOption).click();
});

When(`Fills the sidebar form for creating porpuses`, () => {

    cy.get('[type="file"]', { timeout: 8000 }).selectFile('cypress/fixtures/files/docCreation.pdf', { force: true });
    cy.get('#documentCategoryId > .gx-select__control', { timeout: 15000 }).click({ force: true }).get('.gx-select__menu-list').contains('Acordo').click();
    cy.get('#documentStatusId > .gx-select__control', { timeout: 15000 }).click({ force: true }).get('.gx-select__menu-list').contains('Archived').click();
    cy.get('#documentDirectionId > .gx-select__control', { timeout: 15000 }).click({ force: true }).get('.gx-select__menu-list').contains('Arquivo Externo').click();
    cy.get('#title', { timeout: 8000 }).type('TestAutomationSuccess');
    cy.get('.p-fileupload-files');
});

When(`Uploads the file and leaves mandatory fields empty`, () => {

    cy.get('[type="file"]', { timeout: 8000 }).selectFile('cypress/fixtures/files/docCreation.pdf', { force: true });
});

When(`Leaves mandatory fields empty`, () => {

    cy.wait(1000)
    cy.get('#title', { timeout: 8000 }).type('{selectall}{backspace}');
    cy.get('#documentCategoryId > .gx-select__control', { timeout: 15000 }).click().type('{selectall}{backspace}');
    cy.get('#documentStatusId > .gx-select__control', { timeout: 15000 }).click().type('{selectall}{backspace}');
    cy.get('#documentDirectionId > .gx-select__control', { timeout: 15000 }).click().type('{selectall}{backspace}');

});

When(`Edit the item`, () => {

    cy.wait(2000)
    cy.get('#title', { timeout: 8000 }).type('{selectall}itemEditado');

});

When(`Edit the item for splitting porpuses`, () => {

    cy.intercept('PUT', `${Cypress.env('BASE_URL')}/api/documentation/**`).as('editDocumentforSplit');
    cy.get('.p-fileupload-row > :nth-child(3) > .p-button', { timeout: 8000 }).should('be.visible').click();
    cy.get('[type="file"]', { timeout: 8000 }).selectFile('cypress/fixtures/files/docSplit.pdf', { force: true });
    cy.get('#title', { timeout: 8000 }).type('{selectall}split');
    cy.get('#gx-form__submit-button', { timeout: 12000 }).contains('Save').click();
    cy.wait('@editDocumentforSplit');

});


When(`Fills the sidebar form with number of stamps {string}`, (valueOfStamps) => {

    cy.wait(1000); // important for dropdown menus to load content (not possible with intercept)
    cy.get('[aria-label="New Document"] > .p-button-label', { timeout: 8000 }).contains('New Document').click();
    cy.get('#numberOfStamps', { timeout: 8000 }).click().type(`{selectall}${valueOfStamps}`);
    cy.get('#documentLabelTypeId > .gx-select__control', { timeout: 12000 }).click().get('.gx-select__menu-list').contains('Boarding Page Separator').click();
    cy.get('#printerId > .gx-select__control', { timeout: 12000 }).click().get('.gx-select__menu-list').contains('PrinterAccounting').click();
    cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/documentation/documents/printstamp`).as('printStamp');

});

When(`Fills the sidebar form with Selected Document`, () => {

    cy.wait(1000); // important for dropdown menus to load content (not possible with intercept)
    cy.get('[aria-label="Selected Documents"] > .p-button-label', { timeout: 8000 }).contains('Selected Documents').click();
    cy.get('#documentLabelTypeId > .gx-select__control', { timeout: 12000 }).click().get('.gx-select__menu-list').contains('Boarding Page Separator').click();
    cy.get('#printerId > .gx-select__control', { timeout: 12000 }).click().get('.gx-select__menu-list').contains('PrinterAccounting').click();
    cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/documentation/documents/printstamp`).as('printStamp');

});

When(`Select Selected Documents filed in sidebar`, () => {

    cy.wait(1000); // important for dropdown menus to load content (not possible with intercept)
    cy.get('[aria-label="Selected Documents"] > .p-button-label', { timeout: 8000 }).contains('Selected Documents').click();

});


When(`Fills the form for stamping porpuses`, () => {

    cy.wait(1000); // important for dropdown menus to load content (not possible with intercept)
    cy.get('[aria-label="Selected Documents"] > .p-button-label', { timeout: 8000 }).contains('Selected Documents').click();
    cy.get('#documentLabelTypeId > .gx-select__control', { timeout: 12000 }).click().get('.gx-select__menu-list').contains('Boarding Page Separator').click();
    cy.get('#printerId > .gx-select__control', { timeout: 12000 }).click().get('.gx-select__menu-list').contains('PrinterAccounting').click();
    cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/documentation/documents/sendprintstamp`).as('multipleDocForStamp');
});


When(`Edit the item with mandatory fields empty in splitting screen`, () => {

    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/documentation/documenttypes/category/**`).as('splitDocWindow');
    cy.wait('@splitDocWindow');
    cy.get('#start', { timeout: 15000 }).click().type('{backspace}');
    cy.get('#end', { timeout: 15000 }).click().type('{backspace}{backspace}');
    cy.get('#documentCategoryId > .gx-select__control', { timeout: 15000 }).click().type('{selectall}{backspace}');
    cy.get('#title', { timeout: 8000 }).type('{selectall}{backspace}');
});


When(`Edit the item with mandatory fields filled in splitting screen`, () => {

    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/documentation/documenttypes/category/**`).as('splitDocWindow');
    cy.wait('@splitDocWindow');
    cy.get('#start', { timeout: 15000 }).click().type('{backspace}2');
    cy.get('#end', { timeout: 15000 }).click().type('{backspace}{backspace}4');
    cy.get('#documentCategoryId > .gx-select__control', { timeout: 15000 }).click().get('.gx-select__menu-list').contains('Acordo').click();
    cy.get('#title', { timeout: 8000 }).type('{selectall}splitTest');
    cy.intercept('PUT', `${Cypress.env('BASE_URL')}/api/documentation/documents/**`).as('splittedItem');
});

When(`Clicks on Save button`, () => {

    cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/documentation/**`).as('createdDocument');
    cy.intercept('PUT', `${Cypress.env('BASE_URL')}/api/documentation/**`).as('editDocument');
    cy.get('#gx-form__submit-button', { timeout: 12000 }).contains('Save').click();
});

When(`Clicks on Cancel button`, () => {

    cy.get('.p-sidebar').as('sideBar');
    cy.get('.p-toolbar-group-left > :nth-child(2) > .p-button-label', { timeout: 8000 }).contains('Cancel').click();
});

When(`Cancels the uploaded file`, () => {

    cy.get(':nth-child(3) > .p-button > .pi').click();
});

When(`Clicks on Columns`, () => {
    cy.get('.p-multiselect-label').click()
});

When(`Clicks on {string} to filter by ascending`, (clumnName) => {

    cy.get('#DocumentsList > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu', { timeout: 8000 }).contains('Table').click();
    cy.get('.p-datatable-thead').contains(clumnName).click({ force: true });
});

When(`Clicks on Filter icon`, () => {

    cy.get('#DocumentsList > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu', { timeout: 8000 }).contains('Table').click();
    cy.get(':nth-child(3) > .p-button-icon', { timeout: 15000 }).click();
});

When(`Clicks on Print Stamp button`, () => {

    cy.get('#DocumentsList > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu', { timeout: 8000 }).contains('Table').click();
    cy.get('.d-block > :nth-child(4) > .p-button-label', { timeout: 15000 }).contains('Print Stamp').click();
});

When(`Clicks on filtering option under the {string} Name column`, (filterColumnDescription) => {
    cy.get(`th div[datacy="${filterColumnDescription}"]`).click(13, 25);
});

When(`Click on button to delete de file`, () => {

    cy.get(':nth-child(3) > .p-button > .pi').click();
});

When(`Writes {string} to be searched for {string} Name column`, (dataToSearch, filterColumnDescription) => {

    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/documentation/documents?first=0&**`).as('dataAfterSearch');

    if (dataToSearch == '') {
        cy.get(`th div[datacy="${filterColumnDescription}"]`, { timeout: 15000 });
    }
    else {
        cy.get(`th div[datacy="${filterColumnDescription}"]`).type(dataToSearch);
    }

    cy.wait(2000)
});


When(`Selects the day {string} to be searched for {string} Name column`, (dayToSelect, filterColumnDescription) => {

    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/documentation/documents?first=0&**`).as('dataAfterSearch');

    if (dayToSelect == '') {
        cy.get(`th div[datacy="${filterColumnDescription}"]`, { timeout: 15000 });
    }
    else {
        cy.get(`th div[datacy="${filterColumnDescription}"]`).click(93, 15);
        cy.get(`.p-datepicker-calendar > tbody > :nth-child(2) > :nth-child(4)`).contains(dayToSelect).click();

    }

    cy.wait(2000)
});