import { getRequest, postRequest, deleteRequest, putRequest } from "../../apiServices"
import { getProposalsIdsByFilter, getProposal, editProposal } from "../proposals/proposalServices";

/**
 * Gets the first register from a collection of assets and returns its id.
 *
 * @param String pathAndParameters - path and parameters for the Url.
 * @returns Returns the id of the first register of a collection.
 *
 * @example
 * const result = getFirstRecord(`/api/assets/managerperspective?filters=all+equ+true&first=0&count=15&filters=assetStatusId+equ+2&countTotalRecords=true`);
 */
export function getOneAssetIdByFilter(pathAndParameters) {
  return getRequest(pathAndParameters).then((data) => {
    const firstItemId = data.items.length > 0 ? data.items[0].id : 0;
    return String(firstItemId);
  })
}

/**
 * Gets the first register from a collection of assets and returns its body.
 *
 * @param String pathAndParameters - path and parameters for the Url.
 * @returns Returns the item of the first register of a collection.
 *
 * @example
 * const result = getFirstRecord(`/api/assets/managerperspective?filters=all+equ+true&first=0&count=15&filters=assetStatusId+equ+2&countTotalRecords=true`);
 */
export function getAssetByFilter(pathAndParameters) {
  return getRequest(pathAndParameters).then((data) => {
    const asset = data.items.length > 0 ? data.items[0] : 0;
    return asset;
  })
}

/**
 * Gets the proposals from an asset to Canceled.
 * 
 * @param int assetId - The identifier of the asset to update. 
 * 
 */
export function getProposalsFromAnAsset(assetId) {
  const pathAndParameters = `/api/agreements/proposals/managerperspective?domainEntityId=8&id=${assetId}&filters=all+equ+true&first=0&count=15&orderBy=statusId&countTotalRecords=true`;
  return getProposalsIdsByFilter(pathAndParameters).then((proposalsIds) => {
    if (proposalsIds.length > 0) {
      return proposalsIds
    }
    return [];
  })
}

/**
 * Edit asset collections.
 * 
 * @param int assetId - The identifier of the asset to update. 
 * @param int portfolioId - The identifier of the portfolio. 
 * 
 */
export function changeAssetBankCollectionsByAssetIdAndPortfolioId(assetId, portfolioId) { 
  const pathAndParameters = `/api/portfolios/${portfolioId}/assets/${assetId}`;
  let asset;
  getRequest(pathAndParameters).then((data) => {
    asset = {
      assetId: assetId,
      portfolioId: portfolioId,
      existsJudicialSale: false,
      assetCategoryId: 3,
      assetCategoryDescription: "Property",
      assetTypeId: 11,
      assetSubTypeId: null,
      assetStatusId: 2,
      portfolioAssetStatusDate: null,
      assetStatusReasonId: null,
      portfolioAssetManagementPhaseId: null,
      collectionsBankAccountId: 162,
      belongsToEntityId: 1049391,
      servicerEntityId: 486325,
      originatorEntityId: 477236,
      originatorAssetId: "Yellow Nuance_11674",
      pid: null,
      managerId: null,
    };
    // debugger
    putRequest(`/api/assets/`, assetId, asset)
  })
}

/**
 * Change the status of the proposals from an asset to Canceled.
 * 
 * @param int assetId - The identifier of the asset to update. 
 * 
 */
export function cancelProposalsFromAnAsset(assetId) {
  const pathandParameters = `/api/agreements/proposals/managerperspective?domainEntityId=8&id=${assetId}&filters=all+equ+true&first=0&count=15&orderBy=statusId&filters=statusId+equ+5&countTotalRecords=true`
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

export function deleteOwnershipAsset(assetId, ownerId) {
  const path = `/api/assets/assetownership/${assetId}/${ownerId}`;
  return deleteRequest(path)
}

/**
 * Create a Asset portion
 * 
 * 
 */
export function createPortion(numberOfPortions) {
  const path = `/api/portfolios/188/assets/3478/portions`;
  bodyRequest = {
    id: 0,
    assetId: 3478,
    portfolioId: 188,
    numberOfPortions: numberOfPortions,
    portionWeight: null,
    portionNumerator: null,
    portionDenominator: null,
    assetStatusId: 1,
    assetStatusReasonId: 5,
    previousAssetId: null,
    lienIds: null,
    belongsToEntityId: null,
    servicerEntityId: null,
    collectionsBankAccountId: null,
    managerId: null,
    originatorAssetId: null,
    originatorEntityId: 18280,
    assetTypeId: 11,
    assetSubTypeId: null,
    assetCategoryDescription: null,
    created: null,
    createdBy: null,
    createdOnBehalfOf: null,
    modified: "0001-01-01T00:00:00",
    modifiedBy: null,
    modifiedOnBehalfOf: null,
    rowVersion: "",
  };

  return postRequest(path, bodyRequest);
}

export function deleteClamedAsset(legalCaseInstanceId, claimedAssetId) {
  const path = `/api/legal/legalcaseinstances/${legalCaseInstanceId}/portfolioassets`;
  body = [
    claimedAssetId
  ]
  return deleteRequest(path, body)
}

/**
 * Create a Asset Lien
 * 
 * 
 */
export function createLien() {
  const path = `/api/assets/3478/liens`;
  bodyRequest = {
    assetId: 3478,
    lienPosition: 1,
    assetLienTypeId: 1,
    assetLienStatusId: 3,
    belongsToCustomers: [175207],
    modified: "0001-01-01T00:00:00",
    rowVersion: "",
  };

  return postRequest(path, bodyRequest);
}

export function deleteColateralOfDebtAsset(portfolioId, assetId, debtId) {
  const path = `/api/portfolios/${portfolioId}/assets/${assetId}/debts/${debtId}`;
  return deleteRequest(path)
}


