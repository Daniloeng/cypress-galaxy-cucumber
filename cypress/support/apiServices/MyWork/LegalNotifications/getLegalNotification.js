import { getToken, getBaseURL } from "../../../common";
 
/**
 * Function to get a proposal.
 *
 * @param int managerId - Manager Id. 
 * 
 */
export function getLegalNotification(legalnotificationId, token) {     
    const API_URL_HOST = getBaseURL();
    const apiUrl = `${API_URL_HOST}/api/legal/legalnotifications/${legalnotificationId}`;
    return cy.wrap().then(() => {
        return fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
      .then((response) => { 
        return response.json();
      }).then((result) => { 
        console.log(result)
        return cy.wrap(result);
      });
    });
  } 