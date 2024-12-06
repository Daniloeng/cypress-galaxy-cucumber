import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`Checks if the Legal Notification has been created`, () => {
    const today = new Date().toISOString().split('T')[0];

    cy.get('table tbody tr').first().within(() => {
        cy.get('td div[datacy="statusDate"]').should('include.text', today);
        cy.wait(2000);
        cy.get('td div[datacy="requester"]')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.contain('galaxy');
        });
    });
    cy.get('table').find('td div[datacy="documentTypeDescription"] a')
        .first().click({ force: true });
});
