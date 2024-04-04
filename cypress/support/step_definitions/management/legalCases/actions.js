import { When } from "@badeball/cypress-cucumber-preprocessor";

let idLegalCase = '';
let idLegalCaseInstance = '';

When(`Selects the first Legal Case from the table list`, () => {
    cy.get('#LegalCases > .gx-select__control', { timeout: 10000 }).click();    
    cy.get('.select-templated-item').contains('Table').click();

    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)', { timeout: 20000 }).should('be.visible').then(($idCell) => {
        idLegalCase = $idCell.text();
    }).then(() => {
        cy.contains(idLegalCase).click();
    });
});

When(`Selects the first Legal Case Instance`, () => {
    cy.get('#LegalCaseInstancesCard > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(1) > :nth-child(1)', { timeout: 20000 })
        .should('be.visible').then(($idCell) => {
            idLegalCaseInstance = $idCell.text();
    }).then(() => {
        cy.contains(idLegalCaseInstance).click();
    });
});

When(`Clicks in Add Proposal button on Proposals tab in Legal Case Instance`, () => {
    cy.get('.p-megamenu-root-list > :nth-child(3)').click();
    cy.get('.d-block > :nth-child(1)', { timeout: 10000 }).click();
});

When(`Fills {string} Business Area with {string} Strategy and fill {string} on the Additional Costs fields in new Proposal`, (business, strategy, costs) => {
    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/1**`).as('user');
    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/businessarea/**`).as('businessAreaOptions');
    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/agreements/proposalstrategy/businessArea/1/proposaltypes/**`).as('proposalStrategyOptions');
    
    cy.wait('@businessAreaOptions').get('#businessAreaId > .gx-select__control', { timeout: 10000 }).click();
    cy.get(`.gx-select__menu`).contains(business).click(); 
    
    cy.wait(`@proposalStrategyOptions`, {timeout: 10000});
    cy.get(`#proposalStrategyId > .gx-select__control`, { timeout: 10000 }).click(); 
    cy.get(`#proposalStrategyId`).type(strategy);
    cy.get(`.gx-select__menu`).contains(strategy).scrollIntoView().click();  
    
    cy.get(':nth-child(10) > .col-xs-12 > .p-inputtext').type(`{selectAll}{backspace}${costs}`);
    cy.get('#interestRate').type(`{selectAll}{backspace}${costs}`);
    cy.get(':nth-child(12) > .col-xs-12 > .p-inputtext').type(`{selectAll}{backspace}${costs}`);
    cy.get(':nth-child(13) > .col-xs-12 > .p-inputtext').type(`{selectAll}{backspace}${costs}`);
    
    cy.get('#gx-form__submit-button').click();
});

export { idLegalCase, idLegalCaseInstance };
  