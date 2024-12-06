
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Only WaitingPriceReview with this search bar filter {string} should displayed in the list`, (assetId) => {
  cy.wait('@filterBysearchBar', { timeout: 30000 }).get('table').find('td div[datacy="assetId"]').should('be.visible')
      .should('contain', assetId);
});

Then(`Only WaitingPriceReview with this {string} AssetId should displayed in the list`, (assetId) => {
  cy.wait('@filterByAssetId', { timeout: 30000 }).get('table').find('td div[datacy="assetId"]').should('be.visible')
      .should('contain', assetId);
});

Then(`Only WaitingPriceReview with this {string} Previous Id should displayed in the list`, (previousId) => {
  cy.wait('@filterByPreviousId', { timeout: 30000 }).get('table').find('td div[datacy="previousId"]').should('be.visible')
      .should('contain', previousId);
});

Then(`Only WaitingPriceReview with this {string} Portfolio should displayed in the list`, (portfolio) => {
  cy.wait('@filterByPortfolio', { timeout: 30000 }).get('table').find('td div[datacy="portfolio"]').should('be.visible')
      .should('contain', portfolio);
});

Then(`Only WaitingPriceReview with this {string} Proposed Price should displayed in the list`, (proposedPrice) => {
  cy.wait('@filterByproposedPrice', { timeout: 30000 }).get('table').find('td div[datacy="proposedPrice"]').should('be.visible')
      .should('contain', proposedPrice);
});

Then(`Only WaitingPriceReview with this {string} Type should displayed in the list`, (type) => {
  cy.wait('@filterBytype', { timeout: 30000 }).get('.p-selectable-row').should('be.visible')
      .should('contain', type);
});

Then(`Only WaitingPriceReview with this {string} Status should displayed in the list`, (status) => {
  cy.wait('@filterByStatus', { timeout: 30000 }).get('.p-selectable-row').should('be.visible')
      .should('contain', status);
});

Then(`Only WaitingPriceReview with this {string} Requester should displayed in the list`, (requester) => {
  cy.wait('@filterByRequester', { timeout: 30000 }).get('.p-selectable-row').should('be.visible')
      .should('contain', requester);
});

Then(`Only WaitingPriceReview with this {string} Decisor should displayed in the list`, (decisor) => {
  cy.wait('@filterByDecisor', { timeout: 30000 }).get('.p-selectable-row').should('be.visible')
      .should('contain', decisor);
});

Then(`Price Review item should be canceled`, () => {
  cy.get('@canceledPriceReview').then(beResponse =>{
    expect(beResponse.response.statusCode).to.equal(200);      
  });
});