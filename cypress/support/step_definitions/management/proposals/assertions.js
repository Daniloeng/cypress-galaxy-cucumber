import { Step, Then } from "@badeball/cypress-cucumber-preprocessor";
import { editProposal } from "../../../apiServices/management/proposals/proposalServices";

Then(`The proposal should be change to {string} {string} status`, (status, statusText) => {
    cy.get(`.status-${statusText}-color > b`, { timeout: 20000 }).should('be.visible').and('exist').contains(status);
});

Then(`The proposal should be change the atention status to {string}`, (status) => {
    cy.get('.status-attention-color > b', { timeout: 20000 }).should('be.visible').and('exist').contains(status);
});

Then(`The proposal should be change the to {string} Current Status`, (status) => {
    cy.get('.p-megamenu-root-list > :nth-child(2)').click();
    cy.get('.p-megamenu-root-list > :nth-child(1)').click();
    cy.get('.p-steps-title').should('be.visible').contains(status);
});

Then(`The proposal should be change the to {string} in Current Status`, (status) => {
    cy.get('.p-megamenu-root-list > :nth-child(2)', { timeout: 30000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get('.col > .container-fluid', { timeout: 30000 }).should('be.visible', { timeout: 30000 });
    cy.get('.p-megamenu-root-list > :nth-child(1)', { timeout: 30000 }).should('be.visible', { timeout: 30000 }).click();
    cy.get('.p-highlight', { timeout: 30000 }).should('be.visible', { timeout: 30000 }).contains(status);
});

Then(`Should be visible a text {string} in current timeline`, (message) => {
    cy.get('[class^="ProposalWorkflow"]', { timeout: 10000 }).should('exist').should('contain', message);
});

Then(`Should be visible a text Send to review in current timeline`, () => {
    cy.get('.p-card-body', { timeout: 10000 }).should('exist').contains('Send to review');
});

Then(`Should be visible a text {string} alert in current timeline`, () => {
    cy.get('[class^="ProposalWorkflow_alert"]', { timeout: 10000 }).should('exist');
});

Then(`Should be visible a text {string} negative in current timeline`, () => {
    cy.get('[class^="ProposalWorkflow_alert-aborted__"]', { timeout: 10000 }).should('exist');
});

Then(`Change proposal status to Canceled`, () => {
    cy.get('strong').invoke('text').then((proposalId) => {
        editProposal(proposalId, 2169, 7);
    });
});

Then(`Only Proposal with this {string} Id should displayed in the list`, (type) => {
    Step(this, `Wait for filter is applied`);
    cy.wait('@filterProposal').get('table').find('td div[datacy="id"]').should('be.visible')
        .should('contain', type);
});

Then(`Wait for filter is applied`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/agreements/proposals/managerperspective**`).as('filterProposal');
});

Then(`Only Proposals with this {string} status should displayed in the list`, (status) => {
    Step(this, `Wait for filter is applied`);
    cy.wait('@filterProposal').get('table').then(($table) => {
        if ($table.find('td div[datacy="statusDescription"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="statusDescription"]').should('be.visible').then(($cells) => {
                if ($cells.length === 1) {
                    cy.wrap($cells.eq(0)).should('contain', status);
                } else {
                    $cells.each((index, cell) => {
                        cy.wrap(cell).find('div[datacy="statusDescription"]').should('contain', status);
                    });
                }
            });
        }
    });
});

Then(`Only Proposals with this {string} type should displayed in the list`, (type) => {
    Step(this, `Wait for filter is applied`);
    cy.wait('@filterProposal').get('table').then(($table) => {
        if ($table.find('td div[datacy="proposalTypeDescription"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="proposalTypeDescription"]').should('be.visible').then(($cells) => {
                if ($cells.length === 1) {
                    cy.wrap($cells.eq(0)).should('contain', type);
                } else {
                    $cells.each((index, cell) => {
                        cy.wrap(cell).should('contain', type);
                    });
                }
            });
        }
    });
});

Then(`Only Proposals with this {string} InDefault Status should displayed in the list`, (inDefault) => {
    Step(this, `Wait for filter is applied`);
    cy.wait('@filterProposal').get('table').then(($table) => {
        if ($table.find('td div[datacy="proposalInDefaultStatusDescription"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="proposalInDefaultStatusDescription"]').should('be.visible').then(($cells) => {
                if ($cells.length === 1) {
                    cy.wrap($cells.eq(0)).should('contain', inDefault);
                } else {
                    $cells.each((index, cell) => {
                        cy.wrap(cell).should('contain', inDefault);
                    });
                }
            });
        }
    });
});

Then(`Only Proposals with this {string} strategy should displayed in the list`, (strategy) => {
    Step(this, `Wait for filter is applied`);
    cy.wait('@filterProposal');
    cy.wait(1000).get('table').then(($table) => {
        if ($table.find('td div[datacy="proposalStrategyDescription"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="proposalStrategyDescription"]').should('be.visible').then(($cells) => {
                if ($cells.length === 1) {
                    cy.wrap($cells.eq(0)).should('contain', strategy);
                } else {
                    $cells.each((index, cell) => {
                        cy.wrap(cell).should('contain', strategy);
                    });
                }
            });
        }
    });
});

Then(`The current Status must be visible {string}`, (currentStatus) => {
    cy.get(`.p-steps-title:contains(${currentStatus})`).should('be.visible').and('exist').contains(currentStatus);
});

Then(`The information status on top page should be {string}`, (informationStatus) => {
    cy.get('.page-header').get('span.ent-generic > b').should('contain', informationStatus);
})

Then(`The logged user is activate again`, () => {
    cy.get('.topbar-menu-visible > :nth-child(11) > :nth-child(1)', { timeout: 90000 }).should('be.visible', { timeout: 30000 });
})

Then(`The {string} button from current status line should be not visible`, (label) => {
    cy.get('button.p-button.ml-3').contains(label).should('not.exist')
});