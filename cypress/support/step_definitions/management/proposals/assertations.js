/// <reference types="cypress" />

//https://github.com/cucumber/cucumber-expressions#readme

import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Check if there's any data.`, () => {
    cy.get('.p-datatable-tbody > :nth-child(1) > .p-selection-column > .p-checkbox > .p-checkbox-box').click();
    cy.checkIfExists('.p-selectable-row')
});
