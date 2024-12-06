import { Given, When, Step } from "@badeball/cypress-cucumber-preprocessor";
import { createDocumentDebt, createCustomerDebt, createInterestConfigurations, createPutback, deletePutback } from "../../../apiServices/Management/debts/debtsServices";
import {
  createNewCustomerCarlosNetoData,
  createInterestConfigurationsEditData,
  createInterestConfigurationsRemoveData,
  balanceOverdue,
  balanceInterest,
  balanceIndemnities,
  balanceExpenses,
  balanceDue,
  totalNominalAmount,
  totalDebtBalance
} from "../../../../fixtures/apiData/debtsData/debtsData"

let putbackId;

function loginAndVisitDebt(screen, portfolioId, debtId) {
  cy.loginWithClientID();
  let url = `/${screen}`;
  if (portfolioId && debtId) {
    url = `/portfolios/${portfolioId}/${screen}/${debtId}/`;
  }
  cy.visit(url);
  cy.get('.layout-menu-header', { timeout: 30000 }).should('be.visible');
  cy.get('.menu-scroll-content', { timeout: 10000 }).should('be.visible');
}

When('Galaxy bypass has been completed on the Debt Screen for PortfolioId {string} and DebtId {string}', (portfolioId, debtId) => {
  cy.loginWithClientID();
  cy.visit(`/portfolios/${portfolioId}/debts/${debtId}`);
});

Given("As an authenticated user on the {string} screen", (screen) => {
  loginAndVisitDebt(screen);
});

Given("As an authenticated user on the {string} view with URL parameters {string} {string}", (screen, portfolioId, debtId) => {
  loginAndVisitDebt(screen, portfolioId, debtId)
});

Given("As an authenticated user on the securitizations view with URL parameters {string} {string}", (portfolioId, tab) => {
  cy.loginWithClientID();
  cy.visit(`/securitizations/${portfolioId}/${tab}`);
});


Given(`An user is on Debts screen`, () => {
  cy.loginWithClientID();
  cy.visit(`/debts/`);
});

Given(`Create a Customer on Customer tab on Debt Screen for PortfolioId {string} by api debtId {string}`, (portfolioId, debtId) => {
  createNewCustomerCarlosNetoData.debtId = debtId;
  cy.log('DATA: ' + JSON.stringify(createNewCustomerCarlosNetoData, null, 2))
  createCustomerDebt(createNewCustomerCarlosNetoData, debtId)
  Step(this, `Galaxy bypass has been completed on the Debt Screen for PortfolioId "${portfolioId}" and DebtId "${debtId}"`);
});

Given(`Create a Document on Document Debt View for PortfolioId {string} by api debtId {string}`, (portfolioId, debtId) => {
  createDocumentDebt(105, 7, debtId).then(() => {
    Step(this, `Galaxy bypass has been completed on the Debt Screen for PortfolioId "${portfolioId}" and DebtId "${debtId}"`)
  })
})

When('Create a putback by api', () => {
  createPutback().then((putbackObject) => {
    putbackId = putbackObject.item.id
  });
});

When('Galaxy bypass is complete on Debt Screen {string}', (debtId) => {
  cy.loginWithClientID();
  cy.visit(`/portfolios/370/debts/${debtId}`);
})

Given(`Create a Interest Configuration on Settings tab for PortfolioId {string} by api debtId {string}`, (portfolioId, debtId) => {
  createInterestConfigurationsEditData.debtId = debtId;
  createInterestConfigurations(createInterestConfigurationsEditData, debtId)
  Step(this, `Galaxy bypass has been completed on the Debt Screen for PortfolioId "${portfolioId}" and DebtId "${debtId}"`);
});

Given(`Create a Interest Configuration to access on Settings tab for PortfolioId {string} by api debtId {string} to remove`, (portfolioId, debtId) => {
  createInterestConfigurationsRemoveData.debtId = debtId;
  createInterestConfigurations(createInterestConfigurationsRemoveData, debtId)
  Step(this, `Galaxy bypass has been completed on the Debt Screen for PortfolioId "${portfolioId}" and DebtId "${debtId}"`);
});

When(`Clicks on register displayed on the search bar`, () => {
  cy.get(`td div[datacy="id"]`, { timeout: 30000 }).click()
});

When(`Selects first item from datatable`, () => {
  cy.get(".p-menuitem", { timeout: 15000 }).contains("Documents").click({ timeout: 15000 });
});

When(`Select the document {string} from debts documents sidebar`, (document) => {
  const characters = document.split(' ')
  characters.forEach((document) => {
    cy.get(`#documentId`, { timeout: 15000 }).type(document, { delay: 100 })
  })
  cy.get('.gx-select__menu', { timeout: 15000 }).contains(document, { timeout: 15000 }).click();
  cy.intercept("POST", Cypress.env("BASE_URL") + `/api/documentation/documents/relate`, (req) => { }).as("postIdDocument");
});

When(`Select the document {string} on documents table from Debts screen`, (documentName) => {
  cy.get(".p-selectable-row", { timeout: 15000 }).contains(documentName)
    .closest(".p-selectable-row").find(`.p-selection-column .p-checkbox`).click();
})

// When(`Se`, () => {
//   cy.get('#SecuritizationDebtsDataTable > .p-datatable-wrapper').should('be.visible');
//   cy.get('.p-datatable-tbody > :nth-child(1) > .p-selection-column > .p-checkbox > .p-checkbox-box').click()
// })

When('Clicks on Putback Analysis tab', () => {
  cy.get('.p-megamenu-root-list > :nth-child(2) > .p-menuitem-link').should('have.text', 'Putback Analysis').click()
});

When('Clicks on edit button in securitizations debt table header', () => {
  cy.get(':nth-child(2) > .col-md-12 > .p-card > .p-card-body').contains('Edit').click()
});

When('Edit the debt billing address', () => {
  cy.get('.gx-select__loading-indicator').should('not.be.visible')
  cy.wait(2500)
  cy.get('#bankAccountId > .gx-select__control > .gx-select__value-container').click()
  cy.get('.select-templated-item > :nth-child(2)').should('be.visible').contains('STC Resi').click()
  cy.get('.gx-select__advanced-filter').click()
  cy.get('#AdvancedFilterList > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(1)').click()
  cy.get('.col > .p-button > .p-button-label').scrollIntoView().click()  
});

When('Deletes the putback by API', () => {
  deletePutback(putbackId)
});

When('Selects the putback in the datatable by clause description', () => {
  cy.get('.p-selectable-row').each(($row) => {
    cy.wrap($row).within(() => {
      cy.get('td').eq(1).then((clauseCell) => {
        if (clauseCell.text().includes("1111 automation test for putback")) {
          cy.wrap($row).as('rowFound');
        }
      });
    });
  });
  cy.get('@rowFound').click();
});

When('Clicks on Provide Analysis button', () => {
  cy.get('.d-block > :nth-child(1) > .p-button-label').should('be.visible').click()
});

When('Clicks on Close Analysis button', () => {
  cy.get('.d-block > :nth-child(2) > .p-button-label').should('be.visible').click()
});

When('Edit putback status to {string}', (putbackStatus) => {
  cy.get('#statusId > .gx-select__control', { timeout: 15000 }).should('be.visible').click()
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").get(".gx-select__option", { timeout: 15000 }).contains(putbackStatus).click({ force: true });
});

When('Fill the sidebar in putback tab with a desktop document', () => {
  cy.get('#violationReasonsIds > .p-multiselect-label-container').should('be.visible').click()
  cy.get('.p-multiselect-item > .p-checkbox > .p-checkbox-box').should("be.visible").click()
  cy.get('#comments').type('test automation')
  cy.get('.float-right > .p-button > .p-button-label').should('have.text', 'Add Document').click()
});

When('Fill the sidebar in putback tab with a system document', () => {
  cy.get('#violationReasonsIds > .p-multiselect-label-container').should('be.visible').click()
  cy.get('.p-multiselect-item > .p-checkbox > .p-checkbox-box').should("be.visible").click()
  cy.get('#comments').type('test automation')
  cy.get(':nth-child(9) > .col-md-12 > :nth-child(2)').click(280, 50)
  cy.get('.gx-select__menu-notice').should('be.visible').type('Collateral Documentation')
  cy.get('#react-select-9-option-0 > .select-templated-item > :nth-child(2) > .text-left').should('be.visible').click({ force: true })
  cy.get(':nth-child(9) > .col-md-12 > :nth-child(2)').click(350, 50)
});

When(`Fill document sidebar`, () => {
  cy.get('[type="file"]', { timeout: 15000 })
    .selectFile("cypress/fixtures/files/putback.jpg", { force: true });
  cy.get(".p-fileupload-row > :nth-child(3) > .p-button", { timeout: 15000 }).should("be.visible");
  cy.get("#documentCategoryId > .gx-select__control", { timeout: 15000 }).click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(2).click({ force: true });
  cy.get("#documentTypeId > .gx-select__control", { timeout: 15000 })
    .should("have.text", "Acordo de Pagamento", { timeout: 15000 });
  cy.get("#documentStatusId > .gx-select__control", { timeout: 15000 }).click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(1).click({ force: true });
  cy.get("#documentDirectionId > .gx-select__control", { timeout: 15000 }).click();
  cy.get(".gx-select__menu-list", { timeout: 15000 }).should("be.visible").scrollIntoView()
    .get(".gx-select__option", { timeout: 15000 }).eq(1).click({ force: true });
  cy.get("#title", { timeout: 15000 }).type(`AutomationDesktopDocPutback`);
});

When(`Clicks on Save button on putback sidebar`, () => {
  cy.get('#statusId > .gx-select__control').should('be.visible').and('have.text', 'For Putback')
  cy.get('#violationReasonsIds > .p-multiselect-label-container').should('be.visible').click()
  cy.get('#gx-form__submit-button').contains('Save').click();
})

When(`Clicks on {string} button in Documents tab from Debt view`, () => {
  cy.get(":nth-child(6) > .p-button-label").contains("Remove").click();
});

When(`Clicks on {string} button in Setting tab from Debt view`, (remove) => {
  cy.get('.d-block > :nth-child(3) > .p-button-label').contains(remove).click();
});

When(`Wait for load table from debt screen`, () => {
  cy.intercept("GET", Cypress.env("BASE_URL") + `/api/debts/managerperspective?filters**`, (req) => { }).as("dataTableDebt");
  cy.wait("@dataTableDebt", { timeout: 30000 });
})

When(`Fill the fields on Customer side bar {string} {string} {string} {string} {string}`, (name, customerTypeId, status, oriCustomerId, customerData) => {
  // Type the name of the customer in the name field
  cy.get('#entityId', { timeout: 15000 }).type(name, { delay: 100 });
  cy.get('.gx-select__menu', { timeout: 15000 }).contains(name, { timeout: 15000 }).click();
  cy.get('#customerTypeId .gx-select__control').click();

  // Select customer TypeId
  cy.get('.gx-select__menu').contains(customerTypeId).click();
  cy.get('#customerStatusId .gx-select__control').click();

  // Select Status
  cy.get('.gx-select__menu').contains(status).click();

  // Type Origination Customer Identifier
  cy.get('#originationCustomerIdentifier').type(oriCustomerId);

  // Select Data validation status
  cy.get('#customerDataValidationStatusId .gx-select__control').click();
  cy.get('.gx-select__menu').contains(customerData).click();
})

When(`Edit fileds on Customer side bar from debt {string} {string}`, (status, customerData) => {
  // Select Status
  cy.get('#customerStatusId .gx-select__control').click();
  cy.get('.gx-select__menu').contains(status).click();

  // Select Data validation status
  cy.get('#customerDataValidationStatusId .gx-select__control').click();
  cy.get('.gx-select__menu').contains(customerData).click();
})

When(`Wait for the Customer Debt {string} table loaded`, (debtId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/debts/${debtId}/customers?first=0&count=15&countTotalRecords=true`).as('defaultCustomerDebt');
});

When(`Wait for the Document table loaded`, () => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documents?domainEntityId=7&entityId=1243346265&first=0&count=15&countTotalRecords=true`).as('documentTableDebt');
});

When(`Wait for the Ownership table loaded {string}`, (debtId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/debts/${debtId}/debtowner?first=0&count=15&countTotalRecords=true`).as('ownershipTableDebt');
});

When(`Intercept Customer table list {string} {string}`, (portFolioId, debtId) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/core/context/location?location=/portfolios/${portFolioId}/debts/${debtId}/customers&tabId=0.2551035682858218`, { timeout: 100000 }).as('customerTable');
});

When(`Fill the fields on Ownership side bar`, () => {
  cy.typeSlowly('#entityId', 'input', 'HEFESTO, STC, S.A', 600, 200);
  cy.get('.gx-select__menu', { timeout: 15000 }).contains('HEFESTO', { delay: 1 }).click();

  cy.wait(2000); //Reduce the possibility of error
  cy.get('#acquisitionTypeId .gx-select__control', { timeout: 30000 }).should('be.visible').click();
  cy.get('.gx-select__menu').contains('Sale of Debts').should('be.visible').and('exist').click({ force: true });

  cy.get('#acquisitionDate').click()
  cy.get('#acquisitionDate').contains('Today').click()

  cy.contains('label', 'Aquisition Cost').parent().children('input').type('5000');

  cy.contains('label', 'Aquisition Share % ').parent().children('input').type('5');
})

When(`Fill the fields on Interest Configuration side bar`, () => {
  cy.get('#annualRateTypeId', { timeout: 30000 }).click();
  cy.get('.gx-select__menu').contains('360').click({ force: true });

  cy.get('#transactionTypeId', { timeout: 30000 }).click();
  cy.get('.gx-select__menu').contains('Accrued Interest').click({ force: true });

  cy.get('#indexedRateTypeId', { timeout: 30000 }).click();
  cy.get('.gx-select__menu').contains('CIVIL').click({ force: true });

  cy.get('#interestPeriodicityId').click();
  cy.get('.gx-select__menu').contains('2-weeks').click({ force: true });

  cy.get('#debtInterestRateStatusId', { timeout: 15000 }).click();
  cy.get('.gx-select__menu').contains('Active').click();

  cy.get('#startDate').click()
  cy.get('#startDate').contains('Today').click()

  cy.get('#endDate').click()
  cy.get('#endDate').contains('Today').click()
})

When(`Edit the fields on Interest Configuration side bar`, () => {
  cy.get('#annualRateTypeId', { timeout: 30000 }).click();
  cy.get('.gx-select__menu').contains('365').click({ force: true });

  cy.get('#indexedRateTypeId', { timeout: 30000 }).click();
  cy.get('.gx-select__menu').contains('COMERCIAL').click({ force: true });

})

When(`Waits to load requests on New Interest Configurations sidebar`, () => {
  cy.intercept("GET", Cypress.env("BASE_URL") + `/api/finance/lookup/annualratetype?first=0&count=1000`, (req) => { }).as("annualTypeRequest");
  cy.intercept("GET", Cypress.env("BASE_URL") + `/api/finance/transactiontypes/transactiongroup/3?first=0&count=1000`, (req) => { }).as("transactionTypeRequest");
  cy.intercept("GET", Cypress.env("BASE_URL") + `/api/finance/lookup/interestperiodicity?first=0&count=1000`, (req) => { }).as("interestPeriodicityRequest");
  cy.intercept("GET", Cypress.env("BASE_URL") + `/api/debts/lookup/debtinterestconfigurationstatus?first=0&count=1000`, (req) => { }).as("debtInterestStatus");

  cy.wait('@annualTypeRequest')
  cy.wait('@transactionTypeRequest')
  cy.wait('@interestPeriodicityRequest')
  cy.wait('@debtInterestStatus')
})

When(`Click on the {string} in the Balance card on debt view`, (cardItem) => {
  cy.get(".p-card-content").should('be.visible').contains(cardItem).click();
});

When(`Click on the Edit in the Balance card on debt view`, () => {
  cy.get('.p-card-content > .row > .col-3 > .button-backgroundless > .p-button-label').should('be.visible').click();
});

When(`Fill the Cut-Off fields on the sidebar`, () => {
  //Capture balance variables to use in the Assertion of this test
  cy.wrap(balanceOverdue).as('balanceOverdue');
  cy.wrap(balanceInterest).as('balanceInterest');
  cy.wrap(balanceIndemnities).as('balanceIndemnities');
  cy.wrap(balanceExpenses).as('balanceExpenses');
  cy.wrap(balanceDue).as('balanceDue');

  //Capture sum of balance variable that will be used in the Assertion of this test
  cy.wrap(totalDebtBalance).as('totalDebtBalance');
  cy.wrap(totalNominalAmount).as('totalNominalAmount');
  cy.wait(2000)
  cy.get('#currencyId').click()
  cy.get('#currencyId').contains('Euro').click()
  cy.get('#balanceDate > .p-inputtext').click();
  cy.get('.p-datepicker-month').focus().select('January')
  cy.get('.p-datepicker-year').select('2024')
  cy.get('.p-datepicker-calendar').contains('5').click()
  cy.get('#defaultDate > .p-inputtext').click()
  cy.get('.p-datepicker-month').select('January')
  cy.get('.p-datepicker-year').select('2024')
  cy.get('.p-datepicker-calendar').contains('5').click()
  cy.get('#startDate > .p-inputtext').click()
  cy.get('.p-datepicker-month').select('January')
  cy.get('.p-datepicker-year').select('2024')
  cy.get('.p-datepicker-calendar').contains('5').click()
  cy.get('label[for="principalOverdue"]').next('input').clear().type(balanceOverdue).should('have.value', balanceOverdue + '.00')
  cy.get('label[for="interestAmount"]').next('input').clear().type(balanceInterest).should('have.value', balanceInterest + '.00')
  cy.get('label[for="indemnitiesAmount"]').next('input').clear().type(balanceIndemnities).should('have.value', balanceIndemnities + '.00')
  cy.get('label[for="expensesAmount"]').next('input').clear().type(balanceExpenses).should('have.value', balanceExpenses + '.00')
  cy.get('label[for="principalInArrears"]').next('input').clear().type(balanceDue).should('have.value', balanceDue + '.00')
  cy.get('#dataValidationStatusId').click()
  cy.get('#dataValidationStatusId').contains('Valid').click()

});

When(`Edit the fields on Ownership side bar`, () => {
  cy.get('#acquisitionTypeId .gx-select__control', { timeout: 30000 }).should('be.visible').click();
  cy.get('.gx-select__menu').should('be.visible').contains('Credit Assignment').click({ force: true });
  cy.contains('label', 'Aquisition Cost').parent().children('input').clear().type('3000', { delay: 2 });
  cy.contains('label', 'Aquisition Share % ').parent().children('input').clear().type('10', { delay: 2 });
})

When(`Selects the first item from the Ownership Debt table`, () => {
  cy.get('.p-datatable-wrapper').contains('tr', 'HEFESTO, STC, S.A').click({ force: true });
})

