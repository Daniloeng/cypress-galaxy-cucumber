import { getRequest, putRequest, postRequest } from "../../apiServices"

/**
 * Function to get a Securitization.
 *
 * @param int securitizationId - Securitization Id. 
 * 
 */
export function getSecuritization(securitizationId) {      
    var path = `/api/debts/Securitization/${securitizationId}`;
    return getRequest(path).then((data) => {
      return cy.wrap(data)
    })
  }

/**
 * Function edits a Securitization.
 *
 * @param int securitizationId - Securitization Id. 
 * @param bool isCompleted - Indicate if a secutitization is completed. 
 * 
 */
export function editSecurtization(securitizationId, isCompleted) {     
    const path = `/api/debts/Securitization/${securitizationId}`; 
    getSecuritization(securitizationId).then((securitizationObject) => { 
    const bodyRequest = 
    {
      "id": securitizationObject.id,
      "name": securitizationObject.name,
      "securitizationName": securitizationObject.securitizationName,
      "description": securitizationObject.description,
      "entityId": securitizationObject.entityId,
      "isCompleted": isCompleted,
      "securitizationDate": securitizationObject.securitizationDate,
      "securitizationEndDate": securitizationObject.securitizationEndDate,
      "documentId": securitizationObject.documentId,
      "rowVersion": securitizationObject.rowVersion
    };

    putRequest(path, proposal.id, bodyRequest);
  });
}