import { Given, Step, When } from "@badeball/cypress-cucumber-preprocessor";
import { getOneAssetIdByFilter, getProposalsFromAnAsset } from "../../../apiServices/management/assets/assetServices";

Given(`An user is on the tab proposals from an asset`, () => {
  const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`
  return getOneAssetIdByFilter(pathAndParameters)
    .then((assetId) => {
      cy.loginWithClientID();
      cy.visit(`/assets/${assetId}/proposals`);
    });
});

When(`Clicks on the button Add`, () => {
  cy.get(`.d-block > :nth-child(1)`).click();
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/businessarea/**`).as('businessAreaOptions');
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/agreements/proposalstrategy/**`).as('proposalStrategyOptions');
  cy.wait(2000);
});

When(`Clicks on the Manager dropdown and chooses an option`, () => {
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/2170/tile`).as('searchManager');
  cy.get('#managerId > .gx-select__control').type(String('galaxy.testautomationhead'));
  cy.wait('@searchManager').get(`.gx-select__menu`).contains('galaxy.testautomationhead').click();
});

When(`Fills {string} Business Area with {string} Strategy and fill {string} on the Additional Costs fields in new Real Estate Proposal`, (business, strategy, costs) => {
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/1**`).as('user');
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/businessarea/**`).as('businessAreaOptions');
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/agreements/proposalstrategy/businessArea/1/proposaltypes/**`).as('proposalStrategyOptions');

  cy.wait('@businessAreaOptions').get('#businessAreaId > .gx-select__control', { timeout: 10000 }).click();
  cy.get(`.gx-select__menu`).contains(business).click();

  cy.wait(`@proposalStrategyOptions`, { timeout: 10000 });
  cy.get(`#proposalStrategyId > .gx-select__control`, { timeout: 10000 }).click();
  cy.get(`#proposalStrategyId`).type(strategy);
  cy.get(`.gx-select__menu`).contains(strategy).scrollIntoView().click();
  cy.get('#useLicenseHandledByBuyer > [aria-label="No"] > .p-button-label').click();
  cy.get('#reSale > [aria-label="No"] > .p-button-label').click();
  cy.get(':nth-child(10) > .col-xs-12 > .p-inputtext').type(`{selectAll}{backspace}${costs}`);
  cy.get('#interestRate').type(`{selectAll}{backspace}${costs}`);
  cy.get(':nth-child(12) > .col-xs-12 > .p-inputtext').type(`{selectAll}{backspace}${costs}`);
  cy.get('#gx-form__submit-button').click();
});

Given(`An user is on Assets`, () => {
  cy.loginWithClientID();
  cy.visit(`/assets/`);
});

When(`The user clicks on the id of an asset`, () => {
  cy.get('#Assets > .gx-select__control > .gx-select__indicators > .gx-select__indicator > .css-19bqh2r').click().then(() => {
    cy.get('[id*="react-select"][id*="option-1"] > .select-templated-item > :nth-child(2)').click();
  });
  const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`;
  return getOneAssetIdByFilter(pathAndParameters)
    .then((assetId) => {
      cy.get(':nth-child(3) > .p-button-icon').click();
      cy.get('[style="min-width: 80px;"] > .DataTableFilter_gx-dt-filter-wrapper__eAOcC > .p-inputgroup > .form-control').type(String(assetId));
      cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/assets/managerperspective?filters=all+equ+true&first=0&count=15&filters=id+equ+${assetId}&countTotalRecords=true`).as('searchResult');
      cy.wait('@searchResult');
      cy.wait(10).get('[style="min-width: 80px;"] > a').click();
    });
});

When(`The user clicks on the tab proposals`, () => {
  cy.get('strong').invoke('text').then((assetId) => {
    return getProposalsFromAnAsset(assetId).then((proposals) => {
      if (proposals.length === 0) {
        const proposal = getProposalModel(1, 2128, 3, 3, 8, assetId, null, null, null, null, null, null, null, null);
        createProposal(proposal).then(() => {
          cy.get('.p-megamenu-root-list > :nth-child(8)').should('be.visible').click();
        });
      }
      else {
        cy.get('.p-megamenu-root-list > :nth-child(8)').should('be.visible').click();
      }
    });
  });
});

When(`The user clicks on the id of a proposal`, () => {
  cy.get('[class*="ClipboardCopy_copy-wrapper"] > a').click();
});

When(`Wait for filter in the Asset table`, () => {
  cy.intercept('GET', `/api/assets/managerperspective**`).as('defaultAsset');
});

When(`Wait for filter applied in the Asset table`, () => {
  cy.intercept('GET', `/api/assets/managerperspective?filters**`).as('appliedAsset');
});

When(`Filters by {string} in the Id field of the Asset table screen`, (id) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get('input[name="id"]', { timeout: 20000 }).click().type(id);
});

When(`Filters by {string} in the Status field of the Asset table screen`, (status) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get('select[name="assetStatusId"]', { timeout: 20000 }).click();
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${status}$`, 'i'))
    .scrollIntoView().should('be.visible').click();
});

When(`Filters by {string} in the Type field of the Asset table screen`, (type) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get('select[name="assetTypeId"]', { timeout: 20000 }).parent().siblings('div').eq(2).click();
  cy.get('.p-multiselect-filter').click();
  cy.get('.p-multiselect-filter-container > .p-inputtext').scrollIntoView().type(type);
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${type}$`, 'i'))
    .scrollIntoView().should('be.visible').click();
});

When(`Filters by {string} in the Portfolio field of the Asset table screen`, (portfolio) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get('select[name="portfolioId"]').parent().siblings('div').eq(2).click();
  cy.get('.p-multiselect-filter').click();
  cy.get('.p-multiselect-filter-container > .p-inputtext').scrollIntoView().type(portfolio);
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${portfolio}$`, 'i'))
    .scrollIntoView().should('be.visible').click();
});

When(`Filters by {string} in the Reason field of the Asset table screen`, (reason) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get('select[name="assetStatusReasonId"]').parent().siblings('div').eq(2).click();
  cy.get('.p-multiselect-filter').click();
  cy.get('.p-multiselect-filter-container > .p-inputtext').scrollIntoView().type(reason);
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${reason}$`, 'i'))
    .scrollIntoView().should('be.visible').click();
});

When(`Aligns the Asset table by the {string} column in Descending order`, (column) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get('.p-column-title').contains(column).should('be.visible').click();
});

When(`Aligns the Asset table by the {string} column in Ascending order`, (column) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get('.p-column-title').contains(column).should('be.visible').click();
  cy.wait('@defaultAsset', { timeout: 20000 });
  cy.get('.p-column-title').contains(column).should('be.visible').click();
});
