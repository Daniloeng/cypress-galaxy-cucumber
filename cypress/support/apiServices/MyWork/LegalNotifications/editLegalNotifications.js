import { getToken, getBaseURL } from "../../../common";
import { getLegalNotification } from "./getLegalNotification"; 

/**
 * Function edits a proposal.
 *
 * @param int managerId - Manager Id. 
 * 
 */
export function editLegalNotifications(legalNotificationsId, currentStatus) {    
    const API_URL_HOST = getBaseURL();
	  const path = `/api/legal/legalnotifications/`;
    const apiUrl = `${API_URL_HOST}${path}${legalNotificationsId}`;
 
    getToken().then((token) => {  
        getLegalNotification(legalNotificationsId, token).then((legal) => { 
    const bodyRequest = {
      "id": legalNotificationsId,
      "priorityId": legal.priorityId,
      "dueDate": legal.dueDate,
      "legalNotificationStatusId": currentStatus,
      "legalCaseInstanceId": legal.legalCaseInstanceId,
      "transactionTypeId": legal.transactionTypeId,
      "documentId": legal.documentId,
      "comment": legal.comment,
      "legalNotificationRelatedEntities": legal.legalNotificationRelatedEntities,
      "requesterId": legal.requesterId
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