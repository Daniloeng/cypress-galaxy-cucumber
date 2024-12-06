import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { editSecurtization } from "../../../apiServices/Management/securitizations/securitizationsServices";

Given("As a head logged in", () => {
    cy.loginWithClientID('/');
    cy.get('.layout-menu-header', { timeout: 30000 }).should('be.visible');
    cy.get('.menu-scroll-content', { timeout: 10000 }).should('be.visible');
});

Given(`Navigate to a {string} specific Securitizations`, (specific) => {
    cy.loginWithClientID();
    cy.visit(`/securitizations/${specific}`);
    
    // Environment preparation
    editSecurtization(specific, false);

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

Given(`Navigate to the {string} screen`, (url) => {
    cy.visit(url);
});

Given(`Navigate to the relation Payment Request`, () => {
    cy.get('@paymentId').then(id => {
        const trimId = id.trim();
        cy.log('paymentId - ', id);
        cy.visit(`requesttaskpayments/${trimId}`)
    })
    cy.wait(3000);
});

Given(`Navigate to the specific Tax Document Queue`, () => {
    cy.visit(`/queues/6020/tasks/`)
    cy.wait(3000);
});

Given(`Navigate to the specific Payment Request Queue`, () => {
    cy.visit(`queues/6024/tasks/`)
    cy.wait(3000);
});

Given("As a user logged in {string} screen", (screen) => {
    cy.loginWithClientID();
    cy.visit(`/${screen}`);
    cy.get('.layout-menu-header', { timeout: 80000 }).should('be.visible');
    cy.get('.menu-scroll-content', { timeout: 10000 }).should('be.visible');
});
