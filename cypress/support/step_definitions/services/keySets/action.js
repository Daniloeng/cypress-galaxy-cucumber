import { When } from "@badeball/cypress-cucumber-preprocessor";
import { createKeySets } from "../../../apiServices/services/keySets/keySetsServices";
import { faker } from "@faker-js/faker";

let createdKeySetId;

When(`Created a Key Set from API`, () => {
  createKeySets().then((key) => {
    createdKeySetId = key.item.id;
  });
});

When(`Filters by {string} in the AssetId field of the Key-Sets table screen`, (assetId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets?**`).as('filterByAssetId');
  cy.get('th div[datacy="assetId"]', { timeout: 20000 }).should('be.visible').click().type(assetId);
});

When(`Filters by {string} in the Previous AssetId field of the Key-Sets table screen`, (assetPrevId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets?**`).as('filterByPreviousAssetId');
  cy.get('th div[datacy="previousAssetId"]', { timeout: 20000 }).should('be.visible').click().type(assetPrevId);
});

When(`Filters by {string} in the Id field of the Key-Sets table screen`, (id) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets?**`).as('filterById');
  cy.get('th div[datacy="id"]', { timeout: 20000 }).should('be.visible').click().type(id);
});

When(`Filters by {string} in the Storage Entity field of the Key-Sets table screen`, (storageEntity) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets?**`).as('filterByStorageEntity');
  cy.get('th div[datacy="entityName"]', { timeout: 20000 }).should('be.visible').click().type(storageEntity);
});

When(`Filters by {string} in the Storage field of the Key-Sets table screen`, (storage) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets?**`).as('filterByStorage');
  cy.get('th div[datacy="keySafeStorageName"]', { timeout: 20000 }).should('be.visible').click().type(storage);
});

When(`Filters by {string} in the Position Number field of the Key-Sets table screen`, (position) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets?**`).as('filterByPositionNumber');
  cy.get('th div[datacy="keySafeStoragePositionNumber"]', { timeout: 20000 }).first().should('be.visible').click().type(position);  
  cy.wait(2000)
});

When(`Filters by {string} in the Total Keys field of the Key-Sets table screen`, (total) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets?**`).as('filterByTotalKeys');
  cy.get('th div[datacy="totalKeys"]', { timeout: 20000 }).should('be.visible').click().type(total);
});

When(`Clicks on Remove button in Key Sets tab`, () => {
  cy.get('.p-toolbar').contains("Remove").click();
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysets?**`).as('deletedKeySet');
});

When(`Click on Add button on key sets movement`, () => {
  cy.wait(4000)
  cy.intercept("POST", Cypress.env("BASE_URL") + `/api/assets/keysets/**`, (req) => { }).as("createdKeySetMovement");
  cy.get('body').then((body) => {
    if (body.find('#KeySetMovementsDataTable', {timeout:10000}).length > 0) {
      cy.get('#KeySetMovementsDataTable > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(1) > :nth-child(4)').invoke('text')
        .then((tableFirstItem) =>{
          if(tableFirstItem == 'Returned ')
          {
            cy.get(':nth-child(3) > .row > .col-md-12 > .p-card > .p-card-body', { timeout: 20000 }).contains('Add').click();
            cy.get('#movementTypeId', { timeout: 30000 }).should('have.text', 'Delivered');
          }
          else if(tableFirstItem == 'Delivered ')
          {
            cy.get(':nth-child(3) > .row > .col-md-12 > .p-card > .p-card-body', { timeout: 20000 }).contains('Add').click();
            cy.get('#movementTypeId', { timeout: 30000 }).should('have.text', 'Returned');
          }
      })
    } 
    else {
      cy.get(':nth-child(3) > .row > .col-md-12 > .p-card > .p-card-body', { timeout: 20000 }).contains('Add').click();
      cy.get('#movementTypeId', { timeout: 30000 }).should('have.text', 'Delivered');
    }
  });
});

When(`Enter in the first item from the table`, () => {
  cy.get(`td div[datacy="id"]`, { timeout: 30000 }).first().click(5, 5)
});

When(`Fill the Key-Sets movement sidebar`, () => {  
  cy.get('#movementTypeId', { timeout: 30000 }).find('.gx-select__single-value').invoke('text').then((text) => {
    cy.log(text)
      if(text == 'Returned'){
      cy.get('#movementDate > .p-inputtext').click();
      cy.get('.p-datepicker-today', { timeout: 30000 }).click();
      cy.get('#userId').type('Galaxy').first({ timeout: 30000 }).contains('system@whitestar').click()
    }
    else if(text == 'Delivered')
    {
      cy.get('#movementDate > .p-inputtext').click();
      cy.get('.p-datepicker-today', { timeout: 30000 }).click();
      cy.get('#userId').type('Galaxy').first({ timeout: 30000 }).contains('system@whitestar').click()
    }
  })
});

When(`Fills the sidebar form for creating porpuses on tab Key Sets`, () => {
  cy.intercept('POST', Cypress.env('BASE_URL') + `/api/assets/keysets`).as('createdKeySet');
  cy.get('#assetId > .gx-select__control').type('76501');
  cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(0).click({ force: true });
  cy.get('#totalKeySet').type('1');
  cy.get('#keyOriginId > .gx-select__control').click();
  cy.get('.gx-select__menu-list', { timeout: 15000 }).contains('Break-In Service', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 15000 }).eq(1).click({ force: true });
  cy.get('#keySetStatusId > .gx-select__control').click();
  cy.get('.gx-select__menu-list', { timeout: 15000 }).contains('Available', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 15000 }).eq(1).click({ force: true });
  cy.get('#keySetStatusDate > .p-inputtext').click();
  cy.get('.p-datepicker-buttonbar').should('be.visible').contains('Today').click();
  cy.get('#entityId > .gx-select__control').type('Whitestar');
  cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(0).click({ force: true });
});

When(`Fills the sidebar form for creating porpuses on tab Key Sets in Asset page`, () => {
  cy.intercept('POST', Cypress.env('BASE_URL') + `/api/assets/keysets`).as('createdKeySet');
  cy.get('.gx-select__loading-indicator').should('not.exist', { timeout: 15000 })
  cy.get('#totalKeySet').type('1');
  cy.get('#keyOriginId > .gx-select__control').click();
  cy.get('.gx-select__menu-list', { timeout: 15000 }).contains('Break-In Service', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 15000 }).eq(1).click({ force: true });
  cy.get('#keySetStatusId > .gx-select__control').click();
  cy.get('.gx-select__menu-list', { timeout: 15000 }).contains('Available', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 15000 }).eq(1).click({ force: true });
  cy.get('#keySetStatusDate > .p-inputtext').click();
  cy.get('.p-datepicker-buttonbar').should('be.visible').contains('Today').click();
  cy.get('#entityId > .gx-select__control').type('Whitestar');
  cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(0).click({ force: true });
});

When(`Fills the sidebar form for editing porpuses on tab Key Sets`, () => {
  cy.intercept(Cypress.env("BASE_URL") + `/api/assets/keysets**`, (req) => { }).as("editedKeySet");
  cy.get('#keyOriginId > .gx-select__control').click();
  cy.get('.gx-select__menu-list', { timeout: 15000 }).contains('Break-In Service', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 15000 }).eq(1).click({ force: true });
  cy.get('#keySetStatusId > .gx-select__control').click();
  cy.get('.gx-select__menu-list', { timeout: 15000 }).contains('Available', { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 15000 }).eq(1).click({ force: true });
  cy.get('#keySetStatusDate > .p-inputtext').click();
  cy.get('.p-datepicker-buttonbar').should('be.visible').contains('Today').click();
  cy.get('#entityId > .gx-select__control').type('Whitestar');
  cy.get('.gx-select__menu-list', { timeout: 15000 }).should("be.visible", { timeout: 30000 }).scrollIntoView().get('.gx-select__option', { timeout: 30000 }).eq(0).click({ force: true });
  cy.get('#comment').type('automationTest'+ faker.number.int({min:0, max:1000}))
});

When(`Writes to be searched in the {string} Name column filter`, (nameColumnFilter) => {
  cy.get('@capturedkeySetId').then((keyset) => {
      cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 30000 }).type(keyset);
  });
});

When(`Writes the 1st KeySet to be searched in bulk in the {string} Name column filter`, (nameColumnFilter) => {
  cy.get('@capturedkeySetId1').then((keyset) => {
      cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 30000 }).type(keyset);
  });
});

When(`Writes the 2nd KeySet to be searched in bulk in the {string} Name column filter`, (nameColumnFilter) => {
  cy.get('@capturedkeySetId2').then((keyset) => {
      cy.get(`.p-inputgroup input[name=${nameColumnFilter}]`, { timeout: 30000 }).type(keyset);
  });
});

When(`Selects the the Asset Id to Return from the Key-sets list`, () => {
  cy.get('tr.p-selectable-row').eq(0).find('td div[datacy="assetId"]').invoke('text').then((keySet) => {
      cy.wrap(keySet.trim()).as('capturedAssetId');
  });
  cy.get('tr.p-selectable-row').find('td div[datacy="assetId"] a')
      .eq(0).click();
});
