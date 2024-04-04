import { Given } from "@badeball/cypress-cucumber-preprocessor";

let createdDocumentName;

Given("Navigate to Documents-All tab", () => {
    cy.loginWithClientID();
    cy.visit('/documents');   
});

export {createdDocumentName}