import { getToken, getBaseURL } from "../common";
import { getProposal } from "./getProposal";

/**
 * Function edits a proposal.
 *
 * @param int managerId - Manager Id. 
 * 
 */
export function editProposal(proposalId, managerId) {    
    const API_URL_HOST = `https://galaxydev.whitestar.pt`;
	const path = `/api/agreements/proposals/`;
    const apiUrl = `${API_URL_HOST}${path}${proposalId}`;
 
    getToken().then((token) => {  
        getProposal(proposalId, token).then((proposal) => { 
    const bodyRequest = {
        "managerId": managerId,
        "businessAreaId": proposal.businessAreaId,
        "proposalTypeId": proposal.proposalTypeId,
        "proposalStrategyId": proposal.proposalStrategyId,
        "transactionAllocationModeId": proposal.transactionAllocationModeId,
        "documentTemplateId": proposal.documentTemplateId,
        "useLicenseHandledByBuyer": proposal.useLicenseHandledByBuyer,
        "reSale": proposal.reSale,
        "brokerId": proposal.brokerId,
        "brokerFee": proposal.brokerFee,
        "additionalCosts": proposal.additionalCosts,
        "interestRate": proposal.interestRate,
        "penalty": proposal.penalty,
        "moneyBeingRecoveredOtherProposals": proposal.moneyBeingRecoveredOtherProposals,
        "id": proposal.id,
        "rowVersion": proposal.rowVersion,
        "domainEntityType": proposal.domainEntityType,
        "domainEntityId": proposal.domainEntityId,
        "statusId": proposal.statusId,
        "hasFocusFilled": proposal.hasFocusFilled,
        "hasDebtSecuritized": proposal.hasDebtSecuritized
      } 

    cy.request({
      method: 'PUT',
      url: apiUrl,
      body: bodyRequest,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
    }).then((response) => {
        cy.log('Proposal Edit Response:', response);
      });
    });
  });
} 