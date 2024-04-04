import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`I click on {string} submenu`, (submenu) => {
    cy.get('.active-menuitem > ul > :nth-child(3) > a > .layout-menuitem-text').contains(submenu).click();
});

When(`I type {string} in the search bar`, (securitizationName) => {
    cy.get(".gx-datatable__search", {timeout:10000}).click().type(securitizationName);
});

When(`I select the securitization {string}`, (securitizationName) => {
    cy.get(".p-datatable-wrapper", {timeout:10000}).first().contains(securitizationName).click();
});

When(`I click on the expanded mode to show all debts`, () => {
    cy.get(".p-card-content").contains("Show all in expanded mode").click();
});

When(`1-I type the debt id {string} on the search bar`, (debtId) => {
    cy.get(".gx-datatable__search").click().type(debtId);
});

When(`1-I select it`, () => {
    cy.get(".p-selectable-row > .p-selection-column > .p-checkbox > .p-checkbox-box", {timeout:10000}).click();
});

When(`I remove it using remove button`, () => {
    cy.get(".margin-bottom").contains("Remove").click();
    cy.intercept("DELETE",Cypress.env('BASE_URL') +`/api/debts/SecuritizationDebts/**`).as("removableDebtFromSecuritization");
    cy.get(".p-button-danger > .p-button-label").click();
    cy.wait("@removableDebtFromSecuritization");
});

When(`I Click Remove`, () => {
    cy.get('.p-toolbar-group-left').contains("Remove").click();
});
  
When(`I Click Remove in list`, () => {
    cy.get(':nth-child(2) > .col-md-12 > .p-card > .p-card-body').contains("Remove").click();
});

When(`The sidebar opens, I Click X Button`, () => {
    cy.get(".p-sidebar", {timeout:8000}).as("sideBar");
    cy.wait(2000);
    cy.get(".p-sidebar-close-icon").click();
});
  
When(`I select 2 debts from the list`, () => {
    cy.get('.p-datatable-tbody > :nth-child(1) > .p-selection-column > .p-checkbox > .p-checkbox-box', {timeout:10000}).click();
    cy.get(':nth-child(2) > .p-selection-column > .p-checkbox > .p-checkbox-box').click();
});

When(`Clicks on the {string} tab`, (tab) => {
    cy.get(".p-megamenu-root-list >", {timeout:10000}).contains(tab).click();
});
  
When(`I select the 1st debt from the list`, () => {
    cy.get(".p-datatable-tbody > :nth-child(1) > .p-selection-column > .p-checkbox > .p-checkbox-box", {timeout:10000}).click();
});
  
When(`The sidebar opens, I Click No`, () => {
    cy.get(".p-sidebar", {timeout:10000}).as("sideBar");
    cy.get(".p-button-secondary > .p-button-label").click();
});

When(`11-I remove it using remove button`, () => {
    cy.get(":nth-child(2) > .col-md-12 > .p-card > .p-card-body").contains("Remove").click();  
    cy.intercept("DELETE",Cypress.env('BASE_URL') +`/api/debts/SecuritizationDebts/**`).as("removableDebtFromSecuritization");
    cy.get(".p-button-danger > .p-button-label").click();
    cy.wait("@removableDebtFromSecuritization");
});