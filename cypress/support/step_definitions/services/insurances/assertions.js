
import { Then } from "@badeball/cypress-cucumber-preprocessor";



Then(`The Insurance should be created`, () => {
  cy.wait("@createdInsurance").then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(201);
  });
});

Then(`The type of view {string} selected should be shown`, (typeOfView) => {
  if(typeOfView == 'Cards'){
    cy.get('.p-datascroller-content').should('exist');
  }
  else{
    cy.get('.p-datatable-wrapper').should('exist');
  }
});

Then(`The Insurance should be edited`, () => {
  cy.wait("@editedInsurance").then((beResponse) => {
    expect(beResponse.response.statusCode).to.equal(200);
  });
});
