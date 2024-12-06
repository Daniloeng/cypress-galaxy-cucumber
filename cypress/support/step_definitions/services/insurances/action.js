import { When } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";

// When(`Created a Key Set from API`, () => {
//   createKeySets().then((document) => {
//     createdKeySetId = document.item.id;
//   });
// });

When(`Clicks on View button on insurances screen`, () => {
  cy.get('#Insurances > .gx-select__control', { timeout: 30000 }).click();
});

When(`Selects the {string} option in View menu in insurances screen`, (viewOption) => {
  cy.get('.gx-select__menu').should('be.visible').contains(viewOption).click()
});

When(`Clicks the first item from the table in Insurances screen`, () => {
  cy.get('#Insurances > .gx-select__control', { timeout: 30000 }).click();
  cy.get('.gx-select__menu').should('be.visible').contains('Table').click()
  cy.get('.p-selectable-row',{ timeout: 30000 }).should('be.visible', { timeout: 30000 }).first().click();
});

When(`Fills the sidebar form for creating porpuses on tab Insurances`, () => {
  cy.intercept("POST", Cypress.env("BASE_URL") + `/api/assets/**`, (req) => { }).as("createdInsurance");
  cy.get('#description').should('be.visible').type('automationTest');
  cy.get('#number').type(faker.number.int({min: 2, max: 100}));
  cy.get('#insuranceCompanyId > .gx-select__control').type('Seguradoras Unidas');
  cy.get(".gx-select__menu-list", { timeout: 15000 }).contains('Seguradoras Unidas', { timeout: 30000 }).click({ force: true });
  cy.get('#agentId > .gx-select__control').should('be.visible').type('MARSH');
  cy.get(".gx-select__menu-list", { timeout: 15000 }).contains('MARSH', { timeout: 30000 }).click({ force: true });
  cy.get('#assetCategoryId > .gx-select__control').click()
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible", { timeout: 30000 }).scrollIntoView().get(".gx-select__option", { timeout: 30000 }).eq(1).click({ force: true });
  cy.get('#beneficiaryId > .gx-select__control').type('Sandalgreen Assets')
  cy.get(".gx-select__menu-list", { timeout: 15000 }).contains('Sandalgreen Assets', { timeout: 30000 }).click({ force: true });
  cy.get('#statusId > .gx-select__control').click()
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible", { timeout: 30000 }).scrollIntoView().get(".gx-select__option", { timeout: 30000 }).eq(1).click({ force: true });
  cy.get('#paymentDay').type('1');
  cy.get('#paymentRecurrence').type('1');
});

When(`Fills the sidebar form for editing porpuses on tab Insurances`, () => {  
  cy.wait(2000)
  cy.intercept("PUT", Cypress.env("BASE_URL") + `/api/assets/**`, (req) => { }).as("editedInsurance");
  cy.get('#statusId > .gx-select__control').should('be.visible');
  cy.get('#description').should('be.visible').type('automationTestEdit');
});

