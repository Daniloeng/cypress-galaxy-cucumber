import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Search by using an AssetId {string} in the search bar of the Price ReviewAll screen`, (assetId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskassetpricereview?**`).as('filterBysearchBar');
  cy.get('.gx-datatable__search', { timeout: 20000 }).should('be.visible').click().type(assetId);
  cy.wait(2000)
});

When(`Filters by {string} in the AssetId field of the Price ReviewAll table screen`, (assetId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskassetpricereview?**`).as('filterByAssetId');
  cy.get('[datacy="assetId"]', { timeout: 20000 }).should('be.visible').click().type(assetId);
});

When(`Filters by {string} in the Previous Id field of the Price ReviewAll table screen`, (previousId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskassetpricereview?**`).as('filterByPreviousId');
  cy.get('[datacy="previousId"]', { timeout: 20000 }).should('be.visible').click().type(previousId);
});

When(`Filters by {string} in the Portfolio field of the Price ReviewAll table screen`, (portfolio) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskassetpricereview?**`).as('filterByPortfolio');
  cy.get('[datacy="portfolio"]', { timeout: 20000 }).should('be.visible').click().type(portfolio);
});

When(`Filters by {string} in the Proposed Price field of the Price ReviewAll table screen`, (proposedPrice) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskassetpricereview?**`).as('filterByproposedPrice');
  cy.get('[datacy="proposedPrice"]', { timeout: 20000 }).should('be.visible').click().type(proposedPrice);
});

When(`Filters by {string} in the Type field of the Price ReviewAll table screen`, (type) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskassetpricereview?**`).as('filterBytype');
  cy.get('[datacy="priceReviewTypeId"]', { timeout: 20000 }).should('be.visible').click();
  cy.get('.p-multiselect-panel').should('be.visible').contains(type).click()
});

When(`Filters by {string} in the Status field of the Price ReviewAll table screen`, (status) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskassetpricereview?**`).as('filterByStatus');
  cy.get('[datacy="assetPriceReviewStatusId"]', { timeout: 20000 }).should('be.visible').click();
  cy.get('.p-multiselect-panel').should('be.visible').contains(status).click()
});

When(`Filters by {string} in the Requester field of the Price ReviewAll table screen`, (requester) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskassetpricereview?**`).as('filterByRequester');
  cy.get('[datacy="requesterIds"]', { timeout: 20000 }).should('be.visible').click();
  cy.get('.p-multiselect-panel').should('be.visible').contains(requester).click()
});

When(`Filters by {string} in the Decisor field of the Price ReviewAll table screen`, (decisor) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/requests/requesttaskassetpricereview?**`).as('filterByDecisor');
  cy.get('[datacy="decisorIds"]', { timeout: 20000 }).should('be.visible').click();
  cy.get('.p-multiselect-panel').should('be.visible').contains(decisor).click()
});