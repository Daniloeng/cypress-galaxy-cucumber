import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Only Key-sets to Return with this {string} Status should displayed in the list`, (status) => {
    cy.wait('@filterApplied', { timeout: 20000 });
    cy.get('table').find('td div[datacy="assetStatus"]').should('be.visible')
      .each((cell) => {
        cy.wrap(cell).should('contain', status);
      });
});

Then(`Only Key-sets to Return with this {string} Delivered to should displayed in the list`, (status) => {
    cy.wait('@filterApplied', { timeout: 20000 });
    cy.get('table').find('td div[datacy="deliveredToName"]').should('be.visible')
      .each((cell) => {
        cy.wrap(cell).should('contain', status);
      });
});

Then(`Verifies that the Key-sets have been retorned and should not displayed in the list`, () => {
  cy.wait(2000);  
  cy.get('@capturedkeySetId').then((capturedkeySetId) => {
        cy.get('td div[datacy="keySetId"]').each(($el) => {
            cy.wrap($el).invoke('text').should('not.eq', capturedkeySetId);
        });
    });
});

Then(`Verifies that the Key-sets have been returned in bulk and should not be displayed in the list`, () => {
  cy.wait(2000);  
  cy.get('@capturedkeySetId1').then((keySetId1) => {
    cy.get('@capturedkeySetId2').then((keySetId2) => {
      cy.get('td div[datacy="keySetId"]').each(($el) => {
        cy.wrap($el).invoke('text').then((keySetId) => {
          expect(keySetId.trim()).not.to.eq(keySetId1.trim());
          expect(keySetId.trim()).not.to.eq(keySetId2.trim());
        });
      });
    });
  });
});

Then(`Checks if the user was directed to the correct Asset`, () => {
    cy.get('@capturedLink').then((assetId) => {
      cy.url().should('include', `/assets/${assetId.trim()}/keys`);
      cy.get(`[class^='Tile_title']`).contains(assetId);
    });
});

Then(`Checks if the user was directed to the correct KeySet`, () => {
    cy.get('@capturedLink').then((keySetId) => {
      cy.url().should('include', `/keysets/${keySetId.trim()}`);
      cy.get(`[class^='Tile_title']`).contains(keySetId);
    });
});

Then(`Checks if the user was directed to the correct Organization`, () => {
    cy.get('@capturedLink').then((name) => {
      cy.get(`[class^='Tile_title']`).contains(name);
    });
});

Then(`Checks if the user was directed to the correct Key Safe Storages`, () => {
    cy.get('@capturedLink').then((name) => {
      cy.get(`[class^='Tile_title']`).contains(name);
    });
});
  