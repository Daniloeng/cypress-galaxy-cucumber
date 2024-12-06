import { Step, When } from "@badeball/cypress-cucumber-preprocessor";

let idLegalCase = '';
let idLegalCaseInstance = '';

When(`Selects the {string} Legal Case number on the table list`, (number) => {

    cy.get('td div[datacy="legalCaseNumber"]', { timeout: 20000 }).should('contain', number).should('be.visible').then(($idCell) => {
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

When(`Clicks in {string} Proposal button on {string} tab in Legal Case Instance`, (label, tab) => {
    cy.get('.p-megamenu-root-list > :nth-child(3)', { timeout: 30000 }).click();
    cy.get('.d-block > :nth-child(1)', { timeout: 30000 }).contains(label).click({ force: true});
});

When(`Fills {string} Business Area with {string} Strategy and fill {string} on the Additional Costs fields in new Proposal`, (business, strategy, costs) => {
    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/businessarea/**`).as('businessAreaOptionsLegal');
    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/agreements/proposalstrategy/businessArea/**`).as('proposalStrategyOptions');
    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/**`).as('user');
    
    cy.wait('@businessAreaOptionsLegal').get('#businessAreaId > .gx-select__control', { timeout: 10000 }).click();
    cy.get(`.gx-select__menu`).contains(business).click(); 
    
    cy.wait(`@proposalStrategyOptions`, {timeout: 10000});
    cy.get(`#proposalStrategyId > .gx-select__control`, { timeout: 10000 }).click(); 
    cy.get(`#proposalStrategyId`).type(strategy);
    cy.get(`.gx-select__menu`).contains(strategy).scrollIntoView().click();
    
    cy.get('label').contains('Additional Costs').parent().find('input').type(`{selectAll}{backspace}${costs}`);
    cy.get('#interestRate').find('input').type(`{selectAll}{backspace}${costs}`);
    cy.get('label').contains('Penalty').parent().find('input').type(`{selectAll}{backspace}${costs}`);

    const interestRate = '#reportedInterestRate > .p-inputtext';
    cy.get('body').then(($body) => {
        if ($body.find(interestRate).length > 0) {
            cy.get(interestRate).then($field => {
                if ($field.is(':visible')) {
                    cy.wrap($field).type(`{selectAll}{backspace}${costs}`);
                } else {
                    cy.log('Field not visible');
                }
            });
    } else {
        cy.log('Field not found!');
    }
    });
    
    cy.get('#gx-form__submit-button').click();
});

When(`Wait for filter in the Legal Cases table`, () => {
    cy.intercept('GET', Cypress.env("BASE_URL") + `/api/legal/legalcases**`).as('defaultLegalCases');
});


When(`Wait for filter applied in the Legal Cases table`, () => {
    cy.intercept('GET', Cypress.env("BASE_URL") + `/api/legal/legalcases?first=0&count=15&filter**`).as('filterApplied');
});

When(`Filters by {string} in the Legal Case Type field of the Legal Cases table screen`, (type) => {
    Step(this, `Wait for filter in the Legal Cases table`);
    cy.get(`th div[datacy="legalCaseTypeIds"]`, { timeout:15000 }).contains('All').should('be.visible').click();
    cy.get(`th div[datacy="legalCaseTypeIds"]`, { timeout:15000 }).click().type(type);
    cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${type}$`, 'i')).click();
});


When(`Aligns the Legal Cases table by the {string} column in Ascending order`, (column) => {
    Step(this, `Wait for filter in the Legal Cases table`);
    cy.get('.p-column-title').contains(column).should('be.visible').click();
    cy.wait('@defaultLegalCases', { timeout: 30000 });
    cy.get('.p-column-title').contains(column).should('be.visible').click();
});

When(`Aligns the Legal Cases table by the {string} column in Descending order`, (column) => {
    Step(this, `Wait for filter in the Legal Cases table`);
    cy.get('.p-column-title').contains(column).should('be.visible').click();
});

export { idLegalCase, idLegalCaseInstance };
  