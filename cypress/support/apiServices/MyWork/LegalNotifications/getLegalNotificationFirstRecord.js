import { getToken, getBaseURL } from "../../../common";

/**
 * Function gets the first register of a collection and returns its id.
 *
 * @param String pathAndParameters - path and parameters for the Url. 
 * @returns Returns the id of the first register of a collection. 
 *
 * @example
 * const result = getFirstRecord(`/api/agreements/proposals/managerperspective?domainEntityId=undefined&id=undefined&filters=all+equ+true&first=0&count=15&orderBy=statusDate&filters=statusId+equ+4&filters=proposalTypeId+equ+1&filters=proposalStrategyId+equ+17&countTotalRecords=true`);
 * console.log(result); // Output: 1234
 */
export function getLegalNotificationFirstRecord(pathAndParameters) {   
    const API_URL_HOST = getBaseURL();
    const apiUrl = `${API_URL_HOST}${pathAndParameters}`;
    
    return cy.wrap().then(() => {
      return getToken().then({timeout:30000}, (token) => {
        return fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }).then((response) => {
        return response.json();
      }).then((data) => { 
        const firstItemId = data.items.length > 0 ? data.items[0].id : 0;
        console.log(firstItemId)
        return String(firstItemId);
      })
    });
  } 