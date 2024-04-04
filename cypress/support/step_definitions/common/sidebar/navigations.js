import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { editSecurtization } from "../../../apiServices/Management/securitizations/securitizationsServices";

Given("As a head logged in", () => {
    cy.loginWithClientID('/');
    cy.get('.layout-menu-header', {timeout:30000}).should('be.visible');
    cy.get('.menu-scroll-content', { timeout: 10000 }).should('be.visible');
});

Given(`Navigate to a {string} specific Securitizations`, (specific) => {
    cy.loginWithClientID();
    cy.visit(`/securitizations/${specific}`);

    // Environment preparation
    editSecurtization(6, false);
});

Given(`Navigate to a first Securitizations`, () => {
    cy.get('.p-datatable-tbody tr:first-child td:first-child').then((idCell) => {
        idSecurization = idCell.text();
        cy.loginWithClientID();
        cy.visit(`/securitizations/${idSecurization}`);
    });
}); 

Given(`1-Navigate to the Management tab`, () => {
    cy.loginWithClientID();
    cy.get(".layout-menuitem-text").contains("Management").click();
});

Given("As a user logged in {string} screen", (screen) => {
    cy.loginWithClientID();
    cy.visit(`/${screen}/`);
    cy.get('.layout-menu-header', {timeout:30000}).should('be.visible');
    cy.get('.menu-scroll-content', { timeout: 10000 }).should('be.visible');
});
