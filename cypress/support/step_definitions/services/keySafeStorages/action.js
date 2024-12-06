import { When } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';
  
When(`Fills in new Key Safe Storage data`, () => {
    const name = faker.number.int(100)
    cy.wrap(name).as('safeStorageName');
    cy.get('#name').type(`Name-${name}`);
    cy.get('#description').type(`Description-${name}`);
    cy.get('#entityId > .gx-select__control').click().type('HEFESTO, STC, S.A');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('HEFESTO, STC, S.A').first().click({ timeout: 30000 });
    cy.get('#keyLocationId > .gx-select__control').click().type('Lisbon');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Lisbon').first().click({ timeout: 30000 });
});
  
When(`Edits Key Safe Storage data`, () => {
    const nameEdited = `NameEdited-`+faker.number.int(100)
    cy.wrap(nameEdited).as('nameEdited');
    cy.get('#name').clear().type(nameEdited);
    cy.get('#description').clear().type(`Description-${nameEdited}`);
    cy.get('#keyLocationId > .gx-select__control').click().type('Porto');
    cy.get('.gx-select__menu', { timeout: 20000 }).contains('Porto').first().click({ timeout: 30000 });
});

When(`Wait for the Key Safe Storage table loaded`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysafestorages?first=0&count=15&countTotalRecords=true`).as('defaultKeySafeStorage');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/assets/keysafestorages?first=0&count=15&filters=**`).as('filterApplied');
});
  
When(`Filters by created name of the Key Safe Storage table screen`, () => {
    cy.get('@safeStorageName').then(safeStorageName => {
        cy.get(`th div[datacy="name"] input`, { timeout: 15000 }).click().type(`Name-${safeStorageName}`);
    });
    cy.wait(2000);
});


When(`Filters by edited name of the Key Safe Storage table screen`, () => {
    cy.get('@nameEdited').then(nameEdited => {
        cy.get(`th div[datacy="name"] input`, { timeout: 15000 }).clear().click().type(nameEdited);
    });
    cy.wait(2000);
});

When(`Filters by the name of the Key Safe Storage created table screen`, () => {
    cy.intercept("GET",Cypress.env('BASE_URL') +`/api/assets/keysafestorages?first=0&count=15&filters=name**`).as("keySafeStorageNameSearched");
    cy.get(`th div[datacy="name"] input`, { timeout: 15000 }).should('exist').clear();
    cy.get(`th div[datacy="name"] input`, { timeout: 15000 }).click().type(`Name`);
    cy.wait('@keySafeStorageNameSearched');
    cy.wait(2000);
});

When(`Selects the 1st {string} link on Key Safe Storage screen`, (datacy) => {
    cy.get('tr.p-selectable-row', { timeout: 25000 }).eq(0)
        .find(`td div[datacy="${datacy}"] a`)
        .then(($link) => {
            const href = $link.attr('href').trim();
            const text = $link.text().trim();
            cy.wrap(href).as('capturedHref');
            cy.wrap(text).as('capturedLink');
            cy.wrap($link).click();
    });
});

When(`Filters by {string} in the Key Location field of the Key Safe Storage table screen`, (status) => {
    cy.get(`[datacy="keyLocationId"]`).should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).scrollIntoView().click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get(`[datacy="keyLocationId"]`).should('be.visible').click();
});
