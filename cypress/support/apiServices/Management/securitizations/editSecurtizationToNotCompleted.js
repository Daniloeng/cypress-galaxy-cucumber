import { getToken, getBaseURL } from "../../../common";
import { getSecuritization } from "./getSecuritization";

/**
 * Function edits a proposal.
 *
 * @param int managerId - Manager Id. 
 * 
 */
export function editSecurtizationToNotCompleted() {    
    const API_URL_HOST = getBaseURL();
	  const path = `/api/debts/Securitization/6`;
    const apiUrl = `${API_URL_HOST}${path}`;
 
    getToken().then((token) => {  
      getSecuritization(6, token).then((securitizationObject) => { 
    const bodyRequest = 
    {
      "id": securitizationObject.id,
      "name": securitizationObject.name,
      "securitizationName": securitizationObject.securitizationName,
      "description": securitizationObject.description,
      "entityId": securitizationObject.entityId,
      "isCompleted": false,
      "securitizationDate": securitizationObject.securitizationDate,
      "securitizationEndDate": securitizationObject.securitizationEndDate,
      "documentId": securitizationObject.documentId,
      "rowVersion": securitizationObject.rowVersion
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
        console.log('Edit Response:', response);
      });
    });
  });
} 