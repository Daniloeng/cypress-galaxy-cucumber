Cypress.Commands.add('getToken', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('LOGIN_OAUTH2'),
      form: true,
      body: {
        client_id: Cypress.env('CLIENT_ID'),
        scope: Cypress.env('SCOPE'),
        client_secret: Cypress.env('CLIENT_SECRET'),
        grant_type: Cypress.env('GRANT_TYPE')
      }
    }).its('body').then(body => {
      const token = body.access_token;      
      return token;
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
