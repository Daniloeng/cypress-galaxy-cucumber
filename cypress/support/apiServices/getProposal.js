import { getToken, getBaseURL } from "../common";
 
/**
 * Function to get a proposal.
 *
 * @param int managerId - Manager Id. 
 * 
 */
export function getProposal(proposalId, token) {     
    const API_URL_HOST = getBaseURL();
    const apiUrl = `${API_URL_HOST}/api/agreements/proposals/${proposalId}`;
    return cy.wrap().then(() => {
        return fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
      .then((response) => { 
        return response.json();
      }).then((result) => { 
        return cy.wrap(result);
      });
    });
  } 