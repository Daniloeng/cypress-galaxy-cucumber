import { When } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';


When(`Wait for the Requests table loaded`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/myrequests?first=0&count=5&filters**`).as('defaultRequest');
    cy.wait(2000);
    cy.wait('@defaultRequest', { timeout: 30000 });
});


When(`Filters by {string} in the Work Mode field of the Requests table screen`, (status) => {
    cy.get(`[datacy="requestworkmodeid"]`).should('exist').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="requestworkmodeid"]`).should('exist').click();
});

When(`Fills in new Request data`, () => {
    const currentDate = new Date();
    const nextMonth = currentDate.getMonth() + 1;
    const nextMonthToSelect = (nextMonth % 12).toString();
    const name = faker.person.firstName();
    cy.wrap(name).as('nameRequest');

    cy.get('#name').type(`name test ${name}`);
    cy.get('#description').type(`description test ${name}`);
    cy.wait(1000);
    
    cy.get('#ownerId').find('input').clear();;
    cy.get('#ownerId').find('input').type('manager3');
    cy.wait(500);
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('manager3', { timeout: 30000 }).click();

    cy.get('#typeId > .gx-select__control').click().type('Document Import');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Document Import', { timeout: 30000 }).click();

    cy.get('#priorityId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('High').should('be.visible').click();

    cy.get('#dueDate > .p-inputtext').click();
    cy.get('.p-datepicker-month').select(nextMonthToSelect);
    cy.get('.p-datepicker-calendar').contains('span', '15').contains('15').click({ force: true });
    
    cy.get('#assignmentModeId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('To Be Executed by System').should('be.visible').click();
    cy.wait(1500);
});

When(`Fills in new Import Documents data by tag`, () => {
    cy.wait(1000);
    cy.get('#startDate').click()
      .find('.p-datepicker-today').click();
    
    cy.get('#schemaId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('By Tag').click({ timeout: 30000 });
    cy.get('#IsBoardingImport > .p-inputswitch-slider').click({ force: true });

    cy.get('#documentCategoryId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Comunicação').click({ timeout: 30000 });
    
    cy.get('#documentStorageId > .gx-select__control').click().type('Documentação Wizink')
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Documentação Wizink').click({ timeout: 30000 });
    
    cy.get('#folderName > .gx-select__control').click().type('TestDocImport');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('TestDocImport').click({ timeout: 30000 });
    
    cy.get('#documentTypeId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Aviso de Recepção').click({ timeout: 30000 });
    
    cy.get('#portfolioId > .gx-select__control').click().type('TAWNY_REO');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('TAWNY_REO').click({ timeout: 30000 });
});

When(`Fills in new Import Documents data by schema a vaio`, () => {
    cy.wait(1000);
    cy.get('#startDate').click()
      .find('.p-datepicker-today').click();
    
    cy.get('#queueId > .gx-select__control').click().type('General Support Customer Service');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('General Support Customer Service').first().click({ timeout: 30000 });
    cy.get('#IsBoardingImport > .p-inputswitch-slider').click({ force: true });

    cy.get('#documentCategoryId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Comunicação').click({ timeout: 30000 });
    
    cy.get('#documentStorageId > .gx-select__control').click().type('Documentação Wizink');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Documentação Wizink').click({ timeout: 30000 });
    
    cy.get('#folderName > .gx-select__control').click().type('TestedeEtiquetas');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('TestedeEtiquetas').click({ timeout: 30000 });
    
    cy.get('#documentTypeId > .gx-select__control').click();
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Campanha - Carta').click({ timeout: 30000 });
});

When(`Writes the name to be searched in the Request Name column filter`, () => {
    cy.get('@nameRequest').then(nameRequest => {
      cy.get(`.p-inputgroup input[name="name"]`, { timeout: 30000 })
          .clear().type(nameRequest);
    });
});

When(`Selects the Request added`, () => {
    cy.get('@nameRequest').then(nameRequest => {
      cy.get(`td div[datacy="name"] a`, { timeout: 30000 }).contains(nameRequest).first().click();
    });
});

When(`Clicks on {string} button in Progress bar`, (label) => {
  cy.get('.p-card-content > .p-toolbar > .p-toolbar-group-right > .p-button', { timeout: 50000 })
    .should('be.visible').and('be.enabled')
    .contains(label).click({ force: true });
});

