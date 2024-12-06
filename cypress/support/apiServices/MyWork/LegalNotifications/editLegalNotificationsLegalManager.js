import { getToken, getBaseURL } from "../../../common";
import { getLegalNotification } from "./getLegalNotification"; 

/**
 * Function edits a proposal.
 *
 * @param int managerId - Manager Id. 
 * 
 */
export function editLegalNotificationsLegalManager(legalNotificationsId) {    
    const API_URL_HOST = getBaseURL();
	  const path = `/api/legal/legalnotifications/assign/`;
    const apiUrl = `${API_URL_HOST}${path}${legalNotificationsId}`;
 
    getToken().then((token) => {  
        getLegalNotification(legalNotificationsId, token).then((legal) => { 
    const bodyRequest = 
    {
        "priorityId": 1,
        "dueDate": "2023-10-19T00:00:00",
        "comment": "environment",
        "assignees": 
        [
          {
            "userId": 1,
            "roleId": 6,
            "teamId": null,
            "assignee": "Galaxy",
            "roleName": "Legal Manager",
            "securityGroupId": 1,
            "securityGroupTypeId": 1
          }
        ]
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