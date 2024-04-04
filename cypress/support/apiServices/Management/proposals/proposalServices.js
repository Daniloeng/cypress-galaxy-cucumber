import { getRequest, putRequest, postRequest } from "../../apiServices"

/**
 * Get a proposal by id.
 *
 * @param int proposalId - The identifier of the proposal.
 *
 */
export function getProposal(proposalId) {
  var path = `/api/agreements/proposals/${proposalId}`;
  return getRequest(path).then((data) => {
    return cy.wrap(data)
  })
}

/**
 * Gets the first register from a collection of proposals and returns its id.
 *
 * @param String pathAndParameters - path and parameters for the Url.
 * @returns Returns the id of the first register of a collection.
 *
 * @example
 * const result = getFirstRecord(`/api/agreements/proposals/managerperspective?domainEntityId=undefined&id=undefined&filters=all+equ+true&first=0&count=15&orderBy=statusDate&filters=statusId+equ+4&filters=proposalTypeId+equ+1&filters=proposalStrategyId+equ+17&countTotalRecords=true`);
 */
export function getOneProposalIdByFilter(pathAndParameters) {
  return getRequest(pathAndParameters).then((data) => {
    const firstItemId = data.items.length > 0 ? data.items[0].id : 0;
    return String(firstItemId);
  })
}

/**
 * Gets the ids from a collection of proposals and returns its id.
 *
 * @param String pathAndParameters - path and parameters for the Url.
 * @returns Returns the ids from the registers of a collection.
 *
 * @example
 * const result = getFirstRecord(`/api/agreements/proposals/managerperspective?domainEntityId=undefined&id=undefined&filters=all+equ+true&first=0&count=15&orderBy=statusDate&filters=statusId+equ+4&filters=proposalTypeId+equ+1&filters=proposalStrategyId+equ+17&countTotalRecords=true`);
 */
export function getProposalsIdsByFilter(pathAndParameters) {
  return getRequest(pathAndParameters).then((data) => {
    console.log(data)
    if (data.items.length > 0) {
      const ids = data.items.map(item => item.id);
      return ids;
    }
    else {
      return []
    }
  })
}

/**
 * Edits proprieties from a proposal.
 *
 * @param int proposalId - The identifier of the proposal to update.
 * @param int managerId - The new value to managerId propriety.
 * @param int statusId - The new value to statusId propriety.
 *
 */
export function editProposal(proposalId, managerId, statusId) {
  const path = `/api/agreements/proposals/`;
  getProposal(proposalId).then((proposal) => {
    let newManagerId = managerId != null ? managerId : proposal.managerId
    let newstatusId = statusId != null ? statusId : proposal.statusId
    const bodyRequest = {
      "managerId": newManagerId,
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
      "penalty": proposal.penalty,
      "moneyBeingRecoveredOtherProposals": proposal.moneyBeingRecoveredOtherProposals,
      "id": proposal.id,
      "rowVersion": proposal.rowVersion,
      "domainEntityType": proposal.domainEntityType,
      "domainEntityId": proposal.domainEntityId,
      "statusId": newstatusId,
      "hasFocusFilled": proposal.hasFocusFilled,
      "hasDebtSecuritized": proposal.hasDebtSecuritized
    };

    putRequest(path, proposal.id, bodyRequest);
  });
}

/**
 * Create a proposal Amicable.
 * 
 * @param int managerId - The value to managerId propriety. 
 * @param int businessAreaId - The value to businessAreaId propriety. 
 * @param int proposalTypeId - The value to proposalTypeId propriety. 
 * @param int proposalStrategyId - The value to proposalStrategyId propriety. 
 * @param int transactionAllocationModeId - The value to transactionAllocationModeId propriety. 
 * @param int domainEntityType - The value to domainEntityType propriety on . 
 * @param int domainEntityId - The value to domainEntityId propriety. 
 * 
 */
export function createProposalAmicable(managerId, businessAreaId, proposalTypeId, proposalStrategyId, transactionAllocationModeId, domainEntityType, domainEntityId) {
  const path = `/api/agreements/proposals/`;
  const bodyRequest = {
    "managerId": managerId,
    "businessAreaId": businessAreaId,
    "proposalTypeId": proposalTypeId,
    "proposalStrategyId": proposalStrategyId,
    "transactionAllocationModeId": transactionAllocationModeId,
    "rowVersion": "",
    "domainEntityType": domainEntityType,
    "domainEntityId": domainEntityId
  };
  return postRequest(path, bodyRequest).then((data) => {
    const proposalId = data.item.id;
    return proposalId;
  });
}

/**
 * Add a reviwer to a proposal.
 *
 * @param int proposalId - The value to proposalId propriety.
 * @param int reviewerId - The value to reviewerId propriety.  
 *
 * @exemple
 * addReviwer(3068423, 1);
 */
export function addReviewer(proposalId, reviewerId) {
  const path = `/api/agreements/proposalreviewers/${proposalId}/reviewers`;
  const bodyRequest = {
    "id": 0,
    "proposalId": proposalId,
    "reviewerId": reviewerId,
    "recommendation": "recommendation - ",
    "dueDate": new Date(),
    "isTeam": false,
    "rowVersion": ""
  }
  postRequest(path, bodyRequest, { failOnStatusCode: false });
}

/**
 * Create a proposal Real Estate.
 * 
 * @param int managerId - The value to managerId propriety. 
 * @param int businessAreaId - The value to businessAreaId propriety. 
 * @param int proposalTypeId - The value to proposalTypeId propriety. 
 * @param int proposalStrategyId - The value to proposalStrategyId propriety. 
 * @param int transactionAllocationModeId - The value to transactionAllocationModeId propriety. 
 * @param int domainEntityType - The value to domainEntityType propriety. 
 * @param int domainEntityId - The value to domainEntityId propriety. 
 * @param bool useLicenseHandledByBuyer - The value to useLicenseHandledByBuyer propriety.
 * @param bool reSale - The value to reSale propriety.
 * 
 */
export function createProposalRealEstate(managerId, businessAreaId, proposalTypeId, proposalStrategyId, transactionAllocationModeId, domainEntityType, domainEntityId, useLicenseHandledByBuyer, reSale) {
  const path = `/api/agreements/proposals/`;
  const bodyRequest = {
    "managerId": managerId,
    "businessAreaId": businessAreaId,
    "proposalTypeId": proposalTypeId,
    "proposalStrategyId": proposalStrategyId,
    "transactionAllocationModeId": transactionAllocationModeId,
    "rowVersion": "",
    "domainEntityType": domainEntityType,
    "domainEntityId": domainEntityId,
    "UseLicenseHandledByBuyer": useLicenseHandledByBuyer,
    "ReSale": reSale
  };
  return postRequest(path, bodyRequest).then((data) => {
    const proposalId = data.item.id;
    return proposalId;
  });
}

/**
 * Create a proposal Legal.
 * 
 * @param int managerId - The value to managerId propriety. 
 * @param int businessAreaId - The value to businessAreaId propriety. 
 * @param int proposalTypeId - The value to proposalTypeId propriety. 
 * @param int proposalStrategyId - The value to proposalStrategyId propriety. 
 * @param int transactionAllocationModeId - The value to transactionAllocationModeId propriety. 
 * @param int domainEntityType - The value to domainEntityType propriety. 
 * @param int domainEntityId - The value to domainEntityId propriety. 
 * 
 */
export function createProposalLegal(managerId, businessAreaId, proposalTypeId, proposalStrategyId, transactionAllocationModeId, domainEntityType, domainEntityId) {
  const path = `/api/agreements/proposals/`;
  const bodyRequest = {
    "managerId": managerId,
    "businessAreaId": businessAreaId,
    "proposalTypeId": proposalTypeId,
    "proposalStrategyId": proposalStrategyId,
    "transactionAllocationModeId": transactionAllocationModeId,
    "rowVersion": "",
    "domainEntityType": domainEntityType,
    "domainEntityId": domainEntityId
  };
  return postRequest(path, bodyRequest).then((data) => {
    const proposalId = data.item.id;
    return proposalId;
  });
}

/**
 * Add a proposal payment to a proposal.
 * 
 * @param int proposalId - The value to proposalId propriety. 
 * @param int amount - The value to amount propriety. 
 * @param int transactionTypeId - The value to transactionTypeId propriety. 
 * @param int amountPerPayment - The value to amountPerPayment propriety. 
 * @param int recurrencyValue - The value to recurrencyValue propriety. 
 * @param int paymentDay - The value to transactionAllocationModeId propriety.  
 * 
 * @exemple
 * addProposalPayment(3068423, 20000.00, 10, 5000.00, 4, 21);
 */
export function addProposalPayment(proposalId, amount, transactionTypeId, amountPerPayment, recurrencyValue) {
  const path = `/api/agreements/proposalpayments`;
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  let formattedDate = currentDate.toISOString();
  const bodyRequest = {
    "amount": amount,
    "resetAmount": true,
    "transactionTypeId": transactionTypeId,
    "definedByAmount": true,
    "amountPerPayment": amountPerPayment,
    "recurrency": "1,6",
    "paymentDay": currentDate.getDate(),
    "paymentDate": formattedDate,
    "proposalId": proposalId,
    "recurrencyValue": recurrencyValue,
    "recurrencyUnitId": "6",
    "rowVersion": ""
  }
  postRequest(path, bodyRequest);
}

/**
 * Add a proposal payment method to a proposal.
 * 
 * @param int proposalId - The value to proposalId propriety. 
 * @param int paymentMethodId - The value to paymentMethodId propriety. 
 * @param int paymentSubMethodId - The value to paymentSubMethodId propriety.   
 * 
 * @exemple
 * addProposalPaymentMethod(3068423, 1, 3);
 */
export function addProposalPaymentMethod(proposalId, paymentMethodId, paymentSubMethodId) {
  const path = `/api/agreements/proposalpaymentmethod/${proposalId}/paymentmethods`;
  const bodyRequest = {
    "isPreferential": true,
    "MovePaymentMethod": false,
    "externalPaymentMethodId": null,
    "paymentMethodId": paymentMethodId,
    "paymentSubMethodId": paymentSubMethodId,
    "proposalId": proposalId,
    "rowVersion": ""
  }
  postRequest(path, bodyRequest);
}

/**
 * Add an intervenient to a proposal.
 * 
 * @param int proposalId - The value to proposalId propriety. 
 * @param bool isPreferential - The value to isPreferential propriety. 
 * @param int intervenientId - The value to intervenientId propriety.  
 * 
 * @exemple
 * addReviewer(3068423, 1);
 */
export function addIntervenient(proposalId, isPreferential, intervenientId) {
  const path = `/api/agreements/proposalfocusintervenients`;
  const bodyRequest = {
    "isPreferential": isPreferential,
    "isEntity": true,
    "intervenientId": intervenientId,
    "proposalId": proposalId,
    "entityId": intervenientId,
    "rowVersion": ""
  }
  postRequest(path, bodyRequest);
}

/**
 * Change the status of the proposals from an asset to Canceled.
 * 
 * @param int assetId - The identifier of the asset to update. 
 * 
 */
export function cancelProposalsFromAnAsset(assetId) {
  const pathandParameters = `/api/agreements/proposals/managerperspective?domainEntityId=8&id=${assetId}&filters=all+equ+true&first=0&count=15&orderBy=statusId&countTotalRecords=true`;
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

/**
 * Create a proposal.
 * 
 * @param proposal - An object with the proposal paramaters.  
 * 
 * @field statusId = 1 - Draft / 2 - Waiting Review / 3 - Waiting Review Acknowledge / 4 - Waiting Decision / 5 - Active / 6 - Rejected / 7 - Canceled / 8 - Closed / 9 - Aborted
 * @exemple
 * const proposal = {
 *  "statusId": 2,
 *  "managerId": 1,
 *  "businessAreaId": 1,
 *  "proposalTypeId": 3,
 *  "proposalStrategyId": 3,
 *  "transactionAllocationModeId": 2, 
 *  "domainEntityType": 8,
 *  "domainEntityId": assetId,
 *  "useLicenseHandledByBuyer": true,
 *  "reSale": false,
 *  "proposalPayment": {
 *    "amount": 20000, 
 *    "transactionTypeId": 10, 
 *    "amountPerPayment": 5000, 
 *    "paymentDay": 21, 
 *    "recurrencyValue": 4 
 *  },
 *  "proposalPaymentMethod": { 
 *    "paymentMethodId": 1,
 *    "paymentSubMethodId": 3 
 *  },
 *  "reviwer": { 
 *    "reviewerId": 2171 
 *  }
 * };
 * CreateProposal(proposal);
 */
export function createProposal(proposal) {
  const path = `/api/agreements/proposals/`;
  let proposalId;

  return postRequest(path, {
    "managerId": proposal.managerId,
    "businessAreaId": proposal.businessAreaId,
    "proposalTypeId": proposal.proposalTypeId,
    "proposalStrategyId": proposal.proposalStrategyId,
    "transactionAllocationModeId": proposal.transactionAllocationModeId,
    "rowVersion": "",
    "domainEntityType": proposal.domainEntityType,
    "domainEntityId": proposal.domainEntityId,
    "useLicenseHandledByBuyer": proposal.useLicenseHandledByBuyer,
    "reSale": proposal.reSale
  }).then((data) => {
    proposalId = data.item.id;
    if (proposal.proposalPayment != null) {
      return addProposalPayment(proposalId, proposal.proposalPayment.amount, proposal.proposalPayment.transactionTypeId, proposal.proposalPayment.amountPerPayment, proposal.proposalPayment.recurrencyValue, proposal.proposalPayment.paymentDay);
    }
    return proposalId;
  }).then(() => {
    if (proposal.proposalPaymentMethod != null) {
      return addProposalPaymentMethod(proposalId, proposal.proposalPaymentMethod.paymentMethodId, proposal.proposalPaymentMethod.paymentSubMethodId);
    }
    return proposalId;
  }).then(() => {
    if (proposal.reviewer != null) {
      return addReviewer(proposalId, proposal.reviewer.reviewerId);
    }
    return proposalId;
  }).then(() => {
    return editProposal(proposalId, proposal.managerId, proposal.statusId);
  }).then(() => proposalId);
}

export function getProposalModel(statusId, managerId, proposalTypeId,
  proposalStrategyId, domainEntityType, domainEntityId, amount, transactionTypeId,
  amountPerPayment, paymentDay, recurrencyValue, paymentMethodId,
  paymentSubMethodId, reviewerId) {

  let newReviewerId;
  let newProposalPayment;
  let newProposalPaymentMethod;

  if (reviewerId === null) {
    newReviewerId = null
  }
  else {
    newReviewerId = {
      "reviewerId": reviewerId
    }
  }

  if (amount === null) {
    newProposalPayment = null
  }
  else {
    newProposalPayment = {
      "amount": amount,
      "transactionTypeId": transactionTypeId,
      "amountPerPayment": amountPerPayment,
      "paymentDay": paymentDay,
      "recurrencyValue": recurrencyValue
    }
  }

  if (paymentMethodId === null) {
    newProposalPaymentMethod = null
  }
  else {
    newProposalPaymentMethod = {
      "paymentMethodId": paymentMethodId,
      "paymentSubMethodId": paymentSubMethodId
    }
  }

  if (paymentDay === null) {
    let currentDate = new Date();
    paymentDay = currentDate.getDate();
  }


  return {
    "statusId": statusId,
    "managerId": managerId,
    "businessAreaId": 1,
    "proposalTypeId": proposalTypeId,
    "proposalStrategyId": proposalStrategyId,
    "transactionAllocationModeId": 2,
    "domainEntityType": domainEntityType,
    "domainEntityId": domainEntityId,
    "useLicenseHandledByBuyer": true,
    "reSale": false,
    "proposalPayment": newProposalPayment,
    "proposalPaymentMethod": newProposalPaymentMethod,
    "reviewer": newReviewerId
  };
}

/**
* Gets the first register from a collection of assets and returns its id.
*
* @param String pathAndParameters - path and parameters for the Url.
* @returns Returns the id of the first register of a collection.
*
* @example
* const result = getOneLegalCaseInstanceIdByFilter(`/api/legal/legalcases/15/instances?first=0&count=1&countTotalRecords=true`);
*/
export function getOneLegalCaseInstanceIdByFilter(pathAndParameters) {
  return getRequest(pathAndParameters).then((data) => {
    const firstItemId = data.items.length > 0 ? data.items[0].id : 0;
    return String(firstItemId);
  })
}
