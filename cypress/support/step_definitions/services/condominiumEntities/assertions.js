
import { Then } from "@badeball/cypress-cucumber-preprocessor";


Then(`Only Condominium Entity with this {string} Supplier should displayed in the list`, (supplier) => {
  cy.wait('@filterBySupplier', { timeout: 30000 }).get('table').find('td div[datacy="supplierName"]').should('be.visible')
      .should('contain', supplier);
});

Then(`Only Condominium Entity with this {string} AssetId should displayed in the list`, (assetId) => {
  cy.wait('@filterByAssetId', { timeout: 30000 }).get('table').find('td div[datacy="assetId"]').should('be.visible')
      .should('contain', assetId);
});

Then(`Only Condominium Entity with this {string} Previous AssetId should displayed in the list`, (preAssetId) => {
  cy.wait('@filterByPreAssetId', { timeout: 30000 }).get('table').find('td div[datacy="previousAssetIdentifier"]').should('be.visible')
      .should('contain', preAssetId);
});

Then(`Only Condominium Entity with this {string} Originator AssetId should displayed in the list`, (originatorAssetId) => {
  cy.wait('@filterByOriginatorAssetId', { timeout: 30000 }).get('table').find('td div[datacy="originatorAssetIdentifier"]').should('be.visible')
      .should('contain', originatorAssetId);
});

Then(`Only Condominium Entity with this {string} Portfolio should displayed in the list`, (portfolio) => {
  cy.wait('@filterByPortfolio', { timeout: 30000 }).get('table').find('td div[datacy="portfolio"]').should('be.visible')
      .should('contain', portfolio);
});

Then(`Only Condominium Entity with this {string} Managed By should displayed in the list`, (managedBy) => {
  cy.wait('@filterByManagedBy', { timeout: 30000 }).get('table').find('td div[datacy="managedBy"]').should('be.visible')
      .should('contain', managedBy);
});

Then(`Only Condominium Entity with this {string} Postal Code should displayed in the list`, (postalCode) => {
  cy.wait('@filterByPostalCode', { timeout: 30000 }).get('table').find('td div[datacy="postalCode"]').should('be.visible')
      .should('contain', postalCode);
});

Then(`Should show {string} screen`, (screenConfirmationLabel) => {
  cy.get('.text-label', { timeout: 30000 }).contains(screenConfirmationLabel).should('be.ok');
});