
import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { deleteOwnershipAsset, deleteClamedAsset, deleteColateralOfDebtAsset } from "../../../apiServices/management/assets/assetServices";
import { editedExpectedTextsWhenAddClaimedDebts, expectedTextsOnAdvancedAssetFilter, expectedTextsWhenAddClaimedDebts } from "../../../../fixtures/apiData/assets/assetsData";

Then(`A new proposal real estate is successfully created in Draft status`, () => {
  cy.get('span.ent-generic > b').should('include.text', 'Draft');
});

Then(`The page of the proposal shold be showed`, () => {
  cy.get('[class*="Tile_title"] > .text-label').contains('Proposal').should('exist');
});

Then(`Wait for filter is applied in the Asset table`, () => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/managerperspective**`).as('filterAsset');
  cy.wait('@filterAsset');
});

Then(`Only Asset with this {string} Id should displayed in the list`, (type) => {
  cy.wait('@defaultAsset', { timeout: 20000 });
  cy.get('table').find('td div[datacy="id"]').should('be.visible')
    .should('contain', type);
});

Then(`Only Assets with this {string} Type should displayed in the list`, (status) => {
  cy.wait('@defaultAsset', { timeout: 20000 });
  cy.get('table').find('td div[datacy="typeDescription"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', status);
    });
});

Then(`Only Assets with this {string} Status should displayed in the list`, (status) => {
  cy.wait('@defaultAsset', { timeout: 20000 });
  cy.get('table').find('td div[datacy="assetStatusDescription"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', status);
    });
});

Then(`Only Assets with this {string} Portfolio should displayed in the list`, (portfolio) => {
  cy.wait('@defaultAsset', { timeout: 20000 });
  cy.get('table').find('td div[datacy="portfolioNames"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', portfolio);
    });
});

Then(`Only Assets with this {string} Reason should displayed in the list`, (reason) => {
  cy.wait('@defaultAsset', { timeout: 20000 });
  cy.get('table').find('td div[datacy="assetStatusReason"]').should('be.visible')
    .each((cell) => {
      cy.wrap(cell).should('contain', reason);
    });
});

Then(`The Assets should presented in Descending order`, () => {
  cy.wait('@defaultAsset', { timeout: 20000 }).verifyNumberColumnOrder('id', 'desc');
});

Then(`The Assets should presented in Ascending order`, () => {
  cy.wait('@defaultAsset').verifyNumberColumnOrder('id', 'asc');
});

Then(`The texts Assets should presented in Descending order`, () => {
  cy.wait('@defaultAsset', { timeout: 20000 }).verifyTextColumnOrder('typeDescription', 'desc');
});

Then(`The texts Assets should presented in Ascending order`, () => {
  cy.wait('@defaultAsset').verifyTextColumnOrder('typeDescription', 'asc');
});

Then(`Check if the Portions was created`, () => {
  cy.wait('@portion', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });
});

Then(`Check if the Lien was created`, () => {
  cy.wait('@lien', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });
});

Then(`Check if the Debt was created`, () => {
  cy.wait('@debtCreated', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });
});

Then(`Check if the Lien Owner was created`, () => {
  cy.wait('@lienOwnerCreated', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });
});

Then(`Check if the Participant was created`, () => {
  cy.wait('@participantCreated', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
    cy.get('.p-datatable-wrapper', { timeout: 15000 }).should('contain.text', beResponse.response.body.item.id)
    cy.get('.p-datatable-wrapper', { timeout: 15000 }).contains(beResponse.response.body.item.id).click();
    cy.get('.p-toolbar').contains('Remove', { timeout: 15000 }).click()
    cy.get('.p-button-danger > .p-button-label', { timeout: 15000 }).should('be.visible').click()
  });
});

Then(`Check if the Asset was created`, () => {
  cy.wait('@AssetCreated', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });
});

Then(`Check if the Portions was Removed`, () => {
  cy.wait('@deletedPortion', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`Check if the Lien was Removed`, () => {
  cy.wait('@deletedLien', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`Check if the Portions was Edited`, () => {
  cy.wait('@editedPortion', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`Check if the Lien was edited`, () => {
  cy.wait('@editedLien', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`Check if the Asset was edited`, () => {
  cy.wait('@editedAsset', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
  cy.get(':nth-child(2) > .col-sm-6').should('contain.text', 'INVESTIDOR - BANCO DAS CASAS')
});

Then(`Check if the Portions were unified`, () => {
  cy.wait('@unifyPortion', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`Check if the Portions were splited`, () => {
  cy.wait('@splitPortion', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});

Then(`Check if the Portions were merged`, () => {
  cy.wait('@mergePortion', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});


Then(`The Ownership created should be visble on table`, () => {
  // Validate "Asset Status" 
  cy.get('@assetStatusWrap').then(assetStatus => {
    cy.get('div[datacy="portfolioAssetStatus"]').should('contain.text', assetStatus);
  });

  // Validate "Acquisition Type" 
  cy.get('div[datacy="assetAcquisitionType"]').should('contain.text', 'Deed Originators');

  // Validate "Acquisition Amount" 
  cy.get('@transactionAmountWrap').then(transactionAmount => {
    cy.get('div[datacy="acquisitionAmount"] span.gx-dt-datatable-currency-font').should('contain.text', transactionAmount);
  });

  // Validate "Asset Status" contains "CLAIM"
  cy.get('@transactionAmountWrap').then(transactionAmount => {
    cy.get('div[datacy="acquisitionAmount"] span.gx-dt-datatable-currency-font').should('contain.text', transactionAmount);
  });

});

Then(`Verifies that the Ownership has been removed from debt table`, () => {
  cy.wait('@ownershipAssetTable', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });

  cy.get('.p-datatable-wrapper').should('exist').within(() => {
    cy.get('tbody').then($tbody => {
      if ($tbody.find('tr.p-datatable-emptymessage').length > 0) {
        cy.get('tr.p-datatable-emptymessage').should('contain.text', 'No records found');
      } else {
        throw new Error('Expected to find "No records found" message, but it was not found');
      }
    });
  });
});

Then(`Remove the Colateral Of Debts with Portfolio {string} and AssetId {string} with DebtId {string} on Asset view by API`, (portfolioId, assetId, debtId) => {
  cy.wait("@loadColateralOfDebtsAsset", { timeout: 30000 }).then((data) => {
    if (data.response.body.items.length > 0) {
      data.response.body.items.forEach(colateralDebtsList => {
        if (colateralDebtsList.typeDescription === 'Financial') {
          deleteColateralOfDebtAsset(portfolioId, assetId, colateralDebtsList.id);
        }
      })
    }
  })
});

Then(`The Debt should be visible on Colateral of Debts card from Asset View`, () => {
  cy.get('#ColateralOfDebtsCard > .p-datatable-wrapper').should('contain.text', '268119')
});

Then(`Colateral of Debts table should be loaded`, () => {
  cy.wait("@loadColateralOfDebtsAsset").then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
})

Then(`Verifies that the Colateral of Debts has been removed from asset card`, () => {
  cy.wait('@loadColateralOfDebtsAsset', { timeout: 20000 }).then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
  cy.get('.p-card-body').first().within(() => {
    cy.get('#ColateralOfDebtsCard').should('not.exist');
  });
});

Then(`Shoud be visble the Asset searched on Asset datatable`, () => {
  expectedTextsOnAdvancedAssetFilter.forEach(text => {
    cy.get('.p-selectable-row').should('contain.text', text).and('be.visible');
  });
});

Then('The Claimed Asset should be created on Claimed Assets Card', () => {
  cy.wait('@loadClamedAsset')

  cy.get('.p-datatable-wrapper').eq(3).find('table').then($table => {
    cy.wrap($table).find('tbody tr').each(($row, rowIndex) => {
      if (expectedTextsWhenAddClaimedDebts[rowIndex]) {
        const values = expectedTextsWhenAddClaimedDebts[rowIndex];

        cy.wrap($row).find('td').should('contain.text', values.assetId);
        cy.wrap($row).find('td').should('contain.text', values.type);
        cy.wrap($row).find('td').should('contain.text', values.debts);
        cy.wrap($row).find('td').should('contain.text', values.expectedAmountToReceive);
        cy.wrap($row).find('td').should('contain.text', values.previousAssetIdentifier);
        cy.wrap($row).find('td').should('contain.text', values.assetStatus);
        cy.wrap($row).find('td').should('contain.text', values.assetStatusReason);
        cy.wrap($row).find('td').should('contain.text', values.portfolioManagementPhase);
        cy.wrap($row).find('td').should('contain.text', values.businessPlanValue);
        cy.wrap($row).find('td').should('contain.text', values.businessPlanValueDate);
        cy.wrap($row).find('td').should('contain.text', values.portion);
        cy.wrap($row).find('td').should('contain.text', values.registrationOffice);
        cy.wrap($row).find('td').should('contain.text', values.registrationOfficeNumber);
        cy.wrap($row).find('td').should('contain.text', values.taxOfficeNumber);
        cy.wrap($row).find('td').should('contain.text', values.taxOfficeFraction);
      }
    });
  });
});

Then('The Claimed Asset should be modifyed on Claimed Assets Card', () => {
  cy.wait('@loadClamedAsset')

  cy.get('.p-datatable-wrapper').eq(3).find('table').then($table => {
    cy.wrap($table).find('tbody tr').each(($row, rowIndex) => {
      if (editedExpectedTextsWhenAddClaimedDebts[rowIndex]) {
        const values = editedExpectedTextsWhenAddClaimedDebts[rowIndex];

        cy.wrap($row).find('td').should('contain.text', values.assetId);
        cy.wrap($row).find('td').should('contain.text', values.type);
        cy.wrap($row).find('td').should('contain.text', values.debts);
        cy.wrap($row).find('td').should('contain.text', values.expectedAmountToReceive);
        cy.wrap($row).find('td').should('contain.text', values.previousAssetIdentifier);
        cy.wrap($row).find('td').should('contain.text', values.assetStatus);
        cy.wrap($row).find('td').should('contain.text', values.assetStatusReason);
        cy.wrap($row).find('td').should('contain.text', values.portfolioManagementPhase);
        cy.wrap($row).find('td').should('contain.text', values.businessPlanValue);
        cy.wrap($row).find('td').should('contain.text', values.businessPlanValueDate);
        cy.wrap($row).find('td').should('contain.text', values.portion);
        cy.wrap($row).find('td').should('contain.text', values.registrationOffice);
        cy.wrap($row).find('td').should('contain.text', values.registrationOfficeNumber);
        cy.wrap($row).find('td').should('contain.text', values.taxOfficeNumber);
        cy.wrap($row).find('td').should('contain.text', values.taxOfficeFraction);
      }
    });
  });
});

Then(`Remove the Ownership on Asset view {string} by API`, (acquisitionTypeName) => {
  cy.wait("@loadOwnershipAsset", { timeout: 30000 }).then((data) => {
    if (data.response.body.items.length > 0) {
      data.response.body.items.forEach(ownerList => {
        if (ownerList.assetAcquisitionType === acquisitionTypeName) {
          deleteOwnershipAsset(ownerList.assetId, ownerList.id);
        }
      })
    }
  })
});

Then(`Remove the Claimed Asset on Legal Case view from Asset by API`, () => {
  cy.wait("@loadClamedAsset", { timeout: 30000 }).then((data) => {
    const items = data.response.body.items;
    if (Array.isArray(items) && items.length > 0) {
      items.forEach(clamedList => {
        if (clamedList.legalCaseInstanceId === 618839) {
          deleteClamedAsset(clamedList.legalCaseInstanceId, clamedList.id);
        }
      });
    } else {
      cy.log('No items found or items is not an array');
    }
  });
});

Then(`Checks if Key Set Retorned is available in the Asset keySets list`, () => {
  cy.wait(2000);
    cy.get('@capturedkeySetId').then((id) => {
      cy.get('tr.p-selectable-row').each(($row) => {
        cy.wrap($row).find('td div[datacy="id"]').invoke('text').then((rowId) => {
          if (rowId.trim() === id.trim()) {
            cy.wrap($row).find('td div[datacy="id"]').invoke('text').should('contain', id);
            cy.wrap($row).find('td div[datacy="keySetStatusDescription"]').invoke('text').should('contain', 'Available');
            cy.wrap($row).find('td div[datacy="deliveredToName"]').invoke('text').should('contain', 'testmanager3');
          }
        });
      });
    });
});

Then(`Checks if the 1st Key Set Returned is available in the Asset keySets list`, () => {
  cy.wait(2000);
    cy.get('@capturedkeySetId1').then((id) => {
      cy.get('tr.p-selectable-row').each(($row) => {
        cy.wrap($row).find('td div[datacy="id"]').invoke('text').then((rowId) => {
          if (rowId.trim() === id.trim()) {
            cy.wrap($row).find('td div[datacy="id"]').invoke('text').should('contain', id);
            cy.wrap($row).find('td div[datacy="keySetStatusDescription"]').invoke('text').should('contain', 'Available');
            cy.wrap($row).find('td div[datacy="deliveredToName"]').invoke('text').should('contain', 'testmanager3');
          }
        });
      });
    });
});

Then(`Checks if the 2nd Key Set Returned is available in the Asset keySets list`, () => {
  cy.wait(2000);
    cy.get('@capturedkeySetId2').then((id) => {
      cy.get('tr.p-selectable-row').each(($row) => {
        cy.wrap($row).find('td div[datacy="id"]').invoke('text').then((rowId) => {
          if (rowId.trim() === id.trim()) {
            cy.wrap($row).find('td div[datacy="id"]').invoke('text').should('contain', id);
            cy.wrap($row).find('td div[datacy="keySetStatusDescription"]').invoke('text').should('contain', 'Available');
            cy.wrap($row).find('td div[datacy="deliveredToName"]').invoke('text').should('contain', 'testmanager3');
          }
        });
      });
    });
});
