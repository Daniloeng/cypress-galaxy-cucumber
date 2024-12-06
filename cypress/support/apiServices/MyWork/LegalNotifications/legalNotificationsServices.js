import { getRequest, putRequest, postRequest } from "../../apiServices"

/**
 * Function to get a user.
 *
 * @param int userId - User Id. 
 * 
 */
export function getUser(userId) {      
    const path = `/api/security/users/${userId}`; 
  return getRequest(path).then((data) => {
    return cy.wrap(data)
  })
}

/*
* Function to get a LegalNotification.
*
* @param int legalNotificationId - legalNotification Id. 
* 
*/
export function getLegalNotification(legalNotificationId) {      
   const path = `/api/legal/legalnotifications/${legalNotificationId}`; 
 return getRequest(path).then((data) => {
   return cy.wrap(data)
 })
}  

/**
 * Gets the first register from a collection of LegalNotifications and returns its id.
 *
 * @param String pathAndParameters - path and parameters for the Url.
 * @returns Returns the id of the first register of a collection.
 *
 * @example
 * const result = getOneLegalNotificationIdByFilter(`/api/agreements/proposals/managerperspective?domainEntityId=undefined&id=undefined&filters=all+equ+true&first=0&count=15&orderBy=statusDate&filters=statusId+equ+4&filters=proposalTypeId+equ+1&filters=proposalStrategyId+equ+17&countTotalRecords=true`);
 */
export function getOneLegalNotificationIdByFilter(pathAndParameters) {
  return getRequest(pathAndParameters).then((data) => {
    const firstItemId = data.items.length > 0 ? data.items[0].id : 0;
    return String(firstItemId);
  })
}

/**
 * Edits proprieties from a LegalNotification.
 *
 * @param int legalNotificationId - The identifier of the proposal to update.
 * @param int currentStatus - The new value to currentStatus propriety.
 *
 */
export function editLegalNotification(legalNotificationId, currentStatus) {
  const path = `/api/legal/legalnotifications/`;
  getLegalNotification(legalNotificationId).then((legal) => { 
    const bodyRequest = {
      "id": legalNotificationId,
      "priorityId": legal.priorityId,
      "dueDate": legal.dueDate,
      "legalNotificationStatusId": currentStatus,
      "legalCaseInstanceId": legal.legalCaseInstanceId,
      "transactionTypeId": legal.transactionTypeId,
      "documentId": legal.documentId,
      "comment": legal.comment,
      "legalNotificationRelatedEntities": legal.legalNotificationRelatedEntities,
      "requesterId": legal.requesterId
      };

      putRequest(path, legalNotificationId, bodyRequest);
    });
  }

/**
 * Edits proprieties from a LegalNotificationsLegalManager.
 *
 * @param int legalNotificationId - The identifier of the proposal to update.
 *
 */
export function editLegalNotificationsLegalManager(legalNotificationId) {
  const path = `/api/legal/legalnotifications/assign/`;
  getLegalNotification(legalNotificationId).then(() => {
    const bodyRequest = {
      priorityId: 1,
      dueDate: "2023-10-19T00:00:00",
      comment: "environment",
      assignees: [
        {
          userId: 1,
          roleId: 6,
          teamId: null,
          assignee: "Galaxy",
          roleName: "Legal Manager",
          securityGroupId: 1,
          securityGroupTypeId: 1,
        },
      ],
    };
    putRequest(path, legalNotificationId, bodyRequest);
  });
  }

 /**
 * Edits proprieties from a editLegalNotificationsReportUserLeader.
 *
 * @param int userId - The identifier of the user to update.
 * @param int reportToUserId - The identifier of the reportToUserId to update.
 *
 */ 
export function editLegalNotificationsReportUserLeader(userId, reportToUserId) {
  const path = `/api/security/users/${userId}`;
  getUser(505).then((user) => { 
    const bodyRequest = {
      "id": user.id,
      "username": user.username,
      "name": user.name,
      "organizationUnitId": user.organizationUnitId,
      "function": user.function,
      "businessAreaIds": user.businessAreaIds,
      "reportToUserId": reportToUserId,
      "email": user.email,
      "phoneExtension": user.phoneExtension,
      "mobilePhone": user.mobilePhone,
      "office": user.office,
      "roleIds": user.roleIds,
      "isActive": true,
      "rowVersion": user.rowVersion
    };

      putRequest(path, legalNotificationId, bodyRequest);
    });
  } 