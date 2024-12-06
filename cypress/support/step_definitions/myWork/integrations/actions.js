import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Search by using an AssetId {string} in the search bar of the Integrations AlertsAll screen`, (assetId) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/communications/integrationAlerts/**`).as('filterBysearchBar');
    cy.get('.gx-datatable__search', { timeout: 20000 }).should('be.visible').click().type(assetId);
    cy.wait(2000)
});

When(`Filters by {string} in the Id field of the Integrations AlertsAll table screen`, (id) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/communications/integrationAlerts/**`).as('filterById');
    cy.get('th div[datacy="id"]', { timeout: 20000 }).should('be.visible').click().type(id);
});

When(`Filters by {string} in the Event Type field of the Integrations AlertsAll table screen`, (eventType) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/communications/integrationAlerts/**`).as('filterByEventType');
    cy.get('th div[datacy="eventType"]', { timeout: 20000 }).should('be.visible').click().type(eventType);
});

When(`Filters by {string} in the Related Entity field of the Integrations AlertsAll table screen`, (relatedEntity) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/communications/integrationAlerts/**`).as('filterByrelatedEntity');
    cy.get('th div[datacy="domainEntity"]', { timeout: 20000 }).should('be.visible').click().type(relatedEntity);
});

When(`Filters by {string} in the Origin field of the Integrations AlertsAll table screen`, (origin) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/communications/integrationAlerts/**`).as('filterByorigin');
    cy.get('th div[datacy="originId"]', { timeout: 20000 }).should('be.visible').click().type(origin);
});

When(`Filters by {string} in the Message field of the Integrations AlertsAll table screen`, (message) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/communications/integrationAlerts/**`).as('filterBymessage');
    cy.get('th div[datacy="errorMessage"]', { timeout: 20000 }).should('be.visible').click().type(message);
});