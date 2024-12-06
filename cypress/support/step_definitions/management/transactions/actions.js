import { Step, When } from "@badeball/cypress-cucumber-preprocessor";

When(`Intercept and Wait for filter in the Transactions table`, () => {
    cy.intercept('GET', Cypress.env("BASE_URL") + `/api/finance/transactions/28/*/false?first=0&count=15&orderBy=grossAmount+desc&countTotalRecords=true`).as('defaultTransactions');
    cy.wait('@defaultTransactions', { timeout: 30000 })
});


When(`Filters by {string} in the Id field of the Transactions table screen`, (id) => {
    Step(this, `Wait for filter in the Transactions table`);
    cy.get('th div[datacy="id"]', { timeout: 20000 }).click().type(id);
});

When(`Wait for filter in the Transactions table`, () => {
    cy.intercept('GET', Cypress.env("BASE_URL") + `/api/finance/transactions/28/*/false?first=0&count=15&orderBy=grossAmount+desc&countTotalRecords=true`).as('defaultTransactions');
});

When(`Wait for filter applied in the Transactions table`, () => {
    cy.intercept('GET', Cypress.env("BASE_URL") + `/api/finance/transactions/28/*/false?**`).as('filterApplied');
});

When(`Filters by {string} in the Group field of the Transactions table screen`, (group) => {
    Step(this, `Wait for filter in the Transactions table`);
    cy.get('th div[datacy="transactionGroupId"]').should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item').contains(group)
        .should('be.visible').click();
});
  
When(`Filters by {string} in the Type field of the Transactions table screen`, (type) => {
    cy.wait(1000).get(`div[datacy="transactionTypeId"]`).click();
    cy.get('.p-multiselect-filter-container > .p-inputtext').click({ force: true }).type(type);
    cy.wait(1000).get(`div[datacy="transactionTypeId"]`).click();
    cy.get('.p-multiselect-items > .p-multiselect-item').should('be.visible').contains(type).click({ force: true });
});

When(`Filters by {string} in the Posted By field of the Transactions table screen`, (type) => {
    cy.wait(1000).get(`div[datacy="createdBy"]`).click();
    cy.get('.p-multiselect-filter-container > .p-inputtext').click({ force: true }).type(type);
    cy.wait(1000).get(`div[datacy="createdBy"]`).click();
    cy.get('.p-multiselect-items > .p-multiselect-item').should('be.visible').contains(type).click({ force: true });
});
  
When(`Filters by {string} in the Is Interim Transaction field of the Transactions table screen`, (isInterim) => {
    cy.get(`select[name="isInterimTransaction"]`).should('be.visible').select(isInterim);
});
  
When(`Filters by {string} in the Effective Allocation field of the Transactions table screen`, (isInterim) => {
    cy.get(`select[name="effectiveAllocation"]`).should('be.visible').select(isInterim);
});
