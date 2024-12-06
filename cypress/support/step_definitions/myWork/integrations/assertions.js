import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Only Integrations AlertsAll with this search bar filter {string} should displayed in the list`, (searchId) => {
    cy.wait('@filterBysearchBar', { timeout: 30000 }).get('table').find('td div[datacy="id"]').should('be.visible').should('contain', searchId);
});

Then(`Only Integrations AlertsAll with this {string} Id should displayed in the list`, (id) => {
    cy.wait('@filterById', { timeout: 30000 }).get('table').find('td div[datacy="id"]').should('be.visible')
        .should('contain', id);
});

Then(`Only Integrations AlertsAll with this {string} Event Type should displayed in the list`, (eventType) => {
    cy.wait('@filterByEventType', { timeout: 30000 }).get('table').find('td div[datacy="eventType"]').first().should('be.visible')
        .should('contain', eventType);
});

Then(`Only Integrations AlertsAll with this {string} Related Entity should displayed in the list`, (relatedEntity) => {
    cy.wait('@filterByrelatedEntity', { timeout: 30000 }).get('table').find('td div[datacy="domainEntity"]').first().should('be.visible')
        .should('contain', relatedEntity);
});

Then(`Only Integrations AlertsAll with this {string} Origin should displayed in the list`, (origin) => {
    cy.wait('@filterByorigin', { timeout: 30000 }).get('table').find('td div[datacy="originId"]').first().should('be.visible')
        .should('contain', origin);
});

Then(`Only Integrations AlertsAll with this {string} Message should displayed in the list`, (message) => {
    cy.wait('@filterBymessage', { timeout: 30000 }).get('table').find('td div[datacy="errorMessage"]').first().should('be.visible')
        .should('contain', message);
});