
import { Then } from "@badeball/cypress-cucumber-preprocessor";


Then(`Only Key-Sets with this {string} AssetId should displayed in the list`, (assetId) => {
  cy.wait('@filterByAssetId', { timeout: 30000 }).get('table').find('td div[datacy="assetId"]').should('be.visible')
      .should('contain', assetId);
});

Then(`Only Key-Sets with this {string} Previous AssetId should displayed in the list`, (assetId) => {
  cy.wait('@filterByPreviousAssetId', { timeout: 30000 }).get('table').find('td div[datacy="previousAssetId"]').should('be.visible')
      .should('contain', assetId);
});

Then(`Only Key-Sets with this {string} Id should displayed in the list`, (id) => {
  cy.wait('@filterById', { timeout: 30000 }).get('table').find('td div[datacy="id"]').should('be.visible')
      .should('contain', id);
});

Then(`Only Key-Sets with this {string} Storage Entity should displayed in the list`, (id) => {
  cy.wait('@filterByStorageEntity', { timeout: 30000 }).get('table').find('td div[datacy="entityName"]').should('be.visible')
      .should('contain', id);
});

Then(`Only Key-Sets with this {string} Storage should displayed in the list`, (id) => {
  cy.wait('@filterByStorage', { timeout: 30000 }).get('table').find('td div[datacy="keySafeStorageName"]').should('be.visible')
      .should('contain', id);
});

Then(`Only Key-Sets with this {string} Position Number should displayed in the list`, (id) => {
  cy.wait('@filterByPositionNumber', { timeout: 30000 }).get('table').find('td div[datacy="keySafeStoragePositionNumber"]').should('be.visible')
      .should('contain', id);
});

Then(`Only Key-Sets with this {string} Total Keys should displayed in the list`, (id) => {
  cy.wait('@filterByTotalKeys', { timeout: 30000 }).get('table').find('td div[datacy="totalKeys"]').should('be.visible')
      .should('contain', id);
});

Then(`The Key-Set movement should be created`, () => {
  cy.wait("@createdKeySetMovement").then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });
});

Then(`The Key-Set should be created`, () => {
  cy.wait('@createdKeySet', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });
});

Then(`The Key-Set should be deleted`, () => {
  cy.wait('@deletedKeySet').then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`The Key-Set should be edited`, () => {
  cy.wait('@editedKeySet', {timeout:15000}).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`Checks if Key Set Retorned is available in the keySets list`, () => {
  cy.wait(2000);
  cy.get('@capturedkeySetId').then((keyset) => {
      cy.get('td div[datacy="id"]').each(($el) => {
          cy.wrap($el).invoke('text').should('contain', keyset);
      });
      cy.get('td div[datacy="keySetStatusDescription"]').each(($el) => {
          cy.wrap($el).invoke('text').should('contain', 'Available');
      });
  });
});

Then(`Checks if the 1st Key Set Returned is available in the keySets list`, () => {
  cy.wait(2000);
  cy.get('@capturedkeySetId1').then((keyset) => {
      cy.get('td div[datacy="id"]').each(($el) => {
          cy.wrap($el).invoke('text').should('contain', keyset);
      });
      cy.get('td div[datacy="keySetStatusDescription"]').each(($el) => {
          cy.wrap($el).invoke('text').should('contain', 'Available');
      });
  });
});

Then(`Checks if the 2nd Key Set Returned is available in the keySets list`, () => {
  cy.wait(2000);
  cy.get('@capturedkeySetId2').then((keyset) => {
      cy.get('td div[datacy="id"]').each(($el) => {
          cy.wrap($el).invoke('text').should('contain', keyset);
      });
      cy.get('td div[datacy="keySetStatusDescription"]').each(($el) => {
          cy.wrap($el).invoke('text').should('contain', 'Available');
      });
  });
});
