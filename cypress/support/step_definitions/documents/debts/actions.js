import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Fills the sidebar form for creating porpuses on tab Debts`, () => {    
    const entitie = '361000';
    cy.get('[type="file"]', { timeout: 15000 }).selectFile('cypress/fixtures/files/docDebts.pdf', {force:true});
    cy.get('.p-fileupload-row > :nth-child(3) > .p-button', { timeout: 15000 }).should('be.visible');
    cy.get('#documentCategoryId', { timeout: 15000 }).click();
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').get('.gx-select__option', { timeout: 15000 }).eq(2).click({ force: true });
    cy.get('#documentTypeId', { timeout: 15000 }).should('have.text', 'Acordo de Pagamento', { timeout: 15000 });
    cy.get('#documentStatusId', { timeout: 15000 }).click();
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').get('.gx-select__option', { timeout: 15000 }).eq(1).click({ force: true });
    cy.get('#documentDirectionId', { timeout: 15000 }).click();
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').get('.gx-select__option', { timeout: 15000 }).eq(1).click({ force: true });
    cy.get('#selectentities', { timeout: 15000 }).click();
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').get('.gx-select__option', { timeout: 15000 }).eq(8).click({ force: true });
    cy.get('[class^="QuickAdd_autocomplete"]', { timeout: 15000 }).type(entitie);
    cy.wait(500);
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').get('.gx-select__option', { timeout: 15000 }).contains(entitie).click({ force: true });
    cy.get('[class^="QuickAdd_quick-add-wrapper"]', { timeout: 15000 }).contains('Add').click({ force: true });
    cy.get('#documentDirectionId', { timeout: 15000 }).should('have.text', 'Arquivo Externo', { timeout: 15000 });
    cy.get('#title', { timeout: 15000 }).type(`TestAutomationSuccessDebts`);
});


