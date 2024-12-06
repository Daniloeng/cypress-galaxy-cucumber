import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Searches for an existing document`, () => {
    cy.get('.gx-select__advanced-filter').click();
    cy.get('#AdvancedFilterList').should('be.visible');
    cy.get('tbody.p-datatable-tbody').eq(1).find('tr.p-selectable-row').last()
        .find('div[datacy="fileName"]').scrollIntoView().click({ force: true });
    cy.get('button.p-button.p-component.float-right').contains('span.p-button-label', 'Confirm selection').click({ force: true });
});

When(`Clicks on {string} button`, (action) => {
    cy.wait(1000);
    cy.get('.gx-form-header').find('#gx-form__submit-button').contains(action).click({ force: true });
    cy.wait(1000);
});

When(`Clicks on {string} button in sidebar`, (action) => {
    cy.get('.sidebar-footer').should('be.visible').contains(action).click()
});

When(`Clicks on {string} button in toolbar`, (action) => {
    cy.get('.p-toolbar', { timeout: 30000 }).contains(action).click()
});

When(`Clicks on plus button by topbar`, () => {
    cy.get('.topbar-menu-visible > :nth-child(4) > :nth-child(1) > .far', { timeout: 50000 })
        .should('be.visible', { timeout: 50000 }).click({ timeout: 10000 });
});

When(`Clicks on {string} button by topbar`, (label) => {
    cy.get('.active-topmenuitem > .fadeInDown > .topbar-menu-body >> .p-link', { timeout: 80000 })
        .contains(label).click({ timeout: 10000 });
});

When(`Switches to {string} tab`, (title) => {
    cy.wait(1000)
    cy.get('.p-menuitem-link').contains(title).click();
});

When(`Selects the {string} submenu in {string} tab`, (submenu, tab) => {
    cy.wait(2000)
    cy.get('.p-menuitem-link').contains(tab).click();
    cy.get('.p-megamenu-panel').contains(submenu).click();
});

When(`Clicks on {string} breadcrumb route`, (route) => {
    cy.get(`.route-bar-breadcrumb:contains('${route}') a`).first().click();
});

When(`Click on the {string} button confirming the remove`, (action) => {
    cy.get('.p-sidebar-content').should('exist', { timeout: 30000 });
    cy.get('.p-button-danger > .p-button-label').contains(action).click();
    cy.wait(500); //reduce the possibility of error
});

When(`Clicks on the {string} tab`, (tab) => {
    cy.get(".p-megamenu-root-list >", { timeout: 80000 }).contains(tab, { timeout: 20000 }).click();
    cy.wait(2000);
});

When(`Selects the first from the list`, () => {
    cy.get('.p-datatable-tbody .p-selection-column .p-checkbox .p-checkbox-box', { timeout: 20000 })
        .eq(0).click();
});

When(`Clicks on the Id searched in the list`, () => {
    cy.get(`td div[datacy="id"] a`).first().click();
});

When(`Clicks on the {string} searched in the list`, (item) => {
    cy.wait('@filterApplied', { timeout: 60000 })
    cy.get(`td div[datacy="${item}"] a`).first().click();
});
  
When(`Clicks on the phone button at the top of the screen`, () => {
    cy.get('.topbar-menu >> .fa-phone-plus').click();
    cy.get('ul.fadeInDown .topbar-menu-body').should('be.visible');
    cy.contains('button.p-link', 'Add Phone Call').click();
})

When(`Clicks on the Entity filter selects the first Entity`, () => {
    cy.get('#selectedEntity > .gx-select__control > .gx-select__indicators > .gx-select__advanced-filter').click();
    cy.get(`.p-datatable-tbody tr[class='p-selectable-row']:first-child`).click();
    cy.contains('Confirm selection').click();
})

When(`Types the new phone number {string} and selects {string} Direction`, (phone, option) => {
    cy.get(`#contactReasonId > .gx-select__control`, { timeout: 30000 }).click({ force: 30000 });
    cy.wait(1000);
    cy.get('#contactReasonId > .gx-select__control').click({ force: 30000 }).type('Other');
    cy.get(`.gx-select__menu`, { timeout: 30000 }).contains('Other').click({ force: 30000 });
    cy.get('#duration').type('2');
    cy.contains('Enter non existing Phone Number').click();
    cy.get('#contactDirectionId > .gx-select__control', { timeout: 30000 }).click({ force: true });
    cy.get('#contactDirectionId > .gx-select__control').type(option);
    cy.get(`.gx-select__menu`, { timeout: 30000 }).contains(option).click({ force: 30000 });
    cy.contains('label', 'Phone Number')
        .parent().find('input').click().type(phone, { force: true });

})

When(`Clicks on {string} column in {string} screen`, (link) => {
    cy.get(`td div[datacy="${link}"]`, { timeout: 20000 }).should('be.visible').first().click(22, 13);
});
