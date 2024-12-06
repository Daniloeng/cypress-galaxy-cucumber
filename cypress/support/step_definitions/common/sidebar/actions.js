import { When } from "@badeball/cypress-cucumber-preprocessor";

When("Clicks on {string} tab on {string} menu", (tab, menu) => {
    cy.wait(1000); //reduce the possibility of error
    cy.get(`.ent-${menu}`).contains(RegExp(menu, 'i')).should('be.visible').click();
    cy.get(`.ent-${menu}`).contains(RegExp(`^${tab}$`, 'i'), { timeout: 20000 }).should('be.visible').click({ force: true});
});

When("Clicks on {string} tab on {string} - {string} menu", (tab, menu, title) => {
    cy.wait(1000); //reduce the possibility of error
    cy.get(`.ent-${menu}`).contains(RegExp(title, 'i')).should('be.visible').click();
    cy.get(`.ent-${menu}`).contains(RegExp(`^${tab}$`, 'i')).should('be.visible').click();
});
