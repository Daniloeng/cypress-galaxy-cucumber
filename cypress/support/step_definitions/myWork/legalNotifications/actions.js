import { Given, Step, When } from "@badeball/cypress-cucumber-preprocessor";
import { editLegalNotification, editLegalNotificationsLegalManager,
  editLegalNotificationsReportUserLeader, getOneLegalNotificationIdByFilter} from "../../../apiServices/myWork/legalNotifications/legalNotificationsServices";

const pathAndParameters = '/api/legal/legalnotifications/team?show=opened&first=1&count=1&countTotalRecords=true' 
const pathAndParametersLtTeam = '/api/legal/legalnotifications/ltteam?show=opened&first=1&count=15&countTotalRecords=true'

Given(`Navigate to Legal Notifications and Click on Show dropdown menu`, () => {
  cy.loginWithClientID();
  cy.visit("/legalnotification");
  cy.get('.p-toolbar-group-right', { timeout: 30000 }).click(260, 20, { timeout: 30000 });

});

When(`Dropdown Menu is open click on {string} {string}`, (roleOption, statusId) => {

  // ENVIRONTMENT PREPARATION
  getOneLegalNotificationIdByFilter(pathAndParameters).then((legal) => {
    editLegalNotification(legal, statusId); 
  });
  cy.reload();
  cy.contains(roleOption, { timeout: 15000 }).click({ force: true });

});

When(`Dropdown Menu is open click on {string}.1`, (roleOption) => {

  // ENVIRONTMENT PREPARATION Legal Manager
  getOneLegalNotificationIdByFilter(pathAndParametersLtTeam).then((legalNotificationId) => {
    editLegalNotificationsLegalManager(legalNotificationId);
  });  
  editLegalNotificationsReportUserLeader(505, 1);  
  cy.reload();
  cy.contains(roleOption, { timeout: 15000 }).click({ force: true });

});

When(`Dropdown Menu is open click on {string}`, (roleOption) => {
  cy.contains(roleOption, { timeout: 15000 }).click({ force: true });
});

When(`Selects {string} on Show Dropdown Menu`, (option) => {
  cy.get(`div[class^="PerspectivesFilterDropdown_wrapper"]`).should('be.visible').find('.fas').click({ force: true });
  cy.contains('.p-listbox-item', option, { timeout: 15000 }).click({ force: true });
  cy.get("span.fa-sync", { timeout: 15000 }).should('be.visible').click();
  cy.wait(500);
  cy.get("span.fa-sync", { timeout: 15000 }).should('be.visible').click();
});

When(`Click on filter button`, () => {
  cy.get(':nth-child(3) > .p-button-icon').click({ force: true });

});

When(`Filter is active, click on Status column`, () => {
  cy.get('.p-datatable-thead > :nth-child(2) > :nth-child(5)').click({ timeout: 20000 })
});

When(`Status menu is open, click on {string} status option`, (currentStatus) => {
  cy.get('.p-multiselect-panel', { timeout: 10000 }).contains(currentStatus).click({ timeout: 10000 })
});

When(`Legal Notifications are shown, click in one that have status: {string}`, (status) => {
  cy.get('.p-selectable-row', { timeout: 15000 }).then((rows) => {
    for (const row of rows) {
      if (row.cells[4].textContent.includes(status)) {
        cy.get(row.cells[4]).click();
        break
      }
    }
  })
});

When(`Click on Edit button`, () => {
  cy.get(':nth-child(6) > .p-button-label').contains('Edit', { timeout: 10000 }).click({ timeout: 30000 });
});

When(`Fills in all Payment Request data for {string} Legal Case Instance`, (instance) => {
  cy.get('#priorityId').click();
  cy.get('.gx-select__menu', { timeout: 15000 }).contains('High').should('be.visible').click();

  cy.get('#dueDate').click();
  cy.get('.p-datepicker-today').click();

  cy.contains('label', 'Legal Case Instance').parent()
      .find('.gx-select__input input').type(instance);
  cy.get('.gx-select__menu', { timeout: 30000 }).contains(instance).should('be.visible').click();

  cy.get('#transactionTypeId').click();
  cy.get('.gx-select__menu', { timeout: 15000 }).contains('Tax - Property Transfer').should('be.visible').click();
});

When(`Change status to {string}`, (newStatus) => {
  cy.get('#legalNotificationStatusId > .gx-select__control').click({ timeout: 15000 });
  cy.get('.gx-select__menu-list', { timeout: 10000 }).contains(newStatus, { timeout: 10000 }).click({ timeout: 15000 });
  cy.get('#gx-form__submit-button').contains('Save').click({ timeout: 15000 });  

  cy.intercept('GET', Cypress.env('BASE_URL') +`/api/legal/legalnotifications/**`, { timeout: 30000 }).as("statusChange");
  cy.wait('@statusChange')
});

When(`Open Dropdown menu again and click on {string}`, (viewType) => {
  cy.get('.p-toolbar-group-right').click(250, 20).contains(viewType).click({ force: true });;
});

When(`Open Group By menu and click on {string}`, (groupByOption) => {
  cy.get('.gx-select__single-value').click();
  cy.get('.gx-select__menu').contains(groupByOption).click({force:true}); 
});

When(`Wait for the Legal Notifications table loaded`, () => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/legal/legalnotifications/ltteam?show=opened&first=0&count=15&countTotalRecords=true**`).as('defaultLN');
});

When(`Wait for filter applied in the Legal Notifications table`, () => {
  cy.intercept('GET',  Cypress.env('BASE_URL') + `/api/legal/legalnotifications/ltteam?show=opened&first=0&count=15&filters=*`).as('filterApplied');
});

When(`Filters by {string} in the Status field of the Legal Notifications table screen`, (status) => {
  Step(this, `Wait for the Legal Notifications table loaded`);
  cy.get(`th div[datacy="teamminestatusid"]`, { timeout: 15000 }).contains('All').should('be.visible').click();
  cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
      .should('be.visible').click({ force:true });
  cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
      .should('be.visible').type(status, { force:true });
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${status}$`, 'i')).click();
});

When(`Filters by {string} in the Status Reason field of the Legal Notifications table screen`, (status) => {
  Step(this, `Wait for the Legal Notifications table loaded`);
  cy.get(`th div[datacy="taxDocumentStatusReasonid"]`, { timeout: 15000 }).contains('All').should('be.visible').click();
  cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
      .should('be.visible').click({ force:true });
  cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
      .should('be.visible').type(status, { force:true });
  cy.wait(2000).get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${status}$`, 'i')).click();
});

When(`Filters by {string} in the Document Type field of the Legal Notifications table screen`, (status) => {
  Step(this, `Wait for the Legal Notifications table loaded`);
  cy.get(`th div[datacy="documentTypeId"]`, { timeout: 15000 }).contains('All').should('be.visible').click();
  cy.get(`th div[datacy="documentTypeId"]`, { timeout: 15000 }).click().type(status);
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${status}$`, 'i')).click();
});

When(`Filters by {string} in the Assignees field of the Legal Notifications table screen`, (assignees) => {
  Step(this, `Wait for the Legal Notifications table loaded`);
  cy.get(`div[class^="PerspectivesFilterDropdown_wrapper"]`).click();
  cy.get(`th div[datacy="securityGroupId"]`, { timeout: 30000 }).contains('All').click({ force: true });
  cy.get(`th div[datacy="securityGroupId"]`, { timeout: 15000 }).click().type(assignees);
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${assignees}$`, 'i')).click();
});

When(`Filters by {string} in the Priority field of the Legal Notifications table screen`, (priority) => {
  Step(this, `Wait for the Legal Notifications table loaded`);
  cy.get(`th div[datacy="priorityId"]`, { timeout: 15000 }).contains('All').should('be.visible').click();
  cy.get(`th div[datacy="priorityId"]`, { timeout: 15000 }).click().type(priority);
  cy.get('.p-multiselect-items > .p-multiselect-item').contains(RegExp(`^${priority}$`, 'i')).click();
});

When(`Filters by {string} in the Portfolio Group field of the Legal Notifications table screen`, (group) => {
  Step(this, `Wait for the Legal Notifications table loaded`);
  cy.get(`th div[datacy="portfolioGroupId"]`, { timeout: 15000 }).contains('All').should('be.visible').click();
  cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
      .should('be.visible').click({ force:true });
  cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 15000 })
      .should('be.visible').type(group, { force:true });
  cy.get('.p-multiselect-items > .p-multiselect-item').each(($item) => {
    return $item.text().trim() === group;
  }).first().click();
});

When(`Selects first Legal Notifications from datatable`, () => {
  cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(0).should('be.visible').click();
});

When(`Selects first {string} Legal Notifications from datatable`, (status) => {
  cy.contains('[datacy="statusDescription"]', status).first().then(($statusCell) => {
    const $row = $statusCell.closest('tr');    
    cy.wrap($row).find('.p-selection-column > .p-checkbox > .p-checkbox-box').click();
  });
});

When(`Selects second {string} Legal Notifications from datatable`, (status) => {
  cy.get('.p-datatable-tbody > :nth-child(2) > .p-selection-column > .p-checkbox > .p-checkbox-box', { timeout: 30000 }).click();
});

When(`Fills {string} in the comment field to be archived`, (comment) => {
  cy.get('#comment', { timeout:15000 }).type(comment);
});

When(`Fills {string} in the comment and selects {string} status Reason fields to be invalidate`, (comment, reason) => {
  cy.intercept('GET', Cypress.env('BASE_URL') + `/api/legal/lookup/legalnotificationstatusreason**`).as('reason');
  cy.get('.p-sidebar', { timeout: 15000 }).should('be.visible');
  cy.wait('@reason', { timeout: 30000 });  
  cy.get('#invalidComment', { timeout: 15000 }).type(comment);
  cy.get('#legalNotificationStatusReasonId > .gx-select__control', { timeout: 20000 }).should('be.visible').click();
  cy.contains(reason, { timeout: 20000 }).should('be.visible').click();
});


When(`Types a comment {string} on Comments field in Legal Notification`, (comment) => {
  cy.get('#comment', { timeout:15000 }).type(comment);
});


When(`Clicks Full View button on Preview Details`, () => {
  cy.get('.float-right > .p-button', { timeout: 15000 }).click({ force: true }).wait(1000); 
});

When(`Verifies {string} of Legal Notification`, (label) => {
  cy.get('.p-button .p-button-label').contains(label).click({ force: true });
  cy.get('td div[datacy="roleName"]', { timeout: 30000 }).contains('Legal Treasury')
});

When(`Fill in the role fields with {string} and assigner with {string} so that Legal Notifications is assigned`, (role, assigner) => {
  cy.wait(500);
  cy.get('#selectroles', { timeout: 20000 }).type(role);
  cy.get('.gx-select__menu', { timeout: 30000 }).contains(role).should('be.visible').click();
  cy.wait(500);
  cy.get('[class^="QuickAdd_autocomplete"]', { timeout: 20000 }).type(assigner);
  cy.get('.gx-select__menu', { timeout: 30000 }).contains(assigner).should('be.visible').click();
  cy.get('[class^="QuickAdd_quick-add-wrapper"] .p-button', { timeout: 15000 }).contains('Add').click({ force: true });
});
