import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`On {string} different page should be open`, (title) => {
    cy.get(".gx-datatable__title",{ timeout: 8000 }).should('be.visible').contains(title);
});

Then(`On {string} page should be open`, (title) => {
    cy.contains('span', 'View:')
        .parent().next().find('.gx-select__control').click();
    cy.get('.gx-select__menu').should('be.visible').contains('Table').click({ force:true });
    cy.get(".gx-datatable__title").scrollIntoView().should('be.visible').contains(title);
});

Then(`On {string} title page should be showed`, (title) => {
    cy.get('.ent-regulatory-color',{ timeout: 8000 }).should('be.visible').contains(title);
});
