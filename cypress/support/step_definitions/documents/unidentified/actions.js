import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Filters by {string} in the Type field of the Unidentified table screen`, (type) => {
    cy.wait(1000).get(`div[datacy="documentTypeId"]`).click();
    cy.get('.p-multiselect-filter-container > .p-inputtext').click({ force: true }).type(type);
    cy.wait(1000).get(`div[datacy="documentTypeId"]`).click();
    cy.get('.p-multiselect-items > .p-multiselect-item').should('be.visible').contains(type).click({ force: true });
});

When(`Filters by {string} in the Status field of the Unidentified table screen`, (type) => {
    cy.wait(1000).get(`div[datacy="documentStatusId"]`).click();
    cy.get('.p-multiselect-filter-container > .p-inputtext').click({ force: true }).type(type);
    cy.wait(1000).get(`div[datacy="documentStatusId"]`).click();
    cy.get('.p-multiselect-items > .p-multiselect-item').should('be.visible').contains(type).click({ force: true });
});

When(`Filters by {string} in the Direction field of the Unidentified table screen`, (type) => {
    cy.wait(1000).get(`div[datacy="documentDirectionId"]`).click();
    cy.get('.p-multiselect-filter-container > .p-inputtext').click({ force: true }).type(type);
    cy.wait(1000).get(`div[datacy="documentDirectionId"]`).click();
    cy.get('.p-multiselect-items > .p-multiselect-item').should('be.visible').contains(type).click({ force: true });
});

When(`Filters by {string} in the Is Confidential Unidentified field of the Documents table screen`, (isConfidential) => {
    cy.get(`select[name="isConfidential"]`).should('be.visible').select(isConfidential);
});

