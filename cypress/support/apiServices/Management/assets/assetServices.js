import { getRequest } from "../../apiServices"
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
 * Gets the proposals from an asset to Canceled.
 * 
 * @param int assetId - The identifier of the asset to update. 
 * 
 */
export function getProposalsFromAnAsset(assetId) {
  const pathandParameters = `/api/agreements/proposals/managerperspective?domainEntityId=8&id=${assetId}&filters=all+equ+true&first=0&count=15&orderBy=statusId&countTotalRecords=true`;
  return getProposalsIdsByFilter(pathandParameters).then((proposalsIds) => {
    if (proposalsIds.length > 0) {
      return proposalsIds
    }
    return [];
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
