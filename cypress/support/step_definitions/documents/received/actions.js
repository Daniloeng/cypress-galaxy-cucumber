import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Fills the sidebar form for creating porpuses on tab Received`, () => {    
    cy.get('[type="file"]', { timeout: 15000 }).selectFile('cypress/fixtures/files/docCreationReceived.pdf', { force:true });
    cy.get('.p-fileupload-row > :nth-child(3) > .p-button', { timeout: 15000 }).should('be.visible');
    cy.get('#documentCategoryId > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').scrollIntoView().get('.gx-select__option', { timeout: 15000 }).eq(2).click({ force:true })
    cy.get('#documentTypeId > .gx-select__control', { timeout: 15000 }).should('have.text', 'Acordo de Pagamento', { timeout: 15000 });
    cy.get('#documentStatusId > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').scrollIntoView().get('.gx-select__option', { timeout: 15000 }).eq(1).click({ force:true })
    cy.get('#documentDirectionId > .gx-select__control', {timeout:15000}).click()
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').scrollIntoView().get('.gx-select__option', { timeout: 15000 }).eq(6).click({ force:true });
    cy.get('#documentDirectionId > .gx-select__control', { timeout: 15000 }).should('have.text', 'Received', { timeout: 15000 });
    cy.get('#title', { timeout: 15000 }).type(`TestAutomationSuccessReceived`);
});
