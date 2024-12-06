import { Given, When, Step } from "@badeball/cypress-cucumber-preprocessor";

When(`Filters by {string} in the Supplier field of the Condominiums Entities table screen`, (supplier) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterBySupplier');
  cy.get('[datacy="supplierName"]', { timeout: 20000 }).should('be.visible').click().type(supplier);
});

When(`Filters by {string} in the AssetId field of the Condominiums Entities table screen`, (assetId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByAssetId');
  cy.get('[datacy="assetId"]', { timeout: 20000 }).should('be.visible').click().type(assetId);
});

When(`Filters by {string} in the Previous AssetId field of the Condominiums Entities table screen`, (preAssetId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByPreAssetId');
  cy.get('[datacy="previousAssetIdentifier"]', { timeout: 20000 }).should('be.visible').click().type(preAssetId);
});

When(`Filters by {string} in the Originator AssetId field of the Condominiums Entities table screen`, (originatorAssetId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByOriginatorAssetId');
  cy.get('[datacy="originatorAssetIdentifier"]', { timeout: 20000 }).should('be.visible').click().type(originatorAssetId);
});

When(`Filters by {string} in the Portfolio field of the Condominiums Entities table screen`, (portfolio) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByPortfolio');
  cy.get('.p-multiselect-label p-placeholder').contains()
  cy.get('[datacy="portfolio"]', { timeout: 20000 }).should('be.visible').click().type(portfolio);
});

When(`Filters by {string} in the Managed By field of the Condominiums Entities table screen`, (managedBy) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByManagedBy');
  cy.get('[datacy="managedBy"]', { timeout: 20000 }).should('be.visible').click().type(managedBy);
});

When(`Filters by {string} in the Postal Code field of the Condominiums Entities table screen`, (managedBy) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/condominiums/**`).as('filterByPostalCode');
  cy.get('[datacy="postalCode"]', { timeout: 20000 }).should('be.visible').click().type(managedBy);
});

