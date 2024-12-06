import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Filters by {string} in the Type field of the Customers table screen`, (type) => {
    cy.wait(1000).get(`div[datacy="documentTypeId"]`).click();
    cy.get('.p-multiselect-filter-container > .p-inputtext').click({ force: true }).type(type);
    cy.wait(1000).get(`div[datacy="documentTypeId"]`).click();
    cy.get('.p-multiselect-items > .p-multiselect-item').should('be.visible').contains(type).click({ force: true });
});