import { Given, Step } from "@badeball/cypress-cucumber-preprocessor";
import {
    createProposal, getOneLegalCaseInstanceIdByFilter
} from "../../../apiServices/management/proposals/proposalServices";
import {
    inDraftStatusWithReviewer, inWaitingAcknowledgeStatusWithReviewer,
    inWaitingDecisionStatusWithReviewer, inWaitingReviewStatusWithReviewer,
    inWaitingDecisionStatusWithReviewerForDelegate, inDraftStatus,
    inWaitingDecisionStatusWithReviewerForDraft
} from "../../../../fixtures/apiData/proposalsData/legalProposalData";
import { abortedRealEstateData, acknowledgeToWaitingDecisionRealEstateData, approveRealEstateProposalData, waitingReviewToAcknowledgeRealEstateData, draftToCanceledRealEstateData, draftToWaitingDecisionRealEstateData } from "../../../../fixtures/apiData/proposalsData/realEstateData";
import { cancelProposalsFromAnAsset, getOneAssetIdByFilter } from "../../../apiServices/management/assets/assetServices";

const pathAndParametersLegal = `/api/legal/legalcases/15/instances?first=0&count=1&countTotalRecords=true`;

Given(`Create a Legal Proposal {string} strategy in Draft Status with Reviewer by api`, (strategyId) => {
    getOneLegalCaseInstanceIdByFilter(pathAndParametersLegal).then((instanceId) => {
        inDraftStatusWithReviewer.proposalStrategyId = strategyId;
        inDraftStatusWithReviewer.domainEntityId = instanceId;
        createProposal(inDraftStatusWithReviewer).then((id) => {
            proposalId = id;
            Step(this, `Navigate to "${proposalId}" proposal`);
        });
    });
})

Given(`Create a Legal Proposal {string} strategy in Waiting Review Status with Reviewer by api`, (strategyId) => {
    getOneLegalCaseInstanceIdByFilter(pathAndParametersLegal).then((instanceId) => {
        inWaitingReviewStatusWithReviewer.proposalStrategyId = strategyId;
        inWaitingReviewStatusWithReviewer.domainEntityId = instanceId;
        createProposal(inWaitingReviewStatusWithReviewer).then((id) => {
            proposalId = id;
            Step(this, `Navigate to "${proposalId}" proposal`);
        });
    });
})

Given(`Create a Legal Proposal {string} strategy in Waiting Acknowledge Status with Reviewer by api`, (strategyId) => {
    getOneLegalCaseInstanceIdByFilter(pathAndParametersLegal).then((instanceId) => {
        inWaitingAcknowledgeStatusWithReviewer.proposalStrategyId = strategyId;
        inWaitingAcknowledgeStatusWithReviewer.domainEntityId = instanceId;
        createProposal(inWaitingAcknowledgeStatusWithReviewer).then((id) => {
            proposalId = id;
            Step(this, `Navigate to "${proposalId}" proposal`);
        });
    });
})

Given(`Create a Legal Proposal {string} strategy in Waiting Decision Status with Reviewer by api`, (strategyId) => {
    getOneLegalCaseInstanceIdByFilter(pathAndParametersLegal).then((instanceId) => {
        inWaitingDecisionStatusWithReviewer.proposalStrategyId = strategyId;
        inWaitingDecisionStatusWithReviewer.domainEntityId = instanceId;
        createProposal(inWaitingDecisionStatusWithReviewer).then((id) => {
            proposalId = id;
            Step(this, `Navigate to "${proposalId}" proposal`);
        });
    });
})

Given(`Create a Legal Proposal {string} strategy in Waiting Decision Status with Reviewer for draft by api`, (strategyId) => {
    getOneLegalCaseInstanceIdByFilter(pathAndParametersLegal).then((instanceId) => {
        inWaitingDecisionStatusWithReviewerForDraft.proposalStrategyId = strategyId;
        inWaitingDecisionStatusWithReviewerForDraft.domainEntityId = instanceId;
        createProposal(inWaitingDecisionStatusWithReviewerForDraft).then((id) => {
            proposalId = id;
            Step(this, `Navigate to "${proposalId}" proposal`);
        });
    });
})

Given(`Create a Legal Proposal {string} strategy in Waiting Decision Status with Reviewer for delegate by api`, (strategyId) => {
    getOneLegalCaseInstanceIdByFilter(pathAndParametersLegal).then((instanceId) => {
        inWaitingDecisionStatusWithReviewerForDelegate.proposalStrategyId = strategyId;
        inWaitingDecisionStatusWithReviewerForDelegate.domainEntityId = instanceId;
        createProposal(inWaitingDecisionStatusWithReviewerForDelegate).then((id) => {
            proposalId = id;
            Step(this, `Navigate to "${proposalId}" proposal`);
        });
    });
})

Given(`Create a Legal Proposal {string} strategy in Draft Status by api`, (strategyId) => {
    getOneLegalCaseInstanceIdByFilter(pathAndParametersLegal).then((instanceId) => {
        inDraftStatus.proposalStrategyId = strategyId;
        inDraftStatus.domainEntityId = instanceId;
        createProposal(inDraftStatus).then((id) => {
            proposalId = id;
            Step(this, `Navigate to "${proposalId}" proposal`);
        });
    });
});

Given(`Navigate to {string} proposal`, (proposalId) => {
    cy.loginWithClientID();
    cy.visit(`/proposals/${proposalId}`);
});

Given(`Verify default user`, () => {
    cy.wait(2000);
    cy.get('.topbar-menu-visible')
        .find('button [class^="UserTile_tile-left"]').should('be.visible').click({ force: true });
    cy.get('.active-topmenuitem > .fadeInDown').should('be.visible');
    cy.get('.topbar-menu-footer button', { timeout: 10000 }).should('be.visible').then(($button) => {
        const textButton = $button.text().trim();
        cy.log('label button: ', textButton);
        if (textButton === 'Stop session') {
            cy.log('User delegated logged in');
            cy.get('.topbar-menu-footer button').contains('Stop session').click();
        } else {
            cy.log('User default logged in');
            cy.get('.topbar-menu-visible').find('[class^="UserTile_tile-left"]').eq(0).click({ force: true });
        }
    });
    cy.wait(2000);
});

//Real Estate
Given(`Create a Real Estate proposal on Waiting Review status with id {string} and {string} strategy by API`, (proposalStrategyId) => {
    const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`;
    return getOneAssetIdByFilter(pathAndParameters)
        .then((assetId) => {
            waitingReviewToAcknowledgeRealEstateData.proposalStrategyId = parseInt(proposalStrategyId);
            waitingReviewToAcknowledgeRealEstateData.domainEntityId = parseInt(assetId);
            createProposal(waitingReviewToAcknowledgeRealEstateData).then((id) => {
                proposalId = id;
                Step(this, `Navigate to "${proposalId}" proposal`);
            });
        });
})

Given(`Change a Real Estate proposal on Waiting Acknowledge status with id {string} {string} strategy`, (proposalStrategyId) => {
    const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`;
    return getOneAssetIdByFilter(pathAndParameters)
        .then((assetId) => {
            cancelProposalsFromAnAsset(assetId);
            acknowledgeToWaitingDecisionRealEstateData.proposalStrategyId = parseInt(proposalStrategyId);
            acknowledgeToWaitingDecisionRealEstateData.domainEntityId = parseInt(assetId);
            createProposal(acknowledgeToWaitingDecisionRealEstateData).then((id) => {
                proposalId = id;
                Step(this, `Navigate to "${proposalId}" proposal`);
            });
        });
})

Given(`Change a Real Estate proposal from Draft to Waiting Review with id {string} {string} strategy`, (proposalStrategyId) => {
    const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`;
    return getOneAssetIdByFilter(pathAndParameters)
        .then((assetId) => {
            cancelProposalsFromAnAsset(assetId);
            draftToWaitingDecisionRealEstateData.proposalStrategyId = parseInt(proposalStrategyId);
            draftToWaitingDecisionRealEstateData.domainEntityId = parseInt(assetId);
            createProposal(draftToWaitingDecisionRealEstateData).then((id) => {
                addIntervenient(id, true, 691);
                proposalId = id;
                Step(this, `Navigate to "${proposalId}" proposal`);
            });
        });
})

Given(`Create a Real Estate proposal on Waiting Decision with id {string} and {string} strategy by API`, (proposalStrategyId) => {
    const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`;
    return getOneAssetIdByFilter(pathAndParameters)
        .then((assetId) => {
            cancelProposalsFromAnAsset(assetId);
            approveRealEstateProposalData.proposalStrategyId = parseInt(proposalStrategyId);
            approveRealEstateProposalData.domainEntityId = parseInt(assetId);
            createProposal(approveRealEstateProposalData).then((id) => {
                proposalId = id;
                Step(this, `Navigate to "${proposalId}" proposal`);
            });
        });
})

Given(`Create a Real Estate proposal with id {string} {string} strategy to change to aborted status`, (proposalStrategyId) => {
    const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`;
    return getOneAssetIdByFilter(pathAndParameters)
        .then((assetId) => {
            cancelProposalsFromAnAsset(assetId);
            abortedRealEstateData.proposalStrategyId = parseInt(proposalStrategyId);
            abortedRealEstateData.domainEntityId = parseInt(assetId);
            createProposal(abortedRealEstateData).then((id) => {
                proposalId = id;
                Step(this, `Navigate to "${proposalId}" proposal`);
            });
        });
})

Given(`Create a Real Estate proposal on Draft status with id {string} and {string} strategy`, (proposalStrategyId) => {
    const pathAndParameters = `/api/assets/managerperspective?filters=all+equ+true&first=0&count=1&filters=assetStatusId+equ+2&countTotalRecords=true`;
    return getOneAssetIdByFilter(pathAndParameters)
        .then((assetId) => {
            cancelProposalsFromAnAsset(assetId);
            draftToCanceledRealEstateData.proposalStrategyId = parseInt(proposalStrategyId);
            draftToCanceledRealEstateData.domainEntityId = parseInt(assetId);
            createProposal(draftToCanceledRealEstateData).then((id) => {
                proposalId = id;
                Step(this, `Navigate to "${proposalId}" proposal`);
            });
        });
})