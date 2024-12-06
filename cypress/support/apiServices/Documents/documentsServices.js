import { getRequest, postRequest } from "../apiServices"
import { faker } from '@faker-js/faker';

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
const path = `/api/documentation/documents/`;
let bodyRequest;

/**
 * Create a document.
 *  @returns Returns the name of created document.
 * 
 */
export function createDocument(documentTab, fileId) {
  bodyRequest = {
    fileId: fileId,
    title: `testautomationCreation${documentTab}` + faker.internet.userName(),
    documentCategoryId: 1,
    documentTypeId: 1,
    documentStatusId: 2,
    isOriginalDocument: false,
    isConfidential: false,
    documentDirectionId: 4,
    catalogAttachments: false,
  };
  return postRequest(path, bodyRequest);
}

/**
 * Create a document in Recent tab for editing.
 *  @returns Returns the name of created document.
 *
 */
export function createDocumentRecent(documentTab, fileId) {
  bodyRequest = {
    fileId: fileId,
    title: `testautomationEdit${documentTab}` + faker.internet.userName(),
    documentCategoryId: 1,
    documentTypeId: 1,
    documentStatusId: 2,
    isOriginalDocument: false,
    isConfidential: false,
    documentDirectionId: 4,
    catalogAttachments: false,
  };
  return postRequest(path, bodyRequest);
}

/**
 * Create a document.
 *  @returns Returns the name of created document.
 *
 */
export function createDocumentSent(documentTab, fileId) {
  bodyRequest = {
    fileId: fileId,
    title: `testautomationCreation${documentTab}` + faker.internet.userName(),
    documentCategoryId: 1,
    documentTypeId: 1,
    documentStatusId: 2,
    isOriginalDocument: false,
    isConfidential: false,
    documentDirectionId: 2,
    catalogAttachments: false,
  };
  return postRequest(path, bodyRequest);
}

/**
 * Create a document.
 *  @returns Returns the name of created document.
 *
 */
export function createDocumentReceived(documentTab, fileId) {
  bodyRequest = {
    fileId: fileId,
    title: `testautomationCreation${documentTab}` + faker.internet.userName(),
    documentCategoryId: 1,
    documentTypeId: 1,
    documentStatusId: 2,
    isOriginalDocument: false,
    isConfidential: false,
    documentDirectionId: 1,
    catalogAttachments: false,
  };
  return postRequest(path, bodyRequest);
}

/**
   * Create a document.
   *  @returns Returns the name of created document.
   *
   */
export function createDocumentDebt(title, fileId) {
  bodyRequest = {
    fileId: fileId,
    title: `automation${title}` + faker.internet.userName(),
    documentCategoryId: 2,
    documentTypeId: 5,
    documentStatusId: 2,
    isOriginalDocument: false,
    isConfidential: false,
    documentDirectionId: 4,
    catalogAttachments: false,
    relations: [
      {
        id: 361000,
        entityId: 361000,
        amount: 0,
        domainEntityDescription: "Debt",
        domainEntityId: 7,
        enableAdvancedSearch: false,
        entityDescription: "Non-Financial",
      },
    ],
  };
  return postRequest(path, bodyRequest);
}


/**
   * Create a document.
   *  @returns Returns the name of created document.
   *
   */
export function createDocumentCashflow(title, fileId) {
  bodyRequest = {
    fileId: fileId,
    title: `automation${title}` + faker.internet.userName(),
    documentCategoryId: 2,
    documentTypeId: 5,
    documentStatusId: 2,
    isOriginalDocument: false,
    isConfidential: false,
    documentDirectionId: 4,
    catalogAttachments: false,
    relations: [
      {
        domainEntityId: 22,
        domainEntityDescription: "Cash Flow",
        entityDescription: "1 MR VAZ DEPINA FAUSTO EMANUEL",
        amount: 0.0,
        id: 1277058,
        documentId: 0,
        domainEntityIdSubType: null,
        entityId: 1277058,
        subEntityId: null,
      },
    ],
  };
  return postRequest(path, bodyRequest);
}


/**
   * Create a document.
   *  @returns Returns the name of created document.
   *
   */
export function createDocumentCustomer(title, fileId) {
  bodyRequest = {
    fileId: fileId,
    title: `automation${title}` + faker.internet.userName(),
    documentCategoryId: 2,
    documentTypeId: 5,
    documentStatusId: 2,
    isOriginalDocument: false,
    isConfidential: false,
    documentDirectionId: 4,
    catalogAttachments: false,
  };
  return postRequest(path, bodyRequest);
}



/**
   * Create a document.
   *  @returns Returns the name of created document.
   *
   */
export function createDocumentLegalCase(title, fileId) {
  bodyRequest = {
    fileId: fileId,
    title: `automation${title}` + faker.internet.userName(),
    documentCategoryId: 1,
    documentTypeId: 4,
    documentStatusId: 2,
    isOriginalDocument: false,
    isConfidential: false,
    documentDirectionId: 4,
    catalogAttachments: false,
    relations: [
      {
        domainEntityId: 9,
        domainEntityDescription: "Legal Case",
        entityDescription: "2600/15.5T8LSB",
        amount: 0.0,
        id: 153486,
        documentId: 0,
        domainEntityIdSubType: null,
        entityId: 153486,
        subEntityId: null,
      },
    ],
  };
  return postRequest(path, bodyRequest);
}

/**
   * Create a document.
   *  @returns Returns the name of created document.
   *
   */
export function createDocumentAsset(title, fileId) {
  bodyRequest = {
    fileId: fileId,
    title: `automation${title}` + faker.internet.userName(),
    documentCategoryId: 1,
    documentTypeId: 4,
    documentStatusId: 2,
    isOriginalDocument: false,
    isConfidential: false,
    documentDirectionId: 4,
    catalogAttachments: false,
    relations: [
      {
        domainEntityId: 8,
        domainEntityDescription: "Asset",
        entityDescription: "Other",
        amount: 0.0,
        id: 2,
        documentId: 0,
        domainEntityIdSubType: null,
        entityId: 2,
        subEntityId: null,
      },
    ],
  };
  return postRequest(path, bodyRequest);
}