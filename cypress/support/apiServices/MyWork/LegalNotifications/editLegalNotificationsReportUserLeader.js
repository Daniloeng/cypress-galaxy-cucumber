import { getToken, getBaseURL } from "../../../common";
import { getUser } from "./getUser";  

/**
 * Function edits a proposal.
 *
 * @param int managerId - Manager Id. 
 * 
 */
export function editLegalNotificationsReportUserLeader() {    
    const API_URL_HOST = getBaseURL();
	  const path = `/api/security/users/505`;
    const apiUrl = `${API_URL_HOST}${path}`;
 
    getToken().then((token) => {  
        getUser(505, token).then((user) => { 
    const bodyRequest = 
    {
      "id": user.id,
      "username": user.username,
      "name": user.name,
      "organizationUnitId": user.organizationUnitId,
      "function": user.function,
      "businessAreaIds": user.businessAreaIds,
      "reportToUserId": 1,
      "email": user.email,
      "phoneExtension": user.phoneExtension,
      "mobilePhone": user.mobilePhone,
      "office": user.office,
      "roleIds": user.roleIds,
      "isActive": true,
      "rowVersion": user.rowVersion
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