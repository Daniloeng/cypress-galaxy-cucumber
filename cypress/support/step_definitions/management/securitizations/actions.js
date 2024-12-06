import { When } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

When(`Removes it using remove button`, () => {
    cy.get(".margin-bottom").contains("Remove").click();
    cy.intercept("DELETE",Cypress.env('BASE_URL') +`/api/debts/SecuritizationDebts/**`).as("removableDebtFromSecuritization");
    cy.get(".p-button-danger > .p-button-label").click();
    cy.wait("@removableDebtFromSecuritization");
});

When(`Clicks Remove in Debt list on Securitization screen`, () => {
    cy.get(':nth-child(2) > .col-md-12 > .p-card > .p-card-body').contains("Remove").click();
});

When(`The sidebar opens, clicks on X Button`, () => {
    cy.get(".p-sidebar", { timeout: 8000 }).as("sideBar");
    cy.wait(2000);
    cy.get(".p-sidebar-close-icon").click();
});
  
When(`Selects 2 Debts from the list`, () => {
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(0).click();
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 10000 })
        .eq(1).click();
});
  
When(`Selects the 1st debt from the list`, () => {
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(0).click();
});
  
When(`The sidebar opens, I Click No`, () => {
    cy.get(".p-sidebar", { timeout:10000 }).as("sideBar");
    cy.get(".p-button-secondary > .p-button-label").click();
});

When(`Clicks on {string} Secutization button`, (label) => {
    cy.get(`[class^='Tile_container'] .p-button > .p-button-label`).should('have.text', label).click();
});

When(`clicks on Cancel button`, () => {
    cy.get('.p-toolbar-group-left > .button-backgroundless').should('have.text', 'Cancel').click();
});
  
When(`Fills in new Securitization data`, () => {
    const name = faker.number.int(100)
    cy.wrap(name).as('securitizationName');
    cy.get('#name').type(`Name-${name}`);
    cy.get('#securitizationName').type(`Securitization-${name}`);
    cy.get('#description').type(`Description-${name}`);
    cy.get('#entityId > .gx-select__control').click().type('HEFESTO, STC, S.A');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('HEFESTO, STC, S.A').first().click({ timeout: 30000 });
});
  
When(`Edits Securitization data`, () => {
    const nameEdited = `NameEdited-`+faker.number.int(100)
    cy.wrap(nameEdited).as('nameEdited');
    cy.get('#name').clear().type(nameEdited);
    cy.get('#securitizationName').clear().type(`Securitization-${nameEdited}`);
    cy.get('#description').clear().type(`Description-${nameEdited}`);
});
  
When(`Selects {string} Debt in Securitizations screen`, (debt) => {
    cy.wait(1500);
    cy.get('#debtId > .gx-select__control').type(debt);
    cy.get('.gx-select__menu').contains(debt, { timeout: 30000 }).click();
    cy.wait(500);
});
  
When(`Selects {string} IBAN of the Bank Account in Securitizations screen`, (iban) => {
    cy.wait(1000);
    cy.get('#bankAccountId > .gx-select__control').type(iban);
    cy.get('.gx-select__menu').contains(iban, { timeout: 30000 }).click();
    cy.wait(500);
    
    cy.get('#bankAccountCategoryId > .gx-select__control').click();
    cy.get('.gx-select__menu').contains('Operational', { timeout: 30000 }).click();
    
    cy.get('#transactionGroups > .p-multiselect-label-container').click();
    cy.get('.p-multiselect-item').contains('Collections', { timeout: 30000 }).click();
    cy.get('#transactionGroups').click();
    
    cy.get('#transactionTypes > .p-multiselect-label-container').click();
    cy.get('.p-multiselect-item').contains('Adjustment', { timeout: 30000 }).click();
    cy.get('#transactionTypes').click();
});
  
When(`Selects {string} Biling Entity on Edit Debt sidebar in Securitizations screen`, (entity) => {
    cy.wait(3000);
    cy.get('#billingEntityId > .gx-select__control').type(entity);
    cy.get('.gx-select__menu', { timeout: 20000 }).first().click({ timeout: 30000 });
    cy.wait(500);
});
  
When(`Selects Collections Bank Account on Edit Debt sidebar in Securitizations screen`, () => {
    cy.wait(3000);
    cy.get('#bankAccountId > .gx-select__control').click();
    cy.wait(500);
    cy.get('.gx-select__menu', { timeout: 30000 }).first().click();
    cy.wait(500);
});
  
When(`Selects the {string} tab in Securitization screen`, (label) => {
    cy.get('.p-menuitem > .p-menuitem-link', { timeout: 30000 }).contains(label).click();
    cy.wait(500);
});

When(`Removes it using remove button`, () => {
    cy.get(":nth-child(2) > .col-md-12 > .p-card > .p-card-body").contains("Remove").click();  
    cy.intercept("DELETE",Cypress.env('BASE_URL') +`/api/debts/SecuritizationDebts/**`).as("removableDebtFromSecuritization");
    cy.get(".p-button-danger > .p-button-label").click();
    cy.wait("@removableDebtFromSecuritization");
});

When(`Filters by edited name of the Securitization table screen`, () => {
    cy.get('@nameEdited').then(nameEdited => {
        cy.get(`th div[datacy="name"] input`, { timeout: 15000 }).click().type(nameEdited);
    });
    cy.wait(2000);
});

When(`Filters by created name of the Securitization table screen`, () => {
    cy.intercept("GET",Cypress.env('BASE_URL') +`/api/debts/securitization?first=0&count=15&filters=name**`).as("securitizationNameSearched");    
    cy.get('@securitizationName').then(securitizationName => {
        cy.get(`th div[datacy="name"] input`, { timeout: 15000 }).click().type(`Name-${securitizationName}`);
    });
    cy.wait(2000);
});

When(`Filters by the name of the Securitization created table screen`, () => {
    cy.intercept("GET",Cypress.env('BASE_URL') +`/api/debts/securitization?first=0&count=15&filters=name**`).as("securitizationNameSearched");
    cy.get(`th div[datacy="name"] input`, { timeout: 15000 }).should('exist').clear();
    cy.get(`th div[datacy="name"] input`, { timeout: 15000 }).click().type(`Name-`);
    cy.wait('@securitizationNameSearched');
    cy.wait(2000);
});