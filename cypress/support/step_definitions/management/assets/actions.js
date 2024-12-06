import { Given, Step, When } from "@badeball/cypress-cucumber-preprocessor";
import { getOneAssetIdByFilter, getProposalsFromAnAsset, createPortion, createLien } from "../../../apiServices/management/assets/assetServices";
import { createProposal, getProposalModel } from "../../../apiServices/management/proposals/proposalServices";
import { newOwnershipAsset } from "../../../../fixtures/apiData/debtsData/debtsData"
import { faker } from "@faker-js/faker";

Given(`An user is on the tab proposals from an asset`, () => {
  const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`
  return getOneAssetIdByFilter(pathAndParameters)
    .then((assetId) => {
      cy.loginWithClientID();
      cy.visit(`/assets/${assetId}/proposals`);
    });
});

Given(`An user is on Assets {string} view in {string} screen`, (asset, assetScreenOption) => {
  cy.loginWithClientID();
  cy.visit(`/assets/${asset}/${assetScreenOption}`);
});

Given(`An user is on Portfolio {string} view in {string} screen`, (portfolio, portfolioScreenOption) => {
  cy.loginWithClientID();
  cy.visit(`/portfolios/${portfolio}/${portfolioScreenOption}`);
});

When(`{string} Portions are created by API`, (numberOfPortions) => {
  createPortion(numberOfPortions);
});

When(`Lien is created by API`, () => {
  createLien();
});

Given(`An user is on LegalCase View`, () => {
  cy.loginWithClientID();
  cy.visit(`/legalcases/297749/618839`);
});


When(`Clicks on the button Add`, () => {
  cy.get(`.d-block > :nth-child(1)`).click();
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/businessarea/**`).as('businessAreaOptionsReal');
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/agreements/proposalstrategy/**`).as('proposalStrategyOptions');
  cy.wait(2000);
});

When(`Clicks on Add button in Assets portions`, () => {
  cy.get(':nth-child(6) > .p-button-label').should('be.visible').click()
});

When(`Clicks on Add button in Portfolio debts`, () => {
  cy.get('.p-datatable-tbody').invoke('text').should('not.be.empty');
  cy.get('.p-toolbar', {timeout: 15000}).should('be.visible').contains('Add', {timeout: 15000}).click()
});

When(`Clicks on Add button in Portfolio lien owners`, () => {
  cy.get('.p-datatable-tbody').invoke('text').should('not.be.empty');
  cy.get('.p-toolbar', {timeout: 15000}).should('be.visible').contains('Add', {timeout: 15000}).click()
});

When(`Clicks on Add button in Portfolio assets`, () => {
  cy.get('#PortfolioAssetsTab > .gx-select__control > .gx-select__indicators > .gx-select__indicator', {timeout: 15000}).click();
  cy.get('.gx-select__menu', {timeout: 15000}).should('be.visible', {timeout: 15000}).contains('Table').click()
  cy.get('.p-datatable-tbody').invoke('text').should('not.be.empty');
  cy.get('.p-dropdown-label', {timeout: 15000}).should('be.visible').contains('Add Asset', {timeout: 15000}).click()
  cy.get('[aria-label="Add"]').click()
});

When(`Clicks on Add button in Assets liens`, () => {
  cy.get('.p-datatable-wrapper').should('be.visible');
  cy.get('.d-block > :nth-child(1) > .p-button-label').contains('Add').should('be.visible').click()
});

When(`Clicks on Unify button in Assets portions`, () => {
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/portfolios/188/assets/**`, (req) => { }).as('unifyPortion');
  cy.get(':nth-child(1) > .p-button-label').contains('Unify').scrollIntoView().should('be.visible').click()
});

When(`Clicks on Split button in Assets portions`, () => {
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/portfolios/188/assets/**`, (req) => { }).as('splitPortion');
  cy.get('.d-block > :nth-child(2) > .p-button-label').contains('Split').scrollIntoView().should('be.visible').click()
  cy.get('#numberOfPortions').should('be.visible').type('2')
});

When(`Clicks on Merge button in Assets portions`, () => {
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/portfolios/188/assets/**`, (req) => { }).as('mergePortion');
  cy.get('.d-block > :nth-child(3) > .p-button-label').contains('Merge').scrollIntoView().should('be.visible').click()
});

When(`Clicks on Edit button in Assets portions`, () => {
  cy.get(':nth-child(7) > .p-button-label').scrollIntoView().should('be.visible').click()
});

When(`Clicks on Edit button in Assets screen`, () => {
  cy.get('.page-header').contains('Edit').click()
});

When(`Clicks on Remove button in Assets portions`, () => {
  cy.get(':nth-child(4) > .p-button-label').should('be.visible').click()
});

When(`Clicks on Remove button in Assets Liens`, () => {
  cy.get('.d-block').contains('Remove').click()
});

When(`Clicks on Edit button in Assets Liens`, () => {
  cy.get('.d-block', {timeout: 15000}).contains('Edit').click()
});

When(`Clicks Delete`, () => {
  cy.intercept('DELETE', `${Cypress.env('BASE_URL')}/api/portfolios/**`, (req) => { }).as('deletedPortion');
  cy.intercept('DELETE', `${Cypress.env('BASE_URL')}/api/assets/**`, (req) => { }).as('deletedLien');
  cy.get('.p-button-danger > .p-button-label').should('be.visible').click()
});

When(`Select a active portion`, () => {
  cy.get('.p-selectable-row', { timeout: 15000 }).should('be.visible');
  cy.get('.p-toolbar-group-right').should('be.visible').click(77, 23)
  cy.get('.p-listbox-list-wrapper', { timeout: 14000 }).should('be.visible', { timeout: 14000 }).get('[aria-label="Active"]').click({ force: true })
  cy.get('.p-selectable-row', { timeout: 15000 }).should('be.visible');
  cy.get('#PortfolioAssetPortionsDataTable').then(($body) => {
    if ($body.find('.p-dropdown-label').length > 0) {
      cy.get('.p-dropdown-label').should('be.visible').click();
      cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/portfolios/188/assets/**`).as('pagging250');
      cy.get('.p-dropdown-panel').contains('250').click();
      cy.wait('@pagging250', { timeout: 15000 }).get('#layout-main').scrollTo('bottom');
    }
  });
  cy.get('div > .status-positive-color > .fa-check-square').first().scrollIntoView().should('be.visible').first().click()
});

When(`Select all portions to be closed`, () => {
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/portfolios/**`, (req) => { }).as('closingPortions');
  cy.get('.p-datatable-tbody', { timeout: 15000 }).should('be.visible');
  cy.get('.p-datatable-thead > tr > .p-selection-column > .p-checkbox > .p-checkbox-box').should('be.visible', { timeout: 15000 }).click({ force: true });
  cy.get(':nth-child(1) > .p-button-label').contains('Unify').should('be.visible').click()
  cy.get('#gx-form__submit-button').should('be.visible', { timeout: 15000 }).click()
  cy.wait('@closingPortions', { timeout: 15000 }).get('.p-selectable-row', { timeout: 15000 }).should('be.visible')
});

When(`Select a active lien`, () => {
  cy.get('.p-datatable-tbody > :nth-child(1) > .p-selection-column > .p-checkbox > .p-checkbox-box').should('be.visible').click()
});

When(`Select multiple active portions`, () => {
  cy.get('.p-selectable-row', { timeout: 15000 }).should('be.visible');
  cy.get('.p-toolbar-group-right').should('be.visible').click(77, 23)
  cy.get('.p-listbox-list-wrapper', { timeout: 14000 }).should('be.visible', { timeout: 14000 }).get('[aria-label="Active"]').click({ force: true })
  cy.get('.p-selectable-row', { timeout: 15000 }).should('be.visible');
  cy.get('#PortfolioAssetPortionsDataTable').then(($body) => {
    if ($body.find('.p-dropdown-label').length > 0) {
      cy.get('.p-dropdown-label').should('be.visible').click();
      cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/portfolios/188/assets/**`).as('pagging250');
      cy.get('.p-dropdown-panel').contains('250').click();
      cy.wait('@pagging250', { timeout: 15000 }).get('#layout-main').scrollTo('bottom');
    }
  });
  cy.get(".p-selectable-row", { timeout: 15000 }).each(($row) => {
    cy.wrap($row).within(() => {
      cy.get("td")
        .eq(6)
        .then((sixthCell) => {
          if (sixthCell.find('div > .status-positive-color > .fa-check-square').length > 0) {
            cy.get("td").eq(0).click();
          }
        });
    });
  });
});


When('Fill lien sidebar for creation porpuses', () => {
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/assets/**`, (req) => { }).as('lien'); ~
    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/assets/assetlientype/lookup?first=0&count=1000`, (req) => { }).as('lienTypeLoad');
  cy.get('#assetLienStatusId > .gx-select__control > .gx-select__value-container > .gx-select__single-value').contains('Active')
  cy.wait('@lienTypeLoad')
  cy.get('#assetLienTypeId > .gx-select__control', { timeout: 15000 }).should('be.visible').get('#assetLienTypeId > .gx-select__control > .gx-select__indicators > .gx-select__dropdown-indicator').click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).contains('Retention', { timeout: 15000 }).get(".gx-select__option", { timeout: 15000 }).eq(1).click({ force: true });
  cy.get('#belongsToCustomers', { timeout: 15000 }).should('be.visible').click();
  cy.get('.p-multiselect-item').should('be.visible').contains('Customer Case Id').click()
  cy.get('#isInvestorLien > .p-inputswitch-slider').should('be.visible').click();
});

When('Edit lien sidebar', () => {
  cy.intercept('PUT', `${Cypress.env('BASE_URL')}/api/assets/**`, (req) => { }).as('editedLien');
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/assets/assetlientype/lookup?first=0&count=1000`, (req) => { }).as('lienTypeLoad');
  cy.get('#assetLienStatusId > .gx-select__control > .gx-select__value-container > .gx-select__single-value').contains('Active')
  cy.wait('@lienTypeLoad')
  cy.get('#assetLienTypeId > .gx-select__control', { timeout: 15000 }).should('be.visible').get('#assetLienTypeId > .gx-select__control > .gx-select__indicators > .gx-select__dropdown-indicator').click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).contains('Leasing', { timeout: 15000 }).get(".gx-select__option", { timeout: 15000 }).eq(7).click({ force: true });
  cy.get('#belongsToCustomers', { timeout: 15000 }).should('be.visible').click();
  cy.get('.p-multiselect-item').should('be.visible').contains('Customer Case Id').click()
  cy.get('#isInvestorLien > .p-inputswitch-slider').should('be.visible').click();
});

When('Edit the asset Billing To in asset sidebar', () => {
  cy.intercept('PUT', `${Cypress.env('BASE_URL')}/api/portfolios/**`, (req) => { }).as('editedAsset');
  cy.get('#belongsToEntityId').invoke('text').should('match', /\S/, { timeout: 15000 });
  cy.get('#belongsToEntityId').type('{backspace}')
  cy.get('#belongsToEntityId').type('investidor - banco das casas')
  cy.get('.select-templated-item > :nth-child(2) > .text-small', { timeout: 15000 }).contains('tmp').should('be.visible').click()
  cy.get('#assetStatusId > .gx-select__control').click({ force: 30000 }).type('REO');
    cy.get(`.gx-select__menu`, { timeout: 30000 }).contains('REO').click({ force: 30000 });
});

When('Fill portion sidebar for creation porpuses', () => {
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/portfolios/188/assets/**`, (req) => { }).as('portion');
  cy.get('#numberOfPortions').should('be.visible').type('2');
  cy.get('#originatorEntityId > .gx-select__control').type('marsique').get('.select-templated-item > :nth-child(2)').should('be.visible').click()
  cy.get('#assetTypeId > .gx-select__control').click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(11).click({ force: true });
  cy.get('#assetStatusId > .gx-select__control').click()
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(1).click({ force: true });
  cy.get('#assetStatusReasonId > .gx-select__control').click()
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(1).click({ force: true });
});

When('Edit the portion', () => {
  cy.intercept('PUT', `${Cypress.env('BASE_URL')}/api/portfolios/188/assets/3478/portions/**`, (req) => { }).as('editedPortion');
  cy.get('#assetStatusId > .gx-select__control').click()
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(2).click({ force: true });  
});

When('Fill debt sidebar for creation porpuses', () => {
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/debts/lookup/debttype**`, (req) => { }).as('debtTypeLookupLoad');
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/portfolios/**`, (req) => { }).as('debtCreated');  
  cy.wait('@debtTypeLookupLoad').get('#typeId > .gx-select__control > .gx-select__indicators > .gx-select__loading-indicator').should('not.exist', { timeout: 15000 })
  cy.get('#typeId').click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(2).click({ force: true });
  cy.get('.gx-select__loading-indicator').should('not.exist', { timeout: 15000 })
  cy.get('#productId').click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
      .get(".gx-select__option", { timeout: 15000 }).eq(2).click({ force: true });
  cy.get('#statusId').click()
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
      .get(".gx-select__option", { timeout: 15000 }).eq(1).click({ force: true });
  cy.get('#debtDataValidationStatusId ').click()
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
      .get(".gx-select__option", { timeout: 15000 }).eq(2).click({ force: true });
  cy.get('#performingTypeId').click()
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
      .get(".gx-select__option", { timeout: 15000 }).eq(1).click({ force: true });
});

When('Fill lien owner sidebar for creation porpuses', () => {
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/portfolios/**`, (req) => { }).as('lienOwnerCreated');
  cy.get('#ownerName').should('be.visible').type('automationTest' + faker.internet.userName() );
  cy.get('#isInvestor').click();
});

When('Fill participants sidebar for creation porpuses', () => {
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/portfolios/**`, (req) => { }).as('participantCreated');
  cy.get('#entityId ').should('be.visible').type('Hefesto');
  cy.get('.select-templated-item > :nth-child(2) > .text-nowrap', { timeout: 15000 }).contains('Hefesto (Aureas)', { timeout: 15000 }).click()
  cy.get('#typeId').click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(1).click({ force: true });
});

When('Fill asset sidebar for creation porpuses', () => {
  cy.intercept('POST', `${Cypress.env('BASE_URL')}/api/portfolios/**`, (req) => { }).as('AssetCreated');  
  cy.get('#assetTypeId > .gx-select__control > .gx-select__indicators > .gx-select__loading-indicator').should('not.exist', { timeout: 15000 });
  cy.get('#assetTypeId').click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(5).click({ force: true });
  cy.get('#assetStatusId > .gx-select__control > .gx-select__indicators > .gx-select__loading-indicator').should('not.exist', { timeout: 15000 });
  cy.get('#assetStatusId').click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
      .get(".gx-select__option", { timeout: 15000 }).eq(1).click({ force: true }); 
  cy.get('#originatorEntityId > .gx-select__control').type('marsique').get('.select-templated-item > :nth-child(2)').should('be.visible').click() 
});

When(`Clicks on the Manager dropdown and chooses an option`, () => {
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/2170/tile`).as('searchManager');
  cy.get('#managerId > .gx-select__control').type(String('galaxy.testhead3'));
  cy.wait('@searchManager').get(`.gx-select__menu`).contains('galaxy.testhead3').click();
});

When(`Fills {string} Business Area with {string} Strategy and fill {string} on the Additional Costs fields in new Real Estate Proposal`, (business, strategy, costs) => {
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/1**`).as('user');
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/businessarea/**`).as('businessAreaOptionsReal');
  cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/agreements/proposalstrategy/businessArea/1/proposaltypes/**`).as('proposalStrategyOptions');

  cy.wait('@businessAreaOptionsReal').get('#businessAreaId > .gx-select__control', { timeout: 10000 }).click();
  cy.get(`.gx-select__menu`).contains(business).click();

  cy.wait(`@proposalStrategyOptions`, { timeout: 10000 });
  cy.get(`#proposalStrategyId > .gx-select__control`, { timeout: 10000 }).click();
  cy.get(`#proposalStrategyId`).type(strategy);
  cy.get(`.gx-select__menu`).contains(strategy).scrollIntoView().click();
  cy.get('#useLicenseHandledByBuyer > [aria-label="No"] > .p-button-label').click();
  cy.get('#reSale > [aria-label="No"] > .p-button-label').click();
  cy.get(':nth-child(10) > .col-xs-3478 > .p-inputtext').type(`{selectAll}{backspace}${costs}`);
  cy.get('#interestRate').type(`{selectAll}{backspace}${costs}`);
  cy.get(':nth-child(3478) > .col-xs-3478 > .p-inputtext').type(`{selectAll}{backspace}${costs}`);
  cy.get('#gx-form__submit-button').click();
});

Given(`An user is on Assets`, () => {
  cy.loginWithClientID();
  cy.visit(`/assets/`);
});

When(`Clicks on the id of an asset`, () => {
  cy.get('#Assets > .gx-select__control > .gx-select__indicators > .gx-select__indicator > .css-19bqh2r').click().then(() => {
    cy.get('[id*="react-select"][id*="option-1"] > .select-templated-item > :nth-child(2)').click();
  });
  const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`;
  return getOneAssetIdByFilter(pathAndParameters)
    .then((assetId) => {
      cy.get(':nth-child(3) > .p-button-icon').click();
      Step(this, `Filters by "${assetId}" in the Id field of the Asset table screen`);
      cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/assets/managerperspective?filters=all+equ+true&first=0&count=15&filters=id+equ+${assetId}&countTotalRecords=true`).as('searchResult');
      cy.wait('@searchResult');
      cy.wait(10).get('td div[datacy="id"] > a').click();
    });
});

When(`Clicks on the tab proposals`, () => {
  cy.get('strong', { timeout: 20000 }).invoke('text').then((assetId) => {
    return getProposalsFromAnAsset(assetId).then((proposals) => {
      if (proposals.length === 0) {
        const proposal = getProposalModel(1, 234788, 3, 3, 8, assetId, null, null, null, null, null, null, null, null);
        createProposal(proposal).then(() => {
          cy.get('.p-megamenu-root-list > :nth-child(8)', { timeout: 30000 }).should('be.visible').click();
        });
      }
      else {
        cy.get('.p-megamenu-root-list > :nth-child(8)', { timeout: 30000 }).should('be.visible').click();
      }
    });
  });
});

When(`Clicks on the id of a proposal`, () => {
  cy.get(`td div[datacy="id"] div a`).first().click();
});

When(`Wait for filter in the Asset table`, () => {
  cy.intercept('GET', Cypress.env("BASE_URL") + `/api/assets/managerperspective**`).as('defaultAsset');
});

When(`Wait for filter applied in the Asset table`, () => {
  cy.intercept('GET', Cypress.env("BASE_URL") + `/api/assets/managerperspective?filters**`).as('filterApplied');
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
  cy.get(`th div[datacy="assetTypeId"]`, { timeout: 15000 }).contains('All').should('be.visible').click();
  cy.get(`th div[datacy="assetTypeId"]`, { timeout: 15000 }).click().type(type);
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${type}$`, 'i')).click();
});

When(`Filters by {string} in the Portfolio field of the Asset table screen`, (portfolio) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get(`th div[datacy="portfolioId"]`).type(portfolio);
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${portfolio}$`, 'i')).click();
});

When(`Filters by {string} in the Reason field of the Asset table screen`, (reason) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get(`th div[datacy="assetStatusReasonId"]`, { timeout: 15000 }).contains('All').should('be.visible').click();
  cy.get(`th div[datacy="assetStatusReasonId"]`, { timeout: 15000 }).click().type(reason);
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${reason}$`, 'i')).click();
});

When(`Aligns the Asset table by the {string} column in Descending order`, (column) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get('.p-column-title').contains(column).should('be.visible').click();
});

When(`Aligns the Asset table by the {string} column in Ascending order`, (column) => {
  Step(this, `Wait for filter in the Asset table`);
  cy.get('.p-column-title').contains(column).should('be.visible').click();
  cy.wait('@defaultAsset', { timeout: 30000 });
  cy.get('.p-column-title').contains(column).should('be.visible').click();
});

When(`Fill the fields on Asset Ownership side bar`, () => {
  //Capture balance variables to use in the Assertion of this test
  cy.wrap(newOwnershipAsset.transactionAmount).as('transactionAmountWrap');
  cy.wrap(newOwnershipAsset.numberOfAssetsEntire).as('numberOfAssetsEntireWrap');
  cy.wrap(newOwnershipAsset.numberOfAssetsParts).as('numberOfAssetsPartsWrap');
  cy.wrap(newOwnershipAsset.assetStatus).as('assetStatusWrap');

  // Select Sale Transaction
  cy.wait(3000)
  cy.get('#assetAcquisitionTypeId').click();
  cy.get('.gx-select__menu').contains('Deed Originators').click({ force: true });

  // Fill Sale Transaction Date
  cy.get('#acquisitionDate').click()
  cy.get('#acquisitionDate').contains('Today').click()

  // Fill Sale Transaction Amount
  cy.get('label[for="acquisitionAmount"]').parent().find('input').first().type(newOwnershipAsset.transactionAmount)

  // Fill Number of assets (entire) *
  cy.get('label[for="numberOfAssets"]').parent().find('input').type(newOwnershipAsset.numberOfAssetsEntire)

  // Fill Number of assets (parts) *
  cy.get('label[for="portionNumber"]').parent().find('input').type(newOwnershipAsset.numberOfAssetsParts)

  // Select Asset Status
  cy.get('#assetStatusId', { timeout: 15000 }).click()
  cy.get('#assetStatusId').contains(newOwnershipAsset.assetStatus).click()

})

When(`Wait for the Ownership Asset {string} table loaded`, (assetId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/assetownership/${assetId}?first=0&count=15&countTotalRecords=true`).as('loadOwnershipAsset');
});

When(`Wait for the Claimed Assets table loaded`, () => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/legal/legalcaseinstances/618839/portfolioassets?first=0&count=5&countTotalRecords=true`).as('loadClamedAsset');
});

When(`Wait for the Asset on Side Claimed Asset side bar to load`, () => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/legal/legalcaseinstances/618839/eligibleportfolioassets?first=0&count=1000`).as('loadAssetSideBar');
});

When(`Wait for the Colateral Of Debts with Portfolio {string} and AssetId {string} on Asset View table load`, (portfolioId, debtId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/portfolios/${portfolioId}/assets/${debtId}/debts?first=0&count=5&countTotalRecords=true`).as('loadColateralOfDebtsAsset');
});

When(`Selects the first item from the Ownership Asset table`, () => {
  cy.get('.p-selectable-row > :nth-child(2)').click({ force: true });
})

When(`Edit the fields on Asset Ownership side bar`, () => {
  //Capture balance variables to use in the Assertion of this test
  cy.wrap(newOwnershipAsset.transactionAmount).as('transactionAmountWrap');
  cy.wrap(newOwnershipAsset.numberOfAssetsEntire).as('numberOfAssetsEntireWrap');
  cy.wrap(newOwnershipAsset.numberOfAssetsParts).as('numberOfAssetsPartsWrap');
  cy.wrap(newOwnershipAsset.assetStatus).as('assetStatusWrap');

  // Select Sale Transaction
  cy.wait(3000)
  cy.get('#assetAcquisitionTypeId').click();
  cy.get('.gx-select__menu').contains('Deed Originators').click({ force: true });

  // Fill Sale Transaction Date
  cy.get('#acquisitionDate').click()
  cy.get('#acquisitionDate').contains('Today').click()

  // Fill Sale Transaction Amount
  cy.get('label[for="acquisitionAmount"]').parent().find('input').scrollIntoView().type(newOwnershipAsset.transactionAmount)

  // Fill Number of assets (entire) *
  cy.get('label[for="numberOfAssets"]').parent().find('input').scrollIntoView().type(newOwnershipAsset.numberOfAssetsEntire)

  // Fill Number of assets (parts) *
  cy.get('label[for="portionNumber"]').parent().find('input').scrollIntoView().type(newOwnershipAsset.numberOfAssetsParts)

  // Select Asset Status
  cy.get('#assetStatusId', { timeout: 15000 }).click()
  cy.get('#assetStatusId').contains(newOwnershipAsset.assetStatus).click()

})

When(`Intercept and wait for closing the Ownership Asset sidebar`, () => {
  cy.intercept("GET", Cypress.env("BASE_URL") + `/api/assets/assetownership/10?first=0&count=15&countTotalRecords=true`, (req) => { }).as("ownershipAssetTable");
});

When(`Selects the Colateral of Debts to Add`, () => {
  cy.typeSlowly('[class*="QuickAdd_autocomplete"] > .gx-select__control', 'input', '268119')
  cy.get('.select-templated-item', { timeout: 15000 }).contains('268119').click({ force: true });
});

When(`Clicks on Add Buton in the New Debts side bar`, () => {
  cy.get('[class*="QuickAdd_quick-add-wrapper"] > .p-button > .p-button-label', { timeout: 3000 }).click({ force: true })
});

When('Selects the first item from the Colateral of Debts card', () => {
  cy.get('.p-datatable-wrapper').eq(0).find('.p-checkbox-box[role="checkbox"]').first().click();
});

When('Selects the first item from the Claimed Asset card', () => {
  cy.get('.p-datatable-wrapper').eq(3).find('.p-checkbox-box[role="checkbox"]').first().click();
});

When(`Intercept and wait for closing the Colateral of Debts side bar`, () => {
  cy.intercept("GET", Cypress.env("BASE_URL") + `/api/assets/assetownership/10?first=0&count=15&countTotalRecords=true`, (req) => { }).as("ownershipAssetTable");
});


When(`Clicks on the Advanced Filter button of the Asset View`, () => {
  cy.get('.p-button-icon-left.fas.fa-ellipsis-v', { timeout: 15000 }).click()
})

When(`Fill Advanced filter from Asset view`, () => {
  cy.get('[datacy=id]', { timeout: 30000 }).clear().type('35')
  cy.get('#typeDescription').click();
  cy.get('.p-multiselect-items-wrapper').contains('.p-multiselect-item', 'Flat').click();
  cy.get('#portfolioNames').click()
  cy.get('.p-multiselect-items-wrapper').contains('.p-multiselect-item', 'MORTGAGE').click();
  cy.get('#assetStatusDescription').click()
  cy.get('.p-multiselect-items-wrapper').contains('.p-multiselect-item', 'CLOSED').click();
  cy.get('#pr_id_4').click()
  cy.get('.route-bar').scrollIntoView()
  cy.get('.p-datepicker-year').select('2014', { force: true }).should('have.value', '2014')
  cy.get('.p-datepicker-month').select('August', { force: true })
  cy.get('.p-datepicker-calendar').contains('5').should('be.visible').click({ force: true });
  cy.get('#assetStatusReason').click()
  cy.get('.p-multiselect-items-wrapper').contains('.p-multiselect-item', 'Judicial Sale - Repossession').click({ force: true });
  cy.get('.route-bar').scrollIntoView()
  cy.get('[datacy=previousAssetIdentifier]', { timeout: 30000 }).first().type('02-P01-000129', { timeout: 30000 })
  cy.get('.route-bar').scrollIntoView()
  cy.get('[datacy=originatorAssetName]', { timeout: 30000 }).first().clear().type('GE Consumer Finance, I.F.I.C., Instituição Financeira de Crédito, S.A.')
  cy.get('[datacy=originatorAssetId]', { timeout: 30000 }).first().clear().type('PP-0798-25168-080706-001679')
  cy.get('[datacy=taxOfficeNumber]', { timeout: 30000 }).first().clear().type('5084')
  cy.get('[datacy=taxOfficeFraction]', { timeout: 30000 }).first().clear().type('J')
  cy.get('.route-bar').scrollIntoView()
  cy.get('[datacy=address]', { timeout: 30000 }).first().find('input').type('RUA MARIA MARGARIDA MESQUITA LOTE 11', { force: true })
  cy.get('#isActivePortion').should('be.visible').select('Yes');
  cy.typeSlowly('#countryId', 'input', 'Portugal', 600, 200);
  cy.get('.gx-select__menu', { timeout: 15000 }).contains('Portugal', { delay: 1 }).click();
  cy.get('.route-bar').scrollIntoView()
  cy.typeSlowly('#districtId', 'input', 'FARO', 600, 200);
  cy.get('.gx-select__menu', { timeout: 15000 }).contains('FARO', { delay: 1 }).click();
  cy.get('.route-bar').scrollIntoView()
  cy.typeSlowly('#countyId', 'input', 'LAGOS', 600, 200);
  cy.get('.gx-select__menu', { timeout: 15000 }).contains('LAGOS', { delay: 1 }).click();
  cy.get('.route-bar').scrollIntoView()
  cy.typeSlowly('#parishId', 'input', 'LAGOS', 600, 200);
  cy.get('.gx-select__menu', { timeout: 15000 }).contains('LAGOS (SÃO SEBASTIÃO) (EXTINTA)', { delay: 1 }).click();
  cy.get('.route-bar').scrollIntoView()
  cy.get('[datacy="energyCertificateNumber"] input[name="energyCertificateNumber"]', { timeout: 30000 }).should('be.visible').clear().type('SCE88455737', { force: true });
  cy.get('[datacy="zipcode"] input[name="zipcode"]', { timeout: 30000 }).should('be.visible').clear().type('8600-646', { force: true });
  cy.get('[datacy="registrationOfficeNumber"] input[name="registrationOfficeNumber"]', { timeout: 30000 }).should('be.visible').clear().type('1679', { force: true });

})

When(`Click on Advanced Search filter button`, () => {
  cy.get('#gx-form__submit-button').contains('Search').click()
})

When(`Accesses a legal case in the overview view of the asset screen`, () => {
  cy.get('a[href="/legalcases/297749/618839"]').click();
})

When('Click on {string} button in the Claimed Debts card', (button) => {
  cy.contains('Claimed Assets').closest('.p-card').within(() => {
    cy.get('.p-button-label')
      .contains(button)
      .parents('.p-button')
      .scrollIntoView()
      .click({ force: true });
  });
});

When(`Fill the New Claimed Asset fields on side bar`, () => {
  cy.wait('@loadAssetSideBar')
  cy.get('#assetId').click({ timeout: 5000 }, { force: true });
  cy.get('.gx-select__menu').contains('17').should('be.visible').click({ force: true })
  cy.get('label[for="claimedAmount"]').next('input').clear().type('500')
  cy.get('#claimedDate').click()
  cy.get('.p-datepicker-year').select('2014', { force: true }).should('have.value', '2014')
  cy.get('.p-datepicker-month').select('August', { force: true })
  cy.get('.p-datepicker-calendar').contains('5').should('be.visible').click({ force: true });
  cy.get('label[for="cashInCourt"]').next('input').clear().type('500')
  cy.get('#dataValidationStatusId .gx-select__control').click();
  cy.get('.gx-select__menu').contains('Valid').click();
})

When(`Fill the Edited Claimed Asset fields on side bar`, () => {
  cy.get('label[for="cashInCourt"]').next('input').clear().type('200')
})



