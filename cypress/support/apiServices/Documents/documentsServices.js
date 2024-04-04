import { getRequest, putRequest, postRequest } from "../apiServices"

/*
* Function to get a LegalNotification.
*
* @param int legalNotificationId - legalNotification Id. 
* 
*/
export function getDocument(documentId) {
  const path = `/api/documentation/documents/${documentId}`;
  return getRequest(path).then((data) => {
    return cy.wrap(data)
  })
}

/**
 * Gets the first register from a collection of Documents and returns its id.
 *
 * @param String pathAndParameters - path and parameters for the Url.
 * @returns Returns the id of the first register of a collection.
 *
 * @example
 * const result = getDocumentsByFilter(`/api/documentation/documents?first=0&count=15&orderBy=documentDirectionId+desc&countTotalRecords=true`);
 */
export function getDocumentsByFilter(pathAndParameters) {
  return getRequest(pathAndParameters).then((data) => {
    const firstItemId = data.items.length > 0 ? data.items[0].id : 0;
    return String(firstItemId);
  })
}

/**
 * Create a document.
 *  @returns Returns the name of created document.
 * 
 */
export function createDocument() {
  const path = `/api/documentation/documents/`;
  const bodyRequest = {
    "fileId": 27475538,
    "title": "testautomation1212",
    "documentCategoryId": 1,
    "documentTypeId": 4,
    "documentStatusId": 2,
    "isOriginalDocument": false,
    "isConfidential": false,
    "documentDirectionId": 4,
    "catalogAttachments": false
  };
  return postRequest(path, bodyRequest);
}