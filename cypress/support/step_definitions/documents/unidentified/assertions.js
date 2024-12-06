import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Only Unidefined with this {string} Type should displayed in the list`, (type) => {
    cy.get('table').find('td div[datacy="documentType"]').should('be.visible')
        .each((cell) => {
            cy.wrap(cell).should('contain', type);
        });
});

Then(`Only Unidefined with this {string} Status should displayed in the list`, (type) => {
    cy.wait('@filterApplied', { timeout: 20000 });
    cy.get('table').find('td div[datacy="documentStatus"]').should('be.visible')
        .each((cell) => {
            cy.wrap(cell).should('contain', type);
        });
});

Then(`Only Unidefined with this {string} Direction should displayed in the list`, (type) => {
    cy.get('table').find('td div[datacy="documentDirection"]').should('be.visible')
        .each((cell) => {
            cy.wrap(cell).should('contain', type);
        });
});

Then(`Only Unidefined with this {string} Is Confidential Unidefined should displayed in the list`, (isConfidential) => {
    cy.wait('@filterApplied', { timeout: 50000 });
    cy.get('table').find('td div[datacy="isConfidential"]').should('be.visible')
        .each((cell) => {
            cy.wrap(cell).should('contain', isConfidential);
        });
});

