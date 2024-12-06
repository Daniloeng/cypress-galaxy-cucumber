import { Given, When, Step } from "@badeball/cypress-cucumber-preprocessor";
import { createProposal, editProposal, getProposalsIdsByFilter, getProposal } from "../../../apiServices/management/proposals/proposalServices"
import { getProposalModel } from "../../../../fixtures/apiModel/proposalApiModel"
import {
    amicableProposalCompleteFlowData, approveAmicableProposalData, changeAcknowledgeToDraftData,
    changeToDraftAmicableProposalData, amicableProposalWithoutLegalCaseData,
    amicableProposalWithoutReviwerData, amicableProposalWithoutLegalCaseAndReviwerData, abortAmicableProposalData
} from "../../../../fixtures/apiData/proposalsData/amicableProposalData";
import { entities } from "../../../../fixtures/apiData/globalData/userData";

let proposalId = '';

Given(`Create an Amicable proposal with id {string} {string} strategy to change to active status`, (proposalStrategyId) => {
    cancelAmicableProposalFromAnEntity(entities[2241534])
    approveAmicableProposalData.proposalStrategyId = proposalStrategyId;
    const proposal = getProposalModel(approveAmicableProposalData);
    createProposal(proposal).then((id) => {
        proposalId = id;
    })
    Step(this, `Galaxy bypass is complete`)
})

Given(`Create an Amicable proposal with id {string} {string} strategy to change to abort status`, (proposalStrategyId) => {
    cancelAmicableProposalFromAnEntity(entities[2241534])
    abortAmicableProposalData.proposalStrategyId = proposalStrategyId;
    const proposal = getProposalModel(abortAmicableProposalData);
    createProposal(proposal).then((id) => {
        proposalId = id;
    })
    Step(this, `Galaxy bypass is complete`)
})

Given(`Create an Amicable proposal with id {string} {string} strategy to change from waiting review to draft status`, (proposalStrategyId) => {
    cancelAmicableProposalFromAnEntity(entities[2241534])
    changeToDraftAmicableProposalData.proposalStrategyId = proposalStrategyId;
    const proposal = getProposalModel(changeToDraftAmicableProposalData);
    createProposal(proposal).then((id) => {
        proposalId = id;
    })
    Step(this, `Galaxy bypass is complete`)
})

Given(`Create an Amicable proposal with id {string} {string} strategy to change from acknowledge to draft status`, (proposalStrategyId) => {
    cancelAmicableProposalFromAnEntity(entities[2241534])
    changeAcknowledgeToDraftData.proposalStrategyId = proposalStrategyId;
    const proposal = getProposalModel(changeAcknowledgeToDraftData);
    createProposal(proposal).then((id) => {
        proposalId = id;
    })
    Step(this, `Galaxy bypass is complete`)
})

Given(`Create an Amicable proposal with id {string} {string} strategy to do a complete flow`, (proposalStrategyId) => {
    cancelAmicableProposalFromAnEntity(entities[123164])
    amicableProposalCompleteFlowData.proposalStrategyId = proposalStrategyId;
    const proposal = getProposalModel(amicableProposalCompleteFlowData);
    createProposal(proposal).then((id) => {
        proposalId = id;
    })
    Step(this, `Galaxy bypass is complete`)
})

Given(`Create an Amicable proposal with id {string} {string} strategy without legal case associated`, (proposalStrategyId) => {
    cancelAmicableProposalFromAnEntity(entities[2674282])
    amicableProposalWithoutLegalCaseData.proposalStrategyId = proposalStrategyId;
    const proposal = getProposalModel(amicableProposalWithoutLegalCaseData);
    createProposal(proposal).then((id) => {
        proposalId = id;
    })
    Step(this, `Galaxy bypass is complete`)
})

Given(`Create an Amicable proposal with id {string} {string} strategy without legal case and reviewer associated`, (proposalStrategyId) => {
    cancelAmicableProposalFromAnEntity(entities[2674282])
    amicableProposalWithoutLegalCaseAndReviwerData.proposalStrategyId = proposalStrategyId;
    const proposal = getProposalModel(amicableProposalWithoutLegalCaseAndReviwerData);
    createProposal(proposal).then((id) => {
        proposalId = id;
    })
    Step(this, `Galaxy bypass is complete`)
})

Given(`Create an Amicable proposal with id {string} {string} strategy without reviewer associeted`, (proposalStrategyId) => {
    cancelAmicableProposalFromAnEntity(entities[123164])
    amicableProposalWithoutReviwerData.proposalStrategyId = proposalStrategyId;
    const proposal = getProposalModel(amicableProposalWithoutReviwerData);
    createProposal(proposal).then((id) => {
        proposalId = id;
    })
    Step(this, `Galaxy bypass is complete`)
})

When('Galaxy bypass is complete', () => {
    cy.loginWithClientID();
    cy.visit(`/proposals/${proposalId}`);
});

export function cancelAmicableProposalFromAnEntity(entityId) {
    const pathandParameters = `/api/agreements/proposals/financialperspective?domainEntityId=33&id=${entityId}&filters=all+equ+true&first=0&count=15&filters=statusId+equ+5&countTotalRecords=true`;
    getProposalsIdsByFilter(pathandParameters).then((proposalsIds) => {
        if (proposalsIds.length > 0) {
            proposalsIds.forEach(proposalId => {
                getProposal(proposalId).then((proposal) => {
                    if (proposal.statusId != 7) {
                        editProposal(proposal.id, null, 7);
                    }
                });
            });
        }
        else {
            cy.log('There are no associated proposal')
        }
    })
}

When(`Clicks on {string} button in Current Status view`, (label) => {
    cy.get('button.p-button.ml-3', { timeout: 30000 }).should('be.visible').and('be.enabled')
    cy.contains(label, { timeout: 40000 }).click({ force: true });
});

When(`Selects {string} Reason and types {string} on Comments fields`, (reason, comment) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/agreements/proposalstatusreason/reasons/**`).as('reasonList');
    cy.get('.p-sidebar', { timeout: 15000 }).should('be.visible');
    cy.wait('@reasonList', { timeout: 30000 });
    cy.get('#comment').should('be.visible').type(comment, { delay: 10 });
    cy.get('#proposalStatusReasonId > .gx-select__control').should('be.visible').click();
    cy.contains(reason, { timeout: 20000 }).should('be.visible').click();
    Step(this, `Clicks on Save button from proposal modal`);
});

When(`Selects {string} button decision`, (decision) => {
    cy.contains(decision, { timeout: 30000 }).should('be.visible').click()
});

When(`Clicks on Save button from proposal modal`, () => {
    cy.get('#gx-form__submit-button', { timeout: 30000 }).should('be.visible').contains("Save").click()
});

When(`Types a comment {string} on Comments field`, (comment) => {
    cy.get('#comment', { timeout: 20000 }).type(comment);
});

When(`Types a comment {string} on Recommendation field`, (recommendation) => {
    cy.get('#delegateUserRecommendation').type(recommendation);
});

When(`Activates the choice of delegating the decision`, () => {
    cy.get('#isManagerDecisionMaker > .p-inputswitch-slider').click();
});

When(`Selects {string} in Delegate User field`, (user) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/security/users/autocomplete**`).as('users');
    cy.get('#delegateUserId > .gx-select__control', { timeout: 15000 }).type(user);
    cy.wait('@users').get('.gx-select__menu', { timeout: 8000 }).first().contains(user).click();

});

When(`Types a review comment {string} on Comments and {string} Conclusion fields`, (comments, conclusion) => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/agreements/proposalreviewers/**`).as('proposalreviewers');
    cy.wait('@proposalreviewers');
    const commentComplete = ` ${comments} by automation reviewer`;
    const characters = commentComplete.split('');
    characters.forEach((character) => {
        cy.get('#reviewComment', { timeout: 15000 }).type(character, { delay: 10 })
    })
    cy.get('#proposalReviewConclusionId > .gx-select__control', { timeout: 15000 }).click()
    cy.get('.gx-select__menu', { timeout: 15000 }).contains(conclusion).click();
});

When(`Filters by {string} in the Id field of the Proposal table screen`, (id) => {
    cy.get('input[name="id"]', { timeout: 20000 }).should('be.visible').click().type(id);
});

When(`Filters by {string} in the Status field of the Proposal table screen`, (status) => {
    cy.get('[datacy="statusId"]').should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 15000 }).then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === status);
        if (exactMatch) {
            cy.wrap(exactMatch).scrollIntoView().should('be.visible').click();
        } else {
            cy.log(`Exact match for '${status}' not found.`);
        }
    });
    cy.get('[datacy="statusId"]').should('be.visible').click();
});

When(`Filters by {string} in the Type field of the Proposal table screen`, (type) => {
    cy.get('[datacy="proposalTypeId"]').should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item').contains(type)
        .should('be.visible').click();
    cy.get('[datacy="proposalTypeId"]').should('be.visible').click();
});

When(`Filters by {string} in the InDefault Status field of the Proposal table screen`, (inDefault) => {
    cy.get('[datacy="proposalInDefaultStatusId"]').should('be.visible').click();
    cy.get('.p-multiselect-items > .p-multiselect-item').contains(inDefault)
        .scrollIntoView().should('be.visible').click();
});

When(`Filters by {string} in the Strategy field of the Proposal table screen`, (strategy) => {
    cy.get(`[datacy="proposalStrategyId"]`).should('be.visible').click();
    cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 30000 })
        .should('be.visible').click({ force:true });
    cy.get('.p-multiselect-filter-container > .p-inputtext', { timeout: 30000 })
        .should('be.visible').type(strategy);
    cy.get('.p-multiselect-items > .p-multiselect-item', { timeout: 30000 }).should('be.visible').then(($items) => {
        const exactMatch = Array.from($items).find(item => item.innerText.trim() === strategy);
        if (exactMatch) {
            cy.wrap(exactMatch).scrollIntoView().should('be.visible').click({ force: true });
        } else {
            cy.log(`Exact match for '${strategy}' not found.`);
        }
    });
});

When(`Selects the first Proposals`, () => {
    cy.get('.p-datatable-tbody tr:first-child td:first-child').should('be.visible').then((idCell) => {
        idProposals = idCell.text();
    });
    cy.contains(idProposals).should('be.visible').click();
});

When(`User Clicks on the {string} button to insert a Payment into a Proposal`, (button) => {
    const valueInput = '100.00';
    cy.get(':nth-child(2) > .col-md-12 > .p-card > .p-card-body', { timeout: 30000 })
        .scrollIntoView().should('be.visible').find('button').contains(button).click();
    cy.get(':nth-child(2) > .col-xs-12 > .p-inputtext', { timeout: 30000 }).should('be.visible')
        .clear().type(valueInput, { force: true });
    cy.get(':nth-child(6) > .col-xs-12 > .p-inputtext').should('be.visible')
        .clear().type(valueInput, { force: true });
    cy.wait(2000);
    cy.get('#gx-form__submit-button').should('be.visible').contains('Save').click();
    cy.get('.col-12 > .p-card > .p-card-body').should('be.visible');
    cy.get('.p-steps-title').contains('Draft');
});

When(`Types {string} in a Manager`, (user) => {
    cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/security/users/1**`).as('user');
    cy.wait('@user', { timeout: 10000 });
    cy.get('#managerId > .gx-select__control').click().type(user);
    cy.get('.gx-select__menu', { timeout: 8000 }).contains(user, { timeout: 15000 }).should('be.visible').click();
});

When(`User Clicks on the {string} button to insert a Reviewr into a Proposal`, (button) => {
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > .col-md-12 > .p-card', { timeout: 30000 })
        .scrollIntoView().should('be.visible').find('button').contains(button).click();

    cy.get('#reviewerId > .gx-select__control').should('be.visible').click().type(user);
    cy.get('.gx-select__menu', { timeout: 8000 }).contains(user, { timeout: 8000 }).should('be.visible').click();
    cy.get('#recommendation').should('be.visible').type(valueInput, { force: true });
    cy.wait(2000);
    cy.get('#gx-form__submit-button').should('be.visible').contains('Save').click();
});

When('Delegate the season to the {string} user', (user) => {
    cy.get('.topbar-menu-visible > :nth-child(11) > :nth-child(1)', { timeout: 20000 }).click();
    cy.get('.gx-select__control', { timeout: 20000 }).type(user);
    cy.get(`.gx-select`, { timeout: 20000 }).contains(`galaxy.${user}`, { timeout: 20000 }).click();
    cy.get('.topbar-menu-footer button').should('contain', 'Start session as').click();
    cy.wait(3000); // Important to wait for the change of delegation
});

When(`{string} delegated to default user`, (label) => {
    cy.get('.topbar-menu.delegating').click();
    cy.get('.topbar-menu-footer button').should('contain', label).click();
});

When(`Types a comment {string} on Recommendation field from proposal modal`, (comment) => {
    cy.get('#recommendation', { timeout: 15000 }).type(comment);
});

When(`Selects on Assets from Assets view`, () => {
    cy.contains('h2', 'Assets').parents('.p-card').then($card => {
        const cardElement = $card.get(0);
        cardElement.scrollIntoView();
        cy.wrap($card).find('button:contains("Add")').eq(2).click();
    });
    cy.get('#assetIds').click();
    cy.wait(3000)
    cy.get('.p-multiselect-items').contains('333196').click();
    cy.get('#gx-form__submit-button > .p-button-label').click();
});

When(`Click on Abort button from Current Status time line from proposal screen`, () => {
    cy.get('.col-12 > .p-card > .p-card-body', { timeout: 30000 }).contains('Abort').click()
});

When(`Selects {string} option from Reason dropbox in Abort Proposal modal from proposal screen`, (reason) => {
    cy.wait(2000)
    // cy.intercept('GET', `${Cypress.env('BASE_URL')}/api/agreements/proposalstatusreason/reasons**`,(req) => { }).as('reasons')
    // cy.wait('@reasons', { timeout: 30000 })
    cy.get('#proposalStatusReasonId > .gx-select__control > .gx-select__indicators > .gx-select__dropdown-indicator').click()
    cy.get('.gx-select__menu-list', { timeout: 15000 }).should('be.visible').contains(reason, { timeout: 30000 }).click();
});

export { proposalId };
