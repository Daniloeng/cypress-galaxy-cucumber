
const API_URL_HOST = Cypress.env('BASE_URL');

/**
 * Makes a GET request to a specified API endpoint. .
 *
 * @param String pathAndParameters - path and parameters for the Url. 
 * @returns Returns the dafa from the requested url. 
 * @throws {Error} If the request encounters an error or the response status is not OK.
 * 
 * @example
 * const result = getFirstRecord(`/api/agreements/proposals/managerperspective?domainEntityId=undefined&id=undefined&filters=all+equ+true&first=0&count=15&orderBy=statusDate&filters=statusId+equ+4&filters=proposalTypeId+equ+1&filters=proposalStrategyId+equ+17&countTotalRecords=true`);
 */
export function getRequest(pathAndParameters) {

  const apiUrl = `${API_URL_HOST}${pathAndParameters}`;
  return cy.wrap().then(() => {
    return cy.getToken().then((token) => {
      return fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }).then((response) => {
      if (!response.Status === 200) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = response.json();
      console.log('GET Request Status:', response.statusText, 'Data:', data)
      return data;
    })
  });
}


/**
 * Makes a PUT request to a specified API endpoint with the provided data.
 *
 * @param {string} path - The path or resource identifier in the API endpoint.
 * @param {string} id - The identifier of the resource to update.
 * @param {Object} requestData - The data to be sent in the PUT request body.
 * 
 * @throws {Error} If the request encounters an error or the response status is not OK.
 */
export function putRequest(path, id, requestData) {
  const apiUrl = `${API_URL_HOST}${path}${id}`;
  cy.getToken().then((token) => {
    cy.request({
      method: 'PUT',
      url: apiUrl,
      body: requestData,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then((response) => {
      if (!response.Status === 200) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      console.log('PUT Request Status:', response.statusText)
    });
  });
}

/**
 * Makes a POST request to a specified API endpoint with the provided data.
 * 
 * @param {string} path - The path or resource identifier in the API endpoint.
 * @param {Object} requestData - The data to be sent in the POST request body.
 * 
 * @throws {Error} If the request encounters an error or the response status is not Created.
 */
export function postRequest(path, requestData) {
  const apiUrl = `${API_URL_HOST}${path}`;
  return cy.getToken().then((token) => {
    return cy.request({
      method: 'POST',
      url: apiUrl,
      body: requestData,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.status !== 201) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      console.log('POST Request Status:', response.statusText);
      return response.body;
    });
  });
}