import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { editLegalNotification, editLegalNotificationsLegalManager,
  editLegalNotificationsReportUserLeader, getOneLegalNotificationIdByFilter 
} from "../../../apiServices/myWork/legalNotifications/legalNotificationsServices";

const pathAndParameters = '/api/legal/legalnotifications/team?show=opened&first=0&count=1&countTotalRecords=true'
const pathAndParametersLtTeam = '/api/legal/legalnotifications/ltteam?show=opened&first=0&count=1&countTotalRecords=true'

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

  cy.contains(roleOption).click({ force: true });

});

When(`Dropdown Menu is open click on {string}.1`, (roleOption) => {

  // ENVIRONTMENT PREPARATION Legal Manager
  getOneLegalNotificationIdByFilter(pathAndParametersLtTeam).then((legalNotificationId) => {
    editLegalNotificationsLegalManager(legalNotificationId);
  });

  editLegalNotificationsReportUserLeader(505, 1);

  cy.contains(roleOption).click({ force: true });

});

When(`Dropdown Menu is open click on {string}`, (roleOption) => {
  cy.contains(roleOption).click({ force: true });

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
  cy.get('.p-selectable-row', {timeout:8000}).then((rows) => {

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

When(`Change status to {string}`, (newStatus) => {
  cy.get('#legalNotificationStatusId > .gx-select__control').click({timeout:15000});
  cy.get('.gx-select__menu-list', {timeout:10000}).contains(newStatus, {timeout:10000}).click({timeout:15000});
  cy.get('#gx-form__submit-button').contains('Save').click({timeout:15000});  

  cy.intercept('GET', Cypress.env('BASE_URL') +`/api/legal/legalnotifications/**`, {timeout:30000}).as("statusChange");
  cy.wait('@statusChange')
});

When(`Open Dropdown menu again and click on {string}`, (viewType) => {
  cy.get('.p-toolbar-group-right').click(250, 20).contains(viewType).click({ force: true });;

});

When(`Open Group By menu and click on {string}`, (groupByOption) => {
  cy.get('.gx-select__single-value').click();
  cy.get('.gx-select__menu').contains(groupByOption).click({force:true}); 
});