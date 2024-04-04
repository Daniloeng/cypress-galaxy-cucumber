import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Legal Case Proposals created is showed`, () => {
    cy.get('.page-header').should('be.visible');
    cy.get('[class^="Tile_title-items__"]').should('exist').should('contain', 'Legal');
});
