import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { deleteDocumentDebt, deleteCustomerDebt, deleteOwnershipDebt, deleteInterestConfigurationsDebt } from "../../../apiServices/Management/debts/debtsServices";

Then(`The proposal should be created with the name {string}`, (nameDocument) => {
  cy.get(".p-selectable-row", { timeout: 20000 }).contains(nameDocument)
});

Then(`Intercept and remove the document id when action save`, () => {
  cy.wait("@postIdDebt", { timeout: 30000 }).then((data) => {
    const documentId = data.response.body.item.id;
    deleteDocumentDebt(7, 1243294718, documentId);
    if (!documentId) {
      throw new Error('documentId is not set');
    }
  })
});

Then(`Remove the Customer {string} by API`, (costumerName) => {
  cy.wait("@defaultCustomerDebt", { timeout: 30000 }).then((data) => {
    if (data.response.body.items.length > 0) {
      data.response.body.items.forEach(customerList => {
        if (customerList.customerName === costumerName) {
          deleteCustomerDebt(customerList.id, "1243346265");
        }
      })
    }
  })
});

Then(`Remove the Ownership {string} by API`, (ownerShipName) => {
  cy.wait("@ownershipTableDebt", { timeout: 30000 }).then((data) => {
    if (data.response.body.items.length > 0) {
      data.response.body.items.forEach(ownershipList => {
        if (ownershipList.entityName === ownerShipName) {
          deleteOwnershipDebt("1243346265", ownershipList.id);
        }
      })
    }
  })
});

Then(`Remove Document by API {string} {string} {string}`, (name) => {
  cy.wait("@documentTableDebt", { timeout: 30000 }).then((data) => {
    cy.log("LOG" + data.response.body.items)
    if (data.response.body.items.length > 0) {
      data.response.body.items.forEach(documentList => {
        if (documentList.title === name) {
          cy.log("LOG" + documentList)
          deleteDocumentDebt(documentList.domainEntityId, documentList.documentId, documentList.id);
        }
      })
    }
  })
});

Then(`Verifies that the customer {string} has been removed from debt table`, (customer) => {
  cy.get('table').then(($table) => {
    if ($table.find('td div[datacy="customerTypeOrder"]').length === 0) {
      cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
    } else {
      cy.get(".p-selectable-row", { timeout: 15000 }).should('not.contain', customer)
    }
  });
});

Then(`Remove the Customer created on Customer tab from debt view {string}`, (debtId) => {
  const createdCustomerId = Cypress.env('createdCustomerId');
  if (createdCustomerId) {
    deleteCustomerDebt(createdCustomerId, debtId);
  } else {
    throw new Error('No customerId found to delete');
  }
});

Then(`Should be edited to status {string} column on customer table`, (status) => {
  cy.get('#PortfolioDebtsDetailCustomersDatatable').contains(status)
});

Then(`Check if the putback status changed and have the system document attached`, () => {
  cy.reload()
  cy.get('.p-datatable-tbody').should('contain', "1111 automation test for putback").and('contain', 'test automation').and('contain', 'For Putback');
  cy.get('.p-selectable-row').should('contain', "Collateral Documentation")
});

Then(`Check if the putback status changed and have the desktop document attached`, () => {
  cy.reload()
  cy.get('.p-datatable-tbody').should('contain', "1111 automation test for putback").and('contain', 'test automation').and('contain', 'AutomationDesktopDocPutback');
});

Then(`Check if the putback status changed to Not for Putback`, () => {
  cy.reload()
  cy.get('.p-datatable-tbody').should('be.visible').and('contain', 'Not for Putback');
});

Then(`Check if Comment column has comment Bulk closing`, () => {
  cy.reload()
  cy.get('.p-datatable-tbody').should('be.visible').and('contain', 'Not for Putback');
  cy.get('.p-datatable-tbody').should('be.visible').and('contain', 'Bulk closing');
});

Then(`The interest configuration {string} should be visble on table`, (interestName) => {
  cy.get('.p-card-body', { timeout: 30000 }).should('be.visible').contains(interestName);
});

Then(`The values on the Balance view should be displayed`, () => {
  cy.get('@totalDebtBalance').then(debtBalance => {
    cy.get('div[class^="PortfolioDebtsDetailBalances"] dt').contains('Debt Balance').next('dd').should('contain.text', debtBalance);
  });

  cy.get('@totalNominalAmount').then(totalAmount => {
    cy.get('dt').contains('Nominal Amount').next('dd').should('contain.text', totalAmount);
  });

  cy.get('@balanceOverdue').then(balanceOverdue => {
    cy.get('dt').contains('Principal Overdue').next('dd').should('contain.text', balanceOverdue);
  });

  cy.get('@balanceInterest').then(balanceInterest => {
    cy.get('dt').contains('Interest').next('dd').should('contain.text', balanceInterest);
  });

  cy.get('@balanceIndemnities').then(balanceIndemnities => {
    cy.get('dt').contains('Indemnities').next('dd').should('contain.text', balanceIndemnities);
  });

  cy.get('@balanceExpenses').then(balanceExpenses => {
    cy.get('dt').contains('Expenses').next('dd').should('contain.text', balanceExpenses);
  });

  cy.get('@balanceDue').then(balanceDue => {
    cy.get('dt').contains('Principal Due').next('dd').should('contain.text', balanceDue);
  });

});

Then(`The Ownership name should be visble on table`, () => {
  cy.get(".p-selectable-row", { timeout: 20000 }).contains('HEFESTO, STC, S.A')

  cy.get(".p-selectable-row", { timeout: 20000 }).contains('Sale of Debts')

  cy.get(".p-selectable-row", { timeout: 20000 }).contains('€ 5,000.00')

  cy.get(".p-selectable-row", { timeout: 20000 }).contains('5 %')
});

Then(`The Ownership name edited should be visble on table`, () => {
  cy.get(".p-selectable-row", { timeout: 20000 }).contains('Credit Assignment')

  cy.get(".p-selectable-row", { timeout: 20000 }).contains('€ 3,000.00')

  cy.get(".p-selectable-row", { timeout: 20000 }).contains('10 %')
});

Then(`The debt billing to address should be changed`, () => {
  cy.get('[datacy="billingToEntity"]', {timeout:30000}).contains('Portalegre', {timeout:15000}).should('be.ok')
});
